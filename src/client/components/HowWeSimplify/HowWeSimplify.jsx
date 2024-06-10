import React from 'react';
import SharedImage from '../shared/SharedImage';
import { centralizeImages } from '@/client/utils/centralizeImages';

const HowWeSimplify = () => {
    return (
        <section className='howWeSimplify_main_section container container-lg'>
            <SharedImage src={centralizeImages?.HowWeSimplify} alt="how-we-simplify" style={{width: "100%", height: "100%"}}/>
        </section>
    );
};

export default HowWeSimplify;