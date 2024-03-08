import React from 'react'
import { aboutUsLables } from '@/utils/labels/aboutUsLables'

const Factsheet = ({ factSheet }) => {
    const {
        NatureOfBusiness,
        CompanyCEO,
        CompanyLocation,
        NumberOfEmployees,
        YearOfEst,
        LegalStatus,
        TurnOver,
    } = factSheet
    let {
        factsheetHead,
        businessHead,
        ceoHead,
        locationHead,
        employeeHead,
        yearHead,
        statusHead,
        turnoverHead,
    } = aboutUsLables

    return (
        <div>
            <div className="factsheet  pb-6  px-4 md:px-12 md:py-10 ">
                <div className="font-medium lg:text-[28px] text-xl sm:text-2xl leading-9 md:pb-6 pb-2">
                    {factsheetHead}
                </div>
                <div className="factsheet-description">
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className="font-semibold">{businessHead}</span>{' '}
                        {NatureOfBusiness}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{ceoHead}</span>{' '}
                        {CompanyCEO}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{locationHead}</span>{' '}
                        {CompanyLocation}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{employeeHead}</span>{' '}
                        {NumberOfEmployees}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{yearHead}</span>{' '}
                        {YearOfEst}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{statusHead}</span>{' '}
                        {LegalStatus}
                    </p>
                    <p className="lg:text-base sm:text-sm text-xs font-normal leading-5">
                        <span className=" font-semibold">{turnoverHead}</span>{' '}
                        {TurnOver}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Factsheet
