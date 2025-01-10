import React from 'react';
import { X } from 'lucide-react';

interface QRModalProps {
  onClose: () => void;
}

const QRModal: React.FC<QRModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Our App</h2>
        <p className="text-gray-600 mb-6">Scan this QR code with your phone's camera to download the Medicine AI app</p>
        
        {/* Removed QR code image */}
        
        <p className="text-sm text-gray-500 text-center">
          Available for iOS and Android devices
        </p>
      </div>
    </div>
  );
};

export default QRModal;