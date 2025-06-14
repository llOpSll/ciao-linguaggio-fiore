
import React, { useState } from 'react';
import { Search, BookOpen, Volume2 } from 'lucide-react';

interface DictionaryEntry {
  italian: string;
  portuguese: string;
  pronunciation: string;
  category: string;
  examples: Array<{
    italian: string;
    portuguese: string;
  }>;
  conjugations?: Array<{
    form: string;
    conjugation: string;
  }>;
}

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const dictionaryData: DictionaryEntry[] = [
    {
      italian: 'ciao',
      portuguese: 'oi, tchau',
      pronunciation: '/ˈtʃao/',
      category: 'saudações',
      examples: [
        { italian: 'Ciao, come stai?', portuguese: 'Oi, como você está?' },
        { italian: 'Ciao, ci vediamo domani!', portuguese: 'Tchau, nos vemos amanhã!' }
      ]
    },
    {
      italian: 'mangiare',
      portuguese: 'comer',
      pronunciation: '/manˈdʒare/',
      category: 'verbos',
      examples: [
        { italian: 'Mi piace mangiare la pizza', portuguese: 'Eu gosto de comer pizza' },
        { italian: 'Dove vuoi mangiare?', portuguese: 'Onde você quer comer?' }
      ],
      conjugations: [
        { form: 'io', conjugation: 'mangio' },
        { form: 'tu', conjugation: 'mangi' },
        { form: 'lui/lei', conjugation: 'mangia' },
        { form: 'noi', conjugation: 'mangiamo' },
        { form: 'voi', conjugation: 'mangiate' },
        { form: 'loro', conjugation: 'mangiano' }
      ]
    },
    {
      italian: 'casa',
      portuguese: 'casa',
      pronunciation: '/ˈkasa/',
      category: 'substantivos',
      examples: [
        { italian: 'La mia casa è grande', portuguese: 'Minha casa é grande' },
        { italian: 'Torno a casa alle sei', portuguese: 'Volto para casa às seis' }
      ]
    },
    {
      italian: 'bello',
      portuguese: 'bonito',
      pronunciation: '/ˈbello/',
      category: 'adjetivos',
      examples: [
        { italian: 'Che bel giorno!', portuguese: 'Que dia bonito!' },
        { italian: 'È una bella ragazza', portuguese: 'É uma garota bonita' }
      ]
    }
  ];

  const categories = ['all', 'saudações', 'verbos', 'substantivos', 'adjetivos', 'números', 'tempo'];

  const filteredEntries = dictionaryData.filter(entry => {
    const matchesSearch = entry.italian.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.portuguese.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'it-IT';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <BookOpen className="w-8 h-8 text-italian-green" />
        <h2 className="text-2xl font-bold text-gray-800">Dicionário Italiano-Português</h2>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar palavra em italiano ou português..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-italian-green focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-italian-green text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'Todas' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Dictionary Entries */}
      <div className="space-y-4">
        {filteredEntries.map((entry, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-2xl font-bold text-italian-green">{entry.italian}</h3>
                  <button
                    onClick={() => speakWord(entry.italian)}
                    className="p-2 text-italian-green hover:bg-italian-green hover:text-white rounded-full transition-colors duration-200"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-lg text-gray-700 mb-1">{entry.portuguese}</p>
                <p className="text-sm text-gray-500">{entry.pronunciation}</p>
              </div>
              <span className="bg-italian-red text-white px-3 py-1 rounded-full text-xs font-medium">
                {entry.category}
              </span>
            </div>

            {/* Examples */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Exemplos:</h4>
              <div className="space-y-2">
                {entry.examples.map((example, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-italian-green font-medium">{example.italian}</p>
                    <p className="text-gray-600">{example.portuguese}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conjugations for verbs */}
            {entry.conjugations && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Conjugação (Presente):</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {entry.conjugations.map((conj, idx) => (
                    <div key={idx} className="bg-italian-white border border-gray-200 p-2 rounded-lg text-center">
                      <span className="text-sm text-gray-600">{conj.form}</span>
                      <p className="font-medium text-italian-green">{conj.conjugation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-400 text-4xl mb-4">📚</div>
          <p className="text-gray-600">Nenhuma palavra encontrada</p>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
