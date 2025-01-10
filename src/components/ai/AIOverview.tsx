import React from 'react';
import { Brain, Shield, Watch, ClipboardList } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Medicine Management',
    description: 'Upload and identify medicines through our smart medicine identification AI. Advanced models generate personalized medicine reminders by analyzing medication adherence patterns and comprehensive health profiles, ensuring optimal timing and improved compliance'
  },
  {
    icon: Watch,
    title: 'AI Watch Integration',
    description: 'Innovative wearable technology seamlessly integrated with our app, keeping users up to date with their current health conditions. Monitors health metrics and provides real-time insights for enhanced patient care'
  },
  {
    icon: Shield,
    title: 'Personalized Healthcare Assistant',
    description: 'An intelligent healthcare assistant powered by ChatGPT that generates exercise and dietary suggestions, while providing comprehensive answers to health-related inquiries'
  },
  {
    icon: ClipboardList,
    title: 'Health Record Keeping and Communication',
    description: 'Comprehensive health tracking system that maintains daily records and keeps healthcare providers and guardians informed about medication adherence and health status'
  }
];

const AIOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Medicine AI Overview</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Revolutionizing healthcare with intelligent technology and personalized care
          </p>
          
          <div className="max-w-2xl mx-auto mb-16">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <video
                src="/videos/output_video.mp4"
                className="w-full aspect-video bg-gray-100 object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AIOverview;