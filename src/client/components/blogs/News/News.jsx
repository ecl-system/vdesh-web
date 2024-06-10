import { icons } from '@/client/utils/centralizeIcon.util'
import React from 'react'
import Card from '../../shared/Card'
import { blogsMenu } from '@/client/utils/utils'

const News = () => {
    return (
        <section className="newsReport_main_section container container-lg">
            <div className="title_slider_Block">
                <div className="title">
                    <h2>News & Reports</h2>
                </div>
                <div className="sliderArrow">
                    <span>{icons?.roundArrowLeft}</span>
                    <span>{icons?.roundArrowRight}</span>
                </div>
            </div>
            <div className="news_card_container">
                {blogsMenu?.map((singleCard, index) => (
                    <Card src={singleCard?.src} key={singleCard?.id} />
                ))}
            </div>
        </section>
    )
}

export default News
