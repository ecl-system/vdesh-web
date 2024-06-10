import React from 'react'
import SharedImage from '../shared/SharedImage'
import { centralizeImages } from '@/client/utils/centralizeImages'
import { toCapitalizeFirstLetterAmongWords } from '@/client/utils/utilityFunctions'
import { icons } from '@/client/utils/centralizeIcon.util'
import { workAbroadSegments } from '@/client/utils/utils'

const WorkAbroad = () => {
    return (
        <section className="workAbroad_main_section container container-lg">
            {/* row-1 */}

            {/* left */}
            <div className="row1_height leftBlock">
                <div className="titleBlock">
                    <p>
                        <span className='icon'>{icons?.workIcon}</span>
                        Work Abroad
                    </p>
                </div>

                <div className="contentBlock">
                    <h3>Discover your career opportunities</h3>

                    <p>
                        At vdesh, we navigate the complexities of immigration with ease, bringing
                        families together and supporting business in building a global workforce.
                    </p>
                </div>

                <div className="rightVisaArrow">
                    <h6>Find the right visa for you</h6>
                    <span>{icons?.arrowRight}</span>
                </div>
            </div>

            {/* right */}
            <div className="row1_height rightBlock">
                <SharedImage src={centralizeImages?.workAbroadImage} alt="bg-image" />
            </div>

            {/* row-2 */}
            <div className="row2_height rightBlock">
                {/* left */}
                <div className="segment_container">
                    <div className="segmentsBlock">
                        {workAbroadSegments.map((segment, index) => (
                            <div className="singleSegment" key={segment?.id}>
                                {segment?.segment}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* right */}
            <div className="row2_height leftBlock">
                <div className="quickLinkBlock">
                    <h4>Helpful Quick Links</h4>

                    <ul>
                        {[...Array(6)].map((item, index) => (
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur{index + 1}</p>
                                <span>{icons?.arrowRight}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WorkAbroad
