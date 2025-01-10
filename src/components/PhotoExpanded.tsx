import React, { useEffect } from 'react';
import { Camera, X } from 'lucide-react';

interface PhotoExpandedProps {
  onClose: () => void;
}

const PhotoExpanded = ({ onClose }: PhotoExpandedProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      {/* Sevmi-transparent backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Full viewport container */}
      <div className="relative h-screen w-screen flex items-center justify-center p-8">
        {/* Content container */}
        <div className="flex w-full h-[80vh] max-w-7xl">
          {/* Left side - Expanded photo button */}
          <div className="w-1/2 bg-[#007AFF]/90 backdrop-blur-md rounded-l-3xl flex flex-col items-center justify-center p-12 animate-expand">
            <Camera size={96} className="text-white mb-8" />
            <h2 className="text-4xl font-bold text-white mb-6">Take a Photo</h2>
            <p className="text-white/90 text-center text-lg max-w-lg">
              Use your device's camera to capture clear images of symptoms or medical documents
            </p>
            <button 
              onClick={onClose}
              className="absolute top-8 left-8 text-white hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          {/* Right side - Description */}
          <div className="w-1/2 bg-white/90 backdrop-blur-md rounded-r-3xl p-12 flex flex-col justify-center animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              AI-Powered Photo Analysis
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-blue-100/80 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Quick Capture</h4>
                  <p className="text-gray-600 text-lg">Take clear photos of symptoms, conditions, or medical documents</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-blue-100/80 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Instant Analysis</h4>
                  <p className="text-gray-600 text-lg">Our AI immediately processes your images for preliminary insights</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-blue-100/80 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Review</h4>
                  <p className="text-gray-600 text-lg">Get professional medical opinions based on your uploaded images</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoExpanded;