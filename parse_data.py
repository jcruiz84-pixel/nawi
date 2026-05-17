import re
import json
import random

random.seed(11)

SPANISH_WORDS = {
    'a', 'adiós', 'al', 'apellido', 'bien', 'casa', 'ciudad', 'como', 'con', 'color', 'corazón', 'de', 'del', 'dice', 'dicho', 'dios', 'el', 'ella',
    'anaranjada', 'base', 'emocionado', 'en', 'es', 'estoy', 'frase', 'fuera', 'gris', 'gusta', 'hilos', 'la', 'las',
    'llamas', 'lo', 'los', 'manchas', 'me', 'mediodía', 'mi', 'multicolor', 'muchas', 'muy', 'nos', 'o', 'ojalá', 'otros', 'pájaro',
    'pastel', 'pueblo', 'que', 'qué', 'saludo', 'si', 'significa', 'siente', 'suave', 'te', 'tono', 'tu',
    'tú', 'un', 'una', 'va', 'verde', 'vengo', 'vemos', 'vete', 'y', 'yo',
    'agradezco', 'ahí', 'amarilla', 'amarillo', 'anaranjado', 'azul', 'bandera', 'bienvenido',
    'blanca', 'blanco', 'blusa', 'buen', 'buenas', 'buenos', 'cabello', 'café', 'caliente', 'canas', 'canoso',
    'celeste', 'cielo', 'colores', 'cosquilleo', 'cuida', 'cuide', 'desteñido', 'domingo',
    'dónde', 'dorado', 'enfrió', 'está', 'estás', 'flor', 'forma', 'gato', 'gracias', 'hogar', 'llorando',
    'madera', 'mañana', 'morado', 'morada', 'negra', 'negro', 'no', 'noches',
    'naranja', 'pálido', 'pantalón', 'perro', 'plateado', 'primero', 'profesor', 'pues',
    'rojo', 'rosa', 'rosado', 'salvador', 'saltamontes', 'santo', 'señor', 'señora',
    'significado', 'todo', 'total', 'triste', 'tristellorando', 'veamos', 'venido', 'vienes', 'vives', 'voy', 'ya', 'zacate'
}

def clean_option_text(text):
    text = text.replace('◦', '').strip()
    text = re.sub(r'^[A-C]\)', '', text).strip()
    return clean_answer_option(text)

def normalize_answer_marker(text):
    text = re.sub(r'\(.*Correcta.*\)', '', text, flags=re.IGNORECASE).strip()
    text = re.sub(r'^Respuesta.*?:', '', text, flags=re.IGNORECASE).strip()
    text = re.sub(r'^Respuesta', '', text, flags=re.IGNORECASE).strip()
    return clean_answer_option(text)

def clean_answer_option(text):
    text = re.sub(r'\s+', ' ', text).strip()
    text = re.sub(r'\.+$', '', text).strip()
    return text

def normalize_for_compare(text):
    return re.sub(r'\s+', ' ', text).strip().lower()

def add_unique(items, value):
    value = clean_answer_option(value)
    if value and normalize_for_compare(value) not in {normalize_for_compare(item) for item in items}:
        items.append(value)

