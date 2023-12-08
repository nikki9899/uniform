import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const StatutoryProfile = ({ aboutUs }) => {
    let {
        profileHead,
        profileTeaxt1,
        profileTeaxt2,
        profileTeaxt3,
        profileTeaxt4,
        profileTeaxt5,
    } = aboutUsLables

    return (
        <div>
            <div className="companyUps border-y border-current px-12 py-10">
                <div className="companyUps heading font-normal text-3xl leading-9 pb-6">
                    {profileHead}
                </div>
                <div className="companyUps-description text-base font-normal leading-5">
                    <p>{profileTeaxt1}</p>
                    <p>{profileTeaxt2}</p>
                    <p>{profileTeaxt3}</p>
                    <p>{profileTeaxt4}</p>
                    <p>{profileTeaxt5}</p>
                </div>
            </div>
        </div>
    )
}

export default StatutoryProfile
