import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ModelCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ModelCard: React.FC<ModelCardProps> = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
        <Icon size={24} className="text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-600 text-xs font-medium">{index + 1}</span>
            </span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};