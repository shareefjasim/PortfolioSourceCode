// EchoPage.js
import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const EchoPage = () => {
  return (
    <div>
        <Header />
        <img 
        src= "/projects/ECHO/images/Arch System.png"
        alt="Descriptive alt text" 
        className="w-screen h-screen object-contain object-center object-frame z-0"
      />

        <Footer />
    </div>
  );
};

export default EchoPage;