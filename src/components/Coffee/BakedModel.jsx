import { useEffect } from "react";
import { MeshBasicMaterial, SRGBColorSpace } from "three";
import { useGLTF, useTexture } from "@react-three/drei";

const BakedModel = () => {
  // Load GLTF model
  const { scene } = useGLTF("/textures/coffee/bakedModel.glb");
  const bakedTexture = useTexture("/textures/coffee/baked.jpg");

  bakedTexture.colorSpace = SRGBColorSpace;
  bakedTexture.flipY = false;

  // Apply material to "baked" mesh
  useEffect(() => {
    const bakedMesh = scene.getObjectByName("baked");
    if (bakedMesh) {
      bakedMesh.material = new MeshBasicMaterial({ map: bakedTexture });
    }
  }, [scene, bakedTexture]);

  return <primitive object={scene} />;
};

export default BakedModel;
