import React from 'react'
import Image from 'next/image'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const SideImageText = ({ data }) => {
    
    let { sideImgText1, sideImgText2, sideImgText3 } = aboutUsLables
    let imageUrl = data.OverViewImage.data.attributes.formats.small.url;


    return (
        <div>
            <div className="overview flex md:flex-row flex-col justify-between lg:px-20 md:mt-4 mt-16 px-4 md:pb-20">
                <div className="font-normal text md:text-sm lg:text-base text-xs leading-5  w-full md:w-[42%] order-2 md:order-1 ">
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
                <div className="image md:mt-0 mb-6 md:w-1/2 order-1 md:order-2 ml-[5px] ">
                    <Image
                        src={imageUrl}
                        alt="Overview Image"
                        height={541}
                        width={526}
                    />
                </div>
            </div>
        </div>
    )
}

export default SideImageText
