"use client";

import React from "react";
import ImageContainer from "./ImageContainer";
import { ProductDetailPageImages } from "../../../images/index";

const ImageSelector = ({ data, OnImageClick, selectedImage }) => {
  

  const upButtonHandler = () => {
    if (selectedImage === 0) OnImageClick(data.length - 1);
    else OnImageClick(selectedImage - 1);
  };

  const downButtonHandler = () => {
    if (selectedImage === data.length - 1) OnImageClick(0);
    else OnImageClick(selectedImage + 1);
  };

  return (
    <div className={"flex flex-col w-fit gap-y-12 items-center"}>
      <div className="flex flex-col">
        {data.map((ele, index) => (
          <ImageContainer
            key={ele.id}
            src={ele.img}
            alt={ele.alt}
            selected={selectedImage === index}
            onImageClick={OnImageClick.bind(null, index)}
          />
        ))}
      </div>

      <div className="flex flex-col gap-y-5 w-fit">
        <button
          onClick={upButtonHandler}
          className={
            "bg-black flex justify-center py-4 px-3 w-fit rounded-full"
          }
        >
          <img src={ProductDetailPageImages.carrot.src} alt="down button" className={'rotate-180'}/>
        </button>

        <button
          onClick={downButtonHandler}
          className={
            "bg-black flex justify-center py-4 px-3 w-fit rounded-full"
          }
        >
          <img src={ProductDetailPageImages.carrot.src} alt="down button" />
        </button>
      </div>
    </div>
  );
};

export default ImageSelector;
