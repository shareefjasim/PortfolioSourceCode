import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, GLTFLoader } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { directionalLight } from '@react-three/fiber';

import { useLoader } from '@react-three/fiber';



const Model = ({ src }) => {
  const { scene } = useGLTF(src);


  return <primitive object={scene} />;
}

function GLTFViewer({ src }) {
  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      {/* Camera Settings */}
      <PerspectiveCamera position={[0, 0, 150]} />

      {/* Lighting */}
      <directionalLight position={[0, 10, 5]} />
      <ambientLight intensity={0.5} />

      {/* Model */}
      <Model src={src} />

      {/* Orbit Controls for interactivity */}
      <OrbitControls />
    </Canvas>
  );
}

export default GLTFViewer;
