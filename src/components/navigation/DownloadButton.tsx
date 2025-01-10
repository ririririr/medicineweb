import React from 'react';
import { QrCode } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface DownloadButtonProps {
  onClick: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => {
  const { translations } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
    >
      <QrCode size={20} />
      <span>{translations.nav.download}</span>
    </button>
  );
};

export default DownloadButton;