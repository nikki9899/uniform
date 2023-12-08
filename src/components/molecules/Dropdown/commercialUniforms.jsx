import { dropdownLabels } from '@/utils/labels/dropdownLables'
import React from 'react'
import { commercialUniform } from '@/utils/labels/dropdownLables'

const CommercialUniforms = () => {
    let {
        commercialUniformHead
    } = dropdownLabels
    return (
        <div>
            <h3 className="font-bold text-sm leading-5">{commercialUniformHead}</h3>
            {commercialUniform.map((item) => (
                <li className="list-none font-medium text-xs leading-4" key={item.id}>
                {item.name}
            </li>
            ))}
        </div>
    )
}

export default CommercialUniforms
