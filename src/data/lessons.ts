
import { Lesson } from '../types/game';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Primeiras Palavras",
    description: "Aprenda saudações e palavras básicas",
    level: 'A1',
    category: "Básico",
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
      }
    ]
  },
  {
    id: 2,
    title: "Família e Pessoas",
    description: "Vocabulário sobre família e relacionamentos",
    level: 'A1',
    category: "Vocabulário",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 75,
    exercises: [
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Como se diz "mãe" em italiano?',
        options: ['Padre', 'Madre', 'Sorella', 'Nonna'],
        correctAnswer: 'Madre'
      },
      {
        id: 6,
        type: 'translation',
        question: 'Traduza: "Meu irmão"',
        correctAnswer: 'Mio fratello'
      },
      {
        id: 7,
        type: 'match',
        question: 'Combine as palavras',
        italian: 'Famiglia',
        portuguese: 'Família',
        correctAnswer: 'Família'
      }
    ]
  },
  {
    id: 3,
    title: "Números e Cores",
    description: "Aprenda números de 1-20 e cores básicas",
    level: 'A1',
    category: "Vocabulário",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 60,
    exercises: [
      {
        id: 8,
        type: 'multiple-choice',
        question: 'Como se diz "vermelho" em italiano?',
        options: ['Blu', 'Verde', 'Rosso', 'Giallo'],
        correctAnswer: 'Rosso'
      },
      {
        id: 9,
        type: 'translation',
        question: 'Traduza: "Cinco"',
        correctAnswer: 'Cinque'
      }
    ]
  },
  {
    id: 4,
    title: "Comida e Bebida",
    description: "Vocabulário essencial para restaurantes",
    level: 'A2',
    category: "Situações",
    isCompleted: false,
    isUnlocked: false,
    stars: 0,
    xp: 80,
    exercises: [
      {
        id: 10,
        type: 'multiple-choice',
        question: 'Como se diz "água" em italiano?',
        options: ['Vino', 'Latte', 'Acqua', 'Caffè'],
        correctAnswer: 'Acqua'
      },
      {
        id: 11,
        type: 'translation',
        question: 'Traduza: "Eu gostaria de uma pizza"',
        correctAnswer: 'Vorrei una pizza'
      }
    ]
  }
];
