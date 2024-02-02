import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const StatutoryProfile = ({ aboutUs }) => {
    let {
        profileHead,
        Profiles
    } = aboutUsLables

    return (
        <div>
            <div className="companyUps pb-6  px-2 md:px-12 md:py-10">
                <div className="companyUps heading font-medium md:text-3xl text-xl leading-9 md:pb-6 pb-2">
                    {profileHead}
                </div>
                <div className="companyUps-description md:text-base text-xs font-normal leading-5">
                    {Profiles.map((item) => (
                        <p key={item.id}>{item.profile}</p>
                    ))}
                    </div>
            </div>
        </div>
    )
}

export default StatutoryProfile
