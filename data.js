const STAGE_CONFIG = [
  {
    "id": 1,
    "title": "Aprende a presentarte"
  },
  {
    "id": 2,
    "title": "Los colores"
  },
  {
    "id": 3,
    "title": "Los números"
  },
  {
    "id": 4,
    "title": "Las cuentas"
  },
  {
    "id": 5,
    "title": "La familia"
  },
  {
    "id": 6,
    "title": "Los animales"
  },
  {
    "id": 7,
    "title": "La comida y frutas"
  },
  {
    "id": 8,
    "title": "Partes del cuerpo"
  },
  {
    "id": 9,
    "title": "Profesiones y oficios"
  },
  {
    "id": 10,
    "title": "Los adjetivos"
  },
  {
    "id": 11,
    "title": "Los adverbios"
  },
  {
    "id": 12,
    "title": "Los plurales"
  }
];

const EXERCISE_BANK = [
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Buenos días",
    "character": "Neutral.svg",
    "correct": [
      "Yek",
      "peyna"
    ],
    "wordBank": [
      "Yek",
      "peyna",
      "naja",
      "wan",
      "tajpalulis"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "¿Cómo te llamas?",
    "character": "Neutral.svg",
    "correct": [
      "Ken",
      "mutukey?"
    ],
    "wordBank": [
      "Ken",
      "mutukey?",
      "tiwalajtuk",
      "na",
      "tinemi"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Gracias",
    "character": "Neutral.svg",
    "correct": [
      "Padiush"
    ],
    "wordBank": [
      "Padiush",
      "witzapan",
      "ma",
      "tel"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "¡Ya me voy!",
    "character": "Neutral.svg",
    "correct": [
      "Niawa!"
    ],
    "wordBank": [
      "Niawa!",
      "ka",
      "shiawa",
      "niwitz"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "¿Cómo estás?",
    "character": "Neutral.svg",
    "correct": [
      "Ken",
      "tinemi?"
    ],
    "wordBank": [
      "Ken",
      "tinemi?",
      "panpadiush",
      "nemi",
      "tik"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "El Salvador",
    "character": "Neutral.svg",
    "correct": [
      "Kuskatan"
    ],
    "wordBank": [
      "Kuskatan",
      "niwitz",
      "naja",
      "tajtzin"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "De nada / No es nada",
    "character": "Neutral.svg",
    "correct": [
      "Tesu",
      "datka"
    ],
    "wordBank": [
      "Tesu",
      "datka",
      "muyulu",
      "tashtawi",
      "tajtzin"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Buenas tardes",
    "character": "Neutral.svg",
    "correct": [
      "Yek",
      "tiutak"
    ],
    "wordBank": [
      "Yek",
      "tiutak",
      "na",
      "ken",
      "tik"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Nos vemos mañana",
    "character": "Neutral.svg",
    "correct": [
      "Timuitat",
      "musta"
    ],
    "wordBank": [
      "Timuitat",
      "musta",
      "ta",
      "tesu",
      "nuyulu"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Tu hogar/casa",
    "character": "Neutral.svg",
    "correct": [
      "Muchan"
    ],
    "wordBank": [
      "Muchan",
      "mutukey",
      "na",
      "naja"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Naja",
    "after": "Sixta. (Mi nombre es...)",
    "correct": "nutukey",
    "options": [
      "ninemi",
      "Weliajaya",
      "nutukey"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "",
    "after": "taja? (¿Y tú?)",
    "correct": "Wan",
    "options": [
      "Kan",
      "Wan",
      "nutukey"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Naja niwitz",
    "after": "Witzapan. (Yo vengo de...)",
    "correct": "ka",
    "options": [
      "tik",
      "ka",
      "Nuyulu"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Tay",
    "after": "muyulu? (¿Qué dice tu corazón? / ¿Cómo estás?)",
    "correct": "ina",
    "options": [
      "chupi",
      "ina",
      "yek"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Naja ninemi",
    "after": "yek. (Yo estoy muy bien)",
    "correct": "sujsul",
    "options": [
      "chupi",
      "sujsul",
      "Tesu"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Wan nutzuntukey",
    "after": ". (Y mi apellido es...)",
    "correct": "Pérez",
    "options": [
      "¡Gracias!",
      "Pérez",
      "Bienvenido"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "",
    "after": "nemi muchan? (¿Dónde está tu hogar?)",
    "correct": "Kan",
    "options": [
      "Ken",
      "Kan",
      "Weliajaya"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "",
    "after": "nuyulu. (Mi corazón está alegre)",
    "correct": "Paki",
    "options": [
      "Paki",
      "¡Panpadiush!",
      "Chuka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Nuchan nemi tik ne",
    "after": ". (Mi hogar está en el pueblo...)",
    "correct": "techan",
    "options": [
      "techan",
      "tajpalulis",
      "Nuyulu"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "",
    "after": "tiwalajtuk! (Bienvenido/a)",
    "correct": "Yek",
    "options": [
      "tajpalulis",
      "Yek",
      "Niawa"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Nuteku Tiut ma metz",
    "after": ". (Que Dios te cuide)",
    "correct": "tajpia",
    "options": [
      "Niawa!",
      "tinemi",
      "tajpia"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "",
    "after": "timuitat musta! (Con seguridad nos vemos mañana)",
    "correct": "Yajaya",
    "options": [
      "tajpalulis",
      "Yajaya",
      "Man"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "",
    "after": "nuyulu. (Mi corazón está llorando/triste)",
    "correct": "Chuka",
    "options": [
      "tajpalulis",
      "Yuyumuka",
      "Chuka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Naja ninemi",
    "after": "yek. (Estoy un poco bien)",
    "correct": "chupi",
    "options": [
      "sujsul",
      "chupi",
      "Musta"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "",
    "after": "nuyulu nemi yek. (Mi corazón está bien)",
    "correct": "Nuyulu",
    "options": [
      "Nuyulu",
      "Kuskatan",
      "Naja"
    ],
    "hint": ""
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Naja niwitz ka Kuskatan\"",
    "character": "Neutral.svg",
    "correct": "Yo vengo de El Salvador",
    "options": [
      "Yo vengo de El Salvador",
      "Ojalá nos veamos",
      "Nos vemos, pues"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Ken tinemi taja?\"",
    "character": "Neutral.svg",
    "correct": "¿Cómo estás tú?",
    "options": [
      "Mi apellido es",
      "Buenas noches",
      "¿Cómo estás tú?"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Yek tajkutunal\"",
    "character": "Neutral.svg",
    "correct": "Buen mediodía",
    "options": [
      "Mi apellido es",
      "Buen mediodía",
      "Mi corazón está emocionado (siente cosquilleo)"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Tasujkamati!\"",
    "character": "Neutral.svg",
    "correct": "¡Gracias!",
    "options": [
      "¡Gracias!",
      "Pérez",
      "Bienvenido"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Naja ninemi yek\"",
    "character": "Neutral.svg",
    "correct": "Yo estoy bien",
    "options": [
      "Santo Domingo de Guzmán",
      "Yo estoy bien",
      "Ojalá nos veamos mañana"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Tay ina muyulu?\"",
    "character": "Neutral.svg",
    "correct": "¿Qué dice tu corazón? (¿Cómo te sientes?)",
    "options": [
      "Bienvenidos (a varios)",
      "Mi apellido es",
      "¿Qué dice tu corazón? (¿Cómo te sientes?)"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Shiawa!\"",
    "character": "Neutral.svg",
    "correct": "¡Vete! / ¡Adiós! (dicho al que se va)",
    "options": [
      "El saludo",
      "¡Vete! / ¡Adiós! (dicho al que se va)",
      "Mi apellido es"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Weliajaya timuitat\"",
    "character": "Neutral.svg",
    "correct": "Ojalá nos veamos",
    "options": [
      "Ojalá nos veamos mañana",
      "¿Y tú?",
      "Ojalá nos veamos"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Panpadiush\"",
    "character": "Neutral.svg",
    "correct": "Muchas gracias",
    "options": [
      "Mi corazón está triste/llorando",
      "Muchas gracias",
      "Mi corazón está emocionado (siente cosquilleo)"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Yuyumuka nuyulu\"",
    "character": "Neutral.svg",
    "correct": "Mi corazón está emocionado (siente cosquilleo)",
    "options": [
      "¡Vete! / ¡Adiós! (al que se va)",
      "Ojalá nos veamos",
      "Mi corazón está emocionado (siente cosquilleo)"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Ne tajpalulis\"",
    "character": "Neutral.svg",
    "correct": "El saludo",
    "options": [
      "El saludo",
      "¿Y tú?",
      "Señora / Doña"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Man timuitat\"",
    "character": "Neutral.svg",
    "correct": "Ahí nos vemos",
    "options": [
      "Ojalá nos veamos mañana",
      "¡Muchas gracias!",
      "Ahí nos vemos"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Nuteku Tiut ma metztashtawi\"",
    "character": "Neutral.svg",
    "correct": "Que Dios te lo pague",
    "options": [
      "Que Dios te lo pague",
      "Señora / Doña",
      "Yo soy de"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Mi apellido es...\"",
    "character": "Neutral.svg",
    "correct": "Wan nutzuntukey",
    "options": [
      "Timuitat musta",
      "Wan nutzuntukey",
      "Ken mutukey?"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"¿Dónde vives?\"",
    "character": "Neutral.svg",
    "correct": "¿Kan nemi muchan?",
    "options": [
      "¿Kan nemi muchan?",
      "Nuteku Tiut",
      "Naja ninemi yek"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Buenas noches\"",
    "character": "Neutral.svg",
    "correct": "Yek tayua",
    "options": [
      "Nuteku Tiut",
      "Naja niwitz ka",
      "Yek tayua"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Muchas gracias / Te lo agradezco\"",
    "character": "Neutral.svg",
    "correct": "Tashtawi! / Panpadiush!",
    "options": [
      "Yek tiwalajtuk",
      "Ne tajpalulis",
      "Tashtawi! / Panpadiush!"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Estoy muy bien\"",
    "character": "Neutral.svg",
    "correct": "Ninemi sujsul yek",
    "options": [
      "Nuteku Tiut ma metztashtawi",
      "Nuteku Tiut ma metztajpia",
      "Ninemi sujsul yek"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Yo soy de...\"",
    "character": "Neutral.svg",
    "correct": "Naja niwitz ka",
    "options": [
      "Yek tajkutunal",
      "Naja niwitz ka",
      "Nuteku Tiut"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"¿Cómo te llamas?\"",
    "character": "Neutral.svg",
    "correct": "¿Ken mutukey?",
    "options": [
      "Tesu datka",
      "¿Ken mutukey?",
      "Nuchan nemi tik ne techan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Nos vemos, pues\"",
    "character": "Neutral.svg",
    "correct": "Timuitat tel",
    "options": [
      "Timuitat tel",
      "Wan nutzuntukey",
      "Naja niwitz ka Kuskatan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Mi hogar está en la ciudad\"",
    "character": "Neutral.svg",
    "correct": "Nuchan nemi tik ne techan",
    "options": [
      "Nuchan nemi tik ne techan",
      "Ken tinemi?",
      "Naja niwitz ka Kuskatan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Bienvenido (llegaste bien)\"",
    "character": "Neutral.svg",
    "correct": "Yek tiwalajtuk",
    "options": [
      "Nuchan nemi tik ne techan",
      "Yek tiwalajtuk",
      "Naja ninemi yek"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"Mi corazón está bien\"",
    "character": "Neutral.svg",
    "correct": "Nuyulu nemi yek",
    "options": [
      "Tay ina muyulu?",
      "Nuyulu nemi yek",
      "Witzapan nuchan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 1,
    "prompt": "\"¡Adiós! (Me voy)\"",
    "character": "Neutral.svg",
    "correct": "Niawa!",
    "options": [
      "Niawa!",
      "tik",
      "tiutak"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Yo (forma corta)",
    "character": "Neutral.svg",
    "correct": [
      "Na'"
    ],
    "wordBank": [
      "Na'",
      "nutzuntukey",
      "ina",
      "tesu"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Tú / Vos (forma corta)",
    "character": "Neutral.svg",
    "correct": [
      "Ta'"
    ],
    "wordBank": [
      "Ta'",
      "ina",
      "nantzin",
      "tesu"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Santo Domingo de Guzmán",
    "character": "Neutral.svg",
    "correct": [
      "Witzapan"
    ],
    "wordBank": [
      "Witzapan",
      "mutukey",
      "wan",
      "ken"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Pueblo o ciudad",
    "character": "Neutral.svg",
    "correct": [
      "Techan"
    ],
    "wordBank": [
      "Techan",
      "tiut",
      "timuitat",
      "sujsul"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Señor / Don",
    "character": "Neutral.svg",
    "correct": [
      "Tajtzin"
    ],
    "wordBank": [
      "Tajtzin",
      "tiwalajtuk",
      "tiutak",
      "tasujkamati"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Señora / Doña",
    "character": "Neutral.svg",
    "correct": [
      "Nantzin"
    ],
    "wordBank": [
      "Nantzin",
      "nuchan",
      "tajpalulis",
      "tiut"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Ojalá / Primero Dios",
    "character": "Neutral.svg",
    "correct": [
      "Weliajaya"
    ],
    "wordBank": [
      "Weliajaya",
      "wan",
      "nuteku",
      "muyulu"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Nos vemos, pues",
    "character": "Neutral.svg",
    "correct": [
      "Timuitat",
      "tel"
    ],
    "wordBank": [
      "Timuitat",
      "tel",
      "ka",
      "tiut",
      "padiush"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Bienvenidos (a varios)",
    "character": "Neutral.svg",
    "correct": [
      "Yek",
      "anwalajtiwit"
    ],
    "wordBank": [
      "Yek",
      "anwalajtiwit",
      "muyulu",
      "taja",
      "tashtawi"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Mi Dios (lit. Mi padre Dios)",
    "character": "Neutral.svg",
    "correct": [
      "Nuteku",
      "Tiut"
    ],
    "wordBank": [
      "Nuteku",
      "Tiut",
      "taja",
      "witzapan",
      "tesu"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "¿",
    "after": "tiwitz? (¿De dónde vienes?)",
    "correct": "Kanka",
    "options": [
      "Kan",
      "Kanka",
      "ina"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Naja",
    "after": "niwitz ka Witzapan. (Yo también vengo de...)",
    "correct": "nusan",
    "options": [
      "san",
      "nusan",
      "tik"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Yek",
    "after": ", tamachtiani! (¡Buenos días, profesor!)",
    "correct": "peyna",
    "options": [
      "tiutak",
      "peyna",
      "Kan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "",
    "after": "sa' niwetzi. (No vaya a ser que me caiga.)",
    "correct": "Ma'",
    "options": [
      "Ma'",
      "Maka",
      "Kan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Na' ninemi",
    "after": "yek. (Yo estoy un poco bien.)",
    "correct": "chupi",
    "options": [
      "sujsul",
      "chupi",
      "Wan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Nuchan nemi",
    "after": "ne techan. (Mi hogar está en el pueblo.)",
    "correct": "tik",
    "options": [
      "ka",
      "tik",
      "nutukey"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Nuteku Tiut ma metz",
    "after": "! (¡Que Dios te ayude!)",
    "correct": "palewi",
    "options": [
      "palewi",
      "Ken",
      "tashtawi"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "",
    "after": ", nikneki. (Sí, quiero.)",
    "correct": "Eje",
    "options": [
      "Tesu",
      "Eje",
      "tashtawi"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "¿Tay",
    "after": "muyulu? (¿Qué dice tu corazón?)",
    "correct": "ina",
    "options": [
      "Eje",
      "yek",
      "ina"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Naja",
    "after": "nimumachtia Nawat. (Yo quiero aprender Nawat.)",
    "correct": "nikneki",
    "options": [
      "nikmati",
      "nikneki",
      "Kanka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "",
    "after": "peyna. (Mañana por la mañana.)",
    "correct": "Musta",
    "options": [
      "Musta",
      "Witzapan",
      "Yalua"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Naja",
    "after": "Sixta. (Yo me llamo Sixta.)",
    "correct": "nutukey",
    "options": [
      "nutukey",
      "Musta",
      "nutzuntukey"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "¿",
    "after": "tinemi? (¿Cómo estás?)",
    "correct": "Ken",
    "options": [
      "Kan",
      "Muchan",
      "Ken"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Na' ninemi sujsul",
    "after": ". (Yo estoy muy bien.)",
    "correct": "yek",
    "options": [
      "chuka",
      "Ken",
      "yek"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 1,
    "before": "Shu",
    "after": "! (¡Que te vaya bien!)",
    "correct": "yek",
    "options": [
      "nikneki",
      "yek",
      "peyna"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Buenas noches.",
    "character": "Neutral.svg",
    "correct": [
      "Yek",
      "tayua"
    ],
    "wordBank": [
      "Yek",
      "tayua",
      "tinemi",
      "nemi",
      "ken"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "De nada.",
    "character": "Neutral.svg",
    "correct": [
      "Tesu",
      "datka"
    ],
    "wordBank": [
      "Tesu",
      "datka",
      "metztajpia",
      "ina",
      "tinemi"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "¿Cómo te llamas tú?",
    "character": "Neutral.svg",
    "correct": [
      "Ken",
      "mutukey",
      "taja?"
    ],
    "wordBank": [
      "Ken",
      "mutukey",
      "taja?",
      "tay",
      "nutzuntukey",
      "man"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Mi corazón está bien.",
    "character": "Neutral.svg",
    "correct": [
      "Nuyulu",
      "nemi",
      "yek"
    ],
    "wordBank": [
      "Nuyulu",
      "nemi",
      "yek",
      "tajkutunal",
      "tinemi",
      "tiutak"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Mi corazón está alegre.",
    "character": "Neutral.svg",
    "correct": [
      "Paki",
      "nuyulu"
    ],
    "wordBank": [
      "Paki",
      "nuyulu",
      "tik",
      "niwitz",
      "metztashtawi"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Mi hogar es Santo Domingo de Guzmán.",
    "character": "Neutral.svg",
    "correct": [
      "Witzapan",
      "nuchan"
    ],
    "wordBank": [
      "Witzapan",
      "nuchan",
      "payush",
      "tayua",
      "tesu"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Gracias, señor.",
    "character": "Neutral.svg",
    "correct": [
      "Payush,",
      "tajtzin"
    ],
    "wordBank": [
      "Payush,",
      "tajtzin",
      "tinemi",
      "peyna",
      "payush"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Nos vemos mañana.",
    "character": "Neutral.svg",
    "correct": [
      "Timuitat",
      "musta"
    ],
    "wordBank": [
      "Timuitat",
      "musta",
      "peyna",
      "shiawa",
      "panpadiush"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Yo vengo de El Salvador.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "niwitz",
      "ka",
      "Kuskatan"
    ],
    "wordBank": [
      "Naja",
      "niwitz",
      "ka",
      "Kuskatan",
      "nemi",
      "nantzin",
      "weliajaya"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Buen mediodía.",
    "character": "Neutral.svg",
    "correct": [
      "Yek",
      "tajkutunal"
    ],
    "wordBank": [
      "Yek",
      "tajkutunal",
      "tesu",
      "tik",
      "nuchan"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "¡Vete! / ¡Adiós! (al que se va).",
    "character": "Neutral.svg",
    "correct": [
      "Shiawa!"
    ],
    "wordBank": [
      "Shiawa!",
      "tashtawi",
      "anwalajtiwit",
      "niawa"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "¿Cómo estás tú?",
    "character": "Neutral.svg",
    "correct": [
      "Ken",
      "tinemi",
      "taja?"
    ],
    "wordBank": [
      "Ken",
      "tinemi",
      "taja?",
      "metztashtawi",
      "paki",
      "tesu"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "¡Muchas gracias!",
    "character": "Neutral.svg",
    "correct": [
      "¡Panpadiush!"
    ],
    "wordBank": [
      "¡Panpadiush!",
      "taja",
      "niwitz",
      "tesu"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Mi apellido es...",
    "character": "Neutral.svg",
    "correct": [
      "Wan",
      "nutzuntukey..."
    ],
    "wordBank": [
      "Wan",
      "nutzuntukey...",
      "tayua",
      "mutukey",
      "nemi"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "¿Y tú?",
    "character": "Neutral.svg",
    "correct": [
      "Wan",
      "taja?"
    ],
    "wordBank": [
      "Wan",
      "taja?",
      "paki",
      "man",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "¿Dónde está tu casa?",
    "character": "Neutral.svg",
    "correct": [
      "¿Kan",
      "nemi",
      "muchan?"
    ],
    "wordBank": [
      "¿Kan",
      "nemi",
      "muchan?",
      "nantzin",
      "ka",
      "padiush"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Estoy muy bien",
    "character": "Neutral.svg",
    "correct": [
      "Ninemi",
      "sujsul",
      "yek."
    ],
    "wordBank": [
      "Ninemi",
      "sujsul",
      "yek.",
      "peyna",
      "wan",
      "payush"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Bienvenido",
    "character": "Neutral.svg",
    "correct": [
      "Yek",
      "tiwalajtuk."
    ],
    "wordBank": [
      "Yek",
      "tiwalajtuk.",
      "sujsul",
      "muyulu",
      "anwalajtiwit"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Mi corazón está triste/llorando",
    "character": "Neutral.svg",
    "correct": [
      "Chuka",
      "nuyulu."
    ],
    "wordBank": [
      "Chuka",
      "nuyulu.",
      "tay",
      "padiush",
      "tashtawi"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Ojalá nos veamos mañana",
    "character": "Neutral.svg",
    "correct": [
      "Weliajaya",
      "timuitat",
      "musta."
    ],
    "wordBank": [
      "Weliajaya",
      "timuitat",
      "musta.",
      "peyna",
      "taja",
      "nemi"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Ahí nos vemos",
    "character": "Neutral.svg",
    "correct": [
      "Man",
      "timuitat."
    ],
    "wordBank": [
      "Man",
      "timuitat.",
      "na",
      "wan",
      "tayua"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "¡Ya me voy!",
    "character": "Neutral.svg",
    "correct": [
      "¡Niawa!"
    ],
    "wordBank": [
      "¡Niawa!",
      "tay",
      "tiutak",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Yo vengo de El Salvador",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "niwitz",
      "ka",
      "Kuskatan."
    ],
    "wordBank": [
      "Naja",
      "niwitz",
      "ka",
      "Kuskatan.",
      "tesu",
      "witzapan",
      "yek"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Que Dios te cuide",
    "character": "Neutral.svg",
    "correct": [
      "Nuteku",
      "Tiut",
      "ma",
      "metztajpia."
    ],
    "wordBank": [
      "Nuteku",
      "Tiut",
      "ma",
      "metztajpia.",
      "timuitat",
      "tiutak",
      "tinemi"
    ]
  },
  {
    "type": "translate",
    "stage": 1,
    "prompt": "Mi corazón está emocionado",
    "character": "Neutral.svg",
    "correct": [
      "Yuyumuka",
      "nuyulu."
    ],
    "wordBank": [
      "Yuyumuka",
      "nuyulu.",
      "ta",
      "muchan",
      "nuteku"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base negra con otros colores o canas.",
    "character": "Neutral.svg",
    "correct": [
      "Tiltituk"
    ],
    "wordBank": [
      "Tiltituk",
      "tuchti",
      "kuseseknaj",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Plateado (como si fuera gris).",
    "character": "Neutral.svg",
    "correct": [
      "Kuneshnaj"
    ],
    "wordBank": [
      "Kuneshnaj",
      "kuseseknaj",
      "nupal",
      "nuknew"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Rojo pálido o desteñido.",
    "character": "Neutral.svg",
    "correct": [
      "Achiltik"
    ],
    "wordBank": [
      "Achiltik",
      "shushuwishtuk",
      "kuchiltikchin",
      "shuchit"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Rosado suave o tono pastel.",
    "character": "Neutral.svg",
    "correct": [
      "Kuchiltikchin"
    ],
    "wordBank": [
      "Kuchiltikchin",
      "ka",
      "achikilit",
      "kutultik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base verde con otros colores (multicolor).",
    "character": "Neutral.svg",
    "correct": [
      "Shushuwishtuk"
    ],
    "wordBank": [
      "Shushuwishtuk",
      "tilkwil",
      "panti",
      "nugustuj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Dorado (como si fuera amarillo).",
    "character": "Neutral.svg",
    "correct": [
      "Kutultik"
    ],
    "wordBank": [
      "Kutultik",
      "ikajku",
      "pushawak",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base morada con otros colores.",
    "character": "Neutral.svg",
    "correct": [
      "Pushawatuk"
    ],
    "wordBank": [
      "Pushawatuk",
      "wan",
      "ikajku",
      "atutun"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Amarillo pálido o sin vitalidad.",
    "character": "Neutral.svg",
    "correct": [
      "Atultik"
    ],
    "wordBank": [
      "Atultik",
      "kuneshnaj",
      "tultiaka",
      "kuseseknaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base blanca con manchas o hilos de color.",
    "character": "Neutral.svg",
    "correct": [
      "Istastuk"
    ],
    "wordBank": [
      "Istastuk",
      "itajtachishka",
      "chipawak",
      "chichilijtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Café.",
    "character": "Neutral.svg",
    "correct": [
      "Kupuknaj"
    ],
    "wordBank": [
      "Kupuknaj",
      "atultik",
      "kushushuknaj",
      "kuseseknaj"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 2,
    "before": "¿",
    "after": "itachishka mugustuj? (¿Qué color te gusta?)",
    "correct": "Tay",
    "options": [
      "Ken",
      "Tilkwil",
      "Tay"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 2,
    "before": "Ne",
    "after": "tutut. (El pájaro verde)",
    "correct": "shushuknaj",
    "options": [
      "Shushuknajchin",
      "Tzunshilut",
      "shushuknaj"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 2,
    "before": "Ne wipil",
    "after": "tiltik. (La blusa es color negro)",
    "correct": "itachishka",
    "options": [
      "tultik",
      "itachishka",
      "itajtachishka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 2,
    "before": "¿",
    "after": "itachishka? (¿Cómo es su apariencia?)",
    "correct": "Ken",
    "options": [
      "Ken",
      "amat",
      "Tay"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 2,
    "before": "Naja",
    "after": "ne itachishka chiltik. (A mí me gusta el color rojo)",
    "correct": "nugustuj",
    "options": [
      "ayuj",
      "itachishka",
      "nugustuj"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 2,
    "before": "Ne lala",
    "after": ". (La naranja es amarillo pálido)",
    "correct": "atultik",
    "options": [
      "lala",
      "atultik",
      "tultik"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 2,
    "before": "Ne",
    "after": "wipil. (La blusa negra)",
    "correct": "tiltik",
    "options": [
      "tiltituk",
      "chichilijtuk",
      "tiltik"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 2,
    "before": "Ne tzijtzikwini",
    "after": ". (El saltamontes multicolor/rojo)",
    "correct": "chichilijtuk",
    "options": [
      "chiltik",
      "chichilijtuk",
      "Kuchiltikchin"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 2,
    "before": "Ne mistun",
    "after": ". (El gato es blanco con manchas)",
    "correct": "istastuk",
    "options": [
      "istak",
      "istastuk",
      "Tilkwil"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 2,
    "before": "Ne",
    "after": "kwawit. (El árbol torcido/color madera)",
    "correct": "kupuknaj",
    "options": [
      "chiltik",
      "kupuknaj",
      "tultik"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El pájaro verde suave (pastel).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shushuknajchin",
      "tutut"
    ],
    "wordBank": [
      "Ne",
      "shushuknajchin",
      "tutut",
      "achikilit",
      "wawasujtuk",
      "kupuknajtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color anaranjado multicolor (base naranja con otros colores).",
    "character": "Neutral.svg",
    "correct": [
      "Itachishka",
      "achiujtuk"
    ],
    "wordBank": [
      "Itachishka",
      "achiujtuk",
      "nitzunhistastuk",
      "shushuknaj",
      "shuchit"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La bandera es color azul.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "panti",
      "itachishka",
      "susul"
    ],
    "wordBank": [
      "Ne",
      "panti",
      "itachishka",
      "susul",
      "atutun",
      "naka",
      "chiltikchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Yo amanecí con el cabello casi todo blanco (con algunas canas oscuras).",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitatwik",
      "nitzunhistastuk"
    ],
    "wordBank": [
      "Naja",
      "nitatwik",
      "nitzunhistastuk",
      "neshnajtuk",
      "tuchti",
      "ikajku"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Pantalón negro pálido o descolorido.",
    "character": "Neutral.svg",
    "correct": [
      "Atiltik",
      "sala"
    ],
    "wordBank": [
      "Atiltik",
      "sala",
      "kushushuknaj",
      "teksisti",
      "kuchiltikchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Muchos colores / Multicolor.",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "itajtachishka"
    ],
    "wordBank": [
      "Miak",
      "itajtachishka",
      "wawasujtuk",
      "musala",
      "sinti"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La blusa blanca.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "istak",
      "wipil"
    ],
    "wordBank": [
      "Ne",
      "istak",
      "wipil",
      "musala",
      "achiut",
      "tataknaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color rosado multicolor (base rosa con otros colores).",
    "character": "Neutral.svg",
    "correct": [
      "Kuchiltituk",
      "itachishka"
    ],
    "wordBank": [
      "Kuchiltituk",
      "itachishka",
      "keman",
      "achikilit",
      "shushuwishtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El café tibio (que era caliente y se enfrió).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kuseseknaj",
      "atutun"
    ],
    "wordBank": [
      "Ne",
      "kuseseknaj",
      "atutun",
      "patznaj",
      "pushawak",
      "kupuknaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La flor color rosa/rojo multicolor.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chichilijtuk",
      "shuchit"
    ],
    "wordBank": [
      "Ne",
      "chichilijtuk",
      "shuchit",
      "susulnaj",
      "tataknaj",
      "nitatwik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color gris multicolor.",
    "character": "Neutral.svg",
    "correct": [
      "Itachishka",
      "neshnajtuk"
    ],
    "wordBank": [
      "Itachishka",
      "neshnajtuk",
      "wan",
      "kuchiltituk",
      "kutultik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color blanco pálido/desteñido.",
    "character": "Neutral.svg",
    "correct": [
      "Aistak",
      "itachishka"
    ],
    "wordBank": [
      "Aistak",
      "itachishka",
      "itajtachishka",
      "ka",
      "kuseseknaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La tortilla base amarilla con otros colores.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tultituk",
      "tamal"
    ],
    "wordBank": [
      "Ne",
      "tultituk",
      "tamal",
      "nitzunhistastuk",
      "nupal",
      "pushawatuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base azul con otros colores.",
    "character": "Neutral.svg",
    "correct": [
      "Susulwijtuk"
    ],
    "wordBank": [
      "Susulwijtuk",
      "nitatwik",
      "kuchiltituk",
      "shushuknajchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Celeste.",
    "character": "Neutral.svg",
    "correct": [
      "Kushushuknaj"
    ],
    "wordBank": [
      "Kushushuknaj",
      "susulwijtuk",
      "tishkwepti",
      "tultika"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color dorado",
    "character": "Neutral.svg",
    "correct": [
      "Itachishka",
      "kutultik."
    ],
    "wordBank": [
      "Itachishka",
      "kutultik.",
      "se",
      "sinti",
      "siwapil"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La blusa es color rosado suave",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "wipil",
      "itachishka",
      "kuchiltikchin."
    ],
    "wordBank": [
      "Ne",
      "wipil",
      "itachishka",
      "kuchiltikchin.",
      "achiltik",
      "kuseseknaj",
      "pushawatuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Pantalón café multicolor",
    "character": "Neutral.svg",
    "correct": [
      "Kupuknajtuk",
      "sala."
    ],
    "wordBank": [
      "Kupuknajtuk",
      "sala.",
      "susulnaj",
      "achiltik",
      "chichilijtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El pájaro es color verde",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tutut",
      "itachishka",
      "shushuknaj."
    ],
    "wordBank": [
      "Ne",
      "tutut",
      "itachishka",
      "shushuknaj.",
      "niistakchin",
      "panti",
      "itajtachishka"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Rojo suave (pastel)",
    "character": "Neutral.svg",
    "correct": [
      "Chiltikchin."
    ],
    "wordBank": [
      "Chiltikchin.",
      "teksisti",
      "nunan",
      "ikwikwil"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Mi cabello es todo canoso (blanco total)",
    "character": "Neutral.svg",
    "correct": [
      "Nutzunkal",
      "tzunhistak."
    ],
    "wordBank": [
      "Nutzunkal",
      "tzunhistak.",
      "miak",
      "atultik",
      "tiawel"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Un perro negro con manchas de colores",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tiltituk",
      "pelu."
    ],
    "wordBank": [
      "Se",
      "tiltituk",
      "pelu.",
      "tzatzasnaj",
      "niistakchin",
      "chipawak"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El cielo es celeste multicolor",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ka",
      "ikajku",
      "itachishka",
      "kushushuwishtuk."
    ],
    "wordBank": [
      "Ne",
      "ka",
      "ikajku",
      "itachishka",
      "kushushuwishtuk.",
      "tuchti",
      "tishkwepti",
      "kuchiltituk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Amarillo pálido (desteñido)",
    "character": "Neutral.svg",
    "correct": [
      "Atultik."
    ],
    "wordBank": [
      "Atultik.",
      "itultika",
      "achiltik",
      "naka"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La blusa morada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "pushawak",
      "wipil."
    ],
    "wordBank": [
      "Ne",
      "pushawak",
      "wipil.",
      "kushushuwishtuk",
      "kupuknaj",
      "nunan"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "¿Qué color es tu pantalón?",
    "character": "Neutral.svg",
    "correct": [
      "¿Tay",
      "itachishka",
      "musala?."
    ],
    "wordBank": [
      "¿Tay",
      "itachishka",
      "musala?.",
      "siwapil",
      "nitatwik",
      "kuseseknaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "A mí me gusta el color plateado",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nugustuj",
      "ne",
      "itachishka",
      "kuneshnaj."
    ],
    "wordBank": [
      "Naja",
      "nugustuj",
      "ne",
      "itachishka",
      "kuneshnaj.",
      "susul",
      "atultik",
      "susulnaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Rojo desteñido",
    "character": "Neutral.svg",
    "correct": [
      "Achiltik."
    ],
    "wordBank": [
      "Achiltik.",
      "mijmikik",
      "tilkwil",
      "tishkwepti"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base café con otros colores",
    "character": "Neutral.svg",
    "correct": [
      "Kupuknajtuk."
    ],
    "wordBank": [
      "Kupuknajtuk.",
      "achiltik",
      "chiltik",
      "chiltikchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El pájaro es azul",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tutut",
      "itachishka",
      "susul."
    ],
    "wordBank": [
      "Ne",
      "tutut",
      "itachishka",
      "susul.",
      "pelu",
      "achikilit",
      "istastuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base anaranjada con otros colores (multicolor).",
    "character": "Neutral.svg",
    "correct": [
      "Achiujtuk"
    ],
    "wordBank": [
      "Achiujtuk",
      "itultika",
      "nutzunkal",
      "itzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Dorado (como si fuera amarillo).",
    "character": "Neutral.svg",
    "correct": [
      "Kutultik"
    ],
    "wordBank": [
      "Kutultik",
      "kwikwilnaj",
      "tilkwil",
      "shuchit"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Rojo pálido o desteñido.",
    "character": "Neutral.svg",
    "correct": [
      "Achiltik"
    ],
    "wordBank": [
      "Achiltik",
      "tiltik",
      "atultik",
      "kuchiltikchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Verde suave o tono pastel.",
    "character": "Neutral.svg",
    "correct": [
      "Shushuknajchin"
    ],
    "wordBank": [
      "Shushuknajchin",
      "atiltik",
      "tzunhistak",
      "mijmikik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base gris con manchas o hilos de color.",
    "character": "Neutral.svg",
    "correct": [
      "Neshnajtuk"
    ],
    "wordBank": [
      "Neshnajtuk",
      "sala",
      "achikilit",
      "kupuknajtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Blanco pálido (deslavado).",
    "character": "Neutral.svg",
    "correct": [
      "Aistak"
    ],
    "wordBank": [
      "Aistak",
      "pushawatuk",
      "nitzunshilut",
      "kwikwilnaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base rosada multicolor.",
    "character": "Neutral.svg",
    "correct": [
      "Kuchiltituk"
    ],
    "wordBank": [
      "Kuchiltituk",
      "shushuknaj",
      "taiwan",
      "mijmikik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Negro pálido o sin vitalidad.",
    "character": "Neutral.svg",
    "correct": [
      "Atiltik"
    ],
    "wordBank": [
      "Atiltik",
      "kuneshnaj",
      "nitatwik",
      "tultiaka"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color café.",
    "character": "Neutral.svg",
    "correct": [
      "Kupuknaj"
    ],
    "wordBank": [
      "Kupuknaj",
      "nitiltikchin",
      "siwapil",
      "susulnaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Plateado (como si fuera gris).",
    "character": "Neutral.svg",
    "correct": [
      "Kuneshnaj"
    ],
    "wordBank": [
      "Kuneshnaj",
      "nugustuj",
      "naja",
      "tamal"
    ]
  },
  {
    "type": "select_translation",
    "stage": 2,
    "prompt": "Si una persona tiene cabello negro pero le están saliendo canas, su cabello es:",
    "character": "Neutral.svg",
    "correct": "Tiltituk",
    "options": [
      "Chipawak",
      "Tiltituk",
      "Tiltik"
    ]
  },
  {
    "type": "select_translation",
    "stage": 2,
    "prompt": "¿Cómo preguntarías \"¿Cómo es su apariencia?\"?",
    "character": "Neutral.svg",
    "correct": "¿Ken itachishka?",
    "options": [
      "¿Tay itachishka?",
      "Ne panti itachishka susul wan istak",
      "¿Ken itachishka?"
    ]
  },
  {
    "type": "select_translation",
    "stage": 2,
    "prompt": "Para decir \"pájaro verde\" anteponiendo el color, la forma correcta es:",
    "character": "Neutral.svg",
    "correct": "Ne shushuknaj tutut",
    "options": [
      "Ne tiltik wipil",
      "Ne shushuknaj tutut",
      "Ne tutut shushuknaj"
    ]
  },
  {
    "type": "select_translation",
    "stage": 2,
    "prompt": "El prefijo \"KU-\" se utiliza para indicar:",
    "character": "Neutral.svg",
    "correct": "\"Como si fuera\" un color",
    "options": [
      "Rojo pálido o desteñido",
      "Un color suave",
      "\"Como si fuera\" un color"
    ]
  },
  {
    "type": "select_translation",
    "stage": 2,
    "prompt": "Un perro que es negro pero tiene manchas blancas es:",
    "character": "Neutral.svg",
    "correct": "Tiltituk",
    "options": [
      "tutut",
      "Tiltituk",
      "Atiltik"
    ]
  },
  {
    "type": "select_translation",
    "stage": 2,
    "prompt": "¿Qué palabra significa \"muchos colores\" o \"multicolor\"?",
    "character": "Neutral.svg",
    "correct": "Miak itajtachishka",
    "options": [
      "Miak itajtachishka",
      "Naja nitatwik nitzunhistastuk",
      "Ne lala atultik"
    ]
  },
  {
    "type": "select_translation",
    "stage": 2,
    "prompt": "Para decir \"La blusa es color negro\" usando el posesivo, se dice:",
    "character": "Neutral.svg",
    "correct": "Ne wipil itachishka tiltik",
    "options": [
      "Ne tiltik wipil",
      "Ne wipil itachishka tiltik",
      "Naja niistakchin"
    ]
  },
  {
    "type": "select_translation",
    "stage": 2,
    "prompt": "El sufijo \"-CHIN\" al final de un color indica:",
    "character": "Neutral.svg",
    "correct": "Un tono suave o pastel",
    "options": [
      "Un tono pálido",
      "El papel es delgado",
      "Un tono suave o pastel"
    ]
  },
  {
    "type": "select_translation",
    "stage": 2,
    "prompt": "Si una camisa roja se ha desteñido por las lavadas, el color es:",
    "character": "Neutral.svg",
    "correct": "Achiltik",
    "options": [
      "Achiltik",
      "Chiltikchin",
      "Kutultik"
    ]
  },
  {
    "type": "select_translation",
    "stage": 2,
    "prompt": "¿Qué significa la pregunta \"¿Tay itachishka mugustuj?\"?",
    "character": "Neutral.svg",
    "correct": "¿Qué color te gusta?",
    "options": [
      "¿Cómo es el color que te gusta?",
      "¿Qué color te gusta?",
      "La blusa es color rosado suave"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La bandera es color azul.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "panti",
      "itachishka",
      "susul"
    ],
    "wordBank": [
      "Ne",
      "panti",
      "itachishka",
      "susul",
      "tzunhistak",
      "susulwijtuk",
      "niistakchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color gris multicolor (base gris con otros colores).",
    "character": "Neutral.svg",
    "correct": [
      "Itachishka",
      "neshnajtuk"
    ],
    "wordBank": [
      "Itachishka",
      "neshnajtuk",
      "pelu",
      "ikajku",
      "tzatzasnajchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El zacate reverdecido (base verde con otros colores).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shushuwishtuk",
      "tzakat"
    ],
    "wordBank": [
      "Ne",
      "shushuwishtuk",
      "tzakat",
      "shushuknajchin",
      "susulnaj",
      "teksisti"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "A mí me gusta el color plateado.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nugustuj",
      "ne",
      "itachishka",
      "kuneshnaj"
    ],
    "wordBank": [
      "Naja",
      "nugustuj",
      "ne",
      "itachishka",
      "kuneshnaj",
      "kanawak",
      "tay",
      "kuseseknaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La naranja amarillo pálido (todavía tierna).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "lala",
      "atultik"
    ],
    "wordBank": [
      "Ne",
      "lala",
      "atultik",
      "shuchit",
      "tutut",
      "se"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color celeste multicolor.",
    "character": "Neutral.svg",
    "correct": [
      "Itachishka",
      "kushushuwishtuk"
    ],
    "wordBank": [
      "Itachishka",
      "kushushuwishtuk",
      "ikwikwil",
      "tilkwil",
      "shuchit"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La blusa negra.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tiltik",
      "wipil"
    ],
    "wordBank": [
      "Ne",
      "tiltik",
      "wipil",
      "kupuknaj",
      "aistak",
      "chiltikchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La flor color rosa/rojo multicolor.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chichilijtuk",
      "shuchit"
    ],
    "wordBank": [
      "Ne",
      "chichilijtuk",
      "shuchit",
      "teksisti",
      "sinti",
      "ikajku"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Yo amanecí con el cabello casi todo blanco (canoso).",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitatwik",
      "nitzunhistastuk"
    ],
    "wordBank": [
      "Naja",
      "nitatwik",
      "nitzunhistastuk",
      "tuchti",
      "tiawel",
      "achiut"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La blusa blanca.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "istak",
      "wipil"
    ],
    "wordBank": [
      "Ne",
      "istak",
      "wipil",
      "musala",
      "chiltikchin",
      "atiltik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base azul con otros colores (multicolor).",
    "character": "Neutral.svg",
    "correct": [
      "Susulwijtuk"
    ],
    "wordBank": [
      "Susulwijtuk",
      "nuknew",
      "tutut",
      "ka"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El café tibio (que se enfrió).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kuseseknaj",
      "atutun"
    ],
    "wordBank": [
      "Ne",
      "kuseseknaj",
      "atutun",
      "istastuk",
      "chiltituk",
      "chichilijtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color morado multicolor.",
    "character": "Neutral.svg",
    "correct": [
      "Pushawatuk",
      "itachishka"
    ],
    "wordBank": [
      "Pushawatuk",
      "itachishka",
      "tiawel",
      "kuchiltituk",
      "shuchit"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La flor color rojo suave (pastel).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chiltikchin",
      "shuchit"
    ],
    "wordBank": [
      "Ne",
      "chiltikchin",
      "shuchit",
      "aistak",
      "tishkwepti",
      "pelu"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color blanco pálido o desteñido.",
    "character": "Neutral.svg",
    "correct": [
      "Aistak",
      "itachishka"
    ],
    "wordBank": [
      "Aistak",
      "itachishka",
      "nitzunshilut",
      "iwan",
      "yawi"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color dorado",
    "character": "Neutral.svg",
    "correct": [
      "Itachishka",
      "kutultik."
    ],
    "wordBank": [
      "Itachishka",
      "kutultik.",
      "nugustuj",
      "koton",
      "kuneshnaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Pantalón negro pálido (desteñido)",
    "character": "Neutral.svg",
    "correct": [
      "Atiltik",
      "sala."
    ],
    "wordBank": [
      "Atiltik",
      "sala.",
      "achikilit",
      "iwan",
      "achiujtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El pájaro es color verde",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tutut",
      "itachishka",
      "shushuknaj."
    ],
    "wordBank": [
      "Ne",
      "tutut",
      "itachishka",
      "shushuknaj.",
      "kuneshnaj",
      "nitzunshilut",
      "tiawel"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Base café con otros colores",
    "character": "Neutral.svg",
    "correct": [
      "Kupuknajtuk."
    ],
    "wordBank": [
      "Kupuknajtuk.",
      "panti",
      "nitiltikchin",
      "lala"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Rojo suave (pastel)",
    "character": "Neutral.svg",
    "correct": [
      "Chiltikchin."
    ],
    "wordBank": [
      "Chiltikchin.",
      "susulwijtuk",
      "wipil",
      "nunan"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "¿Qué color es?",
    "character": "Neutral.svg",
    "correct": [
      "¿Tay",
      "itachishka?."
    ],
    "wordBank": [
      "¿Tay",
      "itachishka?.",
      "achikilit",
      "keman",
      "itzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Maíz multicolor",
    "character": "Neutral.svg",
    "correct": [
      "Sinti",
      "miak",
      "itajtachishka."
    ],
    "wordBank": [
      "Sinti",
      "miak",
      "itajtachishka.",
      "tataknaj",
      "tilkwil",
      "tzunshilut"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Rosado suave (pastel)",
    "character": "Neutral.svg",
    "correct": [
      "Kuchiltikchin."
    ],
    "wordBank": [
      "Kuchiltikchin.",
      "tiltik",
      "tultituk",
      "achiujtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Mi cabello es todo canoso (blanco total)",
    "character": "Neutral.svg",
    "correct": [
      "Nutzunkal",
      "tzunhistak."
    ],
    "wordBank": [
      "Nutzunkal",
      "tzunhistak.",
      "chipawak",
      "itultika",
      "achiut"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La blusa morada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "pushawak",
      "wipil."
    ],
    "wordBank": [
      "Ne",
      "pushawak",
      "wipil.",
      "naka",
      "kuchiltikchin",
      "tzakat"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Un perro negro con manchas (canas o colores)",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tiltituk",
      "pelu."
    ],
    "wordBank": [
      "Se",
      "tiltituk",
      "pelu.",
      "aistak",
      "taiwan",
      "mijmikik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El cielo es celeste multicolor",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ka",
      "ikajku",
      "itachishka",
      "kushushuwishtuk."
    ],
    "wordBank": [
      "Ne",
      "ka",
      "ikajku",
      "itachishka",
      "kushushuwishtuk.",
      "nupal",
      "tzunhistak",
      "patznaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Amarillo pálido",
    "character": "Neutral.svg",
    "correct": [
      "Atultik."
    ],
    "wordBank": [
      "Atultik.",
      "tzakat",
      "tutut",
      "itzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El pájaro verde",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shushuknaj",
      "tutut."
    ],
    "wordBank": [
      "Ne",
      "shushuknaj",
      "tutut.",
      "naja",
      "tzatzasnajchin",
      "chiltikchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "A mí me gusta el color rojo",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nugustuj",
      "ne",
      "itachishka",
      "chiltik."
    ],
    "wordBank": [
      "Naja",
      "nugustuj",
      "ne",
      "itachishka",
      "chiltik.",
      "kushushuwishtuk",
      "ka",
      "puyuj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Rubio/a (cabello color vello de elote)",
    "character": "Neutral.svg",
    "correct": [
      "Tzunshilut"
    ],
    "wordBank": [
      "Tzunshilut",
      "kanawak",
      "tamal",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Colorado / Color manzana",
    "character": "Neutral.svg",
    "correct": [
      "Tataknaj"
    ],
    "wordBank": [
      "Tataknaj",
      "tultiaka",
      "shushuwishtuk",
      "nitzunshilut"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Pintado / Coloreado",
    "character": "Neutral.svg",
    "correct": [
      "Kwikwilnaj"
    ],
    "wordBank": [
      "Kwikwilnaj",
      "chipawak",
      "teksisti",
      "achiltik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Transparente / Claro (como el vidrio)",
    "character": "Neutral.svg",
    "correct": [
      "Tzatzasnaj"
    ],
    "wordBank": [
      "Tzatzasnaj",
      "atutun",
      "kuneshnaj",
      "istastuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Rayado (con líneas)",
    "character": "Neutral.svg",
    "correct": [
      "Wawasujtuk"
    ],
    "wordBank": [
      "Wawasujtuk",
      "tiltituk",
      "ikwikwil",
      "kushushuwishtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Dibujo en blanco y negro (solo contorno)",
    "character": "Neutral.svg",
    "correct": [
      "Tilkwil"
    ],
    "wordBank": [
      "Tilkwil",
      "susulnaj",
      "tzakat",
      "tuchti"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Clara de huevo (blanco)",
    "character": "Neutral.svg",
    "correct": [
      "Istaka"
    ],
    "wordBank": [
      "Istaka",
      "susulnaj",
      "miak",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Yema de huevo (amarillo)",
    "character": "Neutral.svg",
    "correct": [
      "Tultika"
    ],
    "wordBank": [
      "Tultika",
      "tataknaj",
      "itzunkal",
      "istastuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Achiote (color anaranjado natural)",
    "character": "Neutral.svg",
    "correct": [
      "Achiut"
    ],
    "wordBank": [
      "Achiut",
      "tikneki",
      "chiltik",
      "atutun"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Trigueño (color de piel)",
    "character": "Neutral.svg",
    "correct": [
      "Chipawak"
    ],
    "wordBank": [
      "Chipawak",
      "pushawatuk",
      "at",
      "nitatwik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El maíz rojo multicolor (base roja con otros colores).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chiltituk",
      "sinti"
    ],
    "wordBank": [
      "Ne",
      "chiltituk",
      "sinti",
      "kanawak",
      "tiltituk",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Yo soy rubio (mi cabello es color vello de elote).",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitzunshilut"
    ],
    "wordBank": [
      "Naja",
      "nitzunshilut",
      "tzakat",
      "tultiaka",
      "taiwan"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El agua es clarita/transparente.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "at",
      "tzatzasnajchin"
    ],
    "wordBank": [
      "Ne",
      "at",
      "tzatzasnajchin",
      "shuchit",
      "miak",
      "shushuwishtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La foto (dibujo a color) de mi mamá está coloreada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ikwikwil",
      "nunan",
      "kwikwilnaj"
    ],
    "wordBank": [
      "Ne",
      "ikwikwil",
      "nunan",
      "kwikwilnaj",
      "itachishka",
      "teksisti",
      "pushawak"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La tortilla (o masa) amarilla multicolor.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tultituk",
      "tamal"
    ],
    "wordBank": [
      "Ne",
      "tultituk",
      "tamal",
      "tay",
      "wawasujtuk",
      "istastuk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Yo soy de piel clara/blanquito.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "niistakchin"
    ],
    "wordBank": [
      "Naja",
      "niistakchin",
      "yawi",
      "patznaj",
      "puyuj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La bandera celeste.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kushushuknaj",
      "panti"
    ],
    "wordBank": [
      "Ne",
      "kushushuknaj",
      "panti",
      "chiltikchin",
      "yawi",
      "iwan"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Color gris multicolor.",
    "character": "Neutral.svg",
    "correct": [
      "Itachishka",
      "neshnajtuk"
    ],
    "wordBank": [
      "Itachishka",
      "neshnajtuk",
      "nitiltikchin",
      "kanawak",
      "achikilit"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El berro (hierba verde) va con la comida.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "achikilit",
      "yawi",
      "iwan",
      "ne",
      "taiwan"
    ],
    "wordBank": [
      "Ne",
      "achikilit",
      "yawi",
      "iwan",
      "ne",
      "taiwan",
      "kuneshnaj",
      "susul",
      "tuchti"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El dibujo (en blanco y negro) es mío.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tilkwil",
      "nupal"
    ],
    "wordBank": [
      "Ne",
      "tilkwil",
      "nupal",
      "keman",
      "sala",
      "kuneshnaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El tomate silvestre es color rojo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chiltumat",
      "itachishka",
      "chiltik"
    ],
    "wordBank": [
      "Ne",
      "chiltumat",
      "itachishka",
      "chiltik",
      "musala",
      "koton",
      "kwikwilnaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El pollo dorado (bien cocinado).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "puyuj",
      "tultiaka"
    ],
    "wordBank": [
      "Ne",
      "puyuj",
      "tultiaka",
      "se",
      "kutultik",
      "chiltik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Cuando un hermano mío se asusta se pone blanco pálido.",
    "character": "Neutral.svg",
    "correct": [
      "Keman",
      "se",
      "nuknew",
      "mumutia",
      "naka",
      "aistak"
    ],
    "wordBank": [
      "Keman",
      "se",
      "nuknew",
      "mumutia",
      "naka",
      "aistak",
      "amat",
      "chichilijtuk",
      "wipil"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La camisa está al revés",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "tishkwepti."
    ],
    "wordBank": [
      "Ne",
      "koton",
      "tishkwepti.",
      "tiltik",
      "tultiaka",
      "nunan"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Me gusta la yema de huevo",
    "character": "Neutral.svg",
    "correct": [
      "Nugustuj",
      "ne",
      "itultika",
      "teksisti."
    ],
    "wordBank": [
      "Nugustuj",
      "ne",
      "itultika",
      "teksisti.",
      "wawasujtuk",
      "nutzunkal",
      "sinti"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El cielo es azul",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ka",
      "ikajku",
      "itachishka",
      "susul."
    ],
    "wordBank": [
      "Ne",
      "ka",
      "ikajku",
      "itachishka",
      "susul.",
      "nuknew",
      "kupuknaj",
      "nitiltikchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Yo soy moreno",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitiltikchin."
    ],
    "wordBank": [
      "Naja",
      "nitiltikchin.",
      "susulnaj",
      "kuchiltituk",
      "shushuknajchin"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La bandera es azul y blanco",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "panti",
      "itachishka",
      "susul",
      "wan",
      "istak."
    ],
    "wordBank": [
      "Ne",
      "panti",
      "itachishka",
      "susul",
      "wan",
      "istak.",
      "susulwijtuk",
      "itultika",
      "itzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El papel es delgado",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "amat",
      "kanawak."
    ],
    "wordBank": [
      "Ne",
      "amat",
      "kanawak.",
      "niistakchin",
      "panti",
      "tultituk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La flor está marchita",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shuchit",
      "mijmikik."
    ],
    "wordBank": [
      "Ne",
      "shuchit",
      "mijmikik.",
      "wawasujtuk",
      "naka",
      "patznaj"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "¿De qué color quieres?",
    "character": "Neutral.svg",
    "correct": [
      "¿Ka",
      "tiawel",
      "itachishka",
      "tikneki?"
    ],
    "wordBank": [
      "¿Ka",
      "tiawel",
      "itachishka",
      "tikneki?",
      "amat",
      "achikilit",
      "atultik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "El conejo es blanco con manchas",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "istastuk."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "istastuk.",
      "kupuknaj",
      "susulwijtuk",
      "kuchiltituk"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La niña es pelirroja",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "siwapil",
      "itzunkal",
      "chichilijtuk."
    ],
    "wordBank": [
      "Ne",
      "siwapil",
      "itzunkal",
      "chichilijtuk.",
      "tzunshilut",
      "patznaj",
      "kutultik"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "La mesa está sucia de grasa",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "patznaj",
      "susulnaj."
    ],
    "wordBank": [
      "Ne",
      "patznaj",
      "susulnaj.",
      "kwikwilnaj",
      "nitzunshilut",
      "achikilit"
    ]
  },
  {
    "type": "translate",
    "stage": 2,
    "prompt": "Mi cabello es negro",
    "character": "Neutral.svg",
    "correct": [
      "Nutzunkal",
      "tiltik."
    ],
    "wordBank": [
      "Nutzunkal",
      "tiltik.",
      "kupuknajtuk",
      "tataknaj",
      "tikneki"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Uno.",
    "character": "Neutral.svg",
    "correct": [
      "Se"
    ],
    "wordBank": [
      "Se",
      "tejemet",
      "majtakti",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cinco (lit. \"mano agarrar\").",
    "character": "Neutral.svg",
    "correct": [
      "Makwil"
    ],
    "wordBank": [
      "Makwil",
      "shashakachnaj",
      "shiwit",
      "ish"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Diez.",
    "character": "Neutral.svg",
    "correct": [
      "Majtakti"
    ],
    "wordBank": [
      "Majtakti",
      "vigesimal",
      "keski",
      "tiujume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Quince.",
    "character": "Neutral.svg",
    "correct": [
      "Kashtul"
    ],
    "wordBank": [
      "Kashtul",
      "susul",
      "ume",
      "patani"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Veinte.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "pual"
    ],
    "wordBank": [
      "Se",
      "pual",
      "chikwasen",
      "kashtul",
      "almun"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cien.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tzunti"
    ],
    "wordBank": [
      "Se",
      "tzunti",
      "pal",
      "keski",
      "najnawi"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Mil.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "shikipil"
    ],
    "wordBank": [
      "Se",
      "shikipil",
      "tik",
      "michin",
      "chijchikume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Veinticinco (arroba).",
    "character": "Neutral.svg",
    "correct": [
      "Almun"
    ],
    "wordBank": [
      "Almun",
      "pal",
      "naja",
      "shikipil"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Basado en 5 (dedos de la mano).",
    "character": "Neutral.svg",
    "correct": [
      "Sistema",
      "Quintesimal"
    ],
    "wordBank": [
      "Sistema",
      "Quintesimal",
      "majtakti",
      "ujume",
      "susul"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Basado en 20 (dedos de manos y pies).",
    "character": "Neutral.svg",
    "correct": [
      "Sistema",
      "Vigesimal"
    ],
    "wordBank": [
      "Sistema",
      "Vigesimal",
      "majmakwil",
      "tzunti",
      "tik"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 3,
    "before": "El número 13 se construye como",
    "after": ".",
    "correct": "Majtakti yey",
    "options": [
      "Majtakti yey",
      "Majtakti nawi",
      "Yey shikipil"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 3,
    "before": "Para decir \"pareja\" o \"par\" usamos el colectivo",
    "after": ".",
    "correct": "Ujume",
    "options": [
      "Yejyey",
      "Ujume",
      "Makwil"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 3,
    "before": "El ordinal \"Primero\" se dice",
    "after": ".",
    "correct": "Achtu",
    "options": [
      "Almun",
      "Makwil",
      "Achtu"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 3,
    "before": "El número 50 se traduce como",
    "after": ".",
    "correct": "Ume pual majtakti",
    "options": [
      "Yey pual",
      "Sistema Vigesimal",
      "Ume pual majtakti"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 3,
    "before": "Un \"cuarteto\" se denomina",
    "after": ".",
    "correct": "Najnawi",
    "options": [
      "Najnawi",
      "Almun",
      "Majmakwil"
    ],
    "hint": ""
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "¿Cómo se dice \"Sexto\"?",
    "character": "Neutral.svg",
    "correct": "Ne chikwasen",
    "options": [
      "Ne chikwasen",
      "Ume almun tawial",
      "Naja nikpia ume pual majtakti yey shiwit"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 3,
    "before": "El número 125 es",
    "after": ".",
    "correct": "Se tzunti se pual makwil",
    "options": [
      "Se tzunti se pual makwil",
      "Se tzunti se pual",
      "Ne chikwasen tutut"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 3,
    "before": "\"Muchos\" (contable) se dice",
    "after": ".",
    "correct": "Miak",
    "options": [
      "Wey",
      "Miak",
      "Chijchikwasen"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 3,
    "before": "El número 1,200 se construye como",
    "after": ".",
    "correct": "Se shikipil makwil tzunti",
    "options": [
      "Se tzunti ume pual majtakti",
      "Se shikipil makwil tzunti",
      "Se shikipil se tzunti"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 3,
    "before": "El número 0 se representa a menudo con la palabra",
    "after": ".",
    "correct": "Te datka",
    "options": [
      "El sexto pájaro",
      "Noventa y nueve",
      "Te datka"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Yo tengo dieciséis años.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikpia",
      "majtakti",
      "chikwasen",
      "shiwit."
    ],
    "wordBank": [
      "Naja",
      "nikpia",
      "majtakti",
      "chikwasen",
      "shiwit.",
      "keski",
      "susul",
      "chikume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Martes de marzo.",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "ume",
      "pal",
      "ne",
      "metzti",
      "yey."
    ],
    "wordBank": [
      "Tunal",
      "ume",
      "pal",
      "ne",
      "metzti",
      "yey.",
      "shuchit",
      "tzunti",
      "majtakti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Noventa y cuatro.",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual",
      "majtakti",
      "nawi."
    ],
    "wordBank": [
      "Nawi",
      "pual",
      "majtakti",
      "nawi.",
      "nikpia",
      "shuchit",
      "sistema"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Sábado.",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "chikwasen."
    ],
    "wordBank": [
      "Tunal",
      "chikwasen.",
      "pal",
      "naja",
      "keski"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Diciembre.",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "majtakti",
      "ume."
    ],
    "wordBank": [
      "Metzti",
      "majtakti",
      "ume.",
      "tejemet",
      "nikpia",
      "almun"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Dos arrobas (50) de maíz.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "almun",
      "tawial."
    ],
    "wordBank": [
      "Ume",
      "almun",
      "tawial.",
      "majmakwil",
      "et",
      "nikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Dieciocho mil.",
    "character": "Neutral.svg",
    "correct": [
      "Kashtul",
      "yey",
      "shikipil."
    ],
    "wordBank": [
      "Kashtul",
      "yey",
      "shikipil.",
      "tunal",
      "tawial",
      "chikwey"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "El tercero (ordinal).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "yey."
    ],
    "wordBank": [
      "Ne",
      "yey.",
      "ume",
      "tejemet",
      "tawial"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Quinteto.",
    "character": "Neutral.svg",
    "correct": [
      "Majmakwil."
    ],
    "wordBank": [
      "Majmakwil.",
      "chijchikwasen",
      "keski",
      "tik"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Domingo.",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "chikume."
    ],
    "wordBank": [
      "Tunal",
      "chikume.",
      "chiknawi",
      "ujume",
      "michin"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Yo tengo veinticinco años.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikpia",
      "se",
      "almun",
      "shiwit."
    ],
    "wordBank": [
      "Naja",
      "nikpia",
      "se",
      "almun",
      "shiwit.",
      "tutut",
      "chijchikwasen",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Novecientos.",
    "character": "Neutral.svg",
    "correct": [
      "Chiknawi",
      "tzunti."
    ],
    "wordBank": [
      "Chiknawi",
      "tzunti.",
      "chikume",
      "an",
      "tunal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Mil cien.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "shikipil",
      "se",
      "tzunti."
    ],
    "wordBank": [
      "Se",
      "shikipil",
      "se",
      "tzunti.",
      "ujume",
      "nikpia",
      "sital"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Mayo.",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "makwil."
    ],
    "wordBank": [
      "Metzti",
      "makwil.",
      "yejyey",
      "makwil",
      "vigesimal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Sesenta.",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "pual."
    ],
    "wordBank": [
      "Yey",
      "pual.",
      "shikipil",
      "sistema",
      "majtakti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Catorce",
    "character": "Neutral.svg",
    "correct": [
      "Majtakti",
      "nawi."
    ],
    "wordBank": [
      "Majtakti",
      "nawi.",
      "chikume",
      "tutut",
      "tawial"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Diecisiete",
    "character": "Neutral.svg",
    "correct": [
      "Kashtul",
      "ume."
    ],
    "wordBank": [
      "Kashtul",
      "ume.",
      "ne",
      "vigesimal",
      "makwil"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Treinta",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "pual",
      "majtakti."
    ],
    "wordBank": [
      "Se",
      "pual",
      "majtakti.",
      "an",
      "anhan",
      "shashakachnaj"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ochenta",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual."
    ],
    "wordBank": [
      "Nawi",
      "pual.",
      "keski",
      "metzti",
      "chijchikume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cuatrocientos",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "tzunti."
    ],
    "wordBank": [
      "Nawi",
      "tzunti.",
      "pual",
      "chikwasen",
      "tejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Diez mil",
    "character": "Neutral.svg",
    "correct": [
      "Majtakti",
      "shikipil."
    ],
    "wordBank": [
      "Majtakti",
      "shikipil.",
      "chikwey",
      "tunal",
      "ish"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Séptimo",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chikume."
    ],
    "wordBank": [
      "Ne",
      "chikume.",
      "tunal",
      "chijchikume",
      "yey"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Trío",
    "character": "Neutral.svg",
    "correct": [
      "Yejyey."
    ],
    "wordBank": [
      "Yejyey.",
      "nawi",
      "majmakwil",
      "tik"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Lunes",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "se."
    ],
    "wordBank": [
      "Tunal",
      "se.",
      "nawi",
      "yey",
      "shikipil"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Enero",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "se."
    ],
    "wordBank": [
      "Metzti",
      "se.",
      "tutut",
      "yejyey",
      "shashakachnaj"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "¿Cuántos años tienes?",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "shiwit",
      "tikpia?."
    ],
    "wordBank": [
      "¿Keski",
      "shiwit",
      "tikpia?.",
      "shashakachnaj",
      "et",
      "pal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Dos mil",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "shikipil."
    ],
    "wordBank": [
      "Ume",
      "shikipil.",
      "shiwit",
      "makwil",
      "sistema"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ciento cincuenta",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tzunti",
      "ume",
      "pual",
      "majtakti."
    ],
    "wordBank": [
      "Se",
      "tzunti",
      "ume",
      "pual",
      "majtakti.",
      "majmakwil",
      "almun",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ochenta y uno",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual",
      "se."
    ],
    "wordBank": [
      "Nawi",
      "pual",
      "se.",
      "vigesimal",
      "makwil",
      "et"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "999,999",
    "character": "Neutral.svg",
    "correct": [
      "Chiknawi",
      "tzunti",
      "nawi",
      "pual",
      "kashtul",
      "nawi",
      "shikipil",
      "chiknawi",
      "tzunti",
      "nawi",
      "pual",
      "kashtul",
      "nawi."
    ],
    "wordBank": [
      "Chiknawi",
      "tzunti",
      "nawi",
      "pual",
      "kashtul",
      "nawi",
      "shikipil",
      "chiknawi",
      "tzunti",
      "nawi",
      "pual",
      "kashtul",
      "nawi.",
      "sital",
      "shiwit",
      "nikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Segundo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ume"
    ],
    "wordBank": [
      "Ne",
      "ume",
      "ish",
      "kashtul",
      "anhan"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cuarto.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "nawi"
    ],
    "wordBank": [
      "Ne",
      "nawi",
      "tunal",
      "chijchikwasen",
      "najnawi"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Séptimo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chikume"
    ],
    "wordBank": [
      "Ne",
      "chikume",
      "sital",
      "yey",
      "pual"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Trío.",
    "character": "Neutral.svg",
    "correct": [
      "Yejyey"
    ],
    "wordBank": [
      "Yejyey",
      "chijchikwasen",
      "anhan",
      "ume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Sexteto.",
    "character": "Neutral.svg",
    "correct": [
      "Chijchikwasen"
    ],
    "wordBank": [
      "Chijchikwasen",
      "chikume",
      "anhan",
      "se"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Septeto.",
    "character": "Neutral.svg",
    "correct": [
      "Chijchikume"
    ],
    "wordBank": [
      "Chijchikume",
      "michin",
      "pal",
      "keski"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Quinteto.",
    "character": "Neutral.svg",
    "correct": [
      "Majmakwil"
    ],
    "wordBank": [
      "Majmakwil",
      "anhan",
      "chikwasen",
      "yejyey"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cuarenta.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "pual"
    ],
    "wordBank": [
      "Ume",
      "pual",
      "susul",
      "at",
      "yey"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cuatrocientos.",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "tzunti"
    ],
    "wordBank": [
      "Nawi",
      "tzunti",
      "keski",
      "chiknawi",
      "sistema"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Quinientos.",
    "character": "Neutral.svg",
    "correct": [
      "Makwil",
      "tzunti"
    ],
    "wordBank": [
      "Makwil",
      "tzunti",
      "yey",
      "shiwit",
      "keski"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "¿Cómo se dice \"Martes\"?:",
    "character": "Neutral.svg",
    "correct": "Tunal ume",
    "options": [
      "Tunal ume",
      "Chiknawi tzunti",
      "Tunal se"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "\"Febrero\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "Metzti ume",
    "options": [
      "Metzti se",
      "Metzti ume",
      "Se tzunti se pual makwil"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El número 200 es:",
    "character": "Neutral.svg",
    "correct": "Ume tzunti",
    "options": [
      "Se tzunti",
      "Ume tzunti",
      "Se shikipil"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "\"Cuarto\" (ordinal) se dice:",
    "character": "Neutral.svg",
    "correct": "Ne nawi",
    "options": [
      "Ne nawi",
      "Ne yey",
      "Majtakti yey"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El número 3,000 se construye como:",
    "character": "Neutral.svg",
    "correct": "Yey shikipil",
    "options": [
      "Sistema Vigesimal",
      "Ume shikipil",
      "Yey shikipil"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El día \"Viernes\" es:",
    "character": "Neutral.svg",
    "correct": "Tunal makwil",
    "options": [
      "Tunal nawi",
      "Tunal makwil",
      "Ne chiknawi"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "¿Qué mes es \"Metzti chikwasen\"?:",
    "character": "Neutral.svg",
    "correct": "Junio",
    "options": [
      "Junio",
      "Yejyey",
      "Achtu"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "Un grupo de siete se llama:",
    "character": "Neutral.svg",
    "correct": "Chijchikume",
    "options": [
      "Datka",
      "Chijchikume",
      "Chijchikwasen"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "¿Cuál es el valor de \"Majtakti shikipil\"?:",
    "character": "Neutral.svg",
    "correct": "Diez mil",
    "options": [
      "Ochenta y uno",
      "Novecientos mil",
      "Diez mil"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El sistema vigesimal náhuat se basa en:",
    "character": "Neutral.svg",
    "correct": "Los 20 dedos de manos y pies",
    "options": [
      "Los dedos de la mano",
      "Cuarenta y uno",
      "Los 20 dedos de manos y pies"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Agosto.",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "chikwey."
    ],
    "wordBank": [
      "Metzti",
      "chikwey.",
      "makwil",
      "sistema",
      "chijchikwasen"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Jueves.",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "nawi."
    ],
    "wordBank": [
      "Tunal",
      "nawi.",
      "et",
      "michin",
      "shiwit"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Yo tengo cincuenta años.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikpia",
      "ume",
      "pual",
      "majtakti",
      "shiwit."
    ],
    "wordBank": [
      "Naja",
      "nikpia",
      "ume",
      "pual",
      "majtakti",
      "shiwit.",
      "tzunti",
      "anhan",
      "tikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Tres mil cien.",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "shikipil",
      "se",
      "tzunti."
    ],
    "wordBank": [
      "Yey",
      "shikipil",
      "se",
      "tzunti.",
      "shuchit",
      "metzti",
      "makwil"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "El quinto pájaro vuela.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "makwil",
      "tutut",
      "patani."
    ],
    "wordBank": [
      "Ne",
      "makwil",
      "tutut",
      "patani.",
      "chijchikume",
      "majmakwil",
      "chikwey"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ahorita es octubre.",
    "character": "Neutral.svg",
    "correct": [
      "Anhan",
      "metzti",
      "majtakti."
    ],
    "wordBank": [
      "Anhan",
      "metzti",
      "majtakti.",
      "chikume",
      "pal",
      "almun"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Seiscientos.",
    "character": "Neutral.svg",
    "correct": [
      "Chikwasen",
      "tzunti."
    ],
    "wordBank": [
      "Chikwasen",
      "tzunti.",
      "majmakwil",
      "tzunti",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Doscientos mil.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "tzunti",
      "shikipil."
    ],
    "wordBank": [
      "Ume",
      "tzunti",
      "shikipil.",
      "tikpia",
      "tunal",
      "chikwasen"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "El sesenta (ordinal o número).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "yey",
      "pual."
    ],
    "wordBank": [
      "Ne",
      "yey",
      "pual.",
      "tawial",
      "chiknawi",
      "ujume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Noviembre.",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "majtakti",
      "se."
    ],
    "wordBank": [
      "Metzti",
      "majtakti",
      "se.",
      "susul",
      "an",
      "patani"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Martes de febrero.",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "ume",
      "pal",
      "ne",
      "metzti",
      "ume."
    ],
    "wordBank": [
      "Tunal",
      "ume",
      "pal",
      "ne",
      "metzti",
      "ume.",
      "ish",
      "tzunti",
      "anhan"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cuarteto de estrellas.",
    "character": "Neutral.svg",
    "correct": [
      "Najnawi",
      "sital."
    ],
    "wordBank": [
      "Najnawi",
      "sital.",
      "chijchikume",
      "nawi",
      "tzunti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cinco mil.",
    "character": "Neutral.svg",
    "correct": [
      "Makwil",
      "shikipil."
    ],
    "wordBank": [
      "Makwil",
      "shikipil.",
      "anhan",
      "at",
      "pal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Novecientos mil.",
    "character": "Neutral.svg",
    "correct": [
      "Chiknawi",
      "tzunti",
      "shikipil."
    ],
    "wordBank": [
      "Chiknawi",
      "tzunti",
      "shikipil.",
      "majmakwil",
      "se",
      "et"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Nosotros somos una pareja.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "tiujume."
    ],
    "wordBank": [
      "Tejemet",
      "tiujume.",
      "tik",
      "majtakti",
      "nikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Septiembre",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "chiknawi."
    ],
    "wordBank": [
      "Metzti",
      "chiknawi.",
      "makwil",
      "ume",
      "anhan"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Miércoles",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "yey."
    ],
    "wordBank": [
      "Tunal",
      "yey.",
      "chikwey",
      "shashakachnaj",
      "chijchikwasen"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Segundo",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ume."
    ],
    "wordBank": [
      "Ne",
      "ume.",
      "chikwey",
      "tawial",
      "ujume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Trescientos",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "tzunti."
    ],
    "wordBank": [
      "Yey",
      "tzunti.",
      "sital",
      "et",
      "nawi"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Dos mil",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "shikipil."
    ],
    "wordBank": [
      "Ume",
      "shikipil.",
      "chikwasen",
      "nawi",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Sexteto",
    "character": "Neutral.svg",
    "correct": [
      "Chijchikwasen."
    ],
    "wordBank": [
      "Chijchikwasen.",
      "tejemet",
      "majmakwil",
      "metzti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cincuenta",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "pual",
      "majtakti."
    ],
    "wordBank": [
      "Ume",
      "pual",
      "majtakti.",
      "et",
      "chijchikwasen",
      "nikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Setecientos mil",
    "character": "Neutral.svg",
    "correct": [
      "Chikume",
      "tzunti",
      "shikipil."
    ],
    "wordBank": [
      "Chikume",
      "tzunti",
      "shikipil.",
      "shashakachnaj",
      "shikipil",
      "michin"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Hoy es viernes",
    "character": "Neutral.svg",
    "correct": [
      "An",
      "tunal",
      "makwil."
    ],
    "wordBank": [
      "An",
      "tunal",
      "makwil.",
      "pual",
      "majtakti",
      "tikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cuarenta",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "pual."
    ],
    "wordBank": [
      "Ume",
      "pual.",
      "chijchikwasen",
      "keski",
      "tutut"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Tercero",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "yey."
    ],
    "wordBank": [
      "Ne",
      "yey.",
      "chikwey",
      "tunal",
      "majtakti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Una veintena",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "pual."
    ],
    "wordBank": [
      "Se",
      "pual.",
      "kashtul",
      "tzunti",
      "metzti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ochenta",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual."
    ],
    "wordBank": [
      "Nawi",
      "pual.",
      "anhan",
      "shuchit",
      "tiujume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Tengo diez flores",
    "character": "Neutral.svg",
    "correct": [
      "Nikpia",
      "majtakti",
      "shuchit."
    ],
    "wordBank": [
      "Nikpia",
      "majtakti",
      "shuchit.",
      "tutut",
      "tejemet",
      "quintesimal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Diciembre",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "majtakti",
      "ume."
    ],
    "wordBank": [
      "Metzti",
      "majtakti",
      "ume.",
      "sistema",
      "shashakachnaj",
      "chiknawi"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Treinta.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "pual",
      "majtakti"
    ],
    "wordBank": [
      "Se",
      "pual",
      "majtakti",
      "najnawi",
      "chijchikwasen",
      "anhan"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cincuenta.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "pual",
      "majtakti"
    ],
    "wordBank": [
      "Ume",
      "pual",
      "majtakti",
      "pal",
      "patani",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Setenta.",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "pual",
      "majtakti"
    ],
    "wordBank": [
      "Yey",
      "pual",
      "majtakti",
      "metzti",
      "kashtul",
      "tzunti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Noventa.",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual",
      "majtakti"
    ],
    "wordBank": [
      "Nawi",
      "pual",
      "majtakti",
      "shiwit",
      "ume",
      "keski"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ciento cincuenta.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tzunti",
      "ume",
      "pual",
      "majtakti"
    ],
    "wordBank": [
      "Se",
      "tzunti",
      "ume",
      "pual",
      "majtakti",
      "tunal",
      "chijchikume",
      "chikwasen"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Mil doscientos.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "shikipil",
      "makwil",
      "tzunti"
    ],
    "wordBank": [
      "Se",
      "shikipil",
      "makwil",
      "tzunti",
      "patani",
      "anhan",
      "nawi"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Par o pareja.",
    "character": "Neutral.svg",
    "correct": [
      "Ujume"
    ],
    "wordBank": [
      "Ujume",
      "majtakti",
      "tiujume",
      "chijchikume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Sexteto.",
    "character": "Neutral.svg",
    "correct": [
      "Chijchikwasen"
    ],
    "wordBank": [
      "Chijchikwasen",
      "almun",
      "tutut",
      "yey"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cuarteto.",
    "character": "Neutral.svg",
    "correct": [
      "Najnawi"
    ],
    "wordBank": [
      "Najnawi",
      "ujume",
      "chiknawi",
      "metzti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Trío.",
    "character": "Neutral.svg",
    "correct": [
      "Yejyey"
    ],
    "wordBank": [
      "Yejyey",
      "chijchikume",
      "sital",
      "shikipil"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El número 15 se dice:",
    "character": "Neutral.svg",
    "correct": "Kashtul",
    "options": [
      "Kashtul",
      "Junio",
      "Majtakti"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "\"Achtu\" en números ordinales significa:",
    "character": "Neutral.svg",
    "correct": "Primero",
    "options": [
      "Se",
      "Primero",
      "Vigesimal"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El día \"Martes\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "Tunal ume",
    "options": [
      "Se tzunti yey pual kashtul",
      "Tunal se",
      "Tunal ume"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El número 85 se construye como:",
    "character": "Neutral.svg",
    "correct": "Nawi pual makwil",
    "options": [
      "Majtakti shikipil",
      "Nawi pual majtakti",
      "Nawi pual makwil"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "¿Qué valor tiene \"Se shikipil\"?:",
    "character": "Neutral.svg",
    "correct": "Mil",
    "options": [
      "Treinta",
      "Mil",
      "Cien"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "\"Septiembre\" es el mes:",
    "character": "Neutral.svg",
    "correct": "Metzti chiknawi",
    "options": [
      "Metzti chiknawi",
      "Metzti chikwey",
      "Majmakwil sital tik ne susul"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El sistema basado en los 5 dedos de la mano se llama:",
    "character": "Neutral.svg",
    "correct": "Quintesimal",
    "options": [
      "Achtu",
      "Vigesimal",
      "Quintesimal"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "\"Ne nawi\" significa:",
    "character": "Neutral.svg",
    "correct": "El cuarto",
    "options": [
      "El cuarto",
      "Veinticinco (arroba)",
      "El tercero"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "¿Cómo se dice \"Noventa\"?:",
    "character": "Neutral.svg",
    "correct": "Nawi pual majtakti",
    "options": [
      "Nawi pual majtakti",
      "Nawi pual makwil",
      "Ume pual"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El mes de \"Mayo\" es:",
    "character": "Neutral.svg",
    "correct": "Metzti makwil",
    "options": [
      "Metzti makwil",
      "Tunal yey",
      "Metzti yey"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Sábado de febrero.",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "chikwasen",
      "pal",
      "ne",
      "metzti",
      "ume."
    ],
    "wordBank": [
      "Tunal",
      "chikwasen",
      "pal",
      "ne",
      "metzti",
      "ume.",
      "najnawi",
      "tzunti",
      "quintesimal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Yo tengo cuarenta años.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikpia",
      "ume",
      "pual",
      "shiwit."
    ],
    "wordBank": [
      "Naja",
      "nikpia",
      "ume",
      "pual",
      "shiwit.",
      "tunal",
      "chijchikwasen",
      "tikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "El quinto pájaro vuela.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "makwil",
      "tutut",
      "patani."
    ],
    "wordBank": [
      "Ne",
      "makwil",
      "tutut",
      "patani.",
      "chikwasen",
      "tawial",
      "majtakti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ciento setenta y cinco.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tzunti",
      "yey",
      "pual",
      "kashtul."
    ],
    "wordBank": [
      "Se",
      "tzunti",
      "yey",
      "pual",
      "kashtul.",
      "kashtul",
      "chijchikwasen",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Quinteto de estrellas en el cielo.",
    "character": "Neutral.svg",
    "correct": [
      "Majmakwil",
      "sital",
      "tik",
      "ne",
      "susul."
    ],
    "wordBank": [
      "Majmakwil",
      "sital",
      "tik",
      "ne",
      "susul.",
      "tikpia",
      "yey",
      "et"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Agosto.",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "chikwey."
    ],
    "wordBank": [
      "Metzti",
      "chikwey.",
      "ujume",
      "et",
      "chikume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Dos arrobas (50 libras) de maíz.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "almun",
      "tawial."
    ],
    "wordBank": [
      "Ume",
      "almun",
      "tawial.",
      "nikpia",
      "chiknawi",
      "pal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Viernes.",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "makwil."
    ],
    "wordBank": [
      "Tunal",
      "makwil.",
      "at",
      "kashtul",
      "nikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Mil cien.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "shikipil",
      "se",
      "tzunti."
    ],
    "wordBank": [
      "Se",
      "shikipil",
      "se",
      "tzunti.",
      "ume",
      "yey",
      "shiwit"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "El sexto.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chikwasen."
    ],
    "wordBank": [
      "Ne",
      "chikwasen.",
      "at",
      "pual",
      "quintesimal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Noventa y nueve.",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual",
      "kashtul",
      "nawi."
    ],
    "wordBank": [
      "Nawi",
      "pual",
      "kashtul",
      "nawi.",
      "tutut",
      "shuchit",
      "tawial"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Noviembre.",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "majtakti",
      "se."
    ],
    "wordBank": [
      "Metzti",
      "majtakti",
      "se.",
      "naja",
      "chikwasen",
      "sital"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Pareja de peces en el agua.",
    "character": "Neutral.svg",
    "correct": [
      "Ujume",
      "michin",
      "tik",
      "ne",
      "at."
    ],
    "wordBank": [
      "Ujume",
      "michin",
      "tik",
      "ne",
      "at.",
      "susul",
      "patani",
      "ish"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ciento noventa y nueve.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tzunti",
      "nawi",
      "pual",
      "kashtul",
      "nawi."
    ],
    "wordBank": [
      "Se",
      "tzunti",
      "nawi",
      "pual",
      "kashtul",
      "nawi.",
      "anhan",
      "chikwey",
      "tutut"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ahorita es mayo.",
    "character": "Neutral.svg",
    "correct": [
      "Anhan",
      "metzti",
      "makwil."
    ],
    "wordBank": [
      "Anhan",
      "metzti",
      "makwil.",
      "kashtul",
      "keski",
      "quintesimal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Lunes",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "se."
    ],
    "wordBank": [
      "Tunal",
      "se.",
      "shuchit",
      "ish",
      "chijchikume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Marzo",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "yey."
    ],
    "wordBank": [
      "Metzti",
      "yey.",
      "susul",
      "yejyey",
      "tikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Noventa y ocho",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual",
      "kashtul",
      "yey."
    ],
    "wordBank": [
      "Nawi",
      "pual",
      "kashtul",
      "yey.",
      "makwil",
      "shuchit",
      "tik"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Tres mil",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "shikipil."
    ],
    "wordBank": [
      "Yey",
      "shikipil.",
      "tiujume",
      "kashtul",
      "chiknawi"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Octavo",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chikwey."
    ],
    "wordBank": [
      "Ne",
      "chikwey.",
      "almun",
      "tzunti",
      "ish"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Siete mil",
    "character": "Neutral.svg",
    "correct": [
      "Chikume",
      "shikipil."
    ],
    "wordBank": [
      "Chikume",
      "shikipil.",
      "et",
      "shiwit",
      "ume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cuarenta y uno",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "pual",
      "se."
    ],
    "wordBank": [
      "Ume",
      "pual",
      "se.",
      "tutut",
      "ish",
      "majmakwil"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Diciembre",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "majtakti",
      "ume."
    ],
    "wordBank": [
      "Metzti",
      "majtakti",
      "ume.",
      "naja",
      "susul",
      "anhan"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cincuenta mil",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "pual",
      "majtakti",
      "shikipil."
    ],
    "wordBank": [
      "Ume",
      "pual",
      "majtakti",
      "shikipil.",
      "tik",
      "tiujume",
      "ujume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Siete granos de maíz",
    "character": "Neutral.svg",
    "correct": [
      "Chikume",
      "ish",
      "tawial."
    ],
    "wordBank": [
      "Chikume",
      "ish",
      "tawial.",
      "nikpia",
      "nawi",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Noveno",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chiknawi."
    ],
    "wordBank": [
      "Ne",
      "chiknawi.",
      "chikume",
      "nawi",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ochenta y seis",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual",
      "chikwasen."
    ],
    "wordBank": [
      "Nawi",
      "pual",
      "chikwasen.",
      "vigesimal",
      "tunal",
      "et"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Tengo trece años",
    "character": "Neutral.svg",
    "correct": [
      "Nikpia",
      "majtakti",
      "yey",
      "shiwit."
    ],
    "wordBank": [
      "Nikpia",
      "majtakti",
      "yey",
      "shiwit.",
      "ume",
      "najnawi",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Dos mil",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "shikipil."
    ],
    "wordBank": [
      "Ume",
      "shikipil.",
      "tejemet",
      "tik",
      "chijchikume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ochocientos mil",
    "character": "Neutral.svg",
    "correct": [
      "Chikwey",
      "tzunti",
      "shikipil."
    ],
    "wordBank": [
      "Chikwey",
      "tzunti",
      "shikipil.",
      "anhan",
      "pal",
      "se"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Par o pareja.",
    "character": "Neutral.svg",
    "correct": [
      "Ujume"
    ],
    "wordBank": [
      "Ujume",
      "majtakti",
      "sital",
      "pual"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Trío.",
    "character": "Neutral.svg",
    "correct": [
      "Yejyey"
    ],
    "wordBank": [
      "Yejyey",
      "se",
      "et",
      "sital"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cuarteto.",
    "character": "Neutral.svg",
    "correct": [
      "Najnawi"
    ],
    "wordBank": [
      "Najnawi",
      "tiujume",
      "metzti",
      "et"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Quinteto.",
    "character": "Neutral.svg",
    "correct": [
      "Majmakwil"
    ],
    "wordBank": [
      "Majmakwil",
      "yejyey",
      "pal",
      "najnawi"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Sexteto.",
    "character": "Neutral.svg",
    "correct": [
      "Chijchikwasen"
    ],
    "wordBank": [
      "Chijchikwasen",
      "chiknawi",
      "majtakti",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Septeto.",
    "character": "Neutral.svg",
    "correct": [
      "Chijchikume"
    ],
    "wordBank": [
      "Chijchikume",
      "ish",
      "quintesimal",
      "chikume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Veinte.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "pual"
    ],
    "wordBank": [
      "Se",
      "pual",
      "chijchikwasen",
      "shikipil",
      "majtakti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cien.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tzunti"
    ],
    "wordBank": [
      "Se",
      "tzunti",
      "sital",
      "shashakachnaj",
      "kashtul"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Mil.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "shikipil"
    ],
    "wordBank": [
      "Se",
      "shikipil",
      "chikume",
      "tejemet",
      "yey"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Veinticinco (Arroba).",
    "character": "Neutral.svg",
    "correct": [
      "Almun"
    ],
    "wordBank": [
      "Almun",
      "pal",
      "sistema",
      "najnawi"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "¿Cómo se dice \"Miércoles\"?",
    "character": "Neutral.svg",
    "correct": "Tunal yey",
    "options": [
      "Tunal ume",
      "Tunal yey",
      "Yey pual majtakti"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El mes de \"Abril\" es:",
    "character": "Neutral.svg",
    "correct": "Metzti nawi",
    "options": [
      "Metzti yey",
      "Ne yey",
      "Metzti nawi"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "¿Cómo se construye el número 70? (60 [3 veintenas] + 10):",
    "character": "Neutral.svg",
    "correct": "Yey pual majtakti",
    "options": [
      "Yey pual makwil",
      "Naja nikpia majtakti chikwasen shiwit",
      "Yey pual majtakti"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "\"Achtu\" en números ordinales significa:",
    "character": "Neutral.svg",
    "correct": "Primero",
    "options": [
      "Majmakwil",
      "Primero",
      "Chijchikwasen"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El número 400 se dice:",
    "character": "Neutral.svg",
    "correct": "Nawi tzunti",
    "options": [
      "Ume tzunti",
      "Najnawi sital",
      "Nawi tzunti"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "\"Tunal makwil\" corresponde al día:",
    "character": "Neutral.svg",
    "correct": "Viernes",
    "options": [
      "Jueves",
      "Viernes",
      "Treinta"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El número 13 es:",
    "character": "Neutral.svg",
    "correct": "Majtakti yey",
    "options": [
      "Majtakti ume",
      "Majtakti yey",
      "Ne chikwey"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "\"Metzti chiknawi\" es el mes de:",
    "character": "Neutral.svg",
    "correct": "Septiembre",
    "options": [
      "Séptimo",
      "Agosto",
      "Septiembre"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "¿Cuál es el valor de \"Ume shikipil\"?",
    "character": "Neutral.svg",
    "correct": "Dos mil",
    "options": [
      "Cien mil",
      "Dos mil",
      "Veinticuatro mil"
    ]
  },
  {
    "type": "select_translation",
    "stage": 3,
    "prompt": "El sistema náhuat usa la base 5 (dedos de la mano) llamada:",
    "character": "Neutral.svg",
    "correct": "Quintesimal",
    "options": [
      "Makwil",
      "Quintesimal",
      "Vigesimal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Diciembre.",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "majtakti",
      "ume"
    ],
    "wordBank": [
      "Metzti",
      "majtakti",
      "ume",
      "keski",
      "almun",
      "shuchit"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Sábado.",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "chikwasen"
    ],
    "wordBank": [
      "Tunal",
      "chikwasen",
      "yejyey",
      "nikpia",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Tengo cincuenta y tres años.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikpia",
      "ume",
      "pual",
      "majtakti",
      "yey",
      "shiwit"
    ],
    "wordBank": [
      "Naja",
      "nikpia",
      "ume",
      "pual",
      "majtakti",
      "yey",
      "shiwit",
      "ish",
      "najnawi",
      "tutut"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Mil quinientos.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "shikipil",
      "makwil",
      "tzunti"
    ],
    "wordBank": [
      "Se",
      "shikipil",
      "makwil",
      "tzunti",
      "michin",
      "chijchikwasen",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "El sexto pájaro.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chikwasen",
      "tutut"
    ],
    "wordBank": [
      "Ne",
      "chikwasen",
      "tutut",
      "kashtul",
      "anhan",
      "et"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Dos arrobas (50 libras) de frijol.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "almun",
      "et"
    ],
    "wordBank": [
      "Ume",
      "almun",
      "et",
      "majmakwil",
      "pual",
      "chijchikume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Agosto.",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "chikwey"
    ],
    "wordBank": [
      "Metzti",
      "chikwey",
      "tiujume",
      "ne",
      "vigesimal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Quince mil.",
    "character": "Neutral.svg",
    "correct": [
      "Kashtul",
      "shikipil"
    ],
    "wordBank": [
      "Kashtul",
      "shikipil",
      "keski",
      "tiujume",
      "najnawi"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Noventa y uno.",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual",
      "majtakti",
      "se"
    ],
    "wordBank": [
      "Nawi",
      "pual",
      "majtakti",
      "se",
      "tikpia",
      "chikume",
      "ish"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Mil uno.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "shikipil",
      "se"
    ],
    "wordBank": [
      "Se",
      "shikipil",
      "se",
      "pal",
      "metzti",
      "nikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Setenta y cinco.",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "pual",
      "kashtul"
    ],
    "wordBank": [
      "Yey",
      "pual",
      "kashtul",
      "ume",
      "tejemet",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "La segunda estrella.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ume",
      "sital"
    ],
    "wordBank": [
      "Ne",
      "ume",
      "sital",
      "an",
      "ish",
      "vigesimal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Veinticuatro mil.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "pual",
      "nawi",
      "shikipil"
    ],
    "wordBank": [
      "Se",
      "pual",
      "nawi",
      "shikipil",
      "tikpia",
      "tunal",
      "chijchikume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Noviembre.",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "majtakti",
      "se"
    ],
    "wordBank": [
      "Metzti",
      "majtakti",
      "se",
      "anhan",
      "tejemet",
      "tunal"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Marzo.",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "yey"
    ],
    "wordBank": [
      "Metzti",
      "yey",
      "tawial",
      "vigesimal",
      "ume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Setenta",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "pual",
      "majtakti."
    ],
    "wordBank": [
      "Yey",
      "pual",
      "majtakti.",
      "shiwit",
      "tejemet",
      "almun"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Jueves",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "nawi."
    ],
    "wordBank": [
      "Tunal",
      "nawi.",
      "majtakti",
      "pal",
      "chikwey"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Mayo",
    "character": "Neutral.svg",
    "correct": [
      "Metzti",
      "makwil."
    ],
    "wordBank": [
      "Metzti",
      "makwil.",
      "tzunti",
      "sistema",
      "yey"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Ochenta",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual."
    ],
    "wordBank": [
      "Nawi",
      "pual.",
      "chikwasen",
      "tiujume",
      "tzunti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Tercero\" (Ordinal)",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "yey."
    ],
    "wordBank": [
      "Ne",
      "yey.",
      "chikume",
      "shashakachnaj",
      "nikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Mil cien",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "shikipil",
      "se",
      "tzunti."
    ],
    "wordBank": [
      "Se",
      "shikipil",
      "se",
      "tzunti.",
      "vigesimal",
      "nawi",
      "tik"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Treinta mil",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "pual",
      "majtakti",
      "shikipil."
    ],
    "wordBank": [
      "Se",
      "pual",
      "majtakti",
      "shikipil.",
      "at",
      "makwil",
      "kashtul"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Dieciocho",
    "character": "Neutral.svg",
    "correct": [
      "Kashtul",
      "yey."
    ],
    "wordBank": [
      "Kashtul",
      "yey.",
      "et",
      "pal",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cincuenta",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "pual",
      "majtakti."
    ],
    "wordBank": [
      "Ume",
      "pual",
      "majtakti.",
      "chijchikume",
      "najnawi",
      "tiujume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Miércoles de octubre",
    "character": "Neutral.svg",
    "correct": [
      "Tunal",
      "yey",
      "pal",
      "ne",
      "metzti",
      "majtakti."
    ],
    "wordBank": [
      "Tunal",
      "yey",
      "pal",
      "ne",
      "metzti",
      "majtakti.",
      "ume",
      "se",
      "almun"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Cuatrocientos mil",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "tzunti",
      "shikipil."
    ],
    "wordBank": [
      "Nawi",
      "tzunti",
      "shikipil.",
      "michin",
      "sital",
      "ujume"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Tengo 19 años",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikpia",
      "kashtul",
      "nawi",
      "shiwit."
    ],
    "wordBank": [
      "Naja",
      "nikpia",
      "kashtul",
      "nawi",
      "shiwit.",
      "shashakachnaj",
      "tik",
      "patani"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Siete mil",
    "character": "Neutral.svg",
    "correct": [
      "Chikume",
      "shikipil."
    ],
    "wordBank": [
      "Chikume",
      "shikipil.",
      "majmakwil",
      "metzti",
      "sital"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Sexteto",
    "character": "Neutral.svg",
    "correct": [
      "Chijchikwasen."
    ],
    "wordBank": [
      "Chijchikwasen.",
      "tzunti",
      "an",
      "majtakti"
    ]
  },
  {
    "type": "translate",
    "stage": 3,
    "prompt": "Una arroba de arroz",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "almun",
      "shashakachnaj."
    ],
    "wordBank": [
      "Se",
      "almun",
      "shashakachnaj.",
      "vigesimal",
      "anhan",
      "shuchit"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Suma.",
    "character": "Neutral.svg",
    "correct": [
      "Tapujputzualis"
    ],
    "wordBank": [
      "Tapujputzualis",
      "lilly",
      "matzaj",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Resta.",
    "character": "Neutral.svg",
    "correct": [
      "Tajtaishtialis"
    ],
    "wordBank": [
      "Tajtaishtialis",
      "nawi",
      "tumin",
      "tikujki"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Multiplicación.",
    "character": "Neutral.svg",
    "correct": [
      "Tamutkitilis"
    ],
    "wordBank": [
      "Tamutkitilis",
      "kitashtawki",
      "nemi",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "División.",
    "character": "Neutral.svg",
    "correct": [
      "Tatzayanilis"
    ],
    "wordBank": [
      "Tatzayanilis",
      "se",
      "chiknawi",
      "tiankis"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Dinero.",
    "character": "Neutral.svg",
    "correct": [
      "Tumin"
    ],
    "wordBank": [
      "Tumin",
      "mujmusta",
      "tatzayanilis",
      "niktashtawia"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Precio.",
    "character": "Neutral.svg",
    "correct": [
      "Patiw"
    ],
    "wordBank": [
      "Patiw",
      "lilly",
      "chikwasen",
      "se"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Vuelto / Cambio.",
    "character": "Neutral.svg",
    "correct": [
      "Tapatalis"
    ],
    "wordBank": [
      "Tapatalis",
      "nimetztawikilia",
      "nutapatalis",
      "tikmaka"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Mercado.",
    "character": "Neutral.svg",
    "correct": [
      "Tiankis"
    ],
    "wordBank": [
      "Tiankis",
      "nikpiatuya",
      "yey",
      "kitek"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Pagar.",
    "character": "Neutral.svg",
    "correct": [
      "Tashtawia"
    ],
    "wordBank": [
      "Tashtawia",
      "namaka",
      "kitashtawki",
      "manguj"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Vendedor/a.",
    "character": "Neutral.svg",
    "correct": [
      "Tanamakani"
    ],
    "wordBank": [
      "Tanamakani",
      "niamiki",
      "chikwey",
      "sujsul"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "¿Cuál es el resultado de 12 x 12?",
    "character": "Neutral.svg",
    "correct": "Se tzunti ume pual nawi",
    "options": [
      "Se tzunti ume pual",
      "Kashtul ume tumin wan tajku",
      "Se tzunti ume pual nawi"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Si tienes se tzunti (100) de nekti y das yey pual ume (62), ¿cuánto te queda?",
    "character": "Neutral.svg",
    "correct": "100-62=38",
    "options": [
      "Dinero",
      "Precio",
      "100-62=38"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "¿Cómo se dice \"barato\"?",
    "character": "Neutral.svg",
    "correct": "Chupi ipatiw",
    "options": [
      "Chupi ipatiw",
      "Taja tikujki se tzunti shukuk lala",
      "Wey ipatiw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Resultado de 275 ÷ 11:",
    "character": "Neutral.svg",
    "correct": "Se pual makwil",
    "options": [
      "Shikwi ne tapatalis",
      "Se pual majtakti",
      "Se pual makwil"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Alex compra se tzunti (100) limones. ¿Cuánto debe pagar si 100 valen $10?",
    "character": "Neutral.svg",
    "correct": "Majtakti tumin",
    "options": [
      "Niamiki tik ne tiankis",
      "Se pual tumin",
      "Majtakti tumin"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "\"Shinechmaka nutapatalis\" significa:",
    "character": "Neutral.svg",
    "correct": "Dame mi vuelto",
    "options": [
      "Dame mi dinero",
      "¿Tú tienes piñas?",
      "Dame mi vuelto"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Resultado de 16 x 9:",
    "character": "Neutral.svg",
    "correct": "Se tzunti ume pual nawi",
    "options": [
      "Se tzunti ume pual nawi",
      "Naja nikneki nikua kajkakti",
      "Se tzunti nawi pual"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Elena tiene ume pual chiknawi (49) flores y quiere repartirlas entre 3 personas. ¿Cuántas puede dar a cada una?",
    "character": "Neutral.svg",
    "correct": "49/3 = 16 y sobra 1",
    "options": [
      "Ahorita voy a comprar",
      "Dame mi vuelto",
      "49/3 = 16 y sobra 1"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "¿Cuál es el neologismo para \"Calculadora\" (o algo que cuenta)?",
    "character": "Neutral.svg",
    "correct": "Tapuani",
    "options": [
      "Tajtapual",
      "Tapuani",
      "102:"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Víctor tiene 10 dulces, regala 4 y su mamá le da 2. ¿Cuántos tiene ahora?",
    "character": "Neutral.svg",
    "correct": "Chikwey",
    "options": [
      "Chikume",
      "Chikwey",
      "Tanamakani"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto cuesta el suéter?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "ipatiw",
      "ne",
      "koton?"
    ],
    "wordBank": [
      "¿Keski",
      "ipatiw",
      "ne",
      "koton?",
      "namaka",
      "tik",
      "tesu"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Si tengo cinco peces y compré otros dos.",
    "character": "Neutral.svg",
    "correct": [
      "Su",
      "nikpia",
      "makwil",
      "michin",
      "wan",
      "nikujki",
      "ukume",
      "michin."
    ],
    "wordBank": [
      "Su",
      "nikpia",
      "makwil",
      "michin",
      "wan",
      "nikujki",
      "ukume",
      "michin.",
      "kitek",
      "tzunti",
      "wey"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto pago?.",
    "character": "Neutral.svg",
    "correct": [
      "Keski",
      "niktashtawia?"
    ],
    "wordBank": [
      "Keski",
      "niktashtawia?",
      "chiknawi",
      "nikua",
      "awakat"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo tenía treinta y cinco mangos.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikpiatuya",
      "se",
      "pual",
      "kashtul",
      "manguj."
    ],
    "wordBank": [
      "Naja",
      "nikpiatuya",
      "se",
      "pual",
      "kashtul",
      "manguj.",
      "tawia",
      "nutapatalis",
      "patiw"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Me dieron otros cinco.",
    "character": "Neutral.svg",
    "correct": [
      "Nechmakaket",
      "ukmakwil."
    ],
    "wordBank": [
      "Nechmakaket",
      "ukmakwil.",
      "naja",
      "uej",
      "su"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Setenta de dinero (o 70 dólares).",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "pual",
      "majtakti",
      "tumin."
    ],
    "wordBank": [
      "Yey",
      "pual",
      "majtakti",
      "tumin.",
      "shinechnamakili",
      "chikwasen",
      "kushtal"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Lilly compró dos cartones de huevos.",
    "character": "Neutral.svg",
    "correct": [
      "Lilly",
      "kikujki",
      "ume",
      "ajamat",
      "teksisti."
    ],
    "wordBank": [
      "Lilly",
      "kikujki",
      "ume",
      "ajamat",
      "teksisti.",
      "chupi",
      "nikujki",
      "matzaj"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Si mi abuela me da cuarenta y ocho de dinero.",
    "character": "Neutral.svg",
    "correct": [
      "Su",
      "nunoya",
      "nechmaka",
      "ume",
      "pual",
      "chikwey",
      "tumin."
    ],
    "wordBank": [
      "Su",
      "nunoya",
      "nechmaka",
      "ume",
      "pual",
      "chikwey",
      "tumin.",
      "ne",
      "tapujputzualis",
      "tapualis"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Está bien. Y yo quiero tres faldas.",
    "character": "Neutral.svg",
    "correct": [
      "Nemi",
      "yek.",
      "Wan",
      "naja",
      "nikneki",
      "yey",
      "kweyat."
    ],
    "wordBank": [
      "Nemi",
      "yek.",
      "Wan",
      "naja",
      "nikneki",
      "yey",
      "kweyat.",
      "tapuani",
      "chikume",
      "kitashtawki"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Tú compraste cien limones.",
    "character": "Neutral.svg",
    "correct": [
      "Taja",
      "tikujki",
      "se",
      "tzunti",
      "shukuk",
      "lala."
    ],
    "wordBank": [
      "Taja",
      "tikujki",
      "se",
      "tzunti",
      "shukuk",
      "lala.",
      "nitakua",
      "ipatiw",
      "yey"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Cuesta setenta de dinero.",
    "character": "Neutral.svg",
    "correct": [
      "Ipatiw",
      "yey",
      "pual",
      "majtakti",
      "tumin."
    ],
    "wordBank": [
      "Ipatiw",
      "yey",
      "pual",
      "majtakti",
      "tumin.",
      "tesu",
      "kajkakti",
      "tanamakani"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto le debo?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "nimetztawikilia?"
    ],
    "wordBank": [
      "¿Keski",
      "nimetztawikilia?",
      "matzaj",
      "ukmakwil",
      "manguj"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo compré tres costales con aguacates.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikujki",
      "yey",
      "kushtal",
      "iwan",
      "awakat."
    ],
    "wordBank": [
      "Naja",
      "nikujki",
      "yey",
      "kushtal",
      "iwan",
      "awakat.",
      "shukuk",
      "nunoya",
      "tanamakani"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto dinero es para pagarlo?.",
    "character": "Neutral.svg",
    "correct": [
      "Keski",
      "tumin",
      "nemi",
      "pal",
      "niktashtawia?"
    ],
    "wordBank": [
      "Keski",
      "tumin",
      "nemi",
      "pal",
      "niktashtawia?",
      "ume",
      "nutapatalis",
      "lilly"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "De nada.",
    "character": "Neutral.svg",
    "correct": [
      "Tesu",
      "datka."
    ],
    "wordBank": [
      "Tesu",
      "datka.",
      "kushtal",
      "kajkakti",
      "tawia"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Aritmética / Cuentas",
    "character": "Neutral.svg",
    "correct": [
      "Tapualis."
    ],
    "wordBank": [
      "Tapualis.",
      "wipil",
      "koton",
      "patiw"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto vale?",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "ipatiw?."
    ],
    "wordBank": [
      "¿Keski",
      "ipatiw?.",
      "wan",
      "ukmakwil",
      "sujsul"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Ocho menos tres más cinco es igual a diez.",
    "character": "Neutral.svg",
    "correct": [
      "Chikwey",
      "tajtaishtialis",
      "yey",
      "tapujputzualis",
      "makwil",
      "nemi",
      "majtakti."
    ],
    "wordBank": [
      "Chikwey",
      "tajtaishtialis",
      "yey",
      "tapujputzualis",
      "makwil",
      "nemi",
      "majtakti.",
      "wan",
      "majtakti",
      "tashtawia"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Ciento cuarenta y cuatro",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tzunti",
      "ume",
      "pual",
      "nawi."
    ],
    "wordBank": [
      "Se",
      "tzunti",
      "ume",
      "pual",
      "nawi.",
      "tikujki",
      "awakat",
      "chikwasen"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo quiero comprar zapatos.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikneki",
      "nikua",
      "kajkakti."
    ],
    "wordBank": [
      "Naja",
      "nikneki",
      "nikua",
      "kajkakti.",
      "kweyat",
      "yek",
      "kitek"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Dos aguacates cuestan un dólar.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "awakat",
      "ipatiw",
      "se",
      "tumin."
    ],
    "wordBank": [
      "Ume",
      "awakat",
      "ipatiw",
      "se",
      "tumin.",
      "nikua",
      "nunoya",
      "shukuk"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Toma los quince dólares.",
    "character": "Neutral.svg",
    "correct": [
      "Shikwi",
      "kashtul",
      "tumin."
    ],
    "wordBank": [
      "Shikwi",
      "kashtul",
      "tumin.",
      "chikume",
      "manguj",
      "niamiki"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Tienes piñas?",
    "character": "Neutral.svg",
    "correct": [
      "¿Tikpia",
      "matzaj?."
    ],
    "wordBank": [
      "¿Tikpia",
      "matzaj?.",
      "tapatalis",
      "nikneki",
      "yek"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Véndame tres dólares de aguacates.",
    "character": "Neutral.svg",
    "correct": [
      "Shinechnamakili",
      "yey",
      "tumin",
      "awakat."
    ],
    "wordBank": [
      "Shinechnamakili",
      "yey",
      "tumin",
      "awakat.",
      "matzaj",
      "sujsul",
      "shukuk"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "La blusa cuesta doce dólares.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "wipil",
      "ipatiw",
      "majtakti",
      "ume",
      "tumin."
    ],
    "wordBank": [
      "Ne",
      "wipil",
      "ipatiw",
      "majtakti",
      "ume",
      "tumin.",
      "nikneki",
      "taja",
      "kua"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Cuatrocientos treinta y seis",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "tzunti",
      "se",
      "pual",
      "majtakti",
      "chikwasen."
    ],
    "wordBank": [
      "Nawi",
      "tzunti",
      "se",
      "pual",
      "majtakti",
      "chikwasen.",
      "tapatalis",
      "nikujki",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Treinta y seis",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "pual",
      "majtakti",
      "chikwasen."
    ],
    "wordBank": [
      "Se",
      "pual",
      "majtakti",
      "chikwasen.",
      "galanchin",
      "selka",
      "shikwi"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Ciento dos",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tzunti",
      "ume."
    ],
    "wordBank": [
      "Se",
      "tzunti",
      "ume.",
      "iwan",
      "tapuani",
      "yek"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto dinero tengo ahora?",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "tumin",
      "nikpia",
      "an?."
    ],
    "wordBank": [
      "¿Keski",
      "tumin",
      "nikpia",
      "an?.",
      "michin",
      "yek",
      "kajkakti"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Trescientos treinta y cuatro",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "tzunti",
      "se",
      "pual",
      "majtakti",
      "nawi."
    ],
    "wordBank": [
      "Yey",
      "tzunti",
      "se",
      "pual",
      "majtakti",
      "nawi.",
      "yek",
      "kushtal",
      "tapualis"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Precio.",
    "character": "Neutral.svg",
    "correct": [
      "Patiw"
    ],
    "wordBank": [
      "Patiw",
      "kashtul",
      "manguj",
      "taja"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Dinero.",
    "character": "Neutral.svg",
    "correct": [
      "Tumin"
    ],
    "wordBank": [
      "Tumin",
      "yey",
      "tajtaishtialis",
      "tapujputzualis"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Pagar.",
    "character": "Neutral.svg",
    "correct": [
      "Tashtawia"
    ],
    "wordBank": [
      "Tashtawia",
      "datka",
      "tapualis",
      "tikujki"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Vendedor/a.",
    "character": "Neutral.svg",
    "correct": [
      "Tanamakani"
    ],
    "wordBank": [
      "Tanamakani",
      "tashtawia",
      "galanchin",
      "tikujki"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Mercado.",
    "character": "Neutral.svg",
    "correct": [
      "Tiankis"
    ],
    "wordBank": [
      "Tiankis",
      "ipatiw",
      "majtakti",
      "kweyat"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Vuelto / Cambio.",
    "character": "Neutral.svg",
    "correct": [
      "Tapatalis"
    ],
    "wordBank": [
      "Tapatalis",
      "se",
      "matzaj",
      "kejken"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "División.",
    "character": "Neutral.svg",
    "correct": [
      "Tatzayanilis"
    ],
    "wordBank": [
      "Tatzayanilis",
      "nawi",
      "ajamat",
      "tikujki"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Resta.",
    "character": "Neutral.svg",
    "correct": [
      "Tajtaishtialis"
    ],
    "wordBank": [
      "Tajtaishtialis",
      "niamiki",
      "tikpia",
      "yek"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Multiplicación.",
    "character": "Neutral.svg",
    "correct": [
      "Tamutkitilis"
    ],
    "wordBank": [
      "Tamutkitilis",
      "chiknawi",
      "awakat",
      "tikmaka"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Suma.",
    "character": "Neutral.svg",
    "correct": [
      "Tapujputzualis"
    ],
    "wordBank": [
      "Tapujputzualis",
      "wipil",
      "nikneki",
      "ukume"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "¿Cómo se dice que algo es \"caro\"?",
    "character": "Neutral.svg",
    "correct": "Wey ipatiw",
    "options": [
      "Wey ipatiw",
      "Chupi ipatiw",
      "Shikwi kashtul tumin"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "¿Cuál es el resultado de 100 - 30?",
    "character": "Neutral.svg",
    "correct": "Yey pual majtakti",
    "options": [
      "Nemi yek. Wan naja nikneki yey kweyat",
      "Yey pual (60)",
      "Yey pual majtakti"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Si compras yey (3) faldas y cada una vale $18 (majtakti chikwey), ¿cuánto pagas?",
    "character": "Neutral.svg",
    "correct": "Ume pual majtakti nawi",
    "options": [
      "Ume pual majtakti nawi",
      "Se pual majtakti (30)",
      "Kajka peyna"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Un tapuani es la persona que se dedica a ser:",
    "character": "Neutral.svg",
    "correct": "Contador",
    "options": [
      "Precio",
      "Contador",
      "Vendedor"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "¿Cuál es el resultado de la división 324 ÷ 9?",
    "character": "Neutral.svg",
    "correct": "Se pual kashtul se",
    "options": [
      "Se pual kashtul se",
      "Wey ipatiw",
      "Se pual majtakti (30)"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "\"Shikwi ne tumin\" significa:",
    "character": "Neutral.svg",
    "correct": "Toma el dinero",
    "options": [
      "Ciento cuarenta y cuatro",
      "Toma el dinero",
      "Dame el vuelto"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "El verbo para \"comprar\" algo es:",
    "character": "Neutral.svg",
    "correct": "-Kua",
    "options": [
      "-Namaka",
      "-Kua",
      "Tumin"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Resultado de 436 - 102:",
    "character": "Neutral.svg",
    "correct": "Yey tzunti yey pual nawi",
    "options": [
      "Yey tzunti nawi pual (380)",
      "Yey tzunti yey pual nawi",
      "Naja niktuminhana mujmusta"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Si una piña vale $2.50, ¿cuánto valen ume (2) piñas?",
    "character": "Neutral.svg",
    "correct": "Makwil tumin",
    "options": [
      "Yey tumin ($3)",
      "¿Keski ipatiw ne koton?",
      "Makwil tumin"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "El neologismo para \"Calculadora\" es:",
    "character": "Neutral.svg",
    "correct": "Tapuani",
    "options": [
      "Tajtapual",
      "Tapuani",
      "Tanamakani"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Tú tienes aguacates?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Taja",
      "tikpia",
      "awakat?"
    ],
    "wordBank": [
      "¿Taja",
      "tikpia",
      "awakat?",
      "tapujputzualis",
      "chikwasen",
      "chikume"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Véndame veinte naranjas.",
    "character": "Neutral.svg",
    "correct": [
      "Shinechnamakili",
      "se",
      "pual",
      "lala."
    ],
    "wordBank": [
      "Shinechnamakili",
      "se",
      "pual",
      "lala.",
      "ne",
      "shukuk",
      "tesu"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo quiero dos (pares de) zapatos.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikneki",
      "ume",
      "kajkakti."
    ],
    "wordBank": [
      "Naja",
      "nikneki",
      "ume",
      "kajkakti.",
      "teksisti",
      "niktashtawia",
      "niamiki"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto dinero tengo ahora?.",
    "character": "Neutral.svg",
    "correct": [
      "Keski",
      "tumin",
      "nikpia",
      "an?"
    ],
    "wordBank": [
      "Keski",
      "tumin",
      "nikpia",
      "an?",
      "ukmakwil",
      "nituminhana",
      "chikwasen"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Me dieron otros cinco (dólares) de dinero.",
    "character": "Neutral.svg",
    "correct": [
      "Nechmakaket",
      "ukmakwil",
      "tumin."
    ],
    "wordBank": [
      "Nechmakaket",
      "ukmakwil",
      "tumin.",
      "niktashtawia",
      "ume",
      "ukume"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Él robó mi maíz.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "kitek",
      "nusin."
    ],
    "wordBank": [
      "Yaja",
      "kitek",
      "nusin.",
      "tajtaishtialis",
      "kashtul",
      "nikpia"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Lilly pagó sesenta de dinero.",
    "character": "Neutral.svg",
    "correct": [
      "Lilly",
      "kitashtawki",
      "yey",
      "pual",
      "tumin."
    ],
    "wordBank": [
      "Lilly",
      "kitashtawki",
      "yey",
      "pual",
      "tumin.",
      "nunoya",
      "tapatalis",
      "tamutkitilis"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Si tú das sesenta y dos.",
    "character": "Neutral.svg",
    "correct": [
      "Su",
      "tikmaka",
      "yey",
      "pual",
      "ume."
    ],
    "wordBank": [
      "Su",
      "tikmaka",
      "yey",
      "pual",
      "ume.",
      "tapualis",
      "makwil",
      "sujsul"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto cuesta la blusa?.",
    "character": "Neutral.svg",
    "correct": [
      "Keski",
      "ipatiw",
      "ne",
      "wipil?"
    ],
    "wordBank": [
      "Keski",
      "ipatiw",
      "ne",
      "wipil?",
      "uej",
      "nemi",
      "koton"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Un cartón de huevos cuesta $3.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "ajamat",
      "teksisti",
      "ipatiw",
      "$3."
    ],
    "wordBank": [
      "Se",
      "ajamat",
      "teksisti",
      "ipatiw",
      "$3.",
      "nutapatalis",
      "nituminhana",
      "ume"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto le debo?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "nimetztawikilia?"
    ],
    "wordBank": [
      "¿Keski",
      "nimetztawikilia?",
      "samak",
      "lala",
      "pual"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "El suéter es muy bonito.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "sujsul",
      "galanchin."
    ],
    "wordBank": [
      "Ne",
      "koton",
      "sujsul",
      "galanchin.",
      "matzaj",
      "tesu",
      "ipatiw"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "De nada.",
    "character": "Neutral.svg",
    "correct": [
      "Tesu",
      "datka."
    ],
    "wordBank": [
      "Tesu",
      "datka.",
      "sujsul",
      "nituminhana",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo compré dos cartones de huevos.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikujki",
      "ume",
      "ajamat",
      "teksisti."
    ],
    "wordBank": [
      "Naja",
      "nikujki",
      "ume",
      "ajamat",
      "teksisti.",
      "taja",
      "tajtaishtialis",
      "nechmakaket"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Toma los cinco dólares.",
    "character": "Neutral.svg",
    "correct": [
      "Shikwi",
      "ne",
      "makwil",
      "tumin."
    ],
    "wordBank": [
      "Shikwi",
      "ne",
      "makwil",
      "tumin.",
      "nemi",
      "sujsul",
      "yaja"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto pago?",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "niktashtawia?."
    ],
    "wordBank": [
      "¿Keski",
      "niktashtawia?.",
      "kikujki",
      "lala",
      "koton"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "La multiplicación es difícil.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamutkitilis",
      "uej."
    ],
    "wordBank": [
      "Ne",
      "tamutkitilis",
      "uej.",
      "tikujki",
      "nechmaka",
      "pal"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Véndame tres dólares de aguacates.",
    "character": "Neutral.svg",
    "correct": [
      "Shinechnamakili",
      "yey",
      "tumin",
      "awakat."
    ],
    "wordBank": [
      "Shinechnamakili",
      "yey",
      "tumin",
      "awakat.",
      "tiankis",
      "kua",
      "ajamat"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo tenía cincuenta de dinero.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikpiatuya",
      "ume",
      "pual",
      "majtakti",
      "tumin."
    ],
    "wordBank": [
      "Naja",
      "nikpiatuya",
      "ume",
      "pual",
      "majtakti",
      "tumin.",
      "yey",
      "yaja",
      "matzaj"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿A cómo los da?",
    "character": "Neutral.svg",
    "correct": [
      "¿Kejken",
      "titamaka?."
    ],
    "wordBank": [
      "¿Kejken",
      "titamaka?.",
      "kitashtawki",
      "tikujki",
      "awakat"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Ciento noventa y nueve",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tzunti",
      "nawi",
      "pual",
      "kashtul",
      "nawi."
    ],
    "wordBank": [
      "Se",
      "tzunti",
      "nawi",
      "pual",
      "kashtul",
      "nawi.",
      "wan",
      "kajkakti",
      "tamutkitilis"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Dame mi vuelto.",
    "character": "Neutral.svg",
    "correct": [
      "Shinechmaka",
      "nutapatalis."
    ],
    "wordBank": [
      "Shinechmaka",
      "nutapatalis.",
      "taja",
      "nunoya",
      "kashtul"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Compré tres costales de aguacates.",
    "character": "Neutral.svg",
    "correct": [
      "Nikujki",
      "yey",
      "kushtal",
      "iwan",
      "awakat."
    ],
    "wordBank": [
      "Nikujki",
      "yey",
      "kushtal",
      "iwan",
      "awakat.",
      "kajkakti",
      "nechmakaket",
      "chiknawi"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Tengo sed en el mercado.",
    "character": "Neutral.svg",
    "correct": [
      "Niamiki",
      "tik",
      "ne",
      "tiankis."
    ],
    "wordBank": [
      "Niamiki",
      "tik",
      "ne",
      "tiankis.",
      "patiw",
      "chikwey",
      "nikpiatuya"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Siete menos cuatro es igual a tres.",
    "character": "Neutral.svg",
    "correct": [
      "Chikume",
      "tajtaishtialis",
      "nawi",
      "nemi",
      "yey."
    ],
    "wordBank": [
      "Chikume",
      "tajtaishtialis",
      "nawi",
      "nemi",
      "yey.",
      "tesu",
      "naja",
      "nimetztawikilia"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "La resta es buena.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tajtaishtialis",
      "yek."
    ],
    "wordBank": [
      "Ne",
      "tajtaishtialis",
      "yek.",
      "tapujputzualis",
      "kitek",
      "pal"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Ochenta y cuatro",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "pual",
      "nawi."
    ],
    "wordBank": [
      "Nawi",
      "pual",
      "nawi.",
      "tzunti",
      "kajkakti",
      "manguj"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo ahorro todos los días.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nituminhana",
      "mujmusta."
    ],
    "wordBank": [
      "Naja",
      "nituminhana",
      "mujmusta.",
      "kejken",
      "chikwey",
      "nemi"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Tienes limones?",
    "character": "Neutral.svg",
    "correct": [
      "¿Tikpia",
      "shukuk",
      "lala?."
    ],
    "wordBank": [
      "¿Tikpia",
      "shukuk",
      "lala?.",
      "pal",
      "niaw",
      "lala"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Cuesta setenta dólares.",
    "character": "Neutral.svg",
    "correct": [
      "Ipatiw",
      "yey",
      "pual",
      "majtakti",
      "tumin."
    ],
    "wordBank": [
      "Ipatiw",
      "yey",
      "pual",
      "majtakti",
      "tumin.",
      "tapatalis",
      "chikume",
      "michin"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Comprar.",
    "character": "Neutral.svg",
    "correct": [
      "-Kua"
    ],
    "wordBank": [
      "-Kua",
      "nutapatalis",
      "ajamat",
      "ipatiw"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Vender.",
    "character": "Neutral.svg",
    "correct": [
      "-Namaka"
    ],
    "wordBank": [
      "-Namaka",
      "niktashtawia",
      "ne",
      "kajkakti"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Pedir fiado.",
    "character": "Neutral.svg",
    "correct": [
      "-Tawia"
    ],
    "wordBank": [
      "-Tawia",
      "nikneki",
      "nikpia",
      "pual"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Pagar.",
    "character": "Neutral.svg",
    "correct": [
      "-Tashtawia"
    ],
    "wordBank": [
      "-Tashtawia",
      "matzaj",
      "an",
      "su"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Deber (una deuda).",
    "character": "Neutral.svg",
    "correct": [
      "-Tawikilia"
    ],
    "wordBank": [
      "-Tawikilia",
      "ukmakwil",
      "shinechmaka",
      "pal"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Contador / Calculadora.",
    "character": "Neutral.svg",
    "correct": [
      "Tapuani"
    ],
    "wordBank": [
      "Tapuani",
      "tik",
      "nituminhana",
      "tawia"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Precio / Valor.",
    "character": "Neutral.svg",
    "correct": [
      "Patiw"
    ],
    "wordBank": [
      "Patiw",
      "tzunti",
      "kitashtawki",
      "shukuk"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Dinero.",
    "character": "Neutral.svg",
    "correct": [
      "Tumin"
    ],
    "wordBank": [
      "Tumin",
      "iwan",
      "selka",
      "lilly"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Vuelto / Cambio.",
    "character": "Neutral.svg",
    "correct": [
      "Tapatalis"
    ],
    "wordBank": [
      "Tapatalis",
      "tatzayanilis",
      "ipatiw",
      "kashtul"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Mercado.",
    "character": "Neutral.svg",
    "correct": [
      "Tiankis"
    ],
    "wordBank": [
      "Tiankis",
      "mujmusta",
      "tajtaishtialis",
      "tamutkitilis"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "¿Cuál es el resultado de kashtul yey (18) multiplicado por nawi (4)?",
    "character": "Neutral.svg",
    "correct": "Yey pual majtakti ume",
    "options": [
      "Yey pual majtakti ume",
      "Yey pual (60)",
      "Se ajamat teksisti ipatiw $3"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Si una blusa (wipil) cuesta $12, ¿cuánto cuestan yey (3) blusas?",
    "character": "Neutral.svg",
    "correct": "Se pual majtakti chikwasen",
    "options": [
      "Se pual majtakti chikwasen",
      "Wey ipatiw",
      "Se pual majtakti ($30)"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "La operación tajtaishtialis se refiere a:",
    "character": "Neutral.svg",
    "correct": "Restar",
    "options": [
      "Sumar",
      "Restar",
      "Tumin"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Si pagas con $20 (se pual) una piña de $2.50, ¿cuánto es tu tapatalis?",
    "character": "Neutral.svg",
    "correct": "Kashtul ume tumin wan tajku",
    "options": [
      "Kashtul ume tumin wan tajku",
      "Majtakti tumin ($10)",
      "Se pual majtakti"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Un cartón de huevos (ajamat teksisti) cuesta:",
    "character": "Neutral.svg",
    "correct": "$3",
    "options": [
      "Vender",
      "$3",
      "$10"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "¿Cómo se dice \"caro\" en Nawat?",
    "character": "Neutral.svg",
    "correct": "Wey ipatiw",
    "options": [
      "Se tzunti nawi pual kashtul nawi",
      "Chupi ipatiw",
      "Wey ipatiw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Resultado de 400 ÷ 10:",
    "character": "Neutral.svg",
    "correct": "Ume pual",
    "options": [
      "Shinechnamakili yey tumin awakat",
      "Ume pual",
      "Se pual"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "Si tenías se pual kashtul (35) mangos y te dan ukmakwil (otros 5), tienes:",
    "character": "Neutral.svg",
    "correct": "Ume pual",
    "options": [
      "Yey pual (60)",
      "Ume pual",
      "Naja nikujki ume ajamat teksisti"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "El término para \"multiplicación\" es:",
    "character": "Neutral.svg",
    "correct": "Tamutkitilis",
    "options": [
      "-Tawikilia",
      "Tamutkitilis",
      "Tatzayanilis"
    ]
  },
  {
    "type": "select_translation",
    "stage": 4,
    "prompt": "¿A qué hora vas a comprar? (¿Tay horaj tiaskua?): [Youtube]",
    "character": "Neutral.svg",
    "correct": "Kajka peyna",
    "options": [
      "Se pual majtakti",
      "Kajka peyna",
      "Tik ne tiankis"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto le debo?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "nimetztawikilia?"
    ],
    "wordBank": [
      "¿Keski",
      "nimetztawikilia?",
      "sujsul",
      "uej",
      "kitashtawki"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Véndame tres dólares de aguacate.",
    "character": "Neutral.svg",
    "correct": [
      "Shinechnamakili",
      "yey",
      "tumin",
      "awakat."
    ],
    "wordBank": [
      "Shinechnamakili",
      "yey",
      "tumin",
      "awakat.",
      "nikua",
      "tajtaishtialis",
      "shinechmaka"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "El suéter es muy caro.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "sujsul",
      "wey",
      "ipatiw."
    ],
    "wordBank": [
      "Ne",
      "koton",
      "sujsul",
      "wey",
      "ipatiw.",
      "shukuk",
      "nechmakaket",
      "tapuani"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo ahorro dinero todos los días.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "niktuminhana",
      "mujmusta."
    ],
    "wordBank": [
      "Naja",
      "niktuminhana",
      "mujmusta.",
      "datka",
      "tesu",
      "nunoya"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Tienes limones?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Tikpia",
      "shukuk",
      "lala?"
    ],
    "wordBank": [
      "¿Tikpia",
      "shukuk",
      "lala?",
      "lala",
      "samak",
      "tik"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Toma el vuelto.",
    "character": "Neutral.svg",
    "correct": [
      "Shikwi",
      "ne",
      "tapatalis."
    ],
    "wordBank": [
      "Shikwi",
      "ne",
      "tapatalis.",
      "pal",
      "mujmusta",
      "shinechnamakili"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Setenta dólares (o de dinero).",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "pual",
      "majtakti",
      "tumin."
    ],
    "wordBank": [
      "Yey",
      "pual",
      "majtakti",
      "tumin.",
      "lala",
      "kushtal",
      "selka"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto pago?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "niktashtawia?"
    ],
    "wordBank": [
      "¿Keski",
      "niktashtawia?",
      "galanchin",
      "nusin",
      "tawikilia"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo compré dos cartones de huevos.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikujki",
      "ume",
      "ajamat",
      "teksisti."
    ],
    "wordBank": [
      "Naja",
      "nikujki",
      "ume",
      "ajamat",
      "teksisti.",
      "tapualis",
      "tajtaishtialis",
      "teksisti"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "La multiplicación es difícil.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamutkitilis",
      "uej."
    ],
    "wordBank": [
      "Ne",
      "tamutkitilis",
      "uej.",
      "tik",
      "tzunti",
      "titamaka"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Cuesta cuatro menos para setenta (66).",
    "character": "Neutral.svg",
    "correct": [
      "Ipatiw",
      "nawi",
      "selka",
      "yey",
      "pual",
      "tumin."
    ],
    "wordBank": [
      "Ipatiw",
      "nawi",
      "selka",
      "yey",
      "pual",
      "tumin.",
      "an",
      "nikpiatuya",
      "koton"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Tú tienes piñas?.",
    "character": "Neutral.svg",
    "correct": [
      "Taja",
      "tikpia",
      "matzaj?"
    ],
    "wordBank": [
      "Taja",
      "tikpia",
      "matzaj?",
      "ne",
      "nemi",
      "kajkakti"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo quiero tres faldas.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikneki",
      "yey",
      "kweyat."
    ],
    "wordBank": [
      "Naja",
      "nikneki",
      "yey",
      "kweyat.",
      "manguj",
      "tikpia",
      "titamaka"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Dame mi vuelto.",
    "character": "Neutral.svg",
    "correct": [
      "Shinechmaka",
      "nutapatalis."
    ],
    "wordBank": [
      "Shinechmaka",
      "nutapatalis.",
      "tapatalis",
      "nechmaka",
      "su"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "De nada.",
    "character": "Neutral.svg",
    "correct": [
      "Tesu",
      "datka."
    ],
    "wordBank": [
      "Tesu",
      "datka.",
      "tanamakani",
      "chikwasen",
      "tajtaishtialis"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿Cuánto cuesta el suéter?",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "ipatiw",
      "ne",
      "koton?."
    ],
    "wordBank": [
      "¿Keski",
      "ipatiw",
      "ne",
      "koton?.",
      "matzaj",
      "nimetztawikilia",
      "niktashtawia"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Véndame veinte naranjas.",
    "character": "Neutral.svg",
    "correct": [
      "Shinechnamakili",
      "se",
      "pual",
      "lala."
    ],
    "wordBank": [
      "Shinechnamakili",
      "se",
      "pual",
      "lala.",
      "makwil",
      "titamaka",
      "nitakua"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo pago doce dólares.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "niktashtawia",
      "majtakti",
      "ume",
      "tumin."
    ],
    "wordBank": [
      "Naja",
      "niktashtawia",
      "majtakti",
      "ume",
      "tumin.",
      "nunoya",
      "tumin",
      "tawia"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Ciento cuarenta y cuatro.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "tzunti",
      "ume",
      "pual",
      "nawi."
    ],
    "wordBank": [
      "Se",
      "tzunti",
      "ume",
      "pual",
      "nawi.",
      "tikmaka",
      "chupi",
      "makwil"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Dos aguacates valen un dólar.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "awakat",
      "ipatiw",
      "se",
      "tumin."
    ],
    "wordBank": [
      "Ume",
      "awakat",
      "ipatiw",
      "se",
      "tumin.",
      "yey",
      "koton",
      "tumin"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "La resta es buena.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tajtaishtialis",
      "yek."
    ],
    "wordBank": [
      "Ne",
      "tajtaishtialis",
      "yek.",
      "ukmakwil",
      "nemi",
      "tamutkitilis"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Trescientos treinta y cuatro.",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "tzunti",
      "se",
      "pual",
      "majtakti",
      "nawi."
    ],
    "wordBank": [
      "Yey",
      "tzunti",
      "se",
      "pual",
      "majtakti",
      "nawi.",
      "shikwi",
      "sujsul",
      "chikwey"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Yo quiero comprar zapatos.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikneki",
      "nikua",
      "kajkakti."
    ],
    "wordBank": [
      "Naja",
      "nikneki",
      "nikua",
      "kajkakti.",
      "kashtul",
      "tanamakani",
      "chikwey"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "¿A cómo los da?",
    "character": "Neutral.svg",
    "correct": [
      "¿Kejken",
      "titamaka?."
    ],
    "wordBank": [
      "¿Kejken",
      "titamaka?.",
      "tanamakani",
      "tapujputzualis",
      "keski"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "La suma es fácil.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tapujputzualis",
      "tesu",
      "uej."
    ],
    "wordBank": [
      "Ne",
      "tapujputzualis",
      "tesu",
      "uej.",
      "uej",
      "taja",
      "nitakua"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Ocho menos tres más cinco es diez.",
    "character": "Neutral.svg",
    "correct": [
      "Chikwey",
      "tajtaishtialis",
      "yey",
      "tapujputzualis",
      "makwil",
      "nemi",
      "majtakti."
    ],
    "wordBank": [
      "Chikwey",
      "tajtaishtialis",
      "yey",
      "tapujputzualis",
      "makwil",
      "nemi",
      "majtakti.",
      "shikwi",
      "tiankis",
      "kua"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Trescientos veinticuatro dividido entre nueve es treinta y seis.",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "tzunti",
      "se",
      "pual",
      "nawi",
      "tatzayanilis",
      "chiknawi",
      "nemi",
      "se",
      "pual",
      "majtakti",
      "chikwasen."
    ],
    "wordBank": [
      "Yey",
      "tzunti",
      "se",
      "pual",
      "nawi",
      "tatzayanilis",
      "chiknawi",
      "nemi",
      "se",
      "pual",
      "majtakti",
      "chikwasen.",
      "tesu",
      "nechmakaket",
      "tashtawia"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Tengo sed en el mercado.",
    "character": "Neutral.svg",
    "correct": [
      "Niamiki",
      "tik",
      "ne",
      "tiankis."
    ],
    "wordBank": [
      "Niamiki",
      "tik",
      "ne",
      "tiankis.",
      "kitek",
      "tanamakani",
      "shinechmaka"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "El precio es barato.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "patiw",
      "chupi",
      "ipatiw."
    ],
    "wordBank": [
      "Ne",
      "patiw",
      "chupi",
      "ipatiw.",
      "koton",
      "shinechnamakili",
      "tapujputzualis"
    ]
  },
  {
    "type": "translate",
    "stage": 4,
    "prompt": "Ahorita voy a comprar.",
    "character": "Neutral.svg",
    "correct": [
      "Samak",
      "niaw",
      "nitakua."
    ],
    "wordBank": [
      "Samak",
      "niaw",
      "nitakua.",
      "ajamat",
      "nikneki",
      "awakat"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi mamá",
    "character": "Neutral.svg",
    "correct": [
      "Nu-nan"
    ],
    "wordBank": [
      "Nu-nan",
      "nojnoywan",
      "innan",
      "siwakunew"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi papá",
    "character": "Neutral.svg",
    "correct": [
      "Nu-teku"
    ],
    "wordBank": [
      "Nu-teku",
      "nuichtakatakaw",
      "shulejyu",
      "tajtatanoy"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi esposa",
    "character": "Neutral.svg",
    "correct": [
      "Nu-siwaw"
    ],
    "wordBank": [
      "Nu-siwaw",
      "nojnoywan",
      "nutenan",
      "insiwamun"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi esposo",
    "character": "Neutral.svg",
    "correct": [
      "Nu-shulejyu"
    ],
    "wordBank": [
      "Nu-shulejyu",
      "nutiskalukichkunew",
      "nukujkumpawan",
      "anmueltiw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi abuela",
    "character": "Neutral.svg",
    "correct": [
      "Nu-noya"
    ],
    "wordBank": [
      "Nu-noya",
      "iichtakatakaw",
      "nuikman",
      "majmanujwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi abuelo",
    "character": "Neutral.svg",
    "correct": [
      "Nu-tatanoy"
    ],
    "wordBank": [
      "Nu-tatanoy",
      "numajmanujwan",
      "anmutejtepal",
      "anmuchan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hermano mayor",
    "character": "Neutral.svg",
    "correct": [
      "Nu-manuj"
    ],
    "wordBank": [
      "Nu-manuj",
      "muteku",
      "mutepal",
      "iichtakatakaw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hermano/a menor",
    "character": "Neutral.svg",
    "correct": [
      "Nu-ikaw"
    ],
    "wordBank": [
      "Nu-ikaw",
      "ikman",
      "ijipan",
      "tupipi"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hermana mayor (de mujer)",
    "character": "Neutral.svg",
    "correct": [
      "Nu-pipi"
    ],
    "wordBank": [
      "Nu-pipi",
      "numiekawan",
      "nanchin",
      "tu"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hermana mayor (de hombre)",
    "character": "Neutral.svg",
    "correct": [
      "Nu-eltiw"
    ],
    "wordBank": [
      "Nu-eltiw",
      "muipan",
      "shulejyu",
      "tusiwamun"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi hijo (dicho por un hombre)\" es:",
    "character": "Neutral.svg",
    "correct": "Nupíltzin",
    "options": [
      "`Inmiekawan`",
      "Nukunew",
      "Nupíltzin"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi nuera\" se dice:",
    "character": "Neutral.svg",
    "correct": "Nusiwamun",
    "options": [
      "Nusiwamun",
      "Numun",
      "`Tusiwamun`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "Para decir \"padrino\" se utiliza:",
    "character": "Neutral.svg",
    "correct": "Nu-ipan-teku",
    "options": [
      "`Innan-siwaw`",
      "Nu-ipan-nan",
      "Nu-ipan-teku"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "¿Cómo se dice \"mi cuñado\"?:",
    "character": "Neutral.svg",
    "correct": "Nu-wejpul",
    "options": [
      "Nu-wes",
      "Nu-teku",
      "Nu-wejpul"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Nuestros padres\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "Tu-tejtekuwan",
    "options": [
      "Tu-tejtekuwan",
      "In-tejtekuwan",
      "`Muikaw-nan`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "Un \"hijo adoptado\" (de mujer) es:",
    "character": "Neutral.svg",
    "correct": "Nu-tiskalkunew",
    "options": [
      "Nu-tiskalkunew",
      "Nu-tepal-kunew",
      "Ikman-siwaw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi bisabuela\" se dice:",
    "character": "Neutral.svg",
    "correct": "Nu-ipan-noya",
    "options": [
      "Nu-noya",
      "Nu-ipan-noya",
      "Nu-chupi-manuj"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi yerno\" es:",
    "character": "Neutral.svg",
    "correct": "Numun",
    "options": [
      "Numun",
      "Nusiwamun",
      "Nupilawan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Madrastra\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "Nu-tenan",
    "options": [
      "Nu-tenan",
      "`Nuikman-shulejyu`",
      "Nu-teteku"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Bisnieto\" se dice:",
    "character": "Neutral.svg",
    "correct": "Nu-ipan-ishwiyu",
    "options": [
      "Nu-ipan-ishwiyu",
      "Nu-ishwiyu",
      "Nu-tiskalsiwapíltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "El hogar de tu mamá y tu papá.",
    "character": "Neutral.svg",
    "correct": [
      "Ichan",
      "munan",
      "wan",
      "muteku"
    ],
    "wordBank": [
      "Ichan",
      "munan",
      "wan",
      "muteku",
      "ikawan",
      "muwejpul",
      "wes"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hijastro (dicho por un hombre).",
    "character": "Neutral.svg",
    "correct": [
      "Nu-tepal-píltzin"
    ],
    "wordBank": [
      "Nu-tepal-píltzin",
      "nutejtepal",
      "iikman",
      "nuipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestros padrinos.",
    "character": "Neutral.svg",
    "correct": [
      "Tu-ijipantekuwan"
    ],
    "wordBank": [
      "Tu-ijipantekuwan",
      "muikman",
      "nan",
      "nupijpiluwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "El tío mayor de ellos (de parte de mamá).",
    "character": "Neutral.svg",
    "correct": [
      "In-manuj-nan"
    ],
    "wordBank": [
      "In-manuj-nan",
      "nupiltzin",
      "in",
      "nuikaw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi cuñada.",
    "character": "Neutral.svg",
    "correct": [
      "Nu-wes"
    ],
    "wordBank": [
      "Nu-wes",
      "anmuikawan",
      "tuijishwiyuwan",
      "intajtatanoy"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su hija (de ella).",
    "character": "Neutral.svg",
    "correct": [
      "I-siwakunew"
    ],
    "wordBank": [
      "I-siwakunew",
      "siwakunew",
      "iichtakatakaw",
      "innan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi exesposa.",
    "character": "Neutral.svg",
    "correct": [
      "Nu-ikman-siwaw"
    ],
    "wordBank": [
      "Nu-ikman-siwaw",
      "nutiskalpiltzin",
      "nusiwamun",
      "nuikman"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu tía mayor (de parte de papá).",
    "character": "Neutral.svg",
    "correct": [
      "Mu-eltiw-teku"
    ],
    "wordBank": [
      "Mu-eltiw-teku",
      "nutenan",
      "tupijpiluwan",
      "mueltiw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestra familia.",
    "character": "Neutral.svg",
    "correct": [
      "Tu-miekawan"
    ],
    "wordBank": [
      "Tu-miekawan",
      "anmuikawan",
      "anmutejtepal",
      "iteku"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis sobrinos.",
    "character": "Neutral.svg",
    "correct": [
      "Nu-pijpiluwan"
    ],
    "wordBank": [
      "Nu-pijpiluwan",
      "tutejtepal",
      "eltiw",
      "tajtatanoywan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hija adoptiva (de un hombre).",
    "character": "Neutral.svg",
    "correct": [
      "Nu-tiskalsiwapíltzin"
    ],
    "wordBank": [
      "Nu-tiskalsiwapíltzin",
      "ijishwiyuwan",
      "pijpipil",
      "noya"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus abuelos (hombres y mujeres).",
    "character": "Neutral.svg",
    "correct": [
      "I-tatanoywan"
    ],
    "wordBank": [
      "I-tatanoywan",
      "pilawan",
      "nutenan",
      "tuijishwiyuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis tías mayores (de parte de mamá).",
    "character": "Neutral.svg",
    "correct": [
      "Nu-pipiwan-nan"
    ],
    "wordBank": [
      "Nu-pipiwan-nan",
      "nuwes",
      "nutenan",
      "siwaw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su hija (de él).",
    "character": "Neutral.svg",
    "correct": [
      "I-siwapíltzin"
    ],
    "wordBank": [
      "I-siwapíltzin",
      "nuteteku",
      "nantzin",
      "innan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hermanastro mayor.",
    "character": "Neutral.svg",
    "correct": [
      "Nu-chupi-manuj"
    ],
    "wordBank": [
      "Nu-chupi-manuj",
      "miekawan",
      "tuijipan",
      "noya"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi abuelo",
    "character": "Neutral.svg",
    "correct": [
      "Nu-tatanoy."
    ],
    "wordBank": [
      "Nu-tatanoy.",
      "mueltiw",
      "miekawan",
      "anmutejtepal"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu tía menor (parte de papá)",
    "character": "Neutral.svg",
    "correct": [
      "Mu-ikaw-teku."
    ],
    "wordBank": [
      "Mu-ikaw-teku.",
      "ipan",
      "tutejtekuwan",
      "kunew"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "El esposo de mi mamá (padrastro)",
    "character": "Neutral.svg",
    "correct": [
      "Nu-teteku."
    ],
    "wordBank": [
      "Nu-teteku.",
      "iteku",
      "majmanujwan",
      "nukujkumpawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su nieta",
    "character": "Neutral.svg",
    "correct": [
      "I-ishwiyu."
    ],
    "wordBank": [
      "I-ishwiyu.",
      "tueltiwan",
      "teteku",
      "nuichtakatakaw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi madrecita (con respeto)",
    "character": "Neutral.svg",
    "correct": [
      "Nu-nantzin."
    ],
    "wordBank": [
      "Nu-nantzin.",
      "imanuj",
      "nunoya",
      "ikawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hermano mayor",
    "character": "Neutral.svg",
    "correct": [
      "Nu-manuj."
    ],
    "wordBank": [
      "Nu-manuj.",
      "mutiskalkunew",
      "nuwes",
      "teku"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu exesposo",
    "character": "Neutral.svg",
    "correct": [
      "Mu-ikman-shulejyu."
    ],
    "wordBank": [
      "Mu-ikman-shulejyu.",
      "pilawan",
      "tajtatanoywan",
      "ijipantekuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus tíos mayores (parte de papá)",
    "character": "Neutral.svg",
    "correct": [
      "In-majmanujwan-teku."
    ],
    "wordBank": [
      "In-majmanujwan-teku.",
      "nuikman",
      "anmuchan",
      "iipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi madrina",
    "character": "Neutral.svg",
    "correct": [
      "Nu-ipan-nan."
    ],
    "wordBank": [
      "Nu-ipan-nan.",
      "nuchupi",
      "nutenan",
      "nantzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tus nietos",
    "character": "Neutral.svg",
    "correct": [
      "Mu-ijishwiyuwan."
    ],
    "wordBank": [
      "Mu-ijishwiyuwan.",
      "nutejtepal",
      "siwakunew",
      "anmumiekawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi mamita (con cariño)",
    "character": "Neutral.svg",
    "correct": [
      "Nu-nanchin."
    ],
    "wordBank": [
      "Nu-nanchin.",
      "miekawan",
      "iikman",
      "nutenan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestra hija (de mujer)",
    "character": "Neutral.svg",
    "correct": [
      "Tu-siwakunew."
    ],
    "wordBank": [
      "Tu-siwakunew.",
      "insiwamun",
      "manuj",
      "ijishwiyuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hermanastro menor",
    "character": "Neutral.svg",
    "correct": [
      "Nu-chupi-ikaw."
    ],
    "wordBank": [
      "Nu-chupi-ikaw.",
      "nuikawchin",
      "nunantzin",
      "nuijishwiyuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu padre adoptivo",
    "character": "Neutral.svg",
    "correct": [
      "Mu-tepal-teku."
    ],
    "wordBank": [
      "Mu-tepal-teku.",
      "anmuchan",
      "nutejtepal",
      "imanuj"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus bisabuelos (hombres)",
    "character": "Neutral.svg",
    "correct": [
      "In-ijipan-tajtatanoy."
    ],
    "wordBank": [
      "In-ijipan-tajtatanoy.",
      "manuj",
      "iikawan",
      "kunew"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi nuera",
    "character": "Neutral.svg",
    "correct": [
      "Nusiwamun"
    ],
    "wordBank": [
      "Nusiwamun",
      "ijipan",
      "inpijpiluwan",
      "muijipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi cuñado",
    "character": "Neutral.svg",
    "correct": [
      "Nuwejpul"
    ],
    "wordBank": [
      "Nuwejpul",
      "ijishwiyuwan",
      "i",
      "isiwaw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi bisnieto/a",
    "character": "Neutral.svg",
    "correct": [
      "Nuipan-ishwiyu"
    ],
    "wordBank": [
      "Nuipan-ishwiyu",
      "chupi",
      "teteku",
      "noya"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi suegra (dicho por un hombre)",
    "character": "Neutral.svg",
    "correct": [
      "Nunan-siwaw"
    ],
    "wordBank": [
      "Nunan-siwaw",
      "ikaw",
      "nuikaw",
      "ikman"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi madre adoptiva",
    "character": "Neutral.svg",
    "correct": [
      "Nutepal-nan"
    ],
    "wordBank": [
      "Nutepal-nan",
      "imajmanujwan",
      "tu",
      "nutiskalpiltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis padrinos",
    "character": "Neutral.svg",
    "correct": [
      "Nuipantekuwan"
    ],
    "wordBank": [
      "Nuipantekuwan",
      "miekawan",
      "shulejyu",
      "ishwiyu"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi exesposa",
    "character": "Neutral.svg",
    "correct": [
      "Nuikman-siwaw"
    ],
    "wordBank": [
      "Nuikman-siwaw",
      "numun",
      "imanuj",
      "muikman"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hija (dicho por una mujer)",
    "character": "Neutral.svg",
    "correct": [
      "Nusiwakunew"
    ],
    "wordBank": [
      "Nusiwakunew",
      "nutiskalukichkunew",
      "anmuchan",
      "mueltiw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hijo adoptivo (dicho por un hombre)",
    "character": "Neutral.svg",
    "correct": [
      "Nutiskalpíltzin"
    ],
    "wordBank": [
      "Nutiskalpíltzin",
      "inpijpiluwan",
      "nutiskalsiwakunew",
      "muipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis sobrinos/as",
    "character": "Neutral.svg",
    "correct": [
      "Nupijpiluwan"
    ],
    "wordBank": [
      "Nupijpiluwan",
      "nujnuntzin",
      "nusiwayulu",
      "pipi"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "¿Cómo dice una mujer \"Mi suegro\"?",
    "character": "Neutral.svg",
    "correct": "`Nuteku-shulejyu`",
    "options": [
      "`Nuteku-siwaw`",
      "`chupi-ikaw`",
      "`Nuteku-shulejyu`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Tu tía menor (por parte de madre)\" es:",
    "character": "Neutral.svg",
    "correct": "`Muikaw-nan`",
    "options": [
      "`Muikaw-nan`",
      "Nuipan-tatanoy",
      "`Mupipi-nan`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "El plural de \"Nuestros padres\" (madre y padre) es:",
    "character": "Neutral.svg",
    "correct": "`Tutejtekuwan`",
    "options": [
      "`Anmutejtekuwan`",
      "`ikunew`",
      "`Tutejtekuwan`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi hermanastro mayor\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "`Nuchupi-manuj`",
    "options": [
      "Chupi-pipi",
      "`Nuchupi-manuj`",
      "In-ijishwiyuwan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Sus bisabuelas (de ellos)\" es:",
    "character": "Neutral.svg",
    "correct": "`In-ijipan-nojnoywan`",
    "options": [
      "`In-ijipan-nojnoywan`",
      "`Tuijipan-nojnoywan`",
      "Nu-wejpul"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Hijo varón\" dicho por una mujer:",
    "character": "Neutral.svg",
    "correct": "`Nutelpuch`",
    "options": [
      "`Nutelpuch`",
      "Tuikawan",
      "`Nupíltzin`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Su esposo (de ella)\" se escribe:",
    "character": "Neutral.svg",
    "correct": "`Ishulejyu`",
    "options": [
      "`Nupijpiltzitzin`",
      "`Isiwaw`",
      "`Ishulejyu`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Tu cuñada\" se dice:",
    "character": "Neutral.svg",
    "correct": "`Muwes`",
    "options": [
      "`Numanujchin`",
      "`Muwejpul`",
      "`Muwes`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi ahijada (dicho por un hombre)\" es:",
    "character": "Neutral.svg",
    "correct": "`Nuipan-siwapíltzin`",
    "options": [
      "`Nuipan-siwakunew`",
      "`Nuipan-siwapíltzin`",
      "In-ijishwiyuwan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Nuestra familia\" se escribe:",
    "character": "Neutral.svg",
    "correct": "`Tumiekawan`",
    "options": [
      "`Numajmanujwan`",
      "`Tumiekawan`",
      "`Inmiekawan`"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "La suegra de ellos (madre de la esposa de ellos).",
    "character": "Neutral.svg",
    "correct": [
      "`Innan-siwaw`"
    ],
    "wordBank": [
      "`Innan-siwaw`",
      "anmutejtepal",
      "tatanoy",
      "pipiwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "La tía mayor de él (hermana mayor de su mamá).",
    "character": "Neutral.svg",
    "correct": [
      "`Iipipi",
      "nunan`"
    ],
    "wordBank": [
      "`Iipipi",
      "nunan`",
      "nu",
      "nupijpiluwan",
      "tusiwapiltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis nietos y nietas.",
    "character": "Neutral.svg",
    "correct": [
      "`Nuijishwiyuwan`"
    ],
    "wordBank": [
      "`Nuijishwiyuwan`",
      "nojnoywan",
      "intajtatanoy",
      "tepal"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis hermanos mayores.",
    "character": "Neutral.svg",
    "correct": [
      "`Numajmanujwan`"
    ],
    "wordBank": [
      "`Numajmanujwan`",
      "nuteku",
      "iishwiyu",
      "tiskalsiwapiltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Los tíos menores de él (hermanos menores de su papá).",
    "character": "Neutral.svg",
    "correct": [
      "`Iikawan",
      "nuteku`"
    ],
    "wordBank": [
      "`Iikawan",
      "nuteku`",
      "insiwamun",
      "nantzin",
      "shulejyu"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis muchachos (hijos jóvenes).",
    "character": "Neutral.svg",
    "correct": [
      "`Nupijpiltzitzin`"
    ],
    "wordBank": [
      "`Nupijpiltzitzin`",
      "tiskalsiwapiltzin",
      "nutepal",
      "iikawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi amigo gay.",
    "character": "Neutral.svg",
    "correct": [
      "`Nusiwayulu`"
    ],
    "wordBank": [
      "`Nusiwayulu`",
      "anmuchan",
      "muijipan",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi amante (mujer).",
    "character": "Neutral.svg",
    "correct": [
      "`Nuichtakasiwaw`"
    ],
    "wordBank": [
      "`Nuichtakasiwaw`",
      "nuwejpul",
      "imajmanujwan",
      "teku"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus tíos mayores (hermanos mayores de su mamá).",
    "character": "Neutral.svg",
    "correct": [
      "`Imajmanujwan",
      "nunan`"
    ],
    "wordBank": [
      "`Imajmanujwan",
      "nunan`",
      "numun",
      "ichan",
      "nuchupi"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi exesposo.",
    "character": "Neutral.svg",
    "correct": [
      "`Nuikman-shulejyu`"
    ],
    "wordBank": [
      "`Nuikman-shulejyu`",
      "mueltiw",
      "numiekawan",
      "tuijipantekuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis hijastros e hijastras (dicho por una mujer).",
    "character": "Neutral.svg",
    "correct": [
      "`Nutejtepal-pilawan`"
    ],
    "wordBank": [
      "`Nutejtepal-pilawan`",
      "tueltiwan",
      "nanchin",
      "kunew"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hija adoptada (dicho por una mujer).",
    "character": "Neutral.svg",
    "correct": [
      "`Nutiskalsiwakunew`"
    ],
    "wordBank": [
      "`Nutiskalsiwakunew`",
      "pijpiluwan",
      "nojnoywan",
      "nuchupi"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su nieto o nieta.",
    "character": "Neutral.svg",
    "correct": [
      "`Iishwiyu`"
    ],
    "wordBank": [
      "`Iishwiyu`",
      "tutejtekuwan",
      "nuipantekuwan",
      "manuj"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus tíos menores de ustedes (de parte de mamá).",
    "character": "Neutral.svg",
    "correct": [
      "`Anmuikawan-nan`"
    ],
    "wordBank": [
      "`Anmuikawan-nan`",
      "shulejyu",
      "ikman",
      "siwapiltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi bisabuela.",
    "character": "Neutral.svg",
    "correct": [
      "`Nuipan-noya`"
    ],
    "wordBank": [
      "`Nuipan-noya`",
      "nojnoywan",
      "ikman",
      "nuteteku"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi abuela",
    "character": "Neutral.svg",
    "correct": [
      "`Nunoya`."
    ],
    "wordBank": [
      "`Nunoya`.",
      "muikman",
      "nupijpiluwan",
      "tajtatanoy"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu hermana mayor (de hombre)",
    "character": "Neutral.svg",
    "correct": [
      "`Mueltiw`."
    ],
    "wordBank": [
      "`Mueltiw`.",
      "tuijishwiyuwan",
      "nusiwamun",
      "iipipi"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su tía mayor (parte de mamá, de ella)",
    "character": "Neutral.svg",
    "correct": [
      "`Ipipi-nan`."
    ],
    "wordBank": [
      "`Ipipi-nan`.",
      "nuikman",
      "mutepal",
      "kunew"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi padrastro",
    "character": "Neutral.svg",
    "correct": [
      "`Nuteteku`."
    ],
    "wordBank": [
      "`Nuteteku`.",
      "nusiwamun",
      "anmutejtepal",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su bisnieto",
    "character": "Neutral.svg",
    "correct": [
      "`Iipan-ishwiyu`."
    ],
    "wordBank": [
      "`Iipan-ishwiyu`.",
      "nupiltzin",
      "mumun",
      "isiwaw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestra hija (de hombre)",
    "character": "Neutral.svg",
    "correct": [
      "`Tusiwapíltzin`."
    ],
    "wordBank": [
      "`Tusiwapíltzin`.",
      "tupipi",
      "munan",
      "nutepal"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu cuñado",
    "character": "Neutral.svg",
    "correct": [
      "`Muwejpul`."
    ],
    "wordBank": [
      "`Muwejpul`.",
      "nuikman",
      "tajtatanoywan",
      "numajmanujwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis hijastros (de hombre)",
    "character": "Neutral.svg",
    "correct": [
      "`Nutejtepal-pijpipil`."
    ],
    "wordBank": [
      "`Nutejtepal-pijpipil`.",
      "tuijipantekuwan",
      "tatanoy",
      "iteku"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi madrina",
    "character": "Neutral.svg",
    "correct": [
      "`Nuipan-nan`."
    ],
    "wordBank": [
      "`Nuipan-nan`.",
      "nan",
      "anmuipan",
      "mutepal"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tus nietos",
    "character": "Neutral.svg",
    "correct": [
      "`Muijishwiyuwan`."
    ],
    "wordBank": [
      "`Muijishwiyuwan`.",
      "tajtatanoy",
      "nupijpiluwan",
      "ikman"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi madrecita (con respeto)",
    "character": "Neutral.svg",
    "correct": [
      "`Nunantzin`."
    ],
    "wordBank": [
      "`Nunantzin`.",
      "muijipan",
      "nupijpiluwan",
      "ipijpiluwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su yerno",
    "character": "Neutral.svg",
    "correct": [
      "`Imun`."
    ],
    "wordBank": [
      "`Imun`.",
      "nuteteku",
      "muipan",
      "ipijpiluwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "El tío mayor de ella (parte de papá)",
    "character": "Neutral.svg",
    "correct": [
      "`Imanuj-teku`."
    ],
    "wordBank": [
      "`Imanuj-teku`.",
      "miekawan",
      "ijipan",
      "pipiwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hijo adoptivo (de mujer)",
    "character": "Neutral.svg",
    "correct": [
      "`Nutiskalkunew`."
    ],
    "wordBank": [
      "`Nutiskalkunew`.",
      "nusiwakunew",
      "iikawan",
      "chupi"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su bisabuelo",
    "character": "Neutral.svg",
    "correct": [
      "`Iipan-tatanoy`."
    ],
    "wordBank": [
      "`Iipan-tatanoy`.",
      "nutiskalpiltzin",
      "pilawan",
      "ijishwiyuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi nuera.",
    "character": "Neutral.svg",
    "correct": [
      "Nusiwamun"
    ],
    "wordBank": [
      "Nusiwamun",
      "nutiskalukichkunew",
      "muipan",
      "ikman"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi cuñado.",
    "character": "Neutral.svg",
    "correct": [
      "Nuwejpul"
    ],
    "wordBank": [
      "Nuwejpul",
      "wes",
      "nuikawchin",
      "ishwiyu"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi yerno.",
    "character": "Neutral.svg",
    "correct": [
      "Numun"
    ],
    "wordBank": [
      "Numun",
      "ijipantekuwan",
      "muipan",
      "eltiw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi cuñada.",
    "character": "Neutral.svg",
    "correct": [
      "Nuwes"
    ],
    "wordBank": [
      "Nuwes",
      "nuwejpul",
      "tajtatanoywan",
      "nupijpiltzitzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi niño huérfano.",
    "character": "Neutral.svg",
    "correct": [
      "Nujnuntzin"
    ],
    "wordBank": [
      "Nujnuntzin",
      "kunew",
      "tatanoywan",
      "chupi"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus sobrinos de ellos.",
    "character": "Neutral.svg",
    "correct": [
      "Inpijpiluwan"
    ],
    "wordBank": [
      "Inpijpiluwan",
      "nuteteku",
      "nupijpiluwan",
      "miekawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hija (dicho por una mujer).",
    "character": "Neutral.svg",
    "correct": [
      "Nusiwakunew"
    ],
    "wordBank": [
      "Nusiwakunew",
      "iipan",
      "nuijishwiyuwan",
      "majmanujwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hijo adoptivo (dicho por un hombre).",
    "character": "Neutral.svg",
    "correct": [
      "Nutiskalpíltzin"
    ],
    "wordBank": [
      "Nutiskalpíltzin",
      "tatanoy",
      "ipipi",
      "nantzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestros padrinos.",
    "character": "Neutral.svg",
    "correct": [
      "Tuijipantekuwan"
    ],
    "wordBank": [
      "Tuijipantekuwan",
      "numiekawan",
      "munan",
      "tusiwamun"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi bisnieto o bisnieta.",
    "character": "Neutral.svg",
    "correct": [
      "Nuipan-ishwiyu"
    ],
    "wordBank": [
      "Nuipan-ishwiyu",
      "ichan",
      "nojnoywan",
      "tatanoy"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mis hijos (dicho por un hombre)\" es:",
    "character": "Neutral.svg",
    "correct": "Nupijpipil",
    "options": [
      "Tuikawan",
      "Nupijpipil",
      "Nupilawan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi bisabuelo\" se dice:",
    "character": "Neutral.svg",
    "correct": "Nuipan-tatanoy",
    "options": [
      "Nuipan-tatanoy",
      "Nu-wes",
      "Nuipan-noya"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Madrastra\" es:",
    "character": "Neutral.svg",
    "correct": "Nutenan",
    "options": [
      "Nutenan",
      "Nuteteku",
      "Nuichtakatakaw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi hermanastra mayor (de hombre)\" es:",
    "character": "Neutral.svg",
    "correct": "Chupi-eltiw",
    "options": [
      "Chupi-pipi",
      "`Tuijipan-nojnoywan`",
      "Chupi-eltiw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Sus padres (mamá y papá)\" es:",
    "character": "Neutral.svg",
    "correct": "Intejtekuwan",
    "options": [
      "Intejtekuwan",
      "`Muijishwiyuwan`",
      "`anmu-`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Nuestro hijo adoptivo (de mujer)\" es:",
    "character": "Neutral.svg",
    "correct": "Tutiskalukichkunew",
    "options": [
      "Nutiskalpíltzin",
      "Nukujkumpawan",
      "Tutiskalukichkunew"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "¿Cómo dice un hombre \"Mi suegra\"?",
    "character": "Neutral.svg",
    "correct": "Nunan-siwaw",
    "options": [
      "Nunan-siwaw",
      "Nu-ipan-ishwiyu",
      "Nunan-shulejyu"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"¿Cómo dice un hombre 'Mi suegro'?\"",
    "character": "Neutral.svg",
    "correct": "Nuteku-siwaw",
    "options": [
      "Nu-ipan-nan",
      "Nuteku-shulejyu",
      "Nuteku-siwaw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi amante (hombre)\" es:",
    "character": "Neutral.svg",
    "correct": "Nuichtakatakaw",
    "options": [
      "Tupipi",
      "Nuichtakatakaw",
      "Nuichtakasiwaw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Sus bisnietos (de ellos)\" es:",
    "character": "Neutral.svg",
    "correct": "In-ijipan-ijishwiyuwan",
    "options": [
      "In-ijishwiyuwan",
      "In-ijipan-ijishwiyuwan",
      "`Iipipi nunan`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi hermana mayor (de mujer)\" es:",
    "character": "Neutral.svg",
    "correct": "Nupipi",
    "options": [
      "`Nutiskalsiwakunew`",
      "Nupipi",
      "Nueltiw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Nuestro hermano menor\" es:",
    "character": "Neutral.svg",
    "correct": "Tuikaw",
    "options": [
      "`Tusiwapíltzin`",
      "Tuikaw",
      "Tuikawan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Sus nietos (de ustedes)\" es:",
    "character": "Neutral.svg",
    "correct": "Anmuijishwiyuwan",
    "options": [
      "Anmuijishwiyuwan",
      "`ikunew`",
      "`Intajtatanoy`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi exesposa\" es:",
    "character": "Neutral.svg",
    "correct": "Ikman-siwaw",
    "options": [
      "Ikman-siwaw",
      "Muikman-siwaw",
      "Ikman-shulejyu"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi ahijado (de mujer)\" es:",
    "character": "Neutral.svg",
    "correct": "Nuipan-kunew",
    "options": [
      "Nuipan-kunew",
      "`Iipan-tatanoy`",
      "Nuipan-píltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis padrinos.",
    "character": "Neutral.svg",
    "correct": [
      "Nuipantekuwan"
    ],
    "wordBank": [
      "Nuipantekuwan",
      "ikman",
      "tiskalsiwapiltzin",
      "ipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su familia (de ustedes).",
    "character": "Neutral.svg",
    "correct": [
      "Anmumiekawan"
    ],
    "wordBank": [
      "Anmumiekawan",
      "nutenan",
      "eltiw",
      "imanuj"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Los tíos mayores de ellos (parte de mamá).",
    "character": "Neutral.svg",
    "correct": [
      "In-majmanujwan-nan"
    ],
    "wordBank": [
      "In-majmanujwan-nan",
      "iipipi",
      "tatanoywan",
      "nuipantekuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestros hijastros (dicho por una mujer).",
    "character": "Neutral.svg",
    "correct": [
      "Tutejtepal-pilawan"
    ],
    "wordBank": [
      "Tutejtepal-pilawan",
      "manuj",
      "tu",
      "muijishwiyuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu exesposo.",
    "character": "Neutral.svg",
    "correct": [
      "Muikman-shulejyu"
    ],
    "wordBank": [
      "Muikman-shulejyu",
      "pijpipil",
      "i",
      "imanuj"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Las bisabuelas de ellos.",
    "character": "Neutral.svg",
    "correct": [
      "In-ijipan-nojnoywan"
    ],
    "wordBank": [
      "In-ijipan-nojnoywan",
      "nusiwayulu",
      "teku",
      "iteku"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hijo (dicho por un hombre).",
    "character": "Neutral.svg",
    "correct": [
      "Nupíltzin"
    ],
    "wordBank": [
      "Nupíltzin",
      "nuikaw",
      "nukujkumpawan",
      "mueltiw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestros sobrinos.",
    "character": "Neutral.svg",
    "correct": [
      "Tupijpiluwan"
    ],
    "wordBank": [
      "Tupijpiluwan",
      "anmuchan",
      "ipipi",
      "mutepal"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi ahijado o ahijada (dicho por una mujer).",
    "character": "Neutral.svg",
    "correct": [
      "Nuipan-kunew"
    ],
    "wordBank": [
      "Nuipan-kunew",
      "nuteteku",
      "tuijipantekuwan",
      "muikman"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "La nuera de ellos.",
    "character": "Neutral.svg",
    "correct": [
      "Insiwamun"
    ],
    "wordBank": [
      "Insiwamun",
      "iichtakatakaw",
      "tuijipan",
      "pilawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi amante (hombre).",
    "character": "Neutral.svg",
    "correct": [
      "Nuichtakatakaw"
    ],
    "wordBank": [
      "Nuichtakatakaw",
      "majmanujwan",
      "nunoya",
      "nusiwayulu"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestros bisabuelos (hombres).",
    "character": "Neutral.svg",
    "correct": [
      "Tuijipan-tajtatanoy"
    ],
    "wordBank": [
      "Tuijipan-tajtatanoy",
      "i",
      "nuchupi",
      "nupiltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu hermana mayor (dicho por un hombre).",
    "character": "Neutral.svg",
    "correct": [
      "Mueltiw"
    ],
    "wordBank": [
      "Mueltiw",
      "nujnuntzin",
      "teteku",
      "iipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hijo adoptivo (de mujer)",
    "character": "Neutral.svg",
    "correct": [
      "Nutiskalukichkunew."
    ],
    "wordBank": [
      "Nutiskalukichkunew.",
      "majmanujwan",
      "nuteteku",
      "nuipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu ahijada (de hombre)",
    "character": "Neutral.svg",
    "correct": [
      "Muipan-siwapíltzin."
    ],
    "wordBank": [
      "Muipan-siwapíltzin.",
      "ijipan",
      "teku",
      "anmuikawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestra hija (de hombre)",
    "character": "Neutral.svg",
    "correct": [
      "Tusiwapíltzin."
    ],
    "wordBank": [
      "Tusiwapíltzin.",
      "teku",
      "iteku",
      "pijpiluwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus tíos menores (parte de papá, de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "In-ikawan-teku."
    ],
    "wordBank": [
      "In-ikawan-teku.",
      "nunoyajchin",
      "chupi",
      "nojnoywan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi madre adoptiva",
    "character": "Neutral.svg",
    "correct": [
      "Nutepal-nan."
    ],
    "wordBank": [
      "Nutepal-nan.",
      "imun",
      "numun",
      "nan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Vuestros hijastros (de hombre)",
    "character": "Neutral.svg",
    "correct": [
      "Anmutejtepal-pijpipil."
    ],
    "wordBank": [
      "Anmutejtepal-pijpipil.",
      "munan",
      "nusiwamun",
      "nu"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su suegro (de ella)",
    "character": "Neutral.svg",
    "correct": [
      "Iteku-shulejyu."
    ],
    "wordBank": [
      "Iteku-shulejyu.",
      "majmanujwan",
      "iikawan",
      "pijpiluwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi exmujer",
    "character": "Neutral.svg",
    "correct": [
      "Ikman-siwaw."
    ],
    "wordBank": [
      "Ikman-siwaw.",
      "numajmanujwan",
      "pipiwan",
      "tutejtepal"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tus bisabuelos (hombres y mujeres)",
    "character": "Neutral.svg",
    "correct": [
      "Muijipan-tajtatanoywan."
    ],
    "wordBank": [
      "Muijipan-tajtatanoywan.",
      "nunan",
      "ijishwiyuwan",
      "muijishwiyuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestra hermana mayor (de mujer)",
    "character": "Neutral.svg",
    "correct": [
      "Tupipi."
    ],
    "wordBank": [
      "Tupipi.",
      "ichan",
      "teteku",
      "nuikawchin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su yerno",
    "character": "Neutral.svg",
    "correct": [
      "Imun."
    ],
    "wordBank": [
      "Imun.",
      "ipipi",
      "nujnuntzin",
      "ikawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi familia",
    "character": "Neutral.svg",
    "correct": [
      "Numiekawan."
    ],
    "wordBank": [
      "Numiekawan.",
      "ikawan",
      "nuteteku",
      "tusiwapiltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis compañeros o compañeras.",
    "character": "Neutral.svg",
    "correct": [
      "Nukujkumpawan"
    ],
    "wordBank": [
      "Nukujkumpawan",
      "nupijpiluwan",
      "iichtakatakaw",
      "ipijpiluwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus tíos menores de él (hermanos de su papá).",
    "character": "Neutral.svg",
    "correct": [
      "Iikawan",
      "nuteku"
    ],
    "wordBank": [
      "Iikawan",
      "nuteku",
      "insiwamun",
      "ishwiyu",
      "munan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi amante (mujer).",
    "character": "Neutral.svg",
    "correct": [
      "Nuichtakasiwaw"
    ],
    "wordBank": [
      "Nuichtakasiwaw",
      "tuijipan",
      "nunan",
      "tiskalsiwapiltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestros bisabuelos (hombres).",
    "character": "Neutral.svg",
    "correct": [
      "Tuijipan-tajtatanoy"
    ],
    "wordBank": [
      "Tuijipan-tajtatanoy",
      "nupiltzin",
      "tusiwapiltzin",
      "ipijpiluwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu exesposa.",
    "character": "Neutral.svg",
    "correct": [
      "Muikman-siwaw"
    ],
    "wordBank": [
      "Muikman-siwaw",
      "mumun",
      "iteku",
      "nunoyajchin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus tíos mayores de ellos (por parte de mamá).",
    "character": "Neutral.svg",
    "correct": [
      "In-majmanujwan-nan"
    ],
    "wordBank": [
      "In-majmanujwan-nan",
      "insiwamun",
      "pijpipil",
      "nantzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi niño huérfano o desamparado.",
    "character": "Neutral.svg",
    "correct": [
      "Nujnuntzin"
    ],
    "wordBank": [
      "Nujnuntzin",
      "iteku",
      "nunoyajchin",
      "nunan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su tía mayor de ustedes (por parte de papá).",
    "character": "Neutral.svg",
    "correct": [
      "Anmueltiw-teku"
    ],
    "wordBank": [
      "Anmueltiw-teku",
      "nutiskalpiltzin",
      "miekawan",
      "muijipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestra hija (dicho por un hombre).",
    "character": "Neutral.svg",
    "correct": [
      "Tusiwapíltzin"
    ],
    "wordBank": [
      "Tusiwapíltzin",
      "ikawan",
      "nutenan",
      "mu"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su ahijado o ahijada de ella.",
    "character": "Neutral.svg",
    "correct": [
      "Iipan-kunew"
    ],
    "wordBank": [
      "Iipan-kunew",
      "nuteku",
      "nujnuntzin",
      "siwaw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "¿Cómo se dice \"mis hermanos\" (vínculo de sangre)?",
    "character": "Neutral.svg",
    "correct": "`numajmanujwan`",
    "options": [
      "Nupíltzin",
      "`numiekawan`",
      "`numajmanujwan`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Su hijo\" (poseído por una mujer) se traduce como:",
    "character": "Neutral.svg",
    "correct": "`ikunew`",
    "options": [
      "`ikunew`",
      "`Nuijishwiyuwan`",
      "Nuichtakasiwaw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "El plural correcto de \"nuestras abuelas\" es:",
    "character": "Neutral.svg",
    "correct": "`tunojnoywan`",
    "options": [
      "`tunoya`",
      "Nukujkumpawan",
      "`tunojnoywan`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mi suegro\" (dicho por un hombre) es:",
    "character": "Neutral.svg",
    "correct": "`nuteku-siwaw`",
    "options": [
      "`nuteku-siwaw`",
      "`nuteku-shulejyu`",
      "Nu-siwaw"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "¿Qué significa el término `-tiskalsiwapíltzin`?",
    "character": "Neutral.svg",
    "correct": "Hija adoptiva",
    "options": [
      "Su bisabuela de él o ella",
      "Hija adoptiva",
      "Nuestros hijastros (dicho por una mujer)"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "Para decir \"vuestra familia\" (de ustedes), usamos:",
    "character": "Neutral.svg",
    "correct": "`anmumiekawan`",
    "options": [
      "`inmiekawan`",
      "`Nunantzin`",
      "`anmumiekawan`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "El término para \"hermanastro menor\" es:",
    "character": "Neutral.svg",
    "correct": "`chupi-ikaw`",
    "options": [
      "`chupi-ikaw`",
      "`chupi-manuj`",
      "Nu-wejpul"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Su esposo\" (de ella) se escribe:",
    "character": "Neutral.svg",
    "correct": "`ishulejyu`",
    "options": [
      "`isiwaw`",
      "`ishulejyu`",
      "Nupijpipil"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "\"Mis sobrinos\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "`nupijpiluwan`",
    "options": [
      "Hijastra",
      "`nupijpiluwan`",
      "`nupilu`"
    ]
  },
  {
    "type": "select_translation",
    "stage": 5,
    "prompt": "¿Qué prefijo indica posesión para \"nuestro/a\"?",
    "character": "Neutral.svg",
    "correct": "`tu-`",
    "options": [
      "Numiekawan",
      "`anmu-`",
      "`tu-`"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "La suegra de ellas.",
    "character": "Neutral.svg",
    "correct": [
      "`Innan-shulejyu`"
    ],
    "wordBank": [
      "`Innan-shulejyu`",
      "mueltiw",
      "nutiskalpiltzin",
      "tepal"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestros nietos y nietas.",
    "character": "Neutral.svg",
    "correct": [
      "`Tuijishwiyuwan`"
    ],
    "wordBank": [
      "`Tuijishwiyuwan`",
      "tueltiwan",
      "nukujkumpawan",
      "tajtatanoy"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hermanito o hermanita menor.",
    "character": "Neutral.svg",
    "correct": [
      "`Nuikawchin`"
    ],
    "wordBank": [
      "`Nuikawchin`",
      "nuwejpul",
      "nutiskalukichkunew",
      "nutiskalkunew"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su bisabuela de él o ella.",
    "character": "Neutral.svg",
    "correct": [
      "`Iipan-noya`"
    ],
    "wordBank": [
      "`Iipan-noya`",
      "nunan",
      "ijipantekuwan",
      "imanuj"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Vuestros hijastros (de un hombre).",
    "character": "Neutral.svg",
    "correct": [
      "`Anmutejtepal-pijpipil`"
    ],
    "wordBank": [
      "`Anmutejtepal-pijpipil`",
      "nuichtakatakaw",
      "pipi",
      "nojnoywan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mis muchachos (hijos jóvenes).",
    "character": "Neutral.svg",
    "correct": [
      "`Nupijpiltzitzin`"
    ],
    "wordBank": [
      "`Nupijpiltzitzin`",
      "kunew",
      "numun",
      "miekawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su amante de ella (hombre).",
    "character": "Neutral.svg",
    "correct": [
      "`Iichtakatakaw`"
    ],
    "wordBank": [
      "`Iichtakatakaw`",
      "intajtatanoy",
      "munan",
      "tupipi"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu padre adoptivo.",
    "character": "Neutral.svg",
    "correct": [
      "`Mutepal-teku`"
    ],
    "wordBank": [
      "`Mutepal-teku`",
      "iikawan",
      "iishwiyu",
      "imanuj"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestros padrinos.",
    "character": "Neutral.svg",
    "correct": [
      "`Tuijipantekuwan`"
    ],
    "wordBank": [
      "`Tuijipantekuwan`",
      "nunoya",
      "nutiskalkunew",
      "nukujkumpawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Los hermanos mayores de ellos.",
    "character": "Neutral.svg",
    "correct": [
      "`In-majmanujwan`"
    ],
    "wordBank": [
      "`In-majmanujwan`",
      "nukujkumpawan",
      "anmuikawan",
      "tiskalsiwapiltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi amigo gay.",
    "character": "Neutral.svg",
    "correct": [
      "`Nusiwayulu`"
    ],
    "wordBank": [
      "`Nusiwayulu`",
      "nutejtepal",
      "teku",
      "tusiwapiltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hijo (dicho por un hombre).",
    "character": "Neutral.svg",
    "correct": [
      "`Nupíltzin`"
    ],
    "wordBank": [
      "`Nupíltzin`",
      "muwejpul",
      "in",
      "isiwaw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su exesposo de ella.",
    "character": "Neutral.svg",
    "correct": [
      "`Iikman-shulejyu`"
    ],
    "wordBank": [
      "`Iikman-shulejyu`",
      "numajmanujwan",
      "munan",
      "ishwiyu"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestra nuera.",
    "character": "Neutral.svg",
    "correct": [
      "`Tusiwamun`"
    ],
    "wordBank": [
      "`Tusiwamun`",
      "tupipi",
      "siwakunew",
      "ikawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi madrecita (término de respeto).",
    "character": "Neutral.svg",
    "correct": [
      "`Nunantzin`"
    ],
    "wordBank": [
      "`Nunantzin`",
      "ikaw",
      "iishwiyu",
      "nojnoywan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Vuestro hogar\" (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "`Anmuchan`."
    ],
    "wordBank": [
      "`Anmuchan`.",
      "inpijpiluwan",
      "nukujkumpawan",
      "mueltiw"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi hermanastra mayor\" (de mujer)",
    "character": "Neutral.svg",
    "correct": [
      "`Nuchupi-pipi`."
    ],
    "wordBank": [
      "`Nuchupi-pipi`.",
      "anmumiekawan",
      "imanuj",
      "ichan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su bisnieto\" (de él)",
    "character": "Neutral.svg",
    "correct": [
      "`Iipan-ishwiyu`."
    ],
    "wordBank": [
      "`Iipan-ishwiyu`.",
      "tu",
      "mu",
      "anmuchan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestras tías mayores\" (parte de papá)",
    "character": "Neutral.svg",
    "correct": [
      "`Tueltiwan-teku`."
    ],
    "wordBank": [
      "`Tueltiwan-teku`.",
      "ipan",
      "nuipan",
      "chupi"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu yerno",
    "character": "Neutral.svg",
    "correct": [
      "`Mumun`."
    ],
    "wordBank": [
      "`Mumun`.",
      "majmanujwan",
      "nu",
      "muijipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus abuelos\" (hombres, de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "`Intajtatanoy`."
    ],
    "wordBank": [
      "`Intajtatanoy`.",
      "in",
      "siwapiltzin",
      "tuijipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi madrastra",
    "character": "Neutral.svg",
    "correct": [
      "`Nutenan`."
    ],
    "wordBank": [
      "`Nutenan`.",
      "ipan",
      "nuijishwiyuwan",
      "pipi"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Vuestra ahijada\" (de un hombre)",
    "character": "Neutral.svg",
    "correct": [
      "`Anmuipan-siwapíltzin`."
    ],
    "wordBank": [
      "`Anmuipan-siwapíltzin`.",
      "nuipantekuwan",
      "ishwiyu",
      "tuijipantekuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su madre\" (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "`Innan`."
    ],
    "wordBank": [
      "`Innan`.",
      "numajmanujwan",
      "nutiskalsiwakunew",
      "nuipan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi tía menor\" (parte de mamá)",
    "character": "Neutral.svg",
    "correct": [
      "`Nuikaw-nan`."
    ],
    "wordBank": [
      "`Nuikaw-nan`.",
      "nuikawchin",
      "tatanoy",
      "pilawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Nuestros padres\" (madre y padre)",
    "character": "Neutral.svg",
    "correct": [
      "`Tutejtekuwan`."
    ],
    "wordBank": [
      "`Tutejtekuwan`.",
      "insiwamun",
      "tupijpiluwan",
      "tueltiwan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Tu hijo adoptado\" (de mujer)",
    "character": "Neutral.svg",
    "correct": [
      "`Mutiskalkunew`."
    ],
    "wordBank": [
      "`Mutiskalkunew`.",
      "nuipan",
      "ishwiyu",
      "pilawan"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Sus sobrinas\" (de ella)",
    "character": "Neutral.svg",
    "correct": [
      "`Ipijpiluwan`."
    ],
    "wordBank": [
      "`Ipijpiluwan`.",
      "tatanoy",
      "tupipi",
      "tutejtepal"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Mi abuelita\" (con cariño)",
    "character": "Neutral.svg",
    "correct": [
      "`Nunoyajchin`."
    ],
    "wordBank": [
      "`Nunoyajchin`.",
      "tatanoy",
      "nuipan",
      "mutiskalkunew"
    ]
  },
  {
    "type": "translate",
    "stage": 5,
    "prompt": "Su esposa\" (de él)",
    "character": "Neutral.svg",
    "correct": [
      "`Isiwaw`."
    ],
    "wordBank": [
      "`Isiwaw`.",
      "mueltiw",
      "nu",
      "ikawan"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Animal de campo",
    "character": "Neutral.svg",
    "correct": [
      "Kojtanchanej"
    ],
    "wordBank": [
      "Kojtanchanej",
      "chikirin",
      "kipishua",
      "kajkalchanejket"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Ala o aleta",
    "character": "Neutral.svg",
    "correct": [
      "iejtapal"
    ],
    "wordBank": [
      "iejtapal",
      "petzu",
      "papalut",
      "kalchanej"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Pezuña o uña",
    "character": "Neutral.svg",
    "correct": [
      "iitztit"
    ],
    "wordBank": [
      "iitztit",
      "koshchin",
      "ka",
      "kuyamet"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Cola",
    "character": "Neutral.svg",
    "correct": [
      "itzinweyaka"
    ],
    "wordBank": [
      "itzinweyaka",
      "tuchti",
      "iitztit",
      "jaral"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Depredador (lit. comegente)",
    "character": "Neutral.svg",
    "correct": [
      "Tekwani"
    ],
    "wordBank": [
      "Tekwani",
      "iejejtapal",
      "sujsul",
      "taltusan"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Pico o hocico",
    "character": "Neutral.svg",
    "correct": [
      "iten"
    ],
    "wordBank": [
      "iten",
      "takwika",
      "talul",
      "mukutilana"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Animal acuático",
    "character": "Neutral.svg",
    "correct": [
      "Atchanej"
    ],
    "wordBank": [
      "Atchanej",
      "taltusan",
      "ituskashuchiyu",
      "tzikat"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Animal doméstico",
    "character": "Neutral.svg",
    "correct": [
      "Kalchanej"
    ],
    "wordBank": [
      "Kalchanej",
      "muyut",
      "tzijtzinakan",
      "tik"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Plumaje o pelaje",
    "character": "Neutral.svg",
    "correct": [
      "iujmiyu"
    ],
    "wordBank": [
      "iujmiyu",
      "mukutilana",
      "kojtanchanej",
      "akeketzas"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Cuerno",
    "character": "Neutral.svg",
    "correct": [
      "itzunkwawyu"
    ],
    "wordBank": [
      "itzunkwawyu",
      "puyek",
      "masat",
      "patanit"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "¿Ken kichiwa ne pelu? Ne pelu",
    "after": ".",
    "correct": "tapuni",
    "options": [
      "takwika",
      "tapuni",
      "chuka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne michin",
    "after": "tik ne at.",
    "correct": "apajpalua",
    "options": [
      "apajpalua",
      "patani",
      "Petzu"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne tutut kichiwa",
    "after": ".",
    "correct": "takwika",
    "options": [
      "kipishua",
      "chuka",
      "takwika"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "¿Ken kichiwa ne kuat? Ne kuat",
    "after": ".",
    "correct": "isanaka",
    "options": [
      "nejnemi",
      "isanaka",
      "tzajtzi"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne patush kichiwa",
    "after": ".",
    "correct": "tzajtzakti",
    "options": [
      "tzajtzakti",
      "chuka",
      "kuyuchuka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne tekwani",
    "after": "tik ne kojtan.",
    "correct": "tzajtzi",
    "options": [
      "iujmiyu",
      "chuka",
      "tzajtzi"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne tzinakan",
    "after": "ka ikajku.",
    "correct": "patani",
    "options": [
      "nejnemi",
      "patani",
      "Kakalut"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "¿Ken kichiwa ne kuyut? Ne kuyut",
    "after": ".",
    "correct": "kuyuchuka",
    "options": [
      "kuyuchuka",
      "kipia",
      "tapuni"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne mistun",
    "after": "keman nimayana.",
    "correct": "chuka",
    "options": [
      "iujmiyu",
      "takwika",
      "chuka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne pelu",
    "after": "keman kualani.",
    "correct": "tuskatzatzawaka",
    "options": [
      "patani",
      "tuskatzatzawaka",
      "mukutilana"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El caballo corre.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kawash",
      "mutalua."
    ],
    "wordBank": [
      "Ne",
      "kawash",
      "mutalua.",
      "puyuj",
      "alawak",
      "tapuni"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El tiburón está en el agua.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "michin",
      "tekwani",
      "nemi",
      "tik",
      "ne",
      "at."
    ],
    "wordBank": [
      "Ne",
      "michin",
      "tekwani",
      "nemi",
      "tik",
      "ne",
      "at.",
      "kupinit",
      "shuchit",
      "ayutzin"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "¿Cómo hace el pájaro carpintero?",
    "character": "Neutral.svg",
    "correct": [
      "¿Ken",
      "kichiwa",
      "ne",
      "chekekejtzin?"
    ],
    "wordBank": [
      "¿Ken",
      "kichiwa",
      "ne",
      "chekekejtzin?",
      "michin",
      "itatzupinayu",
      "shuchit"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La culebra se arrastra.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kuat",
      "mukutilana."
    ],
    "wordBank": [
      "Ne",
      "kuat",
      "mukutilana.",
      "ucelut",
      "ashalin",
      "masat"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El quetzal vuela.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ketzaltutut",
      "patani."
    ],
    "wordBank": [
      "Ne",
      "ketzaltutut",
      "patani.",
      "ishachi",
      "masakuat",
      "chekekejtzin"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El pollo está doradito.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "puyuj",
      "tultiaka."
    ],
    "wordBank": [
      "Ne",
      "puyuj",
      "tultiaka.",
      "itzinkuyulijtuk",
      "ishachi",
      "patani"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El mono está sobre el árbol.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "asumi",
      "nemi",
      "ijpak",
      "ne",
      "kwawit."
    ],
    "wordBank": [
      "Ne",
      "asumi",
      "nemi",
      "ijpak",
      "ne",
      "kwawit.",
      "mapachin",
      "kuyamet",
      "nekti"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El murciélago está de cabeza.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tzinakan",
      "tzunpilkatuk."
    ],
    "wordBank": [
      "Ne",
      "tzinakan",
      "tzunpilkatuk.",
      "tzikwini",
      "tay",
      "tujtutut"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El ratón corre.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kimichin",
      "mutalua."
    ],
    "wordBank": [
      "Ne",
      "kimichin",
      "mutalua.",
      "lanwach",
      "itatzupinayu",
      "kukurua"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La mariposa vuela.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "papalut",
      "patani."
    ],
    "wordBank": [
      "Ne",
      "papalut",
      "patani.",
      "puyujchichin",
      "nekti",
      "witzitzil"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El búho canta de noche.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tekulut",
      "takwika",
      "ka",
      "tayua."
    ],
    "wordBank": [
      "Ne",
      "tekulut",
      "takwika",
      "ka",
      "tayua.",
      "shuchit",
      "mil",
      "se"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El conejo salta mucho.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "tzitzikwini."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "tzitzikwini.",
      "apan",
      "ishachi",
      "chumelu"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El mapache se lava las manos.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "mapachin",
      "mumapaka."
    ],
    "wordBank": [
      "Ne",
      "mapachin",
      "mumapaka.",
      "ajku",
      "patani",
      "kukurua"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El colibrí vuela.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "witzitzil",
      "patani."
    ],
    "wordBank": [
      "Ne",
      "witzitzil",
      "patani.",
      "kitatzupina",
      "chekekejtzin",
      "chumelu"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "¿Qué color es el perico?",
    "character": "Neutral.svg",
    "correct": [
      "¿Tay",
      "itachishka",
      "ne",
      "shushuknaj",
      "tutut?"
    ],
    "wordBank": [
      "¿Tay",
      "itachishka",
      "ne",
      "shushuknaj",
      "tutut?",
      "chikitik",
      "tiltik",
      "tujtutut"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El perro ladra.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "pelu",
      "tapuni."
    ],
    "wordBank": [
      "Ne",
      "pelu",
      "tapuni.",
      "tuesyu",
      "iejtapal",
      "apan"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La vaca tiene ubres.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "siwaturuj",
      "kipia",
      "ichichiwal."
    ],
    "wordBank": [
      "Ne",
      "siwaturuj",
      "kipia",
      "ichichiwal.",
      "kojtanchanej",
      "kwawit",
      "tzunhilpituk"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El gato maúlla.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "mistun",
      "chuka."
    ],
    "wordBank": [
      "Ne",
      "mistun",
      "chuka.",
      "apajpalua",
      "mumapaka",
      "kipia"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El escorpión tiene aguijón.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kulut",
      "kipia",
      "itatzupinayu."
    ],
    "wordBank": [
      "Ne",
      "kulut",
      "kipia",
      "itatzupinayu.",
      "kuyamet",
      "kipipina",
      "chikirin"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La hormiga pica.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tzikat",
      "tatzupina."
    ],
    "wordBank": [
      "Ne",
      "tzikat",
      "tatzupina.",
      "kawash",
      "itzinkuyulijtuk",
      "ishinyu"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El pájaro canta.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tutut",
      "takwika."
    ],
    "wordBank": [
      "Ne",
      "tutut",
      "takwika.",
      "tzanat",
      "chikirin",
      "asumi"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El venado corre en el campo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "masat",
      "mutalua",
      "tik",
      "ne",
      "kojtan."
    ],
    "wordBank": [
      "Ne",
      "masat",
      "mutalua",
      "tik",
      "ne",
      "kojtan.",
      "kiajwa",
      "ka",
      "kawash"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El camarón tiene tenazas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chakalin",
      "kipia",
      "itajmatekwaya."
    ],
    "wordBank": [
      "Ne",
      "chakalin",
      "kipia",
      "itajmatekwaya.",
      "kuyut",
      "at",
      "tejtekwanimet"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La abeja hace miel.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chumelu",
      "kichiwa",
      "ne",
      "nekti."
    ],
    "wordBank": [
      "Ne",
      "chumelu",
      "kichiwa",
      "ne",
      "nekti.",
      "galanchin",
      "kuyulijtuk",
      "kawash"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El pato grazna.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "patush",
      "tzajtzakti."
    ],
    "wordBank": [
      "Ne",
      "patush",
      "tzajtzakti.",
      "kuyuchuka",
      "sayulin",
      "tay"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El coyote aúlla.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kuyut",
      "kuyuchuka."
    ],
    "wordBank": [
      "Ne",
      "kuyut",
      "kuyuchuka.",
      "apan",
      "chumelu",
      "ayutuch"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El pez nada en el río.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "michin",
      "apajpalua",
      "tik",
      "ne",
      "apan."
    ],
    "wordBank": [
      "Ne",
      "michin",
      "apajpalua",
      "tik",
      "ne",
      "apan.",
      "ayutzin",
      "alawak",
      "tzajtzakti"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La mosca vuela.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "muyut",
      "patani."
    ],
    "wordBank": [
      "Ne",
      "muyut",
      "patani.",
      "tzajtzi",
      "pelu",
      "chikitik"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El armadillo es animal de campo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ayutuch",
      "se",
      "kojtanchanej."
    ],
    "wordBank": [
      "Ne",
      "ayutuch",
      "se",
      "kojtanchanej.",
      "kalchanej",
      "tal",
      "kipipina"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El jaguar ruge.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tekwani",
      "tzajtzi."
    ],
    "wordBank": [
      "Ne",
      "tekwani",
      "tzajtzi.",
      "itzinweyaka",
      "tik",
      "michintekwani"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Avispa ahorcadora",
    "character": "Neutral.svg",
    "correct": [
      "Akeketzas"
    ],
    "wordBank": [
      "Akeketzas",
      "chumelu",
      "tzajtzi",
      "tal"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Chayul (mosquito)",
    "character": "Neutral.svg",
    "correct": [
      "Sayulin"
    ],
    "wordBank": [
      "Sayulin",
      "tzijtzinakan",
      "tik",
      "nimayana"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Guax (halcón reidor)",
    "character": "Neutral.svg",
    "correct": [
      "Waktzin"
    ],
    "wordBank": [
      "Waktzin",
      "atchanej",
      "masakuat",
      "kinia"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Masacuata (serpiente)",
    "character": "Neutral.svg",
    "correct": [
      "Masakuat"
    ],
    "wordBank": [
      "Masakuat",
      "atchanej",
      "kojtan",
      "tuchti"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Pezote",
    "character": "Neutral.svg",
    "correct": [
      "Petzu"
    ],
    "wordBank": [
      "Petzu",
      "chekekejtzin",
      "tatzupina",
      "iejtapal"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Guacamaya",
    "character": "Neutral.svg",
    "correct": [
      "Kakalut"
    ],
    "wordBank": [
      "Kakalut",
      "tzanat",
      "patani",
      "tultiaka"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Huevo estrellado",
    "character": "Neutral.svg",
    "correct": [
      "Sital",
      "teksisti"
    ],
    "wordBank": [
      "Sital",
      "teksisti",
      "keman",
      "kalchanej",
      "kuyulijtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Anguila",
    "character": "Neutral.svg",
    "correct": [
      "Michinkuat"
    ],
    "wordBank": [
      "Michinkuat",
      "itakayu",
      "asumi",
      "kimichin"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Urraca",
    "character": "Neutral.svg",
    "correct": [
      "Tzunhilpituk"
    ],
    "wordBank": [
      "Tzunhilpituk",
      "tultiaka",
      "ucelut",
      "kojtanchanej"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Rabo de cerdo (enrollado)",
    "character": "Neutral.svg",
    "correct": [
      "Itzinkuyulijtuk"
    ],
    "wordBank": [
      "Itzinkuyulijtuk",
      "itzunkwawyu",
      "tzunpilkatuk",
      "kupinit"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne siwaturuj kipia",
    "after": "pal ne shulut chichi. (La vaca tiene...)",
    "correct": "ichichiwal",
    "options": [
      "kitatzupina",
      "ichichiwal",
      "iten"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne kuat",
    "after": "keman yawi tik ne kojtan. (La culebra se arrastra...)",
    "correct": "mukutilana",
    "options": [
      "patani",
      "mukutilana",
      "ituskashuchiyu"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne",
    "after": "kipia iishtzujtzunyu weyak. (El pájaro tiene pestañas/rayos...)",
    "correct": "chiltutut",
    "options": [
      "michin",
      "Tejtekwanimet",
      "chiltutut"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne",
    "after": "tuskatzatzawaka keman kualani. (El perro gruñe...)",
    "correct": "pelu",
    "options": [
      "pelu",
      "kalat",
      "Kajkalchanejket"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne",
    "after": "kipia itatzupinaya. (El alacrán tiene aguijón...)",
    "correct": "kulut",
    "options": [
      "kulut",
      "kuyuchuka",
      "tuchti"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "¿Ken kichiwa ne kuyut? Ne kuyut",
    "after": ".",
    "correct": "kuyuchuka",
    "options": [
      "kipishua",
      "kuyuchuka",
      "takwika"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne michin kipia",
    "after": "pal apajpalua. (El pez tiene aleta...)",
    "correct": "iejtapal",
    "options": [
      "tzajtzi",
      "iten",
      "iejtapal"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne",
    "after": "kichiwa ne nekti. (La abeja hace la miel...)",
    "correct": "itakayu",
    "options": [
      "itakayu",
      "muyut",
      "Sayulin"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne piltzín",
    "after": "ne pelu. (El niño corre al perro...)",
    "correct": "kitalultia",
    "options": [
      "kitalultia",
      "Waktzin",
      "kichiwa"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne mistun",
    "after": "keman nemi yek. (El gato ronronea...)",
    "correct": "sasawaka",
    "options": [
      "takwika",
      "sasawaka",
      "tapuni"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La avispa ahorcadora pica.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "akeketzas",
      "tatzupina."
    ],
    "wordBank": [
      "Ne",
      "akeketzas",
      "tatzupina.",
      "ketzaltutut",
      "masakuat",
      "kojtanchanej"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El murciélago está cabeza abajo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tzinakan",
      "tzunpilkatuk."
    ],
    "wordBank": [
      "Ne",
      "tzinakan",
      "tzunpilkatuk.",
      "chikirin",
      "kupinit",
      "numey"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La aurora dice 'kosh, kosh'.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koshchin",
      "ina",
      "'kosh,",
      "kosh'."
    ],
    "wordBank": [
      "Ne",
      "koshchin",
      "ina",
      "'kosh,",
      "kosh'.",
      "kalchanej",
      "mapachin",
      "petzu"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La anguila está en el agua.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "michinkuat",
      "nemi",
      "tik",
      "ne",
      "at."
    ],
    "wordBank": [
      "Ne",
      "michinkuat",
      "nemi",
      "tik",
      "ne",
      "at.",
      "se",
      "tuchti",
      "tultiaka"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El pollo dorado es rico.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "puyuj",
      "tultiaka",
      "ajwiak."
    ],
    "wordBank": [
      "Ne",
      "puyuj",
      "tultiaka",
      "ajwiak.",
      "muyut",
      "mistun",
      "sujsul"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El plumaje de la gallina es negro.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "iujmiyu",
      "ne",
      "tijlan",
      "tiltik."
    ],
    "wordBank": [
      "Ne",
      "iujmiyu",
      "ne",
      "tijlan",
      "tiltik.",
      "iejtapal",
      "teksisti",
      "nimayana"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Los murciélagos vuelan en lo alto.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tzijtzinakan",
      "patanit",
      "ka",
      "ikajku."
    ],
    "wordBank": [
      "Ne",
      "tzijtzinakan",
      "patanit",
      "ka",
      "ikajku.",
      "itachishka",
      "tal",
      "iish"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El ratón chilla cuando tiene hambre.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kimichin",
      "chuka",
      "keman",
      "nimayana."
    ],
    "wordBank": [
      "Ne",
      "kimichin",
      "chuka",
      "keman",
      "nimayana.",
      "kukurua",
      "mil",
      "tzikwini"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El tiburón está en el mar.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "michin",
      "tekwani",
      "tik",
      "ne",
      "wey",
      "puyek",
      "at."
    ],
    "wordBank": [
      "Ne",
      "michin",
      "tekwani",
      "tik",
      "ne",
      "wey",
      "puyek",
      "at.",
      "kitatzupina",
      "siwaturuj",
      "kajkalchanejket"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La cáscara de guineo es lisa.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "iewayu",
      "kinia",
      "alawak."
    ],
    "wordBank": [
      "Ne",
      "iewayu",
      "kinia",
      "alawak.",
      "atchanej",
      "iejejtapal",
      "itajmatekwaya"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El tecolote canta de noche.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tekulut",
      "takwika",
      "ka",
      "tayua."
    ],
    "wordBank": [
      "Ne",
      "tekulut",
      "takwika",
      "ka",
      "tayua.",
      "tik",
      "masat",
      "alawak"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El ocelote es un depredador.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ucelut",
      "se",
      "tekwani."
    ],
    "wordBank": [
      "Ne",
      "ucelut",
      "se",
      "tekwani.",
      "at",
      "tzitzikwini",
      "jaral"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El conejo salta en la milpa.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "tzitzikwini",
      "tik",
      "ne",
      "mil."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "tzitzikwini",
      "tik",
      "ne",
      "mil.",
      "iujmiyu",
      "michin",
      "puyek"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El mapache se lava las manos.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "mapachin",
      "mumapaka."
    ],
    "wordBank": [
      "Ne",
      "mapachin",
      "mumapaka.",
      "masat",
      "tunal",
      "se"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El pichiche es bonito.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "pishishi",
      "galanchin."
    ],
    "wordBank": [
      "Ne",
      "pishishi",
      "galanchin.",
      "masakuat",
      "tekpin",
      "tatzupina"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La mariposa vuela.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "papalut",
      "patani."
    ],
    "wordBank": [
      "Ne",
      "papalut",
      "patani.",
      "apajpalua",
      "kipia",
      "kuat"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El perro le ladra al gato.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "pelu",
      "kiajwa",
      "ne",
      "mistun."
    ],
    "wordBank": [
      "Ne",
      "pelu",
      "kiajwa",
      "ne",
      "mistun.",
      "teksisti",
      "kuyuchuka",
      "shushuknaj"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La hormiga pica mi mano.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tzikat",
      "kitatzupina",
      "numey."
    ],
    "wordBank": [
      "Ne",
      "tzikat",
      "kitatzupina",
      "numey.",
      "chumelu",
      "kojtanchanej",
      "piltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El venado corre rápido.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "masat",
      "mutalua",
      "talul."
    ],
    "wordBank": [
      "Ne",
      "masat",
      "mutalua",
      "talul.",
      "nimayana",
      "kiajwa",
      "akeketzas"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El pescado es un animal acuático.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "michin",
      "se",
      "atchanej."
    ],
    "wordBank": [
      "Ne",
      "michin",
      "se",
      "atchanej.",
      "itzinkuyulijtuk",
      "itachishka",
      "tultiaka"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El jaguar es un depredador.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tekwani",
      "se",
      "tekwani."
    ],
    "wordBank": [
      "Ne",
      "tekwani",
      "se",
      "tekwani.",
      "kuat",
      "iejtapal",
      "piltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El murciélago tiene alas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tzinakan",
      "kipia",
      "iejejtapal."
    ],
    "wordBank": [
      "Ne",
      "tzinakan",
      "kipia",
      "iejejtapal.",
      "muyut",
      "tejtekwanimet",
      "witzitzil"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El mono está sobre el árbol.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "asumi",
      "nemi",
      "ijpak",
      "ne",
      "kwawit."
    ],
    "wordBank": [
      "Ne",
      "asumi",
      "nemi",
      "ijpak",
      "ne",
      "kwawit.",
      "tishkal",
      "kichiwa",
      "sital"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El colibrí es pequeño.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "witzitzil",
      "chikitik."
    ],
    "wordBank": [
      "Ne",
      "witzitzil",
      "chikitik.",
      "kiajwa",
      "nimayana",
      "taltusan"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La gallina pone un huevo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tijlan",
      "kipishua",
      "se",
      "teksisti."
    ],
    "wordBank": [
      "Ne",
      "tijlan",
      "kipishua",
      "se",
      "teksisti.",
      "tujtutut",
      "tutut",
      "iejtapal"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El grillo salta en el campo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shipilin",
      "tzikwini",
      "tik",
      "ne",
      "kojtan."
    ],
    "wordBank": [
      "Ne",
      "shipilin",
      "tzikwini",
      "tik",
      "ne",
      "kojtan.",
      "asumi",
      "shuchit",
      "patanit"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La mosca es negra.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "muyut",
      "itachishka",
      "tiltik."
    ],
    "wordBank": [
      "Ne",
      "muyut",
      "itachishka",
      "tiltik.",
      "iewayu",
      "ijpak",
      "kiajwa"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El armadillo vive en el campo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ayutuch",
      "nemi",
      "tik",
      "ne",
      "kojtan."
    ],
    "wordBank": [
      "Ne",
      "ayutuch",
      "nemi",
      "tik",
      "ne",
      "kojtan.",
      "itzunkwawyu",
      "kichiwa",
      "ijpak"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El águila vuela muy alto.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kwawtutut",
      "patani",
      "sujsul",
      "ajku."
    ],
    "wordBank": [
      "Ne",
      "kwawtutut",
      "patani",
      "sujsul",
      "ajku.",
      "itajmatekwaya",
      "tzajtzi",
      "tejtekwanimet"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El coyote aúlla.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kuyut",
      "kuyuchuka."
    ],
    "wordBank": [
      "Ne",
      "kuyut",
      "kuyuchuka.",
      "sujsul",
      "ucelut",
      "mutalua"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Animal acuático.",
    "character": "Neutral.svg",
    "correct": [
      "Atchanej"
    ],
    "wordBank": [
      "Atchanej",
      "iejejtapal",
      "tzitzikwini",
      "chumelu"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Animales domésticos (plural).",
    "character": "Neutral.svg",
    "correct": [
      "Kajkalchanejket"
    ],
    "wordBank": [
      "Kajkalchanejket",
      "itatzupinayu",
      "tatzupina",
      "kiajwa"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Ojo de.",
    "character": "Neutral.svg",
    "correct": [
      "iish"
    ],
    "wordBank": [
      "iish",
      "tutut",
      "ayutzin",
      "ayutuch"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Escama de.",
    "character": "Neutral.svg",
    "correct": [
      "ishinyu"
    ],
    "wordBank": [
      "ishinyu",
      "siwaturuj",
      "puyuj",
      "witzitzil"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Zarzo o barba roja (de gallo).",
    "character": "Neutral.svg",
    "correct": [
      "ituskashuchiyu"
    ],
    "wordBank": [
      "ituskashuchiyu",
      "masakuat",
      "se",
      "kinia"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Ubre o pechos.",
    "character": "Neutral.svg",
    "correct": [
      "ichichiwal"
    ],
    "wordBank": [
      "ichichiwal",
      "masakuat",
      "papalut",
      "takwika"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Cuerno.",
    "character": "Neutral.svg",
    "correct": [
      "itzunkwawyu"
    ],
    "wordBank": [
      "itzunkwawyu",
      "tzajtzi",
      "tishkal",
      "tzikat"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Los depredadores (plural).",
    "character": "Neutral.svg",
    "correct": [
      "Tejtekwanimet"
    ],
    "wordBank": [
      "Tejtekwanimet",
      "itakayu",
      "tay",
      "pelu"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Cola.",
    "character": "Neutral.svg",
    "correct": [
      "itzinweyaka"
    ],
    "wordBank": [
      "itzinweyaka",
      "tzitzikwini",
      "iish",
      "kawash"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Ala o aleta.",
    "character": "Neutral.svg",
    "correct": [
      "iejtapal"
    ],
    "wordBank": [
      "iejtapal",
      "pishishi",
      "mapachin",
      "galanchin"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne michin",
    "after": "tik ne at. (El pez nada...)",
    "correct": "apajpalua",
    "options": [
      "patani",
      "kipia",
      "apajpalua"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne pelu",
    "after": "keman kualani. (El perro gruñe...)",
    "correct": "tuskatzatzawaka",
    "options": [
      "ishinyu",
      "takwika",
      "tuskatzatzawaka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne kuat",
    "after": "tik ne jaral. (La culebra se arrastra...)",
    "correct": "mukutilana",
    "options": [
      "patani",
      "mukutilana",
      "chiltutut"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne tzinakan",
    "after": "ka ikajku. (El murciélago vuela...)",
    "correct": "patani",
    "options": [
      "nejnemi",
      "ishinyu",
      "patani"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne tijlan",
    "after": "se teksisti. (La gallina pone un huevo)",
    "correct": "kipishua",
    "options": [
      "kipishua",
      "Kajkalchanejket",
      "kipia"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne kuyut",
    "after": "tik ne tayua. (El coyote aúlla en la noche)",
    "correct": "kuyuchuka",
    "options": [
      "takwika",
      "kuyuchuka",
      "tuchti"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne tekulut",
    "after": "ka tayua. (El tecolote canta...)",
    "correct": "takwika",
    "options": [
      "takwika",
      "chuka",
      "Sayulin"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne takwatzin se",
    "after": ". (El tacuazín es un animal de campo)",
    "correct": "kojtanchanej",
    "options": [
      "Itzinkuyulijtuk",
      "atchanej",
      "kojtanchanej"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne pishishi",
    "after": "tik ne apan. (El pichiche nada en el río)",
    "correct": "apajpalua",
    "options": [
      "kipia",
      "patani",
      "apajpalua"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 6,
    "before": "Ne tekpin",
    "after": "ne mistun. (La pulga pica al gato)",
    "correct": "kitatzupina",
    "options": [
      "kitatzupina",
      "sasawaka",
      "kikwa"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El gato montés es un depredador.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kojtan",
      "mistun",
      "tekwani."
    ],
    "wordBank": [
      "Ne",
      "kojtan",
      "mistun",
      "tekwani.",
      "jaral",
      "itatzupinayu",
      "petzu"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La mariposa vuela en la flor.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "papalut",
      "patani",
      "tik",
      "ne",
      "shuchit."
    ],
    "wordBank": [
      "Ne",
      "papalut",
      "patani",
      "tik",
      "ne",
      "shuchit.",
      "puyek",
      "kimichin",
      "ichichiwal"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El zanate es de color negro.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tzanat",
      "itachishka",
      "tiltik."
    ],
    "wordBank": [
      "Ne",
      "tzanat",
      "itachishka",
      "tiltik.",
      "mukutilana",
      "tayua",
      "piltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La mariquita es pequeña.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ayutzin",
      "jaral",
      "chikitik."
    ],
    "wordBank": [
      "Ne",
      "ayutzin",
      "jaral",
      "chikitik.",
      "ishinyu",
      "chikirin",
      "chuka"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La gran culebra se arrastra.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ishachi",
      "kuat",
      "mukutilana."
    ],
    "wordBank": [
      "Ne",
      "ishachi",
      "kuat",
      "mukutilana.",
      "tzunhilpituk",
      "isanaka",
      "sujsul"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La taltuza está en la tierra.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "taltusan",
      "nemi",
      "tik",
      "ne",
      "tal."
    ],
    "wordBank": [
      "Ne",
      "taltusan",
      "nemi",
      "tik",
      "ne",
      "tal.",
      "chumelu",
      "kuyut",
      "tultiaka"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El pollo asado es rico.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "puyuj",
      "tishkal",
      "ajwiak."
    ],
    "wordBank": [
      "Ne",
      "puyuj",
      "tishkal",
      "ajwiak.",
      "michinkuat",
      "witzitzil",
      "tal"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El ajalín tiene sus tenazas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ashalin",
      "kipia",
      "itajmatekwaya."
    ],
    "wordBank": [
      "Ne",
      "ashalin",
      "kipia",
      "itajmatekwaya.",
      "shuchit",
      "teksisti",
      "waktzin"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El quetzal es un pájaro bonito.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ketzaltutut",
      "se",
      "galanchin",
      "tutut."
    ],
    "wordBank": [
      "Ne",
      "ketzaltutut",
      "se",
      "galanchin",
      "tutut.",
      "mil",
      "iujmiyu",
      "petzu"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La anguila está en el agua.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "michinkuat",
      "nemi",
      "tik",
      "ne",
      "at."
    ],
    "wordBank": [
      "Ne",
      "michinkuat",
      "nemi",
      "tik",
      "ne",
      "at.",
      "shushuknaj",
      "talul",
      "kupinit"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Los pájaros vuelan en lo alto.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tujtutut",
      "patanit",
      "ka",
      "ikajku."
    ],
    "wordBank": [
      "Ne",
      "tujtutut",
      "patanit",
      "ka",
      "ikajku.",
      "kuat",
      "chikirin",
      "se"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La tórtola vuela.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kukurua",
      "patani."
    ],
    "wordBank": [
      "Ne",
      "kukurua",
      "patani.",
      "siwaturuj",
      "puyujchichin",
      "kiajwa"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La pulga pica al gato.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tekpin",
      "kitatzupina",
      "ne",
      "mistun."
    ],
    "wordBank": [
      "Ne",
      "tekpin",
      "kitatzupina",
      "ne",
      "mistun.",
      "tujtutut",
      "michintekwani",
      "iejejtapal"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El cocodrilo es un animal acuático.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "lanwach",
      "se",
      "atchanej."
    ],
    "wordBank": [
      "Ne",
      "lanwach",
      "se",
      "atchanej.",
      "itzinkuyulijtuk",
      "ituskashuchiyu",
      "tejtekwanimet"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La chicharra canta cuando hace sol.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chikirin",
      "takwika",
      "keman",
      "tunal."
    ],
    "wordBank": [
      "Ne",
      "chikirin",
      "takwika",
      "keman",
      "tunal.",
      "sayulin",
      "sujsul",
      "kojtanchanej"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El murciélago está de cabeza.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tzinakan",
      "tzunpilkatuk."
    ],
    "wordBank": [
      "Ne",
      "tzinakan",
      "tzunpilkatuk.",
      "chekekejtzin",
      "ayutzin",
      "tultiaka"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La vaca tiene ubres.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "siwaturuj",
      "kipia",
      "ichichiwal."
    ],
    "wordBank": [
      "Ne",
      "siwaturuj",
      "kipia",
      "ichichiwal.",
      "koshchin",
      "witzitzil",
      "patush"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El zancudo chupa nuestra sangre.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kojtan",
      "muyut",
      "kipipina",
      "tuesyu."
    ],
    "wordBank": [
      "Ne",
      "kojtan",
      "muyut",
      "kipipina",
      "tuesyu.",
      "tunal",
      "tishkal",
      "apajpalua"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El caballo corre rápido.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kawash",
      "mutalua",
      "talul."
    ],
    "wordBank": [
      "Ne",
      "kawash",
      "mutalua",
      "talul.",
      "waktzin",
      "tzikwini",
      "kuyulijtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El venado es animal de campo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "masat",
      "se",
      "kojtanchanej."
    ],
    "wordBank": [
      "Ne",
      "masat",
      "se",
      "kojtanchanej.",
      "tujtutut",
      "tal",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La abeja hace la colmena.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chumelu",
      "kichiwa",
      "ne",
      "itakayu."
    ],
    "wordBank": [
      "Ne",
      "chumelu",
      "kichiwa",
      "ne",
      "itakayu.",
      "masakuat",
      "tekulut",
      "tiltik"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El perro le ladra al niño.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "pelu",
      "kiajwa",
      "ne",
      "piltzín."
    ],
    "wordBank": [
      "Ne",
      "pelu",
      "kiajwa",
      "ne",
      "piltzín.",
      "atchanej",
      "itajmatekwaya",
      "kwawit"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La serpiente sisea.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kuat",
      "isanaka."
    ],
    "wordBank": [
      "Ne",
      "kuat",
      "isanaka.",
      "iitztit",
      "mapachin",
      "sital"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El tecolote vuela de noche.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tekulut",
      "patani",
      "ka",
      "tayua."
    ],
    "wordBank": [
      "Ne",
      "tekulut",
      "patani",
      "ka",
      "tayua.",
      "itzunkwawyu",
      "tijlan",
      "se"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El tiburón es un pez depredador.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "michintekwani",
      "se",
      "michin",
      "tekwani."
    ],
    "wordBank": [
      "Ne",
      "michintekwani",
      "se",
      "michin",
      "tekwani.",
      "ijpak",
      "ajwiak",
      "itakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El pato grazna.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "patush",
      "tzajtzakti."
    ],
    "wordBank": [
      "Ne",
      "patush",
      "tzajtzakti.",
      "tzajtzakti",
      "chumelu",
      "tiltik"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "Los pollitos nacen del huevo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "puyujchichin",
      "kupinit",
      "tik",
      "ne",
      "teksisti."
    ],
    "wordBank": [
      "Ne",
      "puyujchichin",
      "kupinit",
      "tik",
      "ne",
      "teksisti.",
      "kimichin",
      "nimayana",
      "tekpin"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El mono está en el árbol.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "asumi",
      "nemi",
      "tik",
      "ne",
      "kwawit."
    ],
    "wordBank": [
      "Ne",
      "asumi",
      "nemi",
      "tik",
      "ne",
      "kwawit.",
      "apan",
      "tal",
      "takwika"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "La cola del cerdo es enrollada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "itzinweyaka",
      "kuyamet",
      "kuyulijtuk."
    ],
    "wordBank": [
      "Ne",
      "itzinweyaka",
      "kuyamet",
      "kuyulijtuk.",
      "kosh",
      "kulut",
      "tiltik"
    ]
  },
  {
    "type": "translate",
    "stage": 6,
    "prompt": "El águila tiene alas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kwawtutut",
      "kipia",
      "iejtapal."
    ],
    "wordBank": [
      "Ne",
      "kwawtutut",
      "kipia",
      "iejtapal.",
      "itajmatekwaya",
      "tuchti",
      "ajku"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Comida (específicamente de maíz)",
    "character": "Neutral.svg",
    "correct": [
      "Takwal"
    ],
    "wordBank": [
      "Takwal",
      "nan",
      "sital",
      "taiwan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Comida (el acompañamiento o bastimento)",
    "character": "Neutral.svg",
    "correct": [
      "Taiwan"
    ],
    "wordBank": [
      "Taiwan",
      "niktzunpayana",
      "atiluni",
      "pal"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Refrigeradora",
    "character": "Neutral.svg",
    "correct": [
      "Sesekalis"
    ],
    "wordBank": [
      "Sesekalis",
      "wan",
      "shima",
      "taijtik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Tenedor",
    "character": "Neutral.svg",
    "correct": [
      "Trinchi"
    ],
    "wordBank": [
      "Trinchi",
      "at",
      "nugustuj",
      "alawak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Pelador",
    "character": "Neutral.svg",
    "correct": [
      "Tashimalis"
    ],
    "wordBank": [
      "Tashimalis",
      "mumushuj",
      "ajwiak",
      "uksik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Salado",
    "character": "Neutral.svg",
    "correct": [
      "Puyek"
    ],
    "wordBank": [
      "Puyek",
      "tiawit",
      "takwawak",
      "shulkuch"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Picante",
    "character": "Neutral.svg",
    "correct": [
      "Tekwa"
    ],
    "wordBank": [
      "Tekwa",
      "iajwiaka",
      "ne",
      "teksisti"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Horno de leña",
    "character": "Neutral.svg",
    "correct": [
      "Kaltit"
    ],
    "wordBank": [
      "Kaltit",
      "kinia",
      "lala",
      "miak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Vaso o taza",
    "character": "Neutral.svg",
    "correct": [
      "Atiluni"
    ],
    "wordBank": [
      "Atiluni",
      "tiawit",
      "nakak",
      "nutatzuyunaya"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Tostador",
    "character": "Neutral.svg",
    "correct": [
      "Tashamanialis"
    ],
    "wordBank": [
      "Tashamanialis",
      "tishkal",
      "talpashukut",
      "iwan"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Naja",
    "after": "(Yo tengo mucha hambre).",
    "correct": "sujsul nimayana",
    "options": [
      "Tishti tzupelek",
      "¿Ken ne iajwiaka takwal?",
      "sujsul nimayana"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne inakayu turuj",
    "after": "(La carne de res está asada).",
    "correct": "tishkal",
    "options": [
      "tatzuyunti",
      "tishkal",
      "Atiluni"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne lala kenhayuk",
    "after": "(La naranja todavía está cruda/tierna).",
    "correct": "shushuik",
    "options": [
      "shushuik",
      "uksi",
      "anmayanat"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Naja",
    "after": "ne kukumutzin (A mí me gusta la pupusa).",
    "correct": "nugustuj",
    "options": [
      "Puyek",
      "nikwa",
      "nugustuj"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "¿Tay",
    "after": "mugustuj? (¿Qué fruta te gusta?)",
    "correct": "itakil",
    "options": [
      "takwal",
      "nimayana",
      "itakil"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "\"Huevo estrellado\" se dice",
    "after": ".",
    "correct": "Sital teksisti",
    "options": [
      "Ne tashimalis pal talwentzin",
      "Teksisti takwawak",
      "Sital teksisti"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "¿Tay",
    "after": "tikwa ne shikamaj? (¿Con qué comes la jícama?)",
    "correct": "iwan",
    "options": [
      "itachishka",
      "nitamana",
      "iwan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne puyuj sujsul",
    "after": "(El pollo está bien doradito).",
    "correct": "tultiaka",
    "options": [
      "tultiaka",
      "tatak",
      "shukuk"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne et",
    "after": "(El frijol molido).",
    "correct": "tatisti",
    "options": [
      "tatisti",
      "tamanti",
      "Puyek"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "¿",
    "after": "ne iajwiaka takwal? (¿Cómo es el sabor de la comida?)",
    "correct": "Ken",
    "options": [
      "Tay",
      "Ken",
      "chichik"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Tengo mucha hambre.",
    "character": "Neutral.svg",
    "correct": [
      "Sujsul",
      "nimayana"
    ],
    "wordBank": [
      "Sujsul",
      "nimayana",
      "tzukultik",
      "mugustuj",
      "ajwiak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El elote es muy rico.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "elut",
      "sujsul",
      "ajwiak"
    ],
    "wordBank": [
      "Ne",
      "elut",
      "sujsul",
      "ajwiak",
      "tamanti",
      "tatawantia",
      "itakil"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo como frijoles.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikwa",
      "et"
    ],
    "wordBank": [
      "Naja",
      "nikwa",
      "et",
      "tejemet",
      "ewayu",
      "itachishka"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Qué comida te gusta?",
    "character": "Neutral.svg",
    "correct": [
      "¿Tay",
      "takwal",
      "mugustuj?"
    ],
    "wordBank": [
      "¿Tay",
      "takwal",
      "mugustuj?",
      "naja",
      "tashimalis",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El café está espeso.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "atutun",
      "tzukultik"
    ],
    "wordBank": [
      "Ne",
      "atutun",
      "tzukultik",
      "et",
      "tel",
      "talwentzin"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Huevo un poco tibio (sancochado).",
    "character": "Neutral.svg",
    "correct": [
      "Teksisti",
      "chupi",
      "tamanti"
    ],
    "wordBank": [
      "Teksisti",
      "chupi",
      "tamanti",
      "kumit",
      "takutunaya",
      "nikneki"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La cerveza emborracha.",
    "character": "Neutral.svg",
    "correct": [
      "At",
      "chichik",
      "tatawantia"
    ],
    "wordBank": [
      "At",
      "chichik",
      "tatawantia",
      "tatzuyunti",
      "muyulala",
      "pal"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El tamal de elote de mi mamá es muy rico.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shulkuch",
      "sujsul",
      "ajwiak",
      "nunan"
    ],
    "wordBank": [
      "Ne",
      "shulkuch",
      "sujsul",
      "ajwiak",
      "nunan",
      "tishkal",
      "tatisilis",
      "niktzunpayana"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Semilla de frijol.",
    "character": "Neutral.svg",
    "correct": [
      "Ish",
      "et"
    ],
    "wordBank": [
      "Ish",
      "et",
      "lala",
      "talpashukut",
      "akulash"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La yema de huevo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "itultika",
      "teksisti"
    ],
    "wordBank": [
      "Ne",
      "itultika",
      "teksisti",
      "kumit",
      "winkulash",
      "achiuk"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La cáscara de guineo es lisa.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "iewayu",
      "kinia",
      "alawak"
    ],
    "wordBank": [
      "Ne",
      "iewayu",
      "kinia",
      "alawak",
      "kumelut",
      "tejemet",
      "talpashukut"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Vamos a comer?",
    "character": "Neutral.svg",
    "correct": [
      "Tiawit",
      "titakwat?"
    ],
    "wordBank": [
      "Tiawit",
      "titakwat?",
      "iwan",
      "at",
      "takwawak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo como pepino con sal.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikwa",
      "akulash",
      "iwan",
      "istat"
    ],
    "wordBank": [
      "Naja",
      "nikwa",
      "akulash",
      "iwan",
      "istat",
      "tamanalis",
      "chupi",
      "tiawit"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La naranja se maduró.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "lala",
      "uksik"
    ],
    "wordBank": [
      "Ne",
      "lala",
      "uksik",
      "taijtik",
      "pal",
      "teksisti"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El chocolate está caliente.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chukulat",
      "tutunik"
    ],
    "wordBank": [
      "Ne",
      "chukulat",
      "tutunik",
      "muyulala",
      "tit",
      "tatisti"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La fruta",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "itakil."
    ],
    "wordBank": [
      "Ne",
      "itakil.",
      "elut",
      "nakayu",
      "nikwa"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Mi sartén",
    "character": "Neutral.svg",
    "correct": [
      "Nutatzuyunaya."
    ],
    "wordBank": [
      "Nutatzuyunaya.",
      "tushijtza",
      "tashimalis",
      "kumit"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Huevo duro",
    "character": "Neutral.svg",
    "correct": [
      "Teksisti",
      "takwawak."
    ],
    "wordBank": [
      "Teksisti",
      "takwawak.",
      "nikwa",
      "tushijtza",
      "tashamanialis"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La comida quedó simple (insípida)",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "taiwan",
      "nakak",
      "asesek."
    ],
    "wordBank": [
      "Ne",
      "taiwan",
      "nakak",
      "asesek.",
      "sital",
      "kuyul",
      "kuyamet"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Sandía",
    "character": "Neutral.svg",
    "correct": [
      "Kutkut."
    ],
    "wordBank": [
      "Kutkut.",
      "tatzuyunti",
      "akashmut",
      "iwan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Cómo es el nance?",
    "character": "Neutral.svg",
    "correct": [
      "¿Ken",
      "itachishka",
      "ne",
      "nan?"
    ],
    "wordBank": [
      "¿Ken",
      "itachishka",
      "ne",
      "nan?",
      "muyulala",
      "itultika",
      "atutun"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "A mí me gusta el marañón",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nugustuj",
      "ne",
      "akashmut."
    ],
    "wordBank": [
      "Naja",
      "nugustuj",
      "ne",
      "akashmut.",
      "tatak",
      "alawak",
      "nakak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Pan dulce",
    "character": "Neutral.svg",
    "correct": [
      "Tishti",
      "tzupelek."
    ],
    "wordBank": [
      "Tishti",
      "tzupelek.",
      "teksisti",
      "itakil",
      "taiwan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Carne de cerdo",
    "character": "Neutral.svg",
    "correct": [
      "Inakayu",
      "kuyamet."
    ],
    "wordBank": [
      "Inakayu",
      "kuyamet.",
      "alawak",
      "nugustuj",
      "kumit"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La tortilla está quemada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamal",
      "tatak."
    ],
    "wordBank": [
      "Ne",
      "tamal",
      "tatak.",
      "tel",
      "akashmut",
      "nugustuj"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Qué color es la mandarina?",
    "character": "Neutral.svg",
    "correct": [
      "¿Tay",
      "itachishka",
      "ne",
      "muyulala?"
    ],
    "wordBank": [
      "¿Tay",
      "itachishka",
      "ne",
      "muyulala?",
      "tzukultik",
      "tishkal",
      "kumelut"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El agua está helada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "at",
      "sesek."
    ],
    "wordBank": [
      "Ne",
      "at",
      "sesek.",
      "tashamanialis",
      "istat",
      "nikwa"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Mucho chile",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "chil."
    ],
    "wordBank": [
      "Miak",
      "chil.",
      "sesek",
      "shushuknaj",
      "tzupelek"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo muelo el maíz",
    "character": "Neutral.svg",
    "correct": [
      "Niktzunpayana",
      "ne",
      "tawial."
    ],
    "wordBank": [
      "Niktzunpayana",
      "ne",
      "tawial.",
      "iajwiaka",
      "shulkuch",
      "tatzuyunti"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Muchas gracias",
    "character": "Neutral.svg",
    "correct": [
      "Panpadiush."
    ],
    "wordBank": [
      "Panpadiush.",
      "tamanti",
      "panpadiush",
      "naja"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Cuchillo.",
    "character": "Neutral.svg",
    "correct": [
      "Takutunaya"
    ],
    "wordBank": [
      "Takutunaya",
      "tamanalis",
      "kuyamet",
      "akulash"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Licuadora.",
    "character": "Neutral.svg",
    "correct": [
      "Tatisilis"
    ],
    "wordBank": [
      "Tatisilis",
      "ne",
      "itachishka",
      "iewayu"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Estufa.",
    "character": "Neutral.svg",
    "correct": [
      "Tamanalis"
    ],
    "wordBank": [
      "Tamanalis",
      "asesek",
      "atiluni",
      "tzaput"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Cuchara o volteador.",
    "character": "Neutral.svg",
    "correct": [
      "Kwelpaj"
    ],
    "wordBank": [
      "Kwelpaj",
      "taijtik",
      "uksik",
      "shushuknaj"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Fuego.",
    "character": "Neutral.svg",
    "correct": [
      "Tit"
    ],
    "wordBank": [
      "Tit",
      "asesek",
      "tashamanialis",
      "tiawit"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Cáscara.",
    "character": "Neutral.svg",
    "correct": [
      "Ewayu"
    ],
    "wordBank": [
      "Ewayu",
      "tatzuyunti",
      "atutun",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Pulpa o carne del fruto.",
    "character": "Neutral.svg",
    "correct": [
      "Nakayu"
    ],
    "wordBank": [
      "Nakayu",
      "niktzunpayana",
      "nutatzuyunaya",
      "asesek"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Semilla.",
    "character": "Neutral.svg",
    "correct": [
      "Ish"
    ],
    "wordBank": [
      "Ish",
      "tatak",
      "tatzuyunti",
      "iajwiaka"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Olla.",
    "character": "Neutral.svg",
    "correct": [
      "Kumit"
    ],
    "wordBank": [
      "Kumit",
      "takutunaya",
      "chukulat",
      "ewayu"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Plato o trasto.",
    "character": "Neutral.svg",
    "correct": [
      "Taijtik"
    ],
    "wordBank": [
      "Taijtik",
      "nakayu",
      "ajwiak",
      "uksik"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne tamal sujsul",
    "after": ". (La tortilla está quemada)",
    "correct": "tatak",
    "options": [
      "Tashimalis",
      "tatak",
      "tultiaka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne inakayu puyuj",
    "after": ". (La carne de pollo está frita)",
    "correct": "tatzuyunti",
    "options": [
      "tatisti",
      "tatzuyunti",
      "chupi"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne matzaj sujsul",
    "after": ". (La piña es muy dulce)",
    "correct": "tzupelek",
    "options": [
      "lala",
      "tzupelek",
      "puyek"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne lala sujsul",
    "after": ". (La naranja es muy ácida)",
    "correct": "shukuk",
    "options": [
      "shukuk",
      "itakil",
      "chichik"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Naja",
    "after": "kilit. (Yo cocino chipilín)",
    "correct": "nitamana",
    "options": [
      "uksi",
      "nitamana",
      "nimayana"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "¿",
    "after": "tikwa ne akulash? (¿Con qué comes el pepino?)",
    "correct": "Tay iwan",
    "options": [
      "Ne inakayu puyuj tatzuyunti",
      "Tay iwan",
      "Ken itachishka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne teksisti",
    "after": ". (El huevo en torta/omelet)",
    "correct": "tepuntik",
    "options": [
      "Tashamanialis",
      "sital",
      "tepuntik"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne tawial pal kia né nemi",
    "after": ". (El grano es para que así haya nuestra tortilla)",
    "correct": "tutamal",
    "options": [
      "Tashimalis",
      "tatisilis",
      "tutamal"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne atutun",
    "after": ". (El café está ralo)",
    "correct": "achijchipa",
    "options": [
      "tzukultik",
      "Tit",
      "achijchipa"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Naja nimayana",
    "after": ". (Yo tengo hambre de nuevo)",
    "correct": "senpa",
    "options": [
      "neman",
      "senpa",
      "itachishka"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El pollo asado es rico.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "puyuj",
      "tishkal",
      "ajwiak"
    ],
    "wordBank": [
      "Ne",
      "puyuj",
      "tishkal",
      "ajwiak",
      "achiuk",
      "tawial",
      "tamanalis"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo como jícama con sal.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikwa",
      "shikamaj",
      "iwan",
      "istat"
    ],
    "wordBank": [
      "Naja",
      "nikwa",
      "shikamaj",
      "iwan",
      "istat",
      "shushuknaj",
      "nugustuj",
      "titakwat"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Qué color es la mandarina?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Tay",
      "itachishka",
      "ne",
      "muyulala?"
    ],
    "wordBank": [
      "¿Tay",
      "itachishka",
      "ne",
      "muyulala?",
      "inakayu",
      "ken",
      "chichik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La cáscara de guineo es lisa.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "iewayu",
      "kinia",
      "alawak"
    ],
    "wordBank": [
      "Ne",
      "iewayu",
      "kinia",
      "alawak",
      "kuyamet",
      "nan",
      "chukulat"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "A mí me gusta el chocolate caliente.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nugustuj",
      "ne",
      "chukulat",
      "tutunik"
    ],
    "wordBank": [
      "Naja",
      "nugustuj",
      "ne",
      "chukulat",
      "tutunik",
      "chiltik",
      "inakayu",
      "tatisti"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La carne de cerdo está salada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "inakayu",
      "kuyamet",
      "puyek"
    ],
    "wordBank": [
      "Ne",
      "inakayu",
      "kuyamet",
      "puyek",
      "tiawit",
      "atiluni",
      "kaltit"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Vamos a comer, pues.",
    "character": "Neutral.svg",
    "correct": [
      "Tiawit",
      "titakwat",
      "tel"
    ],
    "wordBank": [
      "Tiawit",
      "titakwat",
      "tel",
      "muyulala",
      "alawak",
      "taijtik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El tamal de elote de mi mamá es muy rico.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shulkuch",
      "sujsul",
      "ajwiak",
      "nunan"
    ],
    "wordBank": [
      "Ne",
      "shulkuch",
      "sujsul",
      "ajwiak",
      "nunan",
      "nakak",
      "ewayu",
      "chilshukut"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La cerveza emborracha.",
    "character": "Neutral.svg",
    "correct": [
      "At",
      "chichik",
      "tatawantia"
    ],
    "wordBank": [
      "At",
      "chichik",
      "tatawantia",
      "atzaput",
      "kaltit",
      "puyek"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La fruta se maduró.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "itakil",
      "uksik"
    ],
    "wordBank": [
      "Ne",
      "itakil",
      "uksik",
      "inakayu",
      "talwentzin",
      "kutkut"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Cómo es el sabor de la comida?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Ken",
      "ne",
      "iajwiaka",
      "takwal?"
    ],
    "wordBank": [
      "¿Ken",
      "ne",
      "iajwiaka",
      "takwal?",
      "tashimalis",
      "atiluni",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo como huevo revuelto.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikwa",
      "teksisti",
      "mumushuj"
    ],
    "wordBank": [
      "Naja",
      "nikwa",
      "teksisti",
      "mumushuj",
      "shima",
      "kinia",
      "ken"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El elote es muy rico.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "elut",
      "sujsul",
      "ajwiak"
    ],
    "wordBank": [
      "Ne",
      "elut",
      "sujsul",
      "ajwiak",
      "ewayu",
      "nan",
      "tzaput"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo tengo mucha hambre.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nimayana",
      "sujsul"
    ],
    "wordBank": [
      "Naja",
      "nimayana",
      "sujsul",
      "tatisti",
      "tultiaka",
      "kumelut"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Qué color es el nance?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Tay",
      "itachishka",
      "ne",
      "nan?"
    ],
    "wordBank": [
      "¿Tay",
      "itachishka",
      "ne",
      "nan?",
      "kumelut",
      "chilshukut",
      "iewayu"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La sandía es roja",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kutkut",
      "itachishka",
      "chiltik."
    ],
    "wordBank": [
      "Ne",
      "kutkut",
      "itachishka",
      "chiltik.",
      "shima",
      "awakat",
      "puyuj"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "A mí me gusta la uva",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nugustuj",
      "ne",
      "shukumekat."
    ],
    "wordBank": [
      "Naja",
      "nugustuj",
      "ne",
      "shukumekat.",
      "takwal",
      "tatawantia",
      "taiwan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Huevo estrellado",
    "character": "Neutral.svg",
    "correct": [
      "Sital",
      "teksisti."
    ],
    "wordBank": [
      "Sital",
      "teksisti.",
      "tiktunit",
      "takwal",
      "ewayu"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo muelo el maíz",
    "character": "Neutral.svg",
    "correct": [
      "Niktzunpayana",
      "ne",
      "tawial."
    ],
    "wordBank": [
      "Niktzunpayana",
      "ne",
      "tawial.",
      "mumushuj",
      "pal",
      "chilshukut"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El agua está helada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "at",
      "sesek."
    ],
    "wordBank": [
      "Ne",
      "at",
      "sesek.",
      "tejemet",
      "ewayu",
      "tutunik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Qué fruta te gusta?",
    "character": "Neutral.svg",
    "correct": [
      "¿Tay",
      "itakil",
      "mugustuj?."
    ],
    "wordBank": [
      "¿Tay",
      "itakil",
      "mugustuj?.",
      "tit",
      "naja",
      "tel"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Pan dulce",
    "character": "Neutral.svg",
    "correct": [
      "Tishti",
      "tzupelek."
    ],
    "wordBank": [
      "Tishti",
      "tzupelek.",
      "shulkuch",
      "nan",
      "sesek"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Carne de res asada",
    "character": "Neutral.svg",
    "correct": [
      "Inakayu",
      "turuj",
      "tishkal."
    ],
    "wordBank": [
      "Inakayu",
      "turuj",
      "tishkal.",
      "achijchipa",
      "tekwa",
      "panpadiush"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La tortilla está doradita",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamal",
      "tultiaka."
    ],
    "wordBank": [
      "Ne",
      "tamal",
      "tultiaka.",
      "tamanti",
      "kaltit",
      "itakil"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Mucho chile picante",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "chil",
      "tekwa."
    ],
    "wordBank": [
      "Miak",
      "chil",
      "tekwa.",
      "tzupelek",
      "nakayu",
      "iwan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La comida quedó simple",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "takwal",
      "nakak",
      "asesek."
    ],
    "wordBank": [
      "Ne",
      "takwal",
      "nakak",
      "asesek.",
      "tatawantia",
      "tultik",
      "istat"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El pelador de papas",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tashimalis",
      "pal",
      "talwentzin."
    ],
    "wordBank": [
      "Ne",
      "tashimalis",
      "pal",
      "talwentzin.",
      "shukumekat",
      "nutatzuyunaya",
      "tatisilis"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo quiero café espeso",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikneki",
      "atutun",
      "tzukultik."
    ],
    "wordBank": [
      "Naja",
      "nikneki",
      "atutun",
      "tzukultik.",
      "takwawak",
      "atzaput",
      "asesek"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La semilla del marañón",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ish",
      "akashmut."
    ],
    "wordBank": [
      "Ne",
      "ish",
      "akashmut.",
      "tamanalis",
      "nugustuj",
      "awakat"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La guanábana es verde",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tushijtza",
      "itachishka",
      "shushuknaj."
    ],
    "wordBank": [
      "Ne",
      "tushijtza",
      "itachishka",
      "shushuknaj.",
      "ewayu",
      "tamanalis",
      "uksik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Olla",
    "character": "Neutral.svg",
    "correct": [
      "Kumit"
    ],
    "wordBank": [
      "Kumit",
      "inakayu",
      "tatisilis",
      "miak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Horno de leña",
    "character": "Neutral.svg",
    "correct": [
      "Kaltit"
    ],
    "wordBank": [
      "Kaltit",
      "lala",
      "tiawit",
      "chilshukut"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Refrigeradora",
    "character": "Neutral.svg",
    "correct": [
      "Sesekalis"
    ],
    "wordBank": [
      "Sesekalis",
      "tawial",
      "titakwat",
      "tatawantia"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Cuchillo",
    "character": "Neutral.svg",
    "correct": [
      "Takutunaya"
    ],
    "wordBank": [
      "Takutunaya",
      "awakat",
      "shukumekat",
      "sesekalis"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Pelador",
    "character": "Neutral.svg",
    "correct": [
      "Tashimalis"
    ],
    "wordBank": [
      "Tashimalis",
      "nakak",
      "tepuntik",
      "nakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Carne de res",
    "character": "Neutral.svg",
    "correct": [
      "Inakayu",
      "turuj"
    ],
    "wordBank": [
      "Inakayu",
      "turuj",
      "itakil",
      "taijtik",
      "nimayana"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Carne de cerdo",
    "character": "Neutral.svg",
    "correct": [
      "Inakayu",
      "kuyamet"
    ],
    "wordBank": [
      "Inakayu",
      "kuyamet",
      "sital",
      "mumushuj",
      "titakwat"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Huevo duro",
    "character": "Neutral.svg",
    "correct": [
      "Teksisti",
      "takwawak"
    ],
    "wordBank": [
      "Teksisti",
      "takwawak",
      "itakil",
      "nugustuj",
      "ish"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Tenedor",
    "character": "Neutral.svg",
    "correct": [
      "Trinchi"
    ],
    "wordBank": [
      "Trinchi",
      "shulkuch",
      "tatisti",
      "iwan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Licuadora",
    "character": "Neutral.svg",
    "correct": [
      "Tatisilis"
    ],
    "wordBank": [
      "Tatisilis",
      "tutunik",
      "winkulash",
      "shushuknaj"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "",
    "after": "timayanat. (Nosotros tenemos hambre)",
    "correct": "Tejemet",
    "options": [
      "Yejemet",
      "Takwal",
      "Tejemet"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne iayu tijlan sujsul",
    "after": ". (La sopa de gallina está muy salada)",
    "correct": "puyek",
    "options": [
      "puyek",
      "Nutatzuyunaya",
      "asesek"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "¿",
    "after": "timayana? (¿Tienes hambre tú?)",
    "correct": "Taja",
    "options": [
      "Naja",
      "lala",
      "Taja"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne at chichik",
    "after": ". (La cerveza es amarga)",
    "correct": "chichik",
    "options": [
      "Naja",
      "chichik",
      "nitamana"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne chil sujsul",
    "after": ". (El chile es muy picante)",
    "correct": "tekwa",
    "options": [
      "senpa",
      "tzupelek",
      "tekwa"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne takwal nakak",
    "after": ". (La comida quedó simple/insípida)",
    "correct": "asesek",
    "options": [
      "asesek",
      "Taijtik",
      "Naja"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Naja",
    "after": "nimayana. (Yo tengo mucha hambre)",
    "correct": "sujsul",
    "options": [
      "chupi",
      "sujsul",
      "Kumit"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne matzaj sujsul",
    "after": ". (La piña es muy dulce)",
    "correct": "tzupelek",
    "options": [
      "tzupelek",
      "nugustuj",
      "Nutatzuyunaya"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne lala kenhayuk",
    "after": ". (La naranja todavía está ácida/agria)",
    "correct": "shukuk",
    "options": [
      "tatak",
      "shukuk",
      "sujsul"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Yejemet",
    "after": ". (Ellos tienen hambre)",
    "correct": "mayanat",
    "options": [
      "timayanat",
      "mayanat",
      "tzupelek"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La carne de pollo frita.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "inakayu",
      "puyuj",
      "tatzuyunti"
    ],
    "wordBank": [
      "Ne",
      "inakayu",
      "puyuj",
      "tatzuyunti",
      "tishti",
      "iajwiaka",
      "takutunaya"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Qué fruta te gusta?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Tay",
      "itakil",
      "mugustuj?"
    ],
    "wordBank": [
      "¿Tay",
      "itakil",
      "mugustuj?",
      "alawak",
      "tishti",
      "takwal"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El tamal de elote es muy rico.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shulkuch",
      "sujsul",
      "ajwiak"
    ],
    "wordBank": [
      "Ne",
      "shulkuch",
      "sujsul",
      "ajwiak",
      "itachishka",
      "talwentzin",
      "elut"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El chocolate está caliente.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chukulat",
      "tutunik"
    ],
    "wordBank": [
      "Ne",
      "chukulat",
      "tutunik",
      "tzupelek",
      "ken",
      "puyuj"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Huevo estrellado con sal.",
    "character": "Neutral.svg",
    "correct": [
      "Sital",
      "teksisti",
      "iwan",
      "istat"
    ],
    "wordBank": [
      "Sital",
      "teksisti",
      "iwan",
      "istat",
      "inakayu",
      "shushuknaj",
      "nan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La cáscara de guineo es lisa.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "iewayu",
      "kinia",
      "alawak"
    ],
    "wordBank": [
      "Ne",
      "iewayu",
      "kinia",
      "alawak",
      "turuj",
      "tashimalis",
      "akulash"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Vamos a comer, pues.",
    "character": "Neutral.svg",
    "correct": [
      "Tiawit",
      "titakwat",
      "tel"
    ],
    "wordBank": [
      "Tiawit",
      "titakwat",
      "tel",
      "kumelut",
      "tatzuyunti",
      "miak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La naranja maduró.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "lala",
      "uksik"
    ],
    "wordBank": [
      "Ne",
      "lala",
      "uksik",
      "titakwat",
      "niktzunpayana",
      "kumit"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo como jícama.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikwa",
      "shikamaj"
    ],
    "wordBank": [
      "Naja",
      "nikwa",
      "shikamaj",
      "at",
      "alawak",
      "tit"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La yema del huevo es amarilla.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "itultika",
      "teksisti",
      "tultik"
    ],
    "wordBank": [
      "Ne",
      "itultika",
      "teksisti",
      "tultik",
      "pal",
      "ajwiak",
      "chiltik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Cómo es el sabor de la comida?.",
    "character": "Neutral.svg",
    "correct": [
      "¿Ken",
      "ne",
      "iajwiaka",
      "takwal?"
    ],
    "wordBank": [
      "¿Ken",
      "ne",
      "iajwiaka",
      "takwal?",
      "sital",
      "iewayu",
      "niktisi"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La tortilla está quemada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamal",
      "tatak"
    ],
    "wordBank": [
      "Ne",
      "tamal",
      "tatak",
      "iajwiaka",
      "tiktunit",
      "niktzunpayana"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo como frijol molido.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikwa",
      "et",
      "tatisti"
    ],
    "wordBank": [
      "Naja",
      "nikwa",
      "et",
      "tatisti",
      "tzukultik",
      "tashimalis",
      "mugustuj"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El refresco/fresco está helado.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "at",
      "tzupelek",
      "sesek"
    ],
    "wordBank": [
      "Ne",
      "at",
      "tzupelek",
      "sesek",
      "taiwan",
      "awakat",
      "tamanti"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El pollo está doradito.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "puyuj",
      "tultiaka"
    ],
    "wordBank": [
      "Ne",
      "puyuj",
      "tultiaka",
      "achijchipa",
      "kwelpaj",
      "miak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo tengo mucha hambre",
    "character": "Neutral.svg",
    "correct": [
      "Sujsul",
      "nimayana."
    ],
    "wordBank": [
      "Sujsul",
      "nimayana.",
      "tay",
      "muyulala",
      "tejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La sandía es roja",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kutkut",
      "chiltik."
    ],
    "wordBank": [
      "Ne",
      "kutkut",
      "chiltik.",
      "tatisilis",
      "tatzuyunti",
      "kuyul"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Huevo revuelto",
    "character": "Neutral.svg",
    "correct": [
      "Teksisti",
      "mumushuj."
    ],
    "wordBank": [
      "Teksisti",
      "mumushuj.",
      "itultika",
      "tit",
      "turuj"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El elote es rico",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "elut",
      "ajwiak."
    ],
    "wordBank": [
      "Ne",
      "elut",
      "ajwiak.",
      "tashimalis",
      "niktzunpayana",
      "istat"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "A mí me gusta el marañón",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nugustuj",
      "ne",
      "akashmut."
    ],
    "wordBank": [
      "Naja",
      "nugustuj",
      "ne",
      "akashmut.",
      "tzupelek",
      "at",
      "tzaput"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Uvas y fresas",
    "character": "Neutral.svg",
    "correct": [
      "Shukumekat",
      "wan",
      "chilshukut."
    ],
    "wordBank": [
      "Shukumekat",
      "wan",
      "chilshukut.",
      "takwawak",
      "achiuk",
      "shikamaj"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Pan dulce con café",
    "character": "Neutral.svg",
    "correct": [
      "Tishti",
      "tzupelek",
      "iwan",
      "atutun."
    ],
    "wordBank": [
      "Tishti",
      "tzupelek",
      "iwan",
      "atutun.",
      "shikamaj",
      "sujsul",
      "tay"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Carne de res asada",
    "character": "Neutral.svg",
    "correct": [
      "Inakayu",
      "turuj",
      "tishkal."
    ],
    "wordBank": [
      "Inakayu",
      "turuj",
      "tishkal.",
      "tamanti",
      "nikwa",
      "miak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La semilla del aguacate",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ish",
      "awakat."
    ],
    "wordBank": [
      "Ne",
      "ish",
      "awakat.",
      "akulash",
      "tultiaka",
      "taijtik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Mucho chile picante",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "chil",
      "tekwa."
    ],
    "wordBank": [
      "Miak",
      "chil",
      "tekwa.",
      "wan",
      "atiluni",
      "akashmut"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La guanábana es verde",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tushijtza",
      "shushuknaj."
    ],
    "wordBank": [
      "Ne",
      "tushijtza",
      "shushuknaj.",
      "iewayu",
      "wan",
      "tzaput"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo muelo el maíz",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "niktisi",
      "ne",
      "tawial."
    ],
    "wordBank": [
      "Naja",
      "niktisi",
      "ne",
      "tawial.",
      "shukumekat",
      "tashimalis",
      "tiawit"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La mandarina es anaranjada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "muyulala",
      "achiuk."
    ],
    "wordBank": [
      "Ne",
      "muyulala",
      "achiuk.",
      "tultiaka",
      "niktzunpayana",
      "tatak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Tenedor y cuchara",
    "character": "Neutral.svg",
    "correct": [
      "Trinchi",
      "wan",
      "kwelpaj."
    ],
    "wordBank": [
      "Trinchi",
      "wan",
      "kwelpaj.",
      "shukumekat",
      "istat",
      "tepuntik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Pelar la papa",
    "character": "Neutral.svg",
    "correct": [
      "Shima",
      "ne",
      "talwentzin."
    ],
    "wordBank": [
      "Shima",
      "ne",
      "talwentzin.",
      "atzaput",
      "chil",
      "ewayu"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Cáscara",
    "character": "Neutral.svg",
    "correct": [
      "Ewayu"
    ],
    "wordBank": [
      "Ewayu",
      "wan",
      "et",
      "tzupelek"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Pulpa o carne del fruto",
    "character": "Neutral.svg",
    "correct": [
      "Nakayu"
    ],
    "wordBank": [
      "Nakayu",
      "kutkut",
      "ajwiak",
      "takwawak"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Semilla",
    "character": "Neutral.svg",
    "correct": [
      "Ish"
    ],
    "wordBank": [
      "Ish",
      "nugustuj",
      "shukumekat",
      "awakat"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Horno de leña",
    "character": "Neutral.svg",
    "correct": [
      "Kaltit"
    ],
    "wordBank": [
      "Kaltit",
      "tzukultik",
      "tamanti",
      "chupi"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Fuego",
    "character": "Neutral.svg",
    "correct": [
      "Tit"
    ],
    "wordBank": [
      "Tit",
      "inakayu",
      "tutunik",
      "sesekalis"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Tenedor",
    "character": "Neutral.svg",
    "correct": [
      "Trinchi"
    ],
    "wordBank": [
      "Trinchi",
      "taijtik",
      "atiluni",
      "inakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Plato o traste",
    "character": "Neutral.svg",
    "correct": [
      "Taijtik"
    ],
    "wordBank": [
      "Taijtik",
      "nikwa",
      "inakayu",
      "shulkuch"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Vaso o taza",
    "character": "Neutral.svg",
    "correct": [
      "Atiluni"
    ],
    "wordBank": [
      "Atiluni",
      "ken",
      "pal",
      "nikneki"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El acompañamiento de la comida",
    "character": "Neutral.svg",
    "correct": [
      "Taiwan"
    ],
    "wordBank": [
      "Taiwan",
      "kaltit",
      "alawak",
      "takutunaya"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Comida (especialmente de maíz)",
    "character": "Neutral.svg",
    "correct": [
      "Takwal"
    ],
    "wordBank": [
      "Takwal",
      "tutunik",
      "tit",
      "tatak"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Anmejemet",
    "after": ". (Ustedes tienen hambre)",
    "correct": "anmayanat",
    "options": [
      "timayanat",
      "anmayanat",
      "Ish"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne",
    "after": "itachishka chiltik. (La anona roja)",
    "correct": "tzaput chiltik",
    "options": [
      "tzaput chiltik",
      "Ne at tzupelek sesek",
      "¿Ken itachishka ne nan?"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Naja nik",
    "after": "ne atutun. (Yo bebo el café)",
    "correct": "uni",
    "options": [
      "uni",
      "Taijtik",
      "kwa"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne",
    "after": "iewayu alawak. (La cáscara del guineo es lisa)",
    "correct": "kinia",
    "options": [
      "lala",
      "tatzuyunti",
      "kinia"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "",
    "after": "mayanat. (Ellos tienen hambre)",
    "correct": "Yejemet",
    "options": [
      "Tejemet",
      "Takutunaya",
      "Yejemet"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne teksisti",
    "after": ". (El huevo revuelto)",
    "correct": "mumushuj",
    "options": [
      "Taja",
      "tepuntik",
      "mumushuj"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Ne matzaj sujsul",
    "after": ". (La piña es muy dulce)",
    "correct": "tzupelek",
    "options": [
      "Tit",
      "puyek",
      "tzupelek"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "¿",
    "after": "takwal mugustuj? (¿Qué comida te gusta?)",
    "correct": "Tay",
    "options": [
      "tultiaka",
      "Ken",
      "Tay"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Naja",
    "after": "ne nan. (A mí me gusta el nance)",
    "correct": "nugustuj",
    "options": [
      "nikwa",
      "nugustuj",
      "Taiwan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 7,
    "before": "Tejemet",
    "after": ". (Nosotros tenemos hambre)",
    "correct": "timayanat",
    "options": [
      "anmayanat",
      "timayanat",
      "Trinchi"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El elote es muy rico.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "elut",
      "sujsul",
      "ajwiak"
    ],
    "wordBank": [
      "Ne",
      "elut",
      "sujsul",
      "ajwiak",
      "atutun",
      "tzupelek",
      "tultiaka"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Vamos a comer?.",
    "character": "Neutral.svg",
    "correct": [
      "Tiawit",
      "titakwat?"
    ],
    "wordBank": [
      "Tiawit",
      "titakwat?",
      "chupi",
      "teksisti",
      "tay"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El huevo en torta (omelet).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "teksisti",
      "tepuntik"
    ],
    "wordBank": [
      "Ne",
      "teksisti",
      "tepuntik",
      "at",
      "talpashukut",
      "tatzuyunti"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La carne de res asada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "inakayu",
      "turuj",
      "tishkal"
    ],
    "wordBank": [
      "Ne",
      "inakayu",
      "turuj",
      "tishkal",
      "tamanti",
      "shima",
      "tit"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo como jícama con sal.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikwa",
      "shikamaj",
      "iwan",
      "istat"
    ],
    "wordBank": [
      "Naja",
      "nikwa",
      "shikamaj",
      "iwan",
      "istat",
      "nutatzuyunaya",
      "at",
      "tzukultik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La cáscara de guineo es lisa.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "iewayu",
      "kinia",
      "alawak"
    ],
    "wordBank": [
      "Ne",
      "iewayu",
      "kinia",
      "alawak",
      "tejemet",
      "tultiaka",
      "iwan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La semilla de aguacate.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ish",
      "awakat"
    ],
    "wordBank": [
      "Ne",
      "ish",
      "awakat",
      "tel",
      "achiuk",
      "sesekalis"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El zapote y el mamón.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tzaput",
      "wan",
      "ne",
      "talpashukut"
    ],
    "wordBank": [
      "Ne",
      "tzaput",
      "wan",
      "ne",
      "talpashukut",
      "takutunaya",
      "taiwan",
      "tzupelek"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Tengo mucha hambre.",
    "character": "Neutral.svg",
    "correct": [
      "Sujsul",
      "nimayana"
    ],
    "wordBank": [
      "Sujsul",
      "nimayana",
      "tit",
      "muyulala",
      "nunan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El café está espeso.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "atutun",
      "tzukultik"
    ],
    "wordBank": [
      "Ne",
      "atutun",
      "tzukultik",
      "nimayana",
      "ewayu",
      "tit"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La mandarina es anaranjada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "muyulala",
      "achiuk"
    ],
    "wordBank": [
      "Ne",
      "muyulala",
      "achiuk",
      "takwal",
      "chil",
      "itachishka"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El huevo duro.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "teksisti",
      "takwawak"
    ],
    "wordBank": [
      "Ne",
      "teksisti",
      "takwawak",
      "trinchi",
      "kuyul",
      "tekwa"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La naranja se maduró.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "lala",
      "uksik"
    ],
    "wordBank": [
      "Ne",
      "lala",
      "uksik",
      "tiktunit",
      "ish",
      "itachishka"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El chocolate está caliente.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chukulat",
      "tutunik"
    ],
    "wordBank": [
      "Ne",
      "chukulat",
      "tutunik",
      "shikamaj",
      "shushuknaj",
      "tepuntik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El chile es picante.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chil",
      "tekwa"
    ],
    "wordBank": [
      "Ne",
      "chil",
      "tekwa",
      "tashamanialis",
      "talpashukut",
      "atutun"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La fruta",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "itakil."
    ],
    "wordBank": [
      "Ne",
      "itakil.",
      "naja",
      "chichik",
      "takwal"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Mi sartén",
    "character": "Neutral.svg",
    "correct": [
      "Nutatzuyunaya."
    ],
    "wordBank": [
      "Nutatzuyunaya.",
      "kuyamet",
      "akashmut",
      "chiltik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Huevo estrellado",
    "character": "Neutral.svg",
    "correct": [
      "Sital",
      "teksisti."
    ],
    "wordBank": [
      "Sital",
      "teksisti.",
      "takwal",
      "iewayu",
      "tatzuyunti"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Carne de cerdo",
    "character": "Neutral.svg",
    "correct": [
      "Inakayu",
      "kuyamet."
    ],
    "wordBank": [
      "Inakayu",
      "kuyamet.",
      "tekwa",
      "nunan",
      "taiwan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "¿Cómo es el sabor de la comida?",
    "character": "Neutral.svg",
    "correct": [
      "¿Ken",
      "ne",
      "iajwiaka",
      "takwal?."
    ],
    "wordBank": [
      "¿Ken",
      "ne",
      "iajwiaka",
      "takwal?.",
      "chiltik",
      "takwawak",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Pera y granadilla",
    "character": "Neutral.svg",
    "correct": [
      "Atzaput",
      "wan",
      "winkulash."
    ],
    "wordBank": [
      "Atzaput",
      "wan",
      "winkulash.",
      "elut",
      "panpadiush",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "El café está ralo",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "atutun",
      "achijchipa."
    ],
    "wordBank": [
      "Ne",
      "atutun",
      "achijchipa.",
      "kumit",
      "alawak",
      "tepuntik"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Yo como frijoles",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikwa",
      "et."
    ],
    "wordBank": [
      "Naja",
      "nikwa",
      "et.",
      "itakil",
      "tzaput",
      "sujsul"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La tortilla está quemada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamal",
      "tatak."
    ],
    "wordBank": [
      "Ne",
      "tamal",
      "tatak.",
      "itakil",
      "kuyamet",
      "tzupelek"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Muchas gracias",
    "character": "Neutral.svg",
    "correct": [
      "Panpadiush."
    ],
    "wordBank": [
      "Panpadiush.",
      "pal",
      "tamanti",
      "tamal"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Melón y coyol",
    "character": "Neutral.svg",
    "correct": [
      "Kumelut",
      "wan",
      "kuyul."
    ],
    "wordBank": [
      "Kumelut",
      "wan",
      "kuyul.",
      "kuyamet",
      "chilshukut",
      "ish"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Elote cocido",
    "character": "Neutral.svg",
    "correct": [
      "Elut",
      "tamanti."
    ],
    "wordBank": [
      "Elut",
      "tamanti.",
      "tishkal",
      "chichik",
      "sujsul"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Bebida amarga (cerveza)",
    "character": "Neutral.svg",
    "correct": [
      "At",
      "chichik."
    ],
    "wordBank": [
      "At",
      "chichik.",
      "atiluni",
      "niktzunpayana",
      "tejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "La semilla del marañón",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ish",
      "akashmut."
    ],
    "wordBank": [
      "Ne",
      "ish",
      "akashmut.",
      "niktzunpayana",
      "tatisti",
      "sesek"
    ]
  },
  {
    "type": "translate",
    "stage": 7,
    "prompt": "Nosotros bebemos agua",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "tiktunit",
      "ne",
      "at."
    ],
    "wordBank": [
      "Tejemet",
      "tiktunit",
      "ne",
      "at.",
      "tit",
      "muyulala",
      "tatzuyunti"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi cabeza",
    "character": "Neutral.svg",
    "correct": [
      "Nutzuntekun"
    ],
    "wordBank": [
      "Nutzuntekun",
      "innakas",
      "tuesyu",
      "ish"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu nariz",
    "character": "Neutral.svg",
    "correct": [
      "Muyak"
    ],
    "wordBank": [
      "Muyak",
      "itewajka",
      "tuumiyu",
      "tentzikaw"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su boca",
    "character": "Neutral.svg",
    "correct": [
      "Iten"
    ],
    "wordBank": [
      "Iten",
      "ielpajsu",
      "numakechtan",
      "numash"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestro pie",
    "character": "Neutral.svg",
    "correct": [
      "Tukshi"
    ],
    "wordBank": [
      "Tukshi",
      "anmumasalijka",
      "innakas",
      "metzpan"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su mano (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmumey"
    ],
    "wordBank": [
      "Anmumey",
      "inhikshitashkal",
      "tuesyu",
      "ishkalyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su oreja (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Innakas"
    ],
    "wordBank": [
      "Innakas",
      "inchichiyak",
      "ipitzajka",
      "imapipilsalijka"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi diente",
    "character": "Neutral.svg",
    "correct": [
      "Nutan"
    ],
    "wordBank": [
      "Nutan",
      "inhikshipipilishkalyu",
      "elishku",
      "majkul"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu cuello",
    "character": "Neutral.svg",
    "correct": [
      "Mukechkuyu"
    ],
    "wordBank": [
      "Mukechkuyu",
      "nushik",
      "imapipilsalijka",
      "mukutz"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su ojo",
    "character": "Neutral.svg",
    "correct": [
      "Iish"
    ],
    "wordBank": [
      "Iish",
      "nushik",
      "tutzunhumiyu",
      "tukechtan"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestro corazón",
    "character": "Neutral.svg",
    "correct": [
      "Tuyulu"
    ],
    "wordBank": [
      "Tuyulu",
      "muyak",
      "kutz",
      "musiwayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi hígado",
    "character": "Neutral.svg",
    "correct": [
      "Nueltapach"
    ],
    "wordBank": [
      "Nueltapach",
      "anmumey",
      "nutzunhewayu",
      "tentzikaw"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus intestinos (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inijijtimekayu"
    ],
    "wordBank": [
      "Inijijtimekayu",
      "elishku",
      "mumapipilsalijka",
      "nutzunhumiyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestra vena",
    "character": "Neutral.svg",
    "correct": [
      "Tuesyumekayu"
    ],
    "wordBank": [
      "Tuesyumekayu",
      "nutenhametzkalyu",
      "nutzuntekun",
      "nuteputzta"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu columna vertebral",
    "character": "Neutral.svg",
    "correct": [
      "Muteputzumiyu"
    ],
    "wordBank": [
      "Muteputzumiyu",
      "anmushikmekayu",
      "nutan",
      "tennakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus pulmones (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmuejekateni",
      "-pajpaletia"
    ],
    "wordBank": [
      "Anmuejekateni",
      "-pajpaletia",
      "nutzunhumiyu",
      "mukwajtzijtzinyu",
      "inhikshitashkal"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi encía",
    "character": "Neutral.svg",
    "correct": [
      "Nutannakayu"
    ],
    "wordBank": [
      "Nutannakayu",
      "imapipilsalijka",
      "ielpajsu",
      "imapipil"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu mentón",
    "character": "Neutral.svg",
    "correct": [
      "Mutentzikaw"
    ],
    "wordBank": [
      "Mutentzikaw",
      "nuishpajsu",
      "mukutz",
      "kupak"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su cerebro",
    "character": "Neutral.svg",
    "correct": [
      "Itzuntishyu"
    ],
    "wordBank": [
      "Itzuntishyu",
      "tukechtan",
      "nuitztit",
      "mutentzikaw"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi muñeca",
    "character": "Neutral.svg",
    "correct": [
      "Numakechtan"
    ],
    "wordBank": [
      "Numakechtan",
      "mupitzajka",
      "mukwatapal",
      "tutennakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus codos (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmumasalijka"
    ],
    "wordBank": [
      "Anmumasalijka",
      "numatashkal",
      "nutzuntishyu",
      "mutankwich"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus pestañas/cejas",
    "character": "Neutral.svg",
    "correct": [
      "Ishtzujtzunyu"
    ],
    "wordBank": [
      "Ishtzujtzunyu",
      "inhtzijtzinkamak",
      "numashak",
      "mutuskak"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi espalda",
    "character": "Neutral.svg",
    "correct": [
      "Nuteputzta"
    ],
    "wordBank": [
      "Nuteputzta",
      "numashak",
      "iish",
      "mumapipilsalijka"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu frente",
    "character": "Neutral.svg",
    "correct": [
      "Mukwatapal"
    ],
    "wordBank": [
      "Mukwatapal",
      "tennakayu",
      "iten",
      "mumapipilsalijka"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi palma de la mano",
    "character": "Neutral.svg",
    "correct": [
      "Numatashkal"
    ],
    "wordBank": [
      "Numatashkal",
      "itzintew",
      "nuteputzumiyu",
      "itenpajsu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus plantas de los pies (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inhikshitashkal"
    ],
    "wordBank": [
      "Inhikshitashkal",
      "inijijtimekayu",
      "ielpajsu",
      "mukwajtzijtzinyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi ombligo",
    "character": "Neutral.svg",
    "correct": [
      "Nushik"
    ],
    "wordBank": [
      "Nushik",
      "shinach",
      "muish",
      "innakas"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu garganta",
    "character": "Neutral.svg",
    "correct": [
      "Mutuskak"
    ],
    "wordBank": [
      "Mutuskak",
      "nujnuish",
      "kupak",
      "innakas"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su cintura (de ella)",
    "character": "Neutral.svg",
    "correct": [
      "Ipitzajka"
    ],
    "wordBank": [
      "Ipitzajka",
      "mukushun",
      "ishtzujtzunyu",
      "itewajka"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestros huesos",
    "character": "Neutral.svg",
    "correct": [
      "Tuumiyu"
    ],
    "wordBank": [
      "Tuumiyu",
      "ipitzajka",
      "tutuskabolajyu",
      "numatashkal"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su piel (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmuewayu"
    ],
    "wordBank": [
      "Anmuewayu",
      "nukamachal",
      "ipitzajka",
      "muyak"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus mejillas (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inkamachal"
    ],
    "wordBank": [
      "Inkamachal",
      "tennakayu",
      "tuesyu",
      "tukakawyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi talón",
    "character": "Neutral.svg",
    "correct": [
      "Nutzinteyu",
      "-kshi"
    ],
    "wordBank": [
      "Nutzinteyu",
      "-kshi",
      "se",
      "inhtzijtzinkamak",
      "nutan"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu espinilla",
    "character": "Neutral.svg",
    "correct": [
      "Muikshiumiyu"
    ],
    "wordBank": [
      "Muikshiumiyu",
      "inhkwatapal",
      "inhikshitashkal",
      "itzuntishyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus nudillos (de él)",
    "character": "Neutral.svg",
    "correct": [
      "Imapipilsalijka"
    ],
    "wordBank": [
      "Imapipilsalijka",
      "nutan",
      "kupak",
      "nutzinteyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestra sangre",
    "character": "Neutral.svg",
    "correct": [
      "Tuesyu"
    ],
    "wordBank": [
      "Tuesyu",
      "tentzikaw",
      "musiwayu",
      "anmushikmekayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi vello púbico",
    "character": "Neutral.svg",
    "correct": [
      "Numash"
    ],
    "wordBank": [
      "Numash",
      "innakastanhumiyu",
      "mukushun",
      "ituijijtimekayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu pantorrilla",
    "character": "Neutral.svg",
    "correct": [
      "Mukutz"
    ],
    "wordBank": [
      "Mukutz",
      "pajpaletia",
      "iish",
      "ijti"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus dedos de la mano (de ella)",
    "character": "Neutral.svg",
    "correct": [
      "Imapipil"
    ],
    "wordBank": [
      "Imapipil",
      "numash",
      "anmumasalijtuk",
      "inhikshipipilishkalyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus dedos del pie (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inhikshipipil"
    ],
    "wordBank": [
      "Inhikshipipil",
      "mukushun",
      "anmumey",
      "mukwatapal"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi cuerpo",
    "character": "Neutral.svg",
    "correct": [
      "Nuweyka"
    ],
    "wordBank": [
      "Nuweyka",
      "nukamachal",
      "inhikshitashkal",
      "inhmapipilishkalyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi cuero cabelludo",
    "character": "Neutral.svg",
    "correct": [
      "Nutzunhewayu"
    ],
    "wordBank": [
      "Nutzunhewayu",
      "tuumiyu",
      "inhejekateni",
      "anmushikmekayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu canino o colmillo",
    "character": "Neutral.svg",
    "correct": [
      "Mutankwich"
    ],
    "wordBank": [
      "Mutankwich",
      "inhikshipipilishkalyu",
      "nuesyumekayu",
      "ishtzujtzunyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus nudillos (de él/ella)",
    "character": "Neutral.svg",
    "correct": [
      "Imapipilsalijka"
    ],
    "wordBank": [
      "Imapipilsalijka",
      "inhikshipipil",
      "iish",
      "anmuish"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestra manzana de Adán",
    "character": "Neutral.svg",
    "correct": [
      "Tutuskabolajyu"
    ],
    "wordBank": [
      "Tutuskabolajyu",
      "mupitzajka",
      "iishkalyu",
      "ishtzujtzunyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su cordón umbilical (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmushikmekayu"
    ],
    "wordBank": [
      "Anmushikmekayu",
      "nutzuntishyu",
      "nujnuish",
      "tukshi"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus costillas (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Innakastanhumiyu"
    ],
    "wordBank": [
      "Innakastanhumiyu",
      "numatashkal",
      "shinach",
      "tukechtan"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi uña o pezuña",
    "character": "Neutral.svg",
    "correct": [
      "Nuitztit"
    ],
    "wordBank": [
      "Nuitztit",
      "nutenhametzkalyu",
      "mukushun",
      "ipitzajka"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu espalda baja",
    "character": "Neutral.svg",
    "correct": [
      "Mutzinkujku"
    ],
    "wordBank": [
      "Mutzinkujku",
      "nutzunhumiyu",
      "metzpan",
      "anmuish"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su mollera (de él/ella)",
    "character": "Neutral.svg",
    "correct": [
      "Itzintew"
    ],
    "wordBank": [
      "Itzintew",
      "tukakawyu",
      "ijti",
      "nuitztit"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestra encía",
    "character": "Neutral.svg",
    "correct": [
      "Tutannakayu"
    ],
    "wordBank": [
      "Tutannakayu",
      "iishkalyu",
      "mutentzikaw",
      "anmumey"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "Si el sustantivo es umit (hueso), para decir \"tu hueso\" la forma inalienable correcta es:",
    "character": "Neutral.svg",
    "correct": "Muumiyu",
    "options": [
      "Muumiyu",
      "Itenpajsu",
      "Muumit"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "La forma correcta de decir \"mi sangre\" (de esti) es:",
    "character": "Neutral.svg",
    "correct": "Nuesyu",
    "options": [
      "Nuesyu",
      "Inhmapipilishkalyu",
      "Nuesti"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "Para decir \"nuestra carne\" (del cuerpo, de nakat):",
    "character": "Neutral.svg",
    "correct": "Tunakayu",
    "options": [
      "Iishkalyu",
      "Tunakayu",
      "Tunakat"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "\"Tu pierna o muslo\" se escribe:",
    "character": "Neutral.svg",
    "correct": "Mumetzkuyu",
    "options": [
      "-tzunkal",
      "Mumetzkuyu",
      "Mukutz"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "El término Makechtan se refiere a:",
    "character": "Neutral.svg",
    "correct": "La muñeca",
    "options": [
      "Mentón o barbilla",
      "El hombro",
      "La muñeca"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "El término Kechtan se refiere a:",
    "character": "Neutral.svg",
    "correct": "El hombro",
    "options": [
      "La muñeca",
      "El hombro",
      "Su boca"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "Para decir \"Su piel\" (de ustedes), usamos:",
    "character": "Neutral.svg",
    "correct": "Anmuewayu",
    "options": [
      "Inewayu",
      "-ishpajsu",
      "Anmuewayu"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "\"Sus frentes\" (de ellos) se traduce como:",
    "character": "Neutral.svg",
    "correct": "Inhkwatapal",
    "options": [
      "Tutannakayu",
      "Tukwatapal",
      "Inhkwatapal"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "¿Cuál es el término para la parte externa de los genitales femeninos?",
    "character": "Neutral.svg",
    "correct": "-siwayu",
    "options": [
      "-tzunkal",
      "-ukichyu",
      "-siwayu"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "Tzinkamak significa específicamente:",
    "character": "Neutral.svg",
    "correct": "Nalga o glúteo",
    "options": [
      "Tu vulva (genitales externos femeninos)",
      "Mi barba",
      "Nalga o glúteo"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mis ojos",
    "character": "Neutral.svg",
    "correct": [
      "Nujnuish"
    ],
    "wordBank": [
      "Nujnuish",
      "iishkalyu",
      "mutzinkujku",
      "tuijijtimekayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu lengua",
    "character": "Neutral.svg",
    "correct": [
      "Mutennakayu"
    ],
    "wordBank": [
      "Mutennakayu",
      "innakastanhumiyu",
      "numatashkal",
      "nutannakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su mollera",
    "character": "Neutral.svg",
    "correct": [
      "Itzintew"
    ],
    "wordBank": [
      "Itzintew",
      "inhmapipilishkalyu",
      "nutzuntishyu",
      "muish"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestras amígdalas",
    "character": "Neutral.svg",
    "correct": [
      "Tukakawyu"
    ],
    "wordBank": [
      "Tukakawyu",
      "nuteputzta",
      "ielpajsu",
      "mutentzikaw"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus articulaciones (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmumasalijtuk"
    ],
    "wordBank": [
      "Anmumasalijtuk",
      "nutan",
      "pajpaletia",
      "majkul"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus costillas (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Innakastanhumiyu"
    ],
    "wordBank": [
      "Innakastanhumiyu",
      "iishkalyu",
      "tuijijtimekayu",
      "ijti"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi mandíbula",
    "character": "Neutral.svg",
    "correct": [
      "Nutenhametzkalyu"
    ],
    "wordBank": [
      "Nutenhametzkalyu",
      "tutannakayu",
      "shinach",
      "ipitzajka"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu cintura",
    "character": "Neutral.svg",
    "correct": [
      "Mupitzajka"
    ],
    "wordBank": [
      "Mupitzajka",
      "mukutz",
      "muteputzumiyu",
      "mumapipilsalijka"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su barba (de él)",
    "character": "Neutral.svg",
    "correct": [
      "Ishpajsu"
    ],
    "wordBank": [
      "Ishpajsu",
      "imapipil",
      "metzpan",
      "pajpaletia"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestra manzana de Adán",
    "character": "Neutral.svg",
    "correct": [
      "Tutuskabolajyu"
    ],
    "wordBank": [
      "Tutuskabolajyu",
      "ielpajsu",
      "innakas",
      "tutennakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus encías (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmutannakayu"
    ],
    "wordBank": [
      "Anmutannakayu",
      "tuijijtimekayu",
      "anmukupak",
      "mutzinkujku"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus yemas de los dedos del pie (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inhikshipipilishkalyu"
    ],
    "wordBank": [
      "Inhikshipipilishkalyu",
      "muikshiumiyu",
      "iish",
      "ielpajsu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi entrepierna",
    "character": "Neutral.svg",
    "correct": [
      "Numashak"
    ],
    "wordBank": [
      "Numashak",
      "nutzinteyu",
      "metzpan",
      "ijti"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu sien",
    "character": "Neutral.svg",
    "correct": [
      "Mukwajtzijtzinyu"
    ],
    "wordBank": [
      "Mukwajtzijtzinyu",
      "nutzunhewayu",
      "iishkalyu",
      "tukakawyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su cara (de él/ella)",
    "character": "Neutral.svg",
    "correct": [
      "Iishkalyu"
    ],
    "wordBank": [
      "Iishkalyu",
      "innakas",
      "nutannakayu",
      "nuitztit"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi vello púbico",
    "character": "Neutral.svg",
    "correct": [
      "Numash"
    ],
    "wordBank": [
      "Numash",
      "musiwayu",
      "itenpajsu",
      "mutennakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu vello axilar",
    "character": "Neutral.svg",
    "correct": [
      "Mukushunpajsu"
    ],
    "wordBank": [
      "Mukushunpajsu",
      "ishpajsu",
      "inkamachal",
      "tennakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su vello pectoral (de él)",
    "character": "Neutral.svg",
    "correct": [
      "Ielpajsu"
    ],
    "wordBank": [
      "Ielpajsu",
      "nuweyka",
      "mupitzajka",
      "mutentzikaw"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestros intestinos",
    "character": "Neutral.svg",
    "correct": [
      "Tuijijtimekayu"
    ],
    "wordBank": [
      "Tuijijtimekayu",
      "anmumey",
      "mukushun",
      "muelpajsu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su espinilla (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmuikshiumiyu"
    ],
    "wordBank": [
      "Anmuikshiumiyu",
      "nuesyumekayu",
      "mukushunpajsu",
      "shinach"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus pezones (de ellas)",
    "character": "Neutral.svg",
    "correct": [
      "Inchichiyak"
    ],
    "wordBank": [
      "Inchichiyak",
      "tutuskabolajyu",
      "nuishpajsu",
      "inhmapipilishkalyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi talón",
    "character": "Neutral.svg",
    "correct": [
      "Nutzinteyu",
      "-kshi"
    ],
    "wordBank": [
      "Nutzinteyu",
      "-kshi",
      "ishpajsu",
      "mukutz",
      "ielpajsu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu tobillo",
    "character": "Neutral.svg",
    "correct": [
      "Muish",
      "-kshi"
    ],
    "wordBank": [
      "Muish",
      "-kshi",
      "anmutannakayu",
      "itzintew",
      "kupak"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su cadera (de ella)",
    "character": "Neutral.svg",
    "correct": [
      "Ipitzajka"
    ],
    "wordBank": [
      "Ipitzajka",
      "itzintew",
      "ituijijtimekayu",
      "mukushunpajsu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestro cráneo",
    "character": "Neutral.svg",
    "correct": [
      "Tutzunhumiyu"
    ],
    "wordBank": [
      "Tutzunhumiyu",
      "mutzinkujku",
      "nukamachal",
      "tutennakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su laringe (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmukupak"
    ],
    "wordBank": [
      "Anmukupak",
      "ijti",
      "tutannakayu",
      "tentzikaw"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus glúteos (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inhtzijtzinkamak"
    ],
    "wordBank": [
      "Inhtzijtzinkamak",
      "iishkalyu",
      "majkul",
      "tutennakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi entrepierna",
    "character": "Neutral.svg",
    "correct": [
      "Numashak"
    ],
    "wordBank": [
      "Numashak",
      "tueltapach",
      "ijti",
      "nutzuntekun"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu sien",
    "character": "Neutral.svg",
    "correct": [
      "Mukwajtzijtzinyu"
    ],
    "wordBank": [
      "Mukwajtzijtzinyu",
      "ituijijtimekayu",
      "anmuejekateni",
      "kupak"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus yemas de los dedos de la mano (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inhmapipilishkalyu"
    ],
    "wordBank": [
      "Inhmapipilishkalyu",
      "tennakayu",
      "nuteputzta",
      "nutan"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Estómago.",
    "character": "Neutral.svg",
    "correct": [
      "-ELISHKU"
    ],
    "wordBank": [
      "-ELISHKU",
      "tennakayu",
      "mutankwich",
      "inkamachal"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Laringe.",
    "character": "Neutral.svg",
    "correct": [
      "-KUPAK"
    ],
    "wordBank": [
      "-KUPAK",
      "inhkwatapal",
      "mupitzajka",
      "tennakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Brazo.",
    "character": "Neutral.svg",
    "correct": [
      "-MAJKUL"
    ],
    "wordBank": [
      "-MAJKUL",
      "tennakayu",
      "ishtzujtzunyu",
      "imapipilsalijka"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Regazo (espacio sobre los muslos al sentarse).",
    "character": "Neutral.svg",
    "correct": [
      "-METZPAN"
    ],
    "wordBank": [
      "-METZPAN",
      "imapipil",
      "muyak",
      "kutz"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Genitales internos (testículos u ovarios).",
    "character": "Neutral.svg",
    "correct": [
      "-SHINACH"
    ],
    "wordBank": [
      "-SHINACH",
      "anmuewayu",
      "nueltapach",
      "muyak"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mentón o barbilla.",
    "character": "Neutral.svg",
    "correct": [
      "-TENTZIKAW"
    ],
    "wordBank": [
      "-TENTZIKAW",
      "tennakayu",
      "nutzunhumiyu",
      "ituijijtimekayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Cara o rostro.",
    "character": "Neutral.svg",
    "correct": [
      "-ISHKALYU"
    ],
    "wordBank": [
      "-ISHKALYU",
      "nuitztit",
      "tutuskabolajyu",
      "imapipil"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Pantorrilla.",
    "character": "Neutral.svg",
    "correct": [
      "-KUTZ"
    ],
    "wordBank": [
      "-KUTZ",
      "numatashkal",
      "ishkalyu",
      "inkamachal"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Abdomen.",
    "character": "Neutral.svg",
    "correct": [
      "-IJTI"
    ],
    "wordBank": [
      "-IJTI",
      "anmuejekateni",
      "iishkalyu",
      "nutan"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Lengua.",
    "character": "Neutral.svg",
    "correct": [
      "-TENNAKAYU"
    ],
    "wordBank": [
      "-TENNAKAYU",
      "nutannakayu",
      "nutan",
      "numashak"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "¿Dónde se encuentra ne esyu (sangre)?.",
    "character": "Neutral.svg",
    "correct": "Tik ne tuweyka",
    "options": [
      "Tik ne umiyu",
      "Tik ne tuweyka",
      "kejekua (probar)"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "Parte usada específicamente para oler (ajnekua):.",
    "character": "Neutral.svg",
    "correct": "-yak",
    "options": [
      "-tzunkal",
      "-yak",
      "-nakas"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "Parte muscular usada para probar (kejekua) sabores:.",
    "character": "Neutral.svg",
    "correct": "-tennakayu",
    "options": [
      "-tenpajsu",
      "Inhikshitashkal",
      "-tennakayu"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "Prefijo posesivo para decir \"Su oreja (de ellos)\":.",
    "character": "Neutral.svg",
    "correct": "In-",
    "options": [
      "In-",
      "Ituijijtimekayu",
      "Innakas"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "El término médico para el \"hígado\" es:.",
    "character": "Neutral.svg",
    "correct": "-eltapach",
    "options": [
      "Nueltapach",
      "-eltapach",
      "-elishku"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "La \"manzana de Adán\" se conoce como:.",
    "character": "Neutral.svg",
    "correct": "-tuskabolajyu",
    "options": [
      "-tuskabolajyu",
      "-kechkuyu",
      "Mukutz"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "El plural de \"mis manos\" usando reduplicación es:.",
    "character": "Neutral.svg",
    "correct": "numejmey",
    "options": [
      "Musiwayu",
      "numey",
      "numejmey"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "Las \"pestañas\" o \"cejas\" se dicen:.",
    "character": "Neutral.svg",
    "correct": "-ishtzujtzunyu",
    "options": [
      "eltapach",
      "-ishtzujtzunyu",
      "-ishpajsu"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "¿Cuál es el término para la articulación del \"hombro\"?.",
    "character": "Neutral.svg",
    "correct": "-kechtan",
    "options": [
      "-kechtan",
      "-makechtan",
      "Anmuikshiumiyu"
    ]
  },
  {
    "type": "select_translation",
    "stage": 8,
    "prompt": "La \"encía\" en Nawat es:.",
    "character": "Neutral.svg",
    "correct": "-tannakayu",
    "options": [
      "-tan",
      "Numashak",
      "-tannakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi vena.",
    "character": "Neutral.svg",
    "correct": [
      "Nuesyumekayu"
    ],
    "wordBank": [
      "Nuesyumekayu",
      "anmumasalijtuk",
      "innakastanhumiyu",
      "tuijijtimekayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu nudillo.",
    "character": "Neutral.svg",
    "correct": [
      "Mumapipilsalijka"
    ],
    "wordBank": [
      "Mumapipilsalijka",
      "ituijijtimekayu",
      "nueltapach",
      "ishtzujtzunyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su intestino (de él o ella).",
    "character": "Neutral.svg",
    "correct": [
      "Ituijijtimekayu"
    ],
    "wordBank": [
      "Ituijijtimekayu",
      "muyak",
      "muelpajsu",
      "nutzuntishyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestro hombro.",
    "character": "Neutral.svg",
    "correct": [
      "Tukechtan"
    ],
    "wordBank": [
      "Tukechtan",
      "majkul",
      "anmuish",
      "anmushikmekayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus pulmones (de ustedes).",
    "character": "Neutral.svg",
    "correct": [
      "Anmuejekateni",
      "-pajpaletia"
    ],
    "wordBank": [
      "Anmuejekateni",
      "-pajpaletia",
      "ipitzajka",
      "inhejekateni",
      "nujnuish"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus frentes (de ellos).",
    "character": "Neutral.svg",
    "correct": [
      "Inhkwatapal"
    ],
    "wordBank": [
      "Inhkwatapal",
      "inhmapipilishkalyu",
      "innakas",
      "mutentzikaw"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi cráneo.",
    "character": "Neutral.svg",
    "correct": [
      "Nutzunhumiyu"
    ],
    "wordBank": [
      "Nutzunhumiyu",
      "anmuewayu",
      "tueltapach",
      "nuteputzumiyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu axila.",
    "character": "Neutral.svg",
    "correct": [
      "Mukushun"
    ],
    "wordBank": [
      "Mukushun",
      "tueltapach",
      "nuitztit",
      "anmuish"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su bigote (de él).",
    "character": "Neutral.svg",
    "correct": [
      "Itenpajsu"
    ],
    "wordBank": [
      "Itenpajsu",
      "nuitztit",
      "tuijijtimekayu",
      "majkul"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Un dedo de mi mano.",
    "character": "Neutral.svg",
    "correct": [
      "Se",
      "numapipil"
    ],
    "wordBank": [
      "Se",
      "numapipil",
      "iish",
      "tukshi",
      "itenpajsu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tobillo.",
    "character": "Neutral.svg",
    "correct": [
      "Ish",
      "-kshi"
    ],
    "wordBank": [
      "Ish",
      "-kshi",
      "anmukupak",
      "itewajka",
      "nuesyumekayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi columna vertebral.",
    "character": "Neutral.svg",
    "correct": [
      "Nuteputzumiyu"
    ],
    "wordBank": [
      "Nuteputzumiyu",
      "nukamachal",
      "numash",
      "tukshi"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus yemas de los dedos de la mano (de ellos).",
    "character": "Neutral.svg",
    "correct": [
      "Inhmapipilishkalyu"
    ],
    "wordBank": [
      "Inhmapipilishkalyu",
      "itzintew",
      "numatashkal",
      "inhtzijtzinkamak"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu vulva (genitales externos femeninos).",
    "character": "Neutral.svg",
    "correct": [
      "Musiwayu"
    ],
    "wordBank": [
      "Musiwayu",
      "nuitztit",
      "ishkalyu",
      "anmutannakayu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestra lengua.",
    "character": "Neutral.svg",
    "correct": [
      "Tutennakayu"
    ],
    "wordBank": [
      "Tutennakayu",
      "numapipil",
      "numashak",
      "ishkalyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi mejilla",
    "character": "Neutral.svg",
    "correct": [
      "Nukamachal."
    ],
    "wordBank": [
      "Nukamachal.",
      "tukakawyu",
      "mukushunpajsu",
      "nuitztit"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu garganta",
    "character": "Neutral.svg",
    "correct": [
      "Mutuskak."
    ],
    "wordBank": [
      "Mutuskak.",
      "muelpajsu",
      "nutzinteyu",
      "tutuskabolajyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su cintura (de ella)",
    "character": "Neutral.svg",
    "correct": [
      "Ipitzajka."
    ],
    "wordBank": [
      "Ipitzajka.",
      "anmutannakayu",
      "mutuskak",
      "mukutz"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestros huesos",
    "character": "Neutral.svg",
    "correct": [
      "Tuumiyu."
    ],
    "wordBank": [
      "Tuumiyu.",
      "ijti",
      "anmukupak",
      "innakas"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su tobillo (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmuish",
      "-kshi."
    ],
    "wordBank": [
      "Anmuish",
      "-kshi.",
      "muyak",
      "tukshi",
      "tutzunhumiyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus plantas de los pies (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inhikshitashkal."
    ],
    "wordBank": [
      "Inhikshitashkal.",
      "anmushikmekayu",
      "ituijijtimekayu",
      "ijti"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi barba",
    "character": "Neutral.svg",
    "correct": [
      "Nuishpajsu."
    ],
    "wordBank": [
      "Nuishpajsu.",
      "nuteputzta",
      "inhikshipipil",
      "imapipil"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu sien",
    "character": "Neutral.svg",
    "correct": [
      "Mukwajtzijtzinyu."
    ],
    "wordBank": [
      "Mukwajtzijtzinyu.",
      "numash",
      "nutzuntishyu",
      "iishkalyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su rodilla (de él o ella)",
    "character": "Neutral.svg",
    "correct": [
      "Itewajka."
    ],
    "wordBank": [
      "Itewajka.",
      "itewajka",
      "itenpajsu",
      "tukakawyu"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestro hígado",
    "character": "Neutral.svg",
    "correct": [
      "Tueltapach."
    ],
    "wordBank": [
      "Tueltapach.",
      "metzpan",
      "inijijtimekayu",
      "inhtzijtzinkamak"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Su talón (de ustedes)",
    "character": "Neutral.svg",
    "correct": [
      "Anmutzinteyu",
      "-kshi."
    ],
    "wordBank": [
      "Anmutzinteyu",
      "-kshi.",
      "inhkwatapal",
      "inhikshitashkal",
      "anmumey"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Sus pulmones (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inhejekateni",
      "-pajpaletia."
    ],
    "wordBank": [
      "Inhejekateni",
      "-pajpaletia.",
      "nuteputzta",
      "tukakawyu",
      "inhkwatapal"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Mi cerebro",
    "character": "Neutral.svg",
    "correct": [
      "Nutzuntishyu."
    ],
    "wordBank": [
      "Nutzuntishyu.",
      "nuteputzta",
      "itenpajsu",
      "numashak"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Tu vello pectoral",
    "character": "Neutral.svg",
    "correct": [
      "Muelpajsu."
    ],
    "wordBank": [
      "Muelpajsu.",
      "mutuskak",
      "elishku",
      "nuteputzta"
    ]
  },
  {
    "type": "translate",
    "stage": 8,
    "prompt": "Nuestro corazón",
    "character": "Neutral.svg",
    "correct": [
      "Tuyulu."
    ],
    "wordBank": [
      "Tuyulu.",
      "tukechtan",
      "imapipilsalijka",
      "imapipil"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Médico/a",
    "character": "Neutral.svg",
    "correct": [
      "Tapajtiani"
    ],
    "wordBank": [
      "Tapajtiani",
      "o",
      "tamachtia",
      "tawikaniapakani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Guardián/Policía",
    "character": "Neutral.svg",
    "correct": [
      "Tajpiani"
    ],
    "wordBank": [
      "Tajpiani",
      "atutunnamakaluyan",
      "tajkakchiwanimet",
      "techan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Jefe/Jefa",
    "character": "Neutral.svg",
    "correct": [
      "Tatuktiani"
    ],
    "wordBank": [
      "Tatuktiani",
      "taichtekini",
      "ka",
      "tamalchiwaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Conductor/Transportista",
    "character": "Neutral.svg",
    "correct": [
      "Tawikani"
    ],
    "wordBank": [
      "Tawikani",
      "tamachtia",
      "tiawit",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Payaso",
    "character": "Neutral.svg",
    "correct": [
      "Tapakiltiani"
    ],
    "wordBank": [
      "Tapakiltiani",
      "tawikani",
      "tawawasuani",
      "nimutaluani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Bailarín/a",
    "character": "Neutral.svg",
    "correct": [
      "Mijtutiani"
    ],
    "wordBank": [
      "Mijtutiani",
      "tajtakwikanimet",
      "yek",
      "tiawit"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Corredor/a",
    "character": "Neutral.svg",
    "correct": [
      "Mutaluani"
    ],
    "wordBank": [
      "Mutaluani",
      "antajtamananimet",
      "shiwit",
      "tamachtiluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Pupusera",
    "character": "Neutral.svg",
    "correct": [
      "Kukumutzinchiwani"
    ],
    "wordBank": [
      "Kukumutzinchiwani",
      "pashaluani",
      "tekitinimet",
      "mumachtiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Albañil/Constructor",
    "character": "Neutral.svg",
    "correct": [
      "Kalchiwani"
    ],
    "wordBank": [
      "Kalchiwani",
      "tatzutzunani",
      "tejemet",
      "tamalchiwaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Tortillera",
    "character": "Neutral.svg",
    "correct": [
      "Tashkaluani"
    ],
    "wordBank": [
      "Tashkaluani",
      "ka",
      "tashimaluyan",
      "hector"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "La fórmula para crear una profesión desde un verbo transitivo es: ta + verbo + ____.",
    "character": "Neutral.svg",
    "correct": "-ni",
    "options": [
      "Taiwan",
      "-ni",
      "-lis"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 9,
    "before": "Naja",
    "after": "tamanani. (Yo soy cocinero).",
    "correct": "ni",
    "options": [
      "ni",
      "ti",
      "Ulinkwikwilchiwalis"
    ],
    "hint": ""
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "¿Cómo se dice \"Dibujante\"? (Viene de *Takwikwilua* - dibujar).",
    "character": "Neutral.svg",
    "correct": "Takwikwiluani",
    "options": [
      "Tamachtiani",
      "Takwikwiluani",
      "Tawawasuani"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 9,
    "before": "Anmejemet",
    "after": "antajtamachtianimet. (Ustedes son maestros).",
    "correct": "an + plural",
    "options": [
      "Yejemet pashaluanimet",
      "an + plural",
      "Naja nutukey Héctor wan naja nitamachtiani"
    ],
    "hint": ""
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Un \"Hacedor de sillas\" es un:",
    "character": "Neutral.svg",
    "correct": "Tzintalijkachiwani",
    "options": [
      "Tzintalijkachiwani",
      "Kakchiwani",
      "ni"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "\"Tawawasuani\" significa:",
    "character": "Neutral.svg",
    "correct": "Escritor/a",
    "options": [
      "Lugar donde venden carros",
      "Lugar donde se trabaja",
      "Escritor/a"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 9,
    "before": "Tejemet",
    "after": "titajtamachtianimet. (Nosotros somos maestros).",
    "correct": "ti + plural",
    "options": [
      "an + plural",
      "(sin prefijo)",
      "ti + plural"
    ],
    "hint": ""
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "¿Cuál es el agentivo para un verbo intransitivo (como *Tekiti*)?",
    "character": "Neutral.svg",
    "correct": "Tekitini",
    "options": [
      "Tatzutzunani",
      "Tatekitini",
      "Tekitini"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Si *Tatzuma* es coser, ¿qué es un \"Tatzumani\"?",
    "character": "Neutral.svg",
    "correct": "Costurero/a",
    "options": [
      "Costurero/a",
      "Él es un pescador",
      "Él es un matador / asesino"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "\"Tawikaniapakani\" es quien se dedica a:",
    "character": "Neutral.svg",
    "correct": "Lavar carros",
    "options": [
      "Tú eres nahuahablante",
      "Lavar carros",
      "Conducir carros"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "\"Tamiktiani\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "Asesino/Matador",
    "options": [
      "Persona que hace de todo en el trabajo",
      "Asesino/Matador",
      "Yo soy trabajador"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El prefijo pronominal indefinido usado en profesiones es:",
    "character": "Neutral.svg",
    "correct": "ta-",
    "options": [
      "Tajkalchiwanimet",
      "ta-",
      "ni-"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "\"Tanajnawatiani\" es un:",
    "character": "Neutral.svg",
    "correct": "Consejero",
    "options": [
      "Jefe",
      "Contador",
      "Consejero"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "\"Taekchiwani\" significa:",
    "character": "Neutral.svg",
    "correct": "Arreglador/Reparador",
    "options": [
      "Naja nitashkaluani",
      "Arreglador/Reparador",
      "Yaja se tanamakani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Mi nombre es Héctor y yo soy maestro.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nutukey",
      "Héctor",
      "wan",
      "naja",
      "nitamachtiani."
    ],
    "wordBank": [
      "Naja",
      "nutukey",
      "Héctor",
      "wan",
      "naja",
      "nitamachtiani.",
      "nitashkaluani",
      "tapakaluyan",
      "anmejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ella es una vendedora.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "tanamakani."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "tanamakani.",
      "kalchiwani",
      "titashimani",
      "nimutaluani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Lavandera.",
    "character": "Neutral.svg",
    "correct": [
      "Tapakani"
    ],
    "wordBank": [
      "Tapakani",
      "titajtakwikanimet",
      "tapajtiani",
      "tamalchiwaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Estudiante.",
    "character": "Neutral.svg",
    "correct": [
      "Mumachtiani"
    ],
    "wordBank": [
      "Mumachtiani",
      "nitamanani",
      "pashaluani",
      "tanajnawatiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Turista / Viajero.",
    "character": "Neutral.svg",
    "correct": [
      "Pashaluani"
    ],
    "wordBank": [
      "Pashaluani",
      "tekitiluyan",
      "se",
      "anmejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Cantante.",
    "character": "Neutral.svg",
    "correct": [
      "Takwikani"
    ],
    "wordBank": [
      "Takwikani",
      "tajtamachtianimet",
      "tamalchiwani",
      "titajtamananimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Barbero.",
    "character": "Neutral.svg",
    "correct": [
      "Tashimani"
    ],
    "wordBank": [
      "Tashimani",
      "tamalchiwaluyan",
      "ti",
      "kukumutzinchiwani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ayudante / Asistente / Abogado.",
    "character": "Neutral.svg",
    "correct": [
      "Tapalewiani"
    ],
    "wordBank": [
      "Tapalewiani",
      "tatzutzunani",
      "takwaluyan",
      "tawawasuani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Sembrador.",
    "character": "Neutral.svg",
    "correct": [
      "Tatukani"
    ],
    "wordBank": [
      "Tatukani",
      "ni",
      "pual",
      "techan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Contador.",
    "character": "Neutral.svg",
    "correct": [
      "Tapuani"
    ],
    "wordBank": [
      "Tapuani",
      "kalchiwani",
      "mawiltiluyan",
      "ti"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ladrón / Ladrona.",
    "character": "Neutral.svg",
    "correct": [
      "Taichtekini"
    ],
    "wordBank": [
      "Taichtekini",
      "mumachtiani",
      "tekitini",
      "ka"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Hacedor de tortillas.",
    "character": "Neutral.svg",
    "correct": [
      "Tamalchiwani"
    ],
    "wordBank": [
      "Tamalchiwani",
      "nimumachtiani",
      "juana",
      "taichtekini"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Zapatero.",
    "character": "Neutral.svg",
    "correct": [
      "Kakchiwani"
    ],
    "wordBank": [
      "Kakchiwani",
      "yejemet",
      "tejemet",
      "tekiti"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Hacedor de comales",
    "character": "Neutral.svg",
    "correct": [
      "Kumalchiwani."
    ],
    "wordBank": [
      "Kumalchiwani.",
      "kumalchiwani",
      "atutunnamakaluyan",
      "ti"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Maestra",
    "character": "Neutral.svg",
    "correct": [
      "Tamachtiani."
    ],
    "wordBank": [
      "Tamachtiani.",
      "hector",
      "tejemet",
      "kalpajti"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy médico.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitapajtiani."
    ],
    "wordBank": [
      "Naja",
      "nitapajtiani.",
      "tejemet",
      "tawikaninamakaluyan",
      "titanajnawatiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Tú eres un consejero.",
    "character": "Neutral.svg",
    "correct": [
      "Taja",
      "titanajnawatiani."
    ],
    "wordBank": [
      "Taja",
      "titanajnawatiani.",
      "kakchiwaluyan",
      "techan",
      "mijtutiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Él es un payaso.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "tapakiltiani."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "tapakiltiani.",
      "yejemet",
      "tamiktiani",
      "kaltapajtiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Nosotros somos trabajadores.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "titajtekitinimet."
    ],
    "wordBank": [
      "Tejemet",
      "titajtekitinimet.",
      "tashimani",
      "tapakani",
      "nikakchiwani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ustedes son cocineros.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "antajtamananimet."
    ],
    "wordBank": [
      "Anmejemet",
      "antajtamananimet.",
      "nakawnamakaluyan",
      "se",
      "shiwit"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ellos son albañiles.",
    "character": "Neutral.svg",
    "correct": [
      "Yejemet",
      "tajkalchiwanimet."
    ],
    "wordBank": [
      "Yejemet",
      "tajkalchiwanimet.",
      "tanamakani",
      "tamachtiluyan",
      "techan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Hacedor de pupusas",
    "character": "Neutral.svg",
    "correct": [
      "Kukumutzinchiwani."
    ],
    "wordBank": [
      "Kukumutzinchiwani.",
      "nikpia",
      "nitapajtiani",
      "kukumutzinchiwani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Nahuahablante",
    "character": "Neutral.svg",
    "correct": [
      "Nawatajtaketzani."
    ],
    "wordBank": [
      "Nawatajtaketzani.",
      "kalpajti",
      "kukumutzinchiwani",
      "tajkakchiwanimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Viajero / Turista",
    "character": "Neutral.svg",
    "correct": [
      "Pashaluani."
    ],
    "wordBank": [
      "Pashaluani.",
      "kakchiwani",
      "kukumutzinchiwani",
      "tamachtiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Músico (de percusión)",
    "character": "Neutral.svg",
    "correct": [
      "Tatzutzunani."
    ],
    "wordBank": [
      "Tatzutzunani.",
      "tajtakwikanimet",
      "kakchiwani",
      "o"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Cocinero/a",
    "character": "Neutral.svg",
    "correct": [
      "Tamanani"
    ],
    "wordBank": [
      "Tamanani",
      "tashkaluani",
      "nitamanani",
      "patricia"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Cantante",
    "character": "Neutral.svg",
    "correct": [
      "Takwikani"
    ],
    "wordBank": [
      "Takwikani",
      "kakchiwaluyan",
      "kumalchiwani",
      "yek"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Dibujante / Pintor",
    "character": "Neutral.svg",
    "correct": [
      "Takwikwiluani"
    ],
    "wordBank": [
      "Takwikwiluani",
      "tamanani",
      "tenhapan",
      "nitamanani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Costurero/a / Sastre",
    "character": "Neutral.svg",
    "correct": [
      "Tatzumani"
    ],
    "wordBank": [
      "Tatzumani",
      "titajtakwikanimet",
      "kumalchiwani",
      "tajtakwikanimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Barbero",
    "character": "Neutral.svg",
    "correct": [
      "Tashimani"
    ],
    "wordBank": [
      "Tashimani",
      "nitapajtiani",
      "nitajpiani",
      "kumalchiwani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Estudiante",
    "character": "Neutral.svg",
    "correct": [
      "Mumachtiani"
    ],
    "wordBank": [
      "Mumachtiani",
      "sonchiwani",
      "tiawit",
      "tashimani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Bailarín/a",
    "character": "Neutral.svg",
    "correct": [
      "Mijtutiani"
    ],
    "wordBank": [
      "Mijtutiani",
      "hector",
      "tatuktiani",
      "juana"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Turista / Viajero",
    "character": "Neutral.svg",
    "correct": [
      "Pashaluani"
    ],
    "wordBank": [
      "Pashaluani",
      "tekitini",
      "antajpianimet",
      "titashimani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Trabajador",
    "character": "Neutral.svg",
    "correct": [
      "Tekitini"
    ],
    "wordBank": [
      "Tekitini",
      "tajtamachtianimet",
      "nitamanani",
      "nutukey"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Guardián / Policía",
    "character": "Neutral.svg",
    "correct": [
      "Tajpiani"
    ],
    "wordBank": [
      "Tajpiani",
      "tashimaluyan",
      "kumalchiwani",
      "tapajtiani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "¿Cuál es el sufijo que indica \"una persona que se dedica a hacer algo\"?",
    "character": "Neutral.svg",
    "correct": "-ni",
    "options": [
      "-ni",
      "Taiwan",
      "-lis"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 9,
    "before": "Naja",
    "after": "mumachtiani. (Yo soy estudiante)",
    "correct": "ni",
    "options": [
      "ni",
      "ti",
      "Nakawnamakaluyan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 9,
    "before": "Yaja se",
    "after": ". (Él es un ladrón)",
    "correct": "taichtekini",
    "options": [
      "taichtekini",
      "tamiktiani",
      "Mawiltiluyan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 9,
    "before": "Tejemet",
    "after": "titajtamachtianimet. (Nosotros somos maestros)",
    "correct": "ti + plural",
    "options": [
      "ti + plural",
      "Habla Nawat",
      "an + plural"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 9,
    "before": "Anmejemet",
    "after": "antajnamakanimet. (Ustedes son vendedores)",
    "correct": "an + plural",
    "options": [
      "ti + plural",
      "an + plural",
      "Naja nitamachtiani wan naja nikpia se pual chikwey shiwit"
    ],
    "hint": ""
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Un \"hacedor de comales\" es un:",
    "character": "Neutral.svg",
    "correct": "kumalchiwani",
    "options": [
      "kumalchiwani",
      "ti",
      "tamalchiwani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Un \"lavador de carros\" se llama:",
    "character": "Neutral.svg",
    "correct": "tawikaniapakani",
    "options": [
      "tawikaninamaka",
      "Kumalchiwani",
      "tawikaniapakani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El verbo *Tekiti* (trabajar) utiliza la fórmula de verbo:",
    "character": "Neutral.svg",
    "correct": "Intransitivo",
    "options": [
      "Intransitivo",
      "Transitivo",
      "-met"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "La fórmula *ta* + *machtia* (enseñar) + *ni* crea el neologismo:",
    "character": "Neutral.svg",
    "correct": "tamachtiani",
    "options": [
      "tamachtiani",
      "tawikaninamaka",
      "mumachtiani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "*Tatukani* es la profesión de quien se dedica a:",
    "character": "Neutral.svg",
    "correct": "Sembrar",
    "options": [
      "Construir",
      "Sembrar",
      "Mutaluani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Un *tanajnawatiani* es un:",
    "character": "Neutral.svg",
    "correct": "Consejero",
    "options": [
      "Sembrador",
      "Consejero",
      "Escritor"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "*Tapuani* es la profesión de:",
    "character": "Neutral.svg",
    "correct": "Contador",
    "options": [
      "Contador",
      "Estudiante",
      "Payaso"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "*Tawikani* puede traducirse como bus o como:",
    "character": "Neutral.svg",
    "correct": "Conductor / Transportista",
    "options": [
      "Viajero / Turista",
      "Lugar donde se come",
      "Conductor / Transportista"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Un *tzintalijkachiwani* fabrica específicamente:",
    "character": "Neutral.svg",
    "correct": "Sillas",
    "options": [
      "Tajpiani",
      "Michin",
      "Sillas"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El plural del trabajador (*tekitini*) con reduplicación es:",
    "character": "Neutral.svg",
    "correct": "tajtekitinimet",
    "options": [
      "tekitinimet",
      "tajtekitinimet",
      "Tapajtiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Él es un jefe.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "tatuktiani."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "tatuktiani.",
      "titanajnawatiani",
      "tajtamachtianimet",
      "tamachtiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy maestro.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitamachtiani."
    ],
    "wordBank": [
      "Naja",
      "nitamachtiani.",
      "tapuani",
      "nitashimani",
      "yaja"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ustedes son guardianes/policías.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "antajpianimet."
    ],
    "wordBank": [
      "Anmejemet",
      "antajpianimet.",
      "tanajnawatiani",
      "nutukey",
      "tajkalchiwanimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ellos son turistas/viajeros.",
    "character": "Neutral.svg",
    "correct": [
      "Yejemet",
      "pashaluanimet."
    ],
    "wordBank": [
      "Yejemet",
      "pashaluanimet.",
      "tamalchiwani",
      "takwikwiluani",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Mi nombre es Patricia y soy cocinera.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nutukey",
      "Patricia",
      "wan",
      "naja",
      "nitamanani."
    ],
    "wordBank": [
      "Naja",
      "nutukey",
      "Patricia",
      "wan",
      "naja",
      "nitamanani.",
      "tapajtiani",
      "tashijshikuani",
      "tapakani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ladrón.",
    "character": "Neutral.svg",
    "correct": [
      "Taichtekini"
    ],
    "wordBank": [
      "Taichtekini",
      "ni",
      "wan",
      "mijtutiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Lavandera.",
    "character": "Neutral.svg",
    "correct": [
      "Tapakani"
    ],
    "wordBank": [
      "Tapakani",
      "nimutaluani",
      "tajpiani",
      "tamiktiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Corredor.",
    "character": "Neutral.svg",
    "correct": [
      "Mutaluani"
    ],
    "wordBank": [
      "Mutaluani",
      "nunan",
      "yaja",
      "shiwit"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Payaso.",
    "character": "Neutral.svg",
    "correct": [
      "Tapakiltiani"
    ],
    "wordBank": [
      "Tapakiltiani",
      "yejemet",
      "tekitiluyan",
      "taselej"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Consejero.",
    "character": "Neutral.svg",
    "correct": [
      "Tanajnawatiani"
    ],
    "wordBank": [
      "Tanajnawatiani",
      "chikwey",
      "tatzutzunani",
      "nawatajtaketzani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Escritor.",
    "character": "Neutral.svg",
    "correct": [
      "Tawawasuani"
    ],
    "wordBank": [
      "Tawawasuani",
      "taichtekini",
      "taselej",
      "titanajnawatiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ayudante / Asistente / Abogado.",
    "character": "Neutral.svg",
    "correct": [
      "Tapalewiani"
    ],
    "wordBank": [
      "Tapalewiani",
      "titajtakwikanimet",
      "kalchiwani",
      "nimutaluani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Dibujante.",
    "character": "Neutral.svg",
    "correct": [
      "Takwikwiluani"
    ],
    "wordBank": [
      "Takwikwiluani",
      "takwaluyan",
      "chikwey",
      "se"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy zapatero.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nikakchiwani."
    ],
    "wordBank": [
      "Naja",
      "nikakchiwani.",
      "wan",
      "nitashimani",
      "taselej"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Hacedora de tortillas.",
    "character": "Neutral.svg",
    "correct": [
      "Tashkaluani",
      "(o",
      "tamalchiwani)."
    ],
    "wordBank": [
      "Tashkaluani",
      "(o",
      "tamalchiwani).",
      "takwikani",
      "tamachtiani",
      "tatzutzunani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Nosotros somos cantantes.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "titajtakwikanimet."
    ],
    "wordBank": [
      "Tejemet",
      "titajtakwikanimet.",
      "tawikaniapakani",
      "titajtakwikanimet",
      "antajtamananimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ella es costurera.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "tatzumani."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "tatzumani.",
      "nutukey",
      "nitapajtiani",
      "tashimaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Tú eres barbero.",
    "character": "Neutral.svg",
    "correct": [
      "Taja",
      "titashimani."
    ],
    "wordBank": [
      "Taja",
      "titashimani.",
      "mijtutiani",
      "nikpia",
      "anmejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Albañil / Constructor.",
    "character": "Neutral.svg",
    "correct": [
      "Kalchiwani."
    ],
    "wordBank": [
      "Kalchiwani.",
      "tamachtia",
      "nakawnamakaluyan",
      "tajpiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Hacedora de pupusas.",
    "character": "Neutral.svg",
    "correct": [
      "Kukumutzinchiwani."
    ],
    "wordBank": [
      "Kukumutzinchiwani.",
      "nutuktiani",
      "dibujar",
      "nawatajtaketzani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Médico/a.",
    "character": "Neutral.svg",
    "correct": [
      "Tapajtiani."
    ],
    "wordBank": [
      "Tapajtiani.",
      "kakchiwaluyan",
      "tejemet",
      "tik"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Maestro/a.",
    "character": "Neutral.svg",
    "correct": [
      "Tamachtiani."
    ],
    "wordBank": [
      "Tamachtiani.",
      "tekitiluyan",
      "tamanani",
      "takwikwiluani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Sastre / Costurero.",
    "character": "Neutral.svg",
    "correct": [
      "Tatzumani."
    ],
    "wordBank": [
      "Tatzumani.",
      "o",
      "tekitinimet",
      "titajtamananimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ayudante / Asistente.",
    "character": "Neutral.svg",
    "correct": [
      "Tapalewiani."
    ],
    "wordBank": [
      "Tapalewiani.",
      "tapuani",
      "tasajsakani",
      "tamiktiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Vendedora.",
    "character": "Neutral.svg",
    "correct": [
      "Tanamakani."
    ],
    "wordBank": [
      "Tanamakani.",
      "tajkalchiwanimet",
      "tawawasuani",
      "tamalchiwaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Pescador",
    "character": "Neutral.svg",
    "correct": [
      "Michinhitzkiani"
    ],
    "wordBank": [
      "Michinhitzkiani",
      "chikwey",
      "kakchiwani",
      "atutunnamakaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Músico",
    "character": "Neutral.svg",
    "correct": [
      "Sonchiwani"
    ],
    "wordBank": [
      "Sonchiwani",
      "takwikwiluani",
      "mawiltiluyan",
      "anmejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Cargador / Acarreador",
    "character": "Neutral.svg",
    "correct": [
      "Tasajsakani"
    ],
    "wordBank": [
      "Tasajsakani",
      "nitashkaluani",
      "tatuktiani",
      "takwikani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Zapatero",
    "character": "Neutral.svg",
    "correct": [
      "Kakchiwani"
    ],
    "wordBank": [
      "Kakchiwani",
      "techan",
      "tapuani",
      "michinhitzkiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Persona que hace de todo en el trabajo",
    "character": "Neutral.svg",
    "correct": [
      "Taselej"
    ],
    "wordBank": [
      "Taselej",
      "pashaluani",
      "tamalchiwaluyan",
      "tenhapan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Jugador",
    "character": "Neutral.svg",
    "correct": [
      "Mawiltiani"
    ],
    "wordBank": [
      "Mawiltiani",
      "tekitinimet",
      "pual",
      "tekiti"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Lavador de carros",
    "character": "Neutral.svg",
    "correct": [
      "Tawikaniapakani"
    ],
    "wordBank": [
      "Tawikaniapakani",
      "nimumachtiani",
      "techan",
      "kaltapajtiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Hacedor de comales",
    "character": "Neutral.svg",
    "correct": [
      "Kumalchiwani"
    ],
    "wordBank": [
      "Kumalchiwani",
      "nimumachtiani",
      "mijtutiani",
      "ni"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Músico de percusión",
    "character": "Neutral.svg",
    "correct": [
      "Tatzutzunani"
    ],
    "wordBank": [
      "Tatzutzunani",
      "kalpajti",
      "tanamakani",
      "tawikaninamakaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Mentiroso",
    "character": "Neutral.svg",
    "correct": [
      "Tashijshikuani"
    ],
    "wordBank": [
      "Tashijshikuani",
      "tamachtia",
      "kumalchiwani",
      "michinhitzkiani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El plural de Tamachtiani usando reduplicación es:",
    "character": "Neutral.svg",
    "correct": "Tajtamachtianimet",
    "options": [
      "Tajtamachtianimet",
      "Tamachtianimet",
      "Tashkaluyan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Un \"hacedor de sillas\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "Tzintalijkachiwani",
    "options": [
      "Taselej",
      "Tzintalijkachiwani",
      "Kakchiwani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El prefijo ta- en \"tamanani\" (cocinero) es un:",
    "character": "Neutral.svg",
    "correct": "Prefijo pronominal indefinido",
    "options": [
      "Yejemet tajkalchiwanimet",
      "Sufijo agentivo",
      "Prefijo pronominal indefinido"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "¿Cómo se dice \"bailarín\" si el verbo es *mijtutia* (intransitivo)?",
    "character": "Neutral.svg",
    "correct": "Mijtutiani",
    "options": [
      "Tatuktiani",
      "Mijtutiani",
      "Tamijtutiani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Un \"hacedor de videos\" (cámara de video) se llama:",
    "character": "Neutral.svg",
    "correct": "Ulinkwikwilchiwalis",
    "options": [
      "Takwikwilchiwalis",
      "Ulinkwikwilchiwalis",
      "Kalchiwanimet"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Nawatajtaketzani es quien:",
    "character": "Neutral.svg",
    "correct": "Habla Nawat",
    "options": [
      "Yaja se sonchiwani",
      "Habla Nawat",
      "Yaja se tapakiltiani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Para decir \"vendedor\", usamos el verbo *namaka* (vender) en la fórmula:",
    "character": "Neutral.svg",
    "correct": "ta + namaka + ni",
    "options": [
      "Yejemet pashaluanimet",
      "namaka + lis",
      "ta + namaka + ni"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El plural de Tekitini (trabajador) es:",
    "character": "Neutral.svg",
    "correct": "Tajtekitinimet",
    "options": [
      "Tamanani",
      "Tekitiniwan",
      "Tajtekitinimet"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Un \"dibujante\" o \"pintor\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "Takwikwiluani",
    "options": [
      "Takwikwiluani",
      "Tatukani",
      "Tawawasuani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "¿Qué significa Tapajtia?",
    "character": "Neutral.svg",
    "correct": "Curar",
    "options": [
      "Sillas",
      "Curar",
      "Tekitiniwan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Tajpiani se refiere a:",
    "character": "Neutral.svg",
    "correct": "Un guardián o policía",
    "options": [
      "Un guardián o policía",
      "Un sembrador",
      "Ayudante / Asistente"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El plural de Kalchiwani (albañil) es:",
    "character": "Neutral.svg",
    "correct": "Tajkalchiwanimet",
    "options": [
      "Kalchiwanimet",
      "Tajkalchiwanimet",
      "Tzintalijkachiwani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Si *Tatzuma* es coser, un sastre es un:",
    "character": "Neutral.svg",
    "correct": "Tatzumani",
    "options": [
      "Tatatzumani",
      "Tapakiltiani",
      "Tatzumani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Mumachtiani significa:",
    "character": "Neutral.svg",
    "correct": "El que aprende",
    "options": [
      "Yo soy estudiante",
      "El que aprende",
      "El que enseña"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "La \"Lavadora\" (máquina) se llama:",
    "character": "Neutral.svg",
    "correct": "Tapakalis",
    "options": [
      "ni",
      "Tapakani",
      "Tapakalis"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy trabajador.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "ni",
      "tekitini."
    ],
    "wordBank": [
      "Naja",
      "ni",
      "tekitini.",
      "tamalchiwaluyan",
      "nitamanani",
      "tamachtiluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Tú eres nahuahablante.",
    "character": "Neutral.svg",
    "correct": [
      "Taja",
      "ti",
      "nawatajtaketzani."
    ],
    "wordBank": [
      "Taja",
      "ti",
      "nawatajtaketzani.",
      "techan",
      "titanajnawatiani",
      "se"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ella es una vendedora.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "tanamakani."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "tanamakani.",
      "tawikaniapakani",
      "tiawit",
      "tamachtia"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Nosotros somos maestros.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "ti",
      "tajtamachtianimet."
    ],
    "wordBank": [
      "Tejemet",
      "ti",
      "tajtamachtianimet.",
      "nimumachtiani",
      "an",
      "antajpianimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ustedes son viajeros / turistas.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "an",
      "pashaluanimet."
    ],
    "wordBank": [
      "Anmejemet",
      "an",
      "pashaluanimet.",
      "michinhitzkiani",
      "atutunnamakaluyan",
      "tanamakani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ellos son guardianes.",
    "character": "Neutral.svg",
    "correct": [
      "Yejemet",
      "tajpianimet."
    ],
    "wordBank": [
      "Yejemet",
      "tajpianimet.",
      "pashaluani",
      "tajkalchiwanimet",
      "tapalewiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy tortillera.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitashkaluani."
    ],
    "wordBank": [
      "Naja",
      "nitashkaluani.",
      "hector",
      "antajtakwikanimet",
      "titajtakwikanimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Él es un payaso.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "tapakiltiani."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "tapakiltiani.",
      "tamalchiwaluyan",
      "taja",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Soy maestro y tengo 28 años.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitamachtiani",
      "wan",
      "naja",
      "nikpia",
      "se",
      "pual",
      "chikwey",
      "shiwit."
    ],
    "wordBank": [
      "Naja",
      "nitamachtiani",
      "wan",
      "naja",
      "nikpia",
      "se",
      "pual",
      "chikwey",
      "shiwit.",
      "tapalewiani",
      "tik",
      "tekiti"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Él es un pescador.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "michinhitzkiani."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "michinhitzkiani.",
      "mijtutiani",
      "titanajnawatiani",
      "kalpajti"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Nosotros somos trabajadores.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "titajtekitinimet."
    ],
    "wordBank": [
      "Tejemet",
      "titajtekitinimet.",
      "antajtakwikanimet",
      "nitashkaluani",
      "tanajnawatiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy médico.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitapajtiani."
    ],
    "wordBank": [
      "Naja",
      "nitapajtiani.",
      "hector",
      "titanajnawatiani",
      "tasajsakani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Él es un músico.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "sonchiwani."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "sonchiwani.",
      "ti",
      "nitashimani",
      "tik"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Hacedora de pupusas",
    "character": "Neutral.svg",
    "correct": [
      "Kukumutzinchiwani."
    ],
    "wordBank": [
      "Kukumutzinchiwani.",
      "ni",
      "tamanani",
      "takwikwiluani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy estudiante.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nimumachtiani."
    ],
    "wordBank": [
      "Naja",
      "nimumachtiani.",
      "nimumachtiani",
      "tajpiani",
      "tekitiluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Él es el jefe.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "ne",
      "tatuktiani."
    ],
    "wordBank": [
      "Yaja",
      "ne",
      "tatuktiani.",
      "antajtamananimet",
      "naja",
      "tatuktiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Tú eres un escritor.",
    "character": "Neutral.svg",
    "correct": [
      "Taja",
      "ti",
      "tawawasuani."
    ],
    "wordBank": [
      "Taja",
      "ti",
      "tawawasuani.",
      "takwaluyan",
      "taselej",
      "pashaluanimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Nosotros somos cantantes.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "ti",
      "tajtakwikanimet."
    ],
    "wordBank": [
      "Tejemet",
      "ti",
      "tajtakwikanimet.",
      "yaja",
      "tamiktiani",
      "nutuktiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ustedes son albañiles.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "an",
      "tajkalchiwanimet."
    ],
    "wordBank": [
      "Anmejemet",
      "an",
      "tajkalchiwanimet.",
      "tajtamachtianimet",
      "nitapajtiani",
      "nukumpa"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Él es un ladrón.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "taichtekini."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "taichtekini.",
      "tekitini",
      "an",
      "o"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Mi madre es vendedora.",
    "character": "Neutral.svg",
    "correct": [
      "Nunan",
      "se",
      "tanamakani."
    ],
    "wordBank": [
      "Nunan",
      "se",
      "tanamakani.",
      "tashijshikuani",
      "dibujar",
      "tajtakwikanimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Viajero / Turista",
    "character": "Neutral.svg",
    "correct": [
      "Pashaluani."
    ],
    "wordBank": [
      "Pashaluani.",
      "nitashimani",
      "tashijshikuani",
      "tawawasuani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Hacedor de tortillas",
    "character": "Neutral.svg",
    "correct": [
      "Tamalchiwani."
    ],
    "wordBank": [
      "Tamalchiwani.",
      "titajtekitinimet",
      "nitamanani",
      "tajtamachtianimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy barbero.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitashimani."
    ],
    "wordBank": [
      "Naja",
      "nitashimani.",
      "tekitiluyan",
      "ka",
      "tapajtiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Sembrador",
    "character": "Neutral.svg",
    "correct": [
      "Tatukani."
    ],
    "wordBank": [
      "Tatukani.",
      "titashimani",
      "ne",
      "ni"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Escuela / Lugar donde se enseña.",
    "character": "Neutral.svg",
    "correct": [
      "Tamachtiluyan"
    ],
    "wordBank": [
      "Tamachtiluyan",
      "techan",
      "pual",
      "kumalchiwani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Comedor / Lugar donde se come.",
    "character": "Neutral.svg",
    "correct": [
      "Takwaluyan"
    ],
    "wordBank": [
      "Takwaluyan",
      "tajpiani",
      "antajtamananimet",
      "tatzutzunani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Barbería / Lugar donde se corta el cabello.",
    "character": "Neutral.svg",
    "correct": [
      "Tashimaluyan"
    ],
    "wordBank": [
      "Tashimaluyan",
      "nitamanani",
      "titajtakwikanimet",
      "mawiltiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Oficina / Lugar donde se trabaja.",
    "character": "Neutral.svg",
    "correct": [
      "Tekitiluyan"
    ],
    "wordBank": [
      "Tekitiluyan",
      "titajtamananimet",
      "o",
      "tamalchiwaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Tortillería.",
    "character": "Neutral.svg",
    "correct": [
      "Tamalchiwaluyan"
    ],
    "wordBank": [
      "Tamalchiwaluyan",
      "nitajpiani",
      "tekiti",
      "nitashimani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Reparadora de zapatos.",
    "character": "Neutral.svg",
    "correct": [
      "Kakchiwaluyan"
    ],
    "wordBank": [
      "Kakchiwaluyan",
      "tajtamachtianimet",
      "techan",
      "titashimani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Carnicería.",
    "character": "Neutral.svg",
    "correct": [
      "Nakawnamakaluyan"
    ],
    "wordBank": [
      "Nakawnamakaluyan",
      "nikakchiwani",
      "tajtakwikanimet",
      "mijtutiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Cafetería.",
    "character": "Neutral.svg",
    "correct": [
      "Atutunnamakaluyan"
    ],
    "wordBank": [
      "Atutunnamakaluyan",
      "anmejemet",
      "tashijshikuani",
      "tawikani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Lugar de juegos.",
    "character": "Neutral.svg",
    "correct": [
      "Mawiltiluyan"
    ],
    "wordBank": [
      "Mawiltiluyan",
      "yaja",
      "tawawasuani",
      "tenhapan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Lavadero.",
    "character": "Neutral.svg",
    "correct": [
      "Tapakaluyan"
    ],
    "wordBank": [
      "Tapakaluyan",
      "takwikani",
      "nitamanani",
      "tamanani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El lugar donde se lee (Amatachia) se llama:",
    "character": "Neutral.svg",
    "correct": "Amatachialuyan",
    "options": [
      "Curar",
      "Amatachialuyan",
      "Tamachtiluyan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Para decir \"vendedor de café\" (o el lugar donde se vende café), usamos:",
    "character": "Neutral.svg",
    "correct": "Atutun",
    "options": [
      "Atutun",
      "Taiwan",
      "Amatachialuyan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Prefijo de sujeto para \"Nosotros somos\":",
    "character": "Neutral.svg",
    "correct": "Ti-",
    "options": [
      "An-",
      "Ti-",
      "Tatuktiani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Terminación plural obligatoria para los seres humanos en profesiones:",
    "character": "Neutral.svg",
    "correct": "-met",
    "options": [
      "-met",
      "Tapakiltiani",
      "-ni"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Un \"hacedor de dibujos\" (que es el neologismo para cámara fotográfica) es:",
    "character": "Neutral.svg",
    "correct": "Takwikwilchiwalis",
    "options": [
      "ti",
      "Takwikwilchiwalis",
      "Takwikwiluani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "\"Hacer reír\" (provocar la risa a alguien) es el verbo:",
    "character": "Neutral.svg",
    "correct": "Pakiltia",
    "options": [
      "Pakiltia",
      "Paki",
      "Tapakaluyan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El \"pescador\" se dedica a atrapar ne:",
    "character": "Neutral.svg",
    "correct": "Michin",
    "options": [
      "Kuyamet",
      "Michin",
      "Tawikaninamakaluyan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Lugar donde se tortea (Tashkalua):",
    "character": "Neutral.svg",
    "correct": "Tashkaluyan",
    "options": [
      "Tamachtiluyan",
      "Takwaluyan",
      "Tashkaluyan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "Plural de \"Maestro\" (Tamachtiani) usando reduplicación:",
    "character": "Neutral.svg",
    "correct": "Tajtamachtianimet",
    "options": [
      "Tamachtianimet",
      "Tajtamachtianimet",
      "Construir"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El neologismo para \"reloj\" es:",
    "character": "Neutral.svg",
    "correct": "Horajpiani",
    "options": [
      "Horajpiani",
      "Kalchiwanimet",
      "Tapuani"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 9,
    "before": "Ne",
    "after": "yawi ka tamachtiluyan. (El niño va a la escuela)",
    "correct": "Piltzín",
    "options": [
      "Jefe",
      "Tortillera",
      "Piltzín"
    ],
    "hint": ""
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "El neologismo para \"manguera\" es:",
    "character": "Neutral.svg",
    "correct": "Amekalis",
    "options": [
      "Amekalis",
      "Takwaluyan",
      "Tapuani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "\"Vendedor de carne\":",
    "character": "Neutral.svg",
    "correct": "Tanamakani",
    "options": [
      "Tamalchiwani",
      "Curar",
      "Tanamakani"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "\"Lugar donde se baila\":",
    "character": "Neutral.svg",
    "correct": "Mijtutiluyan",
    "options": [
      "Kuchiluyan",
      "Mijtutiluyan",
      "Tekitiniwan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 9,
    "prompt": "\"Contador\" es la persona que sabe:",
    "character": "Neutral.svg",
    "correct": "Tapuani",
    "options": [
      "Tapuani",
      "Kuyamet",
      "Tamiktiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy guardián en la escuela.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitajpiani",
      "tik",
      "ne",
      "tamachtiluyan."
    ],
    "wordBank": [
      "Naja",
      "nitajpiani",
      "tik",
      "ne",
      "tamachtiluyan.",
      "tamalchiwani",
      "nikpia",
      "chikwey"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Él es un turista en el pueblo.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "pashaluani",
      "tik",
      "ne",
      "techan."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "pashaluani",
      "tik",
      "ne",
      "techan.",
      "takwaluyan",
      "kumalchiwani",
      "tenhapan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Nosotros somos cocineros.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "titajtamananimet."
    ],
    "wordBank": [
      "Tejemet",
      "titajtamananimet.",
      "nitajpiani",
      "tanamakani",
      "tajtamachtianimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Juana trabaja en una farmacia.",
    "character": "Neutral.svg",
    "correct": [
      "Juana",
      "tekiti",
      "tik",
      "se",
      "kalpajti."
    ],
    "wordBank": [
      "Juana",
      "tekiti",
      "tik",
      "se",
      "kalpajti.",
      "tajpiani",
      "nawatajtaketzani",
      "tapakaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ustedes son trabajadores.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "an",
      "tekitinimet."
    ],
    "wordBank": [
      "Anmejemet",
      "an",
      "tekitinimet.",
      "atutunnamakaluyan",
      "nitapajtiani",
      "tajpiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "El profesor enseña.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamachtiani",
      "tamachtia."
    ],
    "wordBank": [
      "Ne",
      "tamachtiani",
      "tamachtia.",
      "wan",
      "tashimaluyan",
      "tajpianimet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "El pescador está en la orilla del río.",
    "character": "Neutral.svg",
    "correct": [
      "Michinhitzkiani",
      "nemi",
      "tenhapan."
    ],
    "wordBank": [
      "Michinhitzkiani",
      "nemi",
      "tenhapan.",
      "kakchiwaluyan",
      "tapakani",
      "nitatzumani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy corredor.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nimutaluani."
    ],
    "wordBank": [
      "Naja",
      "nimutaluani.",
      "nitamachtiani",
      "kakchiwani",
      "kukumutzinchiwani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ellos son albañiles.",
    "character": "Neutral.svg",
    "correct": [
      "Yejemet",
      "tajkalchiwanimet."
    ],
    "wordBank": [
      "Yejemet",
      "tajkalchiwanimet.",
      "takwaluyan",
      "kakchiwani",
      "nakawnamakaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Mi mamá es una vendedora.",
    "character": "Neutral.svg",
    "correct": [
      "Nunan",
      "se",
      "tanamakani."
    ],
    "wordBank": [
      "Nunan",
      "se",
      "tanamakani.",
      "antajtakwikanimet",
      "tatukani",
      "yaja"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Él es un matador / asesino.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "tamiktiani."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "tamiktiani.",
      "nitapajtiani",
      "shiwit",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Mi compañero es barbero.",
    "character": "Neutral.svg",
    "correct": [
      "Nukumpa",
      "se",
      "tashimani."
    ],
    "wordBank": [
      "Nukumpa",
      "se",
      "tashimani.",
      "tekiti",
      "tawawasuani",
      "anmejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "El médico está en el hospital.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tapajtiani",
      "nemi",
      "tik",
      "ne",
      "kaltapajtiani."
    ],
    "wordBank": [
      "Ne",
      "tapajtiani",
      "nemi",
      "tik",
      "ne",
      "kaltapajtiani.",
      "an",
      "mumachtiani",
      "tawikaniapakani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ella es una estudiante.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "se",
      "mumachtiani."
    ],
    "wordBank": [
      "Yaja",
      "se",
      "mumachtiani.",
      "antajtamananimet",
      "tatzumani",
      "tawawasuani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Nosotros vamos a la escuela.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "tiawit",
      "ka",
      "tamachtiluyan."
    ],
    "wordBank": [
      "Tejemet",
      "tiawit",
      "ka",
      "tamachtiluyan.",
      "nemi",
      "dibujar",
      "nakawnamakaluyan"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Yo soy costurero.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitatzumani."
    ],
    "wordBank": [
      "Naja",
      "nitatzumani.",
      "tatzutzunani",
      "mawiltiani",
      "tashijshikuani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ustedes son cantantes.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "antajtakwikanimet."
    ],
    "wordBank": [
      "Anmejemet",
      "antajtakwikanimet.",
      "takwaluyan",
      "nitamanani",
      "ni"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Mi jefe es bueno.",
    "character": "Neutral.svg",
    "correct": [
      "Nutuktiani",
      "yek."
    ],
    "wordBank": [
      "Nutuktiani",
      "yek.",
      "nikpia",
      "tamachtiani",
      "mumachtiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Lugar donde se come.",
    "character": "Neutral.svg",
    "correct": [
      "Takwaluyan."
    ],
    "wordBank": [
      "Takwaluyan.",
      "tajpianimet",
      "michinhitzkiani",
      "sonchiwani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Hacedora de pupusas.",
    "character": "Neutral.svg",
    "correct": [
      "Kukumutzinchiwani."
    ],
    "wordBank": [
      "Kukumutzinchiwani.",
      "mawiltiani",
      "hector",
      "nitapajtiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Él es el transportista.",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "ne",
      "tawikani."
    ],
    "wordBank": [
      "Yaja",
      "ne",
      "tawikani.",
      "naja",
      "titanajnawatiani",
      "tamachtiani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Lugar donde se trabaja.",
    "character": "Neutral.svg",
    "correct": [
      "Tekitiluyan."
    ],
    "wordBank": [
      "Tekitiluyan.",
      "pashaluanimet",
      "nitatzumani",
      "tatukani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Tú eres un escritor.",
    "character": "Neutral.svg",
    "correct": [
      "Taja",
      "ti",
      "tawawasuani."
    ],
    "wordBank": [
      "Taja",
      "ti",
      "tawawasuani.",
      "antajtamananimet",
      "tekitinimet",
      "tashimani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Lugar donde venden carros.",
    "character": "Neutral.svg",
    "correct": [
      "Tawikaninamakaluyan."
    ],
    "wordBank": [
      "Tawikaninamakaluyan.",
      "kakchiwaluyan",
      "takwikwiluani",
      "nitamanani"
    ]
  },
  {
    "type": "translate",
    "stage": 9,
    "prompt": "Ellos son zapateros.",
    "character": "Neutral.svg",
    "correct": [
      "Yejemet",
      "tajkakchiwanimet."
    ],
    "wordBank": [
      "Yejemet",
      "tajkakchiwanimet.",
      "tasajsakani",
      "techan",
      "kakchiwani"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Gordo",
    "character": "Neutral.svg",
    "correct": [
      "Tumawak"
    ],
    "wordBank": [
      "Tumawak",
      "kwelnaj",
      "waktuk",
      "nutzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Delgado",
    "character": "Neutral.svg",
    "correct": [
      "Pichawak"
    ],
    "wordBank": [
      "Pichawak",
      "susulpuknaj",
      "pinulchini",
      "mekat"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Bonito/a",
    "character": "Neutral.svg",
    "correct": [
      "Galanchin"
    ],
    "wordBank": [
      "Galanchin",
      "kakti",
      "tetzwaktuk",
      "takwal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Alto (estatura)",
    "character": "Neutral.svg",
    "correct": [
      "Kojtik"
    ],
    "wordBank": [
      "Kojtik",
      "wipil",
      "sala",
      "piltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Liviano",
    "character": "Neutral.svg",
    "correct": [
      "Ajkatek"
    ],
    "wordBank": [
      "Ajkatek",
      "ajwiak",
      "shukijiak",
      "yey"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Pesado",
    "character": "Neutral.svg",
    "correct": [
      "Etek"
    ],
    "wordBank": [
      "Etek",
      "gajgalanchichin",
      "tzunkuluchuj",
      "puputuka"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Nuevo",
    "character": "Neutral.svg",
    "correct": [
      "Yankwik"
    ],
    "wordBank": [
      "Yankwik",
      "majmatznaj",
      "mekat",
      "pepeyuka"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Antiguo",
    "character": "Neutral.svg",
    "correct": [
      "Ikman"
    ],
    "wordBank": [
      "Ikman",
      "piltzin",
      "melawaya",
      "tesu"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Rápido",
    "character": "Neutral.svg",
    "correct": [
      "Talul"
    ],
    "wordBank": [
      "Talul",
      "mekat",
      "kwawit",
      "nichipawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Lento",
    "character": "Neutral.svg",
    "correct": [
      "Yulik"
    ],
    "wordBank": [
      "Yulik",
      "puputuka",
      "chamawak",
      "michin"
    ]
  },
  {
    "type": "select_translation",
    "stage": 10,
    "prompt": "Si una camisa está muy arrugada, decimos que está:",
    "character": "Neutral.svg",
    "correct": "Majmatznaj",
    "options": [
      "uej",
      "Majmatznaj",
      "Melawaya"
    ]
  },
  {
    "type": "select_translation",
    "stage": 10,
    "prompt": "Un objeto que es circular se llama:",
    "character": "Neutral.svg",
    "correct": "Yawal",
    "options": [
      "Etek",
      "ijtuk",
      "Yawal"
    ]
  },
  {
    "type": "select_translation",
    "stage": 10,
    "prompt": "El antónimo de Uej (difícil) es:",
    "character": "Neutral.svg",
    "correct": "Tesu uej",
    "options": [
      "Ne tet sujsul etek",
      "Tzapachin ne piltzín",
      "Tesu uej"
    ]
  },
  {
    "type": "select_translation",
    "stage": 10,
    "prompt": "Algo que está \"socado\" o muy apretado es:",
    "character": "Neutral.svg",
    "correct": "Tetek",
    "options": [
      "Tetek",
      "Kashantik",
      "chikitik"
    ]
  },
  {
    "type": "select_translation",
    "stage": 10,
    "prompt": "Si el agua está helada, se describe como:",
    "character": "Neutral.svg",
    "correct": "Sesek",
    "options": [
      "Pachachin",
      "Tutunik",
      "Sesek"
    ]
  },
  {
    "type": "select_translation",
    "stage": 10,
    "prompt": "Una pared que está áspera al tacto es:",
    "character": "Neutral.svg",
    "correct": "Shashaknaj",
    "options": [
      "tashipewti",
      "Shashaknaj",
      "Alawak"
    ]
  },
  {
    "type": "select_translation",
    "stage": 10,
    "prompt": "Un pantalón que te queda \"flojo\" está:",
    "character": "Neutral.svg",
    "correct": "Kashantik",
    "options": [
      "Kashantik",
      "Tetek",
      "Pichawak"
    ]
  },
  {
    "type": "select_translation",
    "stage": 10,
    "prompt": "Si un árbol no está torcido, sino recto, es:",
    "character": "Neutral.svg",
    "correct": "Tesu kwelnaj",
    "options": [
      "Tesu kwelnaj",
      "Ne koton majmatznaj",
      "an + plural"
    ]
  },
  {
    "type": "select_translation",
    "stage": 10,
    "prompt": "Algo que está estirado o planchado es:",
    "character": "Neutral.svg",
    "correct": "Melawaya",
    "options": [
      "Majmatznaj",
      "Tetzwaktuk",
      "Melawaya"
    ]
  },
  {
    "type": "select_translation",
    "stage": 10,
    "prompt": "Un libro que es muy grueso se describe como:",
    "character": "Neutral.svg",
    "correct": "Tepuntik",
    "options": [
      "asesek",
      "Kanawak",
      "Tepuntik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El papel es delgado/ralo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "amat",
      "kanawak"
    ],
    "wordBank": [
      "Ne",
      "amat",
      "kanawak",
      "galanchin",
      "ajwituk",
      "kwelnaj"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Apesta mucho (olor a pies).",
    "character": "Neutral.svg",
    "correct": [
      "Sujsul",
      "tzujiak"
    ],
    "wordBank": [
      "Sujsul",
      "tzujiak",
      "tamal",
      "michin",
      "chamawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El canasto es grande.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chikiwit",
      "tumak"
    ],
    "wordBank": [
      "Ne",
      "chikiwit",
      "tumak",
      "patawak",
      "mistun",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Su apariencia es lisa.",
    "character": "Neutral.svg",
    "correct": [
      "Itachishka",
      "alawak"
    ],
    "wordBank": [
      "Itachishka",
      "alawak",
      "ajwituk",
      "nichipawak",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pescado apesta.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "michin",
      "ijiak"
    ],
    "wordBank": [
      "Ne",
      "michin",
      "ijiak",
      "ti",
      "nujnukshi",
      "kwelnaj"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El hierro está descarapelado.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tepusti",
      "pinulchini"
    ],
    "wordBank": [
      "Ne",
      "tepusti",
      "pinulchini",
      "ikman",
      "susulnaj",
      "pelu"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El camino es ancho.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ujti",
      "patawak"
    ],
    "wordBank": [
      "Ne",
      "ujti",
      "patawak",
      "tzapachin",
      "tetek",
      "puyek"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El agua está caliente.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "at",
      "tutunik"
    ],
    "wordBank": [
      "Ne",
      "at",
      "tutunik",
      "tamal",
      "amat",
      "panti"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Triángulo (lit. tres lados).",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "itech"
    ],
    "wordBank": [
      "Yey",
      "itech",
      "takwal",
      "patznaj",
      "puyek"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La tortilla es gruesa.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamal",
      "tepuntik"
    ],
    "wordBank": [
      "Ne",
      "tamal",
      "tepuntik",
      "wan",
      "pepeyuka",
      "weyaki"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El niño es de baja estatura.",
    "character": "Neutral.svg",
    "correct": [
      "Tzapachin",
      "ne",
      "piltzín"
    ],
    "wordBank": [
      "Tzapachin",
      "ne",
      "piltzín",
      "uej",
      "pichawak",
      "weyak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La camisa está sucia de grasa.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "susulnaj"
    ],
    "wordBank": [
      "Ne",
      "koton",
      "susulnaj",
      "yulik",
      "ajkatek",
      "sesek"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pájaro es liviano.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tutut",
      "ajkatek"
    ],
    "wordBank": [
      "Ne",
      "tutut",
      "ajkatek",
      "tzunkuluchuj",
      "sesek",
      "weyak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Rectángulo.",
    "character": "Neutral.svg",
    "correct": [
      "Itech",
      "weyak"
    ],
    "wordBank": [
      "Itech",
      "weyak",
      "nutzunkal",
      "tzuyutztik",
      "alawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El libro es antiguo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "amachti",
      "ikman"
    ],
    "wordBank": [
      "Ne",
      "amachti",
      "ikman",
      "taejekulis",
      "yey",
      "talul"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El camino es estrecho",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ujti",
      "tzuyutztik."
    ],
    "wordBank": [
      "Ne",
      "ujti",
      "tzuyutztik.",
      "tzunpusulnaj",
      "kanawak",
      "gajgalanchichin"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La blusa es doble/gruesa",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "wipil",
      "tilawak."
    ],
    "wordBank": [
      "Ne",
      "wipil",
      "tilawak.",
      "patawak",
      "weyaki",
      "chikitik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El zapato es nuevo",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kakti",
      "yankwik."
    ],
    "wordBank": [
      "Ne",
      "kakti",
      "yankwik.",
      "patawak",
      "pepeyuka",
      "chikitik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Yo soy moreno",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitiltikchin."
    ],
    "wordBank": [
      "Naja",
      "nitiltikchin.",
      "tiistakchin",
      "mistun",
      "tzuyutztik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La mesa es cuadrada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "patznaj",
      "nawi",
      "itech."
    ],
    "wordBank": [
      "Ne",
      "patznaj",
      "nawi",
      "itech.",
      "shukuk",
      "ijiak",
      "alawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El perro es bonito",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "pelu",
      "galanchin."
    ],
    "wordBank": [
      "Ne",
      "pelu",
      "galanchin.",
      "panti",
      "nawi",
      "patawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La comida es rica",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "takwal",
      "ajwiak."
    ],
    "wordBank": [
      "Ne",
      "takwal",
      "ajwiak.",
      "pelu",
      "ni",
      "chamawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El examen es fácil",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "taejekulis",
      "tesu",
      "uej."
    ],
    "wordBank": [
      "Ne",
      "taejekulis",
      "tesu",
      "uej.",
      "kakti",
      "weyaki",
      "tzukultik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La flor está marchita",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shuchit",
      "mijmikik."
    ],
    "wordBank": [
      "Ne",
      "shuchit",
      "mijmikik.",
      "tetzwaktuk",
      "puputuka",
      "puputukatuk"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El niño es gordo",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "piltzín",
      "tumawak."
    ],
    "wordBank": [
      "Ne",
      "piltzín",
      "tumawak.",
      "yawal",
      "gajgalanchichin",
      "atutun"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El árbol es robusto/grueso",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kwawit",
      "chamawak."
    ],
    "wordBank": [
      "Ne",
      "kwawit",
      "chamawak.",
      "kushtalchin",
      "yey",
      "anmejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La mochila es pesada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kushtalchin",
      "etek."
    ],
    "wordBank": [
      "Ne",
      "kushtalchin",
      "etek.",
      "tumak",
      "tzunmurushuj",
      "tetek"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El gato es pequeño",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "mistun",
      "chikitik."
    ],
    "wordBank": [
      "Ne",
      "mistun",
      "chikitik.",
      "tzujiak",
      "shuchit",
      "tutut"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Pentágono",
    "character": "Neutral.svg",
    "correct": [
      "Makwil",
      "itech."
    ],
    "wordBank": [
      "Makwil",
      "itech.",
      "tzuyutztik",
      "tzapachin",
      "takwawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El espejo es brillante",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tachialis",
      "pepeyuka."
    ],
    "wordBank": [
      "Ne",
      "tachialis",
      "pepeyuka.",
      "at",
      "an",
      "makwil"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Círculo / Redondo",
    "character": "Neutral.svg",
    "correct": [
      "Yawal"
    ],
    "wordBank": [
      "Yawal",
      "nawi",
      "tilawak",
      "itech"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Triángulo",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "itech"
    ],
    "wordBank": [
      "Yey",
      "itech",
      "kojtik",
      "tzapachin",
      "ti"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Cuadrado",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "itech"
    ],
    "wordBank": [
      "Nawi",
      "itech",
      "susulpuknaj",
      "pichawak",
      "waktuk"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Rectángulo",
    "character": "Neutral.svg",
    "correct": [
      "Itech",
      "weyak"
    ],
    "wordBank": [
      "Itech",
      "weyak",
      "tetzwaktuk",
      "yawal",
      "tzukultik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Pentágono",
    "character": "Neutral.svg",
    "correct": [
      "Makwil",
      "itech"
    ],
    "wordBank": [
      "Makwil",
      "itech",
      "wan",
      "puputuka",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Brillante",
    "character": "Neutral.svg",
    "correct": [
      "Pepeyuka"
    ],
    "wordBank": [
      "Pepeyuka",
      "piltzin",
      "tesu",
      "itzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Sucio de tierra/polvo",
    "character": "Neutral.svg",
    "correct": [
      "Puknaj"
    ],
    "wordBank": [
      "Puknaj",
      "tachialis",
      "talul",
      "itzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Sucio de grasa",
    "character": "Neutral.svg",
    "correct": [
      "Susulnaj"
    ],
    "wordBank": [
      "Susulnaj",
      "tzujiak",
      "melawaya",
      "wipil"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Sucio de grasa y polvo",
    "character": "Neutral.svg",
    "correct": [
      "Susulpuknaj"
    ],
    "wordBank": [
      "Susulpuknaj",
      "kushtalchin",
      "tejemet",
      "shuchit"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Limpio (no sucio de tierra)",
    "character": "Neutral.svg",
    "correct": [
      "Tesu",
      "puknaj"
    ],
    "wordBank": [
      "Tesu",
      "puknaj",
      "yulik",
      "tzikajiak",
      "siwapil"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La camisa (está) arrugada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "majmatznaj"
    ],
    "wordBank": [
      "Ne",
      "koton",
      "majmatznaj",
      "tzunmurushuj",
      "mistun",
      "anmejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La camisa (está) planchada/estirada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "melawaya"
    ],
    "wordBank": [
      "Ne",
      "koton",
      "melawaya",
      "puputuka",
      "tuchti",
      "kashantik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El árbol (está) torcido/pando.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kwawit",
      "kwelnaj"
    ],
    "wordBank": [
      "Ne",
      "kwawit",
      "kwelnaj",
      "yey",
      "itachishka",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El árbol (está) recto.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kwawit",
      "tesu",
      "kwelnaj"
    ],
    "wordBank": [
      "Ne",
      "kwawit",
      "tesu",
      "kwelnaj",
      "puknaj",
      "weyaki",
      "tutunik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El hierro (está) descarapelado.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tepusti",
      "pinulchini"
    ],
    "wordBank": [
      "Ne",
      "tepusti",
      "pinulchini",
      "amachti",
      "ijiak",
      "patawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pájaro (es) liviano.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tutut",
      "ajkatek"
    ],
    "wordBank": [
      "Ne",
      "tutut",
      "ajkatek",
      "galanchin",
      "taja",
      "nichipawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La piedra (es) pesada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tet",
      "etek"
    ],
    "wordBank": [
      "Ne",
      "tet",
      "etek",
      "kashantik",
      "alawak",
      "tamal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La cuerda/bejuco (es) elástico/se estira.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "mekat",
      "weyaki"
    ],
    "wordBank": [
      "Ne",
      "mekat",
      "weyaki",
      "itzunkal",
      "amachti",
      "puyek"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pantalón (es) socado/apretado.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "sala",
      "tetek"
    ],
    "wordBank": [
      "Ne",
      "sala",
      "tetek",
      "takwal",
      "gajgalanchichin",
      "nutzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La camisa (es) floja/holgada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "kashantik"
    ],
    "wordBank": [
      "Ne",
      "koton",
      "kashantik",
      "majmatznaj",
      "ti",
      "nujnukshi"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Flor fragante/olorosa.",
    "character": "Neutral.svg",
    "correct": [
      "Shuchit",
      "puputukatuk"
    ],
    "wordBank": [
      "Shuchit",
      "puputukatuk",
      "tet",
      "amachti",
      "tzujiak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pescado apesta (mal olor).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "michin",
      "ijiak"
    ],
    "wordBank": [
      "Ne",
      "michin",
      "ijiak",
      "makwil",
      "atutun",
      "sala"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El libro huele a humedad/moho.",
    "character": "Neutral.svg",
    "correct": [
      "Tzikajiak",
      "ne",
      "amachti"
    ],
    "wordBank": [
      "Tzikajiak",
      "ne",
      "amachti",
      "mutzunkal",
      "tumak",
      "melawaya"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El niño (es) de baja estatura.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "piltzín",
      "tzapachin"
    ],
    "wordBank": [
      "Ne",
      "piltzín",
      "tzapachin",
      "nutzunkal",
      "yawal",
      "makwil"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Yo soy moreno.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitiltikchin"
    ],
    "wordBank": [
      "Naja",
      "nitiltikchin",
      "tepuntik",
      "galanchin",
      "majmatznaj"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La tortilla es delgada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamal",
      "kanawak."
    ],
    "wordBank": [
      "Ne",
      "tamal",
      "kanawak.",
      "shuchit",
      "siwapil",
      "koton"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El camino es ancho",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ujti",
      "patawak."
    ],
    "wordBank": [
      "Ne",
      "ujti",
      "patawak.",
      "mutzunkal",
      "kanawak",
      "tzikajiak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El camino es estrecho",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ujti",
      "tzuyutztik."
    ],
    "wordBank": [
      "Ne",
      "ujti",
      "tzuyutztik.",
      "amachti",
      "yejemet",
      "takwal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La mesa es cuadrada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "patznaj",
      "nawi",
      "itech."
    ],
    "wordBank": [
      "Ne",
      "patznaj",
      "nawi",
      "itech.",
      "puputuka",
      "ajwiak",
      "puputukatuk"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El espejo es brillante",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tachialis",
      "pepeyuka."
    ],
    "wordBank": [
      "Ne",
      "tachialis",
      "pepeyuka.",
      "michin",
      "tzujiak",
      "etek"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Yo soy trigueño",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nichipawak."
    ],
    "wordBank": [
      "Naja",
      "nichipawak.",
      "at",
      "uej",
      "tzunkuluchuj"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Tú eres de piel clara",
    "character": "Neutral.svg",
    "correct": [
      "Taja",
      "tiistakchin."
    ],
    "wordBank": [
      "Taja",
      "tiistakchin.",
      "ajwiak",
      "amat",
      "pinulchini"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Mi cabello es liso",
    "character": "Neutral.svg",
    "correct": [
      "Nutzunkal",
      "alawak."
    ],
    "wordBank": [
      "Nutzunkal",
      "alawak.",
      "yejemet",
      "susulnaj",
      "achijchipa"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Tu cabello es ondulado",
    "character": "Neutral.svg",
    "correct": [
      "Mutzunkal",
      "tzunkuluchuj."
    ],
    "wordBank": [
      "Mutzunkal",
      "tzunkuluchuj.",
      "tzunmurushuj",
      "mekat",
      "puputukatuk"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Él es muy rizado (colocho)",
    "character": "Neutral.svg",
    "correct": [
      "Yaja",
      "tzunmurushuj."
    ],
    "wordBank": [
      "Yaja",
      "tzunmurushuj.",
      "pinulchini",
      "chikiwit",
      "tumawakmet"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La tortilla es nueva",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamal",
      "yankwik."
    ],
    "wordBank": [
      "Ne",
      "tamal",
      "yankwik.",
      "pelu",
      "tzujiak",
      "chikiwit"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La tortilla es antigua (vieja)",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamal",
      "ikman."
    ],
    "wordBank": [
      "Ne",
      "tamal",
      "ikman.",
      "ujti",
      "yulik",
      "tzunmurushuj"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El agua está caliente",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "at",
      "tutunik."
    ],
    "wordBank": [
      "Ne",
      "at",
      "tutunik.",
      "koton",
      "uej",
      "ijiak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El hielo está helado",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "at",
      "takwawak",
      "sesek."
    ],
    "wordBank": [
      "Ne",
      "at",
      "takwawak",
      "sesek.",
      "nitiltikchin",
      "nujnukshi",
      "weyak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El conejo es rápido",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "talul."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "talul.",
      "mistun",
      "tetzwaktuk",
      "kojtik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Olor a comida descompuesta.",
    "character": "Neutral.svg",
    "correct": [
      "Shukijiak"
    ],
    "wordBank": [
      "Shukijiak",
      "michin",
      "mekat",
      "tachialis"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Elástico o que se estira.",
    "character": "Neutral.svg",
    "correct": [
      "Weyaki"
    ],
    "wordBank": [
      "Weyaki",
      "chikitik",
      "nutzunkal",
      "tzunmurushuj"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Tela doble o gruesa.",
    "character": "Neutral.svg",
    "correct": [
      "Tilawak"
    ],
    "wordBank": [
      "Tilawak",
      "uej",
      "kwelnaj",
      "takwal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Árbol robusto o tronco grueso.",
    "character": "Neutral.svg",
    "correct": [
      "Chamawak"
    ],
    "wordBank": [
      "Chamawak",
      "tutut",
      "pichawak",
      "nujnukshi"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Camino estrecho.",
    "character": "Neutral.svg",
    "correct": [
      "Tzuyutztik"
    ],
    "wordBank": [
      "Tzuyutztik",
      "itech",
      "gajgalanchichin",
      "talul"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Cabello ondulado.",
    "character": "Neutral.svg",
    "correct": [
      "Tzunkuluchuj"
    ],
    "wordBank": [
      "Tzunkuluchuj",
      "mekat",
      "tzujiak",
      "ni"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Ropa muy socada o apretada.",
    "character": "Neutral.svg",
    "correct": [
      "Tetek"
    ],
    "wordBank": [
      "Tetek",
      "ni",
      "kanawak",
      "tzuyutztik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Objeto antiguo.",
    "character": "Neutral.svg",
    "correct": [
      "Ikman"
    ],
    "wordBank": [
      "Ikman",
      "anmejemet",
      "nujnukshi",
      "itachishka"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Movimiento rápido.",
    "character": "Neutral.svg",
    "correct": [
      "Talul"
    ],
    "wordBank": [
      "Talul",
      "ajwiak",
      "tepuntik",
      "tamanti"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Niño de muy baja estatura.",
    "character": "Neutral.svg",
    "correct": [
      "Pachachin"
    ],
    "wordBank": [
      "Pachachin",
      "majmatznaj",
      "tzunmurushuj",
      "ajkatek"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne michin sujsul",
    "after": ". (El pescado apesta mucho)",
    "correct": "ijiak",
    "options": [
      "puputuka",
      "ijiak",
      "kwalutuk"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne amachti",
    "after": ". (El libro huele a humedad)",
    "correct": "tzikajiak",
    "options": [
      "tzujiak",
      "Shukijiak",
      "tzikajiak"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne mekat",
    "after": ". (La cuerda es elástica)",
    "correct": "weyaki",
    "options": [
      "weyaki",
      "Pepeyuka",
      "tetek"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne tamal",
    "after": "nakak. (La tortilla quedó tiesa)",
    "correct": "tzijtzilintuk",
    "options": [
      "yankwik",
      "tzunshilut",
      "tzijtzilintuk"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne piltzín sujsul",
    "after": ". (El niño es muy bajito)",
    "correct": "chikitik",
    "options": [
      "kojtik",
      "chikitik",
      "Ajwiak"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Naja ni",
    "after": ". (Yo soy de piel trigueña)",
    "correct": "chipawak",
    "options": [
      "Kashantik",
      "chipawak",
      "istakchin"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne koton",
    "after": ". (La camisa está descarapelada)",
    "correct": "pinulchini",
    "options": [
      "Etek",
      "melawaya",
      "pinulchini"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne amat sujsul",
    "after": ". (El papel es muy ralo/delgado)",
    "correct": "kanawak",
    "options": [
      "ijiak",
      "kanawak",
      "tilawak"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "¿Ken",
    "after": "? (¿Cómo es su forma / ser?)",
    "correct": "ijtuk",
    "options": [
      "tachishka",
      "tiltik",
      "ijtuk"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne mekat sujsul",
    "after": ". (La cuerda es muy larga)",
    "correct": "weyak",
    "options": [
      "kutu",
      "weyak",
      "Puknaj"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La bandera es muy ancha.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "panti",
      "sujsul",
      "patawak"
    ],
    "wordBank": [
      "Ne",
      "panti",
      "sujsul",
      "patawak",
      "amat",
      "tumawak",
      "an"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La flor es fragante y rica.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shuchit",
      "puputuka",
      "ajwiak"
    ],
    "wordBank": [
      "Ne",
      "shuchit",
      "puputuka",
      "ajwiak",
      "ni",
      "puyuj",
      "tzujiak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Yo soy alto y tú eres delgado.",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "ni",
      "kojtik",
      "wan",
      "taja",
      "ti",
      "pichawak"
    ],
    "wordBank": [
      "Naja",
      "ni",
      "kojtik",
      "wan",
      "taja",
      "ti",
      "pichawak",
      "tamal",
      "puyek",
      "melawaya"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La piedra es muy pesada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tet",
      "sujsul",
      "etek"
    ],
    "wordBank": [
      "Ne",
      "tet",
      "sujsul",
      "etek",
      "weyaki",
      "kwelnaj",
      "wipil"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pájaro es muy liviano.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tutut",
      "sujsul",
      "ajkatek"
    ],
    "wordBank": [
      "Ne",
      "tutut",
      "sujsul",
      "ajkatek",
      "tzunmurushuj",
      "tetzwaktuk",
      "takwawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El agua caliente y el agua fría.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "at",
      "tutunik",
      "wan",
      "ne",
      "at",
      "sesek"
    ],
    "wordBank": [
      "Ne",
      "at",
      "tutunik",
      "wan",
      "ne",
      "at",
      "sesek",
      "tamal",
      "sujsul",
      "gajgalanchichin"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Nosotros somos bonitos.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "ti",
      "gajgalanchichin"
    ],
    "wordBank": [
      "Tejemet",
      "ti",
      "gajgalanchichin",
      "mistun",
      "tilawak",
      "itachishka"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Ustedes son delgados.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "an",
      "pichawakmet"
    ],
    "wordBank": [
      "Anmejemet",
      "an",
      "pichawakmet",
      "makwil",
      "takwal",
      "kashantik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Ellos son gordos.",
    "character": "Neutral.svg",
    "correct": [
      "Yejemet",
      "tumawakmet"
    ],
    "wordBank": [
      "Yejemet",
      "tumawakmet",
      "naja",
      "ne",
      "pepeyuka"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La camisa está muy sucia de grasa y polvo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "sujsul",
      "susulpuknaj"
    ],
    "wordBank": [
      "Ne",
      "koton",
      "sujsul",
      "susulpuknaj",
      "pichawak",
      "itachishka",
      "tachialis"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El libro nuevo y el libro antiguo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "amachti",
      "yankwik",
      "wan",
      "ne",
      "amachti",
      "ikman"
    ],
    "wordBank": [
      "Ne",
      "amachti",
      "yankwik",
      "wan",
      "ne",
      "amachti",
      "ikman",
      "itachishka",
      "ajkatek",
      "pepeyuka"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El camino es muy difícil.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ujti",
      "sujsul",
      "uej"
    ],
    "wordBank": [
      "Ne",
      "ujti",
      "sujsul",
      "uej",
      "tzukultik",
      "tet",
      "melawaya"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El conejo es muy rápido.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "sujsul",
      "talul"
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "sujsul",
      "talul",
      "patawak",
      "tutut",
      "pichawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El gato es muy lento.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "mistun",
      "sujsul",
      "yulik"
    ],
    "wordBank": [
      "Ne",
      "mistun",
      "sujsul",
      "yulik",
      "mutzunkal",
      "tumawakmet",
      "pinulchini"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La mesa es cuadrada (de cuatro lados).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "patznaj",
      "nawi",
      "itech"
    ],
    "wordBank": [
      "Ne",
      "patznaj",
      "nawi",
      "itech",
      "tesu",
      "tzikajiak",
      "tiistakchin"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Mi cabello es muy rizado",
    "character": "Neutral.svg",
    "correct": [
      "Nutzunkal",
      "sujsul",
      "tzunmurushuj."
    ],
    "wordBank": [
      "Nutzunkal",
      "sujsul",
      "tzunmurushuj.",
      "taejekulis",
      "tutunik",
      "siwapil"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Tu cabello es liso",
    "character": "Neutral.svg",
    "correct": [
      "Mutzunkal",
      "alawak."
    ],
    "wordBank": [
      "Mutzunkal",
      "alawak.",
      "pichawak",
      "tamal",
      "tamanti"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La blusa está arrugada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "wipil",
      "majmatznaj."
    ],
    "wordBank": [
      "Ne",
      "wipil",
      "majmatznaj.",
      "tet",
      "itzunkal",
      "yejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La camisa está planchada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "melawaya."
    ],
    "wordBank": [
      "Ne",
      "koton",
      "melawaya.",
      "tet",
      "ajwiak",
      "naja"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El árbol está torcido",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kwawit",
      "kwelnaj."
    ],
    "wordBank": [
      "Ne",
      "kwawit",
      "kwelnaj.",
      "michin",
      "patznaj",
      "tepusti"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El árbol está recto",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kwawit",
      "tesu",
      "kwelnaj."
    ],
    "wordBank": [
      "Ne",
      "kwawit",
      "tesu",
      "kwelnaj.",
      "ajwiak",
      "kushtalchin",
      "talul"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pantalón me queda flojo",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "sala",
      "kashantik."
    ],
    "wordBank": [
      "Ne",
      "sala",
      "kashantik.",
      "panti",
      "anmejemet",
      "waktuk"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El zapato es nuevo",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kakti",
      "yankwik."
    ],
    "wordBank": [
      "Ne",
      "kakti",
      "yankwik.",
      "nutzunkal",
      "shukijiak",
      "chamawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Mis pies huelen mal (a pies)",
    "character": "Neutral.svg",
    "correct": [
      "Nujnukshi",
      "tzujiak."
    ],
    "wordBank": [
      "Nujnukshi",
      "tzujiak.",
      "itzunkal",
      "amachti",
      "atutun"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Triángulo",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "itech."
    ],
    "wordBank": [
      "Yey",
      "itech.",
      "kashantik",
      "yaja",
      "ajkatek"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Rectángulo",
    "character": "Neutral.svg",
    "correct": [
      "Itech",
      "weyak."
    ],
    "wordBank": [
      "Itech",
      "weyak.",
      "kushtalchin",
      "tzunkuluchuj",
      "ikman"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Pentágono",
    "character": "Neutral.svg",
    "correct": [
      "Makwil",
      "itech."
    ],
    "wordBank": [
      "Makwil",
      "itech.",
      "atutun",
      "puputuka",
      "yawal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Círculo",
    "character": "Neutral.svg",
    "correct": [
      "Yawal."
    ],
    "wordBank": [
      "Yawal.",
      "tumawakmet",
      "michin",
      "tzuyutztik"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El examen es fácil",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "taejekulis",
      "tesu",
      "uej."
    ],
    "wordBank": [
      "Ne",
      "taejekulis",
      "tesu",
      "uej.",
      "kwawit",
      "talul",
      "pichawakmet"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Yo soy moreno",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nitiltikchin."
    ],
    "wordBank": [
      "Naja",
      "nitiltikchin.",
      "talul",
      "weyak",
      "ajkatek"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Ralo (para líquidos como el café).",
    "character": "Neutral.svg",
    "correct": [
      "Achijchipa"
    ],
    "wordBank": [
      "Achijchipa",
      "nichipawak",
      "pelu",
      "shukijiak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Ácido o agrio.",
    "character": "Neutral.svg",
    "correct": [
      "Shukuk"
    ],
    "wordBank": [
      "Shukuk",
      "tamanti",
      "galanchin",
      "sesek"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Salado.",
    "character": "Neutral.svg",
    "correct": [
      "Puyek"
    ],
    "wordBank": [
      "Puyek",
      "pepeyuka",
      "etek",
      "mutzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Rico, sabroso o delicioso.",
    "character": "Neutral.svg",
    "correct": [
      "Ajwiak"
    ],
    "wordBank": [
      "Ajwiak",
      "mutzunkal",
      "ijiak",
      "puknaj"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Seco.",
    "character": "Neutral.svg",
    "correct": [
      "Waktuk"
    ],
    "wordBank": [
      "Waktuk",
      "mutzunkal",
      "nawi",
      "atutun"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Estar mojado.",
    "character": "Neutral.svg",
    "correct": [
      "Ajwituk"
    ],
    "wordBank": [
      "Ajwituk",
      "nawi",
      "anmejemet",
      "talul"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Doble o grueso (para telas o papel).",
    "character": "Neutral.svg",
    "correct": [
      "Tilawak"
    ],
    "wordBank": [
      "Tilawak",
      "weyaki",
      "tachialis",
      "puputuka"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Ralo o delgado (para telas o papel).",
    "character": "Neutral.svg",
    "correct": [
      "Kanawak"
    ],
    "wordBank": [
      "Kanawak",
      "tzuyutztik",
      "yankwik",
      "kwawit"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Elástico o que se estira.",
    "character": "Neutral.svg",
    "correct": [
      "Weyaki"
    ],
    "wordBank": [
      "Weyaki",
      "susulnaj",
      "nutzunkal",
      "kakti"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Raquítico (personas o animales).",
    "character": "Neutral.svg",
    "correct": [
      "Tetzwaktuk"
    ],
    "wordBank": [
      "Tetzwaktuk",
      "puputuka",
      "tumawakmet",
      "chikiwit"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Naja ni",
    "after": "(Yo soy rubio).",
    "correct": "tzunshilut",
    "options": [
      "Kojtik",
      "chipawak",
      "tzunshilut"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne et kenhayuk",
    "after": "(El frijol todavía está duro/crudo).",
    "correct": "ishkajkamu",
    "options": [
      "Tetzwaktuk",
      "ishkajkamu",
      "uksi"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne sinti",
    "after": "(El maíz picado).",
    "correct": "kwalutuk",
    "options": [
      "Etek",
      "kwalutuk",
      "palantuk"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne ujti sujsul",
    "after": "(El camino es muy difícil).",
    "correct": "uej",
    "options": [
      "uej",
      "Tumawak",
      "Kojtik"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne kwawit",
    "after": "(El árbol es recto).",
    "correct": "tesu kwelnaj",
    "options": [
      "tesu kwelnaj",
      "Ne pelu galanchin",
      "Nutzunkal sujsul tzunmurushuj"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne lala",
    "after": "(La naranja está pelada).",
    "correct": "tashipewti",
    "options": [
      "tashipewti",
      "tzijtzilintuk",
      "tatekti"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne amachti",
    "after": "(El libro huele a humedad/moho).",
    "correct": "tzikajiak",
    "options": [
      "puputuka",
      "tzikajiak",
      "mu"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne patznaj",
    "after": "(La mesa es redonda).",
    "correct": "yawaltik",
    "options": [
      "yawaltik",
      "Tetzwaktuk",
      "Pichawak"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne piltzín",
    "after": "(El niño es de baja estatura).",
    "correct": "tzapachin",
    "options": [
      "tzapachin",
      "Tzunkuluchuj",
      "kojtik"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Taja ti",
    "after": "(Tú eres moreno).",
    "correct": "tiltikchin",
    "options": [
      "Waktuk",
      "chipawak",
      "tiltikchin"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne takwal",
    "after": "(La comida quedó simple/insípida).",
    "correct": "asesek",
    "options": [
      "tatekti",
      "puyek",
      "asesek"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne lala",
    "after": "(La naranja está cortada).",
    "correct": "tatekti",
    "options": [
      "tatekti",
      "tashipewti",
      "Pachachin"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne koton",
    "after": "(La camisa está descolorida).",
    "correct": "atiltik",
    "options": [
      "atiltik",
      "tiltik",
      "tzujiak"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne puyuj",
    "after": "(El pollo está asado).",
    "correct": "tishkal",
    "options": [
      "tishkal",
      "Tepuntik",
      "tamanti"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 10,
    "before": "Ne amat",
    "after": "(El papel es doble).",
    "correct": "tilawak",
    "options": [
      "kanawak",
      "tilawak",
      "nu"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La piedra es pesada.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tet",
      "etek"
    ],
    "wordBank": [
      "Ne",
      "tet",
      "etek",
      "kanawak",
      "tzukultik",
      "mutzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pájaro es liviano.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tutut",
      "ajkatek"
    ],
    "wordBank": [
      "Ne",
      "tutut",
      "ajkatek",
      "ti",
      "tzunpusulnaj",
      "uej"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pantalón está socado (apretado).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "sala",
      "tetek"
    ],
    "wordBank": [
      "Ne",
      "sala",
      "tetek",
      "gajgalanchichin",
      "shukijiak",
      "majmatznaj"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La camisa está floja.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "kashantik"
    ],
    "wordBank": [
      "Ne",
      "koton",
      "kashantik",
      "ajkatek",
      "chikiwit",
      "amat"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La flor es fragante (olorosa).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shuchit",
      "puputukatuk"
    ],
    "wordBank": [
      "Ne",
      "shuchit",
      "puputukatuk",
      "tzunmurushuj",
      "ti",
      "ajkatek"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pescado apesta (olor a desechos).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "michin",
      "ijiak"
    ],
    "wordBank": [
      "Ne",
      "michin",
      "ijiak",
      "melawaya",
      "tumawakmet",
      "yey"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El café está espeso.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "atutun",
      "tzukultik"
    ],
    "wordBank": [
      "Ne",
      "atutun",
      "tzukultik",
      "mijmikik",
      "waktuk",
      "ni"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El pollo está sancochado (tibio).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "puyuj",
      "tamanti"
    ],
    "wordBank": [
      "Ne",
      "puyuj",
      "tamanti",
      "yawal",
      "gajgalanchichin",
      "pichawakmet"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El libro es nuevo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "amachti",
      "yankwik"
    ],
    "wordBank": [
      "Ne",
      "amachti",
      "yankwik",
      "pichawakmet",
      "ni",
      "sala"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La tortilla es gruesa.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tamal",
      "tepuntik"
    ],
    "wordBank": [
      "Ne",
      "tamal",
      "tepuntik",
      "nawi",
      "tumawak",
      "yey"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El árbol es robusto.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kwawit",
      "chamawak"
    ],
    "wordBank": [
      "Ne",
      "kwawit",
      "chamawak",
      "puyuj",
      "melawaya",
      "gajgalanchichin"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La niña es bonita.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "siwapil",
      "galanchin"
    ],
    "wordBank": [
      "Ne",
      "siwapil",
      "galanchin",
      "tutut",
      "puyek",
      "ikman"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El camino es ancho",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ujti",
      "patawak."
    ],
    "wordBank": [
      "Ne",
      "ujti",
      "patawak.",
      "tzunkuluchuj",
      "kakti",
      "pelu"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El camino es estrecho",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "ujti",
      "tzuyutztik."
    ],
    "wordBank": [
      "Ne",
      "ujti",
      "tzuyutztik.",
      "melawaya",
      "tesu",
      "tuchti"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La mesa es cuadrada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "patznaj",
      "nawi",
      "itech."
    ],
    "wordBank": [
      "Ne",
      "patznaj",
      "nawi",
      "itech.",
      "chikiwit",
      "kashantik",
      "nitiltikchin"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Yo soy trigueño",
    "character": "Neutral.svg",
    "correct": [
      "Naja",
      "nichipawak."
    ],
    "wordBank": [
      "Naja",
      "nichipawak.",
      "yulik",
      "puyek",
      "tumawakmet"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Tú eres de piel clara",
    "character": "Neutral.svg",
    "correct": [
      "Taja",
      "tiistakchin."
    ],
    "wordBank": [
      "Taja",
      "tiistakchin.",
      "ajwituk",
      "pelu",
      "tamanti"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Su cabello es rizado",
    "character": "Neutral.svg",
    "correct": [
      "Itzunkal",
      "tzunpusulnaj."
    ],
    "wordBank": [
      "Itzunkal",
      "tzunpusulnaj.",
      "sesek",
      "wan",
      "pinulchini"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Nosotros somos bonitos",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "ti",
      "gajgalanchichin."
    ],
    "wordBank": [
      "Tejemet",
      "ti",
      "gajgalanchichin.",
      "achijchipa",
      "nichipawak",
      "itzunkal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Ustedes son delgados",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "an",
      "pichawakmet."
    ],
    "wordBank": [
      "Anmejemet",
      "an",
      "pichawakmet.",
      "tumawakmet",
      "kakti",
      "kanawak"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "Ellas son gordas",
    "character": "Neutral.svg",
    "correct": [
      "Yejemet",
      "tumawakmet."
    ],
    "wordBank": [
      "Yejemet",
      "tumawakmet.",
      "susulpuknaj",
      "tzuyutztik",
      "takwal"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La camisa está arrugada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "majmatznaj."
    ],
    "wordBank": [
      "Ne",
      "koton",
      "majmatznaj.",
      "michin",
      "taja",
      "piltzin"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "La camisa está planchada",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "koton",
      "melawaya."
    ],
    "wordBank": [
      "Ne",
      "koton",
      "melawaya.",
      "ni",
      "tepusti",
      "tamanti"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El agua está caliente",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "at",
      "tutunik."
    ],
    "wordBank": [
      "Ne",
      "at",
      "tutunik.",
      "ajwituk",
      "puputuka",
      "ikman"
    ]
  },
  {
    "type": "translate",
    "stage": 10,
    "prompt": "El hielo está frío",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "at",
      "takwawak",
      "sesek."
    ],
    "wordBank": [
      "Ne",
      "at",
      "takwawak",
      "sesek.",
      "mekat",
      "siwapil",
      "kakti"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Adentro",
    "character": "Neutral.svg",
    "correct": [
      "Ijtik"
    ],
    "wordBank": [
      "Ijtik",
      "kwawit",
      "wey",
      "nami"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Tenkál",
    "character": "Neutral.svg",
    "correct": [
      "Afuera"
    ],
    "wordBank": [
      "Afuera",
      "jpak",
      "melajkan",
      "atiluni"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Lejos",
    "character": "Neutral.svg",
    "correct": [
      "Wejka"
    ],
    "wordBank": [
      "Wejka",
      "weyaka",
      "nami",
      "nemi"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Aquí",
    "character": "Neutral.svg",
    "correct": [
      "Nikan"
    ],
    "wordBank": [
      "Nikan",
      "imaltapach",
      "ajkuik",
      "nepanta"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Allá",
    "character": "Neutral.svg",
    "correct": [
      "Né"
    ],
    "wordBank": [
      "Né",
      "niansan",
      "tech",
      "nitakwa"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Debajo de",
    "character": "Neutral.svg",
    "correct": [
      "-Tan"
    ],
    "wordBank": [
      "-Tan",
      "lala",
      "tet",
      "itajku"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Encima de / Sobre",
    "character": "Neutral.svg",
    "correct": [
      "-Jpak"
    ],
    "wordBank": [
      "-Jpak",
      "melajkan",
      "tuchti",
      "nujpak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Enfrente de",
    "character": "Neutral.svg",
    "correct": [
      "-Ishpan"
    ],
    "wordBank": [
      "-Ishpan",
      "tan",
      "mistun",
      "iwejkatika"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Atrás de",
    "character": "Neutral.svg",
    "correct": [
      "-Ipan"
    ],
    "wordBank": [
      "-Ipan",
      "tepet",
      "nitakwa",
      "achtu"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Junto a / Pegado a",
    "character": "Neutral.svg",
    "correct": [
      "-Tech"
    ],
    "wordBank": [
      "-Tech",
      "anmujpak",
      "ka",
      "iwejkatika"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Ne tuchti nemi ka",
    "after": "ne kushtalchin. (El conejo está *dentro* de la mochila)",
    "correct": "ijtik",
    "options": [
      "ijtik",
      "-Kwatan",
      "mumayulka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Si el conejo está a la *derecha* de alguien, se dice ka",
    "after": ".",
    "correct": "-maltapach",
    "options": [
      "-mayulka",
      "tutajku",
      "-maltapach"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"¿Qué tan lejos está tu casa?\" se pregunta: ¿Keski",
    "after": "nemi muchan?",
    "correct": "iwejkatika",
    "options": [
      "-itzinu",
      "unisan",
      "iwejkatika"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"Entre\" dos cosas se dice",
    "after": ".",
    "correct": "-tzalan",
    "options": [
      "-tzajtzalan",
      "Nujpak",
      "-tzalan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "El conejo está *cerca* de la mochila: Ne tuchti nemi",
    "after": "ne kushtalchin.",
    "correct": "inawak",
    "options": [
      "inawak",
      "tujpak",
      "wejka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"En la orilla de la calle\" se traduce como",
    "after": ".",
    "correct": "tenhujti",
    "options": [
      "tenhujti",
      "tuikshitan",
      "tenhat"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Para decir que algo está \"por todos lados\" usamos",
    "after": ".",
    "correct": "ka nujme",
    "options": [
      "ka nujme",
      "Ne tutut nemi ka talchi",
      "Ne tuchti nemi ka itajku ne amat"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"A mi izquierda\" se dice",
    "after": ".",
    "correct": "numayulka",
    "options": [
      "numayulka",
      "-Jpak",
      "mumayulka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Ne tuchti nemi ka",
    "after": ". (El conejo está en el suelo)",
    "correct": "talchi",
    "options": [
      "-Weyaka",
      "talchi",
      "ajkuik"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "El punto cardinal donde *sale* el sol es",
    "after": ".",
    "correct": "Kan kisa ne tunal",
    "options": [
      "Kan kisa ne tunal",
      "Kan kalaki ne tunal",
      "Wejka ipal nikan"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está arriba (en plano inclinado).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ajkuik."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ajkuik.",
      "itenpan",
      "keski",
      "ishajketzijtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está a sus pies.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "iikshitan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "iikshitan.",
      "puyek",
      "unisan",
      "tenhapan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Aquí nomás está el conejo.",
    "character": "Neutral.svg",
    "correct": [
      "Unisan",
      "nemi",
      "ne",
      "tuchti."
    ],
    "wordBank": [
      "Unisan",
      "nemi",
      "ne",
      "tuchti.",
      "iikshitan",
      "kan",
      "lala"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El plato está boca arriba.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "taijtik",
      "nemi",
      "ishajketzijtuk."
    ],
    "wordBank": [
      "Ne",
      "taijtik",
      "nemi",
      "ishajketzijtuk.",
      "mistun",
      "ujti",
      "inishpan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "La taza está boca abajo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "atiluni",
      "nemi",
      "ishtapachijtuk."
    ],
    "wordBank": [
      "Ne",
      "atiluni",
      "nemi",
      "ishtapachijtuk.",
      "ishtapachijtuk",
      "talchi",
      "itenkal"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en la esquina de la calle.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ishku",
      "ne",
      "ujti."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ishku",
      "ne",
      "ujti.",
      "ujti",
      "nepanta",
      "nikansan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está entre (muchas) mochilas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "intzajtzalan",
      "ne",
      "kushtalchin."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "intzajtzalan",
      "ne",
      "kushtalchin.",
      "ipal",
      "muchan",
      "tani"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "De donde viene el viento (Norte).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "witz",
      "ne",
      "ejekat."
    ],
    "wordBank": [
      "Kan",
      "witz",
      "ne",
      "ejekat.",
      "ishku",
      "keski",
      "mistun"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Donde está el mar (Sur).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at."
    ],
    "wordBank": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at.",
      "itenkal",
      "nikan",
      "nuchan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está frente a mí.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "nuishpan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "nuishpan.",
      "mujpak",
      "intzalan",
      "iishnakastan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está detrás de ti.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "muipan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "muipan.",
      "ishpan",
      "ipan",
      "itzinu"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en la cima del cerro.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itzunpan",
      "ne",
      "tepet."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itzunpan",
      "ne",
      "tepet.",
      "itenkal",
      "at",
      "ikajku"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en la base del cerro.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itzinu",
      "ne",
      "tepet."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itzinu",
      "ne",
      "tepet.",
      "ikajku",
      "sansenkak",
      "puyek"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está al lado de la mochila.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "inakastan",
      "ne",
      "kushtalchin."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "inakastan",
      "ne",
      "kushtalchin.",
      "inishpan",
      "amat",
      "nin"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está junto a (pegado a) la pared.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "tech",
      "ne",
      "tapepechul."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "tech",
      "ne",
      "tapepechul.",
      "lala",
      "jpak",
      "kal"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está encima de él.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ijpak."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ijpak.",
      "muipan",
      "itajku",
      "wejka"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está debajo de nosotros.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tutan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tutan.",
      "imayulka",
      "kwawit",
      "tatajku"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "A la derecha de ustedes.",
    "character": "Neutral.svg",
    "correct": [
      "Anmuishnakastan."
    ],
    "wordBank": [
      "Anmuishnakastan.",
      "tepet",
      "weyaka",
      "puyek"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Aquí cerca.",
    "character": "Neutral.svg",
    "correct": [
      "Niansan."
    ],
    "wordBank": [
      "Niansan.",
      "nuchan",
      "patznaj",
      "nujpak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En medio de la casa.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "itajku",
      "ne",
      "kal."
    ],
    "wordBank": [
      "Ka",
      "itajku",
      "ne",
      "kal.",
      "tenkal",
      "tepet",
      "kan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está afuera.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tenkál."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tenkál.",
      "imayulka",
      "tenhat",
      "atiluni"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Donde se oculta el sol.",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "kalaki",
      "ne",
      "tunal."
    ],
    "wordBank": [
      "Kan",
      "kalaki",
      "ne",
      "tunal.",
      "unisan",
      "intzajtzalan",
      "nunawak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Al pie de mis pies.",
    "character": "Neutral.svg",
    "correct": [
      "Nuikshitan."
    ],
    "wordBank": [
      "Nuikshitan.",
      "nin",
      "witz",
      "ujti"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En la orilla del río.",
    "character": "Neutral.svg",
    "correct": [
      "Tenhapan."
    ],
    "wordBank": [
      "Tenhapan.",
      "kisa",
      "at",
      "nikan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Lejos de tu casa.",
    "character": "Neutral.svg",
    "correct": [
      "Wejka",
      "ipal",
      "muchan."
    ],
    "wordBank": [
      "Wejka",
      "ipal",
      "muchan.",
      "tuipan",
      "iishnakastan",
      "inawak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está entre ellos (dos).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "intzalan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "intzalan.",
      "inakastan",
      "tech",
      "numayulka"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Cerca de mí.",
    "character": "Neutral.svg",
    "correct": [
      "Nunawak."
    ],
    "wordBank": [
      "Nunawak.",
      "tapepechul",
      "nujpak",
      "tuipan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Sobre la mesa.",
    "character": "Neutral.svg",
    "correct": [
      "Ijpak",
      "ne",
      "patznaj."
    ],
    "wordBank": [
      "Ijpak",
      "ne",
      "patznaj.",
      "nitakwa",
      "tamachtiluyan",
      "niansan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Por todos lados.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "nujme."
    ],
    "wordBank": [
      "Ka",
      "nujme.",
      "ujti",
      "amat",
      "ipan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Atrás de la casa.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "ipan",
      "ne",
      "kal."
    ],
    "wordBank": [
      "Ka",
      "ipan",
      "ne",
      "kal.",
      "ujti",
      "jpak",
      "ejekat"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En medio",
    "character": "Neutral.svg",
    "correct": [
      "-Tajku"
    ],
    "wordBank": [
      "-Tajku",
      "nami",
      "nitakwa",
      "muchan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Abajo (en plano inclinado)",
    "character": "Neutral.svg",
    "correct": [
      "Tani"
    ],
    "wordBank": [
      "Tani",
      "nuchan",
      "tajku",
      "nunawak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Esquina",
    "character": "Neutral.svg",
    "correct": [
      "Ishku"
    ],
    "wordBank": [
      "Ishku",
      "ajku",
      "wejka",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Por todos lados",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "nujme"
    ],
    "wordBank": [
      "Ka",
      "nujme",
      "mishti",
      "nikan",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "A la derecha de",
    "character": "Neutral.svg",
    "correct": [
      "-Maltapach"
    ],
    "wordBank": [
      "-Maltapach",
      "mayulka",
      "ajkuik",
      "ajku"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "A la izquierda de",
    "character": "Neutral.svg",
    "correct": [
      "-Mayulka"
    ],
    "wordBank": [
      "-Mayulka",
      "nin",
      "ne",
      "amat"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En el suelo",
    "character": "Neutral.svg",
    "correct": [
      "Talchi"
    ],
    "wordBank": [
      "Talchi",
      "wejka",
      "ne",
      "tenhujti"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Arriba (en lo alto)",
    "character": "Neutral.svg",
    "correct": [
      "Ikajku"
    ],
    "wordBank": [
      "Ikajku",
      "tapepechul",
      "kwawit",
      "imayulka"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Adentro",
    "character": "Neutral.svg",
    "correct": [
      "Ijtik"
    ],
    "wordBank": [
      "Ijtik",
      "kushtalchin",
      "piltzin",
      "niansan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Aquí nomás",
    "character": "Neutral.svg",
    "correct": [
      "Unisan"
    ],
    "wordBank": [
      "Unisan",
      "ijtik",
      "mayulka",
      "ipan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 11,
    "prompt": "¿Cómo se dice \"enfrente de ustedes\"?",
    "character": "Neutral.svg",
    "correct": "Anmuishpan",
    "options": [
      "Achtu",
      "Anmuishpan",
      "Inishpan"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"A la derecha del conejo\" se dice ka",
    "after": "ne tuchti.",
    "correct": "imaltapach",
    "options": [
      "imayulka",
      "imaltapach",
      "tujpak"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"En la orilla del mar\" se traduce como",
    "after": ".",
    "correct": "tenhat",
    "options": [
      "tenhat",
      "tenhujti",
      "Tatajku"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Estar situado \"entre muchos árboles\" requiere el término",
    "after": ".",
    "correct": "-tzajtzalan",
    "options": [
      "-tzajtzalan",
      "-tzalan",
      "ishtapachijtuk"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "El punto cardinal Norte se define como",
    "after": ".",
    "correct": "Kan witz ne ejekat",
    "options": [
      "Kan kisa ne tunal",
      "Ne tuchti nemi intzajtzalan ne kushtalchin",
      "Kan witz ne ejekat"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "El punto cardinal Oeste es",
    "after": ".",
    "correct": "Kan kalaki ne tunal",
    "options": [
      "Kan kalaki ne tunal",
      "Ne tuchti nemi ka tatzinu",
      "Kan nemi ne wey puyek at"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "El estado de estar \"Boca arriba\" es",
    "after": ".",
    "correct": "ishajketzijtuk",
    "options": [
      "ishajketzijtuk",
      "-Maltapach",
      "ishtapachijtuk"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"A mi lado\" (izquierda) se dice",
    "after": ".",
    "correct": "nunakastan",
    "options": [
      "muishnakastan",
      "nunakastan",
      "-Ishpan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Para decir \"encima de nosotros\" usamos",
    "after": ".",
    "correct": "tujpak",
    "options": [
      "iwejkatika",
      "tujpak",
      "nujpak"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"Lejos de aquí\" se traduce como",
    "after": ".",
    "correct": "wejka ipal nikan",
    "options": [
      "Niu-nitakwa achtu",
      "wejka ipal nikan",
      "Ka ipan ne kal"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en medio del papel (o mapa).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itajku",
      "ne",
      "amat."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itajku",
      "ne",
      "amat.",
      "nitakwa",
      "tamachtiluyan",
      "inakastan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "¿Dónde está el mar? (Punto cardinal Sur).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at?"
    ],
    "wordBank": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at?",
      "unisan",
      "inawak",
      "tepet"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está al lado de la mochila.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "inakastan",
      "ne",
      "kushtalchin."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "inakastan",
      "ne",
      "kushtalchin.",
      "tet",
      "ipan",
      "iishnakastan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está abajo (en la bajada).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tani."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tani.",
      "nunawak",
      "tenhat",
      "talchi"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El plato está boca arriba.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "taijtik",
      "nemi",
      "ishajketzijtuk."
    ],
    "wordBank": [
      "Ne",
      "taijtik",
      "nemi",
      "ishajketzijtuk.",
      "niu",
      "iwejkatika",
      "amat"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "La taza está boca abajo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "atiluni",
      "nemi",
      "ishtapachijtuk."
    ],
    "wordBank": [
      "Ne",
      "atiluni",
      "nemi",
      "ishtapachijtuk.",
      "tutan",
      "itenkal",
      "anmuishnakastan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Donde sale el sol (Este).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "kisa",
      "ne",
      "tunal."
    ],
    "wordBank": [
      "Kan",
      "kisa",
      "ne",
      "tunal.",
      "tenhat",
      "imaltapach",
      "mishti"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está entre (dos) mochilas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "intzalan",
      "ne",
      "kushtalchin."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "intzalan",
      "ne",
      "kushtalchin.",
      "amachti",
      "nikansan",
      "tatajku"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está a mis pies.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "nuikshitan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "nuikshitan.",
      "nuishpan",
      "puyek",
      "sansenkak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en la cima del cerro.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itzunpan",
      "ne",
      "tepet."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itzunpan",
      "ne",
      "tepet.",
      "tapepechul",
      "keski",
      "nujme"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está allá.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "né."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "né.",
      "tani",
      "ishajketzijtuk",
      "tenhat"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está a la derecha de la mochila.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "iishnakastan",
      "ne",
      "kushtalchin."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "iishnakastan",
      "ne",
      "kushtalchin.",
      "tatzinu",
      "tutut",
      "maltapach"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Donde se oculta el sol (Oeste).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "kalaki",
      "ne",
      "tunal."
    ],
    "wordBank": [
      "Kan",
      "kalaki",
      "ne",
      "tunal.",
      "mujpak",
      "nikansan",
      "tenhat"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está aquí.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "nin."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "nin.",
      "taijtik",
      "patznaj",
      "tenkal"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está dentro de la mochila.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ijtik",
      "ne",
      "kushtalchin."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ijtik",
      "ne",
      "kushtalchin.",
      "taijtik",
      "tani",
      "ajku"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está detrás de nosotros.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "tuipan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "tuipan.",
      "tan",
      "nuishpan",
      "jpak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en el suelo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "talchi."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "talchi.",
      "piltzin",
      "ishpan",
      "witz"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está arriba (en lo alto).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ikajku."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ikajku.",
      "jpak",
      "amachti",
      "niansan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está sobre ti.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "mujpak."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "mujpak.",
      "numayulka",
      "kal",
      "melajkan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "La mochila está a mi izquierda.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kushtalchin",
      "nemi",
      "ka",
      "numayulka."
    ],
    "wordBank": [
      "Ne",
      "kushtalchin",
      "nemi",
      "ka",
      "numayulka.",
      "itenkal",
      "tenhat",
      "inakastan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está cerca de la mochila.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "inawak",
      "ne",
      "kushtalchin."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "inawak",
      "ne",
      "kushtalchin.",
      "iishnakastan",
      "kal",
      "achtu"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Aquí nomás está el conejo.",
    "character": "Neutral.svg",
    "correct": [
      "Unisan",
      "nemi",
      "ne",
      "tuchti."
    ],
    "wordBank": [
      "Unisan",
      "nemi",
      "ne",
      "tuchti.",
      "kushtalchin",
      "kwatan",
      "jpak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en la esquina.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ishku."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ishku.",
      "unisan",
      "witz",
      "inishpan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "¿Qué tan lejos está tu casa?",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "iwejkatika",
      "nemi",
      "muchan?."
    ],
    "wordBank": [
      "¿Keski",
      "iwejkatika",
      "nemi",
      "muchan?.",
      "tuipan",
      "muchan",
      "jpak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está por todos lados.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "nujme."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "nujme.",
      "iishnakastan",
      "kalaki",
      "nuchan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en la base del cerro.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itzinu",
      "ne",
      "tepet."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itzinu",
      "ne",
      "tepet.",
      "munawak",
      "talchi",
      "kisa"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está frente a ellos.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "inishpan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "inishpan.",
      "keski",
      "intzalan",
      "tenkal"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "La mochila está a la derecha del conejo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kushtalchin",
      "nemi",
      "ka",
      "imaltapach",
      "ne",
      "tuchti."
    ],
    "wordBank": [
      "Ne",
      "kushtalchin",
      "nemi",
      "ka",
      "imaltapach",
      "ne",
      "tuchti.",
      "tuipan",
      "tamachtiluyan",
      "ishajketzijtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Está lejos de mi casa.",
    "character": "Neutral.svg",
    "correct": [
      "Nemi",
      "wejka",
      "ipal",
      "nuchan."
    ],
    "wordBank": [
      "Nemi",
      "wejka",
      "ipal",
      "nuchan.",
      "patznaj",
      "tenhapan",
      "anmuishnakastan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está adentro.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ijtik."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ijtik.",
      "nuchan",
      "ijtik",
      "kushtalchin"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Sur.",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at"
    ],
    "wordBank": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at",
      "amachti",
      "iikshitan",
      "nin"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Este.",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "kisa",
      "ne",
      "tunal"
    ],
    "wordBank": [
      "Kan",
      "kisa",
      "ne",
      "tunal",
      "tet",
      "tenhapan",
      "anmujpak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Oeste.",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "kalaki",
      "ne",
      "tunal"
    ],
    "wordBank": [
      "Kan",
      "kalaki",
      "ne",
      "tunal",
      "tenhujti",
      "patznaj",
      "nuikshitan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Norte.",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "witz",
      "ne",
      "ejekat"
    ],
    "wordBank": [
      "Kan",
      "witz",
      "ne",
      "ejekat",
      "muipan",
      "nuchan",
      "sansenkak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "A la orilla del río,.",
    "character": "Neutral.svg",
    "correct": [
      "Tenhapan"
    ],
    "wordBank": [
      "Tenhapan",
      "anmuishnakastan",
      "nunawak",
      "itenkal"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En la cima del cerro.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "itzunpan",
      "ne",
      "tepet"
    ],
    "wordBank": [
      "Ka",
      "itzunpan",
      "ne",
      "tepet",
      "iikshitan",
      "lala",
      "inakastan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Al pie del cerro.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "itzinu",
      "ne",
      "tepet"
    ],
    "wordBank": [
      "Ka",
      "itzinu",
      "ne",
      "tepet",
      "inishpan",
      "kan",
      "muipan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "A la orilla de la calle,.",
    "character": "Neutral.svg",
    "correct": [
      "Tenhujti"
    ],
    "wordBank": [
      "Tenhujti",
      "muipan",
      "nemi",
      "mishti"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En medio,.",
    "character": "Neutral.svg",
    "correct": [
      "Tatajku"
    ],
    "wordBank": [
      "Tatajku",
      "tenhapan",
      "kisa",
      "muipan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Aquí cerca,.",
    "character": "Neutral.svg",
    "correct": [
      "Niansan"
    ],
    "wordBank": [
      "Niansan",
      "talchi",
      "ne",
      "ikajku"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Estar situado \"entre muchas mochilas\" se dice",
    "after": "ne kushtalchin.",
    "correct": "intzajtzalan",
    "options": [
      "intzajtzalan",
      "numayulka",
      "intzalan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"A la orilla del mar\" se traduce como",
    "after": ".",
    "correct": "tenhat",
    "options": [
      "tenhujti",
      "-Kwatan",
      "tenhat"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Si el plato está \"boca arriba\" se encuentra",
    "after": ".",
    "correct": "ishajketzijtuk",
    "options": [
      "-Tan",
      "ishtapachijtuk",
      "ishajketzijtuk"
    ],
    "hint": ""
  },
  {
    "type": "select_translation",
    "stage": 11,
    "prompt": "¿Cuál es el término para decir que algo está \"en la cima\"?.",
    "character": "Neutral.svg",
    "correct": "-itzunpan",
    "options": [
      "-tzalan",
      "-itzinu",
      "-itzunpan"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "El punto cardinal Norte se identifica por",
    "after": ".",
    "correct": "Kan witz ne ejekat",
    "options": [
      "Kan witz ne ejekat",
      "Ne amachti nemi mujpak",
      "Kan kisa ne tunal"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "El Este es por donde",
    "after": ".",
    "correct": "kisa ne tunal",
    "options": [
      "kalaki ne tunal",
      "Ka itzinu ne tepet",
      "kisa ne tunal"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"Hacia abajo\" (en una calle inclinada) se dice",
    "after": ".",
    "correct": "ka tani",
    "options": [
      "¿Keski ipatiw?",
      "ka tani",
      "ka ajkuik"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"Hacia arriba\" (en plano inclinado) se traduce como",
    "after": ".",
    "correct": "ka ajkuik",
    "options": [
      "Ne tuchti nemi muipan",
      "ka ajkuik",
      "ka tani"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Estar \"al pie de mis pies\" se dice",
    "after": ".",
    "correct": "nuikshitan",
    "options": [
      "intzajtzalan",
      "tuikshitan",
      "nuikshitan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"Aquí nomás\" se expresa como",
    "after": ".",
    "correct": "unisan",
    "options": [
      "unisan",
      "wejka",
      "Ishku"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está dentro de la caja,.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ijtik",
      "ne",
      "shulun."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ijtik",
      "ne",
      "shulun.",
      "nujpak",
      "ishajketzijtuk",
      "ishpan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está allá.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "né."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "né.",
      "nikan",
      "ujti",
      "ajku"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Aquí nomás está el conejo.",
    "character": "Neutral.svg",
    "correct": [
      "Unisan",
      "nemi",
      "ne",
      "tuchti."
    ],
    "wordBank": [
      "Unisan",
      "nemi",
      "ne",
      "tuchti.",
      "taijtik",
      "imaltapach",
      "iishnakastan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está a la derecha de la mochila.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "iishnakastan",
      "ne",
      "kushtalchin."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "iishnakastan",
      "ne",
      "kushtalchin.",
      "nami",
      "munawak",
      "itajku"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está frente a ellos.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "inishpan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "inishpan.",
      "nujpak",
      "tapepechul",
      "amat"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en medio del papel (o mapa).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itajku",
      "ne",
      "amat."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "itajku",
      "ne",
      "amat.",
      "tenhujti",
      "talchi",
      "nunawak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "¿Dónde está el mar? (Sur).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at?"
    ],
    "wordBank": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at?",
      "anmujpak",
      "nikan",
      "talchi"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está entre (dos) mochilas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "intzalan",
      "ne",
      "kushtalchin."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "intzalan",
      "ne",
      "kushtalchin.",
      "melajkan",
      "ijpak",
      "tenhapan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en la esquina de la calle.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ishku",
      "ne",
      "ujti."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ishku",
      "ne",
      "ujti.",
      "nepanta",
      "itzinu",
      "tatzinu"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en la base.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tatzinu."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tatzinu.",
      "ishtapachijtuk",
      "sansenkak",
      "wey"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está arriba (en plano inclinado).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ajkuik."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "ajkuik.",
      "talchi",
      "itzunpan",
      "niansan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está abajo (en plano inclinado).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tani."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tani.",
      "shulun",
      "lala",
      "numayulka"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está en el suelo (abajo vertical).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "talchi."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "talchi.",
      "anmuishnakastan",
      "wey",
      "ishtapachijtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está afuera.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tenkál."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tenkál.",
      "puyek",
      "ejekat",
      "mujpak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está junto a (pegado a) la pared.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "tech",
      "ne",
      "tapepechul."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "tech",
      "ne",
      "tapepechul.",
      "tunal",
      "atiluni",
      "wey"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está detrás de nosotros.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "tuipan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "tuipan.",
      "talchi",
      "nepanta",
      "weyaka"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está encima de ustedes.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "anmujpak."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "anmujpak.",
      "intzajtzalan",
      "inishpan",
      "nujme"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "A la izquierda del conejo.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "imayulka",
      "ne",
      "tuchti."
    ],
    "wordBank": [
      "Ka",
      "imayulka",
      "ne",
      "tuchti.",
      "jpak",
      "tatajku",
      "keski"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está a mis pies.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "nuikshitan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "nuikshitan.",
      "mayulka",
      "ipan",
      "ijtik"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En la orilla del río.",
    "character": "Neutral.svg",
    "correct": [
      "Tenhapan."
    ],
    "wordBank": [
      "Tenhapan.",
      "tuchti",
      "mayulka",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Lejos de aquí.",
    "character": "Neutral.svg",
    "correct": [
      "Wejka",
      "ipal",
      "nikan."
    ],
    "wordBank": [
      "Wejka",
      "ipal",
      "nikan.",
      "nuchan",
      "ijtik",
      "amachti"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Cerca de ti.",
    "character": "Neutral.svg",
    "correct": [
      "Munawak."
    ],
    "wordBank": [
      "Munawak.",
      "ishajketzijtuk",
      "anmuishnakastan",
      "jpak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El plato está boca abajo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "taijtik",
      "nemi",
      "ishtapachijtuk."
    ],
    "wordBank": [
      "Ne",
      "taijtik",
      "nemi",
      "ishtapachijtuk.",
      "nepanta",
      "at",
      "numayulka"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "La mochila está aquí mismo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kushtalchin",
      "nemi",
      "nikansan."
    ],
    "wordBank": [
      "Ne",
      "kushtalchin",
      "nemi",
      "nikansan.",
      "ka",
      "anmuishnakastan",
      "iikshitan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Por todos lados.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "nujme."
    ],
    "wordBank": [
      "Ka",
      "nujme.",
      "tenkal",
      "nujme",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Donde viene el viento (Norte).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "witz",
      "ne",
      "ejekat."
    ],
    "wordBank": [
      "Kan",
      "witz",
      "ne",
      "ejekat.",
      "jpak",
      "unisan",
      "iwejkatika"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Donde está el mar (Sur).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at."
    ],
    "wordBank": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at.",
      "ka",
      "tatzinu",
      "mishti"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "¿Qué tan lejos está tu casa?",
    "character": "Neutral.svg",
    "correct": [
      "¿Keski",
      "iwejkatika",
      "nemi",
      "muchan?."
    ],
    "wordBank": [
      "¿Keski",
      "iwejkatika",
      "nemi",
      "muchan?.",
      "afuera",
      "tepet",
      "nami"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está entre ellos (muchos).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "intzajtzalan."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "intzajtzalan.",
      "ipal",
      "patznaj",
      "keski"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Encima de mí.",
    "character": "Neutral.svg",
    "correct": [
      "Nujpak."
    ],
    "wordBank": [
      "Nujpak.",
      "tenkal",
      "tech",
      "nuishpan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Enfrente (más alejado que *-ishpan*).",
    "character": "Neutral.svg",
    "correct": [
      "-Melajkan"
    ],
    "wordBank": [
      "-Melajkan",
      "nitakwa",
      "patznaj",
      "talchi"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Al lado de la cintura.",
    "character": "Neutral.svg",
    "correct": [
      "-Nepanta"
    ],
    "wordBank": [
      "-Nepanta",
      "at",
      "tutut",
      "ishpan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Primero / Antes.",
    "character": "Neutral.svg",
    "correct": [
      "Achtu"
    ],
    "wordBank": [
      "Achtu",
      "lala",
      "ishajketzijtuk",
      "ka"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En el mismo lugar.",
    "character": "Neutral.svg",
    "correct": [
      "Sansenkak"
    ],
    "wordBank": [
      "Sansenkak",
      "intzajtzalan",
      "nuishpan",
      "wey"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Longitud / Lo largo de.",
    "character": "Neutral.svg",
    "correct": [
      "-Weyaka"
    ],
    "wordBank": [
      "-Weyaka",
      "piltzin",
      "inakastan",
      "tenhujti"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En la orilla (río o barranco).",
    "character": "Neutral.svg",
    "correct": [
      "Itenpan"
    ],
    "wordBank": [
      "Itenpan",
      "mistun",
      "lala",
      "melajkan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En el patio.",
    "character": "Neutral.svg",
    "correct": [
      "Iténkal"
    ],
    "wordBank": [
      "Iténkal",
      "nikansan",
      "tapepechul",
      "ipal"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En la cabecera (atrás y arriba).",
    "character": "Neutral.svg",
    "correct": [
      "-Kwatan"
    ],
    "wordBank": [
      "-Kwatan",
      "puyek",
      "nemi",
      "ajku"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Abajo (en plano inclinado).",
    "character": "Neutral.svg",
    "correct": [
      "Tani"
    ],
    "wordBank": [
      "Tani",
      "talchi",
      "ijpak",
      "nujpak"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Arriba (en lo más alto).",
    "character": "Neutral.svg",
    "correct": [
      "Ikajku"
    ],
    "wordBank": [
      "Ikajku",
      "numayulka",
      "tepet",
      "itajku"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "El gato está \"detrás de ti\": Ne mistun nemi",
    "after": ".",
    "correct": "muipan",
    "options": [
      "muipan",
      "nuipan",
      "Ishku"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Las flores están \"por todos lados\": Ne shuchit nemit",
    "after": ".",
    "correct": "ka nujme",
    "options": [
      "Niu-nitakwa achtu",
      "ka nujme",
      "Ne tuchti nemi ka tenkál ne shulun"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "El punto cardinal Norte se dice",
    "after": ".",
    "correct": "Kan witz ne ejekat",
    "options": [
      "Ne tuchti nemi anmujpak",
      "Kan witz ne ejekat",
      "Kan nemi ne wey puyek at"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "El punto cardinal Este es",
    "after": ".",
    "correct": "Kan kisa ne tunal",
    "options": [
      "Kan kalaki ne tunal",
      "¿Keski ipatiw?",
      "Kan kisa ne tunal"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"¿Qué tan lejos?\" se pregunta:",
    "after": ".",
    "correct": "¿Keski iwejkatika?",
    "options": [
      "Ne tuchti nemi ka tenkál ne shulun",
      "¿Keski ipatiw?",
      "¿Keski iwejkatika?"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"En medio de ellos\" se traduce como",
    "after": ".",
    "correct": "intajku",
    "options": [
      "tutajku",
      "intajku",
      "ishajketzijtuk"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Para decir \"Boca abajo\" usamos",
    "after": ".",
    "correct": "ishtapachijtuk",
    "options": [
      "Tenhujti",
      "ishtapachijtuk",
      "ishajketzijtuk"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "Estar \"al pie de nosotros\" es",
    "after": ".",
    "correct": "tuikshitan",
    "options": [
      "nuikshitan",
      "imaltapach",
      "tuikshitan"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"Aquí nomás\" se dice",
    "after": ".",
    "correct": "unisan",
    "options": [
      "tujpak",
      "unisan",
      "wejka"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 11,
    "before": "\"Lejos de aquí\" se traduce como",
    "after": ".",
    "correct": "wejka ipal nikan",
    "options": [
      "wejka ipal nikan",
      "Kan witz ne ejekat",
      "Ne tuchti nemi ka tenkál ne shulun"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El gato está en medio del papel.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "mistun",
      "nemi",
      "ka",
      "itajku",
      "ne",
      "amat."
    ],
    "wordBank": [
      "Ne",
      "mistun",
      "nemi",
      "ka",
      "itajku",
      "ne",
      "amat.",
      "itzinu",
      "wey",
      "tenhat"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El libro está dentro de la mochila.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "amachti",
      "nemi",
      "ijtik",
      "ne",
      "kushtalchin."
    ],
    "wordBank": [
      "Ne",
      "amachti",
      "nemi",
      "ijtik",
      "ne",
      "kushtalchin.",
      "muchan",
      "sansenkak",
      "kushtalchin"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Está lejos de mi casa.",
    "character": "Neutral.svg",
    "correct": [
      "Nami",
      "wejka",
      "ipal",
      "nuchan."
    ],
    "wordBank": [
      "Nami",
      "wejka",
      "ipal",
      "nuchan.",
      "maltapach",
      "keski",
      "itenkal"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está cerca del árbol.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "inawak",
      "ne",
      "kwawit."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "inawak",
      "ne",
      "kwawit.",
      "nunawak",
      "shulun",
      "nuikshitan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "¿Dónde se oculta el sol? (Punto cardinal Oeste).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "kalaki",
      "ne",
      "tunal?"
    ],
    "wordBank": [
      "Kan",
      "kalaki",
      "ne",
      "tunal?",
      "jpak",
      "anmujpak",
      "nikan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "La naranja está arriba (no tan alto).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "lala",
      "nemi",
      "ajku."
    ],
    "wordBank": [
      "Ne",
      "lala",
      "nemi",
      "ajku.",
      "tapepechul",
      "tutan",
      "itenpan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El plato está boca arriba.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "taijtik",
      "nemi",
      "ishajketzijtuk."
    ],
    "wordBank": [
      "Ne",
      "taijtik",
      "nemi",
      "ishajketzijtuk.",
      "tamachtiluyan",
      "wey",
      "nikansan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "La taza está boca abajo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "atiluni",
      "nemi",
      "ishtapachijtuk."
    ],
    "wordBank": [
      "Ne",
      "atiluni",
      "nemi",
      "ishtapachijtuk.",
      "witz",
      "nin",
      "tuipan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está abajo (en la bajada).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tani."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tani.",
      "talchi",
      "keski",
      "tani"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El gato está a la derecha del niño.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "mistun",
      "nemi",
      "imaltapach",
      "ne",
      "piltzín."
    ],
    "wordBank": [
      "Ne",
      "mistun",
      "nemi",
      "imaltapach",
      "ne",
      "piltzín.",
      "iwejkatika",
      "kwatan",
      "nitakwa"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "La mochila está a mi izquierda.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kushtalchin",
      "nemi",
      "ka",
      "numayulka."
    ],
    "wordBank": [
      "Ne",
      "kushtalchin",
      "nemi",
      "ka",
      "numayulka.",
      "niu",
      "witz",
      "puyek"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En la cima del cerro está la nube.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "itzunpan",
      "ne",
      "tepet",
      "nemi",
      "ne",
      "mishti."
    ],
    "wordBank": [
      "Ka",
      "itzunpan",
      "ne",
      "tepet",
      "nemi",
      "ne",
      "mishti.",
      "nunawak",
      "iwejkatika",
      "tan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Aquí cerca está la escuela.",
    "character": "Neutral.svg",
    "correct": [
      "Niansan",
      "nemi",
      "ne",
      "tamachtiluyan."
    ],
    "wordBank": [
      "Niansan",
      "nemi",
      "ne",
      "tamachtiluyan.",
      "puyek",
      "tenhapan",
      "melajkan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El pájaro está en el suelo.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tutut",
      "nemi",
      "ka",
      "talchi."
    ],
    "wordBank": [
      "Ne",
      "tutut",
      "nemi",
      "ka",
      "talchi.",
      "ikajku",
      "lala",
      "ishpan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Al pie del cerro está la casa.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "itzinu",
      "ne",
      "tepet",
      "nemi",
      "ne",
      "kal."
    ],
    "wordBank": [
      "Ka",
      "itzinu",
      "ne",
      "tepet",
      "nemi",
      "ne",
      "kal.",
      "mujpak",
      "ipal",
      "at"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En la orilla del mar.",
    "character": "Neutral.svg",
    "correct": [
      "Tenhat."
    ],
    "wordBank": [
      "Tenhat.",
      "iwejkatika",
      "anmujpak",
      "tani"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El gato está detrás de nosotros.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "mistun",
      "nemi",
      "tuipan."
    ],
    "wordBank": [
      "Ne",
      "mistun",
      "nemi",
      "tuipan.",
      "itenkal",
      "tuchti",
      "nikan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El libro está encima de ti.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "amachti",
      "nemi",
      "mujpak."
    ],
    "wordBank": [
      "Ne",
      "amachti",
      "nemi",
      "mujpak.",
      "shulun",
      "ejekat",
      "kushtalchin"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En medio de la calle.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "itajku",
      "ne",
      "ujti."
    ],
    "wordBank": [
      "Ka",
      "itajku",
      "ne",
      "ujti.",
      "nunawak",
      "nujpak",
      "muchan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El conejo está fuera de la caja.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tenkál",
      "ne",
      "shulun."
    ],
    "wordBank": [
      "Ne",
      "tuchti",
      "nemi",
      "ka",
      "tenkál",
      "ne",
      "shulun.",
      "kushtalchin",
      "ujti",
      "itzunpan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "A la derecha de ustedes.",
    "character": "Neutral.svg",
    "correct": [
      "Anmuishnakastan."
    ],
    "wordBank": [
      "Anmuishnakastan.",
      "kan",
      "kal",
      "ishtapachijtuk"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En la esquina de la casa.",
    "character": "Neutral.svg",
    "correct": [
      "Ka",
      "ishku",
      "ne",
      "kal."
    ],
    "wordBank": [
      "Ka",
      "ishku",
      "ne",
      "kal.",
      "iikshitan",
      "kwatan",
      "ajkuik"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Donde viene el viento (Norte).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "witz",
      "ne",
      "ejekat."
    ],
    "wordBank": [
      "Kan",
      "witz",
      "ne",
      "ejekat.",
      "wey",
      "itzunpan",
      "ajkuik"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "A mis pies.",
    "character": "Neutral.svg",
    "correct": [
      "Nuikshitan."
    ],
    "wordBank": [
      "Nuikshitan.",
      "tani",
      "tenhat",
      "iishnakastan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Lejos de tu casa.",
    "character": "Neutral.svg",
    "correct": [
      "Wejka",
      "ipal",
      "muchan."
    ],
    "wordBank": [
      "Wejka",
      "ipal",
      "muchan.",
      "afuera",
      "ipan",
      "muipan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El gato está entre las piedras (muchas).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "mistun",
      "nemi",
      "intzajtzalan",
      "ne",
      "tet."
    ],
    "wordBank": [
      "Ne",
      "mistun",
      "nemi",
      "intzajtzalan",
      "ne",
      "tet.",
      "ishtapachijtuk",
      "anmujpak",
      "wey"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Donde está el mar (Sur).",
    "character": "Neutral.svg",
    "correct": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at."
    ],
    "wordBank": [
      "Kan",
      "nemi",
      "ne",
      "wey",
      "puyek",
      "at.",
      "iishnakastan",
      "tapepechul",
      "ikajku"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "El pájaro está arriba (en lo alto).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tutut",
      "nemi",
      "ka",
      "ikajku."
    ],
    "wordBank": [
      "Ne",
      "tutut",
      "nemi",
      "ka",
      "ikajku.",
      "nujpak",
      "tuipan",
      "tet"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "En la orilla del río.",
    "character": "Neutral.svg",
    "correct": [
      "Tenhapan."
    ],
    "wordBank": [
      "Tenhapan.",
      "nepanta",
      "ajku",
      "inakastan"
    ]
  },
  {
    "type": "translate",
    "stage": 11,
    "prompt": "Primero voy a comer.",
    "character": "Neutral.svg",
    "correct": [
      "Niu-nitakwa",
      "achtu."
    ],
    "wordBank": [
      "Niu-nitakwa",
      "achtu.",
      "atiluni",
      "afuera",
      "muchan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Reduplicación + \"j",
    "character": "Neutral.svg",
    "correct": [
      "Regla",
      "base",
      "para",
      "sustantivos",
      "animados",
      "e",
      "inanimados."
    ],
    "wordBank": [
      "Regla",
      "base",
      "para",
      "sustantivos",
      "animados",
      "e",
      "inanimados.",
      "miak",
      "nojnoywan",
      "sijsinti"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Indica abundancia de elementos en la naturaleza.",
    "character": "Neutral.svg",
    "correct": [
      "Sufijo",
      "-TAL"
    ],
    "wordBank": [
      "Sufijo",
      "-TAL",
      "y",
      "al",
      "nawi"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Plural para personas con lazo de sangre o afinidad.",
    "character": "Neutral.svg",
    "correct": [
      "Sufijo",
      "-WAN"
    ],
    "wordBank": [
      "Sufijo",
      "-WAN",
      "ish",
      "tajtakamet",
      "regla"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Plural para personas o seres animados (intercambiables).",
    "character": "Neutral.svg",
    "correct": [
      "Sufijo",
      "-MET",
      "/",
      "-KET"
    ],
    "wordBank": [
      "Sufijo",
      "-MET",
      "/",
      "-KET",
      "pula",
      "tajtajtzitzin",
      "sennemit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Forma de pluralizar objetos (excepto personas).",
    "character": "Neutral.svg",
    "correct": [
      "Número",
      "+",
      "Sustantivo"
    ],
    "wordBank": [
      "Número",
      "+",
      "Sustantivo",
      "anyujyultiwit",
      "patanit",
      "kawat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Plural de un diminutivo (-chin).",
    "character": "Neutral.svg",
    "correct": [
      "-CHICHIN"
    ],
    "wordBank": [
      "-CHICHIN",
      "nutajtatanoywan",
      "mijmistunmet",
      "tajtamachtianimet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Plural de un reverencial (-tzin).",
    "character": "Neutral.svg",
    "correct": [
      "-TZITZIN"
    ],
    "wordBank": [
      "-TZITZIN",
      "mutaluat",
      "chichin",
      "nukujkumpawan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Adverbio \"muchos\" que requiere pluralizar si se trata de humanos.",
    "character": "Neutral.svg",
    "correct": [
      "MIAK"
    ],
    "wordBank": [
      "MIAK",
      "sijsiwatket",
      "amatal",
      "puchutal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "A las personas no se les aplica plural numérico simple.",
    "character": "Neutral.svg",
    "correct": [
      "Excepción",
      "Humana"
    ],
    "wordBank": [
      "Excepción",
      "Humana",
      "pakiwit",
      "anpejpelumet",
      "animados"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Pérdida de la \"N",
    "character": "Neutral.svg",
    "correct": [
      "Regla",
      "al",
      "pluralizar",
      "diminutivos",
      "y",
      "reverenciales."
    ],
    "wordBank": [
      "Regla",
      "al",
      "pluralizar",
      "diminutivos",
      "y",
      "reverenciales.",
      "sijsiwapipilmet",
      "kawat",
      "mutaluat"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "El plural de Lala (naranja) por reduplicación es:",
    "character": "Neutral.svg",
    "correct": "Lajlala",
    "options": [
      "Lalatal",
      "Lajlala",
      "Nutajtatanoywan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "\"Dos mujeres\" se traduce correctamente como:",
    "character": "Neutral.svg",
    "correct": "Ume sijsiwatket",
    "options": [
      "Ume siwat",
      "Ume sijsiwatket nemit yek",
      "Ume sijsiwatket"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Para decir que hay una gran abundancia de piedras (Tet), usamos:",
    "character": "Neutral.svg",
    "correct": "Tetal",
    "options": [
      "Tetal",
      "Tejtmet",
      "-TZITZIN"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "El plural de Nantzin (señora de respeto) es:",
    "character": "Neutral.svg",
    "correct": "Najnantzitzin",
    "options": [
      "Najnantzitzin",
      "Ashatal",
      "Najnantzinmet"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Si quiero decir \"Mis nietos\" (Nu-ishwiyu), debo usar:",
    "character": "Neutral.svg",
    "correct": "Nuijishwiyuwan",
    "options": [
      "Mijmiltal",
      "anyujyultuk",
      "Nuijishwiyuwan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "¿Cuál es el plural de Tamachtiani (profesor)?",
    "character": "Neutral.svg",
    "correct": "Tajtamachtianimet",
    "options": [
      "Tajtamachtianimet",
      "Nupijpiluwan",
      "Tajtamachtianital"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "El plural de Peluchin (perrito) es:",
    "character": "Neutral.svg",
    "correct": "Pejpeluchichin",
    "options": [
      "Peluchinmet",
      "Nuchajchakuwan",
      "Pejpeluchichin"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "\"Muchos hombres\" se escribe:",
    "character": "Neutral.svg",
    "correct": "Miak tajtakamet",
    "options": [
      "Nutajtatanoywan tekitiwit",
      "Miak takat",
      "Miak tajtakamet"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "El plural de Kwawit (árbol) para indicar una arboleda o bosque es:",
    "character": "Neutral.svg",
    "correct": "Kwawital",
    "options": [
      "Kwajkwawit",
      "Tajtajtzitzin",
      "Kwawital"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Los sufijos -met y -ket se usan porque:",
    "character": "Neutral.svg",
    "correct": "No hay regla específica, deben \"sonar bien\"",
    "options": [
      "Zona de muchos cerros",
      "El náhuat tiene géneros gramaticales",
      "No hay regla específica, deben \"sonar bien\""
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los plátanos.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "pujpula"
    ],
    "wordBank": [
      "Ne",
      "pujpula",
      "chikwasen",
      "tuchpanat",
      "mutajtatanoywan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Dos niñas.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "sijsiwapipil"
    ],
    "wordBank": [
      "Ume",
      "sijsiwapipil",
      "chikwey",
      "kwejkweyat",
      "puputukat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las flores.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shujshuchitmet"
    ],
    "wordBank": [
      "Ne",
      "shujshuchitmet",
      "tajtakamet",
      "tejtepetal",
      "muchajchakuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis hermanos mayores.",
    "character": "Neutral.svg",
    "correct": [
      "Numajmanujwan"
    ],
    "wordBank": [
      "Numajmanujwan",
      "inanimados",
      "ne",
      "makwil"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Un jardín o lugar donde abundan las flores.",
    "character": "Neutral.svg",
    "correct": [
      "Shuchital"
    ],
    "wordBank": [
      "Shuchital",
      "tiltituk",
      "tajtaketzat",
      "tetal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Pajaritos.",
    "character": "Neutral.svg",
    "correct": [
      "Tujtututchichin"
    ],
    "wordBank": [
      "Tujtututchichin",
      "tujtuchtichichin",
      "najnantzitzin",
      "nuipantekuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ustedes están vivos.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "anyujyultiwit"
    ],
    "wordBank": [
      "Anmejemet",
      "anyujyultiwit",
      "nuchajchakuwan",
      "tuchpanat",
      "pluralizar"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los ancianos.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chujchuletket"
    ],
    "wordBank": [
      "Ne",
      "chujchuletket",
      "tawial",
      "pejpeluchichin",
      "trajtratzti"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cuatro naranjas.",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "lala"
    ],
    "wordBank": [
      "Nawi",
      "lala",
      "makwil",
      "sijsiwapipilmet",
      "uatal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Señores (de mucho respeto).",
    "character": "Neutral.svg",
    "correct": [
      "Tajtajtzitzin"
    ],
    "wordBank": [
      "Tajtajtzitzin",
      "lajlamatzitzin",
      "tajpiani",
      "reverenciales"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Lugar donde abundan las milpas.",
    "character": "Neutral.svg",
    "correct": [
      "Mijmiltal"
    ],
    "wordBank": [
      "Mijmiltal",
      "tawial",
      "reverenciales",
      "tikmachtiat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis compañeros.",
    "character": "Neutral.svg",
    "correct": [
      "Nukujkumpawan"
    ],
    "wordBank": [
      "Nukujkumpawan",
      "e",
      "kwajkwach",
      "tipajpakit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Perritos bonitos.",
    "character": "Neutral.svg",
    "correct": [
      "Pejpeluchichin",
      "galanchin"
    ],
    "wordBank": [
      "Pejpeluchichin",
      "galanchin",
      "sufijo",
      "nupilawan",
      "uatal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los pantalones.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "sajsala"
    ],
    "wordBank": [
      "Ne",
      "sajsala",
      "suluntuk",
      "makwil",
      "tujtututchichin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Nosotros llegamos juntos.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "tisenhajsiket"
    ],
    "wordBank": [
      "Tejemet",
      "tisenhajsiket",
      "tajpiani",
      "sustantivos",
      "nuijipan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Dos gatos",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "mijmistunmet."
    ],
    "wordBank": [
      "Ume",
      "mijmistunmet.",
      "sustantivos",
      "nuijipan",
      "techpalewiat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Muchas mujeres",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "sijsiwatket."
    ],
    "wordBank": [
      "Miak",
      "sijsiwatket.",
      "e",
      "nuijipan",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Lugar de mucha arena",
    "character": "Neutral.svg",
    "correct": [
      "Ashatal."
    ],
    "wordBank": [
      "Ashatal.",
      "y",
      "ume",
      "yek"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Tus amigos",
    "character": "Neutral.svg",
    "correct": [
      "Muchajchakuwan."
    ],
    "wordBank": [
      "Muchajchakuwan.",
      "tajtajtzitzinmet",
      "met",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Gatitos",
    "character": "Neutral.svg",
    "correct": [
      "Mijmistunchichin."
    ],
    "wordBank": [
      "Mijmistunchichin.",
      "shukutal",
      "regla",
      "ket"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cuatro niñas",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "sijsiwapipil."
    ],
    "wordBank": [
      "Nawi",
      "sijsiwapipil.",
      "ket",
      "tajtaijtik",
      "amatal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Zacatales (abundancia)",
    "character": "Neutral.svg",
    "correct": [
      "Tzakatal."
    ],
    "wordBank": [
      "Tzakatal.",
      "nuijipan",
      "puputukat",
      "nujnukshi"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Nuestras abuelas",
    "character": "Neutral.svg",
    "correct": [
      "Tunojnoywan."
    ],
    "wordBank": [
      "Tunojnoywan.",
      "sijsiwapipilmet",
      "ujukichpiltzitzin",
      "tzupelek"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las blusas",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "wijwipil."
    ],
    "wordBank": [
      "Ne",
      "wijwipil.",
      "tawial",
      "tzitzin",
      "mijmiltal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Muchos pajaritos",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "tujtututchichin."
    ],
    "wordBank": [
      "Miak",
      "tujtututchichin.",
      "sijsiwatket",
      "chujchuletket",
      "tajkwilulmet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cinco plátanos",
    "character": "Neutral.svg",
    "correct": [
      "Makwil",
      "pula."
    ],
    "wordBank": [
      "Makwil",
      "pula.",
      "nemit",
      "tajtakamet",
      "patanit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis sobrinos",
    "character": "Neutral.svg",
    "correct": [
      "Nupijpiluwan."
    ],
    "wordBank": [
      "Nupijpiluwan.",
      "kuchit",
      "ish",
      "sennemit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los zapatos",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kajkakti."
    ],
    "wordBank": [
      "Ne",
      "kajkakti.",
      "pejpeluchichin",
      "miak",
      "ket"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Lugar de muchos cerros",
    "character": "Neutral.svg",
    "correct": [
      "Tejtepetal."
    ],
    "wordBank": [
      "Tejtepetal.",
      "nawat",
      "tajpiani",
      "regla"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Madrecitas (respeto)",
    "character": "Neutral.svg",
    "correct": [
      "Najnantzitzin."
    ],
    "wordBank": [
      "Najnantzitzin.",
      "tapaktit",
      "puchutal",
      "reverenciales"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Papelar o lugar de muchos amates.",
    "character": "Neutral.svg",
    "correct": [
      "Amatal"
    ],
    "wordBank": [
      "Amatal",
      "tisiwit",
      "sejseki",
      "kwejkweyat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Pedregal o abundancia de piedras.",
    "character": "Neutral.svg",
    "correct": [
      "Tetal"
    ],
    "wordBank": [
      "Tetal",
      "numajmanujwan",
      "inajnakas",
      "nupijpiluwan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Zona de muchas milpas.",
    "character": "Neutral.svg",
    "correct": [
      "Mijmiltal"
    ],
    "wordBank": [
      "Mijmiltal",
      "anyujyultiwit",
      "kikinakat",
      "patanit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Jocotal.",
    "character": "Neutral.svg",
    "correct": [
      "Shukutal"
    ],
    "wordBank": [
      "Shukutal",
      "inijishwiyuwan",
      "amatal",
      "tiltituk"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cañal.",
    "character": "Neutral.svg",
    "correct": [
      "Uatal"
    ],
    "wordBank": [
      "Uatal",
      "e",
      "mutaluat",
      "tujtuchtichichin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Arenal.",
    "character": "Neutral.svg",
    "correct": [
      "Ashatal"
    ],
    "wordBank": [
      "Ashatal",
      "base",
      "tzitzin",
      "makwil"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ceibal.",
    "character": "Neutral.svg",
    "correct": [
      "Puchutal"
    ],
    "wordBank": [
      "Puchutal",
      "nupilawan",
      "tunojnoywan",
      "pula"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Zona de muchos cerros.",
    "character": "Neutral.svg",
    "correct": [
      "Tepetal"
    ],
    "wordBank": [
      "Tepetal",
      "nupijpiluwan",
      "yey",
      "nojnoywan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Zacatal.",
    "character": "Neutral.svg",
    "correct": [
      "Tzakatal"
    ],
    "wordBank": [
      "Tzakatal",
      "humana",
      "muchajchakuwan",
      "najnantzitzin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Naranjal.",
    "character": "Neutral.svg",
    "correct": [
      "Lalatal"
    ],
    "wordBank": [
      "Lalatal",
      "numero",
      "inanimados",
      "tunojnoywan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "\"Tres profesores\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "Yey tajtamachtianimet",
    "options": [
      "Ne chujchuletket kikinakat",
      "Yey tamachtiani",
      "Yey tajtamachtianimet"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "\"Ustedes comen\" requiere el sufijo plural `-t` en el verbo:",
    "character": "Neutral.svg",
    "correct": "Anmejemet antakwat",
    "options": [
      "Anmejemet antakwat",
      "Ne tajtajtzitzinmet tajtaketzat",
      "Anmejemet antakwa"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Plural de -knew (hermano/persona):",
    "character": "Neutral.svg",
    "correct": "-ijikniwan",
    "options": [
      "-ijikniwan",
      "Lajlamatzinmet",
      "-jknewwan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Plural de Lamatzin (anciana de respeto):",
    "character": "Neutral.svg",
    "correct": "Lajlamatzitzin",
    "options": [
      "Lajlamatzitzin",
      "Lajlamatzinmet",
      "Peluchinmet"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "\"Ellos están bien\":",
    "character": "Neutral.svg",
    "correct": "Yejemet nemit yek",
    "options": [
      "Anmejemet antakwat",
      "Yejemet nemit yek",
      "Yejemet nemi yek"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Plural de Piltzín (niño/joven):",
    "character": "Neutral.svg",
    "correct": "Pijpiltzitzin",
    "options": [
      "Shuchital",
      "Pijpiltzitzin",
      "Pijpiltzinmet"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Para decir \"Mis tíos\" (hermanos mayores del padre):",
    "character": "Neutral.svg",
    "correct": "Numajmanujwan-teku",
    "options": [
      "Numanuj-tekuwan",
      "Numajmanujwan-teku",
      "Tejemet tisenhajsiket"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "\"Cinco mujeres\":",
    "character": "Neutral.svg",
    "correct": "Makwil sijsiwatket",
    "options": [
      "Makwil sijsiwatket",
      "Numajmanujwan tekitiwit",
      "Makwil siwat"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Plural de -píltzin (hijo de hombre):",
    "character": "Neutral.svg",
    "correct": "-pijpipil",
    "options": [
      "Tujtuchtichichin",
      "-pijpipil",
      "tujtutut"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "El prefijo plural para la posesión \"Nuestros\" es:",
    "character": "Neutral.svg",
    "correct": "Tu-",
    "options": [
      "Muchachos",
      "Tu-",
      "Naranjal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las flores son olorosas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shujshuchitmet",
      "puputukat."
    ],
    "wordBank": [
      "Ne",
      "shujshuchitmet",
      "puputukat.",
      "nukujkumpawan",
      "anmumejmey",
      "nojnoywan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ustedes son (como) perros.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "anpejpelumet."
    ],
    "wordBank": [
      "Anmejemet",
      "anpejpelumet.",
      "patanit",
      "e",
      "sufijo"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los conejitos corren.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tujtuchtichichin",
      "mutaluat."
    ],
    "wordBank": [
      "Ne",
      "tujtuchtichichin",
      "mutaluat.",
      "puchutal",
      "uatal",
      "al"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis hermanos han molido.",
    "character": "Neutral.svg",
    "correct": [
      "Numajmanujwan",
      "tisiwit."
    ],
    "wordBank": [
      "Numajmanujwan",
      "tisiwit.",
      "yey",
      "nuijipan",
      "sustantivos"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Dos niñas han sonreído.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "sijsiwapipilmet",
      "pakiwit."
    ],
    "wordBank": [
      "Ume",
      "sijsiwapipilmet",
      "pakiwit.",
      "nuchajchakuwan",
      "tepetal",
      "tajkwilulmet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Nosotros enseñamos el náhuat.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "tikmachtiat",
      "ne",
      "nawat."
    ],
    "wordBank": [
      "Tejemet",
      "tikmachtiat",
      "ne",
      "nawat.",
      "sustantivo",
      "anyujyultiwit",
      "sufijo"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los señores hablan.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tajtajtzitzinmet",
      "tajtaketzat."
    ],
    "wordBank": [
      "Ne",
      "tajtajtzitzinmet",
      "tajtaketzat.",
      "tejemet",
      "chichin",
      "anyasnekit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Sus nietos (de ellos) duermen.",
    "character": "Neutral.svg",
    "correct": [
      "Inijishwiyuwan",
      "kuchit."
    ],
    "wordBank": [
      "Inijishwiyuwan",
      "kuchit.",
      "tekitiwit",
      "ish",
      "ujukichpiltzitzin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las blusas negras (con otros colores).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "wijwipil",
      "tiltituk."
    ],
    "wordBank": [
      "Ne",
      "wijwipil",
      "tiltituk.",
      "tikmachtiat",
      "sijsiwatket",
      "tipajpakit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Muchos hombres han trabajado.",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "tajtakamet",
      "tekitiwit."
    ],
    "wordBank": [
      "Miak",
      "tajtakamet",
      "tekitiwit.",
      "makwil",
      "anpejpelumet",
      "tujtuchtichichin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las naranjas son ricas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "lajlala",
      "ajwiakat."
    ],
    "wordBank": [
      "Ne",
      "lajlala",
      "ajwiakat.",
      "met",
      "mutajtatanoywan",
      "pula"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Nuestras abuelas nos ayudan.",
    "character": "Neutral.svg",
    "correct": [
      "Tunojnoywan",
      "techpalewiat."
    ],
    "wordBank": [
      "Tunojnoywan",
      "techpalewiat.",
      "shukuk",
      "pejpeluchichin",
      "inijishwiyuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las ramitas truenan.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kutzitzin",
      "trajtratzti."
    ],
    "wordBank": [
      "Ne",
      "kutzitzin",
      "trajtratzti.",
      "sufijo",
      "sijsiwatket",
      "kajkakti"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Tres cántaros.",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "tajtutzukulmet."
    ],
    "wordBank": [
      "Yey",
      "tajtutzukulmet.",
      "pujpula",
      "sufijo",
      "shujshuchitmet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis compañeros son guardias.",
    "character": "Neutral.svg",
    "correct": [
      "Nukujkumpawan",
      "tajpiani."
    ],
    "wordBank": [
      "Nukujkumpawan",
      "tajpiani.",
      "nuipantekuwan",
      "sijsiwatket",
      "mijmistunchichin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Dos maíces",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "sijsinti."
    ],
    "wordBank": [
      "Ume",
      "sijsinti.",
      "lalatal",
      "nupilawan",
      "shuchital"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Muchos pajaritos",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "tujtututchichin."
    ],
    "wordBank": [
      "Miak",
      "tujtututchichin.",
      "tepetal",
      "anmumejmey",
      "anpejpelumet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Vuestras manos",
    "character": "Neutral.svg",
    "correct": [
      "Anmumejmey."
    ],
    "wordBank": [
      "Anmumejmey.",
      "tujtututchichin",
      "ujukichpiltzitzin",
      "sustantivo"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Lugar de muchos amates",
    "character": "Neutral.svg",
    "correct": [
      "Amatal."
    ],
    "wordBank": [
      "Amatal.",
      "tajtutzukulmet",
      "kuchit",
      "al"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Tus antepasados (abuelos)",
    "character": "Neutral.svg",
    "correct": [
      "Mutajtatanoywan."
    ],
    "wordBank": [
      "Mutajtatanoywan.",
      "ket",
      "shujshuchitmet",
      "para"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los zapatos están lavados",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kajkakti",
      "tapaktit."
    ],
    "wordBank": [
      "Ne",
      "kajkakti",
      "tapaktit.",
      "chikwey",
      "anmejemet",
      "tapaktit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Seis platos",
    "character": "Neutral.svg",
    "correct": [
      "Chikwasen",
      "tajtaijtik."
    ],
    "wordBank": [
      "Chikwasen",
      "tajtaijtik.",
      "nuijishwiyuwan",
      "tipajpakit",
      "tzikwinit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Nuestras camisas",
    "character": "Neutral.svg",
    "correct": [
      "Tukwajkwach."
    ],
    "wordBank": [
      "Tukwajkwach.",
      "pujpula",
      "nuijipan",
      "lajlamatzitzin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Gatitos",
    "character": "Neutral.svg",
    "correct": [
      "Mijmistunchichin."
    ],
    "wordBank": [
      "Mijmistunchichin.",
      "sejseki",
      "nuijishwiyuwan",
      "tejemet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ocho faldas",
    "character": "Neutral.svg",
    "correct": [
      "Chikwey",
      "kwejkweyat."
    ],
    "wordBank": [
      "Chikwey",
      "kwejkweyat.",
      "nawi",
      "nojnoywan",
      "tisenhajsiket"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis sobrinos",
    "character": "Neutral.svg",
    "correct": [
      "Nupijpiluwan."
    ],
    "wordBank": [
      "Nupijpiluwan.",
      "anmejemet",
      "pejpelumet",
      "chikwey"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los ancianos",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chujchuletket."
    ],
    "wordBank": [
      "Ne",
      "chujchuletket.",
      "tejemet",
      "anyasnekit",
      "tisiwit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Muchos dibujos",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "tajkwilulmet."
    ],
    "wordBank": [
      "Miak",
      "tajkwilulmet.",
      "mijmistunmet",
      "mutajtatanoywan",
      "pujpula"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Sus orejas (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inajnakas."
    ],
    "wordBank": [
      "Inajnakas.",
      "tujtututchichin",
      "kutzitzin",
      "animados"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis hijos (de mujer)",
    "character": "Neutral.svg",
    "correct": [
      "Nupilawan."
    ],
    "wordBank": [
      "Nupilawan.",
      "tzakatal",
      "numero",
      "mijmiltal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ceibal (lugar de muchas ceibas).",
    "character": "Neutral.svg",
    "correct": [
      "Puchutal"
    ],
    "wordBank": [
      "Puchutal",
      "nukujkumpawan",
      "lajlamatzitzin",
      "inanimados"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Nuestras abuelas.",
    "character": "Neutral.svg",
    "correct": [
      "Tunojnoywan"
    ],
    "wordBank": [
      "Tunojnoywan",
      "tajkwilulmet",
      "pakiwit",
      "anpejpelumet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Zona de muchos cerros.",
    "character": "Neutral.svg",
    "correct": [
      "Tepetal"
    ],
    "wordBank": [
      "Tepetal",
      "inajnakas",
      "tisiwit",
      "ujukichpiltzitzin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis compañeros.",
    "character": "Neutral.svg",
    "correct": [
      "Nukujkumpawan"
    ],
    "wordBank": [
      "Nukujkumpawan",
      "ashatal",
      "sijsiwapipil",
      "numero"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Jocotal.",
    "character": "Neutral.svg",
    "correct": [
      "Shukutal"
    ],
    "wordBank": [
      "Shukutal",
      "pula",
      "ajwiakat",
      "lalatal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Vuestras manos.",
    "character": "Neutral.svg",
    "correct": [
      "Anmumejmey"
    ],
    "wordBank": [
      "Anmumejmey",
      "inajnakas",
      "kajkakti",
      "nutajtatanoywan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Zona de muchas milpas.",
    "character": "Neutral.svg",
    "correct": [
      "Mijmiltal"
    ],
    "wordBank": [
      "Mijmiltal",
      "najnantzitzin",
      "tukwajkwach",
      "anmumejmey"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Sus orejas (de ellos).",
    "character": "Neutral.svg",
    "correct": [
      "Inajnakas"
    ],
    "wordBank": [
      "Inajnakas",
      "lalatal",
      "muchajchakuwan",
      "lajlala"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cañal.",
    "character": "Neutral.svg",
    "correct": [
      "Uatal"
    ],
    "wordBank": [
      "Uatal",
      "kajkakti",
      "ume",
      "pejpeluchichin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis antepasados (abuelos y abuelas).",
    "character": "Neutral.svg",
    "correct": [
      "Nutajtatanoywan"
    ],
    "wordBank": [
      "Nutajtatanoywan",
      "ujukichpiltzitzin",
      "ume",
      "patanit"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Plural de Tisatchin (lapicito):",
    "character": "Neutral.svg",
    "correct": "Tijtisatchichin",
    "options": [
      "Tijtisatchichin",
      "-TZITZIN",
      "Tisatchinmet"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Plural reverencial de Tajtzin (señor):",
    "character": "Neutral.svg",
    "correct": "Tajtajtzitzin",
    "options": [
      "tujtutut",
      "Tajtajtzitzin",
      "Tajtzinmet"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "\"¿Muchos hombres\" requiere pluralizar al sustantivo humano?:",
    "character": "Neutral.svg",
    "correct": "Miak tajtakamet",
    "options": [
      "Ne tujtuchtichichin mutaluat",
      "Miak tajtakamet",
      "Miak takat"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Plural de Piltzín (niño/joven):",
    "character": "Neutral.svg",
    "correct": "Pijpiltzitzin",
    "options": [
      "Tajtzinmet",
      "Pijpiltzitzin",
      "Piltzinmet"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Para decir \"Arboleda\", usamos el sufijo de naturaleza:",
    "character": "Neutral.svg",
    "correct": "Kwawital",
    "options": [
      "Kwawital",
      "Kwajkwawit",
      "Tejtepetal"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "Plural de Peluchin (perrito):",
    "character": "Neutral.svg",
    "correct": "Pejpeluchichin",
    "options": [
      "Peluchinmet",
      "Tepetal",
      "Pejpeluchichin"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "\"¿Dos mujeres\" se traduce como:",
    "character": "Neutral.svg",
    "correct": "Ume sijsiwatket",
    "options": [
      "Ume siwat",
      "Ume sijsiwatket",
      "Ne tajtajtzitzinmet tajtaketzat"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "El plural de Lamatzin (anciana de respeto) es:",
    "character": "Neutral.svg",
    "correct": "Lajlamatzitzin",
    "options": [
      "Lajlamatzitzin",
      "Lamatzinmet",
      "Nupilawan"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "\"Muchos pajaritos\" se escribe:",
    "character": "Neutral.svg",
    "correct": "Miak tujtututchichin",
    "options": [
      "Ume sijsinti",
      "Miak tujtututchichin",
      "Miak tutut"
    ]
  },
  {
    "type": "select_translation",
    "stage": 12,
    "prompt": "El sufijo para pluralizar parentesco es:",
    "character": "Neutral.svg",
    "correct": "-wan",
    "options": [
      "-wan",
      "-met",
      "Lalatal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las blusas negras (con otros colores).",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "wijwipil",
      "tiltituk."
    ],
    "wordBank": [
      "Ne",
      "wijwipil",
      "tiltituk.",
      "nawi",
      "numero",
      "ajwiakat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Dos mujeres están bien.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "sijsiwatket",
      "nemit",
      "yek."
    ],
    "wordBank": [
      "Ume",
      "sijsiwatket",
      "nemit",
      "yek.",
      "lajlamatzitzin",
      "nuijipan",
      "tajtaijtik"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los pajaritos vuelan.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tujtututchichin",
      "patanit."
    ],
    "wordBank": [
      "Ne",
      "tujtututchichin",
      "patanit.",
      "numero",
      "numajmanujwan",
      "tajtaketzat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis abuelos han trabajado.",
    "character": "Neutral.svg",
    "correct": [
      "Nutajtatanoywan",
      "tekitiwit."
    ],
    "wordBank": [
      "Nutajtatanoywan",
      "tekitiwit.",
      "tawial",
      "tapaktit",
      "tzikwinit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Muchos hombres han sonreído.",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "tajtakamet",
      "pakiwit."
    ],
    "wordBank": [
      "Miak",
      "tajtakamet",
      "pakiwit.",
      "sijsinti",
      "nupijpiluwan",
      "sustantivo"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ustedes están vivos.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "anyujyultiwit."
    ],
    "wordBank": [
      "Anmejemet",
      "anyujyultiwit.",
      "tajtaijtik",
      "lalatal",
      "mijmiltal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las naranjas son dulces.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "lajlala",
      "tzupelek."
    ],
    "wordBank": [
      "Ne",
      "lajlala",
      "tzupelek.",
      "tepetal",
      "shukuk",
      "tajtaketzat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis sobrinos barren.",
    "character": "Neutral.svg",
    "correct": [
      "Nupijpiluwan",
      "tuchpanat."
    ],
    "wordBank": [
      "Nupijpiluwan",
      "tuchpanat.",
      "excepcion",
      "miak",
      "tepetal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los ancianos dicen.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chujchuletket",
      "kawat."
    ],
    "wordBank": [
      "Ne",
      "chujchuletket",
      "kawat.",
      "lalatal",
      "inajnakas",
      "wan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las flores son olorosas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "shujshuchitmet",
      "puputukat."
    ],
    "wordBank": [
      "Ne",
      "shujshuchitmet",
      "puputukat.",
      "nuijipan",
      "humana",
      "numero"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Nosotros enseñamos el náhuat.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "tikmachtiat",
      "ne",
      "nawat."
    ],
    "wordBank": [
      "Tejemet",
      "tikmachtiat",
      "ne",
      "nawat.",
      "tunojnoywan",
      "nuijipan",
      "tuchpanat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Algunos granos de maíz.",
    "character": "Neutral.svg",
    "correct": [
      "Sejseki",
      "ish",
      "tawial."
    ],
    "wordBank": [
      "Sejseki",
      "ish",
      "tawial.",
      "kajkakti",
      "mijmistunmet",
      "chujchuletket"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los perros corren.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "pejpelumet",
      "mutaluat."
    ],
    "wordBank": [
      "Ne",
      "pejpelumet",
      "mutaluat.",
      "met",
      "sennemit",
      "para"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Tres profesores.",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "tajtamachtianimet."
    ],
    "wordBank": [
      "Yey",
      "tajtamachtianimet.",
      "al",
      "nuipantekuwan",
      "tajtaketzat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los conejitos saltan.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "tujtuchtichichin",
      "tzikwinit."
    ],
    "wordBank": [
      "Ne",
      "tujtuchtichichin",
      "tzikwinit.",
      "anmumejmey",
      "galanchin",
      "kikinakat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cinco plátanos",
    "character": "Neutral.svg",
    "correct": [
      "Makwil",
      "pula."
    ],
    "wordBank": [
      "Makwil",
      "pula.",
      "kajkakti",
      "sufijo",
      "suluntuk"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Lugar de mucha arena",
    "character": "Neutral.svg",
    "correct": [
      "Ashatal."
    ],
    "wordBank": [
      "Ashatal.",
      "nuipantekuwan",
      "diminutivos",
      "nawi"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Nuestras abuelas",
    "character": "Neutral.svg",
    "correct": [
      "Tunojnoywan."
    ],
    "wordBank": [
      "Tunojnoywan.",
      "techpalewiat",
      "sejseki",
      "papatakat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Tus amigos",
    "character": "Neutral.svg",
    "correct": [
      "Muchajchakuwan."
    ],
    "wordBank": [
      "Muchajchakuwan.",
      "tiltituk",
      "kutzitzin",
      "al"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Gatitos",
    "character": "Neutral.svg",
    "correct": [
      "Mijmistunchichin."
    ],
    "wordBank": [
      "Mijmistunchichin.",
      "wijwipil",
      "pula",
      "tikmachtiat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cuatro niñas",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "sijsiwapipil."
    ],
    "wordBank": [
      "Nawi",
      "sijsiwapipil.",
      "tajtaketzat",
      "chujchuletket",
      "mijmistunchichin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Lugar de muchas milpas",
    "character": "Neutral.svg",
    "correct": [
      "Mijmiltal."
    ],
    "wordBank": [
      "Mijmiltal.",
      "inanimados",
      "pula",
      "puputukat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las blusas",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "wijwipil."
    ],
    "wordBank": [
      "Ne",
      "wijwipil.",
      "ket",
      "numajmanujwan",
      "uatal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Vuestras manos",
    "character": "Neutral.svg",
    "correct": [
      "Anmumejmey."
    ],
    "wordBank": [
      "Anmumejmey.",
      "tuchpanat",
      "tikmachtiat",
      "anmumejmey"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis nietos",
    "character": "Neutral.svg",
    "correct": [
      "Nuijishwiyuwan."
    ],
    "wordBank": [
      "Nuijishwiyuwan.",
      "sajsala",
      "puchutal",
      "kajkakti"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ocho faldas",
    "character": "Neutral.svg",
    "correct": [
      "Chikwey",
      "kwejkweyat."
    ],
    "wordBank": [
      "Chikwey",
      "kwejkweyat.",
      "anyujyultiwit",
      "humana",
      "tal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los ancianos",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chujchuletket."
    ],
    "wordBank": [
      "Ne",
      "chujchuletket.",
      "tajtajtzitzin",
      "met",
      "anpejpelumet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Muchas mujeres",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "sijsiwatket."
    ],
    "wordBank": [
      "Miak",
      "sijsiwatket.",
      "sajsala",
      "tajtajtzitzinmet",
      "tipajpakit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Sus orejas (de ellos)",
    "character": "Neutral.svg",
    "correct": [
      "Inajnakas."
    ],
    "wordBank": [
      "Inajnakas.",
      "lalatal",
      "techpalewiat",
      "tawial"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis sobrinos",
    "character": "Neutral.svg",
    "correct": [
      "Nupijpiluwan."
    ],
    "wordBank": [
      "Nupijpiluwan.",
      "kajkakti",
      "sustantivos",
      "tajtajtzitzinmet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Muchachos.",
    "character": "Neutral.svg",
    "correct": [
      "Ujukichpiltzitzin"
    ],
    "wordBank": [
      "Ujukichpiltzitzin",
      "tujtuchtichichin",
      "base",
      "pakiwit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ropas o trapos.",
    "character": "Neutral.svg",
    "correct": [
      "Kwajkwach"
    ],
    "wordBank": [
      "Kwajkwach",
      "sustantivos",
      "met",
      "inijishwiyuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cañal (abundancia de caña).",
    "character": "Neutral.svg",
    "correct": [
      "Uatal"
    ],
    "wordBank": [
      "Uatal",
      "mijmiltal",
      "y",
      "base"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis padrinos.",
    "character": "Neutral.svg",
    "correct": [
      "Nuipantekuwan"
    ],
    "wordBank": [
      "Nuipantekuwan",
      "lajlamatzitzin",
      "tajtakamet",
      "diminutivos"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Gatitos.",
    "character": "Neutral.svg",
    "correct": [
      "Mijmistunchichin"
    ],
    "wordBank": [
      "Mijmistunchichin",
      "kajkakti",
      "tipajpakit",
      "nawat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis amigos.",
    "character": "Neutral.svg",
    "correct": [
      "Nuchajchakuwan"
    ],
    "wordBank": [
      "Nuchajchakuwan",
      "animados",
      "pujpula",
      "lajlala"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Papelar o lugar de muchos amates.",
    "character": "Neutral.svg",
    "correct": [
      "Amatal"
    ],
    "wordBank": [
      "Amatal",
      "lalatal",
      "sufijo",
      "kwejkweyat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Sus orejas (de ellos).",
    "character": "Neutral.svg",
    "correct": [
      "Inajnakas"
    ],
    "wordBank": [
      "Inajnakas",
      "tzupelek",
      "pakiwit",
      "trajtratzti"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ancianitas (de mucho respeto).",
    "character": "Neutral.svg",
    "correct": [
      "Lajlamatzitzin"
    ],
    "wordBank": [
      "Lajlamatzitzin",
      "tunojnoywan",
      "pakiwit",
      "lalatal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Conejitos.",
    "character": "Neutral.svg",
    "correct": [
      "Tujtuchtichichin"
    ],
    "wordBank": [
      "Tujtuchtichichin",
      "sejseki",
      "lalatal",
      "miak"
    ]
  },
  {
    "type": "fill_blank",
    "stage": 12,
    "before": "Ne",
    "after": "patanit tik ne susul. (Los pájaros vuelan...)",
    "correct": "tujtutut",
    "options": [
      "tutut",
      "tujtutut",
      "Tujtututchichin"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 12,
    "before": "Nupijpipil",
    "after": "tik ne tiankis. (Mis hijos están...)",
    "correct": "nemit",
    "options": [
      "nemit",
      "Pijpiltzinmet",
      "nemi"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 12,
    "before": "Yey",
    "after": ". (Tres profesores)",
    "correct": "excepción humana",
    "options": [
      "Anmejemet anpejpelumet",
      "Regla base para sustantivos animados e inanimados",
      "excepción humana"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 12,
    "before": "Ne",
    "after": "chukatiwit. (Las niñas han llorado)",
    "correct": "sijsiwapipil",
    "options": [
      "sijsiwapipil",
      "anyujyultuk",
      "Tejtmet"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 12,
    "before": "Makwil",
    "after": ". (Cinco plátanos)",
    "correct": "el objeto no cambia con número",
    "options": [
      "el objeto no cambia con número",
      "Dos mujeres están bien",
      "Cañal (abundancia de caña)"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 12,
    "before": "Anmejemet",
    "after": ". (Ustedes están vivos)",
    "correct": "plural de estado",
    "options": [
      "Mis hermanos mayores",
      "plural de estado",
      "Los ancianos dicen"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 12,
    "before": "Ne",
    "after": "takwawayat. (Las ollas se endurecen)",
    "correct": "reduplicación inanimada",
    "options": [
      "Algunos granos de maíz",
      "Dos maíces",
      "reduplicación inanimada"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 12,
    "before": "Miak",
    "after": "tik ne techan. (Muchos hombres en el pueblo)",
    "correct": "sustantivo humano pluralizado",
    "options": [
      "Nutajtatanoywan tekitiwit",
      "sustantivo humano pluralizado",
      "Sufijo -TAL"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 12,
    "before": "Ne",
    "after": "sujsul wey. (El cerro/bosque es muy grande)",
    "correct": "sufijo de abundancia",
    "options": [
      "Tres cántaros",
      "Las blusas negras (con otros colores)",
      "sufijo de abundancia"
    ],
    "hint": ""
  },
  {
    "type": "fill_blank",
    "stage": 12,
    "before": "Naja nikpia nujnuish pal",
    "after": ". (Tengo mis ojos para ver)",
    "correct": "el sujeto \"yo\" es singular",
    "options": [
      "el sujeto \"yo\" es singular",
      "Nuestras abuelas",
      "Mis compañeros"
    ],
    "hint": ""
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las blusas están secas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "wijwipil",
      "waktuk."
    ],
    "wordBank": [
      "Ne",
      "wijwipil",
      "waktuk.",
      "nupilawan",
      "kuchit",
      "nuijishwiyuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis hermanos han trabajado.",
    "character": "Neutral.svg",
    "correct": [
      "Numajmanujwan",
      "tekitiwit."
    ],
    "wordBank": [
      "Numajmanujwan",
      "tekitiwit.",
      "sejseki",
      "trajtratzti",
      "papatakat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Dos mujeres están juntas.",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "sijsiwatket",
      "sennemit."
    ],
    "wordBank": [
      "Ume",
      "sijsiwatket",
      "sennemit.",
      "diminutivos",
      "shuchital",
      "tajtaijtik"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los pajaritos aletean.",
    "character": "Neutral.svg",
    "correct": [
      "Tujtututchichin",
      "papatakat."
    ],
    "wordBank": [
      "Tujtututchichin",
      "papatakat.",
      "lajlala",
      "sijsinti",
      "ne"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Nosotros sonreímos mucho.",
    "character": "Neutral.svg",
    "correct": [
      "Tejemet",
      "tipajpakit."
    ],
    "wordBank": [
      "Tejemet",
      "tipajpakit.",
      "anmumejmey",
      "lajlala",
      "kwejkweyat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las naranjas son ácidas.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "lajlala",
      "shukuk."
    ],
    "wordBank": [
      "Ne",
      "lajlala",
      "shukuk.",
      "mutajtatanoywan",
      "base",
      "nawat"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis pies están hinchados.",
    "character": "Neutral.svg",
    "correct": [
      "Nujnukshi",
      "suluntuk."
    ],
    "wordBank": [
      "Nujnukshi",
      "suluntuk.",
      "tzupelek",
      "chichin",
      "tiltituk"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los ancianos se quejan.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "chujchuletket",
      "kikinakat."
    ],
    "wordBank": [
      "Ne",
      "chujchuletket",
      "kikinakat.",
      "pejpeluchichin",
      "wijwipil",
      "tzupelek"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Sus nietos (de ellos) duermen.",
    "character": "Neutral.svg",
    "correct": [
      "Inijishwiyuwan",
      "kuchit."
    ],
    "wordBank": [
      "Inijishwiyuwan",
      "kuchit.",
      "nawat",
      "tipajpakit",
      "tekitiwit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ustedes irán.",
    "character": "Neutral.svg",
    "correct": [
      "Anmejemet",
      "anyasnekit."
    ],
    "wordBank": [
      "Anmejemet",
      "anyasnekit.",
      "nutajtatanoywan",
      "puputukat",
      "kwajkwach"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Tres cántaros.",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "tajtutzukulmet."
    ],
    "wordBank": [
      "Yey",
      "tajtutzukulmet.",
      "tunojnoywan",
      "kajkakti",
      "mutajtatanoywan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las ramitas truenan.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kutzitzin",
      "trajtratzti."
    ],
    "wordBank": [
      "Ne",
      "kutzitzin",
      "trajtratzti.",
      "ajwiakat",
      "wejka",
      "uatal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis bisabuelas están lejos.",
    "character": "Neutral.svg",
    "correct": [
      "Nuijipan-nojnoywan",
      "nemit",
      "wejka."
    ],
    "wordBank": [
      "Nuijipan-nojnoywan",
      "nemit",
      "wejka.",
      "mijmistunchichin",
      "tuchpanat",
      "tapaktit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los perros corren.",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "pejpelumet",
      "mutaluat."
    ],
    "wordBank": [
      "Ne",
      "pejpelumet",
      "mutaluat.",
      "tisiwit",
      "regla",
      "shujshuchitmet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Muchos dibujos.",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "tajkwilulmet."
    ],
    "wordBank": [
      "Miak",
      "tajkwilulmet.",
      "techpalewiat",
      "nemit",
      "tajtutzukulmet"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Dos niñas",
    "character": "Neutral.svg",
    "correct": [
      "Ume",
      "sijsiwapipil."
    ],
    "wordBank": [
      "Ume",
      "sijsiwapipil.",
      "sustantivos",
      "shujshuchitmet",
      "chujchuletket"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Muchos hombres",
    "character": "Neutral.svg",
    "correct": [
      "Miak",
      "tajtakamet."
    ],
    "wordBank": [
      "Miak",
      "tajtakamet.",
      "makwil",
      "reverenciales",
      "nuijishwiyuwan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Tres profesores",
    "character": "Neutral.svg",
    "correct": [
      "Yey",
      "tajtamachtianimet."
    ],
    "wordBank": [
      "Yey",
      "tajtamachtianimet.",
      "sennemit",
      "chichin",
      "tujtututchichin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Nuestras abuelas",
    "character": "Neutral.svg",
    "correct": [
      "Tunojnoywan."
    ],
    "wordBank": [
      "Tunojnoywan.",
      "anmumejmey",
      "kuchit",
      "nupijpiluwan"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Gatitos",
    "character": "Neutral.svg",
    "correct": [
      "Mijmistunchichin."
    ],
    "wordBank": [
      "Mijmistunchichin.",
      "shukutal",
      "met",
      "anyujyultiwit"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis sobrinos",
    "character": "Neutral.svg",
    "correct": [
      "Nupijpiluwan."
    ],
    "wordBank": [
      "Nupijpiluwan.",
      "tipajpakit",
      "nutajtatanoywan",
      "tiltituk"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cañal (abundancia)",
    "character": "Neutral.svg",
    "correct": [
      "Uatal."
    ],
    "wordBank": [
      "Uatal.",
      "yek",
      "animados",
      "mijmiltal"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cuatro naranjas",
    "character": "Neutral.svg",
    "correct": [
      "Nawi",
      "lala."
    ],
    "wordBank": [
      "Nawi",
      "lala.",
      "numero",
      "pejpelumet",
      "tajtajtzitzin"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Las blusas",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "wijwipil."
    ],
    "wordBank": [
      "Ne",
      "wijwipil.",
      "mijmistunchichin",
      "inijishwiyuwan",
      "sajsala"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Vuestras manos",
    "character": "Neutral.svg",
    "correct": [
      "Anmumejmey."
    ],
    "wordBank": [
      "Anmumejmey.",
      "yey",
      "shukutal",
      "tukwajkwach"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Ancianitas (respeto)",
    "character": "Neutral.svg",
    "correct": [
      "Lajlamatzitzin."
    ],
    "wordBank": [
      "Lajlamatzitzin.",
      "wijwipil",
      "sajsala",
      "shuchital"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Los zapatos",
    "character": "Neutral.svg",
    "correct": [
      "Ne",
      "kajkakti."
    ],
    "wordBank": [
      "Ne",
      "kajkakti.",
      "anmejemet",
      "para",
      "tiltituk"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Lugar de muchos cerros",
    "character": "Neutral.svg",
    "correct": [
      "Tejtepetal."
    ],
    "wordBank": [
      "Tejtepetal.",
      "tujtututchichin",
      "ajwiakat",
      "tzupelek"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Cinco plátanos",
    "character": "Neutral.svg",
    "correct": [
      "Makwil",
      "pula."
    ],
    "wordBank": [
      "Makwil",
      "pula.",
      "tal",
      "shuchital",
      "numero"
    ]
  },
  {
    "type": "translate",
    "stage": 12,
    "prompt": "Mis nietos",
    "character": "Neutral.svg",
    "correct": [
      "Nuijishwiyuwan."
    ],
    "wordBank": [
      "Nuijishwiyuwan.",
      "kajkakti",
      "kutzitzin",
      "mijmistunmet"
    ]
  }
];
