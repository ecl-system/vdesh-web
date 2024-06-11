import React from 'react';
import SharedImage from '../shared/SharedImage';
import { centralizeImages } from '@/client/utils/centralizeImages';

const HowWeSimplify = () => {
    return (
        <section className='howWeSimplify_main_section container container-lg'>
            <div className='bannerImageBlock'>
            <SharedImage src={centralizeImages?.howWeSimplify} alt="how-we-simplify"/>
            </div>
        </section>
    );
};

export default HowWeSimplify;