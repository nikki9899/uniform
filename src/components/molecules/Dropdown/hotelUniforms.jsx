import React from 'react'
import { dropdownLabels, hotelUniform } from '@/utils/labels/dropdownLables'

const HotelUniforms = () => {
  let {hotelUniformHead} = dropdownLabels
  return (
    <div>
      <h3 className="font-bold text-sm leading-5">
            {hotelUniformHead}
            </h3>
            {hotelUniform.map((item) => (
              <li className="list-none font-medium text-xs leading-4" key={item.id}>
              {item.name}
              </li>
            ))}
            
            
    </div>
  )
}

export default HotelUniforms
