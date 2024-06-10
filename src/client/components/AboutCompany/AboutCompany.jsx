import React from 'react'
import SharedImage from '../shared/SharedImage'
import { centralizeImages } from '@/client/utils/centralizeImages'
import { icons } from '@/client/utils/centralizeIcon.util'
import { aboutCompanySegments } from '@/client/utils/utils'

const AboutCompany = () => {
    return (
        <section className="aboutCompany_main_section container container-lg">
            <h2>About Company</h2>
            <div className="aboutContainer">
                <div className="leftBlock">
                    <div className="imageBlock">
                        <SharedImage src={centralizeImages?.aboutCompany} alt="about-company" />
                    </div>
                </div>

                <div className="rightBlock">
                    <div className='contentBlock'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed, beatae debitis sequi qui, consequatur, est esse unde illum officia in corporis aliquid soluta et adipisci ex dolores iusto impedit. Harum nam quo molestiae nemo velit ad quasi distinctio minus dolorem quos. Nesciunt, modi. Possimus ipsum fuga illum qui ipsam debitis dicta?
                        </p>
                    
                        <div className='segmentBlock'>
                            
                            {
                                aboutCompanySegments.map((item, index) => <div className='singleSegment'>
                                <div className="iconBlock" style={{background: item?.bgColor }}>
                                    {
                                        icons?.passportIcon
                                    }
                                </div>
                                <h6>{item?.title}</h6>
                                <p>
                                    {item?.description}
                                </p>

                            </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCompany
