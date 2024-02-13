import React from 'react'
import { heroLabels } from '@/utils/labels/heroLabels'
import Button from './atoms/button'

function Hero({ hero }) {
    let { heading, headingPart2, description } = heroLabels

    return (
        <div className="py-4 mt-20">
            <div className="relative text-center w-fit mx-auto font-manrope text-4xl sm:text-6xl lg:text-8xl">
                <h2>{heading}</h2>
                <img
                    className="-z-10 absolute left-6 bottom-0 w-[77px] sm:w-[115px] sm:left-12 lg:w-[201px]"
                    src="/Images/Doctor.png"
                    alt="test data"
                />
                <h3 className="pl-[85px]">{headingPart2}</h3>
            </div>
            <div className="text-center text-gray-900 text-xs sm:text-xl lg:text-3xl font-medium  font-poppins leading-[26.645px] lowercase">
                <p>{description}</p>
            </div>
            <div className="text-center my-3 ">
            <Button  variant="primary" rounded="semi" 
    addStyle="bg-slate-300 text-gray-400 border-gray-900 opacity-50">
    <p className="p-1 text-sm font-normal">enquire now</p>
</Button>

            </div>
        </div>
    )
}

export default Hero
