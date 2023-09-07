"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCrouselButtons";
import imageByIndex from "../../../mockData/crouselData";
// import "./embla.css";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
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
        <div className="flex flex-row">
          {slides.map((index) => (
            <div
              className="grow-0 shrink-0 basis-[calc(100%/3)] px-2 relative rounded-lg"
              key={index}
            >
              <img
                className="h-[26rem] w-full rounded-lg"
                src={imageByIndex(index).src}
                alt="Your alt text"
              />
              <button className={"absolute top-4 left-4"}>
                Industrial Clothing
              </button>
            </div>
          ))}
        </div>
      </div>

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
};

export default EmblaCarousel;
