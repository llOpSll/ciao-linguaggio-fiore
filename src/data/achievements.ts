
import { Achievement } from '../types/game';

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Primeiro Passo",
    description: "Complete sua primeira lição",
    icon: "🎯",
    isUnlocked: false,
    requirement: 1,
    currentProgress: 0
  },
  {
    id: 2,
    title: "Estudioso",
    description: "Complete 5 lições",
    icon: "📚",
    isUnlocked: false,
    requirement: 5,
    currentProgress: 0
  },
  {
    id: 3,
    title: "Streak Master",
    description: "Mantenha uma sequência de 7 dias",
    icon: "🔥",
    isUnlocked: false,
    requirement: 7,
    currentProgress: 0
  },
  {
    id: 4,
    title: "Poliglota",
    description: "Acumule 1000 XP",
    icon: "🏆",
    isUnlocked: false,
    requirement: 1000,
    currentProgress: 0
  },
  {
    id: 5,
    title: "Perfeccionista",
    description: "Complete uma lição com 3 estrelas",
    icon: "⭐",
    isUnlocked: false,
    requirement: 1,
    currentProgress: 0
  }
];
