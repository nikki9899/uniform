import React from "react";
import { safetyLabels } from "@/utils/labels/safetyLabels";

const BodySafety = () => {
  let { heading, description } = safetyLabels;
  return (
    <div>
      <div className="w-[1328px] h-[62px] mb-[53px] text-center text-black text-[115px] not-italic font-medium leading-[26.645px] font-manrope">
        <h1>{heading}</h1>
      </div>
      <div className="  text-center text-[#1E1E1E] text-[34px] not-italic font-normal leading-[26.645px] lowercase font- Poppins">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BodySafety;
