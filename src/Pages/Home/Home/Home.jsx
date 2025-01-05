import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='w-[95%] md:w-[90%] mx-auto'>
            <Banner></Banner>
            <section id='about'>
                <About></About>
            </section>
            <section id='education'>
                <Education></Education>
            </section>
            <section id='skills'>
                <Skills></Skills>
            </section>
            <section id='projects'>
                <Projects></Projects>
            </section>
        </div>
    );
};

export default Home;