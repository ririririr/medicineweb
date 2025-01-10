import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Mail className="text-blue-500" size={24} />
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-600">Ziqian.hong15375-biph@basischina.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="text-blue-500" size={24} />
          <div>
            <h2 className="text-xl font-semibold">Address</h2>
            <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;