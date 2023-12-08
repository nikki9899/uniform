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
    <div className='flex justify-between'>
      <div>
        <div><IndustrialClothing/></div>
        <div><SecurityGuardUniform/></div>
      </div>
      <div><CommercialUniforms/></div>
      <div>
        <div><CorporateUniform/></div>
        <div><HospitalUniforms/></div>
      </div>
      <div>
        <div><HotelUniforms/></div>
        <div><SchoolUniforms/></div>
      </div>
      
      
      
      
      
      
      
    </div>
  )
}

export default Dropdown
