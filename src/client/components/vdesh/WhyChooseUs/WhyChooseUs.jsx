import React from 'react'
import SharedImage from '../shared/SharedImage'
import { centralizeImages } from '@/client/utils/centralizeImages'
import { whyChooseUsPoints } from '@/client/utils/utils'
import { icons } from '@/client/utils/centralizeIcon.util'

const WhyChooseUs = () => {
    return (
        <section className="whyChooseUs_main_section container container-lg">
            <h2>Why Choose Us?</h2>
            <div className="contentBlock">
                <div className="leftBlock">
                    <SharedImage
                        src={centralizeImages?.whyChooseUsImage}
                        alt="why-choose-us-image"
                    />
                </div>
                <div className="rightBlock">
                    {whyChooseUsPoints?.map((item, index) => (
                        <div key={item?.id} className="singlePoint">
                            <h6>
                                <span>{icons?.circleCheck}</span>
                                {item?.title}
                            </h6>
                            <p>{item?.desription}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
