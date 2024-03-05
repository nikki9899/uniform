import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const UspHead = ({data}) => {
    const { companyUspList } = data;
    let { uspHead, UspText } = aboutUsLables

    return (
        <div>
            <div className="companyUps pb-6  px-2 md:px-12 md:py-10">
                <div className=" font-normal lg:text-3xl sm:text-2xl text-xl leading-9 md:pb-6 pb-2">
                    {uspHead}
                </div>
                <div className=" lg:text-base sm:text-sm text-xs font-medium leading-5">
                {companyUspList.map((item) => (
                        <p key={item.id}>{item.lables}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UspHead
