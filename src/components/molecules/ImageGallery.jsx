"use client";
import React, { useState } from "react";
import ImageSelector from "../atoms/ImageSelector/ImageSelector";
import ReactImageMagnify from "react-image-magnify";

const ImageGallery = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const onImageClickHandler = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className={"flex"}>
      <ImageSelector
        data={data}
        OnImageClick={onImageClickHandler}
        selectedImage={selectedImage}
      />
      <ReactImageMagnify
        isHintEnabled
        shouldHideHintAfterFirstActivation={false}
        hoverDelayInMs={100}
        {...{
          style: { marginLeft: "2rem" },
          smallImage: {
            alt: "Small Image",
            src: data[selectedImage].img,
            isFluidWidth : true,
          },
          largeImage: {
            alt: "Large Image",
            src: data[selectedImage].img,
            width: 1200,
            height: 1800,
          },

          enlargedImageContainerStyle: {
            borderRadius: "1rem",
          },

          enlargedImageStyle: {
            backgroundPosition: "center",
            maxWidth: "max-content",
            borderRadius: "1rem",
          },

          shouldUsePositiveSpaceLens: true,

          imageStyle: {
            borderRadius: "1rem",
          },

          lensStyle: {
            borderRadius: "1rem",
          },
        }}
      />
    </div>
  );
};

export default ImageGallery;
