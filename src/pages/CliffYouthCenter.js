// CliffYouthCenterPage.js
import React from 'react';
import CustomizableCarousel from '../components/common/CustomizableCarousel'; // Ensure the path is correct

const CliffYouthCenterPage = () => {
  // Carousel images
  const carouselImages = [
    "/projects/Cliff Youth Center/images/From Portfolio Pdf1.png",
    "/projects/Cliff Youth Center/images/From Portfolio Pdf2.png",
    "/projects/Cliff Youth Center/images/From Portfolio Pdf3.png",
    "/projects/Cliff Youth Center/images/From Portfolio Pd4f.png"
  ];

  const projectScope = (
    <div>
      <p>The underutilized potential of an urban node that could be turned into an attraction viable site where pedestrian circulation is enhanced and the potential of the urban node could be realized into a social function in adjacency to the rainwater canal and the rocky cliff topography.</p>
      <p>The project was initiated to make use of that urban node by forming a public library and youth center to attract citizens for a social interactive environment. as well as responding to the water canal by providing a ramp that crosses over it providing a separate path for pedestrians rather than having their path with the cars’ road.</p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen z-0">
     
      {/* Project Scope */}
     

      {/* Other Images */}
      <img src="/projects/Cliff Youth Center/images/Image10.png" alt="Image10" className="w-full h-auto dark:invert" />
      <div className="mb-6">
        {projectScope}
      </div>

      {/* Carousel */}
      <div className="mb-6">
        <CustomizableCarousel 
          images={carouselImages} 
          intervalTime={3000} 
          fadeTime={1500} 
          containerHeight="400px"
          enableDarkMode={true}
        />
      </div>
        <img src="/projects/Cliff Youth Center/images/Animated Graph.gif" alt="Animated Graph" className="w-full h-auto dark:invert" />
        <img src="/projects/Cliff Youth Center/images/Animated Mesh.gif" alt="Animated Mesh" className="w-full h-auto dark:invert" />
        <img src="/projects/Cliff Youth Center/images/Animated Parameters.gif" alt="Animated Parameters" className="w-full h-auto dark:invert" />
        
        <img src="/projects/Cliff Youth Center/images/Facade system Form Page from portfolio.png" alt="Facade System Form" className="w-full h-auto dark:invert" />
        
        <img src="/projects/Cliff Youth Center/images/Better detail 1 .jpg" alt="Detail 1" className="w-full h-auto dark:invert" />
        <img src="/projects/Cliff Youth Center/images/Better detail 2.jpg" alt="Detail 2" className="w-full h-auto dark:invert" />
        
        <img src="/projects/Cliff Youth Center/images/Facade system Only  from portfolio.png" alt="Facade System Only" className="w-full h-auto dark:invert" />
        <img src="/projects/Cliff Youth Center/images/Louvers only Page from portfolio.png" alt="Louvers Only" className="w-full h-auto dark:invert" />

        
        <img src="/projects/Cliff Youth Center/images/last plan.jpg" alt="Last Plan" className="w-full h-auto dark:invert" />
        <img src="/projects/Cliff Youth Center/images/last section.jpg" alt="Last Section" className="w-full h-auto dark:invert" />
        <img src="/projects/Cliff Youth Center/images/last site plan.jpg" alt="Last Site Plan" className="w-full h-auto dark:invert" />

        <img src="/projects/Cliff Youth Center/images/Image5_002.png" alt="Image5_002" className="w-full h-auto dark:invert" />
        <img src="/projects/Cliff Youth Center/images/Image10_000.png" alt="Image5_002" className="w-full h-auto dark:invert" />


      {/* Continue with other content and images as needed */}
    </div>
  );
};

export default CliffYouthCenterPage;
