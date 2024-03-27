import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import BackgroundVideo1 from "../assets/Frame__0.webm"; // Adjust the import path as needed
import BackgroundVideoBlack from "../assets/SILT ZOMMED Black.mp4";
import BackgroundVideoWhite from "../assets/SILT ZOMMED White.mp4";


import RowFullScreen from "../components/common/RowFullScreen";
import Card from "../components/common/Card"; // Adjust the import path as needed
import GLTFViewer from "../components/common/GLTFViewer"; // Update the path as needed

import projects from "../components/projects/projectsData";
import FilterButton from "../components/home/FilterButton";

import { useTheme } from '../components/common/ThemeContext';

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
<div className="relative w-screen h-screen">


 <div className="z-0 dark:z-10 absolute w-screen h-screen">
      <video autoPlay loop muted className="w-screen h-screen object-cover absolute top-0 left-0">
        <source src={BackgroundVideoBlack} type="video/mp4" />
        {/* Fallback content */}
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="z-10 dark:hidden absolute w-screen h-screen">
      <video autoPlay loop muted className="w-screen h-screen object-cover absolute top-0 left-0">
        <source src={BackgroundVideoWhite} type="video/mp4" />
        {/* Fallback content */}
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
