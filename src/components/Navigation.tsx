
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Trophy, User, BookOpen } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: BookOpen, label: 'Lições', path: '/' },
    { icon: Trophy, label: 'Conquistas', path: '/achievements' },
    { icon: User, label: 'Perfil', path: '/profile' },
  ];

  // Don't show navigation on lesson pages
  if (location.pathname.includes('/lesson/')) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden">
      <div className="flex items-center justify-around">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`
                flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }
              `}
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
