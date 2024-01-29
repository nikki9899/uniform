'use client'
import { useEffect, useState } from 'react'
import IndustrialClothing from './industrialClothing'
import SecurityGuardUniform from './securityGuardUniform'
import { dropdownLabels } from '@/utils/labels/dropdownLables'
import CommercialUniforms from './commercialUniforms'
import CorporateUniform from './corporateUniform'
import HospitalUniforms from './hospitalUniforms'
import HotelUniforms from './hotelUniforms'
import SchoolUniforms from './schoolUniforms'
import { getAPI } from '@/utils/api'

const Dropdown = ({
    corporateUniformData,
    schoolUniformData,
    hotelUniformData,
}) => {
    console.log('corporate', corporateUniformData)
    console.log('school', schoolUniformData)
    console.log('hotel', hotelUniformData)
    return (
        <div className="flex justify-between absolute top-24 left-0 bg-white z-10 w-full p-2.5">
            <div>
                <br />
                <CorporateUniform data={corporateUniformData} />
                <br />
            </div>

            <div>
                <br />
                <HotelUniforms data={hotelUniformData} />
            </div>

            <div>
                <br />
                <SchoolUniforms data={schoolUniformData} />
            </div>
        </div>
    )
}

export default Dropdown
