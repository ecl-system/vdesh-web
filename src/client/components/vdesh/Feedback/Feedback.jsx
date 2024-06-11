import React from 'react'
import SharedImage from '../shared/SharedImage'
import { centralizeImages } from '@/client/utils/centralizeImages'
import { icons } from '@/client/utils/centralizeIcon.util'

const Feedback = () => {
    return (
        <section className="feedback_main_section">
            <div className="titleBlock">
                <h2>What Our Customers</h2>
                <h2>Are Saying...</h2>
            </div>
            <div className="imageBlock">
                <div className="testimonialImage">
                    <SharedImage
                        src={centralizeImages?.testimonialAboutCompany}
                        alt="testimonialAboutCompany"
                    />
                    <div className="vdeshLogo">{icons?.vdeshCircleLogo}</div>
                </div>
            </div>

            {/* slider arrow */}
            <div className="sliderArrow">
                <span>{icons?.arrowLeft}</span>
                <span>{icons?.arrowRight}</span>
            </div>

            {/* contents */}
            <div className="bannerBlock">
                <div className="contentBlock">
                    <div className="title">
                        <h6>Google</h6>
                        <div className="starBlock">
                            {[...Array(5)].map((item, index) => (
                                <span>{icons?.star}</span>
                            ))}
                        </div>
                    </div>

                    <div className="comments">
                        <p>
                            “I am glad to have had the opportunity to meet the full team of VDESH!
                            They are truly great, and do a great job in mentoring students to study
                            Bangladesh. They have informed me everything before hand, and made sure
                            everything was done at the right time."
                        </p>
                    </div>
                    <div className="name">
                        <h6>Mohamed Pervez</h6>
                        <p>Chennai Khawja Yunus Ali Medical College</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback
