import React from 'react'
import IndustrialClothing from './industrialClothing'
import SecurityGuardUniform from './securityGuardUniform'
import { dropdownLabels } from '@/utils/labels/dropdownLables'
import CommercialUniforms from './commercialUniforms'
import CorporateUniform from './corporateUniform'
import HospitalUniforms from './hospitalUniforms'
import HotelUniforms from './hotelUniforms'
import SchoolUniforms from './schoolUniforms'

const Dropdown = () => {
  return (
    <div className='flex justify-between absolute top-24 left-0 bg-white z-10 w-full p-2.5'>
      <div>
        <div><IndustrialClothing/></div>
        <br/>
        <div><SecurityGuardUniform/></div>
      </div>
      <div><CommercialUniforms/></div>
      <div>
        <div><CorporateUniform/></div>
        <br/>
        <div><HospitalUniforms/></div>
      </div>
      <div>
        <div><HotelUniforms/></div>
        <br/>
        <div><SchoolUniforms/></div>
      </div>
      
      
      
      
      
      
      
    </div>
  )
}

export default Dropdown
