import React from 'react';
import StatusBar from './StatusBar';
import DynamicIsland from './DynamicIsland';
import AppContent from './AppContent';
import Background from './Background';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PhoneDevice = () => {
  const { translations } = useLanguage();

  return (
    <div className="phone-section flex flex-col items-center justify-center relative min-h-screen">
      <Background />
      
      <div className="relative w-[320px] h-[650px] bg-black rounded-[55px] shadow-2xl p-3 border-[8px] border-black z-10 transition-opacity duration-300">
        <div className="relative w-full h-full bg-white rounded-[48px] overflow-hidden">
          <StatusBar />
          <DynamicIsland />
          <AppContent />
        </div>

        <div className="absolute -right-[4px] top-24 h-8 w-[4px] bg-gray-700 rounded-r-lg"></div>
        <div className="absolute -right-[4px] top-36 h-12 w-[4px] bg-gray-700 rounded-r-lg"></div>
        <div className="absolute -left-[4px] top-24 h-16 w-[4px] bg-gray-700 rounded-l-lg"></div>
        
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
      </div>

      <div className="absolute mt-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-gray-600 mb-2 text-sm font-medium">{translations.home.scrollOrClick}</p>
        <ChevronDown className="text-gray-600" size={24} />
      </div>
    </div>
  );
};

export default PhoneDevice;