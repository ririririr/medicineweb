import React from 'react';
import { Sparkles } from 'lucide-react';

interface FloatingAIButtonProps {
  onOpenMenu: () => void;
}

const FloatingAIButton: React.FC<FloatingAIButtonProps> = ({ onOpenMenu }) => {
  return (
    <div className="absolute bottom-24 right-4">
      <button 
        onClick={onOpenMenu}
        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      >
        <Sparkles 
          size={24} 
          className="text-white group-hover:animate-pulse" 
        />
        <div className="absolute -top-8 right-0 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          AI Assistant
        </div>
      </button>
    </div>
  );
};

export default FloatingAIButton;