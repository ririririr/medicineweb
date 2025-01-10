import React from 'react';
import StatusBar from '../StatusBar';
import DynamicIsland from '../DynamicIsland';
import PhoneFrame from './PhoneFrame';
import PhoneContent from './PhoneContent';

interface HighlightedPhoneProps {
  highlightColor: string;
  buttonPosition: 'left' | 'right-top' | 'right-bottom';
  className?: string;
}

const HighlightedPhone = ({ highlightColor, buttonPosition, className = '' }: HighlightedPhoneProps) => {
  return (
    <PhoneFrame>
      <div className="relative w-full h-full bg-white rounded-[48px] overflow-hidden">
        <StatusBar />
        <DynamicIsland />
        <PhoneContent 
          highlightColor={highlightColor}
          buttonPosition={buttonPosition}
          className={className}
        />
      </div>
    </PhoneFrame>
  );
};

export default HighlightedPhone;