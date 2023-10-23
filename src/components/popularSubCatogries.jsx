import React from 'react'
import Button from './atoms/button'
import CategoriesCard from './atoms/categoriesCard.'

async function PopularSubCategories({
    popularSubCategories: {
        sub_categories: { data = [] },
    },
}) {
    const popSubCat =
        data?.map((entry) => {
            return {
                Id: entry.id,
                ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
                Name: entry.attributes?.name || '',
            }
        }) ?? []

    return (
        <div className="w-full pb-5">
            <h2 className="text-gray-900 font-manrope font-medium text-4xl lowercase">
                popular sub-categories
            </h2>
            <div className="flex pt-10 gap-3  flex-row flex-row-reverse">
                {popSubCat.map((item, index) => (
                    <div
                        key={item.Id} // Use the Id as the key
                        className={index == 2 ? 'basis-[46%]' : 'basis-[27%]'}
                    >
                        <CategoriesCard item={item} />
                    </div>
                ))}
            </div>
            <div className="flex mt-4 gap-3  flex-row ">
                {popSubCat.map((item, index) => (
                    <div
                        key={item.Id} // Use the Id as the key
                        className={index == 2 ? 'basis-[46%]' : 'basis-[27%]'}
                    >
                        <CategoriesCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularSubCategories
