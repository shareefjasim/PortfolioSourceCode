import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import  CustomCursor  from './components/CustomCursor.js';



function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
      
      <CustomCursor />
    </div>
  );
}

export default App;
