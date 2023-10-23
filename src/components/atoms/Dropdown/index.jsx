'use client'

import React, { useState } from 'react'
import Button from '../button'

const Dropdown = ({ selected, setSelected, title, options, icon }) => {
    const [isActive, setIsActive] = useState(false)
    const onClickHandler = () => {
        setIsActive(!isActive)
    }
    const optionClickHandler = (option) => {
        setSelected(option.data);
        setIsActive(false);
    }

    return (
        <div className='relative'>
            <Button
                rounded="full"
                onClick={onClickHandler}
                addStyle={`${selected && 'bg-black text-white'} mb-3`}
            >
                <span>{`${selected ? selected : title}`}</span>
                {icon}
            </Button>
            {isActive && (
                <ul className="border w-max border-black rounded-lg cursor-pointer absolute bottom-0 left-0 translate-y-[100%]">
                    {options.map((item) => (
                        <li
                            key={item.id}
                            className="px-4 rounded-lg hover:bg-gray-200"
                            onClick={optionClickHandler.bind(null, item)}
                        >
                            {item.data}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown
