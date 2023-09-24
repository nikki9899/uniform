import Button from '../atoms/button'
import React from 'react'
import headerData from '@/mockData/asideLinks'
import { getAPI } from '@/utils/api';
import ImageCard from '../atoms/ImageCard';

async function shopByIndustries() {
    const {data} = await getAPI("home-page");
    const products = data.attributes.shopByCategory.sub_categories.data.map((entry) => {
        return {
            id: entry.id,
            title: entry.attributes?.name || '',
            ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
        }
    })
    const header = headerData[0]
    const quickLinks = header?.quicklinks?.listItems || []
    return (
        <div className="container mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="md:col-span-1rounded-lg p-1 w-[382px]">
                    <h2 className="text-black font-manrope font-semibold text-5xl tracking-tight leading-normal">
                        {header?.heading || ''}
                    </h2>
                    <nav className=" py-4 w-[213px] h-[445px] flex-shrink-0">
                        <ul className="  list-none text-gray-700 font-manrope text-xl font-semibold leading-2 capitalize">
                            {quickLinks.map((link) => (
                                <li key={link.id}>{link.navlink}</li>
                            ))}
                        </ul>
                        {header?.linkData ? (
                            <a
                                href={header.linkData.url}
                                className="text-gray-900 font-manrope text-3xl font-bold leading-10"
                            >
                                {header.linkData.label}
                            </a>
                        ) : null}
                    </nav>
                </div>
                {products.map((product) => (
                    <div className="w-full  key={product.id}">
                        <div
                            key={product.id}
                            className="md:col-span-1 rounded h-[678px] "
                        >
                            <ImageCard
                                iconDisplay="hidden"
                                classnames="w-[426px] h-[558px] rounded shink-0"
                                productImage={product.ImgSrc}
                            />

                            <div className="flex justify-between ">
                                <h3 className="text-gray-900 font-manrope text-sm font-bold leading-6">
                                    {product.title}
                                </h3>
                                <p className=" font-manrope text-sm font-semibold   pl-20 text-gray-900 ">
                                    INR 5000
                                </p>
                            </div>
                            <p className="text-gray-400 font-manrope text-xs font-medium leading-6">
                            full body resistance
                            </p>
                            <Button variant="primary" rounded="full">
                                <p>enquire now</p>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default shopByIndustries