import React from 'react';
import { MenuItem } from './types';
import { MenuItemButton } from './MenuItemButton';

interface MenuItemsProps {
  items: MenuItem[];
  onShowDescription: (item: MenuItem) => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ items, onShowDescription }) => {
  return (
    <div className="p-4">
      <div className="space-y-4">
        {items.map((item: MenuItem, index: number) => (
          <MenuItemButton 
            key={index} 
            item={item} 
            onShowDescription={onShowDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;