import React from 'react';
import DownloadButton from './navigation/DownloadButton';
import AboutDropdown from './navigation/AboutDropdown/index';
import ShopButton from './navigation/ShopButton';
import MedicineAIDropdown from './navigation/MedicineAIDropdown';
import LanguageToggle from './navigation/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

interface NavigationProps {
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setCurrentPage }) => {
  const { translations } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm text-white p-4 z-[100] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <img 
              src="/medicinelogo.png" 
              alt="Medicine AI Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-xl font-bold">
    <span className="text-green-500">    MEDICINE</span>{' '}
    <span className="text-white">AI</span>
  </div>
        </div>

        <div className="flex items-center space-x-8">
          <AboutDropdown setCurrentPage={setCurrentPage} />
          <MedicineAIDropdown setCurrentPage={setCurrentPage} />
          <ShopButton setCurrentPage={setCurrentPage} />
          <DownloadButton onClick={() => setCurrentPage('qr')} />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;