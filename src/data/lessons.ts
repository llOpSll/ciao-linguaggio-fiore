
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
  // Continuando com A2, A3, A4, A5, A6...
  {
    id: 3,
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
  // Expandindo para níveis B1, B2, etc...
  {
    id: 7,
    title: 'Passato Prossimo',
    description: 'Domine o passado próximo italiano e suas conjugações',
    level: 'B1',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
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
        question: 'Complete: "Io _____ molto ieri" (Trabalhei muito ontem)',
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
  }
  // Continuaria com muito mais lições para completar todos os níveis...
];
