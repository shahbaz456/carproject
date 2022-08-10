import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import "./App.css";
import Box from "./Components/Box";
import ColorPicker from "./Components/ColorPicker";
import Floor from "./Components/Floor";
import Orbit from "./Components/Orbit";
import Background from "./Components/Background";
import Lights from "./Components/Light";
import Cars from "./Components/Cars";
import Draggable from "./Components/Dragable";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <Canvas
        style={{ background: "black" }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        shadowMap
        camera={{ position: [7, 7, 7] }}
      >
      <Orbit />
        <Draggable />

        <Suspense>
          <Background />
        </Suspense>
        <Suspense>
          <Box position={[-2, 4, 0]} />
        </Suspense>
        <Suspense>
          <Box position={[2, 4, 0]} />
        </Suspense>

        <Physics>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
