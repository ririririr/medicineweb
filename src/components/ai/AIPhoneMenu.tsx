import React from 'react';
import { Brain, Heart, Pill, Database, User, ArrowLeft } from 'lucide-react';

interface AIPhoneMenuProps {
  onClose: () => void;
}

const menuItems = [
  { icon: Brain, label: 'AI Dietary and Lifestyle Suggestions' },
  { icon: Heart, label: 'AI Health Description' },
  { icon: Pill, label: 'AI Medicine Information' },
  { icon: Database, label: 'AI Medical Database Inquiries' },
  { icon: User, label: 'About Me AI' }
];

const AIPhoneMenu: React.FC<AIPhoneMenuProps> = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col bg-gray-50 pt-12">
      <div className="px-6 py-4 flex items-center border-b bg-white">
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h2 className="ml-3 text-xl font-semibold text-gray-900">AI Assistant</h2>
      </div>
      
      <div className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="w-full p-4 bg-white rounded-xl flex items-center space-x-4 hover:bg-gray-100 transition-colors"
              >
                <Icon size={20} className="text-blue-600" />
                <span className="text-gray-900">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AIPhoneMenu;