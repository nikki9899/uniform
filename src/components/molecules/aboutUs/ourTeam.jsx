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
        <div>
            <div className="relative mb-10 md:mb-0">
                <div>
                    <Image
                        src={imageUrl}
                        alt="Overview Image"
                        height={539}
                        width={1448}
                        className="md:h-[539px] h-60 w-[100%] object-cover"
                    />
                </div>
                <div className="text-center text-slate-200 md:w-2/3 m-auto absolute bottom-5 md:bottom-[140px] md:left-32 lg:left-48 px-4 md:px-0">
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
    )
}

export default OurTeam
