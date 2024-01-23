import React from 'react'
import { corporateUniform, dropdownLabels } from '@/utils/labels/dropdownLables'
import Link from 'next/link'

const CorporateUniform = () => {

  let {corporateUniformHead} = dropdownLabels
  return (
    <div>
      <Link href="">
      <h3 className="font-bold text-sm leading-5 mb-2">
            {corporateUniformHead}
            </h3>
            </Link>
            {corporateUniform.map((item) => (
              <Link href="">
              <li className="list-none font-medium text-xs leading-4" key={item.id}>
              {item.name}
              </li>
              </Link>
            ))}
    </div>
  )
}

export default CorporateUniform
