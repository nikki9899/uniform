import React from 'react'
import { commercialLabels } from '@/utils/labels/commercialLabels'
import Button from './atoms/button'

const CommercialUniformSection = () => {
    let { heading, heading1, text, text1, text2, caption, caption1 } =
        commercialLabels
    return (
        <div>
            <div className="flex justify-between gap-x-8 mb-6">
                <div className="text-black font-medium text-[14px] leading-tight w-fit shrink-0 sm:text-[32px] sm:leading-8">
                    {heading} <br /> {heading1}
                </div>

                <div className="pt-1 text-[8px] sm:text-[16px] sm:w-[438px] sm:font-normal sm:leading-[21px] sm:tracking-tight tracking-tighter w-[164px] text-right">
                    {text}
                </div>
            </div>

            <div className="w-full h-fit">
                <div
                    className="w-40 h-40 mx-auto sm:w-60 sm:h-60 lg:w-[360px] lg:h-[360px]"
                    style={{
                        background: 'url("/Images/Mask group.png")',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top',
                    }}
                />
                <div className="text-[36px] mx-auto lg:text-[68px] lg:leading-none sm:w-full font-extrabold leading-9 tracking-tighter text-center w-[300px] -mt-10 lg:-mt-16">
                    Enhance Your Business's Image with Professional Uniforms
                </div>
            </div>
            <div className="text-center mt-12">
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
