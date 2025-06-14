
export interface Lesson {
  id: number;
  title: string;
  description: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  category: string;
  exercises: Exercise[];
  isCompleted: boolean;
  isUnlocked: boolean;
  stars: number;
  xp: number;
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
