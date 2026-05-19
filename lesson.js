// ========================================================
// Nawat Lesson Engine
// ========================================================

// EXERCISE_BANK comes from data.js

// ========================================================
// Lesson State
// ========================================================
let currentExercise = 0;
let score = 0;
let mistakes = 0;
let selectedAnswer = null;
let pendingLessonFailure = false;

let activeExercises = [];
let errorBank = [];
let userData = {};

// URL Params
const urlParams = new URLSearchParams(window.location.search);
const nodeParam = parseInt(urlParams.get('node')) || 1;
const stageParam = parseInt(urlParams.get('stage')) || 1;
const CORE_NODE_COUNT = 5;
const VOCAB_NODE = 6;
const MAX_NODE = 6;
const QUESTION_POOL_NODES = [1, 2, 3, 5];
const QUESTIONS_PER_SESSION = 10;
const VOCABULARY_WORDS_PER_SESSION = 20;
const MAX_PROTECTORS = 2;
const MAX_MISTAKES = 3;
const STAGE_TITLES = Object.fromEntries(
    (typeof STAGE_CONFIG !== 'undefined' ? STAGE_CONFIG : [
        { id: 1, title: 'Aprende a presentarte' },
        { id: 2, title: 'Los colores' }
    ]).map(stage => [stage.id, stage.title])
);

// Match-specific state
let matchSelected = null;
let matchedCount = 0;
let matchPairData = [];

// Translate-specific state
let answerWords = [];

function formatAnswerOptionText(text) {
    return String(text || '')
        .replace(/[¿?¡!]/g, '')
        .replace(/\.{3,}|…/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\.+$/g, '')
        .trim()
        .toLowerCase();
}

function uniqueDisplayOptions(options, correct) {
    const byDisplay = new Map();

    options.forEach(option => {
        const key = formatAnswerOptionText(option);
        if (!key) return;

        const current = byDisplay.get(key);
        if (!current || option === correct) {
            byDisplay.set(key, option);
        }
    });

    return [...byDisplay.values()];
}

function uniqueWordBankOptions(wordBank, correctWords = []) {
    const correctByDisplay = new Map();

    correctWords.forEach(word => {
        const key = formatAnswerOptionText(word);
        if (!key) return;
        const words = correctByDisplay.get(key) || [];
        words.push(word);
        correctByDisplay.set(key, words);
    });

    const chosen = [];
    const usedDisplayCounts = new Map();

    correctByDisplay.forEach((words, key) => {
        words.forEach(word => {
            chosen.push(word);
            usedDisplayCounts.set(key, (usedDisplayCounts.get(key) || 0) + 1);
        });
    });

    wordBank.forEach(word => {
        const key = formatAnswerOptionText(word);
        if (!key || usedDisplayCounts.has(key)) return;
        chosen.push(word);
        usedDisplayCounts.set(key, 1);
    });

    return chosen;
}

function init() {
    loadUserData();
    updateLessonLabels();

    if (!isLessonUnlocked(stageParam, nodeParam)) {
        window.location.href = 'index.html';
        return;
    }

    buildLesson();

    if (activeExercises.length === 0) {
        // Fallback or empty error bank
        showComplete(true);
        return;
    }

    renderExercise();
    updateProgress();
    updateLivesDisplay();

    document.getElementById('check-btn').addEventListener('click', checkAnswer);
    document.getElementById('continue-btn').addEventListener('click', nextExercise);
    document.getElementById('lesson-close').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    document.getElementById('complete-btn').addEventListener('click', finishLesson);
}

function loadUserData() {
    const saved = localStorage.getItem('nawat_user_v2');
    if (saved) {
        userData = JSON.parse(saved);
        errorBank = userData.errorBank || [];
    } else {
        userData = {};
        errorBank = [];
    }
}

function saveUserData(updater) {
    const saved = localStorage.getItem('nawat_user_v2');
    let data = saved ? JSON.parse(saved) : {};
    
    // Apply updates
    updater(data);
    
    localStorage.setItem('nawat_user_v2', JSON.stringify(data));
    userData = data;
    errorBank = data.errorBank || errorBank;
}

