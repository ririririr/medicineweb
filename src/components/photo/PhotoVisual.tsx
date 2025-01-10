import React, { useState, useEffect } from 'react';
import HighlightedPhone from '../phone/HighlightedPhone';
import CameraView from './CameraView';

const PhotoVisual = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setTimeout(() => setShowCamera(true), 1000);
        } else {
          setShowCamera(false);
        }
      },
      {
        threshold: 0.7,
      }
    );

    const element = document.querySelector('.photo-visual');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="w-full lg:w-1/2 flex justify-center photo-visual">
      <div className="relative">
        <HighlightedPhone 
          highlightColor="blue-500" 
          buttonPosition="left"
          className={isInView ? 'animate-pulse' : ''}
        />
        <CameraView isVisible={showCamera} />
      </div>
    </div>
  );
}

export default PhotoVisual;