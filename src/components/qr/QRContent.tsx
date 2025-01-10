import React from 'react';
import { Smartphone, Apple } from 'lucide-react';
import QRFeatures from './QRFeatures';

const QRContent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://example.com/app"
            alt="QR Code"
            className="w-[300px] h-[300px]"
          />
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Apple size={20} />
              <span>iOS</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2 text-gray-600">
              <Smartphone size={20} />
              <span>Android</span>
            </div>
          </div>
        </div>
      </div>
      
      <QRFeatures />
    </div>
  );
};

export default QRContent;