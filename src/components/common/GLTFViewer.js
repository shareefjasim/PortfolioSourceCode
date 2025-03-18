// import React, { useEffect, useRef } from 'react';
// import { Canvas, useThree } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera, OrthographicCamera } from '@react-three/drei';
// import { useGLTF } from '@react-three/drei';
// import * as THREE from 'three';

// const Model = ({ src }) => {
//   const { scene } = useGLTF(src);
//   return <primitive object={scene} />;
// };

// const Camera = ({ cameraType, cameraPosition, cameraLookAt }) => {
//   const { camera } = useThree();

//   useEffect(() => {
//     camera.position.set(...cameraPosition);
//     camera.lookAt(new THREE.Vector3(...cameraLookAt));
//     camera.updateProjectionMatrix();
//   }, [camera, cameraPosition, cameraLookAt]);

//   return null;
// };

// function GLTFViewer({
//   src,
//   cameraType = "perspective",
//   cameraPosition = [500, 500, 500],
//   cameraLookAt = [0, 0, 0],
//   ambientIntensity = 5000,
//   directionalLightPosition = [0, 10, 5],
//   directionalLightTarget = [0, 0, 0],
//   directionalLightIntensity = 5,
//   allowPan = false
// }) 



// {
//   return (
//     <Canvas style={{ width: '100%', height: '100%' }}>
//       {cameraType === "perspective" ? (
//         <PerspectiveCamera position={cameraPosition}  far={1000} />
//       ) : (
//         <OrthographicCamera position={cameraPosition}  far={1000} />
//       )}
//       <Camera cameraType={cameraType} cameraPosition={cameraPosition} cameraLookAt={cameraLookAt} />
      
//       <directionalLight 
//         position={directionalLightPosition} 
//         intensity={directionalLightIntensity}
//         target-position={directionalLightTarget}
//       />


//       <ambientLight intensity={ambientIntensity} />
//       <Model src={src} />
//       <OrbitControls       
//         enablePan={allowPan} 
//         target={new THREE.Vector3(...cameraLookAt)}
//         mouseButtons={{
//           LEFT: THREE.MOUSE.RIGHT, // Change orbiting to right-click
//           MIDDLE: THREE.MOUSE.MIDDLE,
//           RIGHT: THREE.MOUSE.LEFT // Optionally, you can assign another action to the left click
//         }}
//       />
    
//     </Canvas>
//   );
// }

// export default GLTFViewer;