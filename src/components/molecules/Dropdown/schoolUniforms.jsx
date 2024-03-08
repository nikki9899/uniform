import React from 'react'
import { dropdownLabels, schoolUniform } from '@/utils/labels/dropdownLables'
import Link from 'next/link'

const SchoolUniforms = ({ data,handleOnClick }) => {
  let { schoolUniformHead } = dropdownLabels;
 

  return (
    <div>
      <h3 className="font-bold text-sm leading-5 mb-2">{schoolUniformHead}</h3>
      <ul className="mt-2">
        {data.map((item) => (
          <li className="list-none font-medium text-xs leading-4" key={item.id}>
          <Link href={`/plp/${item.attributes.slug}`} onClick={handleOnClick}>
             {item.attributes.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolUniforms;
