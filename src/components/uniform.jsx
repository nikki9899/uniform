import React from "react";
import { commercialLabels } from "@/utils/labels/commercialLabels";

function commercialUniformSection() {
  let { heading, heading1, text, text1, text2, caption } = commercialLabels;
  return (
    <div className="  display-flex">
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

      <div className="  pt-48 text-black text-center text-7xl  font-medium leading-normal tracking-[-3.123px] font-mADE Outer Sans">
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default commercialUniformSection;
