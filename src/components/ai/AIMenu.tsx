import React from 'react';
import { Brain, Heart, Pill, Database, User, X } from 'lucide-react';
import AIMenuItem from './AIMenuItem';

interface AIMenuProps {
  onClose: () => void;
}

const menuItems = [
  {
    icon: Brain,
    title: 'AI Dietary and Lifestyle Suggestions',
    description: 'Get personalized recommendations for a healthier life'
  },
  {
    icon: Heart,
    title: 'AI Health Description',
    description: 'Understand your health status and potential improvements'
  },
  {
    icon: Pill,
    title: 'AI Medicine Information',
    description: 'Learn about medications and their effects'
  },
  {
    icon: Database,
    title: 'AI Medical Database Inquiries',
    description: 'Search and analyze medical data'
  },
  {
    icon: User,
    title: 'About Me AI',
    description: 'Your personal health profile and history'
  }
];

const AIMenu: React.FC<AIMenuProps> = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Assistant</h2>
          <p className="text-gray-600">Select an option to get started</p>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>
      </div>
      
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <AIMenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIMenu;