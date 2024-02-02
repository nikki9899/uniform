import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const HsnDescription = ({ aboutUs }) => {
    let { hsnHead, hsnNo1, hsnText1, hsnNo2, hsnText2 } = aboutUsLables

    return (
        <div>
            <div className="hsnDescription border-y border-current pb-6  px-2 md:px-12 md:py-10">
                <div className="md:w-1/2">
                    <div className="hsnDescriptionHeading font-semibold text-xl pb-6">
                        {hsnHead}
                    </div>
                    <div className="hsnDescription-description text-sm font-normal ">
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
