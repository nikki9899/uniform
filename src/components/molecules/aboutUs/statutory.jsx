import React from 'react'
import { aboutUsLables, profiles } from '@/utils/labels/aboutUsLables'

const StatutoryProfile = ({ aboutUs }) => {
    let {
        profileHead
    } = aboutUsLables

    return (
        <div>
            <div className="companyUps border-y border-current px-12 py-10">
                <div className="companyUps heading font-normal text-3xl leading-9 pb-6">
                    {profileHead}
                </div>
                <div className="companyUps-description text-base font-normal leading-5">
                    {profiles.map((item) => (
                        <p key={item.id}>{item.profile}</p>
                    ))}
                    </div>
            </div>
        </div>
    )
}

export default StatutoryProfile
