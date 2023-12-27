// WEAVEPage.js
import React from 'react';
import CustomizableCarousel from '../components/common/CustomizableCarousel'; // Adjust the import path as needed

const WEAVEPage = () => {
  // Carousel images for the diagrams
  const carouselImages = [    
    "/projects/WEAVE/images/renders/Diagrams/Image47.png",
    "/projects/WEAVE/images/renders/Diagrams/Image47_000.png",
    "/projects/WEAVE/images/renders/Diagrams/Image48.png",
    "/projects/WEAVE/images/renders/Diagrams/Image49.png",
    "/projects/WEAVE/images/renders/Diagrams/Image50.png"
  ];

  const projectDescription = (
    <div>
      <p>Aiming for comprehensive integration with nature, the project is located on the lake’s shore extending a wooden deck to reach the other side of the lake. The building with its spaces and circulation pathways offers an enriched experience of the natural environment by easing accessibility and forming multiple viewpoints to appreciate the natural beauty.</p>
      {/* ... include the rest of your text here */}
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen z-0">
 

      {/* Static Images */}
      <img src="/projects/WEAVE/images/renders/Image34_000.png" alt="Image 34" className="w-screen h-screen object-contain object-center" />
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Text appears above the carousel on small screens */}
        <div className="lg:hidden">
          {projectDescription}
        </div>

        {/* Carousel */}
        <div>
          <CustomizableCarousel 
            images={carouselImages} 
            intervalTime={3000} 
            fadeTime={1500} 
            containerHeight="400px"
            enableDarkMode={true}
          />
        </div>

        {/* Text appears beside the carousel on large screens */}
        <div className="hidden lg:block">
          {projectDescription}
        </div>
      </div>

      <img src="/projects/WEAVE/images/Artboard 1.png" alt="Artboard 1" className="w-full h-auto dark:invert" />
      <img src="/projects/WEAVE/images/Artboard Sections.png" alt="Artboard Sections" className="w-full h-auto dark:invert" />

     
      <img src="/projects/WEAVE/images/renders/Image37.png" alt="Image 37" className="w-screen h-screen object-contain object-center" />
      <img src="/projects/WEAVE/images/renders/Image44_000.png" alt="Image 44_000" className="w-screen h-screen object-contain object-center" />
      <img src="/projects/WEAVE/images/renders/Image44.png" alt="Image 44" className="w-screen h-screen object-contain object-center" />
      <img src="/projects/WEAVE/images/renders/Image45.png" alt="Image 45" className="w-screen h-screen object-contain object-center" />
      
     
      {/* Continue with other content and images as needed */}
    </div>
  );
};

export default WEAVEPage;
