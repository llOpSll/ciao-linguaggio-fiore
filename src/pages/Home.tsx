
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-italian-green via-italian-white to-italian-red text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-italian-green/90 via-italian-white/10 to-italian-red/90"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="text-6xl mb-4 animate-flag-wave">🇮🇹</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-animated">
              Benvenuto in Italia! 
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Aprenda italiano de forma divertida e interativa do básico à fluência
            </p>
            
            {user ? (
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center space-x-6 text-lg">
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <TrendingUp className="w-6 h-6" />
                    <span>Nível {userProgress.level}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <Award className="w-6 h-6" />
                    <span>{userProgress.lessonsCompleted} lições</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <BookOpen className="w-6 h-6" />
                    <span>{userProgress.currentStreak} dias</span>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 w-full max-w-2xl border border-white/30">
                  <h3 className="text-lg font-semibold mb-4">Seu Progresso por Nível</h3>
                  <div className="grid grid-cols-6 gap-4">
                    {Object.entries(levelStats).map(([level, completed]) => (
                      <div key={level} className="text-center">
                        <div className="text-2xl font-bold">{completed}</div>
                        <div className="text-sm text-gray-200">{level}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="bg-white text-italian-green px-8 py-4 rounded-full font-bold text-lg hover:bg-italian-white transition-all duration-300 transform hover:scale-105 shadow-lg shine-effect"
              >
                <Play className="w-6 h-6 inline mr-2" />
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
            <h2 className="text-3xl font-bold text-gray-800">Le Tue Lezioni</h2>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-italian-green focus:border-transparent"
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
                <div key={level} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover-lift">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">{level}</span>
                    <span className="text-sm text-gray-600">{completed}/{total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        level === 'A1' || level === 'C1' ? 'bg-gradient-to-r from-italian-green to-italian-green-dark' :
                        level === 'C2' ? 'bg-gradient-to-r from-italian-green via-italian-white to-italian-red' :
                        'bg-gradient-to-r from-blue-400 to-purple-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{Math.round(percentage)}%</div>
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
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nessuna lezione trovata
            </h3>
            <p className="text-gray-500">
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
