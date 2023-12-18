// EchoPage.js
import React from 'react';
import GLTFViewer from '../components/common/GLTFViewer'; // Adjust the import path as needed


const DropletsClashPage = () => {
  return (
    <div>
       
        <h1>DropletsClash</h1>
        {/* Add your page content here */}
        <div class="flex justify-between">
  <div class="bg-blue-500 p-4">
    Box 1
  </div>
  <div class="bg-blue-500 p-4">
    Box 3
  </div>
</div>
<div className='h-screen w-80'>

<GLTFViewer 
        src='projects/TEMP/Exploding Earth.glb'
        cameraType="perspective"
        cameraPosition={[50, 50, 50]}
        cameraLookAt={[0, 0, 0]}
      
        directionalLightPosition={[0, 10, 5]}
        directionalLightTarget={[0, 0, 0]}
        allowPan={false}
      />
  
</div>


<div class="grid grid-rows-3 gap-40">
  <div class="bg-blue-500 p-4">
    Box 1
  </div>
  
  <div class="bg-blue-500 p-4">
    Box 3
  </div>
</div>

      
    </div>
  );
};

export default DropletsClashPage;