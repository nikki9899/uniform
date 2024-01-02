import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const UspHead = ({ }) => {
    let { uspHead, UspText } = aboutUsLables

    return (
        <div>
            <div className="companyUps border-y border-current px-12 py-10">
                <div className="companyUps heading font-normal text-3xl leading-9 pb-6">
                    {uspHead}
                </div>
                <div className="companyUps-description text-base font-normal leading-5">
                    {UspText.map((item) => (
                        <p key={item.id}>{item.uspTeaxt1}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UspHead
