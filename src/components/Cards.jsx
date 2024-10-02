import React, { useState } from "react";
import ProductDisplay from "./ProductDisplay";

const Cards = ({ modelsArray, startIndex, carouselSize }) => {
  const [activePopupId, setActivePopupId] = useState(null); //usestate to handle popup display

  const handlePopupToggle = (id) => {
    if (activePopupId === id) {
      setActivePopupId(null); // Close the popup if it's already active
    } else {
      setActivePopupId(id); // Open the popup for the clicked object
    }
  };

  //function to get only that 3D models that need to be displayed
  const getDisplayModels = (modelsArray, startIndex, carouselSize) => {
    let fetchedModels = [];
    for (let i = 0; i < carouselSize; i++) {
      fetchedModels.push(modelsArray[(startIndex + i) % modelsArray.length]);
    }
    return fetchedModels;
  };

  //array to store 3D models that need to be displayed so we can use map on it
  const displayModels = getDisplayModels(modelsArray, startIndex, carouselSize);

  return displayModels.map((modelObj) => {
    return (
      <ProductDisplay
        key={modelObj.id} //setting the key on individual item in mapping since its a good practise
        modelObj={modelObj}
        isPopupOpen={activePopupId === modelObj.id}
        onPopupToggle={() => handlePopupToggle(modelObj.id)}
      />
    );
  });
};

export default Cards;
