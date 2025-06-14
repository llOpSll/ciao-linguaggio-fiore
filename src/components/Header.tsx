
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useGame } from '../contexts/GameContext';
import LoginForm from './LoginForm';
import { Heart, Gem, Trophy, User, LogOut } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();
  const { userProgress } = useGame();
  const [showLogin, setShowLogin] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg">🇮🇹</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">ItalianApp</h1>
                <p className="text-xs text-gray-600">Aprenda Italiano</p>
              </div>
            </div>

            {/* Stats and User Info */}
            <div className="flex items-center space-x-4">
              {user && (
                <>
                  {/* Stats */}
                  <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                      <span className="text-red-600 font-semibold">{userProgress.hearts}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-full">
                      <Gem className="w-5 h-5 text-blue-500" />
                      <span className="text-blue-600 font-semibold">{userProgress.gems}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 bg-yellow-50 px-3 py-2 rounded-full">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span className="text-yellow-600 font-semibold">{userProgress.totalXP} XP</span>
                    </div>
                  </div>

                  {/* User Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-full transition-colors duration-200 transform hover:scale-105"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="hidden md:block text-gray-700 font-medium">{user.name}</span>
                    </button>

                    {showUserMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-fade-in">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-800">{user.name}</p>
                          <p className="text-xs text-gray-600">{user.email}</p>
                        </div>
                        <button
                          onClick={() => {
                            logout();
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sair</span>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}

              {!user && (
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Entrar
                </button>
              )}
            </div>
          </div>

          {/* Mobile Stats */}
          {user && (
            <div className="md:hidden mt-4 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-full">
                <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
                <span className="text-red-600 font-semibold text-sm">{userProgress.hearts}</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-full">
                <Gem className="w-4 h-4 text-blue-500" />
                <span className="text-blue-600 font-semibold text-sm">{userProgress.gems}</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-yellow-50 px-3 py-2 rounded-full">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-600 font-semibold text-sm">{userProgress.totalXP} XP</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      
      {/* Click outside to close user menu */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </>
  );
};

export default Header;
