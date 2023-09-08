import React from "react";
import ImageContainer from "./ImageContainer";
import { Carrot } from "@svgs/index";
import CircularButton from "@/components/atoms/CircularButton";

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
        {data.map(({ id, smallImageSrc, alt }, index) => (
          <ImageContainer
            key={id}
            src={smallImageSrc}
            alt={alt}
            selected={selectedImage === index}
            onImageClick={onImageClick.bind(null, index)}
          />
        ))}
      </div>

      <div className="flex flex-col gap-y-5 w-fit">
        <CircularButton
          onClick={upButtonHandler}
          backgroundColor={`${selectedImage === 0 ? "white" : "black"}`}
        >
          <Carrot className={`text-${selectedImage === 0 ? 'black' : 'white'} text-xl`} />
        </CircularButton>

        <CircularButton
          onClick={downButtonHandler}
          backgroundColor={`${
            selectedImage === data.length - 1 ? "white" : "black"
          }`}
        >
          <Carrot className={`text-${selectedImage === data.length-1 ? 'black' : 'white'} rotate-180 text-xl`} />
        </CircularButton>
      </div>
    </div>
  );
};

export default ImageSelector;
