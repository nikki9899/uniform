;import React from "react";
import { descriptionLabels } from "@/utils/labels/descriptionLabels";

const description = () => {
  let {
    text,
    text1,
    text2,
    text3,
    text4,
    text5,
    data,
    data1,
    data2,
    data3,
    data4,
    data5,
    heading,
    feature1,
    feature2,
    feature3
  } = descriptionLabels;

  // Create an array to repeat feature1 three times (as you want it to appear 4 times including the first one)
  const feature1Array = Array(3).fill(feature1);

  return (
    <div className="mt-20">
      <div className="text-gray-900 font-manrope text-lg">
        <h1>
          <span className="font-bold">{text}:</span> {data}
        </h1>
        <p>
          <span className="font-bold">{text1}:</span> {data1}
        </p>
        <p>
          <span className="font-bold">{text2}:</span> {data2}
        </p>
        <p>
          <span className="font-bold">{text3}:</span> {data3}
        </p>
        <p>
          <span className="font-bold">{text4}:</span> {data4}
        </p>
        <p>
          <span className="font-bold">{text5}:</span> {data5}
        </p>
        <p>
        <span className="font-bold">{heading}:</span> <span className="ml-3">{feature1}</span>
        </p>
        <p className="ml-24">{feature2}</p>
        <p className="ml-24">{feature3}</p>
      </div>
    </div>
  );
};

export default description;