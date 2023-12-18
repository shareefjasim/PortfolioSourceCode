import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from "./pages/HomePage";
import CustomCursor from './components/common/CustomCursor.js';
import EchoPage from './pages/ECHO.js';
import CowesWeekPavilionPage from './pages/CowesWeekPavilion.js';
import DropletsClashPage from './pages/DropletsClash.js';
import LocalFacadePage from './pages/LocalFacade.js';
import FourSeasonsFacadePage from './pages/FourSeasonsFacade.js';
import CliffYouthCenterPage from './pages/CliffYouthCenter.js';
import VenueBuildingSLITPage from './pages/VenueBuildingSLIT.js';
import ApeToolsPage from './pages/ApeTools.js';
import './App.css';
import projects from './components/projects/projectsData';


function App() {

  const [currentFilter, setCurrentFilter] = useState("All Projects");
  const [isSticky, setIsSticky] = useState(false);
  const categories = ["All Projects", "Architecture", "Computational Design", "Abstract Art", "Software Development", "Web Development"];




  const filteredProjects = projects.filter(project =>
    currentFilter === "All Projects" || project.categories.includes(currentFilter)
  );

  
  return (
    <div className="App dark:bg-black dark:text-white">
      <Router>
      <CustomCursor />
      <Header categories={categories} 
        currentFilter={currentFilter} 
        onFilterChange={setCurrentFilter} 
      />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ECHO" element={<EchoPage />} />
          <Route path="/cowes-week-pavilion" element={<CowesWeekPavilionPage />} />
          <Route path="/4d-droplets-clash" element={<DropletsClashPage />} />
          <Route path="/local-facade-geometries" element={<LocalFacadePage />} />
          <Route path="/four-seasons-facade" element={<FourSeasonsFacadePage />} />
          <Route path="/cliff-youth-center" element={<CliffYouthCenterPage />} />
          <Route path="/venue-building-silt" element={<VenueBuildingSLITPage />} />
          <Route path="/ape-tools" element={<ApeToolsPage />} />
        </Routes>

      </Router>
      <Footer/>
     
    </div>
  );
}

export default App;

