// 'use client'
import { contactInfo } from '@/client/utils/contactInfo.util'
import { icons } from '@/client/utils/index.util'
import React from 'react'
import SharedButton from '../shared/SharedButton'

const TopHeader = () => {
    return (
        <div className="top_header container container-lg">
            {/* top-left */}
            <div className="top_left">
                <span>{icons.locationPin}</span>
                <p>Mirpur DOHS Road, Dhaka-1206, Bangladesh</p>
            </div>

            {/* top-right */}
            <div className="top_right">
                <div className="whatsApp_block">
                    <a href={contactInfo?.whatsApp} target="_blank" rel="noopener noreferrer">
                        <span>{icons?.whatsApp}</span>
                        <p className="mobileNumber">{contactInfo.mobileNumber}</p>
                    </a>
                </div>

                <SharedButton className="btn-gradient">Free Consultant</SharedButton>
            </div>
        </div>
    )
}

export default TopHeader
