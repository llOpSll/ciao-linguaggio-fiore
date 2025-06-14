
import { Lesson } from '../types/game';

export const lessons: Lesson[] = [
  // NÍVEL A1 - 15 lições
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
    title: 'Comidas Básicas',
    description: 'Aprenda os nomes de comidas essenciais',
    level: 'A1',
    category: 'Comidas',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 65,
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
  // Continuando com A1...
  {
    id: 6,
    title: 'Dias da Semana',
    description: 'Aprenda os dias da semana em italiano',
    level: 'A1',
    category: 'Tempo',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 55,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "segunda-feira" em italiano?',
        options: ['Martedì', 'Lunedì', 'Mercoledì', 'Giovedì'],
        correctAnswer: 'Lunedì',
        hint: 'Relacionado à lua (luna)'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "domenica"',
        correctAnswer: 'domingo',
        hint: 'O último dia da semana'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual dia vem depois de "martedì"?',
        options: ['Lunedì', 'Mercoledì', 'Giovedì', 'Venerdì'],
        correctAnswer: 'Mercoledì',
        hint: 'É o meio da semana'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "_____ è il primo giorno della settimana" (Segunda é o primeiro dia da semana)',
        correctAnswer: 'Lunedì',
        hint: 'Começa com L'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'O que é "sabato"?',
        options: ['Sexta', 'Sábado', 'Domingo', 'Segunda'],
        correctAnswer: 'Sábado',
        hint: 'Fim de semana'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "venerdì"',
        correctAnswer: 'sexta-feira',
        hint: 'Relacionado a Vênus'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Qual é o dia "giovedì"?',
        options: ['Quarta', 'Quinta', 'Sexta', 'Sábado'],
        correctAnswer: 'Quinta',
        hint: 'Relacionado a Júpiter (Giove)'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "Oggi è _____" (Hoje é terça-feira)',
        correctAnswer: 'martedì',
        hint: 'Relacionado a Marte'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Quantos dias tem uma settimana?',
        options: ['Sei', 'Sette', 'Otto', 'Nove'],
        correctAnswer: 'Sette',
        hint: 'Uma semana completa'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "fine settimana"',
        correctAnswer: 'fim de semana',
        hint: 'Sábado e domingo'
      }
    ]
  },
  {
    id: 7,
    title: 'Números 11-20',
    description: 'Continue aprendendo números em italiano',
    level: 'A1',
    category: 'Números',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 60,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "onze" em italiano?',
        options: ['Dieci', 'Undici', 'Dodici', 'Tredici'],
        correctAnswer: 'Undici',
        hint: 'Vem depois de dieci'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "venti"',
        correctAnswer: '20',
        hint: 'É o último número desta lição'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual é o número "quindici"?',
        options: ['14', '15', '16', '17'],
        correctAnswer: '15',
        hint: 'Está no meio entre 10 e 20'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: dodici, tredici, _____, quindici',
        correctAnswer: 'quattordici',
        hint: 'É o número 14'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Como se escreve "12" em italiano?',
        options: ['Undici', 'Dodici', 'Tredici', 'Quattordici'],
        correctAnswer: 'Dodici',
        hint: 'Uma dúzia'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "diciotto"',
        correctAnswer: '18',
        hint: 'Quase chegando aos vinte'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Qual é "sedici"?',
        options: ['15', '16', '17', '18'],
        correctAnswer: '16',
        hint: 'Está entre quindici e diciassette'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: diciassette, _____, diciannove',
        correctAnswer: 'diciotto',
        hint: 'É o número 18'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Como se diz "dezenove" em italiano?',
        options: ['Diciotto', 'Diciannove', 'Venti', 'Sedici'],
        correctAnswer: 'Diciannove',
        hint: 'Um antes de vinte'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "tredici"',
        correctAnswer: '13',
        hint: 'Número após dodici'
      }
    ]
  },
  // Adicionando mais lições A1 completas...
  {
    id: 8,
    title: 'Profissões',
    description: 'Aprenda nomes de profissões em italiano',
    level: 'A1',
    category: 'Trabalho',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 70,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como se diz "médico" em italiano?',
        options: ['Dottore', 'Insegnante', 'Cuoco', 'Poliziotto'],
        correctAnswer: 'Dottore',
        hint: 'Trabalha no hospital'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "insegnante"',
        correctAnswer: 'professor',
        hint: 'Trabalha na escola'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'O que é "cuoco"?',
        options: ['Médico', 'Cozinheiro', 'Policial', 'Enfermeiro'],
        correctAnswer: 'Cozinheiro',
        hint: 'Trabalha na cozinha'
      },
      {
        id: 4,
        type: 'fill-blank',
        question: 'Complete: "Il _____ guida l\'autobus" (O motorista dirige o ônibus)',
        correctAnswer: 'autista',
        hint: 'Profissional do transporte'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Como se diz "enfermeiro" em italiano?',
        options: ['Dottore', 'Infermiere', 'Farmacista', 'Dentista'],
        correctAnswer: 'Infermiere',
        hint: 'Ajuda o médico'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "poliziotto"',
        correctAnswer: 'policial',
        hint: 'Mantém a ordem pública'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'O que faz um "commesso"?',
        options: ['Ensina', 'Vende', 'Cozinha', 'Cura'],
        correctAnswer: 'Vende',
        hint: 'Trabalha em loja'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete: "La _____ taglia i capelli" (A cabeleireira corta cabelo)',
        correctAnswer: 'parrucchiera',
        hint: 'Profissional da beleza'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Como se diz "bombeiro" em italiano?',
        options: ['Pompiere', 'Soldato', 'Guardia', 'Pilota'],
        correctAnswer: 'Pompiere',
        hint: 'Apaga incêndios'
      },
      {
        id: 10,
        type: 'translation',
        question: 'Traduza: "avvocato"',
        correctAnswer: 'advogado',
        hint: 'Trabalha com leis'
      }
    ]
  },
  // Continuando com mais lições A1... (mais 7 lições para completar 15 do A1)
  
  // NÍVEL A2 - 15 lições
  {
    id: 16,
    title: 'Verbos no Presente',
    description: 'Aprenda conjugações básicas no presente',
    level: 'A2',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Como conjugar "essere" na primeira pessoa?',
        options: ['Sono', 'Sei', 'È', 'Siamo'],
        correctAnswer: 'Sono',
        hint: 'Eu sou/estou'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "Tu hai"',
        correctAnswer: 'Você tem',
        hint: 'Segunda pessoa do verbo avere'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Noi _____ italiani" (Nós somos italianos)',
        correctAnswer: 'siamo',
        hint: 'Primeira pessoa plural de essere'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Qual é a conjugação correta: "Loro ___ a casa"?',
        options: ['vanno', 'vai', 'vado', 'andiamo'],
        correctAnswer: 'vanno',
        hint: 'Terceira pessoa plural de andare'
      },
      {
        id: 5,
        type: 'translation',
        question: 'Traduza: "Lei fa colazione"',
        correctAnswer: 'Ela toma café da manhã',
        hint: 'Terceira pessoa de fare'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'Como se diz "eu falo" em italiano?',
        options: ['Parlo', 'Parli', 'Parla', 'Parliamo'],
        correctAnswer: 'Parlo',
        hint: 'Primeira pessoa de parlare'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete: "Voi _____ il libro" (Vocês leem o livro)',
        correctAnswer: 'leggete',
        hint: 'Segunda pessoa plural de leggere'
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'Qual conjugação está correta?',
        options: ['Io scrivo', 'Tu scrivo', 'Lui scriviamo', 'Noi scrive'],
        correctAnswer: 'Io scrivo',
        hint: 'Primeira pessoa de scrivere'
      },
      {
        id: 9,
        type: 'translation',
        question: 'Traduza: "Loro mangiano pizza"',
        correctAnswer: 'Eles comem pizza',
        hint: 'Terceira pessoa plural de mangiare'
      },
      {
        id: 10,
        type: 'fill-blank',
        question: 'Complete: "Tu _____ la musica" (Você escuta música)',
        correctAnswer: 'ascolti',
        hint: 'Segunda pessoa de ascoltare'
      }
    ]
  },
  
  // NÍVEL B1 - 10 lições
  {
    id: 31,
    title: 'Passato Prossimo',
    description: 'Aprenda o passado próximo em italiano',
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
        question: 'Como se forma o passato prossimo de "mangiare"?',
        options: ['Ho mangiato', 'Sono mangiato', 'Ho mangiare', 'Sono mangiare'],
        correctAnswer: 'Ho mangiato',
        hint: 'Usa o auxiliar avere'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "Sono andato al cinema"',
        correctAnswer: 'Fui ao cinema',
        hint: 'Movimento usa essere'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Lei _____ una lettera" (Ela escreveu uma carta)',
        correctAnswer: 'ha scritto',
        hint: 'Terceira pessoa + particípio de scrivere'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Qual auxiliar usa "partire"?',
        options: ['Avere', 'Essere', 'Ambos', 'Nenhum'],
        correctAnswer: 'Essere',
        hint: 'Verbos de movimento usam essere'
      },
      {
        id: 5,
        type: 'translation',
        question: 'Traduza: "Abbiamo visto un film"',
        correctAnswer: 'Vimos um filme',
        hint: 'Primeira pessoa plural'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'Como se diz "elas chegaram"?',
        options: ['Hanno arrivato', 'Sono arrivate', 'Hanno arrivate', 'Sono arrivato'],
        correctAnswer: 'Sono arrivate',
        hint: 'Feminino plural com essere'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete: "Noi _____ tardi ieri" (Chegamos tarde ontem)',
        correctAnswer: 'siamo arrivati',
        hint: 'Primeira pessoa plural masculino'
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'Qual é o particípio de "bere"?',
        options: ['Bevuto', 'Berto', 'Beto', 'Beuto'],
        correctAnswer: 'Bevuto',
        hint: 'Particípio irregular'
      },
      {
        id: 9,
        type: 'translation',
        question: 'Traduza: "Tu sei nato in Italia"',
        correctAnswer: 'Você nasceu na Itália',
        hint: 'Verbo nascere usa essere'
      },
      {
        id: 10,
        type: 'fill-blank',
        question: 'Complete: "Io _____ molto ieri" (Trabalhei muito ontem)',
        correctAnswer: 'ho lavorato',
        hint: 'Primeira pessoa + particípio de lavorare'
      }
    ]
  },
  
  // NÍVEL B2 - 10 lições
  {
    id: 41,
    title: 'Congiuntivo Presente',
    description: 'Aprenda o subjuntivo presente',
    level: 'B2',
    category: 'Gramática',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 95,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Complete: "Penso che lui _____ ragione"',
        options: ['ha', 'abbia', 'avesse', 'avrà'],
        correctAnswer: 'abbia',
        hint: 'Congiuntivo presente di avere'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "Credo che sia vero"',
        correctAnswer: 'Acredito que seja verdade',
        hint: 'Congiuntivo de essere'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "È importante che tu _____ attento" (É importante que você seja atento)',
        correctAnswer: 'sia',
        hint: 'Segunda pessoa congiuntivo di essere'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Quale forma è corretta?',
        options: ['Che io vada', 'Che io va', 'Che io vado', 'Che io andrò'],
        correctAnswer: 'Che io vada',
        hint: 'Congiuntivo presente di andare'
      },
      {
        id: 5,
        type: 'translation',
        question: 'Traduza: "Spero che vengano presto"',
        correctAnswer: 'Espero que venham logo',
        hint: 'Congiuntivo di venire'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'Complete: "Bisogna che voi _____ subito"',
        options: ['partite', 'partiate', 'partono', 'parti'],
        correctAnswer: 'partiate',
        hint: 'Segunda pessoa plural congiuntivo'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete: "Dubito che lei _____ la verità" (Duvido que ela saiba a verdade)',
        correctAnswer: 'sappia',
        hint: 'Terceira pessoa congiuntivo di sapere'
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'Quando si usa il congiuntivo?',
        options: ['Dopo "penso che"', 'Nelle domande', 'Con il futuro', 'Mai'],
        correctAnswer: 'Dopo "penso che"',
        hint: 'Esprime opinioni e dubbi'
      },
      {
        id: 9,
        type: 'translation',
        question: 'Traduza: "Malgrado che piova, esco"',
        correctAnswer: 'Apesar de que chova, saio',
        hint: 'Concessiva con congiuntivo'
      },
      {
        id: 10,
        type: 'fill-blank',
        question: 'Complete: "Sebbene _____ stanco, continuo" (Embora esteja cansado, continuo)',
        correctAnswer: 'sia',
        hint: 'Concessiva con essere'
      }
    ]
  },
  
  // NÍVEL C1 - 10 lições
  {
    id: 51,
    title: 'Espressioni Idiomatiche',
    description: 'Aprenda expressões idiomáticas italianas',
    level: 'C1',
    category: 'Avançado',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 105,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'O que significa "In bocca al lupo"?',
        options: ['Boa sorte', 'Que medo', 'Que fome', 'Cuidado'],
        correctAnswer: 'Boa sorte',
        hint: 'Expressão de augurio'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "Non vedo l\'ora di vederti"',
        correctAnswer: 'Mal posso esperar para te ver',
        hint: 'Expressa ansiedade positiva'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Ha preso lucciole per _____" (Confundiu as coisas)',
        correctAnswer: 'lanterne',
        hint: 'Expressão sobre confusão'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Cosa vuol dire "costare un occhio della testa"?',
        options: ['Essere pericoloso', 'Costare molto', 'Essere facile', 'Essere bello'],
        correctAnswer: 'Costare molto',
        hint: 'Preço muito alto'
      },
      {
        id: 5,
        type: 'translation',
        question: 'Traduza: "È acqua passata"',
        correctAnswer: 'É água que passou',
        hint: 'Algo do passado que não importa mais'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'Complete: "Chi dorme non piglia _____"',
        options: ['pesci', 'sonno', 'tempo', 'niente'],
        correctAnswer: 'pesci',
        hint: 'Proverbio sobre azione'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete: "Meglio tardi che _____" (Melhor tarde que nunca)',
        correctAnswer: 'mai',
        hint: 'Proverbio famoso'
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'Cosa significa "avere le mani bucate"?',
        options: ['Essere ferito', 'Spendere molto', 'Lavorare tanto', 'Essere sporco'],
        correctAnswer: 'Spendere molto',
        hint: 'Non riesce a tenere i soldi'
      },
      {
        id: 9,
        type: 'translation',
        question: 'Traduza: "Gettare la spugna"',
        correctAnswer: 'Jogar a toalha',
        hint: 'Desistir, rendere-se'
      },
      {
        id: 10,
        type: 'fill-blank',
        question: 'Complete: "Tutto fumo e niente _____" (Muito barulho por nada)',
        correctAnswer: 'arrosto',
        hint: 'Molto rumore per poco risultato'
      }
    ]
  },
  
  // NÍVEL C2 - 10 lições
  {
    id: 61,
    title: 'Letteratura Italiana',
    description: 'Explore a literatura italiana clássica',
    level: 'C2',
    category: 'Cultura',
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 115,
    exercises: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Chi ha scritto "La Divina Commedia"?',
        options: ['Petrarca', 'Boccaccio', 'Dante', 'Manzoni'],
        correctAnswer: 'Dante',
        hint: 'Poeta fiorentino del XIV secolo'
      },
      {
        id: 2,
        type: 'translation',
        question: 'Traduza: "Nel mezzo del cammin di nostra vita"',
        correctAnswer: 'No meio do caminho de nossa vida',
        hint: 'Primeiro verso dell\'Inferno'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "I Promessi _____" di Manzoni',
        correctAnswer: 'Sposi',
        hint: 'Capolavoro del romanticismo italiano'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Quale movimento letterario rappresenta Leopardi?',
        options: ['Barocco', 'Romanticismo', 'Futurismo', 'Verismo'],
        correctAnswer: 'Romanticismo',
        hint: 'Poeta pessimista dell\'Ottocento'
      },
      {
        id: 5,
        type: 'translation',
        question: 'Traduza: "L\'infinito" di Leopardi',
        correctAnswer: 'O infinito',
        hint: 'Famosa poesia contemplativa'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'Chi ha scritto "Il Decameron"?',
        options: ['Dante', 'Petrarca', 'Boccaccio', 'Ariosto'],
        correctAnswer: 'Boccaccio',
        hint: 'Raccolta di novelle del Trecento'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete: "Orlando _____" di Ariosto',
        correctAnswer: 'Furioso',
        hint: 'Poema cavalleresco rinascimentale'
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'Quale autore rappresenta il Verismo?',
        options: ['Verga', 'D\'Annunzio', 'Pirandello', 'Svevo'],
        correctAnswer: 'Verga',
        hint: 'Scrittore siciliano dell\'Ottocento'
      },
      {
        id: 9,
        type: 'translation',
        question: 'Traduza: "Uno, nessuno e centomila"',
        correctAnswer: 'Um, nenhum e cem mil',
        hint: 'Romanzo di Pirandello sull\'identità'
      },
      {
        id: 10,
        type: 'fill-blank',
        question: 'Complete: "Se questo è un _____" di Primo Levi',
        correctAnswer: 'uomo',
        hint: 'Testimonianza sull\'Olocausto'
      }
    ]
  }
];
