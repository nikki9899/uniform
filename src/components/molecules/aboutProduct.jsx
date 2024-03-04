import React from 'react'
import { descriptionLabels } from '@/utils/labels/descriptionLabels'

const description = ({ productData }) => {
    let {
        text,
        text1,
        text2,
        text3,
        text4,
        text5,
        data,
        data1,
        data2,
        data3,
        data4,
        data5,
        heading,
        feature1,
        feature2,
        feature3,
    } = descriptionLabels

    const feature1Array = Array(3).fill(feature1)

    return (
        <div className="mt-4 md:mt-10 md:mb-10">
            <div className="text-gray-900 xs:text-xs text-[10px] lg:text-base lg:leading-6 leading-3 sm:text-sm sm:leading-5">
                <h1>
                    <span className="font-bold ">{text} :</span>
                    <span className="ml-3">{productData.brand}</span>
                </h1>
                <p className=" mt-2 sm:mt-4 ">
                    <span className="font-bold">{text1} :</span>
                    <span className="ml-3">
                        {productData.availability.toString()}
                    </span>
                </p>
                <p className=" mt-2 sm:mt-4">
                    <span className="font-bold">{text2} :</span>
                    <span className="ml-3">{productData.MPN}</span>
                </p>
                <p className=" mt-2 sm:mt-4">
                    <span className="font-bold">{text3} :</span>
                    <span className="ml-3">{productData.GrossWeight}</span>
                </p>
                <p className=" mt-2 sm:mt-4">
                    <span className="font-bold">{text4} :</span>
                    <span className="ml-3">{productData.DelevieryTime}</span>
                </p>
                <p className=" mt-2 sm:mt-4">
                    <span className="font-bold">{text5} :</span>
                    <span className="ml-3">{productData.PlaceOfMfg}</span>
                </p>
            </div>
        </div>
    )
}

export default description
