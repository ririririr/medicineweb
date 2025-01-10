import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ShopButtonProps {
  setCurrentPage: (page: string) => void;
}

const ShopButton: React.FC<ShopButtonProps> = ({ setCurrentPage }) => {
  const { translations } = useLanguage();
  
  return (
    <button
      onClick={() => setCurrentPage('shop')}
      className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
    >
      <Sparkles size={20} />
      <span>Medicine AI+</span>
    </button>
  );
};

export default ShopButton;