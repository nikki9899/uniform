'use client'
import Button from '../atoms/button'
import React, { useState, useEffect } from 'react'
import ImageCard from '../atoms/ImageCard'
import Link from 'next/link'

const Header = ({
    heading,
    quicklinks,
    linkData,
    industrialSectors,
    showAllHeadings,
    onSeeAllClick,
}) => {
    return (
        <div>
            <ul className="text-sm sm:text-lg sm:font-semibold lg:text-xl lg:leading-2 sm:leading-9 text-gray-800  font-normal leading-5  capitalize mt-6">
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
            {!showAllHeadings && (
                <div
                    className="text-black font-manrope font-medium text-lg sm:text-2xl lg:text-2xl leading-10"
                    onClick={onSeeAllClick}
                >
                    See All
                </div>
            )}
        </div>
    )
}

const ShopByIndustries = ({ shopByCategory }) => {
    const products =
        shopByCategory.sub_categories?.data?.map((entry) => ({
            id: entry.id,
            title: entry.attributes?.name || '',
            ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
        })) || []

    const quickLinks = shopByCategory.quicklinks?.listItems || []
    const industrialSectors = shopByCategory.sub_categories?.data || []

    const [isDesktop, setIsDesktop] = useState(false)
    const [showAllHeadings, setShowAllHeadings] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        setIsDesktop(window.innerWidth >= 768)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleSeeAllClick = () => {
        setShowAllHeadings(true)
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-x-5 sm:gap-x-5 sm:gap-y-5 lg:gap-y-9 ">
            <div className="col-span-1 rounded-lg">
                <h2 className="text-black font-manrope text-lg sm:text-4xl lg:text-5xl font-semibold lg:font-normal leading-6 ">
                    Shop by <br /> Industrial Sectors
                </h2>

                <Header
                    heading={shopByCategory.heading}
                    quicklinks={quickLinks}
                    linkData={shopByCategory.linkData}
                    industrialSectors={industrialSectors}
                    showAllHeadings={showAllHeadings}
                    onSeeAllClick={handleSeeAllClick}
                />
            </div>

            {products.slice(0, isDesktop ? 5 : 3).map((product) => (
                <Link key={product.id} href={`/plp/${product.title}`}>
                    <div className="col-span-1 mt-4">
                        <ImageCard
                            iconDisplay="hidden"
                            classnames="rounded h-[30rem] rounded md:h-[480px] "
                            productImage={product.ImgSrc}
                        />

                        <div className="flex justify-between mt-3">
                            <h3 className="text-gray-900 font-manrope text-sm font-bold leading-6">
                                {product.title}
                            </h3>
                        </div>
                        <p className="text-gray-400 font-manrope text-xs my-1 font-medium leading-6">
                            Full body resistance
                        </p>
                        <Button variant="primary" rounded="full">
                            <p>Enquire now</p>
                        </Button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ShopByIndustries
