
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import LessonCard from '../components/LessonCard';
import { BookOpen, Trophy, Target, Zap } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const { userProgress, lessons } = useGame();

  const handleLessonClick = (lessonId: number) => {
    navigate(`/lesson/${lessonId}`);
  };

  const completedLessons = lessons.filter(l => l.isCompleted).length;
  const progressPercentage = (userProgress.totalXP % 100) / 100 * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Progress Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{userProgress.totalXP}</h3>
              <p className="text-gray-600">Total XP</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{completedLessons}</h3>
              <p className="text-gray-600">Lições Concluídas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{userProgress.currentStreak}</h3>
              <p className="text-gray-600">Dias Seguidos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Nível {userProgress.level}</h3>
              <p className="text-gray-600">Nível Atual</p>
            </div>
          </div>

          {/* Level Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">
                Progresso para o próximo nível
              </span>
              <span className="text-sm text-gray-500">
                {userProgress.totalXP % 100}/100 XP
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Benvenuto! 🇮🇹
          </h1>
          <p className="text-xl text-gray-600">
            Continue sua jornada para dominar o italiano
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map(lesson => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              onClick={() => handleLessonClick(lesson.id)}
            />
          ))}
        </div>

        {/* Motivational Footer */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl text-white">
          <h2 className="text-2xl font-bold mb-2">Continue Estudando!</h2>
          <p className="text-lg opacity-90">
            Cada lição te aproxima mais da fluência em italiano 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
