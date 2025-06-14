
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
      case 'A1': return 'bg-italian-green bg-opacity-10 text-italian-green border-italian-green';
      case 'A2': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'B1': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'B2': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'C1': return 'bg-italian-red bg-opacity-10 text-italian-red border-italian-red';
      case 'C2': return 'bg-gradient-to-r from-italian-green to-italian-red text-white border-transparent';
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
        relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover-lift
        ${lesson.isUnlocked 
          ? 'bg-white border-italian-green hover:border-italian-green-dark hover:shadow-2xl shadow-lg' 
          : 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'
        }
        ${lesson.isCompleted ? 'ring-2 ring-italian-green ring-opacity-50 bg-gradient-to-br from-white to-italian-green to-opacity-5' : ''}
        animate-fade-in
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={lesson.isUnlocked ? onClick : undefined}
    >
      {/* Status Icons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        {!lesson.isUnlocked && (
          <div className="p-2 bg-gray-100 rounded-full">
            <Lock className="w-4 h-4 text-gray-400" />
          </div>
        )}

        {lesson.isCompleted && (
          <div className="p-2 bg-italian-green bg-opacity-20 rounded-full animate-bounce">
            <Trophy className="w-4 h-4 text-italian-green" />
          </div>
        )}
      </div>

      {/* Level Badge */}
      <div className="mb-4">
        <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-200 ${getLevelColor(lesson.level)}`}>
          <Target className="w-3 h-3 mr-1" />
          {lesson.level}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-800 hover:text-italian-green transition-colors duration-200">
          {lesson.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {lesson.description}
        </p>

        {/* Stats Row */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-1">
            {renderStars()}
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{lesson.exercises.length} ex.</span>
            </div>
            
            <div className="bg-gradient-to-r from-italian-green to-italian-red text-white px-2 py-1 rounded-full text-xs font-semibold">
              +{lesson.xp} XP
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
        <div className="absolute inset-0 bg-gradient-to-r from-italian-green/0 to-italian-red/0 hover:from-italian-green/5 hover:to-italian-red/5 rounded-2xl transition-all duration-300 pointer-events-none" />
      )}
    </div>
  );
};

export default LessonCard;
