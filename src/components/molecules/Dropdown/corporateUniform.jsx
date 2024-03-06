import React from 'react'
import { corporateUniform, dropdownLabels } from '@/utils/labels/dropdownLables'
import Link from 'next/link'

const CorporateUniform = ({ data,handleOnClick }) => {
    let { corporateUniformHead } = dropdownLabels
  

    return (
        <div>
            <h3 className="font-bold text-sm leading-5 mb-2">
                {corporateUniformHead}
            </h3>
            <ul className="mt-2">
                {data.map((item) => (
                    <li
                        className="list-none font-medium text-xs leading-4"
                        key={item.id}
                    >
                         <Link href={`/plp/${item.attributes.slug}`} onClick={handleOnClick}>
                            {item.attributes.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CorporateUniform
