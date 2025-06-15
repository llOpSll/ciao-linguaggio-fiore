
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useGame } from '../contexts/GameContext';
import LessonCard from '../components/LessonCard';
import LoginForm from '../components/LoginForm';
import { Play, TrendingUp, Award, BookOpen, Filter, Star, Target } from 'lucide-react';

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

  const getTotalStars = () => {
    return lessons.reduce((total, lesson) => total + lesson.stars, 0);
  };

  const levelStats = getLevelStats();
  const totalStars = getTotalStars();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-light-beige to-soft-beige">
      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        {/* Background with enhanced gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green via-muted-purple to-warm-beige opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-charcoal/10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-muted-purple/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-sage-green/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-warm-beige/40 rounded-full animate-pulse delay-1000"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="text-7xl md:text-9xl mb-8 animate-bounce filter drop-shadow-lg">🇮🇹</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-charcoal drop-shadow-2xl leading-tight">
              Benvenuto in Italia! 
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-charcoal/80 drop-shadow-lg max-w-5xl mx-auto leading-relaxed font-medium">
              Aprenda italiano de forma divertida e interativa do básico à fluência com nosso curso completo
            </p>
            
            {user ? (
              <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl">
                  <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl border border-white/50">
                    <TrendingUp className="w-6 h-6 text-muted-purple" />
                    <span className="font-bold text-charcoal">Nível {userProgress.level}</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl border border-white/50">
                    <Award className="w-6 h-6 text-sage-green" />
                    <span className="font-bold text-charcoal">{userProgress.lessonsCompleted} lições</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl border border-white/50">
                    <BookOpen className="w-6 h-6 text-warm-beige" />
                    <span className="font-bold text-charcoal">{userProgress.currentStreak} dias</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl border border-white/50">
                    <Star className="w-6 h-6 text-yellow-500" fill="currentColor" />
                    <span className="font-bold text-charcoal">{totalStars} estrelas</span>
                  </div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 w-full max-w-5xl border-2 border-white/50 shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-charcoal flex items-center justify-center">
                    <Target className="w-8 h-8 mr-3 text-muted-purple" />
                    Seu Progresso por Nível
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {Object.entries(levelStats).map(([level, completed]) => {
                      const total = lessons.filter(l => l.level === level).length;
                      const percentage = total > 0 ? (completed / total) * 100 : 0;
                      
                      return (
                        <div key={level} className="text-center bg-gradient-to-br from-white to-light-beige p-4 rounded-2xl shadow-lg border border-sage-green/20 hover:shadow-xl transition-all duration-300">
                          <div className="text-3xl md:text-4xl font-bold text-muted-purple mb-1">{completed}</div>
                          <div className="text-base text-charcoal font-bold mb-2">{level}</div>
                          <div className="w-full bg-sage-green/20 rounded-full h-3 mb-2">
                            <div 
                              className="bg-gradient-to-r from-sage-green to-muted-purple h-3 rounded-full transition-all duration-700"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <div className="text-sm text-muted-purple font-semibold">{Math.round(percentage)}%</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-muted-purple to-sage-green hover:from-sage-green hover:to-muted-purple text-white px-10 py-4 rounded-2xl font-bold text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white/30"
              >
                <Play className="w-7 h-7 inline mr-3" />
                Iniziamo! (Vamos começar!)
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lessons Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">Le Tue Lezioni</h2>
            <div className="flex items-center space-x-3 bg-white rounded-2xl p-2 shadow-lg border border-sage-green/20">
              <Filter className="w-5 h-5 text-muted-purple ml-2" />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-transparent border-none outline-none px-4 py-2 text-base text-charcoal font-medium cursor-pointer"
              >
                <option value="all">Tutti i livelli</option>
                {levels.slice(1).map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Level Progress Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {Object.entries(levelStats).map(([level, completed]) => {
              const total = lessons.filter(l => l.level === level).length;
              const percentage = total > 0 ? (completed / total) * 100 : 0;
              
              return (
                <div key={level} className="bg-white rounded-2xl p-5 shadow-md border-2 border-sage-green/20 hover:shadow-xl hover:border-muted-purple/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-charcoal text-lg">{level}</span>
                    <span className="text-sm text-muted-purple font-semibold bg-muted-purple/10 px-2 py-1 rounded-lg">{completed}/{total}</span>
                  </div>
                  <div className="w-full bg-sage-green/20 rounded-full h-3 mb-2">
                    <div 
                      className="bg-gradient-to-r from-sage-green to-muted-purple h-3 rounded-full transition-all duration-700"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="text-sm text-muted-purple font-bold">{Math.round(percentage)}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-pulse">📚</div>
            <h3 className="text-2xl font-bold text-muted-purple mb-4">
              Nessuna lezione trovata
            </h3>
            <p className="text-charcoal text-lg">
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
