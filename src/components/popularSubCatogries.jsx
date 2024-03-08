import React from 'react'
import Link from 'next/link'
import Button from './atoms/button'
import CategoriesCard from './atoms/categoriesCard.'
import Carousel from './atoms/Crousel'
import Image from 'next/image'

async function PopularSubCategories({
    popularSubCategories: {
        sub_categories: { data = [] },
    },
}) {
    const popSubCat =
        data?.map((entry) => ({
            Id: entry.id,
            ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
            Name: entry.attributes?.name || '',
        })) || []

    return (
        <div className="w-full mb-2 pb-8 mt-[40px]">
            <h2 className="text-gray-900 leading-3 font-medium text-sm md:leading-6 md:text-4xl lowercase">
                popular sub-categories
            </h2>
            <div className="md:hidden">
                <Carousel
                    options={{
                        dragFree: true,
                        containScroll: 'trimSnaps',
                    }}
                    navigationButtons={true}
                >
                    {data.map(
                        (
                            {
                                id,
                                attributes: {
                                    name,
                                    slug,
                                    image: {
                                        data: {
                                            attributes: { url },
                                        },
                                    },
                                },
                            },
                            index
                        ) => {
                            return (
                                <div
                                    className={`${
                                        (index + 1) % 5 === 0
                                            ? 'sm:basis-[50%]  xx:basis-[63%] basis-[73%] '
                                            : 'sm:basis-[50%] xx:basis-[63%] basis-[73%] '
                                    } grow-0 shrink-0 relative rounded-lg md:hidden mt-5 relative
                  }`}
                                    key={id}
                                >
                                    <Link href={`/plp/${name}`}>
                                        <Image
                                            className=" h-52 w-full rounded-lg object-cover object-top"
                                            width={500}
                                            height={500}
                                            src={url}
                                            alt={name}
                                        />
                                        <Button
                                            rounded="full"
                                            variant="primary"
                                            addStyle="text-white text-base border-1 border-white bg-slate-800 bg-opacity-30 absolute top-4 left-4"
                                        >
                                            <p className="text-[7px]  ">
                                                {name}
                                            </p>
                                        </Button>
                                    </Link>
                                </div>
                            )
                        }
                    )}
                </Carousel>
            </div>

            <div className="hidden md:block">
                {' '}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-4 md:pt-10">
                    {popSubCat.map((item, index) => (
                        <Link key={item.id} href={`/plp/${item.Name}`}>
                            <div className="flex-shrink-0 w-full">
                                <CategoriesCard item={item} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularSubCategories
