import { aboutUsLables } from '@/utils/labels/aboutUsLables'
import React from 'react'
import Image from 'next/image'

const OurTeam = ({ aboutUs }) => {
    let { teamHead, teamText1, teamText2 } = aboutUsLables
    return (
        <div>
            <div className="">
                <div>
                    <Image
                        src="/images/aboutUs3.png"
                        alt="Overview Image"
                        height={539}
                        width={1448}
                    />
                </div>
                <div className="text-center">
                    <h1 className="font-medium text-6xl pb-8">{teamHead}</h1>
                    <p className="font-normal text-base tracking-tighter">
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
