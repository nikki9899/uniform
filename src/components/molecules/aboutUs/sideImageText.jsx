import React from 'react'
import Image from 'next/image'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const SideImageText = ({ aboutUs }) => {
    let { sideImgText1, sideImgText2, sideImgText3 } = aboutUsLables

    return (
        <div>
            <div className="overview flex md:flex-row flex-col justify-between md:px-20 pt-4 px-2 md:pb-20">
                <div className="text text-sm leading-5  w-screen md:w-1/2">
                    <p>
                        {sideImgText1}
                        <br />
                        <br />
                        {sideImgText2}
                        <br />
                        <br />
                        {sideImgText3}
                    </p>
                </div>
                <div className="image md:mt-0 mt-6 md:w-1/2 ">
                    <Image
                        src="/images/aboutUs2.png"
                        alt="Overview Image"
                        height={541}
                        width={546}
                    />
                </div>
            </div>
        </div>
    )
}

export default SideImageText
