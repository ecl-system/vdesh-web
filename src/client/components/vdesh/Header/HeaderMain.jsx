import React from 'react';
import TopHeader from './TopHeader';
import Header from './Header';

const HeaderMain = () => {
    return (
        <section className='header_section_main bg-gradient'>
            <TopHeader/>
            <Header/>
        </section>
    );
};

export default HeaderMain;