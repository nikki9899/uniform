import { dropdownLabels, hospitalUniform } from '@/utils/labels/dropdownLables'
import Link from 'next/link'
import React from 'react'

const HospitalUniforms = () => {

  let {hospitalUniformHead} = dropdownLabels
  return (
    <div>
      <Link href="">
      <h3 className="font-bold text-sm leading-5 mb-2">
            {hospitalUniformHead}
            </h3>
            </Link>
            {hospitalUniform.map((item) => (
              <Link href="">
              <li className="list-none font-medium text-xs leading-4" key={item.id}>
              {item.name}
              </li>
              </Link>
            ))}
            
    </div>
  )
}

export default HospitalUniforms
