import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import TrialGif from "../assets/TrialGIF.gif";
import RowFullScreen from '../components/common/RowFullScreen'; // Adjust the import path as needed




function HomePage() {
  return (
    <div className="home-page">
      <Header/>
      <img 
        src={TrialGif} 
        alt="Descriptive alt text" 
        className="w-screen h-screen object-contain object-center object-frame z-0"
      />


      <RowFullScreen 
        title="ECHO"
        description="Sinop,Turkey"
        cardData={{
          imageSrc: "/projects/ECHO/images/Arch System.png",
          imageAlt: "A description of the image",
          targetUrl: "/echo"
        }}
      />




      <RowFullScreen 
        title="DropletsClashh"
        description="Basic Abstraction Design"
        cardData={{
          targetUrl: "https://www.google.com/",
          src: "/MYFILE.glb",
          cameraType: "perspective",
          cameraPosition: [100, 100, 100],
          cameraLookAt: [0, 0, 0],
          ambientIntensity: 400,
          directionalLightPosition: [5, 10, 5],
          directionalLightTarget: [0, 0, 0],
          directionalLightIntensity: 1,
          allowPan: false
        }}
      />


      <Footer />
    </div>
  );
}

export default HomePage;
