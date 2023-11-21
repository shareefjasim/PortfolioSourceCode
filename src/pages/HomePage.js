import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import TrialGif from "../assets/TEMP/TrialGIF.gif";
import RowFullScreen from '../components/common/RowFullScreen'; // Adjust the import path as needed

import ECHOImage from '../assets/projects/ECHO/images/Arch System.png';

function HomePage() {
  return (
    <div className="home-page">
      <Header/>
      <img 
        src={TrialGif} 
        alt="Descriptive alt text" 
        className="w-screen h-screen object-frame z-0"
      />


      <RowFullScreen 
        title="ECHO"
        description="Sinop,Turkey"
        cardData={{
          imageSrc: ECHOImage,
          imageAlt: "A description of the image",
          targetUrl: "/echo"
        }}
      />







      <Footer />
    </div>
  );
}

export default HomePage;
