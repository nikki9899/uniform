import React from 'react'
import { dropdownLabels, schoolUniform } from '@/utils/labels/dropdownLables'

const SchoolUniforms = () => {
  let {schoolUniformHead} = dropdownLabels
  return (
    <div>
      <h3 className="font-bold text-sm leading-5">
            {schoolUniformHead}
            </h3>
            {schoolUniform.map((item) => (
              <li className="list-none font-medium text-xs leading-4" key={item.id}>
              {item.name}
              </li>
            ))}
    </div>
  )
}

export default SchoolUniforms
