import React, { useState } from 'react';

const QRDropdown = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative">
      <button 
        onClick={handleToggleDropdown} 
        className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
      >
        Download App
      </button>
      {isDropdownVisible && (
        <div className="absolute mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
          <img 
            src="/qr.png" 
            alt="QR Code" 
            className="w-full h-auto p-4"
          />
        </div>
      )}
    </div>
  );
};

export default QRDropdown;
