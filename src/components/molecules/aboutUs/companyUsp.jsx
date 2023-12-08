import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const UspHead = ({ aboutUs }) => {
    let {
        uspHead,
        uspTeaxt1,
        uspTeaxt2,
        uspTeaxt3,
        uspTeaxt4,
        uspTeaxt5,
        uspTeaxt6,
        uspTeaxt7,
    } = aboutUsLables

    return (
        <div>
            <div className="companyUps border-y border-current px-12 py-10">
                <div className="companyUps heading font-normal text-3xl leading-9 pb-6">
                    {uspHead}
                </div>
                <div className="companyUps-description text-base font-normal leading-5">
                    <p>{uspTeaxt1}</p>
                    <p>{uspTeaxt2}</p>
                    <p>{uspTeaxt3}</p>
                    <p>{uspTeaxt4}</p>
                    <p>{uspTeaxt5}</p>
                    <p>{uspTeaxt6}</p>
                    <p>{uspTeaxt7}</p>
                </div>
            </div>
        </div>
    )
}

export default UspHead
