import React from 'react';

const LandingGrid = ({ spacing = 24 }) => {
  // Convert pixel spacing to Tailwind-compatible string
  const getSpacingClass = (pixelValue) => {
    // We'll use inline styles since we're using a specific pixel value
    return { gap: `${pixelValue}px` };
  };

  return (
    <div 
      className="w-full px-6 grid grid-cols-10 h-screen-36" 
      style={getSpacingClass(spacing)}
    >
      {/* Group 1: Column 1 with squares */}
      <div className="col-span-1 grid min-w-0 overflow-y-auto" style={getSpacingClass(spacing)}>
  <div className="bg-black w-full aspect-square max-w-full"></div>
  <div className="bg-black w-full aspect-square max-w-full"></div>
  <div className="bg-black w-full aspect-square max-w-full"></div>
  <div className="bg-black w-full aspect-square max-w-full"></div>
</div>

      
      {/* Group 2: Columns 2-3 merged */}
      <div className="col-span-2 grid" style={getSpacingClass(spacing)}>
        <div className="bg-black w-full aspect-square"></div>
        <div className="bg-black w-full aspect-square"></div>
      </div>
      
      {/* Group 3: Columns 4-5 merged */}
      <div className="col-span-2 grid" style={getSpacingClass(spacing)}>
        <div className="bg-black w-full aspect-square"></div>
        <div className="bg-black w-full aspect-square"></div>
      </div>
      
      {/* Group 4: Columns 6-10 merged into one large square */}
      <div className="col-span-5">
        <div className="bg-black w-full aspect-square"></div>
      </div>
    </div>
  );
};

export default LandingGrid;