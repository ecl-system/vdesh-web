import React from 'react'
import SharedImage from '../shared/SharedImage';
import { icons } from '@/client/utils/centralizeIcon.util';
import { centralizeImages } from '@/client/utils/centralizeImages';

const HowVdeshDifferent = () => {
    return (
        <section className="howVdeshDifferent_main_section container container-lg">
            <h2>How VDESH Is different</h2>
            <div className="booksArea">
                <div className="page1">
                    <SharedImage src={centralizeImages?.page1} alt="page1" />
                    <div className="contentBlock">
                        <h4 className="titleBlock">Without VDESH</h4>
                        <div className='points'>
                            {[...Array(5)].map((item, index) => (
                                <p>
                                    <span>{icons?.dislike}</span>
                                    We are local. So we can help you throughout the 5 years of study
                                    here in Bangladesh.
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="page2">
                    <SharedImage src={centralizeImages?.page2} alt="page2" />
                    <div className="contentBlock">
                        <h4 className="titleBlock">With VDESH</h4>
                        <div className='points'>
                            {[...Array(5)].map((item, index) => (
                                <p>
                                    <span>{icons?.like}</span>
                                    We are local. So we can help you throughout the 5 years of study
                                    here in Bangladesh.
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowVdeshDifferent
