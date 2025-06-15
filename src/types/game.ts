
export interface Lesson {
  id: number;
  title: string;
  description: string;
  level: 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6' | 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'D1' | 'D2' | 'D3' | 'D4' | 'D5' | 'D6' | 'E1' | 'E2' | 'E3' | 'E4' | 'E5' | 'E6';
  category: string;
  exercises: Exercise[];
  isCompleted: boolean;
  isUnlocked: boolean;
  stars: number;
  xp: number;
  videoUrl?: string;
}

export interface Exercise {
  id: number;
  type: 'translation' | 'multiple-choice' | 'fill-blank' | 'audio' | 'match';
  question: string;
  options?: string[];
  correctAnswer: string;
  italian?: string;
  portuguese?: string;
  audio?: string;
  hint?: string;
  context?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  isUnlocked: boolean;
  requirement: number;
  currentProgress: number;
}

export interface UserProgress {
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  lessonsCompleted: number;
  level: number;
  hearts: number;
  gems: number;
}
