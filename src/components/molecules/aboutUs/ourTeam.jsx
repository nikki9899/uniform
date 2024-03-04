import { aboutUsLables } from '@/utils/labels/aboutUsLables'
import React from 'react'
import Image from 'next/image'

const OurTeam = ({ aboutUs }) => {
    let { teamHead, teamText1, teamText2 } = aboutUsLables
    return (
        <div>
            <div className="relative mb-10 md:mb-0">
                <div>
                    <Image
                        src="/images/aboutUs3.png"
                        alt="Overview Image"
                        height={539}
                        width={1448}
                        className="md:h-[539px] h-60 w-[1448px] object-cover"
                    />
                </div>
                <div className="text-center text-slate-200 md:w-2/3 m-auto absolute bottom-5 md:bottom-[140px] md:left-32 lg:left-44">
                    <h1 className="font-medium lg:text-6xl lg:leading-[88px] sm:text-3xl xs:text-base pb-1 md:pb-8">
                        {teamHead}
                    </h1>
                    <p className="font-normal lg:text-base sm:text-sm xs:text-xs text-[10px] lg:leading-5 tracking-tighter">
                        {teamText1}
                        <br />
                        <br />
                        {teamText2}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
