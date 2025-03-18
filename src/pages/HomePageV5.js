import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
// import BackgroundVideoBlack from "../assets/SILT ZOMMED Black.mp4";
// import BackgroundVideoWhite from "../assets/SILT ZOMMED White.mp4";
// import BackgroundVideoBlackHR from "../assets/SILT ZOMMED Black.mp4";
// import BackgroundVideoWhiteHR from "../assets/SILT ZOMMED White HIGH RES.mp4";

// import BackgroundVideoWhite4K from "../assets/SILT ZOMMED White 4K.mp4";
// import BackgroundVideoWhiteTR from "../assets/TRIAL.mp4";
// import BackgroundVideoWhiteTR2 from "../assets/TRIAL2.mp4";
// import BackgroundVideoWhiteTR3 from "../assets/TRIAL3.mp4";
// import BackgroundVideoWhiteTR4 from "../assets/TRIAL4.mp4";


import BackgroundVideoWhiteZoomed from "../assets/SILT Slow Animation White.mp4";
import BackgroundVideoBlackZoomed from "../assets/SILT Slow Animation Black.mp4";








import RowFullScreen from "../components/common/RowFullScreen";
import Card from "../components/common/Card"; // Adjust the import path as needed
import GLTFViewer from "../components/common/GLTFViewer"; // Update the path as needed

import projects from "../components/projects/projectsData";
import FilterButton from "../components/home/FilterButton";

import { useTheme } from '../components/common/ThemeContext';



// import Frame0 from '../assets/Frame_0.png';
// import Frame3 from '../assets/3Frame_0.png';
// import Frame5 from '../assets/56Frame_0.png';
// import Frame6 from '../assets/57Frame_0.png';
// import Frame7 from '../assets/58Frame_0.png';
// import Frame8 from '../assets/59Frame_0.png';
// import Frame60 from '../assets/60Frame_0.png';
// import Frame61 from '../assets/61Frame_0.png';
// import Frame62 from '../assets/62Frame_0.png';
// import Frame63 from '../assets/63Frame_0.png';
// import Frame631 from '../assets/631Frame_0.png';
// import Frame632 from '../assets/632Frame_0.png';
// import Frame633 from '../assets/654Frame_0.png';////////////////////


//import Frame63 from '../assets/63Frame_0.png';
//import Frame63 from '../assets/63Frame_0.png';

//import Frame64 from '../assets/64Frame_0.png';
//import Frame65 from '../assets/65Frame_0.png';
//import Frame66 from '../assets/66Frame_0.png';
//import Frame67 from '../assets/67Frame_0.png';

import LandingGrid from "../components/common/LandingGrid";





function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [currentFilter, setCurrentFilter] = useState("All Projects");
  const categories = [
    "All Projects",
    "Computational Design",
    "Software",
    "Architecture",
    "Abstract Art",
  ]; //Product design, we development , make the filter appear only as abutton and expand into a window when hovering over it on large screens , small screens can sow it only upon a press

  const filteredProjects = projects.filter(
    (project) =>
      currentFilter === "All Projects" ||
      project.categories.includes(currentFilter)
  );

  const renderCardContent = (cardData) => {
    // Determine whether to invert the image in dark mode
    const invertInDarkMode = cardData.invert === true;

    if (cardData.mediaType === "image") {
      return (
        <img
          src={cardData.mediaSrc}
          alt={cardData.imageAlt || "Card Image"}
          className="max-w-full max-h-full object-contain object-center"
        />
      );
    } else if (cardData.mediaType === "3dmodel") {
      return (
        <GLTFViewer
          src={cardData.mediaSrc}
          cameraType={cardData.cameraType}
          cameraPosition={cardData.cameraPosition}
          cameraLookAt={cardData.cameraLookAt}
          ambientIntensity={cardData.ambientIntensity}
          directionalLightPosition={cardData.directionalLightPosition}
          directionalLightTarget={cardData.directionalLightTarget}
          directionalLightIntensity={cardData.directionalLightIntensity}
          allowPan={cardData.allowPan}
        />
      );
    }
  };


   // Video references
   const videoRefBlack = useRef(null);
   const videoRefWhite = useRef(null);
 
   // Rest of your component logic...
 
   const togglePlayPause = (videoRef) => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

   useEffect(() => {
     // Delayed video start
     const timer = setTimeout(() => {
       if (videoRefBlack.current) {
         videoRefBlack.current.play();
       }
       if (videoRefWhite.current) {
         videoRefWhite.current.play();
       }
     }, 1500); // Delay in milliseconds
 
     return () => clearTimeout(timer); // Cleanup the timer
   }, []);
    // const { theme } = useTheme(); // Use the theme context
  
    // // Determine which video to use based on the theme
    // const videoSource = theme === "dark" ? BackgroundVideoBlack : BackgroundVideoWhite;


  return (
    <div className="z-10">
      <Header
        categories={categories}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />

{/* <div className="relative w-screen h-screen">

<img src={Frame633} alt="Frame 0" /> /////////////////////////////////////////////////////////////
</div> */}

 <div className="relative w-screen h-screen">
      <div className="z-0 dark:z-10 absolute w-screen h-screen">
        <video ref={videoRefBlack} onClick={() => togglePlayPause(videoRefBlack)} loop muted className="w-screen h-screen object-cover absolute top-0 left-0">
          <source src={BackgroundVideoBlackZoomed} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="z-10 dark:hidden absolute w-screen h-screen">
        <video ref={videoRefWhite} onClick={() => togglePlayPause(videoRefWhite)} loop muted className="w-screen h-screen object-cover absolute top-0 left-0">
          <source src={BackgroundVideoWhiteZoomed} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>


<br></br>
<br></br>
      <div className="sticky z-30 top-6"></div>



      <div id="workSection" className="sticky z-30 top-6">
        <FilterButton
          categories={categories}
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-18 lg:gap-x-36 gap-y-18 px-6 md:px-18 mt-18">
        {filteredProjects.map((project) => (
          <div key={project.title} className="object-center  object-contain">
            <Card
              targetUrl={`#${project.targetUrl}`}
              mediaType={project.mediaType}
              invertInDarkMode={project.invert || false}
            >
              {renderCardContent(project)}
            </Card>
            <h1 className="mt-6 text-center ">{project.title}</h1>
            <p className="mt-1  text-center ">{project.description}</p>
          </div>
        ))}
      </div>
      

      <div className="h-36"></div>

      <Footer />
    </div>
  );
  
}



export default HomePage;
