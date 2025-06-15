import { Lesson } from '../types/game';

export const lessons: Lesson[] = [
  // NÍVEL A1 - 6 lições
  {
    id: 1,
    title: 'Saudações e Apresentações',
    description: 'Aprenda as saudações essenciais e como se apresentar em italiano',
    level: 'A1',
    category: 'Básico',
    isCompleted: false,
    isUnlocked: true,
    stars: 0,
    xp: 50,
    videoUrl: 'https://example.com/video1',
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "olá" em italiano?',
        options: ['Ciao', 'Buonasera', 'Arrivederci', 'Grazie'],
        correctAnswer: 'Ciao',
        hint: 'É uma saudação informal muito comum',
        context: 'Usado entre amigos e pessoas próximas'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "Bom dia"',
        correctAnswer: 'Buongiorno',
        hint: 'Usado da manhã até o início da tarde',
        context: 'Saudação formal matutina'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Mi _____ Marco" (Meu nome é Marco)',
        correctAnswer: 'chiamo',
        hint: 'Verbo reflexivo para dizer o nome',
        context: 'Forma padrão de se apresentar'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Como você responde a "Come ti chiami?"',
        options: ['Mi chiamo...', 'Come stai?', 'Piacere', 'Arrivederci'],
        correctAnswer: 'Mi chiamo...',
        hint: 'A pergunta é sobre seu nome',
        context: 'Resposta quando alguém pergunta seu nome'
      },
      {
        id: 5,
        type: 'translation',
        question: 'Traduza: "Prazer em conhecê-lo"',
        correctAnswer: 'Piacere di conoscerla',
        hint: 'Expressão de cortesia ao conhecer alguém',
        context: 'Usado em apresentações formais'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'Qual é a tradução de "Boa noite"?',
        options: ['Buongiorno', 'Buonasera', 'Buonanotte', 'Ciao'],
        correctAnswer: 'Buonanotte',
        hint: 'Usado ao se despedir antes de dormir',
        context: 'Despedida noturna'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete: "_____ lei?" (Como vai a senhora?)',
        correctAnswer: 'Come sta',
        hint: 'Forma formal de perguntar como alguém está',
        context: 'Usado com pessoas mais velhas ou em situações formais'
      },
      {
        id: 8,
        type: 'translation',
        question: 'Traduza: "Até logo"',
        correctAnswer: 'A presto',
        hint: 'Despedida quando você vai ver a pessoa em breve',
        context: 'Quando você espera encontrar a pessoa novamente em pouco tempo'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Como se diz "Desculpe" em italiano?',
        options: ['Grazie', 'Prego', 'Scusi', 'Bene'],
        correctAnswer: 'Scusi',
        hint: 'Usado para pedir desculpas ou chamar atenção',
        context: 'Forma educada de se desculpar'
      },
      {
        id: 10,
        type: 'fill-blank',
        question: 'Complete: "Sono _____ Germania" (Sou da Alemanha)',
        correctAnswer: 'della',
        hint: 'Preposição articulada para indicar origem',
        context: 'Usado para falar de onde você é'
      }
    ]
  },
  {
    id: 2,
    title: 'Números e Quantidades',
    description: 'Aprenda os números de 0 a 100 e como usá-los no dia a dia',
    level: 'A1',
    category: 'Números',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 55,
    videoUrl: 'https://example.com/video2',
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "quinze" em italiano?',
        options: ['Quattordici', 'Quindici', 'Sedici', 'Diciassette'],
        correctAnswer: 'Quindici',
        hint: 'É o número que vem depois de 14',
        context: 'Usado para contar idade, quantidades, etc.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza o número: 23',
        correctAnswer: 'Ventitré',
        hint: 'Combina venti + tre',
        context: 'Formação dos números compostos'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Ho _____ anni" (Tenho 25 anos)',
        correctAnswer: 'venticinque',
        hint: 'Vinte mais cinco',
        context: 'Forma de dizer a idade'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Quanto custa? "Costa _____ euro" (50 euros)',
        options: ['Cinquanta', 'Sessanta', 'Quaranta', 'Settanta'],
        correctAnswer: 'Cinquanta',
        hint: 'É a metade de 100',
        context: 'Usado para preços e quantias'
      },
      {
        id: 5,
        type: 'translation',
        question: 'Traduza: "primeira vez"',
        correctAnswer: 'Prima volta',
        hint: 'Usa o ordinal feminino',
        context: 'Expressão muito comum'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'Como se diz "terceiro" em italiano?',
        options: ['Primo', 'Secondo', 'Terzo', 'Quarto'],
        correctAnswer: 'Terzo',
        hint: 'Número ordinal após secondo',
        context: 'Usado para posições e sequências'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete: "Sono le _____ e mezza" (São 3h30)',
        correctAnswer: 'tre',
        hint: 'Número cardinal para as horas',
        context: 'Forma de dizer as horas'
      },
      {
        id: 8,
        type: 'translation',
        question: 'Traduza: "cem"',
        correctAnswer: 'Cento',
        hint: 'Número redondo importante',
        context: 'Usado em percentagens e quantidades grandes'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Quanto são "due più tre"?',
        options: ['Quattro', 'Cinque', 'Sei', 'Sette'],
        correctAnswer: 'Cinque',
        hint: 'Operação matemática simples',
        context: 'Matemática básica em italiano'
      },
      {
        id: 10,
        type: 'fill-blank',
        question: 'Complete: "Il _____ piano" (O segundo andar)',
        correctAnswer: 'secondo',
        hint: 'Ordinal masculino',
        context: 'Usado para indicar andares de prédios'
      }
    ]
  },
  {
    id: 3,
    title: 'Cores e Objetos Básicos',
    description: 'Vocabulário essencial sobre cores e objetos do cotidiano',
    level: 'A1',
    category: 'Vocabulário',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 45,
    exercises: []
  },
  {
    id: 4,
    title: 'Artigos e Gênero',
    description: 'Aprenda os artigos definidos e indefinidos em italiano',
    level: 'A1',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 60,
    exercises: []
  },
  {
    id: 5,
    title: 'Verbos Ser e Estar',
    description: 'Domine os verbos essere e stare no presente',
    level: 'A1',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 65,
    exercises: []
  },
  {
    id: 6,
    title: 'Dias da Semana e Meses',
    description: 'Aprenda a expressar tempo: dias, meses e estações',
    level: 'A1',
    category: 'Tempo',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 50,
    exercises: []
  },

  // NÍVEL A2 - 6 lições
  {
    id: 7,
    title: 'Família e Relacionamentos',
    description: 'Vocabulário sobre família, parentesco e relacionamentos pessoais',
    level: 'A2',
    category: 'Família',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 60,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "cunhado" em italiano?',
        options: ['Cognato', 'Cugino', 'Zio', 'Suocero'],
        correctAnswer: 'Cognato',
        hint: 'Marido da sua irmã ou irmão da sua esposa',
        context: 'Relação familiar por casamento'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "nora"',
        correctAnswer: 'Nuora',
        hint: 'Esposa do filho',
        context: 'Relação familiar feminina'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "I miei _____ sono divorziati" (Meus pais são divorciados)',
        correctAnswer: 'genitori',
        hint: 'Pai e mãe juntos',
        context: 'Estado civil dos pais'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Qual é o feminino de "fidanzato"?',
        options: ['Fidanzata', 'Moglie', 'Amica', 'Sorella'],
        correctAnswer: 'Fidanzata',
        hint: 'Namorada ou noiva',
        context: 'Relacionamento amoroso antes do casamento'
      },
      {
        id: 5,
        type: 'translation',
        question: 'Traduza: "madrastra"',
        correctAnswer: 'Matrigna',
        hint: 'Nova esposa do pai',
        context: 'Família reconstituída'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'Como se diz "gêmeos" em italiano?',
        options: ['Gemelli', 'Fratelli', 'Cugini', 'Amici'],
        correctAnswer: 'Gemelli',
        hint: 'Irmãos nascidos ao mesmo tempo',
        context: 'Tipo especial de irmandade'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete: "La mia _____ aspetta un bambino" (Minha cunhada está grávida)',
        correctAnswer: 'cognata',
        hint: 'Feminino de cognato',
        context: 'Gravidez na família'
      },
      {
        id: 8,
        type: 'translation',
        question: 'Traduza: "padrinho"',
        correctAnswer: 'Padrino',
        hint: 'Figura importante no batismo',
        context: 'Relação espiritual/religiosa'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'O que é "vedovo"?',
        options: ['Solteiro', 'Casado', 'Viúvo', 'Divorciado'],
        correctAnswer: 'Viúvo',
        hint: 'Perdeu o cônjuge',
        context: 'Estado civil após perda do parceiro'
      },
      {
        id: 10,
        type: 'fill-blank',
        question: 'Complete: "I miei _____ vivono in campagna" (Meus sogros moram no campo)',
        correctAnswer: 'suoceri',
        hint: 'Pais do cônjuge',
        context: 'Família do parceiro'
      }
    ]
  },
  {
    id: 8,
    title: 'Casa e Móveis',
    description: 'Aprenda sobre partes da casa e móveis em italiano',
    level: 'A2',
    category: 'Casa',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 65,
    exercises: []
  },
  {
    id: 9,
    title: 'Comida e Bebida',
    description: 'Vocabulário essencial sobre alimentação italiana',
    level: 'A2',
    category: 'Culinária',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 70,
    exercises: []
  },
  {
    id: 10,
    title: 'Presente dos Verbos Regulares',
    description: 'Conjugação dos verbos regulares no presente',
    level: 'A2',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: []
  },
  {
    id: 11,
    title: 'Preposições Básicas',
    description: 'Aprenda as preposições mais importantes em italiano',
    level: 'A2',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 70,
    exercises: []
  },
  {
    id: 12,
    title: 'Compras e Dinheiro',
    description: 'Vocabulário para fazer compras e falar sobre preços',
    level: 'A2',
    category: 'Compras',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 65,
    exercises: []
  },

  // NÍVEL A3 - 6 lições
  {
    id: 13,
    title: 'Transporte e Viagem',
    description: 'Vocabulário sobre meios de transporte e viagens',
    level: 'A3',
    category: 'Viagem',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: []
  },
  {
    id: 14,
    title: 'Profissões e Trabalho',
    description: 'Aprenda sobre diferentes profissões e o mundo do trabalho',
    level: 'A3',
    category: 'Trabalho',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: []
  },
  {
    id: 15,
    title: 'Corpo Humano e Saúde',
    description: 'Vocabulário sobre partes do corpo e questões de saúde',
    level: 'A3',
    category: 'Saúde',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: []
  },
  {
    id: 16,
    title: 'Verbos Reflexivos',
    description: 'Aprenda a conjugar e usar verbos reflexivos',
    level: 'A3',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: []
  },
  {
    id: 17,
    title: 'Adjetivos e Comparações',
    description: 'Uso de adjetivos e como fazer comparações',
    level: 'A3',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: []
  },
  {
    id: 18,
    title: 'Clima e Estações',
    description: 'Aprenda a falar sobre o tempo e as estações do ano',
    level: 'A3',
    category: 'Clima',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 70,
    exercises: []
  },

  // NÍVEL A4 - 6 lições
  {
    id: 19,
    title: 'Emoções e Sentimentos',
    description: 'Vocabulário para expressar emoções e sentimentos',
    level: 'A4',
    category: 'Emoções',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: []
  },
  {
    id: 20,
    title: 'Esportes e Lazer',
    description: 'Aprenda sobre esportes e atividades de lazer',
    level: 'A4',
    category: 'Esportes',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: []
  },
  {
    id: 21,
    title: 'Futuro Simples',
    description: 'Conjugação e uso do futuro simples em italiano',
    level: 'A4',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 90,
    exercises: []
  },
  {
    id: 22,
    title: 'Tecnologia e Internet',
    description: 'Vocabulário moderno sobre tecnologia e internet',
    level: 'A4',
    category: 'Tecnologia',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: []
  },
  {
    id: 23,
    title: 'Cultura Italiana',
    description: 'Aprenda sobre a cultura, tradições e costumes italianos',
    level: 'A4',
    category: 'Cultura',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: []
  },
  {
    id: 24,
    title: 'Advérbios de Modo',
    description: 'Formação e uso de advérbios de modo',
    level: 'A4',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: []
  },

  // NÍVEL A5 - 6 lições
  {
    id: 25,
    title: 'Música e Arte',
    description: 'Vocabulário sobre música, arte e expressões culturais',
    level: 'A5',
    category: 'Arte',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: []
  },
  {
    id: 26,
    title: 'Educação e Estudo',
    description: 'Vocabulário relacionado à educação e estudos',
    level: 'A5',
    category: 'Educação',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: []
  },
  {
    id: 27,
    title: 'Imperativo',
    description: 'Aprenda a formar e usar o modo imperativo',
    level: 'A5',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 90,
    exercises: []
  },
  {
    id: 28,
    title: 'Animais e Natureza',
    description: 'Vocabulário sobre animais, plantas e meio ambiente',
    level: 'A5',
    category: 'Natureza',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: []
  },
  {
    id: 29,
    title: 'Geografia da Itália',
    description: 'Aprenda sobre as regiões, cidades e geografia italiana',
    level: 'A5',
    category: 'Geografia',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: []
  },
  {
    id: 30,
    title: 'Particípio Presente',
    description: 'Formação e uso do particípio presente',
    level: 'A5',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: []
  },

  // NÍVEL A6 - 6 lições
  {
    id: 31,
    title: 'História da Itália',
    description: 'Aspectos importantes da história italiana',
    level: 'A6',
    category: 'História',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 90,
    exercises: []
  },
  {
    id: 32,
    title: 'Literatura Básica',
    description: 'Introdução à literatura italiana clássica',
    level: 'A6',
    category: 'Literatura',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 95,
    exercises: []
  },
  {
    id: 33,
    title: 'Condicional',
    description: 'Aprenda o modo condicional presente e passado',
    level: 'A6',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 100,
    exercises: []
  },
  {
    id: 34,
    title: 'Expressões Idiomáticas',
    description: 'Principais expressões idiomáticas italianas',
    level: 'A6',
    category: 'Expressões',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: []
  },
  {
    id: 35,
    title: 'Economia e Negócios',
    description: 'Vocabulário básico sobre economia e negócios',
    level: 'A6',
    category: 'Negócios',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 90,
    exercises: []
  },
  {
    id: 36,
    title: 'Revisão Nível A',
    description: 'Revisão completa de todos os conteúdos do nível A',
    level: 'A6',
    category: 'Revisão',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 100,
    exercises: []
  },

  // NÍVEL B1 - 6 lições
  {
    id: 37,
    title: 'Passato Prossimo',
    description: 'Domine o passado próximo italiano e suas conjugações',
    level: 'B1',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 105,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Qual auxiliar usa o verbo "partire"?',
        options: ['Avere', 'Essere', 'Entrambi', 'Nessuno'],
        correctAnswer: 'Essere',
        hint: 'Verbos de movimento usam essere',
        context: 'Regra fundamental do passato prossimo'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "Eles comeram pizza"',
        correctAnswer: 'Hanno mangiato la pizza',
        hint: 'Terceira pessoa plural com avere',
        context: 'Ação completada no passado'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Maria _____ a casa" (Maria foi para casa)',
        correctAnswer: 'è andata',
        hint: 'Feminino singular com movimento',
        context: 'Concordância com essere'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Qual é o particípio de "bere"?',
        options: ['Bevuto', 'Berto', 'Beuto', 'Bito'],
        correctAnswer: 'Bevuto',
        hint: 'Particípio irregular',
        context: 'Verbos irregulares importantes'
      },
      {
        id: 5,
        type: 'translation',
        question: 'Traduza: "Nós vimos um filme"',
        correctAnswer: 'Abbiamo visto un film',
        hint: 'Primeira pessoa plural',
        context: 'Atividade de lazer no passado'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'Como se diz "elas chegaram"?',
        options: ['Sono arrivate', 'Hanno arrivato', 'È arrivata', 'Sono arrivati'],
        correctAnswer: 'Sono arrivate',
        hint: 'Feminino plural com essere',
        context: 'Concordância de gênero e número'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete: "Io _____ muito ieri" (Trabalhei muito ontem)',
        correctAnswer: 'ho lavorato',
        hint: 'Primeira pessoa com avere',
        context: 'Atividade profissional no passado'
      },
      {
        id: 8,
        type: 'translation',
        question: 'Traduza: "Você nasceu em Roma?"',
        correctAnswer: 'Sei nato a Roma?',
        hint: 'Nascere usa essere',
        context: 'Pergunta sobre local de nascimento'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Qual frase está correta?',
        options: ['Ho andato', 'Sono andato', 'È andato', 'Hai andato'],
        correctAnswer: 'Sono andato',
        hint: 'Andare usa sempre essere',
        context: 'Erro comum a evitar'
      },
      {
        id: 10,
        type: 'fill-blank',
        question: 'Complete: "Le ragazze _____ in ritardo" (As meninas chegaram atrasadas)',
        correctAnswer: 'sono arrivate',
        hint: 'Feminino plural',
        context: 'Situação de atraso'
      }
    ]
  },
  {
    id: 38,
    title: 'Imperfetto',
    description: 'Aprenda o pretérito imperfeito e suas aplicações',
    level: 'B1',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 110,
    exercises: []
  },
  {
    id: 39,
    title: 'Pronomes Diretos',
    description: 'Uso correto dos pronomes diretos em italiano',
    level: 'B1',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 100,
    exercises: []
  },
  {
    id: 40,
    title: 'Medicina e Farmácia',
    description: 'Vocabulário específico sobre medicina e farmácia',
    level: 'B1',
    category: 'Saúde',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 95,
    exercises: []
  },
  {
    id: 41,
    title: 'Sistema Político',
    description: 'Aprenda sobre o sistema político italiano',
    level: 'B1',
    category: 'Política',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 100,
    exercises: []
  },
  {
    id: 42,
    title: 'Passato Remoto',
    description: 'Conjugação e uso do passato remoto',
    level: 'B1',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 115,
    exercises: []
  },

  // NÍVEL B2 - 6 lições
  {
    id: 43,
    title: 'Pronomes Indiretos',
    description: 'Domínio dos pronomes indiretos e combinados',
    level: 'B2',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 120,
    exercises: []
  },
  {
    id: 44,
    title: 'Subjuntivo Presente',
    description: 'Aprenda quando e como usar o subjuntivo presente',
    level: 'B2',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 125,
    exercises: []
  },
  {
    id: 45,
    title: 'Cinema Italiano',
    description: 'História e vocabulário do cinema italiano',
    level: 'B2',
    category: 'Cinema',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 110,
    exercises: []
  },
  {
    id: 46,
    title: 'Meio Ambiente',
    description: 'Discussões sobre ecologia e meio ambiente',
    level: 'B2',
    category: 'Ambiente',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 115,
    exercises: []
  },
  {
    id: 47,
    title: 'Subjuntivo Imperfeito',
    description: 'Formação e uso do subjuntivo imperfeito',
    level: 'B2',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 130,
    exercises: []
  },
  {
    id: 48,
    title: 'Jornalismo e Mídia',
    description: 'Vocabulário sobre jornalismo e meios de comunicação',
    level: 'B2',
    category: 'Mídia',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 120,
    exercises: []
  },

  // NÍVEL B3 - 6 lições
  {
    id: 49,
    title: 'Arquitetura Italiana',
    description: 'Estilos arquitetônicos e monumentos da Itália',
    level: 'B3',
    category: 'Arquitetura',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 125,
    exercises: []
  },
  {
    id: 50,
    title: 'Gerúndio e Infinito',
    description: 'Uso avançado do gerúndio e infinito',
    level: 'B3',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 130,
    exercises: []
  },
  {
    id: 51,
    title: 'Psicologia e Sociologia',
    description: 'Vocabulário de psicologia e sociologia',
    level: 'B3',
    category: 'Ciências Sociais',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 135,
    exercises: []
  },
  {
    id: 52,
    title: 'Passivo e Impessoal',
    description: 'Construções passivas e impessoais',
    level: 'B3',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 140,
    exercises: []
  },
  {
    id: 53,
    title: 'Filosofia Básica',
    description: 'Introdução à filosofia italiana',
    level: 'B3',
    category: 'Filosofia',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 130,
    exercises: []
  },
  {
    id: 54,
    title: 'Períodos Hipotéticos',
    description: 'Domínio dos períodos hipotéticos',
    level: 'B3',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 145,
    exercises: []
  },

  // NÍVEL B4 - 6 lições
  {
    id: 55,
    title: 'Ciência e Tecnologia',
    description: 'Vocabulário científico e tecnológico avançado',
    level: 'B4',
    category: 'Ciência',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 140,
    exercises: []
  },
  {
    id: 56,
    title: 'Concordância Temporal',
    description: 'Regras avançadas de concordância temporal',
    level: 'B4',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 150,
    exercises: []
  },
  {
    id: 57,
    title: 'Direito Italiano',
    description: 'Introdução ao sistema jurídico italiano',
    level: 'B4',
    category: 'Direito',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 145,
    exercises: []
  },
  {
    id: 58,
    title: 'Discurso Indireto',
    description: 'Transformação do discurso direto em indireto',
    level: 'B4',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 140,
    exercises: []
  },
  {
    id: 59,
    title: 'Gastronomia Regional',
    description: 'Especialidades culinárias regionais da Itália',
    level: 'B4',
    category: 'Culinária',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 135,
    exercises: []
  },
  {
    id: 60,
    title: 'Revisão Nível B',
    description: 'Revisão completa de todos os conteúdos do nível B',
    level: 'B4',
    category: 'Revisão',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 150,
    exercises: []
  },

  // NÍVEL B5 - 6 lições
  {
    id: 61,
    title: 'Renascimento Italiano',
    description: 'História e cultura do Renascimento',
    level: 'B5',
    category: 'História',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 155,
    exercises: []
  },
  {
    id: 62,
    title: 'Futuro Anterior',
    description: 'Uso do futuro anterior e suas nuances',
    level: 'B5',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 160,
    exercises: []
  },
  {
    id: 63,
    title: 'Economia Moderna',
    description: 'A economia italiana no contexto global',
    level: 'B5',
    category: 'Economia',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 155,
    exercises: []
  },
  {
    id: 64,
    title: 'Participio Passato Absoluto',
    description: 'Construções com particípio passado absoluto',
    level: 'B5',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 165,
    exercises: []
  },
  {
    id: 65,
    title: 'Moda Italiana',
    description: 'A indústria da moda e seu vocabulário',
    level: 'B5',
    category: 'Moda',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 150,
    exercises: []
  },
  {
    id: 66,
    title: 'Tradições Regionais',
    description: 'Festivais e tradições de cada região italiana',
    level: 'B5',
    category: 'Tradições',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 155,
    exercises: []
  },

  // NÍVEL B6 - 6 lições
  {
    id: 67,
    title: 'Dante e Literatura Medieval',
    description: 'Introdução a Dante e literatura medieval',
    level: 'B6',
    category: 'Literatura',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 170,
    exercises: []
  },
  {
    id: 68,
    title: 'Estilística Avançada',
    description: 'Figuras de linguagem e estilo literário',
    level: 'B6',
    category: 'Estilística',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 175,
    exercises: []
  },
  {
    id: 69,
    title: 'União Europeia e Itália',
    description: 'O papel da Itália na União Europeia',
    level: 'B6',
    category: 'Política',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 165,
    exercises: []
  },
  {
    id: 70,
    title: 'Sintaxe Complexa',
    description: 'Estruturas sintáticas complexas e subordinadas',
    level: 'B6',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 180,
    exercises: []
  },
  {
    id: 71,
    title: 'Arte Contemporânea',
    description: 'Movimentos artísticos contemporâneos na Itália',
    level: 'B6',
    category: 'Arte',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 170,
    exercises: []
  },
  {
    id: 72,
    title: 'Preparação Nível C',
    description: 'Preparação para o nível avançado C',
    level: 'B6',
    category: 'Preparação',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 175,
    exercises: []
  },

  // NÍVEL C1 - 6 lições
  {
    id: 73,
    title: 'Linguística Italiana',
    description: 'Introdução aos estudos linguísticos do italiano',
    level: 'C1',
    category: 'Linguística',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 185,
    exercises: []
  },
  {
    id: 74,
    title: 'Petrarca e Boccaccio',
    description: 'Estudo dos grandes autores do Trecento',
    level: 'C1',
    category: 'Literatura',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 190,
    exercises: []
  },
  {
    id: 75,
    title: 'Dialetos Regionais',
    description: 'Panorama dos dialetos italianos',
    level: 'C1',
    category: 'Dialetos',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 185,
    exercises: []
  },
  {
    id: 76,
    title: 'Retórica e Argumentação',
    description: 'Técnicas avançadas de argumentação',
    level: 'C1',
    category: 'Retórica',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 195,
    exercises: []
  },
  {
    id: 77,
    title: 'História da Arte Italiana',
    description: 'Panorama completo da arte italiana',
    level: 'C1',
    category: 'Arte',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 190,
    exercises: []
  },
  {
    id: 78,
    title: 'Semântica e Pragmática',
    description: 'Estudo avançado de significado e uso',
    level: 'C1',
    category: 'Linguística',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 200,
    exercises: []
  },

  // NÍVEL C2 - 6 lições
  {
    id: 79,
    title: 'Maquiavel e Pensamento Político',
    description: 'O pensamento político de Maquiavel',
    level: 'C2',
    category: 'Filosofia',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 205,
    exercises: []
  },
  {
    id: 80,
    title: 'Análise Textual Avançada',
    description: 'Técnicas de análise crítica de textos',
    level: 'C2',
    category: 'Análise',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 210,
    exercises: []
  },
  {
    id: 81,
    title: 'Linguagem Científica',
    description: 'Italiano técnico e científico',
    level: 'C2',
    category: 'Ciência',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 215,
    exercises: []
  },
  {
    id: 82,
    title: 'Variação Linguística',
    description: 'Registro formal e informal na língua italiana',
    level: 'C2',
    category: 'Variação',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 220,
    exercises: []
  },
  {
    id: 83,
    title: 'Tradução e Interpretação',
    description: 'Técnicas básicas de tradução',
    level: 'C2',
    category: 'Tradução',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 210,
    exercises: []
  },
  {
    id: 84,
    title: 'Mestrado em Italiano',
    description: 'Revisão final e certificação',
    level: 'C2',
    category: 'Certificação',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 250,
    exercises: []
  },

  // NÍVEIS D E E (opcionais para especialização)
  // NÍVEL D1 - 6 lições
  {
    id: 85,
    title: 'Italiano Comercial',
    description: 'Linguagem empresarial e comercial italiana',
    level: 'D1',
    category: 'Negócios',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 225,
    exercises: []
  },
  {
    id: 86,
    title: 'Italiano Jurídico',
    description: 'Terminologia e documentos jurídicos',
    level: 'D1',
    category: 'Direito',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 230,
    exercises: []
  },
  {
    id: 87,
    title: 'Italiano Médico',
    description: 'Terminologia médica e hospitalar',
    level: 'D1',
    category: 'Medicina',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 235,
    exercises: []
  },
  {
    id: 88,
    title: 'Italiano Acadêmico',
    description: 'Linguagem universitária e de pesquisa',
    level: 'D1',
    category: 'Academia',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 240,
    exercises: []
  },
  {
    id: 89,
    title: 'Italiano Técnico',
    description: 'Terminologia técnica e industrial',
    level: 'D1',
    category: 'Técnico',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 235,
    exercises: []
  },
  {
    id: 90,
    title: 'Especialização D1',
    description: 'Revisão e aprofundamento das especializações',
    level: 'D1',
    category: 'Especialização',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 250,
    exercises: []
  }
];
