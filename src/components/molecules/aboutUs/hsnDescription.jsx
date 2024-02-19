import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const HsnDescription = ({ aboutUs }) => {
    let { hsnHead, hsnNo1, hsnText1, hsnNo2, hsnText2 } = aboutUsLables

    return (
        <div>
            <div className="pb-6  px-2 md:px-12 md:py-10">
                <div className="md:w-1/2">
                    <div className=" font-semibold leading-6 lg:text-lg text-lg md:pb-6 pb-2">
                        {hsnHead}
                    </div>
                    <div className="lg:text-base sm:text-sm text-xs font-normal ">
                        <p>
                            <span className="font-semibold">{hsnNo1}</span>{' '}
                            {hsnText1}
                        </p>
                        <br />
                        <p>
                            <span className="font-semibold">{hsnNo2}</span>{' '}
                            {hsnText2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HsnDescription
