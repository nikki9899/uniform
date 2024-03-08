import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const StatutoryProfile = ({ aboutUs }) => {
    let { profileHead, Profiles } = aboutUsLables

    return (
        <div>
            <div className="companyUps pb-6  px-4  md:px-12 md:py-10">
                <div className=" font-normal lg:text-3xl sm:text-2xl text-xl leading-9 md:pb-6 pb-2">
                    {profileHead}
                </div>
                <div className=" lg:text-base  sm:text-sm text-xs font-medium leading-5">
                    {Profiles.map((item) => (
                        <p key={item.id}>{item.profile}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StatutoryProfile
