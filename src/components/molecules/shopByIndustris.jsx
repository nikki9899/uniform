import Button from '../atoms/button'
import React from 'react'
import headerData from '@/mockData/asideLinks'
import ImageCard from '../atoms/ImageCard'


async function shopByIndustries(  { shopByCategory }) {
    const products = shopByCategory.sub_categories.data.map((entry) => {
        return {
            id: entry.id,
            title: entry.attributes?.name || '',
            ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
        }
    })
    const header = headerData[0]
    const quickLinks = header?.quicklinks?.listItems || []
    return (
        <div className="container mx-auto pt-9 pb-5">
            <div className="grid  grid-cols-3 gap-x-5 gap-y-9 ">
                <div className="col-span-1 rounded-lg ">
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
                                className="text-gray-900 font-manrope text-2xl font-semibold leading-10"
                            >
                                {header.linkData.label}
                            </a>
                        ) : null}
                    </nav>
                </div>
                {products.map((product) => (
                    <div  key={product.id} >
                        <div
                           
                            className="col-span-1 "
                        >
                            <ImageCard
                                iconDisplay="hidden"
                                classnames="rounded  h-[34rem] rounded h-[650px] bg-cover bg-top bg-no-repeat "
                                productImage={product.ImgSrc}
                            />

                            <div className="flex justify-between mt-3 ">
                                <h3 className="text-gray-900 font-manrope text-sm font-bold leading-6">
                                    {product.title}
                                </h3>
                                <p className=" font-manrope text-sm font-semibold  text-gray-900 ">
                                    INR 5000
                                </p>
                            </div>
                            <p className="text-gray-400 font-manrope text-xs my-1 font-medium leading-6">
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