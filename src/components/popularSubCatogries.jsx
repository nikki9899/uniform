import React from 'react';
import Button from './atoms/button';
import { getAPI } from '@/utils/api';

async function PopularSubCategories() {
  const {data} = await getAPI("home-page");

  const popSubCatImg = data.attributes.popularSubCategories.sub_categories.data.map((entry) => {
    return {
      Id: entry.id,
      ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
      Name: entry.attributes?.name || '',
    };
  });

  const reverseImg = [...popSubCatImg].reverse();
  return (
    <div className="w-full pb-5">
      <h2 className="text-gray-900 font-manrope font-medium text-4xl lowercase">
        popular sub-categories
      </h2>
      <div className="flex pt-10 gap-3">
        {reverseImg.map((item) => (
          <div
            key={item.Id} // Use the Id as the key
            className={`h-96 relative  `}
          >
            <img
              src={item.ImgSrc}
              className="w-full h-full rounded object-cover"
              alt={`Category ${item.Id}`}
            />
            <Button
              rounded="full"
              variant="primary"
              addStyle={
                item.Id === 6
                  ? "text-black border-2 border-black absolute top-7 left-7"
                  : "text-white border-2 border-white absolute top-7 left-7"
              }
            >
              <p style={{ fontSize: "16px" }}>{item.Name}</p>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex gap-3 pt-3">
        {popSubCatImg.map((item) => (
          <div
            key={item.Id} // Use the Id as the key
            className={`w-${item.Id <= 1 ? "4/12" : "6/12"} h-96 relative`}
          >
            <img
              src={item.ImgSrc}
              className="w-full h-full rounded object-cover"
              alt={`Category ${item.Id}`}
            />
            <Button
              rounded="full"
              variant="primary"
              addStyle={
                item.Id === 6
                  ? "text-black border-2 border-black absolute top-7 left-7"
                  : "text-white border-2 border-white absolute top-7 left-7"
              }
            >
              <p style={{ fontSize: "16px" }}>{item.Name}</p>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularSubCategories;
