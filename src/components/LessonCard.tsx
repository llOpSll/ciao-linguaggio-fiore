
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
      case 'A1': return 'bg-sage-green/10 text-sage-green border-sage-green/30';
      case 'A2': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'B1': return 'bg-muted-purple/10 text-muted-purple border-muted-purple/30';
      case 'B2': return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'C1': return 'bg-red-100 text-red-700 border-red-300';
      case 'C2': return 'bg-gradient-to-r from-charcoal to-muted-purple text-white border-transparent';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
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
        relative p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 h-full flex flex-col
        ${lesson.isUnlocked 
          ? 'bg-white border-sage-green/30 hover:border-muted-purple hover:shadow-2xl shadow-lg' 
          : 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'
        }
        ${lesson.isCompleted ? 'ring-2 ring-muted-purple/50 bg-gradient-to-br from-white to-sage-green/5' : ''}
        animate-fade-in hover:scale-105
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={lesson.isUnlocked ? onClick : undefined}
    >
      {/* Status Icons */}
      <div className="absolute top-4 right-4 flex space-x-2 z-10">
        {!lesson.isUnlocked && (
          <div className="p-2 bg-gray-100 rounded-full shadow-md">
            <Lock className="w-4 h-4 text-gray-400" />
          </div>
        )}

        {lesson.isCompleted && (
          <div className="p-2 bg-muted-purple/20 rounded-full animate-bounce shadow-md">
            <Trophy className="w-4 h-4 text-muted-purple" />
          </div>
        )}
      </div>

      {/* Level Badge */}
      <div className="mb-4">
        <span className={`inline-flex items-center px-3 py-1.5 text-sm font-bold rounded-full border transition-all duration-200 ${getLevelColor(lesson.level)}`}>
          <Target className="w-3.5 h-3.5 mr-1.5" />
          {lesson.level}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-charcoal hover:text-muted-purple transition-colors duration-200 line-clamp-2 leading-tight">
          {lesson.title}
        </h3>
        
        <p className="text-charcoal/70 text-sm leading-relaxed flex-1 line-clamp-3">
          {lesson.description}
        </p>

        {/* Stats Row */}
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-sage-green/20">
          <div className="flex items-center space-x-1">
            {renderStars()}
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 text-sm text-charcoal/60">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-medium">{lesson.exercises.length}</span>
            </div>
            
            <div className="bg-gradient-to-r from-muted-purple to-sage-green text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
              +{lesson.xp}
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="pt-3">
          <span className="text-xs text-charcoal/50 uppercase tracking-wide font-bold bg-sage-green/10 px-2 py-1 rounded-lg">
            {lesson.category}
          </span>
        </div>
      </div>

      {/* Hover Effects */}
      {lesson.isUnlocked && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted-purple/0 to-sage-green/0 hover:from-muted-purple/5 hover:to-sage-green/5 rounded-3xl transition-all duration-300 pointer-events-none" />
      )}
    </div>
  );
};

export default LessonCard;
