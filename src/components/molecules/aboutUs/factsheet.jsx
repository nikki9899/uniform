import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const Factsheet = ({ aboutUs }) => {
    let {
        factsheetHead,
        businessHead,
        business,
        ceoHead,
        ceoName,
        locationHead,
        locationAdd,
        employeeHead,
        employeeNo,
        yearHead,
        yearOfEstablishment,
        statusHead,
        status,
        turnoverHead,
        turnover,
    } = aboutUsLables

    return (
        <div>
            <div className="factsheet  pb-6  px-2 md:px-12 md:py-10">
                <div className="font-medium lg:text-[28px] text-xl sm:text-2xl leading-9 md:pb-6 pb-2">
                    {factsheetHead}
                </div>
                <div className="factsheet-description">
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className="font-semibold">{businessHead}</span>{' '}
                        {business}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{ceoHead}</span>{' '}
                        {ceoName}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{locationHead}</span>{' '}
                        {locationAdd}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{employeeHead}</span>{' '}
                        {employeeNo}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{yearHead}</span>{' '}
                        {yearOfEstablishment}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{statusHead}</span>{' '}
                        {status}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{turnoverHead}</span>{' '}
                        {turnover}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Factsheet
