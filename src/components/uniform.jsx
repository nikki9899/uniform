import React from "react";
import { commercialLabels } from "@/utils/labels/commercialLabels";

function Uniform() {
  let { heading,heading1, text, text1, text2, Caption } = commercialLabels;
  return (
    <div className="  display-flex">
      <div className=" h-[2px] text-black text-[50px] not-italic font-semibold leading-normal tracking-[-2px] font-manrope">
        <p>
          {heading} <br /> {heading1}
        </p>
      </div>

      <div className="  text-black text-right text-base not-italic font-normal leading-normal tracking-[-0.64px] font-manrope ">
        <p>
          {text}
          <br /> {text1}
          <br /> {text2}
        </p>
      </div>

      <div className="  pt-[200px] text-black text-center text-[76.072px] not-italic font-medium leading-normal tracking-[-3.123px] font-mADE Outer Sans">
        <p>{Caption}</p>
      </div>
    </div>
  );
}

export default Uniform;
