import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CustomCursor from "./components/common/CustomCursor.js";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About.js";
import EchoPage from "./pages/ECHO.js";
import CowesWeekPavilionPage from "./pages/CowesWeekPavilion.js";
import DropletsClashPage from "./pages/Droplets Clash.js";
import AlgorithmforLocalFacadeGeometriesPage from "./pages/AlgorithmforLocalFacadeGeometries.js";
import FourSeasonsFacadePage from "./pages/FourSeasonsFacade.js";
import CliffYouthCenterPage from "./pages/CliffYouthCenter.js";
import APEToolsPage from "./pages/APETools.js";
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

  useEffect(() => {
    // Example: simulate loading time
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App dark:bg-black dark:text-white">
      <Router>
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            <CustomCursor />
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
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
