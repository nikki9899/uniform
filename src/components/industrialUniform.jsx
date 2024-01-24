import React from "react";


const IndustrialUniform = ({ heading, description  }) => {
  let HeadingString = decodeURIComponent(heading);

  return (
    <div className="mt-16 md:mt-32">
      <div className="md:mb-[44px] text-center text-black text-[40px] md:text-[115px] not-italic font-normal leading-[80.724px] tracking-[-1.5px] md:tracking-[-4.6px] font-manrope capitalize">
        <h1>{HeadingString}</h1>
      </div>
      <div className="text-center text-gray-700 text-[14px] md:text-[34px] not-italic font-normal leading-[26.645px] lowercase font-Poppins;">
        <p>{description ?? `BUY customized ${HeadingString} workwear` }</p>
      </div>
    </div>
  );
};

export default IndustrialUniform;

