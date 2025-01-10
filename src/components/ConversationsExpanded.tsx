import React, { useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface ConversationsExpandedProps {
  onClose: () => void;
}

const ConversationsExpanded = ({ onClose }: ConversationsExpandedProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="relative h-screen w-screen flex items-center justify-center p-8">
        <div className="flex w-full h-[80vh] max-w-7xl">
          <div className="w-1/2 bg-[#34C759]/90 backdrop-blur-md rounded-l-3xl flex flex-col items-center justify-center p-12 animate-expand">
            <MessageCircle size={96} className="text-white mb-8" />
            <h2 className="text-4xl font-bold text-white mb-6">Doctor Conversations</h2>
            <p className="text-white/90 text-center text-lg max-w-lg">
              Connect with healthcare professionals through secure messaging and consultations
            </p>
            <button 
              onClick={onClose}
              className="absolute top-8 left-8 text-white hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <div className="w-1/2 bg-white/90 backdrop-blur-md rounded-r-3xl p-12 flex flex-col justify-center animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Secure Medical Communication
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-green-100/80 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Direct Access</h4>
                  <p className="text-gray-600 text-lg">Message healthcare providers directly through our secure platform</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-green-100/80 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h4>
                  <p className="text-gray-600 text-lg">Get timely responses from medical professionals for your concerns</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-green-100/80 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Follow-up Care</h4>
                  <p className="text-gray-600 text-lg">Maintain continuous communication for ongoing treatment and care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationsExpanded;