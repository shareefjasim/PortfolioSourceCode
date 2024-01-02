// CliffYouthCenterPage.js
import React from 'react';
import CustomizableCarousel from '../components/common/CustomizableCarousel'; // Ensure the path is correct

const CliffYouthCenterPage = () => {

   // useEffect(() => {
  //    window.scrollTo(0, 0);
  // },[]);

  // Carousel images
  const carouselImages = [
    "/projects/Cliff Youth Center/images/From Portfolio Pdf1.png",
    "/projects/Cliff Youth Center/images/From Portfolio Pdf2.png",
    "/projects/Cliff Youth Center/images/From Portfolio Pdf3.png",
    "/projects/Cliff Youth Center/images/From Portfolio Pd4f.png"
  ];

  return (
    <div className=" px-6 lg:px-18 mt-18 " >

      <h1 className=" hidden" >Cliff Youth Center</h1>
     
      <img src="/projects/Cliff Youth Center/images/Image10_000.png" alt="Image10" className="lg:h-[calc(100vh-144px)] object-contain lg:object-cover w-full z-0  mb-18        lg:mb-32" />
      
      <div className="flex ml-0 mb-6" >
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Design and Formation
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
        <div className="mb-6">
      <p>The underutilized potential of an urban node that could be turned into an attraction viable site where pedestrian circulation is enhanced and the potential of the urban node could be realized into a social function in adjacency to the rainwater canal and the rocky cliff topography.</p>
      <p>The project was initiated to make use of that urban node by forming a public library and youth center to attract citizens for a social interactive environment. as well as responding to the water canal by providing a ramp that crosses over it providing a separate path for pedestrians rather than having their path with the cars’ road.</p>
      </div>
          <div className="w-full mx-auto">
            <CustomizableCarousel 
              images={carouselImages} 
              intervalTime={2500} 
              fadeTime={1200} 
              containerHeight="450px"
              containerHeightSm="150px" // Height for sm screens
              containerHeightMd="200px" // Height for md screens
              containerHeightLg="400px" // Height for sm screens
              containerHeightXl="400px" // Height for md screens
              enableDarkMode={false}
              objectFit="cover"
            />
          </div>
        </div>
        
        <div className="flex mb-6" >
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Facade and Louvers System
        </h2>
      </div> 

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
          <div className="grid grid-cols-1  mb-18">
          <p>The underutilized potential of an urban node that could be turned into an attraction viable site where pedestrian circulation is enhanced and the potential of the urban node could be realized into a social function in adjacency to the rainwater canal and the rocky cliff topography.</p>
      <p>The project was initiated to make use of that urban node by forming a public library and youth center to attract citizens for a social interactive environment. as well as responding to the water canal by providing a ramp that crosses over it providing a separate path for pedestrians rather than having their path with the cars’ road.</p>
      <p>The project was initiated to make use of that urban node by forming a public library and youth center to attract citizens for a social interactive environment. as well as responding to the water canal by providing a ramp that crosses over it providing a separate path for pedestrians rather than having their path with the cars’ road.</p>

          <div className="relative w-full h-full mt-18 mb-18">
            <img src="/projects/Cliff Youth Center/images/Louvers.png" alt="Louvers" className="object-contain z-0 w-full h-auto" />
            <img src="/projects/Cliff Youth Center/images/LouversLabels.png" alt="Louvers Labels" className="dark:invert absolute z-10 top-0 left-0 w-full h-auto" />
          </div>
        </div>

  <div className="relative w-full h-full mt-18 mb-18">
    <img src="/projects/Cliff Youth Center/images/ArchSystem.png" alt="Architectural System" className="object-contain z-0 w-full h-auto" />
    <img src="/projects/Cliff Youth Center/images/ArchSystemLabels.png" alt="Architectural System Labels" className="dark:invert  absolute z-10 top-0 left-0 w-full h-auto" />
  </div>
  
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


      {/* Continue with other content and images as needed */}
    </div>
  );
};

export default CliffYouthCenterPage;
