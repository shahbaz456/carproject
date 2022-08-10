import { useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const Orbit = () => {
  // used for thhe movement in XYZ axis
  const { camera, gl } = useThree();
  return (
    <orbitControls attach="orbitControls" args={[camera, gl.domElement]} />
  );
};

export default Orbit;