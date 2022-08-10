import { useBox } from "@react-three/cannon";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
const Floor = (props) => {
  const [ref, api] = useBox(() => ({ args: [5, 1, 5], ...props }));
  const texture = useLoader(THREE.TextureLoader, "/showroom.jpg");
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[30, 1, 20]} />
      <meshBasicMaterial color={"white"} opacity={1} />{" "}
    </mesh>
  );
};

export default Floor;
