import React from 'react'
import Image from 'next/image'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const Banner = ({ aboutUs }) => {
    let { topImgHead, topImgText } = aboutUsLables

    return (
        <div>
            <div>
                <div className="relative">
                    <Image
                        src="/images/aboutUs1.png"
                        alt="Overview Image"
                        height={518}
                        width={1442}
                    />
                </div>
                <div className="text-center text-white absolute sm:top-56 top-[100px] sm:left-96 left-14">
                    <p className="font-medium text-lg sm:text-8xl">{topImgHead}</p>
                    <p className="font-normal  text-sm sm:text-4xl">{topImgText}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
