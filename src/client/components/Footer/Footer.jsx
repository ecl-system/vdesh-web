import Image from 'next/image'
import React from 'react'
import SharedImage from '../shared/SharedImage'
import { centralizeImages } from '@/client/utils/centralizeImages'
import { footerMenuItems1, footerMenuItems2 } from '@/client/utils/utils'
import { toCapitalizeFirstLetterAmongWords } from '@/client/utils/utilityFunctions'
import { icons } from '@/client/utils/centralizeIcon.util'

const Footer = () => {
    return (
        <section className="footer_section_main bg-gradient">
            {/* 1st section */}
            <div className="footer_topBlock container container-lg">
                {[...Array(2)].map((item, index) => (
                    <div className="footerTopContainer">
                        <div className="roundBlock"></div>
                        <div className="contentBlock">
                            <h4>Need any Support for Visa</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* mid section */}
            <div className="footer_midBlock container container-lg">
                <div className="mid_segment1">
                    <div className="imageBlock">
                        <SharedImage src={centralizeImages?.vdeshLogo} alt="vdesh-logo" />
                    </div>

                    <div className="contentBlock">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa modi
                        possimus voluptate ex doloribus qui. Facilis nulla, possimus ipsam culpa
                        aliquam consequatur? Ea itaque temporibus provident facere ut iste repellat!
                    </div>
                </div>

                <div className="mid_segment2">
                    <h6>Service</h6>
                    <ul>
                        {footerMenuItems1?.map((item) => (
                            <li key={item?.id}>
                                {icons?.rightArrow}
                                <p>{toCapitalizeFirstLetterAmongWords(item?.content)}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mid_segment3">
                    <h6>Useful Link</h6>
                    <ul>
                        {footerMenuItems2?.map((item) => (
                            <li key={item?.id}>
                                {icons?.rightArrow}
                                {toCapitalizeFirstLetterAmongWords(item?.content)}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mid_segment4'>
                    <h6>Subscribe Our Newsletter</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi ab id recusandae provident modi quod ex ipsam in animi expedita, rem eos explicabo, excepturi ut nisi quidem consequatur aspernatur.
                    </p>
                   <div className='emailInputBlock'>
                        <input type='email' placeholder='Type Your Mail'/>
                        <span>
                            {icons?.upRightArrow}
                        </span>
                   </div>
                </div>
            </div>

            {/* last section */}
            <div className="footer_bottomBlock container container-lg">
                <p>Copyright &copy; 2024 by VDESH All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default Footer

