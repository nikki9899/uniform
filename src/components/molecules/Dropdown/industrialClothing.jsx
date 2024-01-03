import React from 'react'
import { dropdownLabels } from '@/utils/labels/dropdownLables'
import { industrialClothing } from '@/utils/labels/dropdownLables';
import Link from 'next/link';

const IndustrialClothing = () => {
    let {
        industrialClothingHead
    } = dropdownLabels;

    return (
        <div>
            <Link href="">
            <h3 className="font-bold text-sm leading-5 mb-2">
            {industrialClothingHead}
            </h3>
            </Link>
            {industrialClothing.map((item) => (
                <Link href="">
                <li className="list-none font-medium text-xs leading-4" key={item.id}>
                {item.name}
                </li>
                </Link>
            ))}
        </div>

    )
}

export default IndustrialClothing
