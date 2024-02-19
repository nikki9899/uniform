import React from 'react'
import Image from 'next/image'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const Description = ({ aboutUs }) => {
    let {
        descriptionText1,
        descriptionText2Light,
        descriptionText2Dark,
        descriptionText3,
        descriptionBtn,
    } = aboutUsLables

    return (
        <div>
            <div className="overview text-center md:mt-4 mt-16 md:px-20 px-2 pb-8 md:pb-14">
                <p className="font-medium md:text-base sm:text-sm text-xs leading-5">
                    {descriptionText1}
                </p>
                <p className="md:pt-8 pt-4 font-normal md:text-base sm:text-sm text-xs leading-5">
                    {descriptionText2Light}
                    <span className="font-medium md:text-base md:text-sm text-xs leading-5">
                        {descriptionText2Dark}
                    </span>
                </p>
                <p className="md:pt-8 pt-4 font-medium md:text-base  sm:text-sm text-xs leading-5">
                    {descriptionText3}
                </p>
                <div className="md:pt-8 pt-4">
                    <button className="bg-slate-300 text-gray-400 border-gray-900 opacity-25 border rounded-xl border-current py-2 px-5 ">
                        {descriptionBtn}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Description
