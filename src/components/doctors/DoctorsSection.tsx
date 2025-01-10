import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import DoctorsFeature from './DoctorsFeature';
import DoctorsVisual from './DoctorsVisual';

const features = [
  {
    number: 1,
    title: 'Direct Access',
    description: 'Message healthcare providers directly through our secure platform'
  },
  {
    number: 2,
    title: 'Quick Response',
    description: 'Get timely responses from medical professionals for your concerns'
  },
  {
    number: 3,
    title: 'Follow-up Care',
    description: 'Maintain continuous communication for ongoing treatment and care'
  }
];

const DoctorsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div 
      ref={ref}
      className={`content-section w-full bg-gradient-to-b from-white to-gray-50 py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-full">
        <div className="flex flex-wrap items-center -mx-8">
          <DoctorsVisual />
          <div className="w-full lg:w-1/2 px-8 mt-12 lg:mt-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Connect with Medical Professionals
            </h2>
            <div className="space-y-8">
              {features.map((feature) => (
                <DoctorsFeature key={feature.number} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsSection;