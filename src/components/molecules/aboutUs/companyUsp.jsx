import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const UspHead = ({ }) => {
    let { uspHead, UspText } = aboutUsLables

    return (
        <div>
            <div className="companyUps border-y border-current pb-6  px-2 md:px-12 md:py-10">
                <div className="companyUps heading font-normal md:text-3xl  text-2xl leading-9 pb-6">
                    {uspHead}
                </div>
                <div className="companyUps-description md:text-base text-sm font-normal leading-5">
                    {UspText.map((item) => (
                        <p key={item.id}>{item.uspTeaxt1}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UspHead
