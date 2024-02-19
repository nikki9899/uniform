import React from 'react'
import Image from 'next/image'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const Banner = ({ aboutUs }) => {
    let { topImgHead, topImgText } = aboutUsLables

    return (
        <div className="relative">
            <div className="relative">
                <Image
                    src="/images/aboutUs1.png"
                    alt="Overview Image"
                    height={518}
                    width={1442}
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <p className="font-medium text-base xs:text-lg sm:text-4xl lg:text-8xl">
                    {topImgHead}
                </p>
                <p className="font-normal text-xs xs:text-sm sm:text-2xl lg:text-4xl">
                    {topImgText}
                </p>
            </div>
        </div>
    )
}

export default Banner
