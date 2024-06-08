'use client'

import React from 'react'

const SharedButton = ({
    children,
    className,
    style,
    type = 'submit',
    disabled = false,
    onClick = () => {},
}) => {
    return (
        <button
            className={`${className} sharedBtn`}
            style={style}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default SharedButton
