import React from 'react';

interface CameraViewProps {
  isVisible: boolean;
}

const CameraView = ({ isVisible }: CameraViewProps) => {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-black rounded-[48px] z-20 overflow-hidden">
      <video 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/doctor-note-scan.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default CameraView;