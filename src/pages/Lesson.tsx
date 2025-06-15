
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
        navigate('/');
        return;
      }
    }

    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    } else {
      const stars = calculateStars();
      console.log(`Lesson completed with ${correctAnswers + (isCorrect ? 1 : 0)} correct answers out of ${lesson.exercises.length}, stars: ${stars}`);
      completeLesson(lesson.id, stars);
      setShowResult(true);
    }
  };

  const calculateStars = (): number => {
    const totalCorrect = correctAnswers + (currentExerciseIndex === lesson.exercises.length - 1 ? 1 : 0);
    const accuracy = totalCorrect / lesson.exercises.length;
    console.log(`Accuracy: ${accuracy} (${totalCorrect}/${lesson.exercises.length})`);
    
    if (accuracy >= 0.9) return 3;
    if (accuracy >= 0.7) return 2;
    return 1;
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (showResult) {
    const totalCorrect = correctAnswers;
    const stars = calculateStars();
    const accuracy = Math.round((totalCorrect / lesson.exercises.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-cream via-light-beige to-soft-beige flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border-2 border-sage-green/30">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-muted-purple to-sage-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl">🎉</span>
            </div>
            <h2 className="text-3xl font-bold text-charcoal mb-3">Lição Concluída!</h2>
            <p className="text-muted-purple text-lg">Parabéns pelo seu progresso!</p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex items-center justify-center space-x-2">
              {Array.from({ length: 3 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-10 h-10 transition-all duration-500 ${
                    i < stars ? 'text-yellow-400 fill-yellow-400 animate-bounce' : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>

            <div className="bg-gradient-to-r from-sage-green/10 to-muted-purple/10 rounded-2xl p-6 border border-sage-green/20">
              <div className="grid grid-cols-2 gap-6 text-base">
                <div>
                  <span className="text-muted-purple font-medium">Precisão:</span>
                  <p className="font-bold text-charcoal text-xl">{accuracy}%</p>
                </div>
                <div>
                  <span className="text-sage-green font-medium">XP Ganho:</span>
                  <p className="font-bold text-muted-purple text-xl">+{lesson.xp}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleBackToHome}
            className="w-full bg-gradient-to-r from-muted-purple to-sage-green hover:from-sage-green hover:to-muted-purple text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Continuar Estudando
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-light-beige to-soft-beige">
      {/* Header */}
      <div className="bg-white border-b-2 border-sage-green/20 px-4 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBackToHome}
            className="flex items-center space-x-2 text-muted-purple hover:text-charcoal transition-colors duration-200 bg-sage-green/10 px-4 py-2 rounded-xl hover:bg-sage-green/20"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>

          <div className="flex-1 mx-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-muted-purple">
                {currentExerciseIndex + 1} de {lesson.exercises.length}
              </span>
              <div className="flex items-center space-x-2 bg-red-50 px-3 py-1 rounded-xl">
                <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                <span className="text-sm font-bold text-red-600">
                  {userProgress.hearts}
                </span>
              </div>
            </div>
            <div className="w-full bg-sage-green/20 rounded-full h-4 shadow-inner">
              <div 
                className="bg-gradient-to-r from-muted-purple to-sage-green h-4 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <button
            onClick={handleBackToHome}
            className="p-2 text-muted-purple hover:text-charcoal transition-colors duration-200 bg-sage-green/10 rounded-xl hover:bg-sage-green/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Exercise Content */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-charcoal mb-3">{lesson.title}</h1>
          <p className="text-muted-purple text-lg">{lesson.description}</p>
        </div>

        <ExerciseCard
          exercise={currentExercise}
          onAnswer={handleAnswer}
          currentIndex={currentExerciseIndex}
          totalExercises={lesson.exercises.length}
        />
      </div>
    </div>
  );
};

export default Lesson;
