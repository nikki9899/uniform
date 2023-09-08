import React from "react";

import { HeroLabels } from "@/utils/labels/heroLabels";


function Hero() {
  let { heading, headingpart2, Description } = HeroLabels;
  return (
    <div className=" relative">
      <div className="text-center font-manrope text-8xl font-medium leading-[152px] tracking-[-4.6px]">
        <h1>{heading}</h1>
        <h1 className="pl-[301px] mt-6">{headingpart2}</h1>
      </div>
      <div className="ml-36 mt-8  text-[#1E1E1E] text-4xl  font-poppins leading-[26.645px] lowercase">
        <h9>{Description}</h9>
      </div>
    </div>
  );
}

export default Hero;
