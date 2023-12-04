import React from 'react';
import Link from 'next/link';
import Button from './atoms/button'
import CategoriesCard from './atoms/categoriesCard.'


async function PopularSubCategories({
  popularSubCategories: {
    sub_categories: { data = [] },
  },
}) {
  const popSubCat = data?.map((entry) => ({
    Id: entry.id,
    ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
    Name: entry.attributes?.name || '',
    // slug: entry.attributes?.slug || '', 
  })) || [];

  return (
    <div className="w-full pb-5">
      <h2 className="text-gray-900 font-manrope font-medium text-4xl lowercase">
        popular sub-categories
      </h2>
      <div className="flex pt-10 gap-3  flex-row flex-row-reverse">
        {popSubCat.map((item, index) => (
          <Link key={item.Id} href={`/plp/${item.Name}`}>
            <div className={index === 2 ? 'basis-[46%]' : 'basis-[27%]'}>
              <CategoriesCard item={item} />
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="flex mt-4 gap-3  flex-row ">
        {popSubCat.map((item, index) => (
          <Link key={item.Id} href={`/plp/${item}`}>
            <div className={index === 2 ? 'basis-[46%]' : 'basis-[27%]'}>
              <CategoriesCard item={item} />
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
}

export default PopularSubCategories;