function updateLessonLabels() {
    const title = STAGE_TITLES[stageParam] || `Etapa ${stageParam}`;
    const lessonLabel = nodeParam === VOCAB_NODE ? 'Vocabulario' : `Lección ${nodeParam}`;
    document.title = `${lessonLabel} — ${title}`;
    const subtitle = document.querySelector('.complete-subtitle');
    if (!subtitle) return;

    subtitle.textContent = '';
    subtitle.append(nodeParam === VOCAB_NODE ? 'Has terminado la práctica de vocabulario' : 'Has terminado la lección');
    subtitle.appendChild(document.createElement('br'));
    subtitle.append(`"${title}"`);
}

function isLessonUnlocked(stage, node) {
    if (stage < 1 || node < 1 || node > MAX_NODE) return false;

    const completedNodes = userData.completedNodes || [];
    const completedStages = userData.completedStages || [];
    const stageUnlocked = stage === 1 || completedStages.includes(stage - 1);

    if (node === VOCAB_NODE) return stageUnlocked;
    if (stage === 1 && node === 1) return true;

    if (node === 1) {
        return stageUnlocked;
    }

    return completedNodes.includes(`${stage}-${node - 1}`);
}

function buildLesson() {
    if (nodeParam === VOCAB_NODE) {
        activeExercises = buildVocabularyPractice(stageParam);
        return;
    }

    if (nodeParam === 4) {
        pickErrorReview(stageParam);
        return;
    }

    pickLevelExercises(stageParam, nodeParam);
}

function pickLevelExercises(stage, node) {
    const stageExercises = EXERCISE_BANK.filter(ex => ex.stage === stage);
    const poolIndex = QUESTION_POOL_NODES.indexOf(node);
    if (poolIndex === -1) {
        activeExercises = [];
        return;
    }

    const start = Math.floor((poolIndex * stageExercises.length) / QUESTION_POOL_NODES.length);
    const end = Math.floor(((poolIndex + 1) * stageExercises.length) / QUESTION_POOL_NODES.length);
    const levelExercises = stageExercises.slice(start, end);
    const shuffled = [...levelExercises];
    shuffle(shuffled);
    activeExercises = shuffled;
}

function pickErrorReview(stage) {
    const stageErrors = errorBank.filter(ex => ex.stage === stage);
    shuffle(stageErrors);
    activeExercises = stageErrors.slice(0, QUESTIONS_PER_SESSION);
}

function buildVocabularyPractice(stage) {
    const entries = getVocabularyEntries({ stage });
    const stageEntries = [...entries];
    shuffle(stageEntries);

    const questions = [];
    stageEntries.forEach(entry => {
        const direction = Math.random() < 0.5 ? 'toSpanish' : 'toNawat';
        questions.push(createVocabularyQuestion(entry, entries, direction));
    });

    return questions.slice(0, VOCABULARY_WORDS_PER_SESSION);
}

function createVocabularyQuestion(entry, entries, direction) {
    const toSpanish = direction === 'toSpanish';
    const correct = toSpanish ? entry.spanish : entry.nawat;
    const distractors = entries
        .map(item => toSpanish ? item.spanish : item.nawat)
        .filter(option => normalizeText(option) !== normalizeText(correct));
    shuffle(distractors);

    return {
        type: 'select_translation',
        stage: entry.stage,
        instruction: toSpanish ? '¿Qué significa esta palabra?' : '¿Cómo se dice esta palabra en nawat?',
        prompt: toSpanish ? entry.nawat : entry.spanish,
        character: 'Neutral.svg',
        correct,
        options: [correct, ...uniqueOptions(distractors).slice(0, 3)]
    };
}

function getVocabularyEntries({ stage } = {}) {
    if (typeof DICTIONARY_BANK === 'undefined') return [];
    return DICTIONARY_BANK
        .filter(entry => !stage || (entry.stages || []).includes(stage))
        .map(entry => ({
            key: entry.id,
            stage,
            nawat: entry.nawat,
            spanish: entry.spanish
        }));
}

