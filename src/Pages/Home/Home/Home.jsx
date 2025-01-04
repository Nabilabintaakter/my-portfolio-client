import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    return (
        <div className='w-[95%] md:w-[90%] mx-auto'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;