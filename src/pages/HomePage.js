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
      <Card style={{ width: '500px', height: '500px' }}>
        <GLTFViewer src="/MYFILE.glb" />
      </Card>
    </div>
      <Footer />  
      

      
    </div>
  );
}

export default HomePage;
