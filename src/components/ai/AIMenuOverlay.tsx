import React from 'react';
import AIMenu from './AIMenu';

interface AIMenuOverlayProps {
  onClose: () => void;
}

const AIMenuOverlay: React.FC<AIMenuOverlayProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-6 md:inset-12 lg:inset-24">
        <div className="bg-white rounded-3xl shadow-2xl h-full overflow-hidden">
          <AIMenu onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default AIMenuOverlay;