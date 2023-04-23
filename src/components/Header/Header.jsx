import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-200'>
            <div className="font-roboto flex justify-between items-center my-container py-6  rounded">
            
            <NavLink className="lg:font-bold lg:text-3xl">Jhenidah High School</NavLink>
            <div className='lg:space-x-8 font-bold lg:text-xl menu-bar-color'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pages">Pages</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <button className='main-btn'>Start Free Trail</button>
        </div>
        </div>
    );
};

export default Header;