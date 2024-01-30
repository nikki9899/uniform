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
    handleOnClick,
}) => {
    console.log('corporate', corporateUniformData)
    console.log('school', schoolUniformData)
    console.log('hotel', hotelUniformData)
    return (
        <div className="flex justify-between absolute shadow-md top-24 left-0 bg-white z-10 w-full p-2.5">
            <div className="mt-4">
               
                <CorporateUniform data={corporateUniformData}  handleOnClick={handleOnClick}/>
                <br />
            </div>

            <div className="mt-4">
                
                <HotelUniforms data={hotelUniformData} handleOnClick={handleOnClick} />
            </div>

            <div className="mt-4">
              
                <SchoolUniforms data={schoolUniformData}  handleOnClick={handleOnClick}/>
            </div>
        </div>
    )
}

export default Dropdown
