import { Canvas } from "@react-three/fiber";

import Scene from "containers/Scene";

const HomePage = () => (
  <div id="app">
    <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
      <Scene />
    </Canvas>
  </div>
);

export default HomePage;
