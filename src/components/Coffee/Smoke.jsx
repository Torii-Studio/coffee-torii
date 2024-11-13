import { useRef } from "react";
import { DoubleSide, TextureLoader, RepeatWrapping } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import coffeeSmokeVertexShader from "shaders/coffeeSmoke/vertex.glsl";
import coffeeSmokeFragmentShader from "shaders/coffeeSmoke/fragment.glsl";

const Smoke = () => {
  const smokeRef = useRef();

  // Load Perlin texture
  const perlinTexture = useLoader(TextureLoader, "/textures/coffee/perlin.png");
  perlinTexture.wrapS = RepeatWrapping;
  perlinTexture.wrapT = RepeatWrapping;

  // Animate the `uTime` uniform
  useFrame(({ clock }) => {
    if (smokeRef.current) {
      smokeRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh position={[0, 4.83, 0]} scale={[1.5, 6, 1.5]}>
      <planeGeometry args={[1, 1, 16, 64]} />
      <shaderMaterial
        ref={smokeRef}
        vertexShader={coffeeSmokeVertexShader}
        fragmentShader={coffeeSmokeFragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uPerlinTexture: { value: perlinTexture },
        }}
        side={DoubleSide}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};

export default Smoke;
