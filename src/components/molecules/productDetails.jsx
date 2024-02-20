'use client'
import React, { useState, useEffect } from 'react'
import ImageGallery from './ImageGallery'
import Line from '../atoms/horizontal-line'
import Button from '../atoms/button'
import { imageMagnifierData } from '@/mockData/imageMagnifier'
import AboutProduct from './aboutProduct'
import Rating from './rating'
import { RightArrow } from '../svgs'
import { Rs } from '../svgs'
import { productDescriptionSubcategoryMockData } from '@/mockData/productDescription'
import { getProductDetailsById, getProductDetailsByImage } from '@/utils/api'

function ProductDetails({ productId }) {
    const [productData, setProductData] = useState(null)
    const [imageMagnifierData, setImageMagnifierData] = useState([])

    useEffect(() => {
        Promise.all([
            getProductDetailsById(productId),
            getProductDetailsByImage(productId),
        ])
            .then(([productData, imageData]) => {
                const attributes = productData.data[0].attributes

                if (attributes) {
                    setProductData(attributes)
                    setImageMagnifierData(imageData)
                } else {
                    console.error('Error: Invalid response structure.')
                }
            })
            .catch((error) => {
                console.error('Error fetching product details:', error)
            })
    }, [productId])

    if (!productData) {
        return <div>Loading...</div>
    }

    const { name, rating, price } = productData

    return (
        <div>
            <div className="ml-20 md:ml-40 mt-14 inline-flex h-[38.086px] p-[4.862px 21.879px] justify-center items-center gap-8.103px flex-shrink-0 hidden md:block">
                <div
                    className="flex px-2
                 text-gray-900 font-manrope font-medium text-xs lowercase"
                >
                    <p className="px-1">home</p>
                    <RightArrow className="mt-1" />
                    <p className="px-1">Uniform by profession</p>
                    <RightArrow className="mt-1" />
                    <p className="px-1">{name}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
                <div className="grid  grid-cols-2 gap-3">
                    <div className=" w-[350px]  h-[611px] md:w-[600px] ml-2.5 md:ml-0 md:h-[750px] border">
                        <ImageGallery data={imageMagnifierData} />
                    </div>
                </div>
                <div className="md:ml-52 w-[390px] md:w-[600px] md:px-8">
                    <div>
                        <h1 className="text-gray-800 font-manrope text-4xl font-semibold">
                            {name}
                        </h1>
                        <div className=" py-2 flex ">
                            <Rating productRating={rating} />
                        </div>

                        <div className="mt-8 md:mt-14 flex">
                            <Rs className="w-9 h-9 py-1 " />
                            <p className="text-gray-900 ml-[-5px] font-Manrope text-2xl font-semibold">
                                {price} / piece
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex">
                        <Button variant="secondary" rounded="semi">
                            <p className="font-Manrope text-lg leading-none px-1">
                                call on 8888888
                            </p>
                        </Button>
                        <div className="mx-2">
                            {' '}
                            <Button variant="primary" rounded="semi">
                                <p className="text-lg leading-none px-1 py-2">
                                    enquire now
                                </p>
                            </Button>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-24">
                        <Line />
                    </div>
                    <AboutProduct productData={productData} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails

{
    /* <p className="mt-10 px-2 text-black font-Manrope text-base font-medium leading-none">
                        Colors available
                    </p>
                    <div className="flex p-1">
                        <div className="px-1">{black}</div>{' '}
                        <div className="px-1">{yellow}</div>{' '}
                        <div className="px-1">{white}</div> <div>{black}</div>
                       
                    </div> */
}
