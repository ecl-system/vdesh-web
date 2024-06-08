import React from 'react'
import SharedImage from '../SharedImage'
import { centralizeImages } from '@/client/utils/centralizeImages'
import SharedButton from '../SharedButton'

const HorizontalSection = () => {
    return (
        <section className="horizontalSection_main">
            <div className="bannerImageBlock">
                <SharedImage
                    src={centralizeImages?.horizontalSectionImage}
                    alt="horizontal-section-image"
                />

                <div className="contentBlock">
                    <div className="flyIconBlock">
                        <SharedImage src={centralizeImages?.flyIconImage} alt="fly-image" />
                    </div>
                    <h3>Don't know what to do?</h3>
                    <SharedButton className="btn-bg-horizontalSection">
                        Free Consultant
                    </SharedButton>
                </div>
            </div>
        </section>
    )
}

export default HorizontalSection
