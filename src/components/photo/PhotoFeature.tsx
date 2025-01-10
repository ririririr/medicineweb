import React from 'react';

interface PhotoFeatureProps {
  number: number;
  title: string;
  description: string;
}

const PhotoFeature = ({ number, title, description }: PhotoFeatureProps) => (
  <div className="flex items-start space-x-6">
    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
      <span className="text-blue-600 font-bold text-xl">{number}</span>
    </div>
    <div>
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  </div>
);

export default PhotoFeature;