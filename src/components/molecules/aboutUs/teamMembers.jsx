import React from 'react'
import { aboutUsLables, members } from '@/utils/labels/aboutUsLables'

const TeamMembers = ({ aboutUs }) => {
    let { membersHead} =
        aboutUsLables

    return (
        <div>
            <div className="font-medium text-center px-16 py-10">
                <div className="text-2xl pb-10">{membersHead}</div>
                <div className="text-base flex justify-between">
                    {members.map((item) => (
                        <div key={item.id}>{item.member}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamMembers
