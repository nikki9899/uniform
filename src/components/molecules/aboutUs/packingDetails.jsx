import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const PaymentMode = ({ aboutUs }) => {
    let { paymentHead, shipmentMode, PaymentMode } = aboutUsLables

    return (
        <div>
            <div className="atatutoryProfile border-y border-current px-12 py-10">
                <div className="factsheet heading font-normal text-3xl leading-9 pb-6">
                    {paymentHead}
                </div>
                <div className=''>
                    {PaymentMode.map((item) => (
                        <p key={item.id}>{item.paymentMode1}</p>
                    ))}
                </div>
                <div className="font-semibold pt-6">{shipmentMode}</div>
            </div>
        </div>
    )
}

export default PaymentMode
