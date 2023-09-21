import React from "react";
import { heroLabels } from "@/utils/labels/heroLabels";
import Button from "./atoms/button";

function Hero() {
  let { heading, headingPart2, description } = heroLabels;

  return (
    <div className=" relative">
      <div className=" text-center font-manrope text-8xl font-medium leading-[152px] tracking-[-4.6px]">
        <h2>{heading}</h2>
        <div className=" -z-10 absolute top-44 ml-[390px] left-0 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/Images/Doctor.png" />
        </div>
        <h3 className="pl-[301px]">{headingPart2}</h3>
      </div>
      <div className="ml-96 mt-7  text-gray-900 text-4xl  font-poppins leading-[26.645px] lowercase">
        <p>{description}</p>
      </div>
      <div className="mt-[73px] ml-[540px] h-[91px]  ">
        <Button variant="primary" rounded="semi" >
          <p>enquire now</p>
        </Button>
          
      </div>
    </div>
  );
}

export default Hero;
