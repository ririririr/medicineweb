import React, { useState } from 'react';
import MenuHeader from './MenuHeader';
import MenuItems from './MenuItems';
import { useAIMenu } from '../../../hooks/useAIMenu';
import { MenuItem } from './types';
import AIMenuExpanded from '../AIMenuExpanded';

interface AIPhoneMenuProps {
  onClose: () => void;
  onTabChange: (tab: string) => void;
}

const AIPhoneMenu: React.FC<AIPhoneMenuProps> = ({ onClose, onTabChange }) => {
  const menuItems = useAIMenu(onClose, onTabChange);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleShowDescription = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleCloseDescription = () => {
    setSelectedItem(null);
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="pt-12">
        <MenuHeader onClose={onClose} />
      </div>
      <div className="flex-1 overflow-y-auto pb-20">
        <MenuItems 
          items={menuItems} 
          onShowDescription={handleShowDescription}
        />
      </div>
      {selectedItem && (
        <AIMenuExpanded 
          item={selectedItem} 
          onClose={handleCloseDescription}
        />
      )}
    </div>
  );
};

export default AIPhoneMenu;