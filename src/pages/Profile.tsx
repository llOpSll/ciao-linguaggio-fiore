
import React from 'react';
import { useGame } from '../contexts/GameContext';
import { ArrowLeft, Calendar, Trophy, Target, Zap, BookOpen, Heart, Gem } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { userProgress, lessons, achievements } = useGame();

  const completedLessons = lessons.filter(l => l.isCompleted).length;
  const totalLessons = lessons.length;
  const unlockedAchievements = achievements.filter(a => a.isUnlocked).length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  const stats = [
    {
      icon: Trophy,
      label: 'Total XP',
      value: userProgress.totalXP,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: BookOpen,
      label: 'Lições Concluídas',
      value: completedLessons,
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Zap,
      label: 'Dias Seguidos',
      value: userProgress.currentStreak,
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Target,
      label: 'Nível Atual',
      value: userProgress.level,
      color: 'from-purple-400 to-pink-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">👤</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Meu Perfil</h1>
            <p className="text-gray-600">Estudante de Italiano</p>
          </div>

          {/* Current Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-lg">
              <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
              <span className="font-semibold text-red-600">{userProgress.hearts}</span>
              <span className="text-red-600 text-sm">Vidas</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
              <Gem className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-blue-600">{userProgress.gems}</span>
              <span className="text-blue-600 text-sm">Gemas</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-50 px-3 py-2 rounded-lg col-span-2 md:col-span-1">
              <Trophy className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-purple-600">{unlockedAchievements}</span>
              <span className="text-purple-600 text-sm">Conquistas</span>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-700">Progresso Geral</span>
              <span className="text-sm text-gray-500">
                {completedLessons}/{totalLessons} lições
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-center mt-2 text-sm text-gray-600">
              {Math.round(progressPercentage)}% concluído
            </p>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Streak Information */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-orange-500" />
            Estatísticas de Estudo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-orange-600">{userProgress.currentStreak}</h3>
              <p className="text-orange-700">Sequência Atual</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Trophy className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-red-600">{userProgress.longestStreak}</h3>
              <p className="text-red-700">Maior Sequência</p>
            </div>
          </div>
        </div>

        {/* Level Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Progresso do Nível</h2>
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-700">
              Nível {userProgress.level}
            </span>
            <span className="text-sm text-gray-500">
              {userProgress.totalXP % 100}/100 XP
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-purple-400 to-blue-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${(userProgress.totalXP % 100)}%` }}
            ></div>
          </div>
          <p className="text-center mt-2 text-sm text-gray-600">
            {100 - (userProgress.totalXP % 100)} XP para o próximo nível
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
