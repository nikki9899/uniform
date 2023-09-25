import Button from '../atoms/button'
import React from 'react'
import headerData from '@/mockData/asideLinks'
import ImageCard from '../atoms/ImageCard'
import { getAPI } from '@/utils/api';

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
        <div className="container mx-auto py-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="md:col-span-1 rounded-lg w-[382px]">
                    <h2 className="text-black font-manrope font-normal text-5xl tracking-tight leading-normal">
                       Shop by <br/> {header?.heading || ''}
                    </h2>
                    <nav className=" py-4 w-[213px] h-[445px] flex-shrink-0">
                        <ul className="  text-lg list-none text-gray-800 font-manrope  font-medium leading-2 capitalize">
                            {quickLinks.map((link) => (
                                <li key={link.id }   className='py-1'  >{link.navlink}</li>
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
                    <div  key={product.id} className="w-full ">
                        <div
                           
                            className="md:col-span-1 "
                        >
                            <ImageCard
                                iconDisplay="hidden"
                                classnames="w-[420px] h-[555px] rounded shink-0  rounded h-[650px] "
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