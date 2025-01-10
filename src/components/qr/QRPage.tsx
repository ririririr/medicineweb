import React from 'react';
import QRContent from './QRContent';
import QRHeader from './QRHeader';

const QRPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-24 snap-section">
      <div className="max-w-4xl mx-auto px-4">
        <QRHeader />
        <QRContent />
      </div>
    </div>
  );
};

export default QRPage;