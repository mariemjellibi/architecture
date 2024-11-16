// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Environment, OrbitControls } from '@react-three/drei';
// import Motherboard from './Motherboard';
// import './motherboard.css';

// export default function InteriorPC() {
//   return (
//     <h2 className="w-full h-screen app-background flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
//       <Canvas
//         shadows
//         dpr={[1, 2]}
//         camera={{ position: [0, 1, 4], fov: 50 }}
//         className="w-full h-full"
//       >
//         {/* Lighting Setup */}
//         <ambientLight intensity={0.5} />
//         <directionalLight
//           position={[2, 5, 5]}
//           intensity={1}
//           castShadow
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//         />

//         {/* 3D Model */}
//         <Suspense fallback={<Loader />}>
//           <Motherboard />
//         </Suspense>

//         {/* Environment & Controls */}
//         <Environment preset="warehouse" />
//         <OrbitControls
//           enablePan={true}
//           enableZoom={true}
//           enableRotate={true}
//           zoomSpeed={0.8}
//           rotateSpeed={0.6}
//           dampingFactor={0.15}
//           minDistance={0.5}
//           maxDistance={8}
//         />
//       </Canvas>
//     </h2>
//   );
// }

// // Loader Component
// const Loader = () => (
//   <h2 className="loader">
//     <h2>Loading 3D Model...</h2>
//   </h2>
// );
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import './interfacePc.css';  // Optional: Include any CSS styles

const InterfacePC = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 1, 5], fov: 50 }}
        className="w-full h-full"
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} intensity={1} castShadow />

        {/* 3D Model */}
        <Suspense fallback={<Loader />}>
          <mesh position={[0, 0, 0]} scale={0.5}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
          </mesh>
        </Suspense>

        {/* Environment & Controls */}
        <Environment preset="city" />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.8}
          rotateSpeed={0.6}
          dampingFactor={0.15}
          minDistance={1}
          maxDistance={10}
        />
      </Canvas>
    </div>
  );
};

// Loader Component
const Loader = () => (
  <div className="loader">
    <span>Loading 3D Model...</span>
  </div>
);

export default InterfacePC;
