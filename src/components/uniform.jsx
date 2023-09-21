import React from "react";
import { commercialLabels } from "@/utils/labels/commercialLabels";

import Button from "./atoms/button";

 const CommercialUniformSection=()=> {
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

      <div className="  justify-center  w-[95.8%] text-center  pt-60  flex text-black text-7xl  font-bold leading-123 tracking-[-2.123px] font-[MADE Outer Sans]">
        <div className="   w-[260px] -z-10 absolute my-[-160px]  ml-[-8px]  ">
        <img src="/Images/Mask group.png" />
        </div>
        <p>
          {caption}
          <br /> {caption1}
        </p>
      </div>
      <div className="mt-[66px] ml-[540px] h-[83px]  ">
        <Button variant="primary" rounded="full" >
          <p>shop now</p>
        </Button>
          
      </div>
    </div>
  );
}

export default CommercialUniformSection;
