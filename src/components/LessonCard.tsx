
import React from 'react';
import { Lesson } from '../types/game';
import { Lock, Star, Trophy, Clock, Target } from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
  index: number;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onClick, index }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'A1': return 'bg-green-100 text-green-800 border-green-200';
      case 'A2': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'B1': return 'bg-medium-purple bg-opacity-10 text-medium-purple border-medium-purple';
      case 'B2': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'C1': return 'bg-red-100 text-red-800 border-red-200';
      case 'C2': return 'bg-gradient-to-r from-dark-purple to-medium-purple text-white border-transparent';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderStars = () => {
    return Array.from({ length: 3 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 transition-all duration-300 ${
          i < lesson.stars 
            ? 'text-yellow-400 fill-yellow-400 animate-pulse' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div
      className={`
        relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover-lift h-full flex flex-col
        ${lesson.isUnlocked 
          ? 'bg-white border-light-purple hover:border-medium-purple hover:shadow-xl shadow-lg' 
          : 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'
        }
        ${lesson.isCompleted ? 'ring-2 ring-medium-purple ring-opacity-50 bg-gradient-to-br from-white to-light-purple to-opacity-5' : ''}
        animate-fade-in
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={lesson.isUnlocked ? onClick : undefined}
    >
      {/* Status Icons */}
      <div className="absolute top-4 right-4 flex space-x-2 z-10">
        {!lesson.isUnlocked && (
          <div className="p-1.5 bg-gray-100 rounded-full">
            <Lock className="w-3.5 h-3.5 text-gray-400" />
          </div>
        )}

        {lesson.isCompleted && (
          <div className="p-1.5 bg-medium-purple bg-opacity-20 rounded-full animate-bounce">
            <Trophy className="w-3.5 h-3.5 text-medium-purple" />
          </div>
        )}
      </div>

      {/* Level Badge */}
      <div className="mb-3">
        <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full border transition-all duration-200 ${getLevelColor(lesson.level)}`}>
          <Target className="w-3 h-3 mr-1" />
          {lesson.level}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col space-y-3">
        <h3 className="text-base md:text-lg font-bold text-gray-800 hover:text-medium-purple transition-colors duration-200 line-clamp-2">
          {lesson.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
          {lesson.description}
        </p>

        {/* Stats Row */}
        <div className="flex items-center justify-between pt-2 mt-auto">
          <div className="flex items-center space-x-1">
            {renderStars()}
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{lesson.exercises.length}</span>
            </div>
            
            <div className="bg-gradient-to-r from-medium-purple to-dark-purple text-white px-2 py-0.5 rounded-full text-xs font-semibold">
              +{lesson.xp}
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            {lesson.category}
          </span>
        </div>
      </div>

      {/* Hover Effects */}
      {lesson.isUnlocked && (
        <div className="absolute inset-0 bg-gradient-to-r from-medium-purple/0 to-dark-purple/0 hover:from-medium-purple/5 hover:to-dark-purple/5 rounded-2xl transition-all duration-300 pointer-events-none" />
      )}
    </div>
  );
};

export default LessonCard;
