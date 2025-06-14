
import { Lesson } from '../types/game';

export const lessons: Lesson[] = [
  // MÓDULO 1: BÁSICO (A1)
  {
    id: 1,
    title: "Primeiras Palavras",
    description: "Aprenda saudações e palavras básicas",
    level: 'A1',
    category: "Saudações",
    isCompleted: false,
    isUnlocked: true,
    stars: 0,
    xp: 50,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "Olá" em italiano?',
        options: ['Ciao', 'Grazie', 'Prego', 'Scusi'],
        correctAnswer: 'Ciao'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "Obrigado"',
        correctAnswer: 'Grazie',
        hint: 'Começa com G...'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'O que significa "Buongiorno"?',
        options: ['Boa noite', 'Bom dia', 'Boa tarde', 'Tchau'],
        correctAnswer: 'Bom dia'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "Mi _____ Marco" (Meu nome é Marco)',
        correctAnswer: 'chiamo',
        hint: 'Verbo "chamar-se"'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Como se diz "Por favor" em italiano?',
        options: ['Grazie', 'Prego', 'Per favore', 'Scusi'],
        correctAnswer: 'Per favore'
      }
    ]
  },
  {
    id: 2,
    title: "Apresentações",
    description: "Aprenda a se apresentar e conhecer pessoas",
    level: 'A1',
    category: "Apresentações",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 60,
    exercises: [
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "Como você se chama?"',
        correctAnswer: 'Come ti chiami?'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete: "Io _____ da Roma" (Eu sou de Roma)',
        correctAnswer: 'sono',
        hint: 'Verbo "ser/estar" na primeira pessoa'
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'O que significa "Di dove sei?"',
        options: ['Como você está?', 'Quantos anos você tem?', 'De onde você é?', 'O que você faz?'],
        correctAnswer: 'De onde você é?'
      }
    ]
  },
  {
    id: 3,
    title: "Família e Pessoas",
    description: "Vocabulário sobre família e relacionamentos",
    level: 'A1',
    category: "Família",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: [
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Como se diz "mãe" em italiano?',
        options: ['Padre', 'Madre', 'Sorella', 'Nonna'],
        correctAnswer: 'Madre'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "Meu irmão mais novo"',
        correctAnswer: 'Mio fratello minore'
      },
      {
        id: 11,
        type: 'fill-blank',
        question: 'Complete: "La mia _____ ha 30 anni" (Minha irmã tem 30 anos)',
        correctAnswer: 'sorella'
      },
      {
        id: 12,
        type: 'multiple-choice',
        question: 'O que significa "nonno"?',
        options: ['Tio', 'Primo', 'Avô', 'Sobrinho'],
        correctAnswer: 'Avô'
      }
    ]
  },
  {
    id: 4,
    title: "Números e Idade",
    description: "Aprenda números de 1-100 e a falar sobre idade",
    level: 'A1',
    category: "Números",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 65,
    exercises: [
      {
        id: 13,
        type: 'multiple-choice',
        question: 'Como se diz "quinze" em italiano?',
        options: ['Dieci', 'Quindici', 'Venti', 'Cinquanta'],
        correctAnswer: 'Quindici'
      },
      {
        id: 14,
        type: 'translation',
        question: 'Traduza: "Eu tenho vinte e cinco anos"',
        correctAnswer: 'Ho venticinque anni'
      },
      {
        id: 15,
        type: 'fill-blank',
        question: 'Complete: "Quanti anni _____?" (Quantos anos você tem?)',
        correctAnswer: 'hai'
      }
    ]
  },
  {
    id: 5,
    title: "Cores e Objetos",
    description: "Vocabulário de cores e objetos básicos",
    level: 'A1',
    category: "Vocabulário",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 70,
    exercises: [
      {
        id: 16,
        type: 'multiple-choice',
        question: 'Como se diz "azul" em italiano?',
        options: ['Rosso', 'Verde', 'Blu', 'Giallo'],
        correctAnswer: 'Blu'
      },
      {
        id: 17,
        type: 'translation',
        question: 'Traduza: "Uma mesa vermelha"',
        correctAnswer: 'Un tavolo rosso'
      },
      {
        id: 18,
        type: 'fill-blank',
        question: 'Complete: "Il libro è _____" (O livro é verde)',
        correctAnswer: 'verde'
      }
    ]
  },

  // MÓDULO 2: ELEMENTAR (A2)
  {
    id: 6,
    title: "Casa e Móveis",
    description: "Vocabulário sobre casa e móveis",
    level: 'A2',
    category: "Casa",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: [
      {
        id: 19,
        type: 'multiple-choice',
        question: 'Como se diz "cozinha" em italiano?',
        options: ['Bagno', 'Cucina', 'Camera', 'Salotto'],
        correctAnswer: 'Cucina'
      },
      {
        id: 20,
        type: 'translation',
        question: 'Traduza: "Minha casa tem três quartos"',
        correctAnswer: 'La mia casa ha tre camere'
      },
      {
        id: 21,
        type: 'fill-blank',
        question: 'Complete: "Il _____ è nel soggiorno" (O sofá está na sala)',
        correctAnswer: 'divano'
      }
    ]
  },
  {
    id: 7,
    title: "Comida e Bebida",
    description: "Vocabulário essencial para restaurantes",
    level: 'A2',
    category: "Alimentação",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: [
      {
        id: 22,
        type: 'multiple-choice',
        question: 'Como se diz "água" em italiano?',
        options: ['Vino', 'Latte', 'Acqua', 'Caffè'],
        correctAnswer: 'Acqua'
      },
      {
        id: 23,
        type: 'translation',
        question: 'Traduza: "Eu gostaria de uma pizza margherita"',
        correctAnswer: 'Vorrei una pizza margherita'
      },
      {
        id: 24,
        type: 'fill-blank',
        question: 'Complete: "Il _____ è buono" (O pão está bom)',
        correctAnswer: 'pane'
      },
      {
        id: 25,
        type: 'multiple-choice',
        question: 'O que significa "Il conto, per favore"?',
        options: ['Mais uma bebida', 'A conta, por favor', 'Onde fica o banheiro?', 'Está muito bom'],
        correctAnswer: 'A conta, por favor'
      }
    ]
  },
  {
    id: 8,
    title: "Tempo e Clima",
    description: "Aprenda a falar sobre tempo e clima",
    level: 'A2',
    category: "Tempo",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: [
      {
        id: 26,
        type: 'multiple-choice',
        question: 'Como se diz "está chovendo" em italiano?',
        options: ['Fa caldo', 'Piove', 'È sereno', 'Nevica'],
        correctAnswer: 'Piove'
      },
      {
        id: 27,
        type: 'translation',
        question: 'Traduza: "Hoje está fazendo sol"',
        correctAnswer: 'Oggi c\'è il sole'
      },
      {
        id: 28,
        type: 'fill-blank',
        question: 'Complete: "Che tempo _____ oggi?" (Como está o tempo hoje?)',
        correctAnswer: 'fa'
      }
    ]
  },
  {
    id: 9,
    title: "Transportes",
    description: "Vocabulário de transportes e direções",
    level: 'A2',
    category: "Transporte",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: [
      {
        id: 29,
        type: 'multiple-choice',
        question: 'Como se diz "estação de trem" em italiano?',
        options: ['Aeroporto', 'Stazione', 'Fermata', 'Porto'],
        correctAnswer: 'Stazione'
      },
      {
        id: 30,
        type: 'translation',
        question: 'Traduza: "Onde fica a parada de ônibus?"',
        correctAnswer: 'Dove si trova la fermata dell\'autobus?'
      }
    ]
  },
  {
    id: 10,
    title: "Compras",
    description: "Vocabulário para fazer compras",
    level: 'A2',
    category: "Compras",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: [
      {
        id: 31,
        type: 'multiple-choice',
        question: 'Como se diz "quanto custa?" em italiano?',
        options: ['Dove si trova?', 'Quanto costa?', 'Che ora è?', 'Come stai?'],
        correctAnswer: 'Quanto costa?'
      },
      {
        id: 32,
        type: 'translation',
        question: 'Traduza: "Posso pagar com cartão?"',
        correctAnswer: 'Posso pagare con la carta?'
      }
    ]
  },

  // MÓDULO 3: INTERMEDIÁRIO (B1)
  {
    id: 11,
    title: "Passado Próximo",
    description: "Aprenda o passato prossimo",
    level: 'B1',
    category: "Gramática",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 100,
    exercises: [
      {
        id: 33,
        type: 'multiple-choice',
        question: 'Qual é a forma correta: "Ieri ___ mangiato la pizza"',
        options: ['ho', 'hai', 'ha', 'abbiamo'],
        correctAnswer: 'ho'
      },
      {
        id: 34,
        type: 'translation',
        question: 'Traduza: "Ontem fui ao cinema"',
        correctAnswer: 'Ieri sono andato al cinema'
      },
      {
        id: 35,
        type: 'fill-blank',
        question: 'Complete: "Maria _____ partita alle otto" (Maria saiu às oito)',
        correctAnswer: 'è'
      }
    ]
  },
  {
    id: 12,
    title: "Trabalho e Profissões",
    description: "Vocabulário profissional",
    level: 'B1',
    category: "Trabalho",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 95,
    exercises: [
      {
        id: 36,
        type: 'multiple-choice',
        question: 'Como se diz "médico" em italiano?',
        options: ['Avvocato', 'Medico', 'Ingegnere', 'Professore'],
        correctAnswer: 'Medico'
      },
      {
        id: 37,
        type: 'translation',
        question: 'Traduza: "Trabalho em um escritório"',
        correctAnswer: 'Lavoro in un ufficio'
      }
    ]
  },
  {
    id: 13,
    title: "Futuro Simples",
    description: "Aprenda a falar sobre o futuro",
    level: 'B1',
    category: "Gramática",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 105,
    exercises: [
      {
        id: 38,
        type: 'multiple-choice',
        question: 'Qual é a forma correta: "Domani ___ a Roma"',
        options: ['andrò', 'andrai', 'andrà', 'andremo'],
        correctAnswer: 'andrò'
      },
      {
        id: 39,
        type: 'translation',
        question: 'Traduza: "Na próxima semana estudarei italiano"',
        correctAnswer: 'La prossima settimana studierò italiano'
      }
    ]
  },
  {
    id: 14,
    title: "Saúde e Corpo",
    description: "Vocabulário médico e partes do corpo",
    level: 'B1',
    category: "Saúde",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 90,
    exercises: [
      {
        id: 40,
        type: 'multiple-choice',
        question: 'Como se diz "dor de cabeça" em italiano?',
        options: ['Mal di schiena', 'Mal di testa', 'Mal di gola', 'Mal di pancia'],
        correctAnswer: 'Mal di testa'
      },
      {
        id: 41,
        type: 'translation',
        question: 'Traduza: "Preciso ir ao médico"',
        correctAnswer: 'Devo andare dal medico'
      }
    ]
  },
  {
    id: 15,
    title: "Hobbies e Tempo Livre",
    description: "Fale sobre seus interesses e atividades",
    level: 'B1',
    category: "Lazer",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: [
      {
        id: 42,
        type: 'multiple-choice',
        question: 'Como se diz "tocar piano" em italiano?',
        options: ['Suonare il piano', 'Cantare', 'Ballare', 'Dipingere'],
        correctAnswer: 'Suonare il piano'
      },
      {
        id: 43,
        type: 'translation',
        question: 'Traduza: "Nos fins de semana gosto de ler"',
        correctAnswer: 'Nel weekend mi piace leggere'
      }
    ]
  },

  // MÓDULO 4: INTERMEDIÁRIO SUPERIOR (B2)
  {
    id: 16,
    title: "Congiuntivo Presente",
    description: "Aprenda o modo subjuntivo",
    level: 'B2',
    category: "Gramática Avançada",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 120,
    exercises: [
      {
        id: 44,
        type: 'multiple-choice',
        question: 'Complete: "Penso che Marco _____ ragione"',
        options: ['ha', 'abbia', 'avrà', 'aveva'],
        correctAnswer: 'abbia'
      },
      {
        id: 45,
        type: 'translation',
        question: 'Traduza: "É possível que chova amanhã"',
        correctAnswer: 'È possibile che domani piova'
      }
    ]
  },
  {
    id: 17,
    title: "Arte e Cultura",
    description: "Vocabulário sobre arte e cultura italiana",
    level: 'B2',
    category: "Cultura",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 110,
    exercises: [
      {
        id: 46,
        type: 'multiple-choice',
        question: 'Qual artista pintou a Capela Sistina?',
        options: ['Leonardo da Vinci', 'Michelangelo', 'Raffaello', 'Caravaggio'],
        correctAnswer: 'Michelangelo'
      },
      {
        id: 47,
        type: 'translation',
        question: 'Traduza: "O Renascimento italiano foi muito importante"',
        correctAnswer: 'Il Rinascimento italiano fu molto importante'
      }
    ]
  },
  {
    id: 18,
    title: "Política e Sociedade",
    description: "Discussões sobre temas sociais",
    level: 'B2',
    category: "Sociedade",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 115,
    exercises: [
      {
        id: 48,
        type: 'multiple-choice',
        question: 'Como se diz "cidadão" em italiano?',
        options: ['Cittadino', 'Straniero', 'Turista', 'Abitante'],
        correctAnswer: 'Cittadino'
      },
      {
        id: 49,
        type: 'translation',
        question: 'Traduza: "É importante participar da vida democrática"',
        correctAnswer: 'È importante partecipare alla vita democratica'
      }
    ]
  },
  {
    id: 19,
    title: "Economia e Negócios",
    description: "Vocabulário empresarial",
    level: 'B2',
    category: "Negócios",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 125,
    exercises: [
      {
        id: 50,
        type: 'multiple-choice',
        question: 'Como se diz "lucro" em italiano?',
        options: ['Perdita', 'Profitto', 'Spesa', 'Costo'],
        correctAnswer: 'Profitto'
      },
      {
        id: 51,
        type: 'translation',
        question: 'Traduza: "A empresa está crescendo rapidamente"',
        correctAnswer: 'L\'azienda sta crescendo rapidamente'
      }
    ]
  },
  {
    id: 20,
    title: "Meio Ambiente",
    description: "Discussões sobre ecologia e sustentabilidade",
    level: 'B2',
    category: "Ambiente",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 105,
    exercises: [
      {
        id: 52,
        type: 'multiple-choice',
        question: 'Como se diz "reciclagem" em italiano?',
        options: ['Riciclaggio', 'Inquinamento', 'Spreco', 'Consumo'],
        correctAnswer: 'Riciclaggio'
      },
      {
        id: 53,
        type: 'translation',
        question: 'Traduza: "Devemos proteger o meio ambiente"',
        correctAnswer: 'Dobbiamo proteggere l\'ambiente'
      }
    ]
  }
];
