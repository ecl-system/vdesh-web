import React from 'react';
import SharedImage from '../shared/SharedImage';
import { centralizeImages } from '@/client/utils/centralizeImages';

const ClientSuccess = () => {
    return (
        <section className='clientSuccess_main_section container container-lg'>
            <div className='textBlock'>
                <h2>1,000+ Clients,</h2>
                <h2>1,00,000+ Success</h2>
                <h2>Stories.</h2>
            </div>
            <div className='imageBlock'>
                <SharedImage src={centralizeImages?.humanMap} alt="human-map"/>
            </div>
        </section>
    );
};

export default ClientSuccess;