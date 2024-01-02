import React from 'react'
import { dropdownLabels } from '@/utils/labels/dropdownLables'
import { industrialClothing } from '@/utils/labels/dropdownLables';

const IndustrialClothing = () => {
    let {
        industrialClothingHead
    } = dropdownLabels;

    return (
        <div>
            <h3 className="font-bold text-sm leading-5">
            {industrialClothingHead}
            </h3>
            {industrialClothing.map((item) => (
                <li className="list-none font-medium text-xs leading-4" key={item.id}>
                {item.name}
                </li>
            ))}
        </div>

    )
}

export default IndustrialClothing
