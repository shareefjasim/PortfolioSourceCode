// /src/components/common/GLTFViewer.js
import React, { useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, OrthographicCamera, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// 3D model loader
const Model = ({ src }) => {
  const { scene } = useGLTF(src);
  return <primitive object={scene} />;
};

// Helper to position and aim camera
const Camera = ({ cameraPosition, cameraLookAt }) => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(...cameraPosition);
    camera.lookAt(new THREE.Vector3(...cameraLookAt));
    camera.updateProjectionMatrix();
  }, [camera, cameraPosition, cameraLookAt]);
  return null;
};

/**
 * GLTFViewer props:
 * - src: string (URL/path to .glb/.gltf)
 * - cameraType: 'perspective' | 'orthographic'
 * - cameraPosition: [x, y, z]
 * - cameraLookAt: [x, y, z]
 * - ambientIntensity: number
 * - directionalLightPosition: [x, y, z]
 * - directionalLightIntensity: number
 * - allowPan: boolean
 * - enableZoom: boolean
 * - minZoomDistance: number
 * - maxZoomDistance: number
 * - autoRotate: boolean
 * - autoRotateSpeed: number
 */
function GLTFViewer({
  src,
  cameraType = 'perspective',
  cameraPosition = [500, 500, 500],
  cameraLookAt = [0, 0, 0],
  ambientIntensity = 5000,
  directionalLightPosition = [0, 10, 5],
  directionalLightIntensity = 5,
  allowPan = false,
  enableZoom = false,
  minZoomDistance = 50,
  maxZoomDistance = 1000,
  autoRotate = true,
  autoRotateSpeed = 1,
}) {
  // Manage auto-rotation state
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);
  useEffect(() => {
    setIsAutoRotating(autoRotate);
  }, [autoRotate]);

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      {/* Choose camera type */}
      {cameraType === 'perspective' ? (
        <PerspectiveCamera makeDefault position={cameraPosition} far={2000} />
      ) : (
        <OrthographicCamera makeDefault position={cameraPosition} far={2000} />
      )}

      <Camera cameraPosition={cameraPosition} cameraLookAt={cameraLookAt} />

      {/* Lighting */}
      <directionalLight position={directionalLightPosition} intensity={directionalLightIntensity} />
      <ambientLight intensity={ambientIntensity} />

      {/* Render model */}
      <Model src={src} />

      {/* Controls: pan, zoom, auto-rotate, and events */}
      <OrbitControls
        enablePan={allowPan}
        enableZoom={enableZoom}
        minDistance={minZoomDistance}
        maxDistance={maxZoomDistance}
        autoRotate={isAutoRotating}
        autoRotateSpeed={autoRotateSpeed}
        target={new THREE.Vector3(...cameraLookAt)}
        mouseButtons={{
          LEFT: THREE.MOUSE.RIGHT,
          MIDDLE: THREE.MOUSE.MIDDLE,
          RIGHT: THREE.MOUSE.LEFT,
        }}
        onStart={() => {
          // stop auto-rotation on user interaction
          if (isAutoRotating) setIsAutoRotating(false);
        }}
      />
    </Canvas>
  );
}

export default GLTFViewer;
