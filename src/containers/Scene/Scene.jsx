import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Camera from "../../components/Camera";
import Coffee from "components/Coffee";

const outside = 'fail'
const test = 'fail'

const Scene = () => (
  <>
    <PerspectiveCamera makeDefault position={[8, 16, 18]} fov={25} />
    <Camera />
    <Coffee />
  </>
);

export default Scene;
