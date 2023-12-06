import React from "react";
import { descriptionLabels } from "@/utils/labels/descriptionLabels";

const description = ({ productData }) => {
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


  const feature1Array = Array(3).fill(feature1);

  return (
    <div className="mt-20">
      <div className="text-gray-900 font-manrope text-lg">
        <h1>
          <span className="font-bold">{text}:</span>{productData.brand}
        </h1>
        <p>
          <span className="font-bold">{text1}:</span> {productData.availability}
        </p>
        <p>
          <span className="font-bold">{text2}:</span> {productData.MPN}
        </p>
        <p>
          <span className="font-bold">{text3}:</span> {productData.GrossWeight}
        </p>
        <p>
          <span className="font-bold">{text4}:</span> {productData.DeliveryTime}
        </p>
        <p>
          <span className="font-bold">{text5}:</span>  {productData.PlaceOfMfg}
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