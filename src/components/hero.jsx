import React from "react";
import { heroLabels } from "@/utils/labels/heroLabels";
import Button from "./atoms/button";

function Hero({hero}) {
  let { heading, headingPart2, description } = heroLabels;

  return (
    <div className="relative py-4 mt-20 md:px-0">
      <div className=" text-center font-manrope text-4xl md:text-[115px] md:font-normal font-medium md:leading-[152px] leading-[50px] md:tracking-[-4.6px]">
        <h2>{heading}</h2>
        <div className=" -z-10 absolute top-[73px] left-[65px] md:top-48 md:left-96 transform translate-x-0 md:-translate-x-1/2 -translate-y-1/2">
          <img className='w-24 md:w-auto ' src="/Images/Doctor.png" alt="test data"/>
        </div>
        <h3 className="md:pl-[301px] pl-[85px]">{headingPart2}</h3>
      </div>
      <div className="text-center text-gray-900 text-xs md:text-4xl font-medium md:font-normal font-poppins leading-[26.645px] lowercase">
        <p>{description}</p>
      </div>
      <div className="text-center md:my-10 my-3 ">
        <Button  variant="primary" rounded="semi" 
        addStyle={`bg-slate-300 opacity-25 text-gray-400 border-gray-900 opacity-50`} >
          <p className="p-1 text-sm font-normal " >enquire now</p>
        </Button>
          
      </div>
    </div>
  );
}

export default Hero;
