import React from 'react'
import Image from 'next/image'

const Banner = ({ aboutUsBanner }) => {
    const { title, description, bannerImage } = aboutUsBanner

    const imageUrl =
        bannerImage && bannerImage.data
            ? bannerImage.data.attributes.formats.large.url
            : ''

    return (
        <div className="relative">
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt="Overview Image"
                    height={518}
                    width={1442}
                    className="w-[100%]"
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <p className="font-medium text-base xs:text-lg sm:text-4xl lg:text-8xl">
                    {title}
                </p>
                <p className="font-normal text-xs xs:text-sm sm:text-2xl lg:text-4xl">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Banner
