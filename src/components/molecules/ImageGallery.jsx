"use client";
import React, { useState } from "react";
import ImageSelector from "@/components/atoms/ImageSelector/ImageSelector";
import ImageMagnifier from "@/components/atoms/ImageMagnifier";

const ImageGallery = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const onImageClickHandler = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className={"flex"}>
      <ImageSelector
        data={data}
        onImageClick={onImageClickHandler}
        selectedImage={selectedImage}
      />

      <ImageMagnifier
        smallImageSrc={data[selectedImage].src}
        largeImageSrc={data[selectedImage].src}
        width={500}
        height={600}
      />
    </div>
  );
};

export default ImageGallery;
