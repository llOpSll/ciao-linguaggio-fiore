
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useGame } from '../contexts/GameContext';
import LessonCard from '../components/LessonCard';
import LoginForm from '../components/LoginForm';
import { Play, TrendingUp, Award, BookOpen, Filter } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { lessons, userProgress } = useGame();
  const [showLogin, setShowLogin] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const handleLessonClick = (lessonId: number) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    navigate(`/lesson/${lessonId}`);
  };

  const levels = ['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const filteredLessons = selectedLevel === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.level === selectedLevel);

  const getLevelStats = () => {
    const stats = {
      A1: lessons.filter(l => l.level === 'A1' && l.isCompleted).length,
      A2: lessons.filter(l => l.level === 'A2' && l.isCompleted).length,
      B1: lessons.filter(l => l.level === 'B1' && l.isCompleted).length,
      B2: lessons.filter(l => l.level === 'B2' && l.isCompleted).length,
      C1: lessons.filter(l => l.level === 'C1' && l.isCompleted).length,
      C2: lessons.filter(l => l.level === 'C2' && l.isCompleted).length,
    };
    return stats;
  };

  const levelStats = getLevelStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-light-purple">
      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        {/* Background with Italian flag gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-cream to-red-600 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-purple/20 to-dark-purple/40"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-medium-purple rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-light-purple rounded-full opacity-30 animate-pulse"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="text-8xl mb-6 animate-bounce">🇮🇹</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Benvenuto in Italia! 
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
              Aprenda italiano de forma divertida e interativa do básico à fluência com nosso curso completo
            </p>
            
            {user ? (
              <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-medium-purple" />
                    <span className="font-semibold text-dark-purple">Nível {userProgress.level}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                    <Award className="w-6 h-6 text-medium-purple" />
                    <span className="font-semibold text-dark-purple">{userProgress.lessonsCompleted} lições</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                    <BookOpen className="w-6 h-6 text-medium-purple" />
                    <span className="font-semibold text-dark-purple">{userProgress.currentStreak} dias</span>
                  </div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-3xl border-2 border-white/50 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-dark-purple">Seu Progresso por Nível</h3>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                    {Object.entries(levelStats).map(([level, completed]) => {
                      const total = lessons.filter(l => l.level === level).length;
                      const percentage = total > 0 ? (completed / total) * 100 : 0;
                      
                      return (
                        <div key={level} className="text-center">
                          <div className="text-3xl font-bold text-medium-purple">{completed}</div>
                          <div className="text-sm text-dark-purple font-medium">{level}</div>
                          <div className="w-full bg-light-purple bg-opacity-30 rounded-full h-2 mt-2">
                            <div 
                              className="bg-gradient-to-r from-medium-purple to-dark-purple h-2 rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <div className="text-xs text-medium-purple mt-1">{Math.round(percentage)}%</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="bg-white text-dark-purple px-10 py-4 rounded-full font-bold text-xl hover:bg-light-purple hover:text-white transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                <Play className="w-8 h-8 inline mr-3" />
                Iniziamo! (Vamos começar!)
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lessons Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold text-dark-purple">Le Tue Lezioni</h2>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-medium-purple" />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-white border-2 border-light-purple rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-medium-purple focus:border-medium-purple transition-all duration-200"
              >
                <option value="all">Tutti i livelli</option>
                {levels.slice(1).map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Level Progress Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {Object.entries(levelStats).map(([level, completed]) => {
              const total = lessons.filter(l => l.level === level).length;
              const percentage = total > 0 ? (completed / total) * 100 : 0;
              
              return (
                <div key={level} className="bg-white rounded-xl p-4 shadow-md border-2 border-light-purple hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-dark-purple">{level}</span>
                    <span className="text-sm text-medium-purple font-semibold">{completed}/{total}</span>
                  </div>
                  <div className="w-full bg-light-purple bg-opacity-30 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-medium-purple to-dark-purple h-3 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-medium-purple mt-1 font-medium">{Math.round(percentage)}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLessons.map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              index={index}
              onClick={() => handleLessonClick(lesson.id)}
            />
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4 animate-pulse">📚</div>
            <h3 className="text-xl font-semibold text-medium-purple mb-2">
              Nessuna lezione trovata
            </h3>
            <p className="text-dark-purple">
              Prova a selezionare un livello diverso
            </p>
          </div>
        )}
      </div>

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Home;
