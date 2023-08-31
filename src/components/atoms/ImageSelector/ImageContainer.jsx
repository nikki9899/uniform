import React from "react";
import Image from "next/image";

const ImageContainer = ({ src, alt, selected, onImageClick }) => {
  return (
    <div
      className={`w-28 h-28 box-content p-2 rounded-3xl border-2 ${
        selected ? "border-black" : "border-transparent"
      }`}
      onClick={onImageClick}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full rounded-3xl border"
        width="112"
        height="112"
      />
    </div>
  );
};

export default ImageContainer;
