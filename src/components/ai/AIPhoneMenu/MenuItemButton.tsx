import React from 'react';
import { MenuItem } from './types';

interface MenuItemButtonProps {
  item: MenuItem;
  onShowDescription: (item: MenuItem) => void;
}

export const MenuItemButton: React.FC<MenuItemButtonProps> = ({ item, onShowDescription }) => {
  const Icon = item.icon;
  
  const handleClick = () => {
    if (item.action) {
      item.action();
    } else {
      onShowDescription(item);
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className="w-full p-4 bg-white rounded-xl flex items-center space-x-4 hover:bg-gray-100 transition-colors"
    >
      <Icon size={20} className="text-blue-600" />
      <span className="text-gray-900">{item.label}</span>
    </button>
  );
};