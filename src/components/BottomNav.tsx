import React from 'react';
import { Home, User } from 'lucide-react';

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav = ({ currentTab, onTabChange }: BottomNavProps) => {
  return (
    <div className="absolute bottom-6 left-0 right-0 h-16 bg-white border-t border-gray-200 bottom-nav">
      <div className="flex h-full">
        <button 
          className="flex-1 flex flex-col items-center justify-center space-y-1"
          onClick={() => onTabChange('home')}
        >
          <Home size={24} className={currentTab === 'home' ? 'text-[#007AFF]' : 'text-gray-600'} />
          <span className={`text-xs font-medium ${currentTab === 'home' ? 'text-[#007AFF]' : 'text-gray-600'}`}>
            Home
          </span>
        </button>
        <button 
          className="flex-1 flex flex-col items-center justify-center space-y-1"
          onClick={() => onTabChange('account')}
        >
          <User size={24} className={currentTab === 'account' ? 'text-[#007AFF]' : 'text-gray-600'} />
          <span className={`text-xs font-medium ${currentTab === 'account' ? 'text-[#007AFF]' : 'text-gray-600'}`}>
            My Account
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;