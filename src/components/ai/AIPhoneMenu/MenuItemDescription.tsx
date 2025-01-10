import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemDescriptionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const MenuItemDescription: React.FC<MenuItemDescriptionProps> = ({
  icon: Icon,
  title,
  description,
  features
}) => {
  return (
    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-xs font-medium">{index + 1}</span>
            </div>
            <p className="text-gray-700 text-sm">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemDescription;