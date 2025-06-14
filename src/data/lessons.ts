
import { Lesson } from '../types/game';

export const lessons: Lesson[] = [
  // A1 Level - Beginner (6 lessons)
  {
    id: 1,
    title: "Primi Passi - Saudações",
    description: "Aprenda as saudações básicas em italiano",
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
        question: "Como você diz 'Bom dia' em italiano?",
        options: ["Buongiorno", "Buonasera", "Buonanotte", "Ciao"],
        correctAnswer: "Buongiorno",
        hint: "Usado pela manhã até o meio-dia"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Oi' ou 'Tchau'",
        correctAnswer: "Ciao",
        italian: "Ciao",
        portuguese: "Oi / Tchau"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: '_____, come stai?' (Oi, como você está?)",
        correctAnswer: "Ciao",
        hint: "Saudação informal"
      }
    ]
  },
  {
    id: 2,
    title: "Famiglia - A Família",
    description: "Vocabulário sobre membros da família",
    level: 'A1',
    category: "Família",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 60,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'mãe' em italiano?",
        options: ["Padre", "Madre", "Sorella", "Nonna"],
        correctAnswer: "Madre"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Meu pai'",
        correctAnswer: "Mio padre",
        italian: "Mio padre",
        portuguese: "Meu pai"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que significa 'fratello'?",
        options: ["Irmã", "Irmão", "Primo", "Tio"],
        correctAnswer: "Irmão"
      }
    ]
  },
  {
    id: 3,
    title: "Numeri - Os Números",
    description: "Aprenda os números de 1 a 100",
    level: 'A1',
    category: "Números",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 55,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz '5' em italiano?",
        options: ["Quattro", "Cinque", "Sei", "Sette"],
        correctAnswer: "Cinque"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Dez'",
        correctAnswer: "Dieci"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Uno, due, tre, _____' (1, 2, 3, ___)",
        correctAnswer: "quattro"
      }
    ]
  },
  {
    id: 4,
    title: "Colori - As Cores",
    description: "Vocabulário das cores em italiano",
    level: 'A1',
    category: "Cores",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 50,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'vermelho' em italiano?",
        options: ["Blu", "Verde", "Rosso", "Giallo"],
        correctAnswer: "Rosso"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Azul'",
        correctAnswer: "Blu"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Qual é a cor da bandeira italiana? (Verde, branco e...)",
        options: ["Giallo", "Rosso", "Nero", "Arancione"],
        correctAnswer: "Rosso"
      }
    ]
  },
  {
    id: 5,
    title: "Cibo - Comida",
    description: "Vocabulário básico sobre alimentos",
    level: 'A1',
    category: "Comida",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 65,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'pizza' em italiano?",
        options: ["Pizza", "Pasta", "Pane", "Gelato"],
        correctAnswer: "Pizza"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Eu gosto de comer'",
        correctAnswer: "Mi piace mangiare"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Vorrei una _____ margherita' (Eu gostaria de uma pizza margherita)",
        correctAnswer: "pizza"
      }
    ]
  },
  {
    id: 6,
    title: "Casa - A Casa",
    description: "Vocabulário sobre a casa e móveis",
    level: 'A1',
    category: "Casa",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 60,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'quarto' em italiano?",
        options: ["Cucina", "Bagno", "Camera", "Salotto"],
        correctAnswer: "Camera"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'A cozinha é grande'",
        correctAnswer: "La cucina è grande"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que significa 'tavolo'?",
        options: ["Cadeira", "Mesa", "Cama", "Sofá"],
        correctAnswer: "Mesa"
      }
    ]
  },

  // A2 Level - Elementary (6 lessons)
  {
    id: 7,
    title: "Tempo - O Tempo",
    description: "Aprenda sobre clima e estações",
    level: 'A2',
    category: "Tempo",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 70,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'está chovendo' em italiano?",
        options: ["Fa caldo", "Piove", "Nevica", "C'è il sole"],
        correctAnswer: "Piove"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Hoje está um belo dia'",
        correctAnswer: "Oggi è una bella giornata"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'In estate fa _____' (No verão faz calor)",
        correctAnswer: "caldo"
      }
    ]
  },
  {
    id: 8,
    title: "Trasporti - Transporte",
    description: "Vocabulário sobre meios de transporte",
    level: 'A2',
    category: "Transporte",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 65,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'trem' em italiano?",
        options: ["Autobus", "Treno", "Aereo", "Macchina"],
        correctAnswer: "Treno"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Vou de carro'",
        correctAnswer: "Vado in macchina"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que significa 'aeroporto'?",
        options: ["Estação", "Aeroporto", "Porto", "Estrada"],
        correctAnswer: "Aeroporto"
      }
    ]
  },
  {
    id: 9,
    title: "Shopping - Compras",
    description: "Vocabulário para fazer compras",
    level: 'A2',
    category: "Compras",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você pergunta 'Quanto custa?' em italiano?",
        options: ["Dove si trova?", "Quanto costa?", "Che ore sono?", "Come stai?"],
        correctAnswer: "Quanto costa?"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Posso pagar com cartão?'",
        correctAnswer: "Posso pagare con carta?"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Vorrei _____ questo' (Eu gostaria de comprar isto)",
        correctAnswer: "comprare"
      }
    ]
  },
  {
    id: 10,
    title: "Lavoro - Trabalho",
    description: "Profissões e ambiente de trabalho",
    level: 'A2',
    category: "Trabalho",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 70,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'médico' em italiano?",
        options: ["Avvocato", "Dottore", "Ingegnere", "Insegnante"],
        correctAnswer: "Dottore"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Eu trabalho em um escritório'",
        correctAnswer: "Lavoro in un ufficio"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que significa 'cuoco'?",
        options: ["Professor", "Cozinheiro", "Motorista", "Vendedor"],
        correctAnswer: "Cozinheiro"
      }
    ]
  },
  {
    id: 11,
    title: "Salute - Saúde",
    description: "Vocabulário sobre saúde e corpo humano",
    level: 'A2',
    category: "Saúde",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'dor de cabeça' em italiano?",
        options: ["Mal di pancia", "Mal di testa", "Mal di denti", "Mal di gola"],
        correctAnswer: "Mal di testa"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Preciso ir ao médico'",
        correctAnswer: "Devo andare dal dottore"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Mi fa male la _____' (Minha perna dói)",
        correctAnswer: "gamba"
      }
    ]
  },
  {
    id: 12,
    title: "Vacanze - Férias",
    description: "Vocabulário sobre viagens e férias",
    level: 'A2',
    category: "Viagem",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'hotel' em italiano?",
        options: ["Albergo", "Ristorante", "Museo", "Teatro"],
        correctAnswer: "Albergo"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Onde fica o hotel?'",
        correctAnswer: "Dove si trova l'albergo?"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que significa 'valigia'?",
        options: ["Passaporte", "Mala", "Bilhete", "Mapa"],
        correctAnswer: "Mala"
      }
    ]
  },

  // B1 Level - Intermediate (6 lessons)
  {
    id: 13,
    title: "Passato Prossimo",
    description: "Aprenda o tempo passado em italiano",
    level: 'B1',
    category: "Gramática",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Complete: 'Ieri _____ al cinema' (Ontem fui ao cinema)",
        options: ["vado", "sono andato", "andrò", "andavo"],
        correctAnswer: "sono andato"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Eu comi uma pizza'",
        correctAnswer: "Ho mangiato una pizza"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Maria _____ studiato molto' (Maria estudou muito)",
        correctAnswer: "ha"
      }
    ]
  },
  {
    id: 14,
    title: "Congiuntivo",
    description: "O modo subjuntivo em italiano",
    level: 'B1',
    category: "Gramática",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 90,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Complete: 'Penso che lui _____ ragione' (Acho que ele tem razão)",
        options: ["ha", "abbia", "aveva", "avrà"],
        correctAnswer: "abbia"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Espero que você venha'",
        correctAnswer: "Spero che tu venga"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'È importante che voi _____ in orario' (É importante que vocês cheguem no horário)",
        correctAnswer: "arriviate"
      }
    ]
  },
  {
    id: 15,
    title: "Cultura Italiana",
    description: "Aprenda sobre a cultura e tradições italianas",
    level: 'B1',
    category: "Cultura",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Qual é a capital da Itália?",
        options: ["Milano", "Napoli", "Roma", "Firenze"],
        correctAnswer: "Roma"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'A Torre de Pisa é famosa'",
        correctAnswer: "La Torre di Pisa è famosa"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que é 'La Scala'?",
        options: ["Um restaurante", "Uma igreja", "Um teatro", "Um museu"],
        correctAnswer: "Um teatro"
      }
    ]
  },
  {
    id: 16,
    title: "Cucina Italiana",
    description: "Vocabulário avançado sobre culinária italiana",
    level: 'B1',
    category: "Culinária",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Qual é o ingrediente principal do risotto?",
        options: ["Pasta", "Riso", "Carne", "Pesce"],
        correctAnswer: "Riso"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Gostaria de experimentar pratos típicos'",
        correctAnswer: "Vorrei provare piatti tipici"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Il tiramisu è un _____ molto famoso' (O tiramisu é uma sobremesa muito famosa)",
        correctAnswer: "dolce"
      }
    ]
  },
  {
    id: 17,
    title: "Arte e Storia",
    description: "Arte e história italiana",
    level: 'B1',
    category: "Arte",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 90,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Quem pintou a Capela Sistina?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raffaello", "Caravaggio"],
        correctAnswer: "Michelangelo"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'O Renascimento começou na Itália'",
        correctAnswer: "Il Rinascimento iniziò in Italia"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Em que cidade está a Gioconda original?",
        options: ["Roma", "Firenze", "Parigi", "Milano"],
        correctAnswer: "Parigi"
      }
    ]
  },
  {
    id: 18,
    title: "Espressioni Idiomatiche",
    description: "Expressões idiomáticas italianas",
    level: 'B1',
    category: "Expressões",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 95,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "O que significa 'In bocca al lupo'?",
        options: ["Boa sorte", "Com fome", "Com pressa", "Com raiva"],
        correctAnswer: "Boa sorte"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Não há duas sem três'",
        correctAnswer: "Non c'è due senza tre"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Chi dorme non _____ pesci' (Quem dorme não pega peixes)",
        correctAnswer: "piglia"
      }
    ]
  },

  // B2 Level - Upper Intermediate (6 lessons)
  {
    id: 19,
    title: "Letteratura Italiana",
    description: "Grandes obras da literatura italiana",
    level: 'B2',
    category: "Literatura",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 100,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Quem escreveu 'A Divina Comédia'?",
        options: ["Petrarca", "Boccaccio", "Dante Alighieri", "Ariosto"],
        correctAnswer: "Dante Alighieri"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'A literatura italiana é muito rica'",
        correctAnswer: "La letteratura italiana è molto ricca"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Qual é o primeiro livro da Divina Comédia?",
        options: ["Paradiso", "Purgatorio", "Inferno", "Limbo"],
        correctAnswer: "Inferno"
      }
    ]
  },
  {
    id: 20,
    title: "Politica e Società",
    description: "Vocabulário sobre política e sociedade",
    level: 'B2',
    category: "Sociedade",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 105,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'eleições' em italiano?",
        options: ["Elezioni", "Votazioni", "Selezioni", "Decisioni"],
        correctAnswer: "Elezioni"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Os cidadãos têm direitos e deveres'",
        correctAnswer: "I cittadini hanno diritti e doveri"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Il _____ è il capo dello Stato' (O presidente é o chefe de Estado)",
        correctAnswer: "presidente"
      }
    ]
  },
  {
    id: 21,
    title: "Economia e Business",
    description: "Vocabulário de negócios e economia",
    level: 'B2',
    category: "Negócios",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 110,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'orçamento' em italiano?",
        options: ["Bilancio", "Costo", "Prezzo", "Spesa"],
        correctAnswer: "Bilancio"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'A empresa está crescendo rapidamente'",
        correctAnswer: "L'azienda sta crescendo rapidamente"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que significa 'investimento'?",
        options: ["Investimento", "Pagamento", "Desconto", "Lucro"],
        correctAnswer: "Investimento"
      }
    ]
  },
  {
    id: 22,
    title: "Ambiente e Natura",
    description: "Vocabulário sobre meio ambiente",
    level: 'B2',
    category: "Ambiente",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 100,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'sustentável' em italiano?",
        options: ["Sostenibile", "Rinnovabile", "Naturale", "Ecologico"],
        correctAnswer: "Sostenibile"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Devemos proteger o meio ambiente'",
        correctAnswer: "Dobbiamo proteggere l'ambiente"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Il riscaldamento _____ è un problema serio' (O aquecimento global é um problema sério)",
        correctAnswer: "globale"
      }
    ]
  },
  {
    id: 23,
    title: "Tecnologia Moderna",
    description: "Vocabulário sobre tecnologia e inovação",
    level: 'B2',
    category: "Tecnologia",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 105,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'inteligência artificial' em italiano?",
        options: ["Intelligenza artificiale", "Tecnologia avanzata", "Sistema automatico", "Macchina intelligente"],
        correctAnswer: "Intelligenza artificiale"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'A tecnologia está mudando o mundo'",
        correctAnswer: "La tecnologia sta cambiando il mondo"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que significa 'digitale'?",
        options: ["Manual", "Digital", "Físico", "Analógico"],
        correctAnswer: "Digital"
      }
    ]
  },
  {
    id: 24,
    title: "Relazioni Sociali",
    description: "Relacionamentos e vida social avançada",
    level: 'B2',
    category: "Relacionamentos",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 95,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'mal-entendido' em italiano?",
        options: ["Malinteso", "Discussione", "Problema", "Conflitto"],
        correctAnswer: "Malinteso"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'É importante manter as amizades'",
        correctAnswer: "È importante mantenere le amicizie"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Dobbiamo _____ le nostre differenze' (Devemos resolver nossas diferenças)",
        correctAnswer: "risolvere"
      }
    ]
  },

  // C1 Level - Advanced (8 lessons)
  {
    id: 25,
    title: "Linguaggio Formale",
    description: "Linguagem formal e protocolo italiano",
    level: 'C1',
    category: "Linguagem Formal",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 120,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você se dirigiria formalmente a um desconhecido?",
        options: ["Tu come stai?", "Lei come sta?", "Come va?", "Tutto bene?"],
        correctAnswer: "Lei come sta?"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza formalmente: 'Gostaria de fazer uma pergunta'",
        correctAnswer: "Vorrei fare una domanda"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete formalmente: 'La ringrazio per la Sua _____' (Agradeço pela sua atenção)",
        correctAnswer: "attenzione"
      }
    ]
  },
  {
    id: 26,
    title: "Analisi Testuale",
    description: "Análise de textos complexos em italiano",
    level: 'C1',
    category: "Análise",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 125,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Qual é o tom principal deste trecho: 'Nonostante le difficoltà, l'autore mantiene una visione ottimistica'?",
        options: ["Pessimista", "Neutro", "Ottimista", "Critico"],
        correctAnswer: "Ottimista"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'O autor expressa uma crítica sutil à sociedade'",
        correctAnswer: "L'autore esprime una critica sottile alla società"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que significa 'allusione' em um texto?",
        options: ["Descrição direta", "Referência indireta", "Explicação detalhada", "Conclusão"],
        correctAnswer: "Referência indireta"
      }
    ]
  },
  {
    id: 27,
    title: "Filosofia e Pensiero",
    description: "Vocabulário filosófico e pensamento crítico",
    level: 'C1',
    category: "Filosofia",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 130,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'epistemologia' em italiano?",
        options: ["Epistemologia", "Ontologia", "Metodologia", "Fenomenologia"],
        correctAnswer: "Epistemologia"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'A consciência humana é complexa'",
        correctAnswer: "La coscienza umana è complessa"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Il _____ cartesiano ha influenzato la filosofia moderna' (O pensamento cartesiano influenciou a filosofia moderna)",
        correctAnswer: "pensiero"
      }
    ]
  },
  {
    id: 28,
    title: "Diritto e Legge",
    description: "Vocabulário jurídico italiano",
    level: 'C1',
    category: "Direito",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 125,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'tribunal' em italiano?",
        options: ["Tribunale", "Corte", "Aula", "Sede"],
        correctAnswer: "Tribunale"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'O advogado apresentou as evidências'",
        correctAnswer: "L'avvocato ha presentato le prove"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que significa 'giurisprudenza'?",
        options: ["Lei", "Jurisprudência", "Processo", "Sentença"],
        correctAnswer: "Jurisprudência"
      }
    ]
  },
  {
    id: 29,
    title: "Medicina Avanzata",
    description: "Terminologia médica avançada",
    level: 'C1',
    category: "Medicina",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 130,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'prognóstico' em italiano?",
        options: ["Diagnosi", "Prognosi", "Sintomo", "Terapia"],
        correctAnswer: "Prognosi"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'O tratamento foi eficaz'",
        correctAnswer: "Il trattamento è stato efficace"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'La _____ ha rivelato una malattia rara' (O exame revelou uma doença rara)",
        correctAnswer: "diagnosi"
      }
    ]
  },
  {
    id: 30,
    title: "Scienza e Ricerca",
    description: "Vocabulário científico e de pesquisa",
    level: 'C1',
    category: "Ciência",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 135,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você diz 'hipótese' em italiano?",
        options: ["Ipotesi", "Teoria", "Dimostrazione", "Conclusione"],
        correctAnswer: "Ipotesi"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'A pesquisa confirmou os resultados'",
        correctAnswer: "La ricerca ha confermato i risultati"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que significa 'metodologia'?",
        options: ["Resultado", "Metodologia", "Experimento", "Observação"],
        correctAnswer: "Metodologia"
      }
    ]
  },
  {
    id: 31,
    title: "Dibattiti e Argomentazione",
    description: "Habilidades de debate e argumentação",
    level: 'C1',
    category: "Debate",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 140,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você introduz um contra-argumento?",
        options: ["Inoltre", "Tuttavia", "Infatti", "Perciò"],
        correctAnswer: "Tuttavia"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Por outro lado, devemos considerar...'",
        correctAnswer: "D'altra parte, dobbiamo considerare..."
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'Il suo argomento è _____, ma...' (Seu argumento é válido, mas...)",
        correctAnswer: "valido"
      }
    ]
  },
  {
    id: 32,
    title: "Comunicazione Professionale",
    description: "Comunicação profissional avançada",
    level: 'C1',
    category: "Profissional",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 130,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Como você agenda uma reunião formalmente?",
        options: ["Ci vediamo", "Vorrei programmare un incontro", "Facciamo una riunione", "Incontriamoci"],
        correctAnswer: "Vorrei programmare un incontro"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Gostaria de propor uma colaboração'",
        correctAnswer: "Vorrei proporre una collaborazione"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'La _____ è stata molto produttiva' (A reunião foi muito produtiva)",
        correctAnswer: "riunione"
      }
    ]
  },

  // C2 Level - Mastery (8 lessons)
  {
    id: 33,
    title: "Stilistica Avanzata",
    description: "Estilo e registro linguístico avançado",
    level: 'C2',
    category: "Estilística",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 150,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Qual registro é mais apropriado para um ensaio acadêmico?",
        options: ["Colloquiale", "Formale", "Informale", "Gergale"],
        correctAnswer: "Formale"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza com registro elevado: 'Este fenômeno merece atenção especial'",
        correctAnswer: "Tale fenomeno merita particolare attenzione"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Qual é um sinônimo mais elegante para 'molto importante'?",
        options: ["Fondamentale", "Grande", "Grosso", "Forte"],
        correctAnswer: "Fondamentale"
      }
    ]
  },
  {
    id: 34,
    title: "Critica Letteraria",
    description: "Análise e crítica literária profunda",
    level: 'C2',
    category: "Crítica",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 155,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Qual termo descreve uma obra que influencia outras?",
        options: ["Derivativa", "Seminale", "Secondaria", "Imitativa"],
        correctAnswer: "Seminale"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'A obra transcende as convenções do gênero'",
        correctAnswer: "L'opera trascende le convenzioni del genere"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'L'autore impiega una _____ narrativa innovativa' (O autor emprega uma técnica narrativa inovadora)",
        correctAnswer: "tecnica"
      }
    ]
  },
  {
    id: 35,
    title: "Retorica e Eloquenza",
    description: "Retórica e eloquência italiana",
    level: 'C2',
    category: "Retórica",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 160,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Qual figura retórica consiste na repetição inicial?",
        options: ["Metafora", "Anafora", "Iperbole", "Ironia"],
        correctAnswer: "Anafora"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'O orador cativou a audiência com sua eloquência'",
        correctAnswer: "L'oratore ha affascinato il pubblico con la sua eloquenza"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "O que é uma 'perifrasi'?",
        options: ["Frase direta", "Expressão indireta", "Palavra simples", "Termo técnico"],
        correctAnswer: "Expressão indireta"
      }
    ]
  },
  {
    id: 36,
    title: "Linguaggio Specialistico",
    description: "Linguagens especializadas e jargões",
    level: 'C2',
    category: "Especializado",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 165,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "No contexto financeiro, o que significa 'liquidità'?",
        options: ["Transparência", "Liquidez", "Fluidez", "Clareza"],
        correctAnswer: "Liquidez"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza (contexto médico): 'O protocolo terapêutico foi alterado'",
        correctAnswer: "Il protocollo terapeutico è stato modificato"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete (contexto jurídico): 'La _____ è stata emessa dal tribunale' (A sentença foi emitida pelo tribunal)",
        correctAnswer: "sentenza"
      }
    ]
  },
  {
    id: 37,
    title: "Varianti Regionali",
    description: "Dialetos e variações regionais do italiano",
    level: 'C2',
    category: "Dialetos",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 155,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Qual dialeto é típico de Nápoles?",
        options: ["Veneziano", "Napoletano", "Piemontese", "Siciliano"],
        correctAnswer: "Napoletano"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'Cada região tem suas próprias tradições linguísticas'",
        correctAnswer: "Ogni regione ha le proprie tradizioni linguistiche"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Em que região se fala o 'lombardo'?",
        options: ["Toscana", "Sicilia", "Lombardia", "Lazio"],
        correctAnswer: "Lombardia"
      }
    ]
  },
  {
    id: 38,
    title: "Traduzione Avanzata",
    description: "Técnicas avançadas de tradução",
    level: 'C2',
    category: "Tradução",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 170,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Qual é o maior desafio na tradução de poesia?",
        options: ["Sintaxe", "Lessico", "Ritmo e métrica", "Pontuação"],
        correctAnswer: "Ritmo e métrica"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza preservando o tom: 'A ironia sutil do autor é intraducível'",
        correctAnswer: "L'ironia sottile dell'autore è intraducibile"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete: 'La _____ richiede sensibilità culturale' (A tradução requer sensibilidade cultural)",
        correctAnswer: "traduzione"
      }
    ]
  },
  {
    id: 39,
    title: "Linguistica Storica",
    description: "Evolução histórica da língua italiana",
    level: 'C2',
    category: "Linguística",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 160,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "De qual língua deriva principalmente o italiano?",
        options: ["Greco", "Germanico", "Latino", "Etrusco"],
        correctAnswer: "Latino"
      },
      {
        id: 2,
        type: 'translation',
        question: "Traduza: 'O italiano moderno deriva do latim vulgar'",
        correctAnswer: "L'italiano moderno deriva dal latino volgare"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Quando se considera que nasceu o italiano literário?",
        options: ["Século X", "Século XIII", "Século XV", "Século XVI"],
        correctAnswer: "Século XIII"
      }
    ]
  },
  {
    id: 40,
    title: "Maestria Completa",
    description: "Demonstração de domínio completo do italiano",
    level: 'C2',
    category: "Maestria",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 200,
    exercises: [
      {
        id: 1,
        type: 'translation',
        question: "Traduza este texto complexo: 'A confluência de tradições linguísticas multíplices converge numa síntese cultural excepcional'",
        correctAnswer: "La confluenza di tradizioni linguistiche molteplici converge in una sintesi culturale eccezionale"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Qual alternativa expressa melhor uma condição irrealis?",
        options: ["Se avessi tempo, verrei", "Se avrò tempo, verrò", "Se ho tempo, vengo", "Se avevo tempo, venivo"],
        correctAnswer: "Se avessi tempo, verrei"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Complete com a forma mais elegante: 'La questione _____ ulteriore riflessione' (A questão merece reflexão adicional)",
        correctAnswer: "merita"
      }
    ]
  }
];
