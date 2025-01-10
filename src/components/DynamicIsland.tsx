import React from 'react';

const DynamicIsland = () => {
  return (
    <div className="absolute left-1/2 top-2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-[24px] z-30">
      <div className="absolute left-[22px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-[#1a1a1a]"></div>
      <div className="absolute right-[22px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500"></div>
    </div>
  );
};

export default DynamicIsland;