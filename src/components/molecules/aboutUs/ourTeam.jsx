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
                        className='md:h-[539px] h-60 w-[1448px] object-cover'
                    />
                </div>
                <div className="text-center text-slate-200 md:w-2/3 m-auto absolute bottom-5 md:bottom-[140px] md:left-48">
                    <h1 className="font-medium md:text-6xl text-base pb-1 md:pb-8">{teamHead}</h1>
                    <p className="font-normal md:text-base text-xs leading-[14px] tracking-tighter">
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
