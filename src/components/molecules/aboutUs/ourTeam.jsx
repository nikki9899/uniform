import React from 'react'
import Image from 'next/image'

const OurTeam = ({ data }) => {
    const { description, teamImage } = data

    const teamText1 = description.substring(0, description.indexOf('Further'))
    const teamText2 = description.substring(description.indexOf('Further'))
    const imageUrl =
        teamImage && teamImage.data
            ? teamImage.data.attributes.formats.large.url
            : ''

    return (
        <div className="relative mb-10 md:mb-0">
        <div className="relative">
            <Image
                src={imageUrl}
                alt="Overview Image"
                height={539}
                width={1448}
                className="md:h-[539px] h-60 w-[100%] object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center text-center text-slate-200 px-4 md:px-0">
                <div className="md:w-2/3 md:px-8 lg:px-16">
                    <h1 className="font-medium lg:text-6xl lg:leading-[88px] sm:text-3xl xs:text-base pb-1 md:pb-8">
                        Our Team
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
    </div>
    )
}

export default OurTeam
