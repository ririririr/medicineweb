import React from 'react';
import { Brain, Shield, Watch, ClipboardList } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Medicine Management',
    description: 'Upload and identify medicines through our smart medicine identification AI. Advanced models generate personalized medicine reminders by analyzing medication adherence patterns and comprehensive health profiles.'
  },
  {
    icon: Watch,
    title: 'AI Watch Integration',
    description: 'Innovative wearable technology seamlessly integrated with our app, keeping users up to date with their current health conditions. Monitors health metrics and provides real-time insights.'
  },
  {
    icon: Shield,
    title: 'Personalized Healthcare Assistant',
    description: 'An intelligent healthcare assistant powered by ChatGPT that generates exercise and dietary suggestions, while providing comprehensive answers to health-related inquiries.'
  },
  {
    icon: ClipboardList,
    title: 'Health Record Management',
    description: 'Comprehensive health tracking system that maintains daily records and keeps healthcare providers and guardians informed about medication adherence and health status.'
  }
];

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Full-width video header */}
      <div className="w-full h-screen relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/medicinephone.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center">
            Revolutionizing Healthcare
          </h1>
        </div>
      </div>

      {/* Features section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;