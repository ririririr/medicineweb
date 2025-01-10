import React, { useState } from 'react';
import { Image } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CreateImageButton: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { translations } = useLanguage();

  const handleCreateImage = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleCreateImage}
      disabled={isGenerating}
      className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg border-2 border-gray-200 
        ${isGenerating ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-50'} transition-colors`}
    >
      <Image size={20} className="text-gray-600" />
      <span className="text-gray-600 font-medium">
        {isGenerating ? translations.shop.generating : translations.shop.createImage}
      </span>
    </button>
  );
}

export default CreateImageButton;