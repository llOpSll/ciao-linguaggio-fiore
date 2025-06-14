
import React from 'react';
import { useGame } from '../contexts/GameContext';
import { ArrowLeft, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Achievements = () => {
  const navigate = useNavigate();
  const { achievements, userProgress } = useGame();

  const unlockedCount = achievements.filter(a => a.isUnlocked).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
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
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Conquistas</h1>
          <p className="text-xl text-gray-600 mb-4">
            Suas realizações no aprendizado de italiano
          </p>
          <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full">
            {unlockedCount} de {achievements.length} conquistas desbloqueadas
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map(achievement => (
            <div
              key={achievement.id}
              className={`
                relative p-6 rounded-2xl border-2 transition-all duration-200
                ${achievement.isUnlocked
                  ? 'bg-white border-yellow-300 shadow-lg ring-2 ring-yellow-400 ring-opacity-20'
                  : 'bg-gray-50 border-gray-200 opacity-60'
                }
              `}
            >
              {!achievement.isUnlocked && (
                <div className="absolute top-4 right-4">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
              )}

              <div className="text-center mb-4">
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl
                  ${achievement.isUnlocked 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                    : 'bg-gray-200'
                  }
                `}>
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-600">
                    Progresso
                  </span>
                  <span className="text-xs text-gray-500">
                    {Math.min(achievement.currentProgress, achievement.requirement)}/
                    {achievement.requirement}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      achievement.isUnlocked 
                        ? 'bg-gradient-to-r from-green-400 to-blue-500' 
                        : 'bg-gray-400'
                    }`}
                    style={{ 
                      width: `${Math.min(
                        (achievement.currentProgress / achievement.requirement) * 100, 
                        100
                      )}%` 
                    }}
                  ></div>
                </div>
              </div>

              {achievement.isUnlocked && (
                <div className="mt-3 text-center">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    ✓ Desbloqueada
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Motivational Footer */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl text-white">
          <h2 className="text-2xl font-bold mb-2">Continue Conquistando!</h2>
          <p className="text-lg opacity-90">
            Cada conquista representa seu progresso no italiano 🏆
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
