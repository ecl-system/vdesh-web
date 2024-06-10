'use client'
import Image from 'next/image'
import React, { lazy } from 'react'

const SharedImage = ({
    src,
    alt,
    fill = true,
    quality = 100,
    height,
    width,
    loading = 'lazy',
    className,
    style,
    onClick = () => {},
}) => {
    const isFill = (width === "undefined" || null) && (height === "undefined" || null) ? false : true;
    // console.log("* isFill", isFill, height, width)
    return (
        <>
            {!isFill ? (
                <Image
                    src={src}
                    alt={alt}
                    height={height}
                    width={width}
                    loading={loading}
                    quality={quality}
                    className={className}
                   style={style}
                    onClick={onClick}
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    loading={loading}
                    quality={quality}
                    fill={fill}
                    className={className}
                    style={style}
                    onClick={onClick}
                />
            )}
        </>
    )
}

export default SharedImage
