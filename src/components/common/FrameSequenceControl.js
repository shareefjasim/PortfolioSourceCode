import React, { useState } from 'react';

// Example of generating image paths
// Adjust based on how you stored your images and how many you have
const totalFrames = 200; // Change this to your total number of frames
const imagePath = '/New folder/frame__'; // Adjust the path
const frameImages = Array.from({ length: totalFrames }, (_, index) => 
  `${imagePath}${index}.png`); 

const FrameSequenceControl = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  const handleSliderChange = (event) => {
    setFrameIndex(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <img src={frameImages[frameIndex]} alt={`Frame ${frameIndex}`} />
      <input
        type="range"
        min="0"
        max={totalFrames-1}
        value={frameIndex}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default FrameSequenceControl;
