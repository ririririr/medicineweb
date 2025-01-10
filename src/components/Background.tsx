import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <img 
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
        alt="Medical background" 
        className="w-full h-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-gray-50/90 to-blue-50/80 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;