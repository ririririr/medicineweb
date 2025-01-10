import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AIMenuItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AIMenuItem: React.FC<AIMenuItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <button className="w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left flex items-start space-x-4 group">
      <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
        <Icon size={24} className="text-blue-600" />
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </button>
  );
};

export default AIMenuItem;