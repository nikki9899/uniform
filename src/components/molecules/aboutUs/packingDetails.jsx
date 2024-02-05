import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const PaymentMode = ({ aboutUs }) => {
    let { paymentHead, shipmentMode, PaymentMode } = aboutUsLables

    return (
        <div>
            <div className="atatutoryProfile pb-6  px-2 md:px-12 md:py-10">
                <div className="factsheet heading font-normal md:text-3xl text-xl leading-7 pb-6">
                    {paymentHead}
                </div>
                <div className='md:text-base text-xs'>
                    {PaymentMode.map((item) => (
                        <p key={item.id}>{item.paymentMode1}</p>
                    ))}
                </div>
                <div className="font-semibold pt-6 md:text-base text-xs">{shipmentMode}</div>
            </div>
        </div>
    )
}

export default PaymentMode