function cleanupDictionaryText(text) {
    return String(text || '').replace(/\s+/g, ' ').trim();
}

function normalizeText(text) {
    return cleanupDictionaryText(text).toLowerCase();
}

function uniqueOptions(options) {
    const seen = new Set();
    return options.filter(option => {
        const key = normalizeText(option);
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

function updateProgress() {
    const fill = document.getElementById('progress-fill');
    const pct = ((currentExercise) / activeExercises.length) * 100;
    fill.style.width = pct + '%';
}

// ========================================================
// Render Exercises
// ========================================================
function renderExercise() {
    const area = document.getElementById('exercise-area');
    const ex = activeExercises[currentExercise];
    area.replaceChildren();
    selectedAnswer = null;
    matchSelected = null;
    matchedCount = 0;
    matchPairData = [];
    answerWords = [];

    setCheckButton(false);
    hideFeedback();

    const title = document.createElement('h2');
    title.className = 'exercise-instruction';
    title.textContent = ex.instruction || 'Responde correctamente';
    area.appendChild(title);

    switch (ex.type) {
        case 'match': renderMatch(area, ex); break;
        case 'select_translation': renderSelectTranslation(area, ex); break;
        case 'fill_blank': renderFillBlank(area, ex); break;
        case 'translate': renderTranslate(area, ex); break;
    }
}

// --- MATCH PAIRS ---
// (We simulate match pairs since our parsed data only has select_translation, fill_blank, translate)
function renderMatch(area, ex) {
    // Fallback if data contains match
    const grid = document.createElement('div');
    grid.className = 'match-grid';

    const left = ex.pairs.map((p, i) => ({ text: p.nawat, id: i, side: 'nawat' }));
    const right = ex.pairs.map((p, i) => ({ text: p.spanish, id: i, side: 'spanish' }));
    shuffle(right);

    matchPairData = ex.pairs;
    const maxLen = Math.max(left.length, right.length);
    for (let i = 0; i < maxLen; i++) {
        if (left[i]) grid.appendChild(createMatchCard(left[i]));
        if (right[i]) grid.appendChild(createMatchCard(right[i]));
    }

    area.appendChild(grid);
    document.getElementById('bottom-bar').style.display = 'none';
}

function createMatchCard(item) {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.textContent = formatAnswerOptionText(item.text);
    card.dataset.id = item.id;
    card.dataset.side = item.side;
    card.addEventListener('click', () => handleMatchClick(card, item));
    return card;
}

function handleMatchClick(card, item) {
    if (card.classList.contains('matched')) return;

    if (!matchSelected) {
        card.classList.add('selected');
        matchSelected = { card, item };
    } else {
        if (matchSelected.card === card) {
            card.classList.remove('selected');
            matchSelected = null;
            return;
        }

        if (matchSelected.item.side === item.side) {
            matchSelected.card.classList.remove('selected');
            card.classList.add('selected');
            matchSelected = { card, item };
            return;
        }

        if (matchSelected.item.id === item.id) {
            matchSelected.card.classList.remove('selected');
            matchSelected.card.classList.add('matched');
            card.classList.add('matched');
            matchedCount++;
            matchSelected = null;

            if (matchedCount === matchPairData.length) {
                score++;
                setTimeout(() => showFeedback(true, '¡Excelente! Todos los pares son correctos.'), 300);
            }
        } else {
            card.classList.add('wrong');
            matchSelected.card.classList.add('wrong');
            const prevCard = matchSelected.card;
            matchSelected = null;
            setTimeout(() => {
                card.classList.remove('wrong', 'selected');
                prevCard.classList.remove('wrong', 'selected');
            }, 600);

            handleMistake(activeExercises[currentExercise]);
            if (mistakes >= MAX_MISTAKES) {
                pendingLessonFailure = true;
                showFeedback(false, 'Respuesta correcta: ' + getCorrectAnswer(activeExercises[currentExercise]));
            }
        }
    }
}

// --- SELECT TRANSLATION ---
function renderSelectTranslation(area, ex) {
    const charDiv = document.createElement('div');
    charDiv.className = 'character-speech';
    const img = document.createElement('img');
    img.src = ex.character || 'Neutral.svg';
    img.alt = 'Character';
    const bubble = document.createElement('div');
    bubble.className = 'speech-bubble';
    bubble.textContent = ex.prompt;
    charDiv.append(img, bubble);
    area.appendChild(charDiv);

    const optList = document.createElement('div');
    optList.className = 'options-list';

    // Ensure options are shuffled
    const opts = uniqueDisplayOptions(ex.options, ex.correct);
    shuffle(opts);

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = formatAnswerOptionText(opt);
        btn.addEventListener('click', () => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedAnswer = opt;
            setCheckButton(true);
        });
        optList.appendChild(btn);
    });

    area.appendChild(optList);
    document.getElementById('bottom-bar').style.display = '';
}

