// WEAVEPage.js
import React from 'react';
import CustomizableCarousel from '../components/common/CustomizableCarousel'; // Adjust the import path as needed

const WEAVEPage = () => {

    // useEffect(() => {
  //    window.scrollTo(0, 0);
  // },[]);

  // Carousel images for the diagrams
  const carouselImages = [    
    "/projects/WEAVE/images/renders/Diagrams/Image47.png",
    "/projects/WEAVE/images/renders/Diagrams/Image47_000.png",
    "/projects/WEAVE/images/renders/Diagrams/Image48.png",
    "/projects/WEAVE/images/renders/Diagrams/Image49.png",
    "/projects/WEAVE/images/renders/Diagrams/Image50.png"
  ];


  return (
    <div className=" px-6 lg:px-18 mt-18  " >
      <h1 className=" hidden" >WEAVE</h1> 

      {/* Static Images */}
      <img src="/projects/WEAVE/images/renders/Image34_000.png" alt="Image 34" className=" lg:h-[calc(100vh-144px)] object-contain lg:object-cover w-full z-0  mb-18 lg:mb-32" />
     

      <div className="flex ml-0 mb-6" >
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Deign and Formation
        </h2>
      </div>

    
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
          <p className=" w-full mx-auto indent-8"> 
          Aiming for comprehensive integration with nature, the project is located 
          on the lake’s shore extending a wooden deck to reach the other side of the lake. <br /><br />
          The building with its spaces and circulation pathways offers an enriched experience of the
           natural environment by easing accessibility and forming multiple viewpoints to appreciate 
           the natural beauty.
          </p>

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

      <div className="flex ml-0 mb-6" >
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Architectural System
        </h2>
      </div>

      <img src="/projects/WEAVE/images/Artboard 1.png" alt="Artboard 1" className="w-full h-auto dark:invert" />


      <div className="flex ml-0 mt-6" >
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Journey and Planning
        </h2>
      </div>
      <img src="/projects/WEAVE/images/Artboard Sections.png" alt="Artboard Sections" className="w-full h-auto dark:invert" />
      


      
      <div className="flex ml-0 m-6" >
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
        Renderings and Visualizations
        </h2>
      </div>
      <div className="flex flex-col min-h-screen z-0">
      <div className="mb-18 grid grid-cols-1 lg:grid-cols-2 gap-18  ">
      <img src="/projects/WEAVE/images/renders/Image45.png" alt="Image 45" className=" w-full h-auto" />

      <img src="/projects/WEAVE/images/renders/Image37.png" alt="Image 37" className=" w-full h-auto" />
      <img src="/projects/WEAVE/images/renders/Image44_000.png" alt="Image 44_000" className="w-full h-auto" />
      <img src="/projects/WEAVE/images/renders/Image44.png" alt="Image 44" className=" w-full h-auto " />
      
     </div>   
      
     </div>   

    </div>
  );
};

export default WEAVEPage;
