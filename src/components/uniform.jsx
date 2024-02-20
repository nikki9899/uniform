import React from 'react'
import { commercialLabels } from '@/utils/labels/commercialLabels'
import Button from './atoms/button'

const CommercialUniformSection = () => {
    let { heading, heading1, text, text1, text2, caption, caption1 } =
        commercialLabels
    return (
        <div className=" relative ">
            <div className='flex justify-between'>
                <div className="w-36 h-14 lg:w-1/2 text-black text-xl sm:w-1/2  sm:text-4xl sm:leading-[56px]  lg:text-5xl lg:leading-[68.3px] font-semibold leading-7 tracking-[-2px] lg:tracking-[-2px] ">
                    <h2>
                        {heading} <br /> {heading1}
                    </h2>
                </div>

                <div className=" w-[10rem] h-12 lg:w-1/3 pt-1 text-[8px] font-medium text-black text-right sm:text-sm sm:font-normal sm:leading-4 sm:w-[363px] sm:h-[59px] sm:tracking-[-1px] lg:text-base  leading-[10px] lg:font-normal lg:tracking-[-0.64px] font-manrope ">
                    <p>
                        {text}
                      
                    </p>
                </div>
            </div>

            <div className="justify-center  text-center  tracking-[-2.123px] pt-56 sm:pt-[350px]   lg:pt-[320px]  flex text-black lg:pb-8">
                <div className=" w-[180px]  sm:w-[300px] -z-10 absolute my-[-160px] sm:my-[-220px] lg:w-[360px] ml-[-8px]   ">
                    <img src="/Images/Mask group.png" />
                </div>
                <p className="md:pt-[80px] sm:pt-[51px] sm:text-[72px] lg:text-[80px]  lg:leading-[98px] font-semibold leading-8 sm:leading-[60px] text-[39px]  xs:text-[47px] xx:text-[58px]  xs:leading-[50px] leading-[40px]">
                    {caption}
                    <br /> {caption1}
                </p>
            </div>
            <div className="text-center mt-5 sm:mt-14 xs: lg:mt-2 lg:pb-8 ">
                <Button variant="primary" rounded="full"
                addStyle={`bg-slate-300  text-gray-400 border-gray-900 opacity-50`}>
                    <p>shop now</p>
                </Button>
            </div>
        </div>
    )
}

export default CommercialUniformSection