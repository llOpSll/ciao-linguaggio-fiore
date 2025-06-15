
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
      case 'A': return 'bg-powder-blue text-dark-navy border-powder-blue-dark';
      case 'B': return 'bg-steel-blue text-white border-steel-blue-dark';
      case 'C': return 'bg-dark-navy text-white border-dark-navy-dark';
      case 'D': return 'bg-purple-100 text-purple-800 border-purple-300';
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
          ? 'border-powder-blue hover:border-steel-blue hover:shadow-xl' 
          : 'border-gray-200 cursor-not-allowed opacity-60 bg-ivory'
        }
        ${lesson.isCompleted ? 'ring-2 ring-steel-blue shadow-steel-blue/20' : ''}
        animate-fade-in hover:scale-102
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={lesson.isUnlocked ? onClick : undefined}
    >
      {/* Header com Status */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          {/* Badge do Nível */}
          <span className={`inline-flex items-center px-3 py-1.5 text-sm font-bold rounded-full border-2 ${getLevelColor(lesson.level)}`}>
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
              <div className="p-2 bg-steel-blue/20 rounded-full">
                <Trophy className="w-4 h-4 text-steel-blue" />
              </div>
            )}

            {lesson.isUnlocked && !lesson.isCompleted && (
              <div className="p-2 bg-powder-blue/30 rounded-full">
                <Play className="w-4 h-4 text-steel-blue" />
              </div>
            )}
          </div>
        </div>

        {/* Título e Descrição */}
        <h3 className="text-lg font-bold text-dark-navy mb-3 line-clamp-2 leading-tight">
          {lesson.title}
        </h3>
        
        <p className="text-steel-blue text-sm leading-relaxed line-clamp-3 mb-4">
          {lesson.description}
        </p>

        {/* Categoria */}
        <div className="mb-4">
          <span className="text-xs text-steel-blue uppercase tracking-wide font-semibold bg-powder-blue/20 px-2 py-1 rounded-lg">
            {lesson.category}
          </span>
        </div>
      </div>

      {/* Footer com Stats */}
      <div className="mt-auto p-6 pt-0">
        <div className="flex items-center justify-between pt-4 border-t border-powder-blue/30">
          {/* Estrelas */}
          <div className="flex items-center space-x-1">
            {renderStars()}
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-sm text-steel-blue">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-medium">{lesson.exercises.length}</span>
            </div>
            
            <div className="bg-gradient-to-r from-steel-blue to-dark-navy text-white px-3 py-1 rounded-full text-sm font-bold">
              +{lesson.xp}
            </div>
          </div>
        </div>

        {/* Vídeo Disponível */}
        {lesson.videoUrl && (
          <div className="mt-3 flex items-center text-xs text-steel-blue bg-powder-blue/20 px-2 py-1 rounded-lg">
            <Play className="w-3 h-3 mr-1" />
            Vídeo disponível
          </div>
        )}
      </div>

      {/* Hover Effect */}
      {lesson.isUnlocked && (
        <div className="absolute inset-0 bg-gradient-to-r from-steel-blue/5 to-powder-blue/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
};

export default LessonCard;
