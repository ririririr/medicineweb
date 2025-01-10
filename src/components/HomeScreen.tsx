import React, { useState } from 'react';
import { Camera, MessageCircle, FileText, Pill } from 'lucide-react';
import PhotoExpanded from './PhotoExpanded';
import ConversationsExpanded from './ConversationsExpanded';
import NotesExpanded from './NotesExpanded';
import PillsExpanded from './pills/PillsExpanded';

const HomeScreen = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const renderExpandedView = () => {
    switch (expandedFeature) {
      case 'photo':
        return <PhotoExpanded onClose={() => setExpandedFeature(null)} />;
      case 'conversations':
        return <ConversationsExpanded onClose={() => setExpandedFeature(null)} />;
      case 'notes':
        return <NotesExpanded onClose={() => setExpandedFeature(null)} />;
      case 'pills':
        return <PillsExpanded onClose={() => setExpandedFeature(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col relative p-6 pb-12">
      {/* Top Half */}
      <div className="h-[42%] relative">
        {/* Pills Button */}
        <button 
          onClick={() => setExpandedFeature('pills')}
          className="absolute inset-0 bg-purple-500 text-white rounded-2xl flex flex-col items-center justify-center hover:bg-purple-600 transition-colors"
        >
          <Pill size={28} />
          <span className="text-sm font-medium mt-2">Pills</span>
        </button>
      </div>
      
      {/* Bottom Half - Buttons */}
      <div className="h-[42%] mt-8 grid grid-cols-2 gap-4">
        {/* Take Photo - Large Button */}
        <button 
          onClick={() => setExpandedFeature('photo')}
          className="col-span-1 h-full bg-[#007AFF] text-white rounded-2xl flex flex-col items-center justify-center space-y-2 hover:bg-[#0071EB] transition-colors"
        >
          <Camera size={28} />
          <span className="text-sm font-medium">Take Photo</span>
        </button>

        {/* Right Column - Stacked Buttons */}
        <div className="col-span-1 flex flex-col space-y-4 h-full">
          <button 
            onClick={() => setExpandedFeature('conversations')}
            className="flex-1 bg-[#34C759] text-white rounded-2xl flex flex-col items-center justify-center space-y-2 hover:bg-[#30B753] transition-colors"
          >
            <MessageCircle size={24} />
            <span className="text-sm font-medium">Doctors Conversations</span>
          </button>
          
          <button 
            onClick={() => setExpandedFeature('notes')}
            className="flex-1 bg-[#FF9500] text-white rounded-2xl flex flex-col items-center justify-center space-y-2 hover:bg-[#F58E00] transition-colors"
          >
            <FileText size={24} />
            <span className="text-sm font-medium">Recommended Notes</span>
          </button>
        </div>
      </div>

      {renderExpandedView()}
    </div>
  );
};

export default HomeScreen;