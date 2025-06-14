
import React from 'react';
import { Lesson } from '../types/game';
import { Lock, Star, Trophy } from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onClick }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'A1': return 'bg-green-100 text-green-800 border-green-200';
      case 'A2': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'B1': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'B2': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'C1': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderStars = () => {
    return Array.from({ length: 3 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < lesson.stars 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div
      className={`
        relative p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer
        ${lesson.isUnlocked 
          ? 'bg-white border-green-200 hover:border-green-300 hover:shadow-lg hover:-translate-y-1' 
          : 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'
        }
        ${lesson.isCompleted ? 'ring-2 ring-green-400 ring-opacity-50' : ''}
      `}
      onClick={lesson.isUnlocked ? onClick : undefined}
    >
      {!lesson.isUnlocked && (
        <div className="absolute top-4 right-4">
          <Lock className="w-5 h-5 text-gray-400" />
        </div>
      )}

      {lesson.isCompleted && (
        <div className="absolute top-4 right-4">
          <Trophy className="w-5 h-5 text-green-500" />
        </div>
      )}

      <div className="mb-3">
        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full border ${getLevelColor(lesson.level)}`}>
          {lesson.level}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-2">{lesson.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          {renderStars()}
        </div>
        <div className="text-sm text-gray-500">
          +{lesson.xp} XP
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 uppercase tracking-wide">
        {lesson.category}
      </div>
    </div>
  );
};

export default LessonCard;
