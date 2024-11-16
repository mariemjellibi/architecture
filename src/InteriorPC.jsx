// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import Motherboard from "./Motherboard";
// import "./motherboard.css";

// export default function InteriorPC() {
//   return (
//     <div className="w-full h-screen app-background flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
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
//     </div>
//   );
// }

// // Loader Component
// const Loader = () => (
//   <div className="loader">
//     <span>Loading 3D Model...</span>
//   </div>
// );
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Motherboard from "./Motherboard";

export default function InteriorPC() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 1, 4], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} intensity={1} castShadow />
        <Suspense fallback={<Loader />}>
          <Motherboard />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

const Loader = () => <div style={{ color: 'white' }}>Loading 3D Model...</div>;
