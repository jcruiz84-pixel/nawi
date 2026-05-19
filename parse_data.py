import json
import random
import re
import unicodedata
from pathlib import Path

random.seed(11)

LESSON_DIR = Path("Lecciones")
LESSONS = [
    "Aprende a presentarte.txt",
    "Los colores.txt",
    "Los números.txt",
    "Las cuentas.txt",
    "La familia.txt",
    "Los animales.txt",
    "La comida y frutas.txt",
    "Partes del cuerpo.txt",
    "Profesiones y oficios.txt",
    "Los adjetivos.txt",
    "Los adverbios.txt",
    "Los plurales.txt",
]

SPANISH_WORDS = {
    "a", "adios", "adiós", "agua", "al", "algo", "amarillo", "animal", "apellido",
    "arriba", "azul", "bandera", "bien", "blanco", "buen", "buenas", "buenos",
    "cabello", "cafe", "café", "caliente", "canas", "casa", "celeste", "ciudad",
    "color", "colores", "como", "cómo", "con", "corazon", "corazón", "de", "del",
    "dice", "dios", "donde", "dónde", "el", "ella", "en", "es", "esta", "está",
    "estas", "estás", "estoy", "familia", "flor", "forma", "gato", "gracias",
    "gris", "hogar", "la", "las", "llamas", "me", "mi", "morado", "muchas",
    "mucho", "muy", "negro", "no", "nos", "pajaro", "pájaro", "palido", "pálido",
    "pantalon", "pantalón", "perro", "plateado", "poco", "pueblo", "que", "qué",
    "rojo", "salvador", "señor", "si", "sí", "significa", "te", "tu", "tú", "un",
    "una", "verde", "vengo", "vemos", "voy", "y", "ya", "yo",
}


def normalize_name(text):
    return unicodedata.normalize("NFC", text)


def find_lesson_file(filename):
    target = normalize_name(filename)
    for path in LESSON_DIR.iterdir():
        if normalize_name(path.name) == target:
            return path
    raise FileNotFoundError(f"No se encontró {LESSON_DIR / filename}")


def clean_markup(text):
    text = text.replace("**", "")
    text = text.replace("“", '"').replace("”", '"')
    return re.sub(r"\s+", " ", text).strip()


def clean_answer_option(text):
    text = clean_markup(text.replace("◦", ""))
    text = re.sub(r"^\*\s*", "", text).strip()
    text = re.sub(r"^[A-C]\)", "", text).strip()
    text = re.sub(r"\.+$", "", text).strip()
    return text


def normalize_for_compare(text):
    text = unicodedata.normalize("NFKD", clean_markup(text)).encode("ascii", "ignore").decode("ascii")
    return re.sub(r"\s+", " ", text).strip().lower()


def token_key(text):
    return normalize_for_compare(text).strip("'")


def add_unique(items, value):
    value = clean_answer_option(value)
    if not value:
        return
    seen = {normalize_for_compare(item) for item in items}
    if normalize_for_compare(value) not in seen:
        items.append(value)


def strip_quotes(text):
    return clean_markup(text).strip('"').strip()


def has_translation_separator(text):
    return "—" in text or re.search(r"\s-\s", text)


