import React from 'react'
import { dropdownLabels, hotelUniform } from '@/utils/labels/dropdownLables'
import Link from 'next/link'

const HotelUniforms = ({data}) => {
  let {hotelUniformHead} = dropdownLabels
  if (!data) {
    return <div>Loading...</div>; // or any other loading indicator
}
  return (
    <div>
      <Link href="">
      <h3 className="font-bold text-sm leading-5 mb-2">
            {hotelUniformHead}
            </h3>
            </Link>
            <ul>
        {data.map((item) => (
          <li className="list-none font-medium text-xs leading-4" key={item.id}>
          <Link href={`/plp/${item.attributes.name}`}>
              {item.attributes.name}
            </Link>
          </li>
        ))}
      </ul>
            
            
    </div>
  )
}

export default HotelUniforms
