import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Education from '../Education/Education';

const Home = () => {
    return (
        <div className='w-[95%] md:w-[90%] mx-auto'>
            <Banner></Banner>
            <About></About>
            <Education></Education>
        </div>
    );
};

export default Home;