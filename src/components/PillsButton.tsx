import React from 'react';
import { Pill } from 'lucide-react';

const PillsButton = () => {
  return (
    <button 
      className="absolute top-12 left-6 right-[calc(50%+8px)] h-[calc(50%-24px)] bg-purple-500 text-white rounded-2xl flex flex-col items-center justify-center hover:bg-purple-600 transition-colors z-20"
    >
      <Pill size={28} />
      <span className="text-sm font-medium mt-2">Pills</span>
    </button>
  );
};

export default PillsButton;