def seed_spanish_score(text, spanish_vocab=None):
    spanish_vocab = spanish_vocab or SPANISH_WORDS
    tokens = re.findall(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']+", text.lower())
    score = sum(1 for token in tokens if token_key(token) in spanish_vocab or token in spanish_vocab)
    if re.search(r"[áéíóúÁÉÍÓÚñÑ¿¡]", text):
        score += 1
    return score


def split_translation_pair(text, section_title=""):
    parts = text.split("—", 1) if "—" in text else re.split(r"\s-\s", text, maxsplit=1)
    if len(parts) != 2:
        return None

    left = strip_quotes(parts[0])
    right = strip_quotes(parts[1])
    title = section_title.lower()
    if re.search(r"nawat.*español", title):
        return {"nawat": left, "spanish": right}
    if re.search(r"español.*nawat", title):
        return {"nawat": right, "spanish": left}
    if seed_spanish_score(left) > seed_spanish_score(right):
        return {"nawat": right, "spanish": left}
    return {"nawat": left, "spanish": right}


def extract_correct_answer(option_text):
    text = clean_answer_option(option_text)
    lower = text.lower()

    if lower.startswith("respuesta"):
        return re.sub(r"^respuesta\s*:?", "", text, flags=re.IGNORECASE).strip()

    precise = re.search(r"\((?:respuesta\s+)?correcta\s*:\s*([^)]+)\)", text, flags=re.IGNORECASE)
    if precise:
        return clean_answer_option(precise.group(1))

    if re.search(r"\((?:respuesta\s+)?correcta\b", text, flags=re.IGNORECASE):
        return clean_answer_option(re.sub(r"\([^)]*\)", "", text))

    return None


def clean_visible_option(option_text):
    text = clean_answer_option(option_text)
    text = re.sub(r"^respuesta\s*:?", "", text, flags=re.IGNORECASE).strip()
    text = re.sub(r"\([^)]*(?:respuesta\s+)?correcta[^)]*\)", "", text, flags=re.IGNORECASE).strip()
    return clean_answer_option(text)


def answer_shape(text):
    tokens = re.findall(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']+", text)
    return "sentence" if len(tokens) >= 2 else "word"


def classify_language(text, nawat_vocab, spanish_vocab):
    tokens = re.findall(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']+", text.lower())
    if not tokens:
        return "spanish"

    normalized = [token_key(token) for token in tokens]
    nawat_hits = sum(1 for token in normalized if token in nawat_vocab)
    spanish_hits = sum(1 for token in normalized if token in spanish_vocab)

    if re.search(r"[áéíóúÁÉÍÓÚñÑ¿¡]", text):
        spanish_hits += 1
    if spanish_hits > nawat_hits:
        return "spanish"
    if nawat_hits:
        return "nawat"
    return "spanish" if any(token in SPANISH_WORDS for token in normalized) else "nawat"


def same_language_options(options, correct_ans, distractor_vocab, nawat_vocab, spanish_vocab, target_count=3):
    correct_ans = clean_answer_option(correct_ans)
    language = classify_language(correct_ans, nawat_vocab, spanish_vocab)
    shape = answer_shape(correct_ans)
    normalized_correct = normalize_for_compare(correct_ans)
    filtered = []

    add_unique(filtered, correct_ans)
    for opt in options:
        opt = clean_visible_option(opt)
        if normalize_for_compare(opt) == normalized_correct:
            continue
        if classify_language(opt, nawat_vocab, spanish_vocab) == language and answer_shape(opt) == shape:
            add_unique(filtered, opt)

    candidates = list(distractor_vocab[language])
    random.shuffle(candidates)
    for fake in candidates:
        if len(filtered) >= target_count:
            break
        if normalize_for_compare(fake) != normalized_correct and answer_shape(fake) == shape:
            add_unique(filtered, fake)

    return filtered[:target_count]


def pair_from_prompt_answer(question, answer, section_title):
    prompt = strip_quotes(question)
    answer = clean_answer_option(answer)
    title = section_title.lower()
    if not prompt or not answer:
        return None
    if re.search(r"nawat.*español", title):
        return {"nawat": prompt, "spanish": answer}
    if re.search(r"español.*nawat", title):
        return {"nawat": answer, "spanish": prompt}
    return None


def get_blocks(section):
    lines = [line.strip() for line in section.splitlines() if line.strip()]
    if not lines:
        return "", []

    section_title = lines[0]
    blocks = []
    current = []
    for line in lines[1:]:
        match_num = re.match(r"^(\d+)[\.\s]+(.*)", line)
        if match_num:
            if current:
                blocks.append(current)
            current = [clean_markup(line)]
        elif current and (line.startswith("◦") or re.match(r"^\*?\s*[A-C]\)", line)):
            current.append(clean_markup(line))
    if current:
        blocks.append(current)
    return section_title, blocks


def parse_question_line(line):
    match = re.match(r"^(\d+)[\.\s]+(.*)", line)
    return clean_markup(match.group(2)) if match else ""


def parse_file(filename, stage_id):
    path = find_lesson_file(filename)
    content = path.read_text(encoding="utf-8")
    sections = [sec.strip() for sec in re.split(r"(?=Sección\s+\d+:)", content) if sec.strip()]

    pair_bank = []
    raw_options = []
    for section in sections:
        section_title, blocks = get_blocks(section)
        for block in blocks:
            question = parse_question_line(block[0])
            if has_translation_separator(question):
                pair = split_translation_pair(question, section_title)
                if pair:
                    pair_bank.append(pair)
            for opt in block[1:]:
                correct = extract_correct_answer(opt)
                if correct:
                    pair = pair_from_prompt_answer(question, correct, section_title)
                    if pair:
                        pair_bank.append(pair)
                    add_unique(raw_options, correct)
                else:
                    add_unique(raw_options, clean_visible_option(opt))

    nawat_vocab = set()
    spanish_vocab = set(SPANISH_WORDS)
    distractor_vocab = {"nawat": [], "spanish": []}

    for pair in pair_bank:
        add_unique(distractor_vocab["nawat"], pair["nawat"])
        add_unique(distractor_vocab["spanish"], pair["spanish"])
        for word in re.findall(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']+", pair["nawat"].lower()):
            nawat_vocab.add(token_key(word))
        for word in re.findall(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']+", pair["spanish"].lower()):
            spanish_vocab.add(token_key(word))

    for option in raw_options:
        language = classify_language(option, nawat_vocab, spanish_vocab)
        add_unique(distractor_vocab[language], option)

    word_pool = sorted(nawat_vocab)
    exercises = []
    dictionary_pairs = []

    for section in sections:
        section_title, blocks = get_blocks(section)
        for block in blocks:
            question = parse_question_line(block[0])
            options = []
            correct_ans = None

            for opt in block[1:]:
                correct = extract_correct_answer(opt)
                if correct:
                    correct_ans = correct
                    add_unique(options, correct)
                else:
                    add_unique(options, clean_visible_option(opt))

            if correct_ans:
                pair = pair_from_prompt_answer(question, correct_ans, section_title)
                if pair:
                    dictionary_pairs.append(pair)

                options = same_language_options(
                    options,
                    correct_ans,
                    distractor_vocab,
                    nawat_vocab,
                    spanish_vocab,
                )
                random.shuffle(options)

                if "_______" in question:
                    before, after = question.split("_______", 1)
                    exercises.append({
                        "type": "fill_blank",
                        "stage": stage_id,
                        "before": before.strip(),
                        "after": after.strip(),
                        "correct": correct_ans,
                        "options": options,
                        "hint": "",
                    })
                else:
                    exercises.append({
                        "type": "select_translation",
                        "stage": stage_id,
                        "prompt": question,
                        "character": "Neutral.svg",
                        "correct": correct_ans,
                        "options": options,
                    })
                continue

            if has_translation_separator(question):
                pair = split_translation_pair(question, section_title)
                if not pair:
                    continue
                dictionary_pairs.append(pair)
                words = pair["nawat"].split()
                fake_words = []
                random.shuffle(word_pool)
                for fake in word_pool:
                    if len(fake_words) >= 3:
                        break
                    if normalize_for_compare(fake) not in {normalize_for_compare(word) for word in words}:
                        add_unique(fake_words, fake)

                exercises.append({
                    "type": "translate",
                    "stage": stage_id,
                    "prompt": pair["spanish"],
                    "character": "Neutral.svg",
                    "correct": words,
                    "wordBank": words + fake_words,
                })

    return exercises, dictionary_pairs


def make_entry_id(nawat, spanish, used):
    base = re.sub(r"[^a-z0-9]+", "-", normalize_for_compare(nawat)).strip("-") or "entrada"
    value = base
    counter = 2
    while value in used:
        suffix = re.sub(r"[^a-z0-9]+", "-", normalize_for_compare(spanish)).strip("-")[:12]
        value = f"{base}-{suffix or counter}"
        if value in used:
            value = f"{base}-{counter}"
        counter += 1
    used.add(value)
    return value


stage_config = []
all_exercises = []
dictionary_by_pair = {}

for stage_id, filename in enumerate(LESSONS, start=1):
    title = filename[:-4] if filename.endswith(".txt") else filename
    exercises, pairs = parse_file(filename, stage_id)
    stage_config.append({"id": stage_id, "title": title})
    all_exercises.extend(exercises)
    for pair in pairs:
        key = (normalize_for_compare(pair["nawat"]), normalize_for_compare(pair["spanish"]))
        if not key[0] or not key[1]:
            continue
        entry = dictionary_by_pair.setdefault(key, {
            "nawat": pair["nawat"],
            "spanish": pair["spanish"],
            "category": "Vocabulario",
            "stages": [],
        })
        if stage_id not in entry["stages"]:
            entry["stages"].append(stage_id)
    print(f"Etapa {stage_id}: {title} - {len(exercises)} ejercicios")

used_ids = set()
dictionary_bank = []
for entry in dictionary_by_pair.values():
    dictionary_bank.append({
        "id": make_entry_id(entry["nawat"], entry["spanish"], used_ids),
        **entry,
    })

data_js = (
    f"const STAGE_CONFIG = {json.dumps(stage_config, ensure_ascii=False, indent=2)};\n\n"
    f"const EXERCISE_BANK = {json.dumps(all_exercises, ensure_ascii=False, indent=2)};\n"
)
Path("data.js").write_text(data_js, encoding="utf-8")

dictionary_js = f"const DICTIONARY_BANK = {json.dumps(dictionary_bank, ensure_ascii=False, indent=2)};\n"
Path("dictionary_data.js").write_text(dictionary_js, encoding="utf-8")

print(f"Total: {len(all_exercises)} ejercicios, {len(dictionary_bank)} entradas de vocabulario")
