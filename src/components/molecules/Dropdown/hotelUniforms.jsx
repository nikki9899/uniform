import React from 'react'
import { dropdownLabels, hotelUniform } from '@/utils/labels/dropdownLables'
import Link from 'next/link'

const HotelUniforms = ({ data,handleOnClick }) => {
  let {hotelUniformHead} = dropdownLabels

  return (
    <div>
      <Link href="">
      <h3 className="font-bold text-sm leading-5 mb-2">
            {hotelUniformHead}
            </h3>
            </Link>
            <ul className="mt-2">
        {data.map((item) => (
          <li className="list-none font-medium text-xs leading-4" key={item.id}>
          <Link href={`/plp/${item.attributes.slug}`} onClick={handleOnClick}>
              {item.attributes.name}
            </Link>
          </li>
        ))}
      </ul>
            
            
    </div>
  )
}

export default HotelUniforms
