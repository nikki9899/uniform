import React from "react";
import product_card from "@/data/data";
import { searchLabels } from "@/utils/labels/label";

const Popular = () => {
  // console.log(product_card);
  const listItems = product_card.map((item) => (
    <div className="mx-7 w-500 mb-12" key={item.id}>
      <div className="w-72 relative">
        <img src={item.thumb} alt="suit" />
        <div className="absolute top-3 right-3">
          <img src={item.wish} alt="suit" />
        </div>
      </div>
      <div>
        <div className="flex justify-between ">
          <h3 className="text-sm font-semibold leading-7">
            {item.product_name}
          </h3>
          <h3 className="text-sm font-semibold leading-7">{item.price}</h3>
        </div>
        <p className="text-xs font-medium text-start text-gray-500 leading-7">
          {item.description}
        </p>
        <div className="text-left">
          <button class="text-xs border-black border-2 text-black font-normal py-2 px-4 rounded-full">
            Enquire now
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="py-5 max-w-full mx-auto max-w-screen-full text-center lg:py-7">
      <h2 className="text-3xl font-medium mb-2 ml-10 text-left">
        {searchLabels.heading}
      </h2>
      <div className=" w-calc(100% / 3) max-w-screen-full lg flex flex-nowrap mx-5 my-5 overflow-x-auto  ">
        {listItems}
      </div>
    </div>
  );
};
export default Popular;
