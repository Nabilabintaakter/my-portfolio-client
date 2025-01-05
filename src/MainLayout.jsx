import React from 'react';
import Navbar from './shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const MainLayout = () => {
    return (
        <div className='font-jet bg-[#0F1629]'>
            <ScrollToTop></ScrollToTop>
            <div className='h-[85px] w-[95%] mx-auto'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;