// --- FILL IN THE BLANK ---
function renderFillBlank(area, ex) {
    const sentence = document.createElement('div');
    sentence.className = 'mc-sentence';
    if (ex.before) sentence.append(ex.before + ' ');
    const blank = document.createElement('span');
    blank.className = 'blank';
    blank.id = 'blank-slot';
    blank.textContent = ' ';
    sentence.appendChild(blank);
    if (ex.after) sentence.append(' ' + ex.after);
    area.appendChild(sentence);

    if (ex.hint) {
        const hint = document.createElement('div');
        hint.className = 'mc-hint';
        hint.textContent = `(${ex.hint})`;
        area.appendChild(hint);
    }

    const optList = document.createElement('div');
    optList.className = 'options-list';

    const opts = uniqueDisplayOptions(ex.options, ex.correct);
    shuffle(opts);

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = formatAnswerOptionText(opt);
        btn.addEventListener('click', () => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedAnswer = opt;
            document.getElementById('blank-slot').textContent = formatAnswerOptionText(opt);
            setCheckButton(true);
        });
        optList.appendChild(btn);
    });

    area.appendChild(optList);
    document.getElementById('bottom-bar').style.display = '';
}

// --- TRANSLATE (Word Bank) ---
function renderTranslate(area, ex) {
    const promptDiv = document.createElement('div');
    promptDiv.className = 'translation-prompt';
    const img = document.createElement('img');
    img.src = ex.character || 'Neutral.svg';
    img.alt = 'Character';
    const target = document.createElement('div');
    target.className = 'translation-target';
    target.textContent = ex.prompt;
    promptDiv.append(img, target);
    area.appendChild(promptDiv);

    const answerZone = document.createElement('div');
    answerZone.className = 'answer-zone';
    answerZone.id = 'answer-zone';
    area.appendChild(answerZone);

    const bank = document.createElement('div');
    bank.className = 'word-bank';

    const shuffled = uniqueWordBankOptions(ex.wordBank, ex.correct);
    shuffle(shuffled);

    shuffled.forEach((word, i) => {
        const chip = document.createElement('button');
        chip.className = 'word-chip';
        chip.textContent = formatAnswerOptionText(word);
        chip.dataset.word = word;
        chip.dataset.idx = i;
        chip.addEventListener('click', () => placeWord(chip, word));
        bank.appendChild(chip);
    });

    area.appendChild(bank);
    document.getElementById('bottom-bar').style.display = '';
}

function placeWord(chip, word) {
    if (chip.classList.contains('placed')) return;

    chip.classList.add('placed');
    answerWords.push(word);

    const zone = document.getElementById('answer-zone');
    const ansChip = document.createElement('button');
    ansChip.className = 'word-chip in-answer';
    ansChip.textContent = formatAnswerOptionText(word);
    ansChip.addEventListener('click', () => {
        answerWords = answerWords.filter((w, idx) => !(w === word && idx === answerWords.lastIndexOf(word)));
        chip.classList.remove('placed');
        ansChip.remove();
        setCheckButton(answerWords.length > 0);
    });
    zone.appendChild(ansChip);

    setCheckButton(answerWords.length > 0);
}

