import React from 'react'

const IndustrialUniform = ({ heading, description }) => {
    console.log('head', heading)
    let HeadingString = decodeURIComponent(heading)
    console.log('heading', HeadingString)

    return (
        <div className="mt-16 md:mt-32">
            <div className="md:mb-[44px] text-center text-black text-[30px] xs:text-[40px] sm:text-6xl lg:text-[112px] lg:leading-[80px] font-medium leading-7 md:leading-[66px] xs:tracking-[-1.5px] md:tracking-[-3px]  capitalize">
                <h1>{HeadingString}</h1>
            </div>
            <div className=" mt-5 text-center text-gray-700  text-xs xs:text-sm sm:text-[28px] leading-3  lg:text-3xl lg:leading-7 font-normal sm:leading-[22.645px] lowercase font-Poppins;">
                <p>
                    {description ?? `BUY customized ${HeadingString} workwear`}
                </p>
            </div>
        </div>
    )
}

export default IndustrialUniform
