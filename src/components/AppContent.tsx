import React, { useState } from 'react';
import BottomNav from './BottomNav';
import HomeScreen from './HomeScreen';
import FloatingAIButton from './ai/FloatingAIButton';
import AIPhoneMenu from './ai/AIPhoneMenu';
import AccountView from './account/AccountView';

const AppContent = () => {
  const [currentTab, setCurrentTab] = useState('home');
  const [showAIMenu, setShowAIMenu] = useState(false);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    setShowAIMenu(false);
  };

  const renderContent = () => {
    if (showAIMenu) {
      return (
        <AIPhoneMenu 
          onClose={() => setShowAIMenu(false)} 
          onTabChange={handleTabChange}
        />
      );
    }

    switch (currentTab) {
      case 'home':
        return <HomeScreen />;
      case 'account':
        return <AccountView />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="relative h-full">
      {renderContent()}
      {!showAIMenu && (
        <FloatingAIButton onOpenMenu={() => setShowAIMenu(true)} />
      )}
      <BottomNav currentTab={currentTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default AppContent;