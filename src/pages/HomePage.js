import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Individual Cube Component with physics behavior
// We use React.forwardRef so that parent components can access the cube's ref if needed.
const Cube = React.forwardRef(({ position, color, speed, mouseX, mouseY, index, cubes }, ref) => {
  const mesh = useRef();
  
  // Convert the initial position into a THREE.Vector3 for physics calculations.
  const initialPosition = useRef(new THREE.Vector3(...position));
  
  // Replace the array velocity with a THREE.Vector3 for clarity.
  const velocity = useRef(new THREE.Vector3(0, 0, 0));
  
  // Store the last mouse position to detect actual changes.
  const lastMousePos = useRef({ x: mouseX, y: mouseY });
  
  // Define cube dimensions.
  const cubeSize = 1 + Math.random() * 0.5;
  const size = [cubeSize, cubeSize, cubeSize];

  // Initialize the base physics position (separate from any visual ambient offset)
  useEffect(() => {
    if (mesh.current) {
      mesh.current.userData.basePosition = new THREE.Vector3(...position);
    }
  }, [position]);

  // Improved collision detection that tests a candidate physics position
  // without the ambient offset affecting the bounding box.
  const checkCollisions = (targetPosition, cubeArray) => {
    if (!cubeArray || !mesh.current) return false;
    // Temporarily set the mesh to the target position to compute its bounding box.
    const originalPos = mesh.current.position.clone();
    mesh.current.position.copy(targetPosition);
    const thisBox = new THREE.Box3().setFromObject(mesh.current);
    // Restore the original position.
    mesh.current.position.copy(originalPos);

    for (let i = 0; i < cubeArray.current.length; i++) {
      const otherMesh = cubeArray.current[i];
      if (otherMesh && otherMesh !== mesh.current && otherMesh.geometry) {
        const otherBox = new THREE.Box3().setFromObject(otherMesh);
        if (thisBox.intersectsBox(otherBox)) {
          return true;
        }
      }
    }
    return false;
  };

  // useFrame hook runs on every render frame.
  useFrame((state, delta) => {
    if (!mesh.current) return;
    const cube = mesh.current;
    
    // Ensure we have a base physics position.
    if (!cube.userData.basePosition) {
      cube.userData.basePosition = new THREE.Vector3(...position);
    }
    const basePosition = cube.userData.basePosition;
    // Save the old physics position for collision recovery.
    const oldBasePosition = basePosition.clone();

    // Update cube rotation (pure ambient rotation, does not affect physics)


    // Check if the mouse has moved
    const mouseHasMoved = mouseX !== lastMousePos.current.x || mouseY !== lastMousePos.current.y;
    lastMousePos.current = { x: mouseX, y: mouseY };

    // Calculate a gentle force to return the cube toward its initial physics position.
    const returnForce = new THREE.Vector3()
      .subVectors(initialPosition.current, basePosition)
      .multiplyScalar(0.0003);

    // Calculate the mouse repulsion effect.
    let mouseEffect = new THREE.Vector3(0, 0, 0);
    if (mouseHasMoved) {
      // Map mouse position to world coordinates (with reduced influence)
      const mouseWorldPos = new THREE.Vector3(mouseX * 3, mouseY * 3, 0);
      const distance = mouseWorldPos.distanceTo(basePosition);
      if (distance < 8) { // Reduced effective range
        const direction = new THREE.Vector3().subVectors(basePosition, mouseWorldPos).normalize();
        // Intensity falls off with the square of the distance (more aggressive falloff)
        const intensity = 0.003 / (1 + distance * distance * 0.2);
        const maxEffect = 0.01;
        mouseEffect = new THREE.Vector3(
          Math.min(maxEffect, direction.x * intensity),
          Math.min(maxEffect, direction.y * intensity),
          Math.min(maxEffect, direction.z * intensity)
        );
      }
    }

    // Update velocity with damping and add the computed forces.
    velocity.current.multiplyScalar(0.95);
    velocity.current.add(returnForce);
    velocity.current.add(mouseEffect);
    
    // Cap the maximum velocity to prevent sudden jumps.
    const maxVel = 0.1;
    if (velocity.current.length() > maxVel) {
      velocity.current.setLength(maxVel);
    }
    
    // Update the base physics position using the updated velocity.
    const physicsStep = velocity.current.clone().multiplyScalar(0.2);
    basePosition.add(physicsStep);

    // Perform collision detection on the updated base position (without ambient offset).
    if (cubes && cubes.current && cubes.current.length > 0) {
      if (checkCollisions(basePosition, cubes)) {
        // If a collision is detected, revert to the old physics position.
        cube.userData.basePosition.copy(oldBasePosition);
        // Apply a gentle bounce by reversing a fraction of the velocity.
        velocity.current.multiplyScalar(-0.2);
        basePosition.copy(oldBasePosition);
      }
    }

    // Compute a subtle ambient animation offset using the clock (for stable timing).
    const time = state.clock.getElapsedTime();
    const ambientOffset = new THREE.Vector3(
      Math.sin(time + index * 1000) * 0.0002,
      Math.cos(time + index * 1000) * 0.0002,
      0
    );

    // Set the final cube position as the sum of the physics base position and the ambient offset.
    cube.position.copy(basePosition.clone().add(ambientOffset));
  });

  return (
    <mesh 
      ref={(node) => {
        mesh.current = node;
        // Forward the ref if provided.
        if (ref) {
          if (typeof ref === "function") {
            ref(node);
          } else {
            ref.current = node;
          }
        }
      }}
      position={position} 
      castShadow
      receiveShadow
    >
      <boxGeometry args={size} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.7}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
});

