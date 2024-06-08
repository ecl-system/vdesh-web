'use client'
import React from 'react'
import SharedImage from '../shared/SharedImage'
import { centralizeImages } from '@/client/utils/centralizeImages'
import { icons } from '@/client/utils/centralizeIcon.util'
import { bannerMainMenuItems } from '@/client/utils/utils'
import { toCapitalizeFirstLetterAmongWords } from '@/client/utils/utilityFunctions'

const BannerMain = () => {
    return (
        <section className="banner_section_main container container-lg bg-gradient-banner-main">
            <div className="banner_leftBlock">
                <h1>Immigration Experience, Simplified</h1>

                <p>
                    At vdesh, we navigate the complexities of immigration with ease, bringing
                    families together and supporting business in building a global workforce.
                </p>

                <div className="whatToDo">
                    <p>Don't knwo what to do?</p>
                    <p>Get free Counselling.</p>
                </div>

                <div className="segmentBlock">
                    {bannerMainMenuItems?.slice(0, 4).map((item, index) => (
                        <div className="singleSegment" key={item?.id} onClick={() => {}}>
                            <div className="childSegment1">
                                <p>{toCapitalizeFirstLetterAmongWords(item?.content)}</p>
                            </div>
                            <div className="childSegment2">{icons?.upRightArrow}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="banner_rightBlock">
                <div className="imageBlock">
                    <SharedImage src={centralizeImages?.bannerMain} alt="main-banner-image" />
                </div>
            </div>
        </section>
    )
}

export default BannerMain
