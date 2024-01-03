import React from 'react'
import { dropdownLabels, schoolUniform } from '@/utils/labels/dropdownLables'
import Link from 'next/link'

const SchoolUniforms = () => {
  let {schoolUniformHead} = dropdownLabels
  return (
    <div>
      <Link href="">
      <h3 className="font-bold text-sm leading-5 mb-2">
            {schoolUniformHead}
            </h3>
            </Link>
            {schoolUniform.map((item) => (
              <Link href="">
              <li className="list-none font-medium text-xs leading-4" key={item.id}>
              {item.name}
              </li>
              </Link>
            ))}
    </div>
  )
}

export default SchoolUniforms
