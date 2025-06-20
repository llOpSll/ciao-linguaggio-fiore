import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useGame } from '../contexts/GameContext';
import LessonCard from '../components/LessonCard';
import LoginForm from '../components/LoginForm';
import { Play, TrendingUp, Award, BookOpen, Filter, Star, Target, Users, Globe, Map } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { lessons, userProgress } = useGame();
  const [showLogin, setShowLogin] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [showCourseMap, setShowCourseMap] = useState(false);

  const handleLessonClick = (lessonId: number) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    navigate(`/lesson/${lessonId}`);
  };

  const levels = ['all', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'C1', 'C2', 'D1'];
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

  // Função para agrupar lições por nível
  const getLessonsByLevel = () => {
    const grouped: { [key: string]: typeof lessons } = {};
    lessons.forEach(lesson => {
      if (!grouped[lesson.level]) {
        grouped[lesson.level] = [];
      }
      grouped[lesson.level].push(lesson);
    });
    return grouped;
  };

  const lessonsByLevel = getLessonsByLevel();

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-powder-blue to-steel-blue">
      {/* Hero Section com nova paleta */}
      <div className="relative bg-white shadow-lg border-b-4 border-steel-blue">
        <div className="absolute inset-0 bg-gradient-to-r from-steel-blue to-dark-navy opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Emoji e Título Principal */}
            <div className="mb-8">
              <div className="text-8xl mb-6 animate-bounce">🇮🇹</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-navy mb-6">
                Aprenda Italiano Completo
              </h1>
              <p className="text-xl sm:text-2xl text-steel-blue max-w-4xl mx-auto leading-relaxed">
                Do básico à fluência com método estruturado e progressivo
              </p>
            </div>

            {/* Stats do Usuário */}
            {user ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border-2 border-powder-blue mb-8">
                <h3 className="text-2xl font-bold text-dark-navy mb-6 flex items-center justify-center">
                  <Target className="w-7 h-7 mr-3 text-steel-blue" />
                  Seu Progresso
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-steel-blue-light to-steel-blue rounded-xl p-4 border border-steel-blue text-white">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Nv. {userProgress.level}</div>
                    <div className="text-sm opacity-90">Nível</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-powder-blue to-powder-blue-dark rounded-xl p-4 border border-powder-blue text-dark-navy">
                    <Award className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{userProgress.lessonsCompleted}</div>
                    <div className="text-sm opacity-80">Lições</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-dark-navy to-dark-navy-light rounded-xl p-4 border border-dark-navy text-white">
                    <BookOpen className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{userProgress.currentStreak}</div>
                    <div className="text-sm opacity-90">Dias</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-4 border border-yellow-400 text-dark-navy">
                    <Star className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{totalStars}</div>
                    <div className="text-sm opacity-80">Estrelas</div>
                  </div>
                </div>

                {/* Progresso por Nível */}
                <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-10 gap-3">
                  {Object.entries(levelStats).slice(0, 18).map(([level, completed]) => {
                    const total = lessons.filter(l => l.level === level).length;
                    const percentage = total > 0 ? (completed / total) * 100 : 0;
                    
                    return (
                      <div key={level} className="bg-ivory rounded-lg p-3 text-center border-2 border-powder-blue hover:shadow-md transition-shadow">
                        <div className="text-lg font-bold text-dark-navy mb-1">{completed}/{total}</div>
                        <div className="text-xs font-semibold text-steel-blue mb-2">{level}</div>
                        <div className="w-full bg-powder-blue-light rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-steel-blue to-dark-navy h-2 rounded-full transition-all duration-700"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="text-xs text-steel-blue mt-1">{Math.round(percentage)}%</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-powder-blue mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <Users className="w-12 h-12 text-steel-blue mx-auto mb-3" />
                      <h3 className="font-bold text-dark-navy mb-2">Mais de 500 Lições</h3>
                      <p className="text-steel-blue text-sm">Conteúdo estruturado do A1 ao C6</p>
                    </div>
                    <div className="text-center">
                      <Globe className="w-12 h-12 text-powder-blue-dark mx-auto mb-3" />
                      <h3 className="font-bold text-dark-navy mb-2">Método Completo</h3>
                      <p className="text-steel-blue text-sm">Gramática, vocabulário e contexto</p>
                    </div>
                    <div className="text-center">
                      <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                      <h3 className="font-bold text-dark-navy mb-2">Sistema de Estrelas</h3>
                      <p className="text-steel-blue text-sm">Acompanhe seu progresso</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowLogin(true)}
                    className="w-full bg-gradient-to-r from-steel-blue to-dark-navy hover:from-steel-blue-light hover:to-dark-navy-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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

      {/* Botão para mostrar mapa do curso */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <button
            onClick={() => setShowCourseMap(!showCourseMap)}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-steel-blue to-dark-navy text-white font-bold rounded-xl hover:from-steel-blue-light hover:to-dark-navy-light transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Map className="w-5 h-5 mr-2" />
            {showCourseMap ? 'Ocultar' : 'Ver'} Mapa Completo do Curso
          </button>
        </div>

        {/* Mapa Completo do Curso */}
        {showCourseMap && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-2 border-powder-blue">
            <h3 className="text-3xl font-bold text-dark-navy mb-8 text-center flex items-center justify-center">
              <Map className="w-8 h-8 mr-3 text-steel-blue" />
              Mapa Completo do Curso
            </h3>
            
            <div className="space-y-8">
              {['A', 'B', 'C', 'D', 'E'].map(levelGroup => {
                const groupLevels = Object.keys(lessonsByLevel).filter(level => level.startsWith(levelGroup));
                if (groupLevels.length === 0) return null;

                return (
                  <div key={levelGroup} className="border-2 border-powder-blue rounded-xl p-6">
                    <h4 className="text-2xl font-bold text-dark-navy mb-6 flex items-center">
                      <Target className="w-6 h-6 mr-2 text-steel-blue" />
                      Nível {levelGroup} - {levelGroup === 'A' ? 'Básico' : levelGroup === 'B' ? 'Intermediário' : levelGroup === 'C' ? 'Avançado' : levelGroup === 'D' ? 'Especialização' : 'Especialização Avançada'}
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {groupLevels.sort().map(level => {
                        const levelLessons = lessonsByLevel[level] || [];
                        const completed = levelLessons.filter(l => l.isCompleted).length;
                        const total = levelLessons.length;
                        const percentage = total > 0 ? (completed / total) * 100 : 0;

                        return (
                          <div key={level} className="bg-ivory rounded-lg p-4 border border-powder-blue">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-lg font-bold text-dark-navy">{level}</span>
                              <span className="text-sm text-steel-blue">{completed}/{total}</span>
                            </div>
                            
                            <div className="w-full bg-powder-blue-light rounded-full h-3 mb-3">
                              <div 
                                className="bg-gradient-to-r from-steel-blue to-dark-navy h-3 rounded-full transition-all duration-700"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                            
                            <div className="space-y-1">
                              {levelLessons.map(lesson => (
                                <div 
                                  key={lesson.id} 
                                  className={`text-xs p-2 rounded flex items-center justify-between ${
                                    lesson.isCompleted 
                                      ? 'bg-steel-blue text-white' 
                                      : lesson.isUnlocked 
                                        ? 'bg-powder-blue text-dark-navy' 
                                        : 'bg-gray-100 text-gray-500'
                                  }`}
                                >
                                  <span className="truncate mr-2">{lesson.title}</span>
                                  <div className="flex items-center space-x-1">
                                    {lesson.isCompleted && <Star className="w-3 h-3 text-yellow-300" />}
                                    {lesson.videoUrl && <Play className="w-3 h-3" />}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-steel-blue to-dark-navy text-white rounded-lg p-4">
                  <div className="text-2xl font-bold">{lessons.length}</div>
                  <div className="text-sm opacity-90">Total de Lições</div>
                </div>
                <div className="bg-gradient-to-br from-powder-blue to-powder-blue-dark text-dark-navy rounded-lg p-4">
                  <div className="text-2xl font-bold">{Object.keys(lessonsByLevel).length}</div>
                  <div className="text-sm opacity-80">Módulos</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-dark-navy rounded-lg p-4">
                  <div className="text-2xl font-bold">{lessons.reduce((sum, l) => sum + l.xp, 0)}</div>
                  <div className="text-sm opacity-80">XP Total</div>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-lg p-4">
                  <div className="text-2xl font-bold">{lessons.filter(l => l.videoUrl).length}</div>
                  <div className="text-sm opacity-90">Vídeo Aulas</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Seção de Lições */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Filtros e Título */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-navy">Suas Lições</h2>
          
          <div className="flex items-center space-x-3 bg-white rounded-xl p-2 shadow-md border-2 border-powder-blue">
            <Filter className="w-5 h-5 text-steel-blue ml-2" />
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-transparent border-none outline-none px-4 py-2 text-base text-dark-navy font-medium cursor-pointer"
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
            <h3 className="text-2xl font-bold text-dark-navy mb-4">
              Nenhuma lição encontrada
            </h3>
            <p className="text-steel-blue text-lg">
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