def answer_shape(text):
    tokens = re.findall(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']+", text)
    return 'sentence' if len(tokens) >= 2 else 'word'

def has_same_answer_shape(text, reference):
    return answer_shape(text) == answer_shape(reference)

def classify_language(text, nawat_vocab):
    text = text.strip()
    tokens = re.findall(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']+", text.lower())
    if not tokens:
        return 'spanish'

    nawat_hits = sum(1 for token in tokens if token.strip("'") in nawat_vocab)
    spanish_hits = sum(1 for token in tokens if token in SPANISH_WORDS)

    if re.search(r'[áéíóúÁÉÍÓÚñÑ]', text) or spanish_hits > 0:
        return 'spanish'
    if nawat_hits >= max(1, len(tokens) / 2):
        return 'nawat'
    return 'nawat'

def seed_spanish_score(text):
    tokens = re.findall(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']+", text.lower())
    score = sum(1 for token in tokens if token in SPANISH_WORDS)
    if re.search(r'[áéíóúÁÉÍÓÚñÑ]', text):
        score += 1
    return score

def has_translation_separator(text):
    return '—' in text or re.search(r'\s-\s', text)

def split_translation_pair(text):
    parts = text.split('—', 1) if '—' in text else re.split(r'\s-\s', text, maxsplit=1)
    if len(parts) != 2:
        return None

    left = parts[0].strip().strip('"')
    right = parts[1].strip().strip('"')
    left_score = seed_spanish_score(left)
    right_score = seed_spanish_score(right)

    if left_score > right_score:
        return { 'nawat': right, 'spanish': left }
    return { 'nawat': left, 'spanish': right }

def same_language_options(options, correct_ans, distractor_vocab, nawat_vocab, target_count=3):
    correct_ans = clean_answer_option(correct_ans)
    language = classify_language(correct_ans, nawat_vocab)
    candidates = distractor_vocab[language]
    normalized_correct = normalize_for_compare(correct_ans)
    filtered = []

    add_unique(filtered, correct_ans)
    for opt in options:
        opt = clean_answer_option(opt)
        if normalize_for_compare(opt) == normalized_correct:
            continue
        if classify_language(opt, nawat_vocab) == language and has_same_answer_shape(opt, correct_ans):
            add_unique(filtered, opt)

    random.shuffle(candidates)
    for fake in candidates:
        fake = clean_answer_option(fake)
        if len(filtered) >= target_count:
            break
        if (
            normalize_for_compare(fake) != normalized_correct
            and classify_language(fake, nawat_vocab) == language
            and has_same_answer_shape(fake, correct_ans)
        ):
            add_unique(filtered, fake)

    return filtered[:target_count]

def parse_file(filename, stage_id):
    exercises = []
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    sections = re.split(r'Sección \d+:', content)
    
    # First pass: collect vocabulary to use as distractors
    nawat_vocab = set()
    raw_options = []
    distractor_vocab = {
        'nawat': [],
        'spanish': []
    }
    
    for sec in sections[1:]:
        lines = sec.strip().split('\n')
        for line in lines[1:]:
            line = line.strip()
            match = re.match(r'^(\d+)\s+(.*)', line)
            if match:
                text = match.group(2)
                if has_translation_separator(text):
                    pair = split_translation_pair(text)
                    if pair:
                        for word in pair['nawat'].split():
                            nawat_vocab.add(re.sub(r'[^\w]', '', word.lower()))
                        add_unique(distractor_vocab['nawat'], pair['nawat'])
                        add_unique(distractor_vocab['spanish'], pair['spanish'])
            elif line.startswith('◦') or re.match(r'^[A-C]\)', line):
                opt_text = clean_option_text(line)
                opt_clean = normalize_answer_marker(opt_text)
                if not opt_clean.lower().startswith("respuesta"):
                    raw_options.append(opt_clean)

    # Filter out empty strings
    nawat_vocab = [w for w in nawat_vocab if w]
    nawat_vocab_set = set(nawat_vocab)
    for opt_clean in raw_options:
        language = classify_language(opt_clean, nawat_vocab_set)
        add_unique(distractor_vocab[language], opt_clean)
    distractor_vocab = {
        language: [item for item in items if item]
        for language, items in distractor_vocab.items()
    }
    word_pools = {
        'nawat': [
            word for word in nawat_vocab
            if classify_language(word, nawat_vocab_set) == 'nawat'
        ],
        'spanish': []
    }
    for item in distractor_vocab['spanish']:
        for token in item.split():
            token = token.strip()
            if not re.search(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']", token):
                continue
            if classify_language(token, nawat_vocab_set) == 'spanish':
                add_unique(word_pools['spanish'], token)

    # Second pass: parse exercises
    for sec in sections[1:]:
        lines = sec.strip().split('\n')
        if not lines: continue
        
        ex_blocks = []
        current_ex = []
        
        for line in lines[1:]:
            line = line.strip()
            if not line: continue
            
            match_num = re.match(r'^(\d+)\s+(.*)', line)
            if match_num:
                if current_ex:
                    ex_blocks.append(current_ex)
                current_ex = [line]
            elif line.startswith('◦') or re.match(r'^[A-C]\)', line):
                current_ex.append(line)
                
        if current_ex:
            ex_blocks.append(current_ex)
            
        for block in ex_blocks:
            q_line = block[0]
            match = re.match(r'^(\d+)\s+(.*)', q_line)
            if not match: continue
            q_text = match.group(2)
            
            if len(block) > 1:
                # Multiple choice
                options = []
                correct_ans = None
                for opt in block[1:]:
                    opt_text = clean_option_text(opt)
                    
                    if '(Correcta)' in opt_text or '(Respuesta correcta' in opt_text or opt_text.lower().startswith("respuesta"):
                        # If it starts with "Respuesta", remove it
                        opt_clean = normalize_answer_marker(opt_text)
                        
                        correct_ans = opt_clean
                        if opt_clean:
                            options.append(opt_clean)
                    else:
                        if opt_text:
                            options.append(opt_text)
                
                if not correct_ans and options:
                    correct_ans = options[0] # Fallback

                options = same_language_options(options, correct_ans, distractor_vocab, nawat_vocab_set)
                random.shuffle(options)
                
                if '_______' in q_text:
                    parts = q_text.split('_______')
                    ex = {
                        "type": "fill_blank",
                        "stage": stage_id,
                        "before": parts[0].strip(),
                        "after": parts[1].strip() if len(parts) > 1 else "",
                        "correct": correct_ans,
                        "options": options,
                        "hint": ""
                    }
                else:
                    ex = {
                        "type": "select_translation",
                        "stage": stage_id,
                        "prompt": q_text,
                        "character": "Neutral.svg",
                        "correct": correct_ans,
                        "options": options
                    }
                exercises.append(ex)
            else:
                # Match or translate
                if has_translation_separator(q_text):
                    pair = split_translation_pair(q_text)
                    if pair:
                        nawat = pair['nawat']
                        spanish = pair['spanish']
                        
                        words = nawat.split()
                        answer_language = classify_language(' '.join(words), nawat_vocab_set)
                        word_pool = word_pools[answer_language]
                        
                        # Generate 3 fake words in the same language as the answer
                        fake_words = []
                        while len(fake_words) < 3 and len(word_pool) > 3:
                            fake = random.choice(word_pool)
                            if normalize_for_compare(fake) not in {normalize_for_compare(w) for w in words} and fake not in fake_words:
                                fake_words.append(fake)
                                
                        ex = {
                            "type": "translate",
                            "stage": stage_id,
                            "prompt": spanish,
                            "character": "Neutral.svg",
                            "correct": words,
                            "wordBank": words + fake_words
                        }
                        exercises.append(ex)

    return exercises

ex1 = parse_file('Aprende a presentarte.txt', 1)
ex2 = parse_file('Los colores.txt', 2)

all_ex = ex1 + ex2
print(f"Parsed {len(ex1)} from stage 1, {len(ex2)} from stage 2")

js_content = f"const EXERCISE_BANK = {json.dumps(all_ex, ensure_ascii=False, indent=2)};\n"
with open('data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
