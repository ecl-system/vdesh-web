import React from 'react'
import SharedImage from '../shared/SharedImage'
import { centralizeImages } from '@/client/utils/centralizeImages'
import { toCapitalizeFirstLetterAmongWords } from '@/client/utils/utilityFunctions'
import { icons } from '@/client/utils/centralizeIcon.util'

const StudyAbroad = () => {
    return (
        <section className="studyAbroad_main_section container container-lg">
              {/* row-1 */}
            <div className='row1_height leftBlock'>
                <SharedImage 
                    src={centralizeImages?.studyAbroadImage} 
                    alt="bg-image"
                />
            </div>

            <div className='row1_height rightBlock'>
                <div className='titleBlock'>
                    <p>
                        Study Abroad
                    </p>
                </div>

                <div className='contentBlock'>
                    <h3>
                        Discover your career opportunities
                    </h3>

                    <p>
                        At vdesh, we navigate the complexities of immigration with ease, bringing families together and supporting business in building a global workforce.
                    </p>
                </div>

                <div className='rightVisaArrow'>
                    <h6>Find the right visa for you</h6>
                    <span>
                    {
                        icons?.arrowRight
                    }
                    </span>
                </div>
            </div>

            {/* row-2 */}
            <div className='row2_height rightBlock'>
                <div className='quickLinkBlock'>
                    <h4>Helpful Quick Links</h4>

                    <ul>
                        {
                            [...Array(6)].map((item, index)=>
                                <li>
                                    
                                    <p>Lorem ipsum dolor sit amet consectetur{index+1}</p>
                                    <span>{icons?.arrowRight}</span>
                                </li>)
                        }
                    </ul>
                </div>
            </div>

            <div className='row2_height leftBlock'>
                <div className='segment_container'>
                    <div className='segmentsBlock'>
                        <div className='singleSegment'>Graduation</div>
                        <div className='singleSegment'>Post Graduation</div>
                        <div className='singleSegment'>College</div>
                        <div className='singleSegment'>Medical</div>
                    </div>
                    <div className='nextBtnBlock'>
                        Next
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudyAbroad
