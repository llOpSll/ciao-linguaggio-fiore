
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

      try {
        const savedProgress = localStorage.getItem(userProgressKey);
        const savedLessons = localStorage.getItem(userLessonsKey);
        const savedAchievements = localStorage.getItem(userAchievementsKey);

        if (savedProgress) {
          const parsedProgress = JSON.parse(savedProgress);
          setUserProgress(parsedProgress);
        } else {
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
          const parsedLessons = JSON.parse(savedLessons);
          const updatedLessons = initialLessons.map(initialLesson => {
            const savedLesson = parsedLessons.find((l: Lesson) => l.id === initialLesson.id);
            return savedLesson ? { ...initialLesson, ...savedLesson } : initialLesson;
          });
          setLessons(updatedLessons);
        } else {
          setLessons(initialLessons);
        }

        if (savedAchievements) {
          const parsedAchievements = JSON.parse(savedAchievements);
          setAchievements(parsedAchievements);
        } else {
          setAchievements(initialAchievements);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        setUserProgress({
          totalXP: 0,
          currentStreak: 1,
          longestStreak: 1,
          lessonsCompleted: 0,
          level: 1,
          hearts: 5,
          gems: 0
        });
        setLessons(initialLessons);
        setAchievements(initialAchievements);
      }
    }
  }, [user]);

  // Save user-specific data with error handling
  useEffect(() => {
    if (user) {
      try {
        const userProgressKey = `italianAppProgress_${user.id}`;
        localStorage.setItem(userProgressKey, JSON.stringify(userProgress));
      } catch (error) {
        console.error('Error saving user progress:', error);
      }
    }
  }, [userProgress, user]);

  useEffect(() => {
    if (user) {
      try {
        const userLessonsKey = `italianAppLessons_${user.id}`;
        localStorage.setItem(userLessonsKey, JSON.stringify(lessons));
      } catch (error) {
        console.error('Error saving user lessons:', error);
      }
    }
  }, [lessons, user]);

  useEffect(() => {
    if (user) {
      try {
        const userAchievementsKey = `italianAppAchievements_${user.id}`;
        localStorage.setItem(userAchievementsKey, JSON.stringify(achievements));
      } catch (error) {
        console.error('Error saving user achievements:', error);
      }
    }
  }, [achievements, user]);

  const updateProgress = (xp: number, stars: number) => {
    setUserProgress(prev => {
      const newTotalXP = prev.totalXP + xp;
      const newLevel = Math.floor(newTotalXP / 100) + 1;
      const newGems = prev.gems + (stars * 5);
      
      return {
        ...prev,
        totalXP: newTotalXP,
        level: newLevel,
        gems: newGems
      };
    });
  };

  const completeLesson = (lessonId: number, stars: number) => {
    console.log(`Completing lesson ${lessonId} with ${stars} stars`);
    
    setLessons(prev => {
      const updatedLessons = prev.map(lesson => {
        if (lesson.id === lessonId) {
          const wasCompleted = lesson.isCompleted;
          console.log(`Lesson ${lessonId}: was completed: ${wasCompleted}, setting stars to: ${stars}`);
          return { 
            ...lesson, 
            isCompleted: true, 
            stars: stars // Sempre atualiza as estrelas
          };
        }
        // Unlock next lesson
        if (lesson.id === lessonId + 1) {
          return { ...lesson, isUnlocked: true };
        }
        return lesson;
      });
      
      console.log('Updated lessons:', updatedLessons.find(l => l.id === lessonId));
      return updatedLessons;
    });

    // Update progress
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson) {
      const wasCompleted = lesson.isCompleted;
      
      // Only increment lesson count if it wasn't completed before
      if (!wasCompleted) {
        setUserProgress(prev => ({
          ...prev,
          lessonsCompleted: prev.lessonsCompleted + 1
        }));
      }

      // Always update XP and gems
      updateProgress(lesson.xp, stars);
    }
    
    // Check achievements after state updates
    setTimeout(() => checkAchievements(), 500);
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
        default:
          progress = achievement.currentProgress;
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
