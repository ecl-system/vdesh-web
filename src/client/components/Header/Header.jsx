'use client'
import { centralizeImages } from '@/client/utils/centralizeImages'
import { toCapitalizeFirstLetterOfWord } from '@/client/utils/utilityFunctions'
import { headerMenuItems } from '@/client/utils/utils'
import Image from 'next/image'
import React from 'react'
import SharedImage from '../shared/SharedImage'

const Header = () => {
    return (
        <div className="header container container-lg">
            <div className="vdesh_logoBlock">
                <SharedImage src={centralizeImages?.vdeshLogo} alt="vdesh-logo"/>
            </div>

            <div className="menuItemsBlock">
                <ul>
                    {headerMenuItems?.map((item) => (
                        <li>
                            {/* <span>{item?.icon}</span> */}

                            {toCapitalizeFirstLetterOfWord(item?.content)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header
