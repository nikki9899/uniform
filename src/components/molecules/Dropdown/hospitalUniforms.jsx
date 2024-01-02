import { dropdownLabels, hospitalUniform } from '@/utils/labels/dropdownLables'
import React from 'react'

const HospitalUniforms = () => {

  let {hospitalUniformHead} = dropdownLabels
  return (
    <div>
      <h3 className="font-bold text-sm leading-5">
            {hospitalUniformHead}
            </h3>
            {hospitalUniform.map((item) => (
              <li className="list-none font-medium text-xs leading-4" key={item.id}>
              {item.name}
              </li>
            ))}
            
    </div>
  )
}

export default HospitalUniforms
