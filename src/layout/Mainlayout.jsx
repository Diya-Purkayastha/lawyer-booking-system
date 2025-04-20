import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-308px)]'>
                <div className='max-w-screen-2xl mx-auto  md:px-12 lg:px-16 xl:px-24px'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;