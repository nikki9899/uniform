//import './App.css';
import React from "react";
import Doctor from "./doctor.svg";

function Hero() {
  return (
    <div className="item-center relative">
      <div className="text-center font-manrope text-8xl font-medium leading-[152px] tracking-[-4.6px]">
        <h1>A Perfect Uniform</h1>
        <div className="absolute top-44  ml-[165px] left-0 transform -translate-x-1/2 -translate-y-1/2">
          <img src={Doctor.src} alt="Doctor" />
        </div>
        <h1 className="ml-[301px] mt-6">Solution</h1>
      </div>
      <div className="ml-36 mt-8  text-[#1E1E1E] text-4xl not-italic font-poppins leading-[26.645px] lowercase">
        <h9>buy branded & corporate apparel</h9>
      </div>
    </div>
  );
}

export default Hero;
