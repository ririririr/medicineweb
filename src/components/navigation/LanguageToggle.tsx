import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageToggle = () => {
  const { language, translations, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
      aria-label={translations.language.switch}
    >
      <Languages size={20} />
      <span>{translations.language.current}</span>
    </button>
  );
};

export default LanguageToggle;