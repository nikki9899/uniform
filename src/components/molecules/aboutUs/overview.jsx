import React from 'react'
import Image from 'next/image'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const Overview = ({ aboutUs }) => {
    let { overviewHead, overviewSubTitle, overviewText } = aboutUsLables

    return (
        <div>
            <div className=" md:overview text-center md:mt-0 mt-8 md:px-40 pt-2 px-2.5 md:py-20">
                <h3 className="font-medium md:text-4xl  text-2xl ">{overviewHead}</h3>
                <p className="md:text-xl text-xs  md:py-8 pt-4 md:leading-7">{overviewSubTitle}</p>
                <p className="md:text-base text-xs pt-2 md:leading-5">{overviewText}</p>
            </div>
        </div>
    )
}

export default Overview
