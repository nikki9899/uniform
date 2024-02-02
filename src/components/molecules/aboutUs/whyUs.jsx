import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'
import { whyUs } from '@/utils/labels/aboutUsLables'

const WhyUs = ({ aboutUs }) => {
    let { whyUsHead, whyUsText, WhyUs1, WhyUs2, WhyUs3 } = aboutUsLables

    return (
        <div>
            <div className="text-center  px-2 md:px-12 md:py-10">
                <div className="whyUsHeading font-semibold md:text-6xl text-4xl pb-8">
                    {whyUsHead}
                </div>
                <div className="whyUsDescription px-2 md:px-28">{whyUsText}</div>
                <div className="text-center pt-10">
                    <div className="flex justify-center md:flex-row flex-col">
                        {WhyUs1.map((item) => (
                            <div
                                key={item.id}
                                className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current"
                            >
                                {item.whyUsDetails}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center md:flex-row flex-col">
                        {WhyUs2.map((item) => (
                            <div
                                key={item.id}
                                className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current"
                            >
                                {item.whyUsDetails}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center md:pb-0 pb-11 md:flex-row flex-col">
                        {WhyUs3.map((item) => (
                            <div
                                key={item.id}
                                className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current"
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
