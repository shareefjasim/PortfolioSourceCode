import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingComponent = () => {
  const squareRef = useRef(null);

  useEffect(() => {
    const maxSize = Math.max(window.innerWidth, window.innerHeight); // Find the larger dimension
    gsap.set(squareRef.current, {
      width: maxSize, // Set initial width to the larger dimension
      height: maxSize, // Set initial height to the larger dimension
      x: window.innerWidth / 2 - maxSize / 2, // Center horizontally
      y: window.innerHeight / 2 - maxSize / 2, // Center vertically
      opacity:1,
    });

    // Animation to scale down the square
    gsap.to(squareRef.current, {
      width: 24, // Target width matching the cursor
      height: 24, // Target height matching the cursor
      x: window.innerWidth / 2 - 12, // Center the small square horizontally
      y: window.innerHeight / 2 - 12, // Center the small square vertically
      opacity:1,
      duration: 2, // Duration of the animation
      ease: 'power3.inOut',
      onComplete: () => {
        if (squareRef.current) {
          squareRef.current.style.display = 'none';
        }
      }      
    });
  }, []);

  return (
    <div ref={squareRef} className="fixed bg-black dark:bg-white" style={{
      transformOrigin: 'center', // Ensure the scaling happens from the center
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform', // for hardware acceleration
      backfaceVisibility: 'hidden',
      perspective: '1000px',
      zIndex:1000,
    }}></div>
  );
};

export default LoadingComponent;