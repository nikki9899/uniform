import { dropdownLabels } from '@/utils/labels/dropdownLables';
import { securityGuardUniform } from '@/utils/labels/dropdownLables';
import React from 'react'

const SecurityGuardUniform = () => {
    let {
        securityGuardUniformHead
    } = dropdownLabels
    return (
        <div>
            <h3 className="font-bold text-sm leading-5">
            {securityGuardUniformHead}
            </h3>
            {securityGuardUniform.map((item) => (
                <li className="list-none font-medium text-xs leading-4" key={item.id}>
                {item.name}
                </li>
            ))}
        </div>
    )
}

export default SecurityGuardUniform
