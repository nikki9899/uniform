import { dropdownLabels } from '@/utils/labels/dropdownLables';
import { securityGuardUniform } from '@/utils/labels/dropdownLables';
import Link from 'next/link';
import React from 'react'

const SecurityGuardUniform = () => {
    let {
        securityGuardUniformHead
    } = dropdownLabels
    return (
        <div>
            <Link href="">
            <h3 className="font-bold text-sm leading-5 mb-2">
            {securityGuardUniformHead}
            </h3>
            </Link>
            {securityGuardUniform.map((item) => (
                <Link href="">
                <li className="list-none font-medium text-xs leading-4" key={item.id}>
                {item.name}
                </li>
                </Link>
            ))}
        </div>
    )
}

export default SecurityGuardUniform
