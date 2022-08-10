import state from "../state";
import * as THREE from "three";

const ColorPicker = () => {
  //used to chnage to color of model in the scene
  const handleClick = (e) => {
   
    if (!window.activeMesh) {
    console.log("click");
    window.activeMesh.material.Color = new THREE.Color(
      e.target.style.background
    );}
  };
  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
      <div style={{ display: "flex" }}>
        <div
          style={{ background: "blue", height: 50, width: 50 }}
          onClick={handleClick}
        />
        <div
          style={{ background: "yellow", height: 50, width: 50 }}
          onClick={handleClick}
        />
        <div
          style={{ background: "green", height: 50, width: 50 }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
export default ColorPicker;
