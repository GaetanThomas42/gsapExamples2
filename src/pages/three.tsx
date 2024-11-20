import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from '../components/Scene';

export default function ThreePage() {
  return (
    <div className="h-screen bg-black">
      <Canvas>
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  );
}