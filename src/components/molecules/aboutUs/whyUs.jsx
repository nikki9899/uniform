import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'
import { whyUs } from '@/utils/labels/aboutUsLables'

const WhyUs = ({ aboutUs }) => {
    let {
        whyUsHead,
        whyUsText,
        whyUs1,
        whyUs2,
        whyUs3,
        whyUs4,
        whyUs5,
        whyUs6,
        whyUs7,
        whyUs8,
        whyUs9,
        whyUs10,
        whyUs11,
    } = aboutUsLables

    return (
        <div>
            <div className="text-center px-12 py-10">
                <div className="whyUsHeading font-semibold text-6xl pb-8">
                    {whyUsHead}
                </div>
                <div className="whyUsDescription px-28">{whyUsText}</div>
                <div className="text-center pt-10">
                    <div className="flex justify-center">
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs1}
                        </div>
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs2}
                        </div>
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs3}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs4}
                        </div>
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs5}
                        </div>
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs6}
                        </div>
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs7}
                        </div>
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs8}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs9}
                        </div>
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs10}
                        </div>
                        <div className="font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current">
                            {whyUs11}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
