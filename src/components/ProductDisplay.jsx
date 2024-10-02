import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "../3DModels/Earth";
import Sun from "../3DModels/Sun";
import Mars from "../3DModels/Mars";
import Pluto from "../3DModels/Pluto";
import Rocket from "../3DModels/Rocket";

//object to extract the required 3D model
const modelComponents = {
  Sun: Sun,
  Earth: Earth,
  Mars: Mars,
  Pluto: Pluto,
  Rocket: Rocket,
};

const ProductDisplay = ({ modelObj, isPopupOpen, onPopupToggle }) => {
  const ModelComponent = modelComponents[modelObj.modelName];
  return (
    <div className="card-structure">
      <Canvas>
        <ambientLight intensity={1.5} />
        <ModelComponent />
        <OrbitControls minDistance={3} maxDistance={8.5} />
      </Canvas>
      <p
        className="card-description"
        onClick={onPopupToggle} // Toggle the popup when clicked
      >
        Object: {modelObj.id}
      </p>
      {isPopupOpen && (
        <div className="popup">
          <p className="popup-text">{modelObj.description}</p>
          <span className="popup-close" onClick={onPopupToggle}>
            X
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