// Field of multiple cubes
const CubeField = ({ count = 14, mouseX, mouseY }) => {
  const cubesRef = useRef([]);
  const cubes = useRef([]);
  
  const cubeElements = [];
  for (let i = 0; i < count; i++) {
    // Create a scattered 3D arrangement.
    const radius = 8 + Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi) * 0.5 - 5; // Offset in z-direction
    
    // Generate a pleasing color from a palette.
    const colors = ['#F0FAFA', '#E0F0F0', '#D0EBEB', '#C0E1E1', '#A8D8D8', '#98DFDF', 
      '#F0F0F0', '#E8E8E8', '#E0E0E0', '#D8D8D8', '#D0D0D0', '#B0F0F0'];
    const color = colors[i % colors.length];
    
    cubeElements.push(
      <Cube 
        key={i}
        index={i} 
        position={[x, y, z]} 
        color={color}
        speed={0.5}
        mouseX={mouseX}
        mouseY={mouseY}
        cubes={cubes}
        ref={el => { cubes.current[i] = el; }}
      />
    );
  }
  
  return <group ref={cubesRef}>{cubeElements}</group>;
};

function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position relative to the center of the screen with reduced sensitivity.
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed bg-white dark:bg-black inset-0 overflow-hidden">
      {/* 3D Cubes Scene */}
      <div className="absolute inset-0">
        <Canvas 
          shadows
          camera={{ position: [0, 0, 15], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          {/* Theme appropriate fog */}
          <fog attach="fog" args={['#ffffff', 10, 40]} className="dark:hidden" />
          <fog attach="fog" args={['#000000', 10, 40]} className="hidden dark:block" />
          
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[10, 10, 10]} 
            intensity={0.8} 
            castShadow 
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <spotLight
            position={[0, 10, 5]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
            castShadow
          />
          <CubeField 
            count={14} 
            mouseX={mousePosition.x} 
            mouseY={mousePosition.y} 
          />
        </Canvas>
      </div>
      
      {/* Blur overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(4px)' }}
      ></div>
      
      {/* Content layer */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center">
          <h0 className="text-xl  text-black font-bold text-black dark:text-white mb-4">SHAREEF JASIM</h0>
          <p className="text-l text-gray-700 dark:text-gray-300">Designer and Technologist</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
