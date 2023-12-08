import React from 'react'
import { corporateUniform, dropdownLabels } from '@/utils/labels/dropdownLables'

const CorporateUniform = () => {

  let {corporateUniformHead} = dropdownLabels
  return (
    <div>
      <h3 className="font-bold text-sm leading-5">
            {corporateUniformHead}
            </h3>
            {corporateUniform.map((item) => (
              <li className="list-none font-medium text-xs leading-4" key={item.id}>
              {item.name}
              </li>
            ))}
    </div>
  )
}

export default CorporateUniform
