import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import PillsFeature from './PillsFeature';
import PillsVisual from './PillsVisual';

const features = [
  {
    number: 1,
    title: 'Medication Schedule',
    description: 'Set up and manage your medication schedule with smart reminders'
  },
  {
    number: 2,
    title: 'Drug Information',
    description: 'Access detailed information about your medications and potential interactions'
  },
  {
    number: 3,
    title: 'Refill Tracking',
    description: 'Never run out of medication with automatic refill reminders'
  }
];

const PillsSection = () => {
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
          <div className="w-full lg:w-1/2 px-8 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Smart Medication Management
            </h2>
            <div className="space-y-8">
              {features.map((feature) => (
                <PillsFeature key={feature.number} {...feature} />
              ))}
            </div>
          </div>
          <PillsVisual />
        </div>
      </div>
    </div>
  );
};

export default PillsSection;