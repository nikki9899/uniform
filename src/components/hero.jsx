import React from "react";
import { heroLabels} from "@/utils/labels/heroLabels";

function Hero() {
  let { heading, headingPart2, description } = heroLabels;
  return (
    <div className=" relative">
      <div className="text-center font-manrope text-8xl font-medium leading-[152px] tracking-[-4.6px]">
        <h2>{heading}</h2>
        <h3 className="pl-[301px] mt-6">{headingPart2}</h3>
      </div>
      <div className="ml-36 mt-8  text-gray-900 text-4xl  font-poppins leading-[26.645px] lowercase">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Hero;
