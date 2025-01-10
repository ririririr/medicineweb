import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import NotesFeature from './NotesFeature';
import NotesVisual from './NotesVisual';

const features = [
  {
    number: 1,
    title: 'Personalized Insights',
    description: 'Get AI-generated recommendations based on your medical history'
  },
  {
    number: 2,
    title: 'Treatment Tracking',
    description: 'Keep track of your treatment progress and medication schedules'
  },
  {
    number: 3,
    title: 'Health Records',
    description: 'Access and manage your medical records and doctor\'s notes'
  }
];

const NotesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div 
      ref={ref}
      className={`content-section w-full bg-gradient-to-b from-gray-50 to-white py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-full">
        <div className="flex flex-wrap items-center -mx-8">
          <div className="w-full lg:w-1/2 px-8 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Smart Medical Notes
            </h2>
            <div className="space-y-8">
              {features.map((feature) => (
                <NotesFeature key={feature.number} {...feature} />
              ))}
            </div>
          </div>
          <NotesVisual />
        </div>
      </div>
    </div>
  );
};

export default NotesSection;