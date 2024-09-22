import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"; //used arrows from materialUI
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"; //used arrows from materialUI
import models from "../models";
import Cards from "./Cards";

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0); //to store the starting index of 3D models array to print them accordingly
  const totalModels = models.length;
  const carouselSize = 3;

  //to handle the left arrow
  function handleLeftBtn() {
    startIndex > 0
      ? setStartIndex(startIndex - 1)
      : setStartIndex(totalModels - 1);
  }

  //to handle the right arrow
  function handleRightBtn() {
    startIndex !== totalModels - 1
      ? setStartIndex(startIndex + 1)
      : setStartIndex(0);
  }

  return (
    <div className="carousel">
      <ArrowCircleLeftIcon
        className="arrows left"
        style={{ fontSize: 40 }}
        onClick={handleLeftBtn}
      />
      <Cards //Cards component is used to print the required no. of cards along with 3D models
        modelsArray={models}
        carouselSize={carouselSize}
        startIndex={startIndex}
      />
      <ArrowCircleRightIcon
        className="arrows right"
        style={{ fontSize: 40 }}
        onClick={handleRightBtn}
      />
    </div>
  );
};

export default Carousel;
