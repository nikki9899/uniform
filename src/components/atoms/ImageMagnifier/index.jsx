import React from "react";
 import ReactImageMagnify from "react-image-magnify";

const ImageMagnifier = ({
  smallImageSrc,
  largeImageSrc,
  smallImageAlt = "Small Image",
  largeImageAlt = "Large Image",
  width = 300,
  height = 300,
  scale = 3,
}) => {
  return (
    <>
      <ReactImageMagnify
      isHintEnabled
      {...{
        style: { margin:' auto' },
        smallImage: {
          alt: smallImageAlt,
          src: smallImageSrc,
          width: width,
          height: height,
        },
        largeImage: {
          alt: largeImageAlt,
          src: largeImageSrc,
          width: width * scale,
          height: height * scale,
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
    </>
  );
};

export default ImageMagnifier;