// ========================================================
// Check & Feedback
// ========================================================
function checkAnswer() {
    const ex = activeExercises[currentExercise];
    let isCorrect = false;

    switch (ex.type) {
        case 'select_translation':
            isCorrect = selectedAnswer === ex.correct;
            break;
        case 'fill_blank':
            isCorrect = selectedAnswer === ex.correct;
            break;
        case 'translate':
            isCorrect = answerWords.join(' ') === ex.correct.join(' ');
            break;
    }

    if (isCorrect) {
        score++;
        // If it was in the error bank and we got it right, we could remove it.
        // But for simplicity, we just keep it or remove it at the end of lesson.
        if (nodeParam === 4) {
            removeError(ex);
        }
    } else {
        handleMistake(ex);
    }

    const msg = isCorrect
        ? '¡Muy bien! Significa:\n' + getExplanation(ex)
        : 'Respuesta correcta: ' + getCorrectAnswer(ex);

    if (!isCorrect && mistakes >= MAX_MISTAKES) {
        pendingLessonFailure = true;
    }

    showFeedback(isCorrect, msg);
}

function handleMistake(ex) {
    recordError(ex);
    mistakes = Math.min(mistakes + 1, MAX_MISTAKES);
    updateLivesDisplay();
}

function recordError(ex) {
    // Save to errorBank if not already there
    const exists = errorBank.find(e => JSON.stringify(e) === JSON.stringify(ex));
    if (!exists) {
        errorBank.push(ex);
        saveUserData(data => {
            data.errorBank = errorBank;
        });
    }
}

function removeError(ex) {
    errorBank = errorBank.filter(e => JSON.stringify(e) !== JSON.stringify(ex));
    saveUserData(data => {
        data.errorBank = errorBank;
    });
}

function getExplanation(ex) {
    switch (ex.type) {
        case 'select_translation': return ex.correct;
        case 'fill_blank': return `${ex.before} ${ex.correct} ${ex.after || ''}`;
        case 'translate': return ex.correct.join(' ');
        default: return '';
    }
}

function getCorrectAnswer(ex) {
    switch (ex.type) {
        case 'select_translation': return ex.correct;
        case 'fill_blank': return ex.correct;
        case 'translate': return ex.correct.join(' ');
        case 'match': return ex.pairs.map(pair => `${pair.nawat} = ${pair.spanish}`).join(', ');
        default: return '';
    }
}

function showFeedback(correct, message) {
    const bar = document.getElementById('feedback-bar');
    const icon = document.getElementById('feedback-icon');
    const text = document.getElementById('feedback-text');
    const bottomBar = document.getElementById('bottom-bar');

    bar.classList.remove('hidden', 'correct', 'incorrect');
    bar.classList.add(correct ? 'correct' : 'incorrect');

    icon.textContent = correct
        ? '✅ ¡Correcto!'
        : '❌ Incorrecto';

    text.textContent = message;
    bottomBar.style.display = 'none';
}

function hideFeedback() {
    const bar = document.getElementById('feedback-bar');
    bar.classList.add('hidden');
}

function nextExercise() {
    if (pendingLessonFailure) {
        showFailed();
        return;
    }

    currentExercise++;

    if (currentExercise >= activeExercises.length) {
        showComplete();
        return;
    }

    updateProgress();
    renderExercise();
}

function updateLivesDisplay() {
    const livesDisplay = document.getElementById('lives-display');
    if (!livesDisplay) return;

    const livesLeft = Math.max(MAX_MISTAKES - mistakes, 0);
    livesDisplay.setAttribute('aria-label', `${livesLeft} vidas disponibles`);
    livesDisplay.replaceChildren();

    for (let i = 0; i < MAX_MISTAKES; i++) {
        const heart = document.createElement('span');
        heart.className = 'life-heart';
        heart.textContent = '♥';
        heart.setAttribute('aria-hidden', 'true');

        if (i >= livesLeft) {
            heart.classList.add('lost');
        }

        if (i === livesLeft && mistakes > 0) {
            heart.classList.add('just-lost');
        }

        livesDisplay.appendChild(heart);
    }
}

