import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="relative w-[320px] h-[650px] bg-black rounded-[55px] shadow-2xl p-3 border-[8px] border-black transform transition-transform hover:scale-105">
      {children}
      
      {/* Side Buttons */}
      <div className="absolute -right-[4px] top-24 h-8 w-[4px] bg-gray-700 rounded-r-lg"></div>
      <div className="absolute -right-[4px] top-36 h-12 w-[4px] bg-gray-700 rounded-r-lg"></div>
      <div className="absolute -left-[4px] top-24 h-16 w-[4px] bg-gray-700 rounded-l-lg"></div>
      
      {/* Bottom Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
    </div>
  );
};

export default PhoneFrame;