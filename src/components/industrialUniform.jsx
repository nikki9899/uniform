import React from "react";


const IndustrialUniform = ({ heading, description }) => {
  return (

    <div>
      <div className="mb-[44px] text-center text-black text-[115px] not-italic font-medium leading-[80.724px] tracking-[-4.6px] font-manrope">
        <h1>{heading}</h1>
      </div>
      <div className="text-center text-gray-700 text-[34px] not-italic font-normal leading-[26.645px] lowercase font-Poppins;">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IndustrialUniform;

