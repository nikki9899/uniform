'use client'
import React from 'react'

const CircularButton = ({
    backgroundColor = 'black',
    children,
    border = false,
    paddingValue = 4,
    ...restProps
}) => {
    return (
        <button
            className={`relative flex justify-center p-${paddingValue} w-fit rounded-full bg-white ${
                border ? 'border border-black hover:border-gray-500' : ''
            } hover:text-gray-500`}
            {...restProps}
        >
            {children}
        </button>
    )
}

export default CircularButton
