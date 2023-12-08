import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const TeamMembers = ({ aboutUs }) => {
    let { membersHead, member1, member2, member3, member4, member5, member6 } =
        aboutUsLables

    return (
        <div>
            <div className="font-medium text-center px-16 py-10">
                <div className="text-2xl pb-10">{membersHead}</div>
                <div className="text-base flex justify-between">
                    <div>{member1}</div>
                    <div>{member2}</div>
                    <div>{member3}</div>
                    <div>{member4}</div>
                    <div>{member5}</div>
                    <div>{member6}</div>
                </div>
            </div>
        </div>
    )
}

export default TeamMembers
