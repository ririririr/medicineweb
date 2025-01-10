import React from 'react';
import { Sparkles } from 'lucide-react';

const AIPlusOverview = () => {
  return (
    <div className="bg-gradient-to-r from-green-700 to-green-400 rounded-xl p-8 text-white mb-8">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Sparkles size={24} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Medicine AI+</h2>
          <p className="text-lg text-white/90">
            Unlock premium AI features, including personalized AI health suggestions, AI reminders, and more!
            Experience healthcare reimagined with advanced artificial intelligence tailored to individual needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIPlusOverview;