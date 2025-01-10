import React from 'react';
import { Brain } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MedicineAIDropdownProps {
  setCurrentPage: (page: string) => void;
}

const MedicineAIDropdown: React.FC<MedicineAIDropdownProps> = ({ setCurrentPage }) => {
  const { translations } = useLanguage();

  return (
    <button
      onClick={() => setCurrentPage('product')}
      className="flex items-center space-x-2 hover:text-green-400 transition-colors"
    >
      <Brain size={20} />
      <span>{translations.nav.medicineAI}</span>
    </button>
  );
};

export default MedicineAIDropdown;