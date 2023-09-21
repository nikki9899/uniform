'use client'
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons, CrouselButton } from "./CrouselButton";
import { RightArrow } from "@svgs/index";

const Carousel = ({ options, children, navigationButtons }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row">{children}</div>
      </div>

      {navigationButtons && (
        <div className="Naivgation-buttons">
          <CrouselButton
            className="absolute -translate-y-1/2 top-1/2 -left-3 shadow-uniform rounded-full p-5 backdrop-blur-[3px]"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <RightArrow className="rotate-180 text-2xl" />
          </CrouselButton>

          <CrouselButton
            className="absolute -translate-y-1/2 top-1/2 -right-3 shadow-uniform rounded-full p-5 backdrop-blur-[3px]"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <RightArrow className="text-2xl" />
          </CrouselButton>
        </div>
      )}
    </div>
  );
};

export default Carousel;
