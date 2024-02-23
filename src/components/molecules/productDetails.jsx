'use client'
import React, { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ImageGallery from './ImageGallery'
import Line from '../atoms/horizontal-line'
import Button from '../atoms/button'
import AboutProduct from './aboutProduct'
import Rating from './rating'
import { RightArrow } from '../svgs'
import { Rs } from '../svgs'
import { getProductDetailsById, getProductDetailsByImage } from '@/utils/api'
import CarouselWithTimer from '../atoms/Carasouel'

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

    const formattedImageData = imageMagnifierData.map((image) => ({
        src: image.largeImageSrc,
        alt: image.alt || 'Product Image',
    }))

    return (
        <div>
            <div className="ml-20 md:ml-40 mt-14 inline-flex h-[38.086px] p-[4.862px 21.879px] justify-center items-center gap-8.103px flex-shrink-0 hidden md:block">
                <div className="flex px-2 text-gray-900 font-manrope font-medium text-xs lowercase">
                    <p className="px-1">home</p>
                    <RightArrow className="mt-1" />
                    <p className="px-1">Uniform by profession</p>
                    <RightArrow className="mt-1" />
                    <p className="px-1">{name}</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-x-8">
                <div className="block md:hidden">
                    <CarouselWithTimer
                        images={formattedImageData}
                        interval={5000}
                    />
                </div>
                <div className="hidden md:block md:w-fit mx-auto pr-2 lg:mx-0">
                    <ImageGallery data={imageMagnifierData} />
                </div>
                <div className="mt-7 lg:mt-0">
                    <div>
                        <h1 className="text-gray-800 sm:text-3xl lg:text-5xl lg:leading-[65px] text-xl leading-7 font-semibold">
                            {name}
                        </h1>
                        <div className="py-2 flex">
                            <Rating productRating={rating} />
                        </div>

                        <div className="mt-8 md:mt-14 flex">
                            <Rs className="w-6 h-6 sm:w-9 sm:h-9 py-1" />
                            <p className="text-gray-900 ml-[-5px] text-sm leading-5 sm:text-2xl sm:leading-8 lg:text-[28px] font-semibold">
                                {price} / piece
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex">
                        <Button variant="secondary" rounded="semi">
                            <p className="font-Manrope lg:text-2xl lg:leading-6 text-xs leading-3 px-1">
                                call on 8888888
                            </p>
                        </Button>
                        <div className="mx-2">
                            <Button variant="primary" rounded="semi">
                                <p className="lg:text-2xl lg:leading-6 text-xs leading-3 px-1 py-2">
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
