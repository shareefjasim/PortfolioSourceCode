import React, { useState, useEffect } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import BackgroundGif from "../assets/Home.gif";
import RowFullScreen from '../components/common/RowFullScreen';
import Card from '../components/common/Card'; // Adjust the import path as needed
import GLTFViewer from '../components/common/GLTFViewer'; // Update the path as needed

import projects from '../components/projects/projectsData';
import FilterButton from '../components/home/FilterButton';

function HomePage() {

  const [currentFilter, setCurrentFilter] = useState("All Projects");
  const categories = ["All Projects", "Architecture", "Computational Design", "Abstract Art", "Software Development", "Web Development"];
  const filteredProjects = projects.filter(project =>
    currentFilter === "All Projects" || project.categories.includes(currentFilter)
  );

  const renderCardContent = (cardData) => {
    if (cardData.mediaType === 'image') {
      return (
        <img src={cardData.mediaSrc} alt={cardData.imageAlt || 'Card Image'} className="max-w-full max-h-full object-contain object-center" 
        />
      );
    } else if (cardData.mediaType === '3dmodel') {
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

  return (
    <div className="">
      <Header categories={categories} 
        currentFilter={currentFilter} 
        onFilterChange={setCurrentFilter} 
      />

      <img 
        src={BackgroundGif} 
        alt="Descriptive alt text" 
        className="w-screen h-screen object-cover lg:object-contain lg:object-center dark:invert"
      />

      <FilterButton
        categories={categories}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}        
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-18 gap-y-18 px-6 md:px-18 mt-18   ">
        {filteredProjects.map(project => (
          <div key={project.title} className="object-center object-contain">
            <Card targetUrl={`#${project.targetUrl}`} mediaType={project.mediaType}>
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