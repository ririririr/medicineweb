import React from 'react';
import { FileText, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

const AIBrief = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Technology Brief</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of our AI capabilities and limitations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Capabilities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Advanced pattern recognition in medical data</li>
                  <li>• Real-time analysis of symptoms</li>
                  <li>• Medication interaction checking</li>
                  <li>• Personalized health recommendations</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Limitations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Not a replacement for professional medical advice</li>
                  <li>• Requires human verification for critical decisions</li>
                  <li>• Limited to trained medical conditions</li>
                  <li>• Dependent on data quality and availability</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <HelpCircle size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Use Guidelines</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Always consult healthcare professionals for medical decisions</li>
                  <li>• Use as a supplementary tool for health management</li>
                  <li>• Regular updates of personal health information</li>
                  <li>• Follow recommended security practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBrief;