'use client'

import React from 'react'

const SharedButton = ({
    children,
    className,
    type = 'submit',
    disabled = false,
    onClick = () => {},
}) => {
    return (
        <button
            className={`${className} sharedBtn`}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default SharedButton
