import { Lesson } from '../types/game';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Saudações Básicas',
    description: 'Aprenda as saudações essenciais em italiano',
    level: 'A1',
    category: 'Básico',
    isCompleted: false,
    isUnlocked: true,
    stars: 0,
    xp: 50,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "olá" em italiano?',
        options: ['Ciao', 'Buonasera', 'Arrivederci', 'Grazie'],
        correctAnswer: 'Ciao',
        hint: 'É uma saudação informal muito comum'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "Bom dia"',
        correctAnswer: 'Buongiorno',
        hint: 'Usado da manhã até o início da tarde'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual é a tradução de "Boa noite"?',
        options: ['Buongiorno', 'Buonasera', 'Buonanotte', 'Ciao'],
        correctAnswer: 'Buonanotte',
        hint: 'Usado ao se despedir antes de dormir'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "_____, come stai?" (Oi, como você está?)',
        correctAnswer: 'Ciao',
        hint: 'Saudação informal'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Como se diz "até logo" em italiano?',
        options: ['Ciao', 'Arrivederci', 'Buongiorno', 'Grazie'],
        correctAnswer: 'Arrivederci',
        hint: 'Despedida formal'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "Boa tarde"',
        correctAnswer: 'Buonasera',
        hint: 'Usado a partir do final da tarde'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Qual saudação você usaria de manhã?',
        options: ['Buonasera', 'Buonanotte', 'Buongiorno', 'Arrivederci'],
        correctAnswer: 'Buongiorno',
        hint: 'É o equivalente a "bom dia"'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "_____! Come va?" (Olá! Como vai?)',
        correctAnswer: 'Salve',
        hint: 'Outra forma informal de cumprimentar'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Em que situação você usaria "Buonanotte"?',
        options: ['De manhã', 'À tarde', 'Ao se despedir à noite', 'No almoço'],
        correctAnswer: 'Ao se despedir à noite',
        hint: 'Usado antes de ir dormir'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Como você responderia a "Buongiorno"?',
        correctAnswer: 'Buongiorno',
        hint: 'Você pode repetir a mesma saudação'
      }
    ]
  },
  {
    id: 2,
    title: 'Números 1-10',
    description: 'Conte de 1 a 10 em italiano',
    level: 'A1',
    category: 'Números',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 50,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "três" em italiano?',
        options: ['Due', 'Tre', 'Quattro', 'Cinque'],
        correctAnswer: 'Tre',
        hint: 'É pronunciado como "tré"'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza o número: 5',
        correctAnswer: 'Cinque',
        hint: 'Pronuncia-se "tshín-kue"'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual é o número "otto" em português?',
        options: ['6', '7', '8', '9'],
        correctAnswer: '8',
        hint: 'É um número par'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete a sequência: uno, due, _____, quattro',
        correctAnswer: 'tre',
        hint: 'É o terceiro número'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Como se escreve "1" em italiano?',
        options: ['Uno', 'Due', 'Tre', 'Zero'],
        correctAnswer: 'Uno',
        hint: 'É o primeiro número'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "sette"',
        correctAnswer: '7',
        hint: 'Vem depois do sei'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Quantos são "dieci"?',
        options: ['8', '9', '10', '11'],
        correctAnswer: '10',
        hint: 'É o último número desta lição'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: sei, sette, otto, _____',
        correctAnswer: 'nove',
        hint: 'Vem antes de dieci'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Como se diz "dois" em italiano?',
        options: ['Uno', 'Due', 'Tre', 'Quattro'],
        correctAnswer: 'Due',
        hint: 'É o segundo número'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "quattro"',
        correctAnswer: '4',
        hint: 'É o dobro de due'
      }
    ]
  },
  {
    id: 3,
    title: 'A Família',
    description: 'Aprenda os membros da família em italiano',
    level: 'A1',
    category: 'Família',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 60,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "mãe" em italiano?',
        options: ['Padre', 'Madre', 'Figlio', 'Sorella'],
        correctAnswer: 'Madre',
        hint: 'A mulher que te criou'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "pai"',
        correctAnswer: 'Padre',
        hint: 'O homem que te criou'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Quem é o "fratello"?',
        options: ['Irmão', 'Irmã', 'Tio', 'Primo'],
        correctAnswer: 'Irmão',
        hint: 'Um membro masculino da família'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "La mia _____ è simpatica" (Minha irmã é legal)',
        correctAnswer: 'sorella',
        hint: 'Uma membro feminina da família'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'O que é "nonno"?',
        options: ['Tio', 'Avô', 'Primo', 'Pai'],
        correctAnswer: 'Avô',
        hint: 'O pai do seu pai ou mãe'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "nonna"',
        correctAnswer: 'avó',
        hint: 'A mãe do seu pai ou mãe'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Quem são os "figli"?',
        options: ['Pais', 'Filhos', 'Tios', 'Avós'],
        correctAnswer: 'Filhos',
        hint: 'As crianças que você cria'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "Mio _____ è divertente" (Meu tio é divertido)',
        correctAnswer: 'zio',
        hint: 'O irmão do seu pai ou mãe'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'O que é "zia"?',
        options: ['Tio', 'Avó', 'Tia', 'Primo'],
        correctAnswer: 'Tia',
        hint: 'A irmã do seu pai ou mãe'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "cugino"',
        correctAnswer: 'primo',
        hint: 'O filho do seu tio ou tia'
      }
    ]
  },
  {
    id: 4,
    title: 'Cores',
    description: 'Aprenda as cores em italiano',
    level: 'A1',
    category: 'Cores',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 55,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "vermelho" em italiano?',
        options: ['Verde', 'Rosso', 'Blu', 'Giallo'],
        correctAnswer: 'Rosso',
        hint: 'A cor do sangue'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "azul"',
        correctAnswer: 'Blu',
        hint: 'A cor do céu em um dia claro'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual é a cor "verde"?',
        options: ['Amarelo', 'Verde', 'Vermelho', 'Azul'],
        correctAnswer: 'Verde',
        hint: 'A cor da grama'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "Il sole è _____" (O sol é amarelo)',
        correctAnswer: 'giallo',
        hint: 'A cor do sol'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Como se diz "preto" em italiano?',
        options: ['Bianco', 'Nero', 'Grigio', 'Marrone'],
        correctAnswer: 'Nero',
        hint: 'A ausência de cor'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "branco"',
        correctAnswer: 'Bianco',
        hint: 'A cor da neve'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Qual é a cor "rosa"?',
        options: ['Viola', 'Rosa', 'Arancione', 'Grigio'],
        correctAnswer: 'Rosa',
        hint: 'Uma cor delicada'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "L\'uva è _____" (A uva é roxa)',
        correctAnswer: 'viola',
        hint: 'Uma cor real'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Como se diz "marrom" em italiano?',
        options: ['Grigio', 'Marrone', 'Beige', 'Oro'],
        correctAnswer: 'Marrone',
        hint: 'A cor da terra'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "cinza"',
        correctAnswer: 'Grigio',
        hint: 'Uma cor neutra'
      }
    ]
  },
  {
    id: 5,
    title: 'Comidas',
    description: 'Aprenda os nomes de comidas em italiano',
    level: 'A2',
    category: 'Comidas',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 70,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "pizza" em italiano?',
        options: ['Pasta', 'Pizza', 'Pane', 'Riso'],
        correctAnswer: 'Pizza',
        hint: 'Um prato famoso da Itália'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "massa"',
        correctAnswer: 'Pasta',
        hint: 'Um alimento básico italiano'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'O que é "pane"?',
        options: ['Água', 'Vinho', 'Pão', 'Queijo'],
        correctAnswer: 'Pão',
        hint: 'Um acompanhamento comum'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "Il _____ è delizioso" (O queijo é delicioso)',
        correctAnswer: 'formaggio',
        hint: 'Um produto lácteo'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Como se diz "vinho" em italiano?',
        options: ['Acqua', 'Vino', 'Birra', 'Succo'],
        correctAnswer: 'Vino',
        hint: 'Uma bebida popular'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "água"',
        correctAnswer: 'Acqua',
        hint: 'Essencial para a vida'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'O que é "caffè"?',
        options: ['Chá', 'Café', 'Leite', 'Chocolate'],
        correctAnswer: 'Café',
        hint: 'Uma bebida estimulante'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "Il _____ è freddo" (O sorvete é frio)',
        correctAnswer: 'gelato',
        hint: 'Uma sobremesa gelada'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Como se diz "carne" em italiano?',
        options: ['Pesce', 'Carne', 'Pollo', 'Uovo'],
        correctAnswer: 'Carne',
        hint: 'Uma fonte de proteína'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "pesce"',
        correctAnswer: 'peixe',
        hint: 'Um alimento do mar'
      }
    ]
  },
  {
    id: 6,
    title: 'Verbos Comuns',
    description: 'Aprenda verbos essenciais em italiano',
    level: 'A2',
    category: 'Verbos',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'O que significa "essere"?',
        options: ['Ter', 'Fazer', 'Ser/Estar', 'Ir'],
        correctAnswer: 'Ser/Estar',
        hint: 'Um verbo fundamental'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "avere"',
        correctAnswer: 'ter',
        hint: 'Indica posse'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual é o significado de "fare"?',
        options: ['Dizer', 'Fazer', 'Ver', 'Dar'],
        correctAnswer: 'Fazer',
        hint: 'Realizar uma ação'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "_____ un errore" (Fazer um erro)',
        correctAnswer: 'fare',
        hint: 'Cometer uma falha'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'O que significa "andare"?',
        options: ['Vir', 'Ir', 'Ficar', 'Voltar'],
        correctAnswer: 'Ir',
        hint: 'Mover-se para um lugar'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "venire"',
        correctAnswer: 'vir',
        hint: 'Mover-se em direção a'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Qual é o significado de "dire"?',
        options: ['Fazer', 'Dizer', 'Ouvir', 'Cantar'],
        correctAnswer: 'Dizer',
        hint: 'Expressar com palavras'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "_____ la verità" (Dizer a verdade)',
        correctAnswer: 'dire',
        hint: 'Ser honesto'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'O que significa "vedere"?',
        options: ['Olhar', 'Ver', 'Tocar', 'Sentir'],
        correctAnswer: 'Ver',
        hint: 'Perceber com os olhos'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "sapere"',
        correctAnswer: 'saber',
        hint: 'Ter conhecimento'
      }
    ]
  },
  {
    id: 7,
    title: 'Advérbios de Tempo',
    description: 'Aprenda advérbios de tempo em italiano',
    level: 'B1',
    category: 'Tempo',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'O que significa "oggi"?',
        options: ['Ontem', 'Hoje', 'Amanhã', 'Sempre'],
        correctAnswer: 'Hoje',
        hint: 'O dia atual'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "ieri"',
        correctAnswer: 'ontem',
        hint: 'O dia anterior'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual é o significado de "domani"?',
        options: ['Hoje', 'Amanhã', 'Sempre', 'Nunca'],
        correctAnswer: 'Amanhã',
        hint: 'O dia seguinte'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "_____ vado al cinema" (Amanhã vou ao cinema)',
        correctAnswer: 'domani',
        hint: 'Um plano para o futuro'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'O que significa "ora"?',
        options: ['Antes', 'Depois', 'Agora', 'Logo'],
        correctAnswer: 'Agora',
        hint: 'Neste momento'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "sempre"',
        correctAnswer: 'sempre',
        hint: 'Em todos os momentos'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Qual é o significado de "mai"?',
        options: ['Sempre', 'Às vezes', 'Nunca', 'Frequentemente'],
        correctAnswer: 'Nunca',
        hint: 'Em nenhum momento'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "Non lo faccio _____" (Eu nunca faço isso)',
        correctAnswer: 'mai',
        hint: 'Uma negação absoluta'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'O que significa "spesso"?',
        options: ['Raramente', 'Às vezes', 'Frequentemente', 'Nunca'],
        correctAnswer: 'Frequentemente',
        hint: 'Com alta frequência'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "raramente"',
        correctAnswer: 'raramente',
        hint: 'Com baixa frequência'
      }
    ]
  },
  {
    id: 8,
    title: 'Na Cidade',
    description: 'Aprenda lugares na cidade em italiano',
    level: 'B1',
    category: 'Lugares',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 85,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'O que é "scuola"?',
        options: ['Hospital', 'Escola', 'Igreja', 'Mercado'],
        correctAnswer: 'Escola',
        hint: 'Um lugar de aprendizado'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "università"',
        correctAnswer: 'universidade',
        hint: 'Educação superior'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual é o significado de "ospedale"?',
        options: ['Escola', 'Hospital', 'Banco', 'Correio'],
        correctAnswer: 'Hospital',
        hint: 'Um lugar para cuidar da saúde'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "Vado in _____ per le medicine" (Vou à farmácia para os remédios)',
        correctAnswer: 'farmacia',
        hint: 'Onde se compram medicamentos'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'O que é "supermercato"?',
        options: ['Restaurante', 'Mercado', 'Cinema', 'Teatro'],
        correctAnswer: 'Supermercato',
        hint: 'Onde se compram alimentos'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "ristorante"',
        correctAnswer: 'restaurante',
        hint: 'Onde se come fora'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Qual é o significado de "stazione"?',
        options: ['Aeroporto', 'Estação', 'Porto', 'Estrada'],
        correctAnswer: 'Estação',
        hint: 'Para pegar o trem'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "L\'_____ è lontano" (O aeroporto é longe)',
        correctAnswer: 'aeroporto',
        hint: 'Para pegar o avião'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'O que é "chiesa"?',
        options: ['Museu', 'Igreja', 'Praça', 'Parque'],
        correctAnswer: 'Igreja',
        hint: 'Um lugar de culto'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "piazza"',
        correctAnswer: 'praça',
        hint: 'Um espaço público'
      }
    ]
  },
  {
    id: 9,
    title: 'Roupas',
    description: 'Aprenda os nomes de roupas em italiano',
    level: 'B2',
    category: 'Roupas',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 90,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'O que é "camicia"?',
        options: ['Calça', 'Camisa', 'Saia', 'Vestido'],
        correctAnswer: 'Camisa',
        hint: 'Uma peça de roupa para o tronco'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "pantaloni"',
        correctAnswer: 'calças',
        hint: 'Peças de roupa para as pernas'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual é o significado de "gonna"?',
        options: ['Casaco', 'Saia', 'Chapéu', 'Luvas'],
        correctAnswer: 'Saia',
        hint: 'Uma peça de roupa feminina'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "Il _____ è elegante" (O vestido é elegante)',
        correctAnswer: 'vestito',
        hint: 'Uma peça de roupa formal'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'O que é "giacca"?',
        options: ['Cachecol', 'Jaqueta', 'Cinto', 'Bolsa'],
        correctAnswer: 'Jaqueta',
        hint: 'Usado para se aquecer'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "cappotto"',
        correctAnswer: 'casaco',
        hint: 'Usado em climas frios'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Qual é o significado de "scarpe"?',
        options: ['Meias', 'Sapatos', 'Botas', 'Chinelos'],
        correctAnswer: 'Sapatos',
        hint: 'Proteção para os pés'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "I _____ sono caldi" (As luvas são quentes)',
        correctAnswer: 'guanti',
        hint: 'Para aquecer as mãos'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'O que é "cappello"?',
        options: ['Boné', 'Chapéu', 'Tiara', 'Viseira'],
        correctAnswer: 'Chapéu',
        hint: 'Para proteger a cabeça'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "sciarpa"',
        correctAnswer: 'cachecol',
        hint: 'Usado no pescoço'
      }
    ]
  },
  {
    id: 10,
    title: 'Transportes',
    description: 'Aprenda os nomes de transportes em italiano',
    level: 'B2',
    category: 'Transportes',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 95,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'O que é "macchina"?',
        options: ['Bicicleta', 'Moto', 'Carro', 'Ônibus'],
        correctAnswer: 'Carro',
        hint: 'Um meio de transporte comum'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "bicicletta"',
        correctAnswer: 'bicicleta',
        hint: 'Um transporte de duas rodas'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual é o significado de "treno"?',
        options: ['Avião', 'Navio', 'Trem', 'Metrô'],
        correctAnswer: 'Trem',
        hint: 'Um transporte sobre trilhos'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "L\'_____ vola nel cielo" (O avião voa no céu)',
        correctAnswer: 'aereo',
        hint: 'Um transporte aéreo'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'O que é "autobus"?',
        options: ['Táxi', 'Ônibus', 'Van', 'Caminhão'],
        correctAnswer: 'Ônibus',
        hint: 'Um transporte público'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "nave"',
        correctAnswer: 'navio',
        hint: 'Um transporte marítimo'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Qual é o significado de "moto"?',
        options: ['Carro', 'Moto', 'Bicicleta', 'Patinete'],
        correctAnswer: 'Moto',
        hint: 'Um transporte de duas rodas motorizado'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "Il _____ va sottoterra" (O metrô vai embaixo da terra)',
        correctAnswer: 'metrò',
        hint: 'Um transporte subterrâneo'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'O que é "taxi"?',
        options: ['Uber', 'Táxi', 'Carona', 'Aluguel'],
        correctAnswer: 'Táxi',
        hint: 'Um transporte privado'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "elicottero"',
        correctAnswer: 'helicóptero',
        hint: 'Um transporte aéreo vertical'
      }
    ]
  }
];
