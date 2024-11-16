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
import { useGLTF } from '@react-three/drei';

function Motherboard() {
  const { scene, error } = useGLTF('/motherboard.gltf');  // The model path

  // Handle loading error
  if (error) {
    console.error("Error loading model:", error);
    return <div>Failed to load model</div>;
  }

  // Optional: Adjust scale and position if needed
  scene.scale.set(0.5, 0.5, 0.5);  // Scale down the model if it's too big
  scene.position.set(0, 0, 0);     // Make sure the model is centered

  return <primitive object={scene} />;
}

export default Motherboard;
