import React from 'react';
import { Camera, MessageCircle, FileText, Pill } from 'lucide-react';
import { getHighlightClass } from '../../utils/phoneUtils';

interface PhoneContentProps {
  highlightColor: string;
  buttonPosition: 'left' | 'right-top' | 'right-bottom';
  className?: string;
}

const PhoneContent: React.FC<PhoneContentProps> = ({ highlightColor, buttonPosition, className = '' }) => {
  return (
    <div className="h-full flex flex-col relative p-6 pb-12">
      {/* Top Half */}
      <div className="h-[42%] relative">
        {/* Pills Button */}
        <div className="absolute inset-0 bg-purple-500 text-white rounded-2xl flex flex-col items-center justify-center">
          <Pill size={28} />
          <span className="text-sm font-medium mt-2">Pills</span>
        </div>
      </div>
      
      {/* Bottom Half - Buttons */}
      <div className="h-[42%] mt-8 grid grid-cols-2 gap-4">
        {/* Take Photo - Large Button */}
        <div className={`relative col-span-1 h-full ${buttonPosition === 'left' ? 'z-10' : ''}`}>
          <div className={getHighlightClass(buttonPosition, 'left', highlightColor, className)} />
          <div className="w-full h-full bg-[#007AFF] text-white rounded-2xl flex flex-col items-center justify-center space-y-2">
            <Camera size={28} />
            <span className="text-sm font-medium text-center">Take Photo</span>
          </div>
        </div>

        {/* Right Column - Stacked Buttons */}
        <div className="col-span-1 flex flex-col space-y-4 h-full">
          <div className={`relative flex-1 ${buttonPosition === 'right-top' ? 'z-10' : ''}`}>
            <div className={getHighlightClass(buttonPosition, 'right-top', highlightColor, className)} />
            <div className="w-full h-full bg-[#34C759] text-white rounded-2xl flex flex-col items-center justify-center space-y-2">
              <MessageCircle size={24} />
              <span className="text-sm font-medium text-center px-2">Doctors Conversations</span>
            </div>
          </div>
          <div className={`relative flex-1 ${buttonPosition === 'right-bottom' ? 'z-10' : ''}`}>
            <div className={getHighlightClass(buttonPosition, 'right-bottom', highlightColor, className)} />
            <div className="w-full h-full bg-[#FF9500] text-white rounded-2xl flex flex-col items-center justify-center space-y-2">
              <FileText size={24} />
              <span className="text-sm font-medium text-center px-2">Recommended Notes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneContent;