import React from 'react';

const Loader = ({ progress }) => {
  if (progress <= 0 || progress >= 100) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div 
        className="h-full bg-teal-600 transition-all duration-500 ease-out shadow-[0_0_8px_#0d9488]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default Loader;
