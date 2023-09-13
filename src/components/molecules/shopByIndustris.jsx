import Button from '../atoms/button'
import React from 'react'
import products from '@/mockData/productContainerData'
import header from '@/mockData/asideLinks'

const shopByIndustries = () => {
    const quickLinks = header[0].quicklinks.listItems
    return (
        <div className="container mx-auto py-8 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="md:col-span-1rounded-lg p-1 w-[382px]">
                    <h2 className="text-black font-manrope font-semibold text-5xl tracking-tight leading-normal">
                        {header[0].heading}
                    </h2>
                    <nav className=" py-4 w-[213px] h-[445px] flex-shrink-0">
                        <ul className="  list-none text-gray-700 font-manrope text-xl font-semibold leading-2 capitalize">
                            {quickLinks.map((link) => (
                                <li key={link.id}>{link.navlink}</li>
                            ))}
                        </ul>
                        <button className="text-gray-900 font-manrope text-3xl  font-bold leading-10">
                            See all
                        </button>
                    </nav>
                </div>
                {products.map((product) => (
                    <div className="w-[495px] p-4 key={product.id}">
                        <div
                            key={product.id}
                            className="md:col-span-1 rounded h-[678px] "
                        >
                            <img
                                src={product.imageSrc}
                                alt={product.title}
                                className="w-[426px] h-[558px] object-cover mb-4"
                            />
                            <div className="flex justify-between ">
                                <h2 className="text-gray-900 font-manrope text-sm font-bold leading-6">
                                    {product.title}
                                </h2>
                                <p className=" mx-[3rem] font-manrope text-sm font-semibold  text-gray-900">
                                    {product.amount}
                                </p>
                            </div>
                            <p className="text-gray-400 font-manrope text-xs font-medium leading-6">
                                {product.subtitle}
                            </p>
                            <Button variant="enquire now" rounded="Full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default shopByIndustries
