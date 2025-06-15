
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useGame } from '../contexts/GameContext';
import LessonCard from '../components/LessonCard';
import LoginForm from '../components/LoginForm';
import { Play, TrendingUp, Award, BookOpen, Filter, Star, Target, Users, Globe } from 'lucide-react';

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

  const levels = ['all', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6'];
  const filteredLessons = selectedLevel === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.level === selectedLevel);

  const getLevelStats = () => {
    const stats: { [key: string]: number } = {};
    levels.slice(1).forEach(level => {
      stats[level] = lessons.filter(l => l.level === level && l.isCompleted).length;
    });
    return stats;
  };

  const getTotalStars = () => {
    return lessons.reduce((total, lesson) => total + lesson.stars, 0);
  };

  const levelStats = getLevelStats();
  const totalStars = getTotalStars();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section Reformulado */}
      <div className="relative bg-white shadow-lg border-b-4 border-green-500">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Emoji e Título Principal */}
            <div className="mb-8">
              <div className="text-8xl mb-6 animate-bounce">🇮🇹</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Aprenda Italiano Completo
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Do básico à fluência com método estruturado e progressivo
              </p>
            </div>

            {/* Stats do Usuário */}
            {user ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-200 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                  <Target className="w-7 h-7 mr-3 text-green-600" />
                  Seu Progresso
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-700">Nv. {userProgress.level}</div>
                    <div className="text-sm text-blue-600">Nível</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                    <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-700">{userProgress.lessonsCompleted}</div>
                    <div className="text-sm text-green-600">Lições</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                    <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-700">{userProgress.currentStreak}</div>
                    <div className="text-sm text-orange-600">Dias</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
                    <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-700">{totalStars}</div>
                    <div className="text-sm text-yellow-600">Estrelas</div>
                  </div>
                </div>

                {/* Progresso por Nível */}
                <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-10 gap-3">
                  {Object.entries(levelStats).slice(0, 10).map(([level, completed]) => {
                    const total = lessons.filter(l => l.level === level).length;
                    const percentage = total > 0 ? (completed / total) * 100 : 0;
                    
                    return (
                      <div key={level} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="text-lg font-bold text-gray-700 mb-1">{completed}/{total}</div>
                        <div className="text-xs font-semibold text-gray-600 mb-2">{level}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-700"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{Math.round(percentage)}%</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-bold text-gray-800 mb-2">Mais de 500 Lições</h3>
                      <p className="text-gray-600 text-sm">Conteúdo estruturado do A1 ao E6</p>
                    </div>
                    <div className="text-center">
                      <Globe className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h3 className="font-bold text-gray-800 mb-2">Método Completo</h3>
                      <p className="text-gray-600 text-sm">Gramática, vocabulário e contexto</p>
                    </div>
                    <div className="text-center">
                      <Star className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                      <h3 className="font-bold text-gray-800 mb-2">Sistema de Estrelas</h3>
                      <p className="text-gray-600 text-sm">Acompanhe seu progresso</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowLogin(true)}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Play className="w-6 h-6 inline mr-3" />
                    Começar Agora - É Grátis!
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Seção de Lições */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Filtros e Título */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Suas Lições</h2>
          
          <div className="flex items-center space-x-3 bg-white rounded-xl p-2 shadow-md border border-gray-200">
            <Filter className="w-5 h-5 text-gray-600 ml-2" />
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-transparent border-none outline-none px-4 py-2 text-base text-gray-700 font-medium cursor-pointer"
            >
              <option value="all">Todos os Níveis</option>
              {levels.slice(1).map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid de Lições */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLessons.map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              index={index}
              onClick={() => handleLessonClick(lesson.id)}
            />
          ))}
        </div>

        {/* Estado Vazio */}
        {filteredLessons.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">📚</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Nenhuma lição encontrada
            </h3>
            <p className="text-gray-600 text-lg">
              Experimente selecionar um nível diferente
            </p>
          </div>
        )}
      </div>

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Home;
