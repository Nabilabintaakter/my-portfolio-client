import React from 'react';
import Navbar from './shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='font-jet bg-[#0F1629]'>
            <div className='h-[76px] w-[95%] mx-auto'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;