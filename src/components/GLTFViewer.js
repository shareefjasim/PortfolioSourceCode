import React , { useEffect,useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera,OrthographicCamera, GLTFLoader } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { directionalLight } from '@react-three/fiber';

import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';



const Model = ({ src }) => {
  const { scene } = useGLTF(src);


  return <primitive object={scene} />;
}

function GLTFViewer({ 
  src, 
  cameraType = "perspective",
  cameraPosition = [500, 500, 500], 
  cameraLookAt = [0, 0, 0], 
  ambientIntensity = 0.5, 
  directionalLightPosition = [0, 10, 5],
  directionalLightTarget = [0, 0, 0],
  directionalLightIntensity = 1
}) {
  const cameraRef = useRef();
  const directionalLightRef = useRef();
  const [renderKey, setRenderKey] = useState(0); // State to force a re-render

  useEffect(() => {
    if (cameraRef.current) {
      // Reset the camera
      if (cameraType === "perspective") {
        cameraRef.current = new THREE.PerspectiveCamera();
      } else {
        cameraRef.current = new THREE.OrthographicCamera();
      }

      // Set the camera position and lookAt
      cameraRef.current.position.set(...cameraPosition);
      cameraRef.current.lookAt(...cameraLookAt);
      cameraRef.current.updateProjectionMatrix();

      // Force a re-render
      setRenderKey(prevKey => prevKey + 1);
    }
  }, [cameraPosition, cameraLookAt]);

  return (
    <Canvas style={{ width: '100%', height: '100%' }} key={renderKey}>
      {cameraType === "perspective" ? (
        <PerspectiveCamera ref={cameraRef} />
      ) : (
        <OrthographicCamera ref={cameraRef} />
      )}
      
      <directionalLight 
        ref={directionalLightRef}
        position={directionalLightPosition} 
        intensity={directionalLightIntensity}
      />
      <ambientLight intensity={ambientIntensity} />
      <Model src={src} />
      <OrbitControls target={cameraLookAt} autoRotate={false} />
    </Canvas>
  );


}



export default GLTFViewer;
