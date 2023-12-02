import React, { useState, useEffect } from 'react';

const CustomizableCarousel = ({ images, intervalTime = 3000, fadeTime = 1000, containerHeight, enableDarkMode = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length, intervalTime]);

  const imageClasses = (index) => {
    let baseClasses = `absolute w-full h-full object-cover transition-opacity duration-${fadeTime} ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`;
    if (enableDarkMode) {
      baseClasses += `dark:invert absolute w-full h-full object-cover transition-opacity duration-${fadeTime} ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`;
    }
    return baseClasses;
  };


  return (
    <div className="relative w-full" style={{ height: containerHeight }}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Slide ${index}`}
          className={imageClasses(index)}
          style={{ transitionDuration: `${fadeTime}ms` }}
        />
      ))}
    </div>
  );
};

export default CustomizableCarousel;
