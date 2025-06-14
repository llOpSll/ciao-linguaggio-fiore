
import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';

interface WordTooltipProps {
  children: React.ReactNode;
  word: string;
  translation: string;
  pronunciation?: string;
  type?: string;
  className?: string;
}

const WordTooltip: React.FC<WordTooltipProps> = ({ 
  children, 
  word, 
  translation, 
  pronunciation,
  type,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const speakWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'it-IT';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="relative inline-block">
      <span
        className={`cursor-help underline decoration-dotted decoration-medium-purple hover:bg-medium-purple hover:text-white transition-all duration-200 px-1 rounded ${className}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
          <div className="bg-dark-purple text-white p-3 rounded-lg shadow-lg min-w-max animate-fade-in">
            <div className="flex items-center justify-between space-x-3">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <p className="font-bold text-light-purple">{word}</p>
                  {type && (
                    <span className="text-xs bg-medium-purple px-2 py-1 rounded-full text-cream">
                      {type}
                    </span>
                  )}
                </div>
                <p className="text-sm text-cream">{translation}</p>
                {pronunciation && (
                  <p className="text-xs text-light-purple mt-1">{pronunciation}</p>
                )}
              </div>
              <button
                onClick={speakWord}
                className="p-1 hover:bg-medium-purple rounded transition-colors duration-200"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-dark-purple"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordTooltip;
