import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const PaymentMode = ({ data }) => {
    let { paymentHead, shipmentMode} = aboutUsLables

    return (
        <div>
            <div className=" pb-6  px-4 md:px-12 md:py-10">
                <div className="font-medium lg:text-3xl sm:text-2xl text-xl leading-9 pb-6">
                    {paymentHead}
                </div>
                <div className="lg:text-lg sm:text-base text-xs lg:leading-7 font-medium">
                {data.PNPList.map((item) => (
                        <p key={item.id}>{item.lables}</p>
                    ))}
                </div>
                <div className="font-bold pt-6 md:text-base text-xs">
                    {shipmentMode}
                </div>
            </div>
        </div>
    )
}

export default PaymentMode
