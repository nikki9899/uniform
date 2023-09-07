"use client";
import React, { useCallback, useEffect, useState } from "react";
// import './embla.css';

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
    className={"absolute -translate-y-1/2 top-1/2 left-0 shadow-uniform rounded-full p-5 backdrop-blur-[3px]"}
      type="button"
      {...restProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_351_260)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.29302 12.707C8.10555 12.5195 8.00024 12.2652 8.00024 12C8.00024 11.7348 8.10555 11.4805 8.29302 11.293L13.95 5.636C14.0423 5.54049 14.1526 5.46431 14.2746 5.4119C14.3966 5.35949 14.5278 5.33191 14.6606 5.33075C14.7934 5.3296 14.9251 5.3549 15.048 5.40518C15.1709 5.45546 15.2825 5.52972 15.3764 5.62361C15.4703 5.7175 15.5446 5.82915 15.5948 5.95205C15.6451 6.07494 15.6704 6.20662 15.6693 6.3394C15.6681 6.47218 15.6405 6.6034 15.5881 6.72541C15.5357 6.84741 15.4595 6.95776 15.364 7.05L10.414 12L15.364 16.95C15.5462 17.1386 15.647 17.3912 15.6447 17.6534C15.6424 17.9156 15.5373 18.1664 15.3518 18.3518C15.1664 18.5372 14.9156 18.6424 14.6534 18.6447C14.3912 18.647 14.1386 18.5462 13.95 18.364L8.29302 12.707Z"
            fill="#1E1E1E"
          />
        </g>
        <defs>
          <clipPath id="clip0_351_260">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(24 24) rotate(-180)"
            />
          </clipPath>
        </defs>
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={"absolute -translate-y-1/2 top-1/2 right-0 shadow-uniform rounded-full p-5 backdrop-blur-[3px]"}
      type="button"
      {...restProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_351_254)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.7071 11.293C15.8946 11.4805 15.9999 11.7348 15.9999 12C15.9999 12.2652 15.8946 12.5195 15.7071 12.707L10.0501 18.364C9.95785 18.4595 9.84751 18.5357 9.7255 18.5881C9.6035 18.6405 9.47228 18.6681 9.3395 18.6692C9.20672 18.6704 9.07504 18.6451 8.95215 18.5948C8.82925 18.5445 8.7176 18.4703 8.6237 18.3764C8.52981 18.2825 8.45556 18.1708 8.40528 18.048C8.355 17.9251 8.32969 17.7934 8.33085 17.6606C8.332 17.5278 8.35959 17.3966 8.412 17.2746C8.46441 17.1526 8.54059 17.0422 8.6361 16.95L13.5861 12L8.6361 7.05C8.45394 6.8614 8.35315 6.60879 8.35542 6.3466C8.3577 6.0844 8.46287 5.83359 8.64828 5.64818C8.83369 5.46277 9.0845 5.3576 9.3467 5.35532C9.60889 5.35305 9.8615 5.45384 10.0501 5.636L15.7071 11.293Z"
            fill="#1E1E1E"
          />
        </g>
        <defs>
          <clipPath id="clip0_351_254">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {children}
    </button>
  );
};
