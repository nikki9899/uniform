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
            <div className="overview text-center px-20 pb-14">
                <p className="font-normal text-base leading-5">
                    {descriptionText1}
                </p>
                <br />
                <p className="font-normal text-base leading-5">
                    {descriptionText2Light}
                    <span className="font-medium text-base leading-5">
                        {descriptionText2Dark}
                    </span>
                </p>
                <br />
                <br />
                <p className="font-medium text-base leading-5">
                    {descriptionText3}
                </p>
                <div className="pt-10">
                    <button className=" border rounded-xl border-current py-2 px-5 ">
                        {descriptionBtn}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Description
