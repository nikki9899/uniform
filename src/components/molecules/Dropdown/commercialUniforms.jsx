import { dropdownLabels } from '@/utils/labels/dropdownLables'
import React from 'react'
import { commercialUniform } from '@/utils/labels/dropdownLables'
import Link from 'next/link'

const CommercialUniforms = () => {
    let {
        commercialUniformHead
    } = dropdownLabels
    return (
        <div>
            <Link href="">
            <h3 className="font-bold text-sm leading-5 mb-2">{commercialUniformHead}</h3>
            </Link>
            {commercialUniform.map((item) => (
                <Link key={item.id} href="">
                <li className="list-none font-medium text-xs leading-4">
                {item.name}
            </li>
            </Link>
            ))}
        </div>
    )
}

export default CommercialUniforms
