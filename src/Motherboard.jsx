// import { useGLTF } from "@react-three/drei";

// function Motherboard() {
//   try {
//     const { scene } = useGLTF('/motherboard.gltf');
//     return <primitive object={scene} />;
//   } catch (error) {
//     console.error("Error loading model:", error);
//     return <div>Error loading model. Check console for details.</div>;
//   }
// }

// export default Motherboard;




// import { useGLTF } from '@react-three/drei';
// import { useEffect } from 'react';

// function Motherboard() {
//   const { scene } = useGLTF('/motherboard.gltf');



//   useEffect(() => {
//     if (error) {
//       console.error("Model load error:", error);
//     }
//   }, [error]);

//   if (error) {
//     return <div>Failed to load model</div>;
//   }

//   scene.scale.set(0.5, 0.5, 0.5);
//   scene.position.set(0, 0, 0);

//   return <primitive object={scene} />;
// }
// export default Motherboard;