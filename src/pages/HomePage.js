import React from "react";
import Footer from "../components/common/Footer";
import GLTFViewer from '../components/GLTFViewer';
import Card from '../components/Card';

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">Your Logo</div>
        <nav>
          <a href="#work" className="menu-item">Work</a>
          <a href="#about" className="menu-item">About</a>
        </nav>
      </header>

      <section className="intro">
        <h1 className="intro-name">Your Name</h1>
        <p className="intro-description">Computational Designer / Architect</p>
        {/* You can add your model or carousel here */}
      </section>

      <section id="work" className="work-section">
        <h2 className="work-section-title">My Work</h2>
        {/* You can list your projects or domains of work here */}
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>Details from your CV...</p>
      </section>

     
      <Card data-target-url="https://www.google.com/" style={{ width: '500px', height: '500px' }} targetUrl="https://www.google.com/">
        <GLTFViewer 
          src="MYFILE.glb" 
          cameraType="perspective"
          cameraPosition={[100, 10000000, 1224]} 
          cameraLookAt={[0, 0, 0]} 
          ambientIntensity={4} 
          directionalLightPosition={[5, 10, 5]}
          directionalLightTarget={[0, 0, 0]}
          directionalLightIntensity={0.8}
        />
      </Card>

      <Footer />
    </div>
  );
}

export default HomePage;
