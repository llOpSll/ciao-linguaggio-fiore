
import React, { useState } from 'react';
import { Exercise } from '../types/game';
import { Check, X, HelpCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import WordTooltip from './WordTooltip';
import { wordTranslations } from '../data/dictionary';

interface ExerciseCardProps {
  exercise: Exercise;
  onAnswer: (isCorrect: boolean) => void;
  currentIndex: number;
  totalExercises: number;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ 
  exercise, 
  onAnswer, 
  currentIndex, 
  totalExercises 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const addTooltipsToText = (text: string) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, '');
      const translation = wordTranslations[cleanWord];
      
      if (translation) {
        return (
          <React.Fragment key={index}>
            <WordTooltip 
              word={cleanWord} 
              translation={translation.translation}
              pronunciation={translation.pronunciation}
              type={translation.type}
            >
              {word}
            </WordTooltip>
            {index < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        );
      }
      return <span key={index}>{word}{index < words.length - 1 ? ' ' : ''}</span>;
    });
  };

  const handleSubmit = () => {
    const answer = exercise.type === 'multiple-choice' ? selectedAnswer : userAnswer;
    const correct = answer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
    
    setIsCorrect(correct);
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(correct);
      setShowResult(false);
      setSelectedAnswer('');
      setUserAnswer('');
      setShowHint(false);
    }, 2500);
  };

  const renderProgressBar = () => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-medium-purple">
          Pergunta {currentIndex + 1} de {totalExercises}
        </span>
        <span className="text-xs text-medium-purple">
          {Math.round(((currentIndex + 1) / totalExercises) * 100)}%
        </span>
      </div>
      <div className="w-full bg-light-purple bg-opacity-30 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-medium-purple to-dark-purple h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / totalExercises) * 100}%` }}
        />
      </div>
    </div>
  );

  const renderSuccessMessage = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-success-bounce">
        <div className="w-16 h-16 bg-medium-purple rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-success">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-dark-purple mb-2">Perfeito! 🎉</h3>
        <p className="text-medium-purple">Você acertou a resposta!</p>
      </div>
    </div>
  );

  const renderErrorMessage = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-error-shake">
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Ops! 😔</h3>
        <p className="text-gray-600 mb-4">Não foi dessa vez, mas continue tentando!</p>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-sm text-red-600 mb-1">
            <strong>Resposta correta:</strong>
          </p>
          <p className="text-lg font-bold text-red-800">{exercise.correctAnswer}</p>
        </div>
      </div>
    </div>
  );

  const renderMultipleChoice = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-dark-purple mb-6">
        {addTooltipsToText(exercise.question)}
      </h3>
      {exercise.options?.map((option, index) => (
        <button
          key={index}
          className={`
            w-full p-4 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02]
            ${selectedAnswer === option
              ? showResult
                ? option === exercise.correctAnswer
                  ? 'bg-medium-purple bg-opacity-10 border-medium-purple text-medium-purple animate-scale-in'
                  : 'bg-red-500 bg-opacity-10 border-red-500 text-red-600 animate-scale-in'
                : 'bg-medium-purple bg-opacity-20 border-medium-purple text-dark-purple'
              : 'bg-cream border-light-purple hover:border-medium-purple hover:bg-light-purple hover:bg-opacity-20'
            }
          `}
          onClick={() => !showResult && setSelectedAnswer(option)}
          disabled={showResult}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{addTooltipsToText(option)}</span>
            {showResult && option === exercise.correctAnswer && (
              <Check className="w-5 h-5 text-medium-purple animate-bounce" />
            )}
            {showResult && selectedAnswer === option && option !== exercise.correctAnswer && (
              <X className="w-5 h-5 text-red-600 animate-bounce" />
            )}
          </div>
        </button>
      ))}
      
      {showResult && selectedAnswer !== exercise.correctAnswer && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="font-medium text-red-800">Resposta correta:</p>
          </div>
          <p className="text-red-700 font-semibold">{exercise.correctAnswer}</p>
        </div>
      )}
    </div>
  );

  const renderTextInput = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-dark-purple mb-6">
        {addTooltipsToText(exercise.question)}
      </h3>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className={`
          w-full p-4 text-lg rounded-xl border-2 transition-all duration-300
          ${showResult
            ? userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim()
              ? 'bg-medium-purple bg-opacity-10 border-medium-purple text-medium-purple'
              : 'bg-red-500 bg-opacity-10 border-red-500 text-red-600'
            : 'border-light-purple focus:border-medium-purple focus:outline-none bg-cream'
          }
        `}
        placeholder="Digite sua resposta..."
        disabled={showResult}
      />
      
      {showResult && userAnswer.toLowerCase().trim() !== exercise.correctAnswer.toLowerCase().trim() && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="font-medium text-red-800">Resposta correta:</p>
          </div>
          <p className="text-red-700 font-semibold">{exercise.correctAnswer}</p>
        </div>
      )}
    </div>
  );

  const canSubmit = () => {
    if (exercise.type === 'multiple-choice') return selectedAnswer !== '';
    return userAnswer.trim() !== '';
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-light-purple hover:shadow-2xl transition-all duration-300">
        {renderProgressBar()}
        
        {exercise.type === 'multiple-choice' && renderMultipleChoice()}
        {(exercise.type === 'translation' || exercise.type === 'fill-blank') && renderTextInput()}

        <div className="flex items-center justify-between mt-8">
          {exercise.hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center space-x-2 text-medium-purple hover:text-dark-purple transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-light-purple hover:bg-opacity-20"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Dica</span>
            </button>
          )}

          {!exercise.hint && <div></div>}

          <button
            onClick={handleSubmit}
            disabled={!canSubmit() || showResult}
            className={`
              px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform
              ${canSubmit() && !showResult
                ? 'bg-gradient-to-r from-medium-purple to-dark-purple hover:from-dark-purple hover:to-medium-purple text-white shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            {showResult ? 'Processando...' : 'Verificar'}
          </button>
        </div>

        {showHint && exercise.hint && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl animate-fade-in">
            <p className="text-yellow-800">💡 {exercise.hint}</p>
          </div>
        )}
      </div>

      {showResult && isCorrect && renderSuccessMessage()}
      {showResult && !isCorrect && renderErrorMessage()}
    </>
  );
};

export default ExerciseCard;
