import React from 'react'
import { aboutUsLables, members } from '@/utils/labels/aboutUsLables'

const TeamMembers = ({ teamNames }) => {
    let { membersHead } = aboutUsLables

    return (
        <div>
            <div className=" md:text-center px-4 pb-6  md:px-16 md:py-10">
                <div className="lg:text-3xl font-normal lg:leading-8 sm:text-2xl text-lg md:pb-10 pb-4">
                    {membersHead}
                </div>
                <div className=" leading-6 lg:text-lg text-xs  md:px-0 flex flex-col md:flex-row justify-between">
                    {teamNames.map((teamMember) => (
                        <div key={teamMember.id}>{teamMember.lables}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamMembers
