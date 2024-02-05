import React from 'react'
import { aboutUsLables, members } from '@/utils/labels/aboutUsLables'

const TeamMembers = ({ aboutUs }) => {
    let { membersHead, Members} =
        aboutUsLables

    return (
        <div>
            <div className="font-medium md:text-center px-2 pb-6  md:px-16 md:py-10">
                <div className="md:text-3xl text-lg md:pb-10 pb-4">{membersHead}</div>
                <div className=" leading-5 md:text-base text-xs  md:px-0 flex flex-col md:flex-row justify-between">
                    {Members.map((item) => (
                        <div key={item.id}>{item.member}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamMembers
