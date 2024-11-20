import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

export default function Scene({ scrollY = 0 }) {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate based on scroll position
      meshRef.current.rotation.x = scrollY * 0.001;
      meshRef.current.rotation.y += delta * 0.5;
      
      // Move based on scroll position
      meshRef.current.position.y = Math.sin(scrollY * 0.001) * 2;
      meshRef.current.position.x = Math.cos(scrollY * 0.001) * 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <mesh ref={meshRef} scale={[3, 3, 3]}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial 
          color="#ff6b6b"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
    </>
  );
}
