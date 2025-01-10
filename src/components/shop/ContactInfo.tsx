import React from 'react';
import { Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Interested in Medicine AI+?
      </h3>
      
      <div className="flex justify-center">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="text-blue-600" size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Email</h4>
            <a 
              href="mailto:Ziqian.hong15375-biph@basischina.com" 
              className="text-blue-600 hover:text-blue-700"
            >
              Ziqian.hong15375-biph@basischina.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;