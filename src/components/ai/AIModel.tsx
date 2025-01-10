import React from 'react';
import { Bell, Brain, Camera } from 'lucide-react';
import ModelCard from './models/ModelCard';

const models = [
  {
    icon: Bell,
    title: 'Smart Medicine Reminder',
    description: 'Personalized medicine reminders that adapt to your habits and schedule.',
    features: [
      'Learns from past medication adherence patterns',
      'Adjusts reminder timing based on user behavior',
      'Predicts optimal reminder times',
      'Tracks medication compliance history'
    ]
  },
  {
    icon: Brain,
    title: 'Health Profile AI Assistant',
    description: 'An extractive AI model powered by ChatGPT that provides personalized health insights by analyzing your complete health profile.',
    features: [
      'Analyzes your complete health record and history',
      'Answers health-related questions using your personal data',
      'Provides evidence-based lifestyle recommendations',
      'Generates personalized health insights and suggestions'
    ]
  },
  {
    icon: Camera,
    title: 'Medicine Identification',
    description: 'Advanced visual recognition system trained on a comprehensive pill packaging dataset gathered from various trusted pharmaceutical sources.',
    features: [
      'Trained on extensive pill packaging database',
      'Real-time medication identification',
      'Detailed drug information lookup',
      'Cross-reference with known medications'
    ]
  }
];

const AIModel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our AI Models</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced machine learning models designed to enhance your healthcare experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIModel;