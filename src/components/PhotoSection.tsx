import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScrollResistance } from '../hooks/useScrollResistance';
import PhotoFeature from './photo/PhotoFeature';
import PhotoVisual from './photo/PhotoVisual';

const features = [
  {
    number: 1,
    title: 'Quick Capture',
    description: 'Take clear photos of symptoms, conditions, or medical documents'
  },
  {
    number: 2,
    title: 'Instant Analysis',
    description: 'Our AI immediately processes your images for preliminary insights'
  },
  {
    number: 3,
    title: 'Expert Review',
    description: 'Get professional medical opinions based on your uploaded images'
  }
];

const PhotoSection = () => {
  const { ref: revealRef, isVisible } = useScrollReveal();
  const resistanceRef = useScrollResistance();

  return (
    <div 
      ref={(el) => {
        if (el) {
          // @ts-ignore - TypeScript doesn't support multiple refs
          revealRef.current = el;
          // @ts-ignore
          resistanceRef.current = el;
        }
      }}
      className={`content-section w-full bg-gradient-to-b from-gray-100 to-white py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-full">
        <div className="flex flex-wrap items-center -mx-8">
          {/* Left side - Description */}
          <div className="w-full lg:w-1/2 px-8 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AI-Powered Photo Analysis
            </h2>
            <div className="space-y-8">
              {features.map((feature) => (
                <PhotoFeature key={feature.number} {...feature} />
              ))}
            </div>
          </div>

          <PhotoVisual />
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;