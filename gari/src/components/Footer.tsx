import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center 
      h-[150px] md:h-[180px] lg:h-[200px] p-4">
      <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl">Car Vibe.</h1>
      <span className="text-white text-[8px] md:text-[10px] lg:text-[12px] my-2 md:my-4 lg:my-5">
        &copy;copyright2024
      </span>
    </div>
  );
};

export default Footer;
