"use client";

import React from "react";
import ImageContainer from "./ImageContainer";
import {
  CircularDownButton,
  CircularUpButton,
} from "@/components/atoms/button";

const ImageSelector = ({ data, onImageClick, selectedImage }) => {
  const upButtonHandler = () => {
    if (selectedImage === 0) return;
    else onImageClick(selectedImage - 1);
  };

  const downButtonHandler = () => {
    if (selectedImage === data.length - 1) return;
    else onImageClick(selectedImage + 1);
  };

  return (
    <div className={"flex flex-col w-fit gap-y-12 items-center"}>
      <div className="flex flex-col">
        {data.map((ele, index) => (
          <ImageContainer
            key={ele.id}
            src={ele.src}
            alt={ele.alt}
            selected={selectedImage === index}
            onImageClick={onImageClick.bind(null, index)}
          />
        ))}
      </div>

      <div className="flex flex-col gap-y-5 w-fit">
        <CircularUpButton
          onClick={upButtonHandler}
          backgroundColor={`${selectedImage === 0 ? "white" : "black"}`}
        />

        <CircularDownButton
          onClick={downButtonHandler}
          backgroundColor={`${
            selectedImage === data.length - 1 ? "white" : "black"
          }`}
        />
      </div>
    </div>
  );
};

export default ImageSelector;
