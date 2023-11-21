/* import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import CustomCursor from './components/common/CustomCursor.js';
import EchoPage from './pages/ECHO.js';
import CowesWeekPavilionPage from './pages/CowesWeekPavilion.js';
import DropletsClashPage from './pages/DropletsClash.js';
import LocalFacadePage from './pages/LocalFacade.js';
import FourSeasonsFacadePage from './pages/FourSeasonsFacade.js';
import CliffYouthCenterPage from './pages/CliffYouthCenter.js';
import VenueBuildingPage from './pages/VenueBuilding.js';
import ApeToolsPage from './pages/ApeTools.js';
import './App.css';

function App() {
  return (
    <div className="App dark:bg-black">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/echo" element={<EchoPage />} />
          <Route path="/cowes-week-pavilion" element={<CowesWeekPavilionPage />} />
          <Route path="/4d-droplets-clash" element={<DropletsClashPage />} />
          <Route path="/local-facade-geometries" element={<LocalFacadePage />} />
          <Route path="/four-seasons-facade" element={<FourSeasonsFacadePage />} />
          <Route path="/cliff-youth-center" element={<CliffYouthCenterPage />} />
          <Route path="/venue-building-silt" element={<VenueBuildingPage />} />
          <Route path="/ape-tools" element={<ApeToolsPage />} />
        </Routes>
      </Router>
      
      <CustomCursor />
    </div>
  );
}

export default App; */


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import CustomCursor from './components/common/CustomCursor.js';
import EchoPage from './pages/ECHO.js';

import DropletsClashPage from './pages/DropletsClash.js';



import './App.css';

const baseUrl = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

function App() {
  return (
    <div className="App dark:bg-black">
      <Router basename={baseUrl}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/echo" element={<EchoPage />} />
         
          <Route path="/4d-droplets-clash" element={<DropletsClashPage />} />
         
        </Routes>
      </Router>
      
      <CustomCursor />
    </div>
  );
}

export default App;