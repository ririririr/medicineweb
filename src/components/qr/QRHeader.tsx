import React from 'react';
import { QrCode } from 'lucide-react';

const QRHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
        <QrCode size={32} className="text-blue-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Download Medicine AI
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Scan the QR code below with your phone's camera to download our app and start managing your health smarter
      </p>
      
      {/* Removed QR code image */}
    </div>
  );
}

export default QRHeader;