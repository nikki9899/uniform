import Button from '../atoms/button'
import React from 'react'
import ImageCard from '../atoms/ImageCard'
import Link from 'next/link'


const Header = ({ heading, quicklinks, linkData, industrialSectors }) => {
    return (
        <div>
            <ul className="text-lg list-none text-gray-800 font-manrope font-medium leading-2 capitalize mt-6">
                {industrialSectors.map((sector) => (
                    <li key={sector.id}>
                    <Link href={`/plp/${sector.attributes?.name}`}>
                            {sector.attributes?.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="text-black font-manrope font-medium text-2xl leading-10">
                See All
            </div>
        </div>
    );
};

const shopByIndustries = ({ shopByCategory }) => {
    const products =
        shopByCategory.sub_categories?.data?.map((entry) => ({
            id: entry.id,
            title: entry.attributes?.name || '',
            ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
        })) || []

    const quickLinks = shopByCategory.quicklinks?.listItems || []
    const industrialSectors = shopByCategory.sub_categories?.data || []

    return (
        <div className="container mx-auto pt-9 pb-5">
            <div className="grid  grid-cols-3 gap-x-5 gap-y-9 ">
                <div className="col-span-1 rounded-lg">
                <h2 className="text-black font-manrope font-normal text-5xl tracking-tight leading-normal">
                       Shop by <br/> IndustrialSectors
                    </h2>
                    <Header
                        heading={shopByCategory.heading}
                        quicklinks={quickLinks}
                        linkData={shopByCategory.linkData}
                        industrialSectors={industrialSectors}
                    />
                </div>

                {/* ... (product section) */}
                {products.map((product) => (
                    <Link key={product.id} href={`/plp/${product.title}`}>
                        <div className="col-span-1">
                            <ImageCard
                                iconDisplay="hidden"
                                classnames="rounded h-[34rem] rounded h-[650px] bg-cover bg-top bg-no-repeat"
                                productImage={product.ImgSrc}
                            />

                            <div className="flex justify-between mt-3">
                                <h3 className="text-gray-900 font-manrope text-sm font-bold leading-6">
                                    {product.title}
                                </h3>
                                {/* <p className="font-manrope text-sm font-semibold text-gray-900">
                    INR 5000
                </p> */}
                            </div>
                            <p className="text-gray-400 font-manrope text-xs my-1 font-medium leading-6">
                                full body resistance
                            </p>
                            <Button variant="primary" rounded="full">
                                <p>enquire now</p>
                            </Button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default shopByIndustries
