import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CustomCursor from "./components/common/CustomCursor.js";

import HomePage from "./pages/HomePage";
import HomePageV2 from "./pages/HomePageV2";
import HomePageV3 from "./pages/HomePageV3";
import HomePageV4 from "./pages/HomePageV4";
import HomePageV5 from "./pages/HomePageV5";

import AboutPage from "./pages/About.js";
import EchoPage from "./pages/ECHO.js";
import CowesWeekPavilionPage from "./pages/CowesWeekPavilion.js";
import DropletsClashPage from "./pages/Droplets Clash.js";
import AlgorithmforLocalFacadeGeometriesPage from "./pages/AlgorithmforLocalFacadeGeometries.js";
import FourSeasonsFacadePage from "./pages/FourSeasonsFacade.js";
import CliffYouthCenterPage from "./pages/CliffYouthCenter.js";
import APEToolsPage from "./pages/ApeTools.js";
import WEAVEPage from "./pages/WEAVE.js";
import SILTMiddelkerkePage from "./pages/SILTMiddelkerke.js";
import VOXExporterPage from "./pages/VOXExporter.js";
import CTEPPage from "./pages/CTEP.js";


import "./App.css";
import projects from "./components/projects/projectsData";
import LoadingComponent from "./components/common/LoadingComponent.js";
import CustomScrollbar from "./components/common/CustomScrollbar.js";


function App() {
  const [currentFilter, setCurrentFilter] = useState("All Projects");
  const [isSticky, setIsSticky] = useState(false);
  const categories = [
    "All Projects",
    "Architecture",
    "Computational Design",
    "Abstract Art",
    "Software Development",
    "Web Development",
  ];

  const filteredProjects = projects.filter(
    (project) =>
      currentFilter === "All Projects" ||
      project.categories.includes(currentFilter)
  );

  const [loading, setLoading] = useState(true);
  const [showCursor, setShowCursor] = useState(false); // For CustomCursor
 
  
  useEffect(() => {
    // Simulate loading time for demonstration
   
    // Separate timer for CustomCursor to appear after 2 seconds
    const cursorTimer = setTimeout(() => {
      setShowCursor(true);
    }, 1950);

    // Cleanup function
    return () => {
      
      clearTimeout(cursorTimer);
    };
  }, []);
  

  return (
    <div className="App dark:bg-black dark:text-white">
      <Router>
      {loading && <LoadingComponent />}
        {showCursor && <CustomCursor />}
            <Header
              categories={categories}
              currentFilter={currentFilter}
              onFilterChange={setCurrentFilter}
            />
            <Routes>
              <Route 
              path="/" 
              element={<HomePage />} 
              /> 
              <Route 
              path="/V2" 
              element={<HomePageV2 />} 
              /> 
               <Route 
              path="/V3" 
              element={<HomePageV3 />} 
              /> 
              <Route 
              path="/V4" 
              element={<HomePageV4 />} 
              /> 
              <Route 
              path="/V5" 
              element={<HomePageV5 />} 
              /> 
               <Route 
              path="/workSection" 
              element={<HomePage />} 
              /> 
              <Route 
              path="/About" 
              element={<AboutPage />} 
              />
              <Route 
              path="/ECHO" 
              element={<EchoPage />} 
              />
              <Route
                path="/CowesWeekPavilion"
                element={<CowesWeekPavilionPage />}
              />
              <Route 
              path="/Droplets Clash" 
              element={<DropletsClashPage />} 
              />
              <Route
                path="GENxFacadeSolution"
                element={<AlgorithmforLocalFacadeGeometriesPage />}
              />
              <Route
                path="/FourSeasonsFacade"
                element={<FourSeasonsFacadePage />}
              />
              <Route
                path="/CliffYouthCenter"
                element={<CliffYouthCenterPage />}
              />
              <Route
                path="/VOXExporter"
                element={<VOXExporterPage />}
              />
               <Route
                path="/CTEP"
                element={<CTEPPage />}
              />
               <Route
                path="/SILTMiddelkerke"
                element={<SILTMiddelkerkePage />}
              />
              <Route 
              path="/APETools" 
              element={<APEToolsPage />} 
              />
              <Route 
              path="/WEAVE" 
              element={<WEAVEPage />} 
              />
            </Routes>
            <Footer />
         
      </Router>
    </div>
  );
}

export default App;
