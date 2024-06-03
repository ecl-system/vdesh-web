"use client"
import Image from 'next/image';
import React, { lazy } from 'react';

const SharedImage = ({
    src, 
    alt, 
    fill = true, 
    quality = 100, 
    height, 
    width, 
    loading = "lazy",
    className,
    style,
    onClick=()=> {}
}) => {
    return (
        <>
            <Image 
                src={src}
                alt={alt}
                fill={fill}
                loading={loading}
                quality={quality}
                height={height}
                width={width}
                className={className}
                style={style}
                onClick={onClick}
            />
        </>
    );
};

export default SharedImage;