import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import  CustomCursor  from './components/common/CustomCursor.js';
import EchoPage from './pages/ECHO.js';
import './App.css'

function App() {
  return (
    <div className="App dark:bg-black" >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          
          <Route path="/echo" element={<EchoPage />} />
          {/* <Route path="/cliff-center" element={<CliffCenterPage />} /> */}
          
        </Routes>
      </Router>
      
      <CustomCursor />
    </div>
  );
}

export default App;
