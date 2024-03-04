import React from 'react'
import Image from 'next/image'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const Overview = ({ aboutUs }) => {
    let { overviewHead, overviewSubTitle, overviewText } = aboutUsLables

    return (
        <div>
            <div className="  text-center md:mt-0 mt-8 md:px-28 lg:px-40 pt-2 px-10 md:py-20">
                <h3 className="font-medium  sm:text-3xl md:text-3xl lg:text-4xl  text-2xl lg:leading-[52px] ">
                    {overviewHead}
                </h3>
                <p className="lg:text-xl text-xs md:text-lg md:py-8 pt-4 md:leading-7">
                    {overviewSubTitle}
                </p>
                <p className=" font-normal md:text-sm lg:text-sm text-xs pt-2 md:leading-5">
                    {overviewText}
                </p>
            </div>
        </div>
    )
}

export default Overview