function showComplete(emptyErrorBank = false) {
    const fill = document.getElementById('progress-fill');
    fill.style.width = '100%';

    document.getElementById('lesson-container').style.display = 'none';
    const complete = document.getElementById('lesson-complete');
    complete.classList.remove('hidden');

    if (emptyErrorBank) {
        document.querySelector('.complete-subtitle').innerHTML = "No tienes errores recientes.<br>¡Sigue así!";
        document.querySelector('.complete-stats').style.display = 'none';
        if (nodeParam === 4) recordNodeCompletion();
        return;
    } else {
        document.getElementById('score-value').textContent = score;
        document.getElementById('total-value').textContent = activeExercises.length;
    }

    recordPracticeToday();
    recordNodeCompletion();
}

function recordNodeCompletion() {
    const currentNodeId = `${stageParam}-${nodeParam}`;
    saveUserData(data => {
        if (!data.completedNodes) data.completedNodes = [];
        if (!data.completedNodes.includes(currentNodeId)) {
            data.completedNodes.push(currentNodeId);
        }

        if (nodeParam === 3) {
            if (!data.nodeRewards) data.nodeRewards = [];
            const rewardId = `${currentNodeId}-protector`;
            if (!data.nodeRewards.includes(rewardId)) {
                data.nodeRewards.push(rewardId);
                data.protectors = Math.min((data.protectors || 0) + 1, MAX_PROTECTORS);
            }
        }

        if (nodeParam === CORE_NODE_COUNT) {
            if (!data.completedStages) data.completedStages = [];
            if (!data.completedStages.includes(stageParam)) {
                data.completedStages.push(stageParam);
            }
        }
    });
}

function showFailed() {
    const fill = document.getElementById('progress-fill');
    fill.style.width = `${(currentExercise / activeExercises.length) * 100}%`;

    document.getElementById('lesson-container').style.display = 'none';
    const complete = document.getElementById('lesson-complete');
    complete.classList.remove('hidden');
    complete.classList.add('failed');

    document.querySelector('.complete-character').src = 'Enojado.svg';
    document.querySelector('.complete-character').alt = 'Enojado';
    document.querySelector('.complete-title').textContent = 'Lección fallida';
    document.querySelector('.complete-subtitle').innerHTML = 'Has fallado 3 ejercicios.<br>Vuelve a intentarlo desde el inicio.';
    document.getElementById('score-value').textContent = score;
    document.getElementById('total-value').textContent = activeExercises.length;
    document.querySelector('.complete-btn').textContent = 'VOLVER AL MAPA';
}

function recordPracticeToday() {
    const today = getTodayStr();
    saveUserData(data => {
        data.streak = data.streak || 0;
        data.protectors = data.protectors || 0;
        data.dayLog = data.dayLog || {};

        if (data.dayLog[today] === 'practiced') {
            data.practicedToday = true;
            data.lastPracticeDate = today;
            return;
        }

        data.streak++;
        data.practicedToday = true;
        data.lastPracticeDate = today;
        data.dayLog[today] = 'practiced';

        if (data.streak > 0 && data.streak % 3 === 0 && data.protectors < MAX_PROTECTORS) {
            data.protectors++;
        }
    });
}

function finishLesson() {
    window.location.href = 'index.html';
}

// ========================================================
// Helpers
// ========================================================
function setCheckButton(enabled) {
    const btn = document.getElementById('check-btn');
    if (enabled) {
        btn.classList.remove('disabled');
        btn.classList.add('active');
        btn.disabled = false;
    } else {
        btn.classList.remove('active');
        btn.classList.add('disabled');
        btn.disabled = true;
    }
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// ========================================================
// Start
// ========================================================
document.addEventListener('DOMContentLoaded', init);
