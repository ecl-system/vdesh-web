import React from 'react'
import SharedImage from './SharedImage'
import { centralizeImages } from '@/client/utils/centralizeImages'

const Card = ({ src }) => {
    return (
        <div className="singleCard">
            <div className="imageBlock">
                <SharedImage src={src} alt="card-image" />
            </div>
            <div className="imageTitle">
                <p>Why Immigration is Crucial for the U.S. STEM Industry</p>
            </div>
            <div className="date">
                <p>February 12, 2024</p>
            </div>
        </div>
    )
}

export default Card
