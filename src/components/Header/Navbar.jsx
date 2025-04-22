import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import Buttons from '../../utility/Buttons';


const Navbar = () => {
    return (
        <div className="navbar shadow-sm lg:shadow-none bg-base-100 p-0 max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="cursor-pointer lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='text-lg'><NavLink className={({isActive})=> isActive? 'underline underline-offset-8' : " " } to='/'>Home</NavLink></li> 
                    <li className='text-lg'><NavLink className={({isActive})=> isActive? 'underline underline-offset-8' : " "} to='/my-bookings'>My-Bookings</NavLink></li> 
                    <li className='text-lg'><NavLink className={({isActive})=> isActive? 'underline underline-offset-8' : " "} to='/blogs'>Blogs</NavLink></li> 
                    <li className='text-lg'><NavLink className={({isActive})=> isActive? 'underline underline-offset-8' : " "} to='/contact-us'>Contact Us</NavLink></li>  
                    </ul>
                    </div>
                    <a className="cursor-pointer font-bold text-xl gap-2 flex"><img src={logo} className='w-8 h-8 hidden lg:block' alt="" /> Law.BD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li className='text-lg'><NavLink className={({isActive})=> isActive? 'underline underline-offset-8' : " " } to='/'>Home</NavLink></li> 
                    <li className='text-lg'><NavLink className={({isActive})=> isActive? 'underline underline-offset-8' : " "} to='/my-bookings'>My-Bookings</NavLink></li> 
                    <li className='text-lg'><NavLink className={({isActive})=> isActive? 'underline underline-offset-8' : " "} to='/blogs'>Blogs</NavLink></li> 
                    <li className='text-lg'><NavLink className={({isActive})=> isActive? 'underline underline-offset-8' : " "} to='/contact-us'>Contact Us</NavLink></li> 
                    
                    </ul>
                </div>
                <div className="navbar-end">
                    <Buttons name='Contact Now'> </Buttons>
                </div>
                </div>
    );
};

export default Navbar;