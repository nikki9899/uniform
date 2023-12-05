import React from 'react';
import Link from 'next/link';
import Button from './atoms/button';
import CategoriesCard from './atoms/categoriesCard.';

async function PopularSubCategories({
  popularSubCategories: {
    sub_categories: { data = [] },
  },
}) {

  const popSubCat = data?.map((entry) => ({
    
    Id: entry.id,
    ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
    Name: entry.attributes?.name || '',
    
  })) || [];

  

  return (
    <div className="w-full pb-5">
      <h2 className="text-gray-900 font-manrope font-medium text-4xl lowercase">
        popular sub-categories
      </h2>
      <div className="grid grid-cols-3 gap-3 pt-10">
      
        {popSubCat.map((item, index) => (
          <Link key={item.Id} href={`/plp/${item.Name}`}>
            <div className="flex-shrink-0 w-full">
              <CategoriesCard item={item} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularSubCategories;


