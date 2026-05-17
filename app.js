// ========================================================
// Nawat Streak System
// ========================================================
// Reglas:
// - Cada día que el usuario practica, su racha sube en 1.
// - Se gana 1 protector por cada 3 días consecutivos (máx 2).
// - Si el usuario no practica un día y tiene protectores,
//   se gasta 1 protector y la racha se mantiene.
// - Si no tiene protectores y no practica, la racha vuelve a 0.
// - Al inicio del día (sin práctica): SinRacha.svg
// - Cuando ya practicó: Racha.svg
// ========================================================

const MONTH_NAMES = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];
const VOCAB_NODE = 6;
const DICTIONARY_SESSION_SIZE = 20;

function cleanupDictionaryText(text) {
    return String(text || '').replace(/\s+/g, ' ').trim();
}

function normalizeDictionaryText(text) {
    return cleanupDictionaryText(text).toLowerCase();
}

function formatAnswerOptionText(text) {
    return cleanupDictionaryText(text)
        .replace(/[¿?¡!]/g, '')
        .replace(/\.{3,}|…/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function detectDictionaryLanguage(text) {
    const spanishWords = new Set([
        'a', 'adiós', 'al', 'apellido', 'amarilla', 'amarillo', 'anaranjado', 'azul',
        'bandera', 'base', 'bien', 'bienvenido', 'blanca', 'blanco', 'blusa', 'buen',
        'buenas', 'buenos', 'cabello', 'café', 'caliente', 'canas', 'canoso', 'casa',
        'celeste', 'cielo', 'ciudad', 'color', 'colores', 'como', 'con', 'corazón',
        'de', 'del', 'dice', 'dios', 'domingo', 'dónde', 'dorado', 'el', 'ella', 'en',
        'es', 'está', 'estás', 'estoy', 'flor', 'forma', 'gato', 'gracias', 'gris',
        'gusta', 'hogar', 'la', 'las', 'lo', 'los', 'manchas', 'mañana', 'me', 'mi',
        'mí', 'morado', 'morada', 'muchas', 'mucho', 'muy', 'negra', 'negro', 'no',
        'noches', 'nos', 'otros', 'pájaro', 'pálido', 'pantalón', 'pastel', 'perro',
        'plateado', 'pueblo', 'que', 'qué', 'rojo', 'rosa', 'rosado', 'salvador',
        'señor', 'señora', 'si', 'significa', 'su', 'suave', 'te', 'todo', 'tono',
        'total', 'triste', 'tu', 'tú', 'un', 'una', 'va', 'veamos', 'verde', 'vengo',
        'vemos', 'vete', 'vives', 'voy', 'y', 'ya', 'yo', 'zacate'
    ]);
    const tokens = cleanupDictionaryText(text)
        .toLowerCase()
        .match(/[a-záéíóúüñ]+/g) || [];

    if (/[áéíóúñ]/i.test(text)) return 'spanish';
    if (tokens.some(token => spanishWords.has(token))) return 'spanish';
    return 'nawat';
}

function getDictionaryQuote(text) {
    const match = String(text || '').match(/["“](.+?)["”]/);
    return match ? match[1] : '';
}

function extractDictionaryPair(ex) {
    if (ex.type === 'translate' && Array.isArray(ex.correct)) {
        const prompt = cleanupDictionaryText(ex.prompt);
        const answer = cleanupDictionaryText(ex.correct.join(' '));
        const promptLang = detectDictionaryLanguage(prompt);
        const answerLang = detectDictionaryLanguage(answer);

        if (promptLang === 'spanish' && answerLang === 'nawat') {
            return { nawat: answer, spanish: prompt };
        }
        if (promptLang === 'nawat' && answerLang === 'spanish') {
            return { nawat: prompt, spanish: answer };
        }
    }

    if (ex.type === 'select_translation') {
        const quoted = getDictionaryQuote(ex.prompt);
        if (!quoted || !ex.correct) return null;

        const correct = cleanupDictionaryText(ex.correct);
        if (/significa/i.test(ex.prompt) && detectDictionaryLanguage(correct) === 'spanish') {
            return { nawat: cleanupDictionaryText(quoted), spanish: correct };
        }
        if (/c[oó]mo/i.test(ex.prompt) && detectDictionaryLanguage(correct) === 'nawat') {
            return { nawat: correct, spanish: cleanupDictionaryText(quoted) };
        }
    }

    return null;
}

function getDictionaryEntries() {
    if (typeof DICTIONARY_BANK === 'undefined') return [];
    return DICTIONARY_BANK.map(entry => ({
        key: entry.id,
        stages: entry.stages || [],
        nawat: entry.nawat,
        spanish: entry.spanish,
        category: entry.category
    }));
}

class NawatUser {
    constructor() {
        this.maxProtectors = 2;
        // Intentar cargar datos guardados
        const saved = localStorage.getItem('nawat_user_v2');
        if (saved) {
            const data = JSON.parse(saved);
            this.streak = data.streak || 0;
            this.protectors = data.protectors || 0;
            this.currentStage = data.currentStage || 1;
            this.completedStages = data.completedStages || [];
            this.completedNodes = data.completedNodes || [];
            this.practicedToday = data.practicedToday || false;
            this.lastPracticeDate = data.lastPracticeDate || null;
            // dayLog: { "YYYY-MM-DD": "practiced" | "protector" }
            this.dayLog = data.dayLog || {};
            this.simulatedDate = this._todayStr();
            this._reconcileDailyState();
        } else {
            this.streak = 0;
            this.protectors = 0;
            this.currentStage = 1;
            this.completedStages = [];
            this.completedNodes = [];
            this.practicedToday = false;
            this.lastPracticeDate = null;
            this.dayLog = {};
            this.simulatedDate = this._todayStr();
        }
    }

    _todayStr() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    _parseDate(str) {
        const [y, m, d] = str.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    _dateStr(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    _addDays(dateStr, days) {
        const d = this._parseDate(dateStr);
        d.setDate(d.getDate() + days);
        return this._dateStr(d);
    }

    _daysBetween(startStr, endStr) {
        if (!startStr || !endStr) return 0;
        const start = this._parseDate(startStr);
        const end = this._parseDate(endStr);
        return Math.floor((end - start) / 86400000);
    }

    _reconcileDailyState() {
        const today = this._todayStr();
        this.simulatedDate = today;

        if (!this.lastPracticeDate) {
            this.practicedToday = false;
            this._save();
            return;
        }

        const daysAway = this._daysBetween(this.lastPracticeDate, today);
        if (daysAway <= 0) {
            this.practicedToday = this.dayLog[today] === 'practiced';
            this._save();
            return;
        }

        this.practicedToday = false;
        for (let i = 1; i < daysAway; i++) {
            const missedDay = this._addDays(this.lastPracticeDate, i);
            if (this.dayLog[missedDay]) continue;

            if (this.protectors > 0) {
                this.protectors--;
                this.dayLog[missedDay] = 'protector';
            } else {
                this.dayLog[missedDay] = 'missed';
                this.streak = 0;
            }
        }

        this._save();
    }

    // Practicar el día actual
    practiceToday() {
        if (this.practicedToday) return; // Ya practicó hoy

        this.simulatedDate = this._todayStr();
        this.streak++;
        this.practicedToday = true;
        this.lastPracticeDate = this.simulatedDate;
        this.dayLog[this.simulatedDate] = 'practiced';

        // Ganar protector cada 7 días de racha
        if (this.streak > 0 && this.streak % 3 === 0 && this.protectors < this.maxProtectors) {
            this.protectors++;
        }

        this._save();
        this.updateUI();
    }

    // Simular que pasa un día sin practicar
    missDay() {
        // Avanzar el día simulado
        this.simulatedDate = this._addDays(this.simulatedDate, 1);
        this.practicedToday = false;

        // Evaluar la consecuencia del día anterior (el día que se saltó)
        const missedDay = this._addDays(this.simulatedDate, -1);

        // Si ya se registró ese día como practicado, no hacer nada
        if (this.dayLog[missedDay] === 'practiced') {
            // El día que pasó ya estaba marcado, todo bien
        } else {
            // Día no practicado: usar protector o perder racha
            if (this.protectors > 0) {
                this.protectors--;
                this.dayLog[missedDay] = 'protector';
                // La racha se mantiene
            } else {
                this.dayLog[missedDay] = 'missed';
                this.streak = 0;
            }
        }

        this._save();
        this.updateUI();
    }

    // Simular que pasa un día con práctica completada
    simulatePracticeDay() {
        // Si hoy aún no ha practicado, practicar primero
        if (!this.practicedToday) {
            this.practiceToday();
        }
        // Avanzar al siguiente día
        this.simulatedDate = this._addDays(this.simulatedDate, 1);
        this.practicedToday = false;
        this._save();
        this.updateUI();
    }

    _save() {
        const saved = localStorage.getItem('nawat_user_v2');
        const existing = saved ? JSON.parse(saved) : {};
        localStorage.setItem('nawat_user_v2', JSON.stringify({
            ...existing,
            streak: this.streak,
            protectors: this.protectors,
            currentStage: this.currentStage,
            completedStages: this.completedStages,
            completedNodes: this.completedNodes,
            practicedToday: this.practicedToday,
            lastPracticeDate: this.lastPracticeDate,
            dayLog: this.dayLog,
            simulatedDate: this.simulatedDate,
        }));
    }

    reset() {
        localStorage.removeItem('nawat_user_v2');
        this.streak = 0;
        this.protectors = 0;
        this.practicedToday = false;
        this.lastPracticeDate = null;
        this.dayLog = {};
        this.simulatedDate = this._todayStr();
        this.updateUI();
    }

    updateUI() {
        // Top bar
        const streakCount = document.getElementById('streak-count');
        const protectorCount = document.getElementById('protector-count');
        const streakIcon = document.getElementById('icon-streak');

        if (streakCount) streakCount.innerText = this.streak;
        if (protectorCount) protectorCount.innerText = this.protectors;

        // Ícono de la barra: SinRacha si no ha practicado hoy, Racha si ya practicó
        if (streakIcon) {
            streakIcon.src = this.practicedToday ? 'Racha.svg' : 'SinRacha.svg';
        }

        // Modal
        const modalStreak = document.getElementById('modal-streak-count');
        const modalFlame = document.getElementById('modal-flame-icon');
        const badge = document.getElementById('badge-society');

        if (modalStreak) modalStreak.innerText = this.streak;
        if (modalFlame) {
            modalFlame.src = this.practicedToday ? 'Racha.svg' : 'SinRacha.svg';
        }
        // Mostrar la insignia solo si la racha es >= 7
        if (badge) {
            if (this.streak >= 7) {
                badge.classList.remove('hidden-badge');
            } else {
                badge.classList.add('hidden-badge');
            }
        }

        // Actualizar botón de práctica
        const practiceBtn = document.getElementById('practice-btn');
        if (practiceBtn) {
            if (this.practicedToday) {
                practiceBtn.style.backgroundColor = 'var(--gray-border)';
                practiceBtn.style.boxShadow = '0 4px 0 #ccc';
                practiceBtn.style.pointerEvents = 'none';
            } else {
                practiceBtn.style.backgroundColor = 'var(--green)';
                practiceBtn.style.boxShadow = '0 4px 0 #5a8a34';
                practiceBtn.style.pointerEvents = 'auto';
            }
        }

        // Render calendar
        this.renderCalendar();

        // Unlock Stage 2 if Stage 1 is completed
        const stage2 = document.getElementById('stage-2');
        if (stage2 && this.completedStages.includes(1)) {
            stage2.classList.remove('locked');
        }

        // Unlock individual nodes
        document.querySelectorAll('.node-btn').forEach(btn => {
            const nodeId = btn.getAttribute('data-node-id');
            if (!nodeId) return;
            const parts = nodeId.split('-');
            const s = parseInt(parts[0]);
            const n = parseInt(parts[1]);
            const stageUnlocked = s === 1 || this.completedStages.includes(s - 1);

            if (n === VOCAB_NODE && stageUnlocked) {
                btn.classList.remove('locked-node');
                return;
            }
            
            if (s === 1 && n === 1) {
                btn.classList.remove('locked-node');
                return;
            }
            
            if (n > 1) {
                const prevNodeId = `${s}-${n-1}`;
                if (this.completedNodes.includes(prevNodeId)) {
                    btn.classList.remove('locked-node');
                }
            } else if (s > 1 && n === 1) {
                if (this.completedStages.includes(s - 1)) {
                    btn.classList.remove('locked-node');
                }
            }
        });
    }

    renderCalendar() {
        const grid = document.getElementById('calendar-grid');
        const monthLabel = document.getElementById('cal-month-label');
        if (!grid || !monthLabel) return;

        // Usar el mes de la fecha simulada para el calendario
        const simDate = this._parseDate(this.simulatedDate);
        const year = this.calendarYear != null ? this.calendarYear : simDate.getFullYear();
        const month = this.calendarMonth != null ? this.calendarMonth : simDate.getMonth();

        // Si no se ha seteado, usar el mes actual simulado
        if (this.calendarYear == null) {
            this.calendarYear = year;
            this.calendarMonth = month;
        }

        monthLabel.textContent = `${MONTH_NAMES[this.calendarMonth]} de ${this.calendarYear}`;

        // Limpiar solo los días (mantener day-names)
        const dayNames = grid.querySelectorAll('.day-name');
        grid.innerHTML = '';
        dayNames.forEach(n => grid.appendChild(n.cloneNode(true)));

        // Si no hay day-names (primera vez), crearlos
        if (grid.children.length === 0) {
            ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'].forEach(name => {
                const el = document.createElement('div');
                el.className = 'day-name';
                el.textContent = name;
                grid.appendChild(el);
            });
        }

        const firstDay = new Date(this.calendarYear, this.calendarMonth, 1).getDay(); // 0=Sunday
        const daysInMonth = new Date(this.calendarYear, this.calendarMonth + 1, 0).getDate();

        const todayStr = this.simulatedDate;

        // Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('div');
            empty.className = 'cal-day';
            grid.appendChild(empty);
        }

        // Day cells
        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = `${this.calendarYear}-${String(this.calendarMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const cell = document.createElement('div');
            cell.className = 'cal-day';

            const status = this.dayLog[dateStr];
            const isToday = dateStr === todayStr;
            const isFuture = this._parseDate(dateStr) > this._parseDate(todayStr);

            if (status === 'practiced') {
                cell.classList.add('practiced');
                cell.textContent = d;
            } else if (status === 'protector') {
                cell.classList.add('protector-used');
                // Mostrar el ícono de pluma
                const img = document.createElement('img');
                img.src = 'Pluma-06.svg';
                img.alt = 'Protector usado';
                img.className = 'pluma-icon';
                cell.appendChild(img);
            } else if (isFuture) {
                cell.classList.add('future');
                cell.textContent = d;
            } else {
                cell.textContent = d;
            }

            if (isToday) {
                cell.classList.add('is-today');
            }

            grid.appendChild(cell);
        }
    }
}

// ========================================================
// Inicialización
// ========================================================
const user = new NawatUser();
user.updateUI();

// --- Modal ---
const streakButton = document.getElementById('streak-button');
const streakModal = document.getElementById('streak-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

if (streakButton && streakModal && closeModalBtn) {
    streakButton.addEventListener('click', () => {
        user.updateUI(); // Refresh calendar
        streakModal.classList.remove('hidden');
    });
    closeModalBtn.addEventListener('click', () => {
        streakModal.classList.add('hidden');
    });
}

// --- Stage Menu ---
const menuBtn = document.getElementById('menu-btn');
const stageModal = document.getElementById('stage-modal');
const closeStageBtn = document.getElementById('close-stage-btn');

if (menuBtn && stageModal && closeStageBtn) {
    menuBtn.addEventListener('click', () => {
        stageModal.classList.remove('hidden');
    });
    closeStageBtn.addEventListener('click', () => {
        stageModal.classList.add('hidden');
    });

    document.querySelectorAll('.stage-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const stageNum = parseInt(opt.dataset.stage);
            const targetSection = document.getElementById('stage-' + stageNum);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            stageModal.classList.add('hidden');
        });
    });
}

// --- Main View Switcher + Dictionary ---
const stageView = document.getElementById('stage-view');
const dictionaryView = document.getElementById('dictionary-view');
const stagesViewBtn = document.getElementById('view-stages-btn');
const dictionaryViewBtn = document.getElementById('view-dictionary-btn');
const dictionaryPracticeCard = document.getElementById('dictionary-practice-card');
const dictionarySessionMeta = document.getElementById('dictionary-session-meta');
const dictionaryEntries = getDictionaryEntries();
let dictionarySession = [];
let dictionaryQuestionIndex = 0;
let dictionaryScore = 0;
let dictionaryAnswered = false;

function setMainView(view) {
    const showingDictionary = view === 'dictionary';
    const wasShowingDictionary = dictionaryView && !dictionaryView.classList.contains('hidden');

    if (stageView) stageView.classList.toggle('hidden', showingDictionary);
    if (dictionaryView) dictionaryView.classList.toggle('hidden', !showingDictionary);
    if (stagesViewBtn) stagesViewBtn.classList.toggle('active', !showingDictionary);
    if (dictionaryViewBtn) dictionaryViewBtn.classList.toggle('active', showingDictionary);
    if (menuBtn) menuBtn.classList.toggle('hidden', showingDictionary);

    if (showingDictionary && (!wasShowingDictionary || dictionarySession.length === 0)) {
        startDictionarySession();
    }
}

function startDictionarySession() {
    if (!dictionaryPracticeCard) return;

    const shuffledEntries = [...dictionaryEntries].filter(entry => entry.nawat && entry.spanish);
    shuffle(shuffledEntries);
    dictionarySession = shuffledEntries
        .slice(0, DICTIONARY_SESSION_SIZE)
        .map(entry => createDictionaryExercise(entry, dictionaryEntries));
    dictionaryQuestionIndex = 0;
    dictionaryScore = 0;
    dictionaryAnswered = false;
    renderDictionaryExercise();
}

function createDictionaryExercise(entry, entries) {
    const toSpanish = Math.random() < 0.5;
    const correct = toSpanish ? entry.spanish : entry.nawat;
    const distractors = entries
        .filter(item => item.key !== entry.key)
        .map(item => toSpanish ? item.spanish : item.nawat)
        .filter(option => formatAnswerOptionText(option) !== formatAnswerOptionText(correct));

    shuffle(distractors);

    const options = [correct, ...uniqueDictionaryOptions(distractors).slice(0, 3)];
    shuffle(options);

    return {
        prompt: toSpanish ? entry.nawat : entry.spanish,
        correct,
        category: entry.category,
        directionLabel: toSpanish ? 'Elige el significado en español' : 'Elige la palabra en nawat',
        options
    };
}

function uniqueDictionaryOptions(options) {
    const seen = new Set();
    return options.filter(option => {
        const key = formatAnswerOptionText(option);
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

function renderDictionaryExercise() {
    if (!dictionaryPracticeCard) return;

    dictionaryPracticeCard.replaceChildren();

    if (dictionarySession.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'dictionary-empty';
        empty.textContent = 'No hay palabras disponibles para practicar.';
        dictionaryPracticeCard.appendChild(empty);
        if (dictionarySessionMeta) dictionarySessionMeta.textContent = 'Sin sesión activa';
        return;
    }

    if (dictionaryQuestionIndex >= dictionarySession.length) {
        renderDictionaryComplete();
        return;
    }

    dictionaryAnswered = false;
    const exercise = dictionarySession[dictionaryQuestionIndex];

    if (dictionarySessionMeta) {
        dictionarySessionMeta.textContent = `Pregunta ${dictionaryQuestionIndex + 1} de ${dictionarySession.length}`;
    }

    const eyebrow = document.createElement('div');
    eyebrow.className = 'dictionary-eyebrow';
    eyebrow.textContent = exercise.directionLabel;

    const prompt = document.createElement('div');
    prompt.className = 'dictionary-prompt';
    prompt.textContent = exercise.prompt;

    const category = document.createElement('div');
    category.className = 'dictionary-stage';
    category.textContent = exercise.category || 'Vocabulario';

    const options = document.createElement('div');
    options.className = 'dictionary-options';

    exercise.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'dictionary-option-btn';
        button.type = 'button';
        button.textContent = formatAnswerOptionText(option);
        button.dataset.answer = option;
        button.addEventListener('click', () => answerDictionaryExercise(button, option));
        options.appendChild(button);
    });

    const feedback = document.createElement('div');
    feedback.className = 'dictionary-feedback';
    feedback.id = 'dictionary-feedback';

    const action = document.createElement('button');
    action.className = 'dictionary-next-btn hidden';
    action.id = 'dictionary-next-btn';
    action.type = 'button';
    action.textContent = dictionaryQuestionIndex === dictionarySession.length - 1 ? 'VER RESULTADO' : 'SIGUIENTE';
    action.addEventListener('click', () => {
        dictionaryQuestionIndex++;
        renderDictionaryExercise();
    });

    dictionaryPracticeCard.append(eyebrow, prompt, category, options, feedback, action);
}

function answerDictionaryExercise(button, option) {
    if (dictionaryAnswered) return;

    dictionaryAnswered = true;
    const exercise = dictionarySession[dictionaryQuestionIndex];
    const isCorrect = normalizeDictionaryText(option) === normalizeDictionaryText(exercise.correct);
    const feedback = document.getElementById('dictionary-feedback');
    const nextButton = document.getElementById('dictionary-next-btn');

    if (isCorrect) dictionaryScore++;

    document.querySelectorAll('.dictionary-option-btn').forEach(optionButton => {
        optionButton.disabled = true;
        if (normalizeDictionaryText(optionButton.dataset.answer) === normalizeDictionaryText(exercise.correct)) {
            optionButton.classList.add('correct');
        }
    });

    button.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');

    if (feedback) {
        feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
        feedback.textContent = isCorrect ? '¡Correcto!' : `Respuesta correcta: ${exercise.correct}`;
    }

    if (nextButton) nextButton.classList.remove('hidden');
}

function renderDictionaryComplete() {
    dictionaryPracticeCard.replaceChildren();
    if (dictionarySessionMeta) dictionarySessionMeta.textContent = 'Sesión terminada';

    const title = document.createElement('div');
    title.className = 'dictionary-complete-title';
    title.textContent = 'Práctica completada';

    const score = document.createElement('div');
    score.className = 'dictionary-complete-score';
    score.textContent = `${dictionaryScore}/${dictionarySession.length}`;

    const subtitle = document.createElement('div');
    subtitle.className = 'dictionary-complete-subtitle';
    subtitle.textContent = 'Aciertos en esta sesión de vocabulario';

    const restart = document.createElement('button');
    restart.className = 'dictionary-next-btn';
    restart.type = 'button';
    restart.textContent = 'NUEVA SESIÓN';
    restart.addEventListener('click', startDictionarySession);

    const repeat = document.createElement('button');
    repeat.className = 'dictionary-next-btn dictionary-repeat-btn';
    repeat.type = 'button';
    repeat.textContent = 'REPETIR SESIÓN';
    repeat.addEventListener('click', repeatDictionarySession);

    dictionaryPracticeCard.append(title, score, subtitle, repeat, restart);
}

function repeatDictionarySession() {
    dictionaryQuestionIndex = 0;
    dictionaryScore = 0;
    dictionaryAnswered = false;
    renderDictionaryExercise();
}

if (stagesViewBtn) {
    stagesViewBtn.addEventListener('click', () => setMainView('stages'));
}

if (dictionaryViewBtn) {
    dictionaryViewBtn.addEventListener('click', () => setMainView('dictionary'));
}

// --- Calendar navigation ---
const calPrev = document.getElementById('cal-prev');
const calNext = document.getElementById('cal-next');

if (calPrev) {
    calPrev.addEventListener('click', () => {
        user.calendarMonth--;
        if (user.calendarMonth < 0) {
            user.calendarMonth = 11;
            user.calendarYear--;
        }
        user.renderCalendar();
    });
}

if (calNext) {
    calNext.addEventListener('click', () => {
        user.calendarMonth++;
        if (user.calendarMonth > 11) {
            user.calendarMonth = 0;
            user.calendarYear++;
        }
        user.renderCalendar();
    });
}
