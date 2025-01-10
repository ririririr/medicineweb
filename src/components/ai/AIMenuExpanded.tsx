import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { MenuItem } from './AIPhoneMenu/types';

interface AIMenuExpandedProps {
  item: MenuItem;
  onClose: () => void;
}

const AIMenuExpanded: React.FC<AIMenuExpandedProps> = ({ item, onClose }) => {
  const Icon = item.icon;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="relative h-screen w-screen flex items-center justify-center p-8">
        <div className="flex w-full h-[80vh] max-w-7xl">
          <div className="w-1/2 bg-blue-500/90 backdrop-blur-md rounded-l-3xl flex flex-col items-center justify-center p-12 animate-expand">
            <Icon size={96} className="text-white mb-8" />
            <h2 className="text-4xl font-bold text-white mb-6">{item.label}</h2>
            <p className="text-white/90 text-center text-lg max-w-lg">
              {item.description}
            </p>
            <button 
              onClick={onClose}
              className="absolute top-8 left-8 text-white hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <div className="w-1/2 bg-white/90 backdrop-blur-md rounded-r-3xl p-12 flex flex-col justify-center animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Key Features
            </h3>
            <div className="space-y-8">
              {item.features?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100/80 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMenuExpanded;