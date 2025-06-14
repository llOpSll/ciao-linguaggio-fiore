
import React, { useState } from 'react';
import { Exercise } from '../types/game';
import { Check, X, HelpCircle } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
  onAnswer: (isCorrect: boolean) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = () => {
    const answer = exercise.type === 'multiple-choice' ? selectedAnswer : userAnswer;
    const isCorrect = answer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
    
    setShowResult(true);
    setTimeout(() => {
      onAnswer(isCorrect);
      setShowResult(false);
      setSelectedAnswer('');
      setUserAnswer('');
      setShowHint(false);
    }, 1500);
  };

  const renderMultipleChoice = () => (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{exercise.question}</h3>
      {exercise.options?.map((option, index) => (
        <button
          key={index}
          className={`
            w-full p-4 text-left rounded-xl border-2 transition-all duration-200
            ${selectedAnswer === option
              ? showResult
                ? option === exercise.correctAnswer
                  ? 'bg-green-100 border-green-400 text-green-800'
                  : 'bg-red-100 border-red-400 text-red-800'
                : 'bg-blue-100 border-blue-400 text-blue-800'
              : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }
          `}
          onClick={() => !showResult && setSelectedAnswer(option)}
          disabled={showResult}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{option}</span>
            {showResult && option === exercise.correctAnswer && (
              <Check className="w-5 h-5 text-green-600" />
            )}
            {showResult && selectedAnswer === option && option !== exercise.correctAnswer && (
              <X className="w-5 h-5 text-red-600" />
            )}
          </div>
        </button>
      ))}
    </div>
  );

  const renderTranslation = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{exercise.question}</h3>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className={`
          w-full p-4 text-lg rounded-xl border-2 transition-all duration-200
          ${showResult
            ? userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim()
              ? 'bg-green-100 border-green-400 text-green-800'
              : 'bg-red-100 border-red-400 text-red-800'
            : 'border-gray-300 focus:border-blue-400 focus:outline-none'
          }
        `}
        placeholder="Digite sua resposta..."
        disabled={showResult}
      />
      {showResult && userAnswer.toLowerCase().trim() !== exercise.correctAnswer.toLowerCase().trim() && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            <strong>Resposta correta:</strong> {exercise.correctAnswer}
          </p>
        </div>
      )}
    </div>
  );

  const renderFillBlank = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{exercise.question}</h3>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className={`
          w-full p-4 text-lg rounded-xl border-2 transition-all duration-200
          ${showResult
            ? userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim()
              ? 'bg-green-100 border-green-400 text-green-800'
              : 'bg-red-100 border-red-400 text-red-800'
            : 'border-gray-300 focus:border-blue-400 focus:outline-none'
          }
        `}
        placeholder="Complete a frase..."
        disabled={showResult}
      />
    </div>
  );

  const canSubmit = () => {
    if (exercise.type === 'multiple-choice') return selectedAnswer !== '';
    return userAnswer.trim() !== '';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
      {exercise.type === 'multiple-choice' && renderMultipleChoice()}
      {exercise.type === 'translation' && renderTranslation()}
      {exercise.type === 'fill-blank' && renderFillBlank()}

      <div className="flex items-center justify-between mt-8">
        {exercise.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
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
            px-8 py-3 rounded-xl font-semibold transition-all duration-200
            ${canSubmit() && !showResult
              ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {showResult ? 'Processando...' : 'Verificar'}
        </button>
      </div>

      {showHint && exercise.hint && (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800">💡 {exercise.hint}</p>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;
