import React from "react";
import { commercialLabels } from "@/utils/labels/commercialLabels";
import Maskgroup from "/public/Maskgroup.svg";
import Button from "./atoms/button";

function commercialUniformSection() {
  let { heading, heading1, text, text1, text2, caption, caption1 } =
    commercialLabels;
  return (
    <div className=" relative py-9">
      <div className=" h-[2px] text-black text-5xl font-semibold leading-normal tracking-[-2px] font-manrope">
        <h2>
          {heading} <br /> {heading1}
        </h2>
      </div>

      <div className=" pt-10 text-black text-right text-base font-normal leading-normal tracking-[-0.64px] font-manrope ">
        <p>
          {text}
          <br /> {text1}
          <br /> {text2}
        </p>
      </div>

      <div className="  w-[95.8%] text-center  pt-60  flex text-black text-7xl  font-bold leading-123 tracking-[-2.123px] font-[MADE Outer Sans]">
        <div className="  w-[260px] -z-10 absolute my-[-160px]  ml-[380px]  ">
          <img src={Maskgroup.src}></img>
        </div>
        <p>
          {caption}
          <br /> {caption1}
        </p>
      </div>
      <div className=" h-[70px] flex justify-center items-center">
        <Button variant="shop now" rounded="Full" />
      </div>
    </div>
  );
}

export default commercialUniformSection;
