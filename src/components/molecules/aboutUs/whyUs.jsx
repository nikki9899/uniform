import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'
import { whyUs } from '@/utils/labels/aboutUsLables'

const WhyUs = ({ data }) => {
    let { whyUsHead, whyUsText} = aboutUsLables
    const { description, Qualitybuttons } = data;

    const WhyUs1 = [];
    const WhyUs2 = [];
    const WhyUs3 = [];
    
    Qualitybuttons.forEach((button, index) => {
        const item = {
            id: button.id,
            whyUsDetails: button.lables,
        };

        if (index < 3) {
            WhyUs1.push(item);
        } else if (index < 8) {
            WhyUs2.push(item);
        } else {
            WhyUs3.push(item);
        }
    });

    return (
        <div className="md:mt-0 mt-8">
            <div className="text-center  px-4 md:px-12 md:py-10">
                <div className=" font-semibold lg:text-6xl sm:text-3xl text-2xl md:pb-8 pb-4">
                    {whyUsHead}
                </div>
                <div className=" lg:h-[75px] lg:px-28 lg:text-[17px] font-medium leading-6 sm:text-sm text-xs px-2 md:px-28">
                    {description}
                </div>
                <div className="text-center md:pt-10 pt-6 lg:text-lg leading-8 font-semibold sm:text-base text-sm">
                    <div className="flex justify-center md:flex-row flex-col">
                        {WhyUs1.map((item) => (
                            <div
                                key={item.id}
                                className="font-semibold text-sm leading-8 font-semibold  lg:text-lg sm:text-base  px-6 py-2 m-2 border rounded-3xl border-current"
                            >
                                {item.whyUsDetails}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center md:flex-row flex-col">
                        {WhyUs2.map((item) => (
                            <div
                                key={item.id}
                                className="font-semibold text-sm leading-8 font-semibold  lg:text-lg  text-sm sm:text-base  px-6 py-2 m-2 border rounded-3xl border-current"
                            >
                                {item.whyUsDetails}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center md:pb-0 pb-11 md:flex-row flex-col">
                        {WhyUs3.map((item) => (
                            <div
                                key={item.id}
                                className="font-semibold text-sm leading-8 font-semibold  lg:text-lg  text-sm sm:text-base px-6 py-2 m-2 border rounded-3xl border-current"
                            >
                                {item.whyUsDetails}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
