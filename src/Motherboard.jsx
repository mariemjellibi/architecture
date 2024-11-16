// import { useGLTF } from "@react-three/drei";

import { useGLTF } from "@react-three/drei";

function Motherboard() {
  try {
    const { scene } = useGLTF('/motherboard.gltf');
    return <primitive object={scene} />;
  } catch (error) {
    console.error("Error loading model:", error);
    return <div>Failed to load model</div>;
  }
}

export default Motherboard;
