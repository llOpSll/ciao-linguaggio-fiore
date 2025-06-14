
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import ExerciseCard from '../components/ExerciseCard';
import { ArrowLeft, X, Heart, Star } from 'lucide-react';

const Lesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { lessons, completeLesson, useHeart, userProgress } = useGame();
  
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const lesson = lessons.find(l => l.id === parseInt(lessonId || '0'));

  useEffect(() => {
    if (!lesson || !lesson.isUnlocked) {
      navigate('/');
    }
  }, [lesson, navigate]);

  if (!lesson) return null;

  const currentExercise = lesson.exercises[currentExerciseIndex];
  const progress = ((currentExerciseIndex + 1) / lesson.exercises.length) * 100;

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    } else {
      setMistakes(prev => prev + 1);
      if (!useHeart()) {
        // Game over - redirect to home
        navigate('/');
        return;
      }
    }

    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    } else {
      // Lesson completed
      const stars = calculateStars();
      completeLesson(lesson.id, stars);
      setShowResult(true);
    }
  };

  const calculateStars = (): number => {
    const accuracy = correctAnswers / lesson.exercises.length;
    if (accuracy >= 0.9) return 3;
    if (accuracy >= 0.7) return 2;
    return 1;
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (showResult) {
    const stars = calculateStars();
    const accuracy = Math.round((correctAnswers / lesson.exercises.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎉</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Lição Concluída!</h2>
            <p className="text-gray-600">Parabéns pelo seu progresso!</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-1">
              {Array.from({ length: 3 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Precisão:</span>
                  <p className="font-semibold text-green-600">{accuracy}%</p>
                </div>
                <div>
                  <span className="text-gray-600">XP Ganho:</span>
                  <p className="font-semibold text-blue-600">+{lesson.xp}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleBackToHome}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200"
          >
            Continuar Estudando
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBackToHome}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>

          <div className="flex-1 mx-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">
                {currentExerciseIndex + 1} de {lesson.exercises.length}
              </span>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                <span className="text-sm font-semibold text-red-600">
                  {userProgress.hearts}
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <button
            onClick={handleBackToHome}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Exercise Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{lesson.title}</h1>
          <p className="text-gray-600">{lesson.description}</p>
        </div>

        <ExerciseCard
          exercise={currentExercise}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
};

export default Lesson;
