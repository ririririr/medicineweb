import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface MenuHeaderProps {
  onClose: () => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ onClose }) => {
  return (
    <div className="px-6 py-4 flex items-center border-b bg-white">
      <button 
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft size={24} className="text-gray-600" />
      </button>
      <h2 className="ml-3 text-xl font-semibold text-gray-900">AI Assistant</h2>
    </div>
  );
};

export default MenuHeader;