import React from 'react';
import { Users } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface AboutDropdownProps {
  setCurrentPage: (page: string) => void;
}

const AboutDropdown: React.FC<AboutDropdownProps> = ({ setCurrentPage }) => {
  const { translations } = useLanguage();

  return (
    <button
      onClick={() => setCurrentPage('about')}
      className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
    >
      <Users size={20} />
      <span>{translations.nav.about}</span>
    </button>
  );
};

export default AboutDropdown;