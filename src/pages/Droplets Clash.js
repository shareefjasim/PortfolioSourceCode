// DropletsClashPage.js
import React from 'react';

const images = [
  // Add all the image paths here
  "public/projects/4D Droplets Clash/images/Model Images/20161121_062135-1.jpg",
  "public/projects/4D Droplets Clash/images/Model Images/20161121_062135.jpg",
  // ... add all other image paths
];

const DropletsClashPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="mb-6">
        Water droplets form clashing rings of waves that are observed from the 3D world on the 2D water surface. How would a being from the 4D World see droplets clash in the 3D water?
        This question requires imagining how droplets would drop into existence in a 3D water Volume.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`4D Droplets Clash ${index}`} 
            className="w-full h-auto object-cover mb-4"
          />
        ))}
      </div>
    </div>
  );
};

export default DropletsClashPage;
