
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/LoginForm';
import DictionaryComponent from '../components/Dictionary';

const Dictionary = () => {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = React.useState(false);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-italian-green via-italian-white to-italian-red bg-opacity-20 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4 animate-flag-wave">🇮🇹</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dicionário Italiano</h2>
          <p className="text-gray-600 mb-6">
            Faça login para acessar nosso dicionário interativo com pronuncia e exemplos!
          </p>
          <button
            onClick={() => setShowLogin(true)}
            className="w-full bg-gradient-to-r from-italian-green to-italian-green-dark text-white py-3 rounded-xl font-semibold hover:from-italian-green-dark hover:to-italian-green transition-all duration-200 transform hover:scale-105"
          >
            Fazer Login
          </button>
        </div>
        {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-italian-white via-white to-italian-green-light bg-opacity-20 py-8 px-4">
      <DictionaryComponent />
    </div>
  );
};

export default Dictionary;
