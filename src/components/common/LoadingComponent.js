// LoadingComponent.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingComponent = () => {
  const squareRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animation for the square
    gsap.to(squareRef.current, {
      scale: 1.8,
      opacity: 0.5,
      duration: 0.8,
      repeat: -1, // Infinite repeat
      yoyo: true, // Reverse the animation
      ease: 'power2.inOut'
    });

    // Calculate when to start fading out the background
    // For example, after 10 seconds (repeat the animation 12.5 times)
   // Start 1 second before the animation ends
  }, []);

  return (
    <div ref={containerRef} className="w-screen h-screen flex justify-center  bg-white dark:bg-black">
      <div ref={squareRef} className="bg-black dark:bg-white w-6 h-6" style={{ 
         position: 'absolute',
             top: '50%', 
             left: '50%', 
             width: '24px',
             height: '24px',
             opacity: 1,
             transform: 'translate(-50%, -50%)' 
        }}></div>
    </div>
  );
};

export default LoadingComponent;
