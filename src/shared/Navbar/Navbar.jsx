import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' className={({isActive})=>`${isActive && 'font-medium border-b-2 border-b-[#3FC8B1]'}`}>Home</NavLink></li>
        <li><NavLink to='/'>About</NavLink></li>
        <li><NavLink to='/'>Education</NavLink></li>
        <li><NavLink to='/'>Projects</NavLink></li>
        <li><NavLink to='/'>Contact</NavLink></li>
    </>
    return (
        <div className='w-[95%] mx-auto fixed z-50 bg-[#0F1629] bg-opacity-10 backdrop-blur-md'>
            <div className="navbar">
                {/* mobile */}
                <div className="navbar-start ">
                    <a className="text-[#3FC8B1] text-[40px] font-bold">ŃBÁ</a>
                </div>
                <div className="navbar-end">
                    {/* laptop */}
                    <ul className="hidden lg:flex text-[#D8D9DC] text-lg items-center gap-12">
                        {links}
                    </ul>
                    {/* mobile */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <div class="text-black p-2 bg-[#3FC8B1] rounded-sm shadow-md menu"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="w-8 h-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg></div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;