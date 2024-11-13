import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const Camera = () => {
  const { camera } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    gsap.to(camera.position, {
      x: 4,
      y: 10,
      z: 12,
      duration: 3.5,
      ease: "power3.out",
    });
  }, [camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      target={[0, 3, 0]}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
      enableZoom={false}
      enableDamping
    />
  );
};

export default Camera;
