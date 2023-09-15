import React from 'react'
import CircularButton from '../CircularButton'

const Button = ({ children, caption, ...restProps }) => {
    return (
        <CircularButton backgroundColor="white" border={true} {...restProps}>
            {children}
            <span className="absolute bottom-0 left-0 right-0 translate-y-[100%] pt-1 mx-auto text-xs font-medium">
                {caption}
            </span>
        </CircularButton>
    )
}

export default Button
