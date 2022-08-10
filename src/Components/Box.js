import { useRef } from "react";
// import {  useBox} from '@react-three/cannon'
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Box = (props) => {
  // component is used to make 3d  model
  // const [ref, api] = useBox(() => ({mass: 1, ...props}))
  const ref=useRef()
  const texture = useLoader(THREE.TextureLoader, "/wood.jpg");
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  const handlePointetDown = (e) => {
    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
  };
  const handlePointetEnter = (e) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };
  const handlePointetLeave = (e) => {
    if (!e.object.active) {
      e.object.scale.x = 1.5;
      e.object.scale.y = 1.5;
      e.object.scale.z = 1.5;
    }
  };
  const scaleDown = (e) => {
    e.object.scale.x = 1;
    e.object.scale.y = 1;
    e.object.scale.z = 1;
  };

  return (
    <mesh
    onPointerDown={handlePointetDown}
    onPointerLeave={handlePointetLeave}
    onPointerEnter={handlePointetEnter}
      ref={ref}
      {...props}
    >
      <boxBufferGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default Box;
