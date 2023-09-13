import React from "react";
import product_card from "@/data/data";
import { wish_list } from "@/utils/constants";
import { searchLabels } from "@/utils/labels/label";

const Popular = () => {
  const items = product_card.map(
    ({ id, product_name, description, product_image, product_price }) => (
      <div className="mx-7 w-500 mb-12" key={id}>
        <div className="w-72 relative">
          <img src={product_image} alt="suit" />
          <div className="absolute top-3 right-3">
            <img src={wish_list.wish} alt="wishlist" />
          </div>
        </div>
        <div>
          <div className="flex justify-between ">
            <h3 className="text-sm font-semibold leading-7">{product_name}</h3>
            <h3 className="text-sm font-semibold leading-7">{product_price}</h3>
          </div>
          <p className="text-xs font-medium text-start text-gray-500 leading-7">
            {description}
          </p>
          <div className="text-left">
            <button class="text-xs border-black border-2 text-black font-normal py-2 px-4 rounded-full">
              Enquire now
            </button>
          </div>
        </div>
      </div>
    )
  );
  return (
    <div className="py-5 max-w-full mx-auto max-w-screen-full text-center lg:py-7">
      <div className="text-3xl font-medium mb-2 ml-10 text-left">
        {searchLabels.heading}
      </div>

      <div className=" w-calc(100% / 3) max-w-screen-full lg flex flex-nowrap mx-5 my-5 overflow-x-auto  ">
        {items}
      </div>
    </div>
  );
};
export default Popular;
