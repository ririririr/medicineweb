import React, { useEffect } from 'react';
import { FileText, X } from 'lucide-react';

interface NotesExpandedProps {
  onClose: () => void;
}

const NotesExpanded = ({ onClose }: NotesExpandedProps) => {
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
          <div className="w-1/2 bg-[#FF9500]/90 backdrop-blur-md rounded-l-3xl flex flex-col items-center justify-center p-12 animate-expand">
            <FileText size={96} className="text-white mb-8" />
            <h2 className="text-4xl font-bold text-white mb-6">Recommended Notes</h2>
            <p className="text-white/90 text-center text-lg max-w-lg">
              Access personalized medical recommendations and treatment notes
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
              Smart Medical Notes
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-orange-100/80 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Personalized Insights</h4>
                  <p className="text-gray-600 text-lg">Get AI-generated recommendations based on your medical history</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-orange-100/80 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Treatment Tracking</h4>
                  <p className="text-gray-600 text-lg">Keep track of your treatment progress and medication schedules</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-orange-100/80 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Health Records</h4>
                  <p className="text-gray-600 text-lg">Access and manage your medical records and doctor's notes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesExpanded;