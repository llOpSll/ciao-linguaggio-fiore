
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress, Lesson, Achievement } from '../types/game';
import { lessons as initialLessons } from '../data/lessons';
import { achievements as initialAchievements } from '../data/achievements';

interface GameContextType {
  userProgress: UserProgress;
  lessons: Lesson[];
  achievements: Achievement[];
  updateProgress: (xp: number, stars: number) => void;
  completeLesson: (lessonId: number, stars: number) => void;
  useHeart: () => boolean;
  checkAchievements: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    totalXP: 0,
    currentStreak: 1,
    longestStreak: 1,
    lessonsCompleted: 0,
    level: 1,
    hearts: 5,
    gems: 0
  });

  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);

  // Load from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('italianAppProgress');
    const savedLessons = localStorage.getItem('italianAppLessons');
    const savedAchievements = localStorage.getItem('italianAppAchievements');

    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
    if (savedLessons) {
      setLessons(JSON.parse(savedLessons));
    }
    if (savedAchievements) {
      setAchievements(JSON.parse(savedAchievements));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('italianAppProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    localStorage.setItem('italianAppLessons', JSON.stringify(lessons));
  }, [lessons]);

  useEffect(() => {
    localStorage.setItem('italianAppAchievements', JSON.stringify(achievements));
  }, [achievements]);

  const updateProgress = (xp: number, stars: number) => {
    setUserProgress(prev => ({
      ...prev,
      totalXP: prev.totalXP + xp,
      level: Math.floor((prev.totalXP + xp) / 100) + 1,
      gems: prev.gems + (stars * 5)
    }));
  };

  const completeLesson = (lessonId: number, stars: number) => {
    setLessons(prev => prev.map(lesson => {
      if (lesson.id === lessonId) {
        return { ...lesson, isCompleted: true, stars: Math.max(lesson.stars, stars) };
      }
      // Unlock next lesson
      if (lesson.id === lessonId + 1) {
        return { ...lesson, isUnlocked: true };
      }
      return lesson;
    }));

    setUserProgress(prev => ({
      ...prev,
      lessonsCompleted: prev.lessonsCompleted + 1
    }));

    updateProgress(lessons.find(l => l.id === lessonId)?.xp || 0, stars);
    checkAchievements();
  };

  const useHeart = (): boolean => {
    if (userProgress.hearts > 0) {
      setUserProgress(prev => ({ ...prev, hearts: prev.hearts - 1 }));
      return true;
    }
    return false;
  };

  const checkAchievements = () => {
    setAchievements(prev => prev.map(achievement => {
      let progress = 0;
      
      switch (achievement.id) {
        case 1: // First lesson
          progress = userProgress.lessonsCompleted >= 1 ? 1 : 0;
          break;
        case 2: // 5 lessons
          progress = userProgress.lessonsCompleted;
          break;
        case 3: // 7 day streak
          progress = userProgress.currentStreak;
          break;
        case 4: // 1000 XP
          progress = userProgress.totalXP;
          break;
        case 5: // Perfect lesson
          progress = lessons.some(l => l.stars === 3) ? 1 : 0;
          break;
      }

      return {
        ...achievement,
        currentProgress: progress,
        isUnlocked: progress >= achievement.requirement
      };
    }));
  };

  return (
    <GameContext.Provider value={{
      userProgress,
      lessons,
      achievements,
      updateProgress,
      completeLesson,
      useHeart,
      checkAchievements
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
};
