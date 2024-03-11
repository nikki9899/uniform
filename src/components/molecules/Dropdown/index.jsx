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
    return (
        <div className="flex md:flex-row flex-col justify-between absolute md:top-[92px] top-12 left-0 bg-background w-full p-2.5 md:px-24 drop-shadow-lg">
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
