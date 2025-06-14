
import React, { useState } from 'react';
import { Exercise } from '../types/game';
import { Check, X, HelpCircle } from 'lucide-react';
import WordTooltip from './WordTooltip';

interface ExerciseCardProps {
  exercise: Exercise;
  onAnswer: (isCorrect: boolean) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);

  // Dicionário simples para tooltips
  const wordTranslations: { [key: string]: { translation: string; pronunciation?: string } } = {
    'ciao': { translation: 'oi, tchau', pronunciation: '/ˈtʃao/' },
    'buongiorno': { translation: 'bom dia', pronunciation: '/buonˈdʒorno/' },
    'casa': { translation: 'casa', pronunciation: '/ˈkasa/' },
    'mangiare': { translation: 'comer', pronunciation: '/manˈdʒare/' },
    'bello': { translation: 'bonito', pronunciation: '/ˈbello/' },
    'famiglia': { translation: 'família', pronunciation: '/faˈmiʎʎa/' },
    'madre': { translation: 'mãe', pronunciation: '/ˈmadre/' },
    'padre': { translation: 'pai', pronunciation: '/ˈpadre/' },
    'fratello': { translation: 'irmão', pronunciation: '/fraˈtello/' },
    'sorella': { translation: 'irmã', pronunciation: '/soˈrella/' },
    'rosso': { translation: 'vermelho', pronunciation: '/ˈrosso/' },
    'blu': { translation: 'azul', pronunciation: '/blu/' },
    'verde': { translation: 'verde', pronunciation: '/ˈverde/' },
    'pizza': { translation: 'pizza', pronunciation: '/ˈpittsa/' },
    'pasta': { translation: 'massa', pronunciation: '/ˈpasta/' }
  };

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
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        {addTooltipsToText(exercise.question)}
      </h3>
      {exercise.options?.map((option, index) => (
        <button
          key={index}
          className={`
            w-full p-4 text-left rounded-xl border-2 transition-all duration-300 hover-lift
            ${selectedAnswer === option
              ? showResult
                ? option === exercise.correctAnswer
                  ? 'bg-italian-green bg-opacity-10 border-italian-green text-italian-green animate-scale-in'
                  : 'bg-italian-red bg-opacity-10 border-italian-red text-italian-red animate-scale-in'
                : 'bg-italian-green bg-opacity-20 border-italian-green text-italian-green'
              : 'bg-white border-gray-200 hover:border-italian-green hover:bg-italian-green hover:bg-opacity-5'
            }
          `}
          onClick={() => !showResult && setSelectedAnswer(option)}
          disabled={showResult}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{addTooltipsToText(option)}</span>
            {showResult && option === exercise.correctAnswer && (
              <Check className="w-5 h-5 text-italian-green animate-bounce-in" />
            )}
            {showResult && selectedAnswer === option && option !== exercise.correctAnswer && (
              <X className="w-5 h-5 text-italian-red animate-bounce-in" />
            )}
          </div>
        </button>
      ))}
    </div>
  );

  const renderTranslation = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        {addTooltipsToText(exercise.question)}
      </h3>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className={`
          w-full p-4 text-lg rounded-xl border-2 transition-all duration-300 focus-ring
          ${showResult
            ? userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim()
              ? 'bg-italian-green bg-opacity-10 border-italian-green text-italian-green'
              : 'bg-italian-red bg-opacity-10 border-italian-red text-italian-red'
            : 'border-gray-300 focus:border-italian-green focus:outline-none'
          }
        `}
        placeholder="Digite sua resposta..."
        disabled={showResult}
      />
      {showResult && userAnswer.toLowerCase().trim() !== exercise.correctAnswer.toLowerCase().trim() && (
        <div className="p-4 bg-italian-green bg-opacity-10 border border-italian-green rounded-xl animate-fade-in">
          <p className="text-italian-green">
            <strong>Resposta correta:</strong> {exercise.correctAnswer}
          </p>
        </div>
      )}
    </div>
  );

  const renderFillBlank = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        {addTooltipsToText(exercise.question)}
      </h3>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className={`
          w-full p-4 text-lg rounded-xl border-2 transition-all duration-300 focus-ring
          ${showResult
            ? userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim()
              ? 'bg-italian-green bg-opacity-10 border-italian-green text-italian-green'
              : 'bg-italian-red bg-opacity-10 border-italian-red text-italian-red'
            : 'border-gray-300 focus:border-italian-green focus:outline-none'
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
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100 hover-lift">
      {exercise.type === 'multiple-choice' && renderMultipleChoice()}
      {exercise.type === 'translation' && renderTranslation()}
      {exercise.type === 'fill-blank' && renderFillBlank()}

      <div className="flex items-center justify-between mt-8">
        {exercise.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center space-x-2 text-italian-green hover:text-italian-green-dark transition-colors duration-200 hover-lift"
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
            px-8 py-3 rounded-xl font-semibold transition-all duration-300 shine-effect
            ${canSubmit() && !showResult
              ? 'bg-gradient-to-r from-italian-green to-italian-green-dark hover:from-italian-green-dark hover:to-italian-green text-white shadow-lg hover:shadow-xl transform hover:scale-105'
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
  );
};

export default ExerciseCard;
