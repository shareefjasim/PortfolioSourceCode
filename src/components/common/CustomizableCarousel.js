import React, { useState, useEffect } from 'react';

const CustomizableCarousel = ({
  images,
  intervalTime = 3000,
  fadeTime = 1000,
  containerHeight = "300px",
  containerHeightSm = "150px",
  containerHeightMd = "200px",
  containerHeightLg = "250px",
  containerHeightXl = "300px",
  enableDarkMode = false,
  objectFit = 'cover'
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [responsiveHeight, setResponsiveHeight] = useState(containerHeight);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length, intervalTime]);

  useEffect(() => {
    const updateContainerHeight = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setResponsiveHeight(containerHeightSm);
      } else if (screenWidth >= 640 && screenWidth < 768) {
        setResponsiveHeight(containerHeightMd);
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        setResponsiveHeight(containerHeightLg);
      } else if (screenWidth >= 1024) {
        setResponsiveHeight(containerHeightXl);
      }
    };

    window.addEventListener('resize', updateContainerHeight);
    updateContainerHeight(); // Initial update

    return () => {
      window.removeEventListener('resize', updateContainerHeight);
    };
  }, [containerHeightSm, containerHeightMd, containerHeightLg, containerHeightXl]);

  const imageClasses = (index) => {
    let baseClasses = `absolute w-full h-full transition-opacity duration-${fadeTime} ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`;
    if (enableDarkMode) {
      baseClasses += ' dark:invert';
    }
    baseClasses += ` ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`;
    return baseClasses;
  };

  return (
    <div className="relative w-full" style={{ height: responsiveHeight }}>
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
