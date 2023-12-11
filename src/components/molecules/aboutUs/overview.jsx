import React from 'react'
import Image from 'next/image'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const Overview = ({ aboutUs }) => {
    let { overviewHead, overviewSubTitle, overviewText } = aboutUsLables

    return (
        <div>
            <div className=" overview text-center px-40 py-20">
                <h3 className="font-medium text-4xl ">{overviewHead}</h3>
                <p className="text-xl py-8 leading-7">{overviewSubTitle}</p>
                <p className="text-base leading-5">{overviewText}</p>
            </div>
        </div>
    )
}

export default Overview
