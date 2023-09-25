import React from "react";
import Footer from "../components/Footer";
import GLTFViewer from '../components/GLTFViewer';
import Card from '../components/Card';



function HomePage() {
  return (
    <div>
      {/* List your projects here */}
      {/* ... */}
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh' // This will center it vertically in the viewport
    }}>
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

    </div>
      <Footer />  
      

      
    </div>
  );
}

export default HomePage;
