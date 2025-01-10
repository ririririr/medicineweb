import React from 'react';
import { Watch, Heart, Activity, Bell, Zap } from 'lucide-react';

const AIWatch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Medicine AI Watch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your personal health companion on your wrist
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Watch size={24} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Smart Health Monitoring</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Experience continuous health tracking and real-time AI-powered insights with our advanced smartwatch technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Heart size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Heart Rate Monitoring</h3>
              <p className="text-gray-600">Continuous heart rate tracking with AI-powered anomaly detection</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Activity size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Activity Tracking</h3>
              <p className="text-gray-600">Smart activity recognition and personalized fitness recommendations</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Bell size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Alerts</h3>
              <p className="text-gray-600">Instant notifications for important health events and medication reminders</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analysis</h3>
              <p className="text-gray-600">Continuous health data analysis with AI-powered insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWatch;