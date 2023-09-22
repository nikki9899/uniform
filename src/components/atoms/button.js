import React from 'react'

function Button({ variant, rounded, onClick, children, addStyle }) {
    let className = 'font-manrope '

    if (rounded === 'full') {
        className +=
            'rounded-full font-medium text-xs py-2 px-4 border-gray-700 text-gray-900'
    } else if (rounded === 'semi') {
        className += 'rounded-lg '
    }

    if (variant === 'primary') {
        className +=
            'text-24 font-normal border px-4 py-2 border-gray-700 text-gray-900'
    } else if (variant === 'secondary') {
        className +=
            'text-white text-24 font-normal bg-customBrown border-none p-4 space-x-2'
    }

    className += ` ${addStyle || ''}`

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
