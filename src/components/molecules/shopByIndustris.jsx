import Button from '../atoms/button'
import React from 'react'
import products from '@/mockData/productContainerData'
import headerData from '@/mockData/asideLinks'
import ImageCard from '../atoms/ImageCard'

const shopByIndustries = () => {
    const header = headerData[0]
    const quickLinks = header?.quicklinks?.listItems || []
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="md:col-span-1rounded-lg p-1 w-auto">
                    <h2 className="text-black font-manrope  font-semibold text-5xl tracking-tight leading-normal">
                        {header?.heading || ''}
                    </h2>
                    <nav className=" py-4 w-52 h-[445px] flex-shrink-0">
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
                    <div className="w-12/12  key={product.id}">
                        <div
                            key={product.id}
                            className="md:col-span-1 rounded h-[678px]"
                        >
                            <img
                                src={product.ImgSrc}
                                alt={product.title}
                                className="w-full h-[558px] object-cover mb-4"
                            />

                            <div className="flex justify-between ">
                                <h3 className="text-gray-900 font-manrope text-sm font-bold leading-6">
                                    {product.title}
                                </h3>
                                <p className=" font-manrope text-sm font-semibold   pl-20 text-gray-900 ">
                                    {product.amount}
                                </p>
                            </div>
                            <p className="text-gray-400 font-manrope text-xs font-medium leading-6">
                                {product.subtitle}
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
