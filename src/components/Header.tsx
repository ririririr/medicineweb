import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { translations } = useLanguage();
  
  return (
    <div className="text-center pt-32 pb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {translations.home.explore}
      </h1>
      <p className="text-xl text-gray-600">
        {translations.home.exploreSubtitle}
      </p>
    </div>
  );
};

export default Header;