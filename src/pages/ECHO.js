import React from 'react';
import CustomizableCarousel from '../components/common/CustomizableCarousel';

const EchoPage = () => {

  const images = [
    "/projects/ECHO/images/1st diag Pothoshoped.png",
    "/projects/ECHO/images/2nd diag Photoshoped.png",
    "/projects/ECHO/images/3rd diag photoshoped.png",
    "/projects/ECHO/images/4th diag photoshoped.png"
  ];

  return (
    <div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen z-0">
    
       

        <img src="/projects/ECHO/images/Arch System.png" loading="lazy" alt="3D Architectural System" className="w-screen h-screen object-contain object-center object-frame z-0"
 />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="w-full md:w-3/4 lg:w-full mx-auto"> {/* Adjust the width here */}
          <CustomizableCarousel 
            images={images} 
            intervalTime={3000} 
            fadeTime={1500} 
            containerHeight="400px"
            enableDarkMode={true}
          />
        </div>
        </div>


        <h2 className="text-xl font-bold mt-6 mb-4 dark:text-white">Sun Study and Weather Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <img src="/projects/ECHO/images/direct sun light.jpg" alt="Direct Sunlight Hours Diagram" className="w-full h-auto dark:invert" />
            <img src="/projects/ECHO/images/helpful harmfull sun angles.jpg" alt="Sunlight Usefulness Chart" className="w-full h-auto dark:invert" />
            <img src="/projects/ECHO/images/solar radiation.jpg" alt="Solar Radiation on Building Mass Model" className="w-full h-auto dark:invert" />
            <img src="/projects/ECHO/images/windrose.jpg" alt="Windrose Technical Chart" className="w-full h-auto dark:invert" />
            <img src="/projects/ECHO/images/psycocomfort.jpg" alt="Psychocomfort Chart" className="w-full md:w-1/2 h-auto mb-6 mx-auto dark:invert" />

        </div>

        <h2 className="text-xl font-bold mt-6 mb-4">Design and Planning</h2>
        <img src="/projects/ECHO/images/pf.jpg" alt="Architectural Plan" className="w-full md:w-1/2 h-auto mb-6 mx-auto dark:invert" />
        <img src="/projects/ECHO/images/sfb.jpg" alt="Architectural Section" className="w-full md:w-1/2 h-auto mb-6 mx-auto dark:invert" />



        <h2 className="text-xl font-bold mt-6 mb-4">Renderings and Visualizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            <img src="/projects/ECHO/images/r12.png" alt="Exterior Architectural Render" className="w-full h-auto" />
            <img src="/projects/ECHO/images/r31light.png" alt="Exterior Architecture Render with Lighting" className="w-full h-auto" />
            <img src="/projects/ECHO/images/ri2.png" alt="Interior Architecture Render" className="w-full h-auto" />
        </div>

        


        
    </div>
 </div>
  );
};

export default EchoPage;
