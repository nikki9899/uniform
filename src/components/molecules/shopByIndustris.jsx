'use client'
import React, { useState, useEffect } from 'react'
import ImageCard from '../atoms/ImageCard'
import Link from 'next/link'
import Button from '../atoms/button'

const Header = ({
    heading,
    quicklinks,
    linkData,
    industrialSectors,
    showAllHeadings,
    toggleSeeAll,
}) => {
    return (
        <div>
            <ul className="text-[10px] sm:text-lg  lg:leading-10 sm:leading-9 text-gray-800  font-normal leading-5  capitalize mt-6">
                {industrialSectors
                    .slice(0, showAllHeadings ? industrialSectors.length : 3)
                    .map((sector) => (
                        <li key={sector.id}>
                            <Link href={`/plp/${sector.attributes?.name}`}>
                                {sector.attributes?.name}
                            </Link>
                        </li>
                    ))}
            </ul>
            <div
                className="text-black font-manrope font-bold md:font-medium text-xs sm:text-2xl lg:text-2xl leading-10 cursor-pointer"
                onClick={toggleSeeAll}
            >
                {showAllHeadings ? 'See Less' : 'See All'}
            </div>
        </div>
    )
}

const ShopByIndustries = ({ shopByCategory }) => {
    const shopByCategoryDescription =
        shopByCategory?.shopByCategory?.description
    const products =
        shopByCategory.sub_categories?.data?.map((entry) => ({
            id: entry.id,
            title: entry.attributes?.name || '',
            ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
            price: entry.attributes?.products?.data[0]?.attributes
                ?.product_detail?.data?.attributes?.price,
            description: entry.attributes?.description,
        })) || []

    const quickLinks = shopByCategory.quicklinks?.listItems || []
    const industrialSectors = shopByCategory.sub_categories?.data || []

    const [isDesktop, setIsDesktop] = useState(false)
    const [showAllProducts, setShowAllProducts] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        setIsDesktop(window.innerWidth >= 768)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleSeeAllClick = () => {
        setShowAllProducts(!showAllProducts)
    }

    const shouldDisplaySeeAllButton = !isDesktop && products.length > 3;

    return (
        <div className="pb-8 mt-[40px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-5 md:gap-x-5 md:gap-y-5 lg:gap-y-9 ">
            <div className="col-span-1 rounded-lg">
                <h2 className="text-black font-manrope  sm:hidden lg:hidden text-lg  font-semibold leading-6 ">
                    Shop by Industrial Sectors
                </h2>
                <h2 className=" hidden  sm:block  text-black font-manrope text-3xl  tracking-[-2px] lg:text-5xl lg:leading-[68px] font-semibold  ">
                    Shop by <br /> Industrial Sectors
                </h2>
                <Header
                    heading={shopByCategory.heading}
                    quicklinks={quickLinks}
                    linkData={shopByCategory.linkData}
                    industrialSectors={industrialSectors}
                    showAllHeadings={showAllProducts}
                    toggleSeeAll={handleSeeAllClick}
                />
            </div>

            {products
                .slice(0, isDesktop ? 5 : showAllProducts ? products.length : 3)
                .map((product) => (
                    <Link key={product.id} href={`/plp/${product.title}`}>
                        <div className="col-span-1 mt-4">
                            <ImageCard
                                iconDisplay="hidden"
                                classnames="rounded h-[30rem] rounded md:h-[400px] lg:h-[500px] "
                                productImage={product.ImgSrc}
                            />

                            <div className="flex justify-between mt-3">
                                <h3 className="text-gray-900 font-manrope text-xs md:text-sm md:leading-6 font-bold leading-5">
                                    {product.title}
                                </h3>
                                <span className=" overflow-hidden text-center text-[7px] sm:text-xs sm:leading-6 leading-4 font-bold lg:text-sm lg:leading-[26.645px] ">
                                    {product.price} INR
                                </span>
                            </div>
                            <p className="text-gray-400 font-manrope text-[9px] md:text-xs md:leading-6  my-1 font-medium leading-5">
                                {product.description}
                            </p>

                            <div className="hidden md:block">
                                <Button variant="primary" rounded="full">
                                    <p>enquire now</p>
                                </Button>
                            </div>
                        </div>
                    </Link>
                ))}
            {shouldDisplaySeeAllButton && (
                <div className="md:hidden flex justify-center item-center mt-[30px] h-6 ">
                    <Button
                        variant="primary"
                        rounded="full"
                        onClick={handleSeeAllClick}
                    >
                        <p className="text-[8px] font-medium leading-3">
                            {showAllProducts ? 'See Less' : 'See More'}
                        </p>
                    </Button>
                </div>
            )}
        </div>
    )
}

export default ShopByIndustries

