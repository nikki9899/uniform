import React from "react";
import { HeroLabels } from "@/utils/labels/heroLabels";

function Hero() {
  let { Heading, Headingpart2, Description } = HeroLabels;
  return (
    <div className=" relative">
      <div className="text-center font-manrope text-8xl font-medium leading-[152px] tracking-[-4.6px]">
        <h2>{Heading}</h2>
        <h2 className="pl-[301px] mt-6">{Headingpart2}</h2>
      </div>
      <div className="ml-36 mt-8  text-gray-900 text-4xl  font-poppins leading-[26.645px] lowercase">
        <h2>{Description}</h2>
      </div>
    </div>
  );
}

export default Hero;
