import React from 'react'
import { dropdownLabels, hotelUniform } from '@/utils/labels/dropdownLables'
import Link from 'next/link'

const HotelUniforms = () => {
  let {hotelUniformHead} = dropdownLabels
  return (
    <div>
      <Link href="">
      <h3 className="font-bold text-sm leading-5 mb-2">
            {hotelUniformHead}
            </h3>
            </Link>
            {hotelUniform.map((item) => (
              <Link href="">
              <li className="list-none font-medium text-xs leading-4" key={item.id}>
              {item.name}
              </li>
              </Link>
            ))}
            
            
    </div>
  )
}

export default HotelUniforms
