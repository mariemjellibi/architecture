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
import { useEffect, useState } from 'react';

function Motherboard() {
  const { scene, error } = useGLTF('/motherboard.gltf');
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    if (error) {
      setLoadingError("Failed to load model");
      console.error("Model load error:", error);
    }
  }, [error]);

  if (loadingError) {
    return <div>{loadingError}</div>;
  }

  if (scene) {
    scene.scale.set(0.5, 0.5, 0.5);
    scene.position.set(0, 0, 0);
  }

  return <primitive object={scene} />;
}

export default Motherboard;
