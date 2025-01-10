import React from 'react';
import { Check, X } from 'lucide-react';

const features = [
  {
    name: 'Health Tracking',
    free: 'Basic health tracking',
    plus: 'Advanced health tracking with AI insights'
  },
  {
    name: 'Medicine Upload',
    free: 'Manual medicine upload',
    plus: 'Smart upload through medicine image identification'
  },
  {
    name: 'Health Records',
    free: 'Basic health record and storage',
    plus: 'Health record through voice and videos'
  },
  {
    name: 'AI Health Suggestions',
    free: '5 AI health suggestions per day',
    plus: 'Unlimited AI health suggestions'
  },
  {
    name: 'Family Sharing',
    free: 'Share with 1 family member',
    plus: 'Share with unlimited family members'
  }
];

const ProductComparison = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-gradient-to-r from-green-700 to-green-400">
        <h2 className="text-2xl font-semibold text-white">Medicine AI+ vs Free</h2>
      </div>
      
      <div className="px-6 py-4">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="py-4 text-left text-gray-900 font-bold">Features</th>
              <th className="py-4 text-center text-gray-600">Free</th>
              <th className="py-4 text-center text-green-600 font-bold text-lg">
                AI+ ($9.99/month)
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr 
                key={index}
                className={`${index !== features.length - 1 ? 'border-b' : ''} hover:bg-gray-50 transition-colors`}
              >
                <td className="py-4 text-gray-700 font-medium">{feature.name}</td>
                <td className="py-4 text-center text-sm text-gray-500">{feature.free}</td>
                <td className="py-4 text-center text-sm font-medium text-green-600">{feature.plus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductComparison;