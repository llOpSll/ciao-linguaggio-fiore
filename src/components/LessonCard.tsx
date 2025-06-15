
import React from 'react';
import { Lesson } from '../types/game';
import { Lock, Star, Trophy, Clock, Target, Play } from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
  index: number;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onClick, index }) => {
  const getLevelColor = (level: string) => {
    const levelPrefix = level.charAt(0);
    switch (levelPrefix) {
      case 'A': return 'bg-green-100 text-green-800 border-green-300';
      case 'B': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'C': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'D': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'E': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const renderStars = () => {
    return Array.from({ length: 3 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 transition-all duration-300 ${
          i < lesson.stars 
            ? 'text-yellow-500 fill-yellow-500' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div
      className={`
        relative bg-white rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-full flex flex-col shadow-lg
        ${lesson.isUnlocked 
          ? 'border-gray-200 hover:border-blue-400 hover:shadow-xl' 
          : 'border-gray-100 cursor-not-allowed opacity-60 bg-gray-50'
        }
        ${lesson.isCompleted ? 'ring-2 ring-green-200' : ''}
        animate-fade-in hover:scale-102
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={lesson.isUnlocked ? onClick : undefined}
    >
      {/* Header com Status */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          {/* Badge do Nível */}
          <span className={`inline-flex items-center px-3 py-1.5 text-sm font-bold rounded-full border ${getLevelColor(lesson.level)}`}>
            <Target className="w-3.5 h-3.5 mr-1.5" />
            {lesson.level}
          </span>

          {/* Ícones de Status */}
          <div className="flex space-x-2">
            {!lesson.isUnlocked && (
              <div className="p-2 bg-gray-100 rounded-full">
                <Lock className="w-4 h-4 text-gray-500" />
              </div>
            )}

            {lesson.isCompleted && (
              <div className="p-2 bg-green-100 rounded-full">
                <Trophy className="w-4 h-4 text-green-600" />
              </div>
            )}

            {lesson.isUnlocked && !lesson.isCompleted && (
              <div className="p-2 bg-blue-100 rounded-full">
                <Play className="w-4 h-4 text-blue-600" />
              </div>
            )}
          </div>
        </div>

        {/* Título e Descrição */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
          {lesson.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {lesson.description}
        </p>

        {/* Categoria */}
        <div className="mb-4">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold bg-gray-100 px-2 py-1 rounded-lg">
            {lesson.category}
          </span>
        </div>
      </div>

      {/* Footer com Stats */}
      <div className="mt-auto p-6 pt-0">
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Estrelas */}
          <div className="flex items-center space-x-1">
            {renderStars()}
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-sm text-gray-500">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-medium">{lesson.exercises.length}</span>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              +{lesson.xp}
            </div>
          </div>
        </div>

        {/* Vídeo Disponível */}
        {lesson.videoUrl && (
          <div className="mt-3 flex items-center text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
            <Play className="w-3 h-3 mr-1" />
            Vídeo disponível
          </div>
        )}
      </div>

      {/* Hover Effect */}
      {lesson.isUnlocked && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
};

export default LessonCard;
