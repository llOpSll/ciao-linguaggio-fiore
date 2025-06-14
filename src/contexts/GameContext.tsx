
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress, Lesson, Achievement } from '../types/game';
import { useAuth } from './AuthContext';
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
  const { user } = useAuth();
  
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

  // Load user-specific data when user changes
  useEffect(() => {
    if (user) {
      const userProgressKey = `italianAppProgress_${user.id}`;
      const userLessonsKey = `italianAppLessons_${user.id}`;
      const userAchievementsKey = `italianAppAchievements_${user.id}`;

      const savedProgress = localStorage.getItem(userProgressKey);
      const savedLessons = localStorage.getItem(userLessonsKey);
      const savedAchievements = localStorage.getItem(userAchievementsKey);

      if (savedProgress) {
        setUserProgress(JSON.parse(savedProgress));
      } else {
        // Reset to default for new user
        setUserProgress({
          totalXP: 0,
          currentStreak: 1,
          longestStreak: 1,
          lessonsCompleted: 0,
          level: 1,
          hearts: 5,
          gems: 0
        });
      }

      if (savedLessons) {
        setLessons(JSON.parse(savedLessons));
      } else {
        // Reset to initial lessons for new user
        setLessons(initialLessons);
      }

      if (savedAchievements) {
        setAchievements(JSON.parse(savedAchievements));
      } else {
        // Reset to initial achievements for new user
        setAchievements(initialAchievements);
      }
    }
  }, [user]);

  // Save user-specific data
  useEffect(() => {
    if (user) {
      const userProgressKey = `italianAppProgress_${user.id}`;
      localStorage.setItem(userProgressKey, JSON.stringify(userProgress));
    }
  }, [userProgress, user]);

  useEffect(() => {
    if (user) {
      const userLessonsKey = `italianAppLessons_${user.id}`;
      localStorage.setItem(userLessonsKey, JSON.stringify(lessons));
    }
  }, [lessons, user]);

  useEffect(() => {
    if (user) {
      const userAchievementsKey = `italianAppAchievements_${user.id}`;
      localStorage.setItem(userAchievementsKey, JSON.stringify(achievements));
    }
  }, [achievements, user]);

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
        // Sempre atualiza as estrelas com o valor recebido, não o máximo
        return { 
          ...lesson, 
          isCompleted: true, 
          stars: stars 
        };
      }
      // Unlock next lesson
      if (lesson.id === lessonId + 1) {
        return { ...lesson, isUnlocked: true };
      }
      return lesson;
    }));

    // Only increment if lesson wasn't completed before
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson && !lesson.isCompleted) {
      setUserProgress(prev => ({
        ...prev,
        lessonsCompleted: prev.lessonsCompleted + 1
      }));
    }

    updateProgress(lessons.find(l => l.id === lessonId)?.xp || 0, stars);
    setTimeout(() => checkAchievements(), 100);
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
