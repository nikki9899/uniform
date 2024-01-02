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
            <div className="factsheet border-y border-current px-12 py-10">
                <div className="factsheet heading font-medium text-3xl leading-9 pb-6">
                    {factsheetHead}
                </div>
                <div className="factsheet-description">
                    <p className="text-base font-normal leading-5">
                        <span className=" font-semibold">{businessHead}</span>{' '}
                        {business}
                    </p>
                    <p className="text-base font-normal leading-5">
                        <span className=" font-semibold">{ceoHead} -</span>{' '}
                        {ceoName}
                    </p>
                    <p className="text-base font-normal leading-5">
                        <span className=" font-semibold">{locationHead}</span>{' '}
                        {locationAdd}
                    </p>
                    <p className="text-base font-normal leading-5">
                        <span className=" font-semibold">{employeeHead}</span>{' '}
                        {employeeNo}
                    </p>
                    <p className="text-base font-normal leading-5">
                        <span className=" font-semibold">{yearHead}</span>{' '}
                        {yearOfEstablishment}
                    </p>
                    <p className="text-base font-normal leading-5">
                        <span className=" font-semibold">{statusHead}</span>{' '}
                        {status}
                    </p>
                    <p className="text-base font-normal leading-5">
                        <span className=" font-semibold">{turnoverHead}</span>{' '}
                        {turnover}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Factsheet
