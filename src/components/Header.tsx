
import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Trophy, Heart, Gem, Zap } from 'lucide-react';

const Header = () => {
  const { userProgress } = useGame();

  return (
    <header className="bg-white border-b-2 border-gray-100 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">🇮🇹</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">ItalianApp</h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Streak */}
          <div className="flex items-center space-x-1 bg-orange-50 px-3 py-1 rounded-full">
            <Zap className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600 font-semibold text-sm">
              {userProgress.currentStreak}
            </span>
          </div>

          {/* Hearts */}
          <div className="flex items-center space-x-1 bg-red-50 px-3 py-1 rounded-full">
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            <span className="text-red-600 font-semibold text-sm">
              {userProgress.hearts}
            </span>
          </div>

          {/* Gems */}
          <div className="flex items-center space-x-1 bg-blue-50 px-3 py-1 rounded-full">
            <Gem className="w-4 h-4 text-blue-500" />
            <span className="text-blue-600 font-semibold text-sm">
              {userProgress.gems}
            </span>
          </div>

          {/* Level */}
          <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full">
            <Trophy className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 font-semibold text-sm">
              Nível {userProgress.level}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
