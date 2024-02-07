import React from 'react'
import { commercialLabels } from '@/utils/labels/commercialLabels'

import Button from './atoms/button'

const CommercialUniformSection = () => {
    let { heading, heading1, text, text1, text2, caption, caption1 } =
        commercialLabels
    return (
        <div className=" relative py-9">
            <div className='flex justify-between'>
                <div className="xs:w-[90%] sm:w-[70%] md:w-1/2 text-black text-xl md:text-5xl font-semibold leading-normal tracking-[-1px] md:tracking-[-2px] font-manrope">
                    <h2>
                        {heading} <br /> {heading1}
                    </h2>
                </div>

                <div className="xs:w-[93%] sm:w-[100%] md:w-1/3 pt-1 text-black text-right text-[10px] md:text-base font-normal leading-normal md:tracking-[-0.64px] tracking-[-0.74px] font-manrope ">
                    <p>
                        {text}
                        {/* <br /> {text1}
          <br /> {text2} */}
                    </p>
                </div>
            </div>

            <div className="justify-center w-[95.8%] text-center  pt-56 md:pt-60  flex text-black text-4xl md:text-7xl  font-bold tracking-wide md:tracking-normal leading-0 md:leading-123 tracking-[-2.123px] font-[MADE Outer Sans]">
                <div className=" w-[180px] md:w-[260px] -z-10 absolute my-[-160px]  ml-[-8px]  ">
                    <img src="/Images/Mask group.png" />
                </div>
                <p>
                    {caption}
                    <br /> {caption1}
                </p>
            </div>
            <div className="text-center mt-5 md:mt-16  ">
                <Button variant="primary" rounded="full">
                    <p>shop now</p>
                </Button>
            </div>
        </div>
    )
}

export default CommercialUniformSection
