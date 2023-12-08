import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const PaymentMode = ({ aboutUs }) => {
    let {
        paymentHead,
        paymentMode1,
        paymentMode2,
        paymentMode3,
        paymentMode4,
        paymentMode5,
        paymentMode6,
        paymentMode7,
        shipmentMode,
    } = aboutUsLables

    return (
        <div>
            <div className="atatutoryProfile border-y border-current px-12 py-10">
                <div className="factsheet heading font-normal text-3xl leading-9 pb-6">
                    {paymentHead}
                </div>
                <div className="atatutoryProfile-description text-base font-normal leading-5">
                    <p>{paymentMode1}</p>
                    <p>{paymentMode2}</p>
                    <p>{paymentMode3}</p>
                    <p>{paymentMode4}</p>
                    <p>{paymentMode5}</p>
                    <p>{paymentMode6}</p>
                    <p>{paymentMode7}</p>
                </div>
                <div className="font-semibold pt-6">{shipmentMode}</div>
            </div>
        </div>
    )
}

export default PaymentMode
