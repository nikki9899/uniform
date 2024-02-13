import React from 'react'
import { commercialLabels } from '@/utils/labels/commercialLabels'

import Button from './atoms/button'

const CommercialUniformSection = () => {
    let { heading, heading1, text, text1, text2, caption, caption1 } =
        commercialLabels
    return (
        <div className=" relative ">
            <div className="flex justify-between">
                <div className="w-[143px] h-[58px] lg:w-1/2 text-black text-xl lg:text-5xl lg:leading-[68.3px] font-semibold leading-7 tracking-[-1px] lg:tracking-[-4px] ">
                    <h2>
                        {heading} <br /> {heading1}
                    </h2>
                </div>

                <div className=" w-[164px] h-12 lg:w-1/3 pt-1 text-[8px] font-medium text-black text-right  lg:text-base  leading-[10px] lg:font-normal lg:tracking-[-0.64px] font-manrope ">
                    <p>{text}</p>
                </div>
            </div>

            <div className="justify-center w-[95.8%] text-center  pt-56 md:pt-60  flex text-black text-4xl md:text-7xl  font-bold md:font-medium leading-0 tracking-[-2.123px] font-[MADE Outer Sans]">
                <div className=" w-[180px] md:w-[260px] -z-10 absolute my-[-160px] md:my-[-220px]  ml-[-8px]  ">
                    <img src="/Images/Mask group.png" />
                </div>
                <p>
                    {caption}
                    <br /> {caption1}
                </p>
            </div>
            <div className="text-center mt-5 md:mt-14  ">
                <Button
                    variant="primary"
                    rounded="full"
                    addStyle={`bg-slate-300  text-gray-400 border-gray-900 opacity-50`}
                >
                    <p>shop now</p>
                </Button>
            </div>
        </div>
    )
}

export default CommercialUniformSection
