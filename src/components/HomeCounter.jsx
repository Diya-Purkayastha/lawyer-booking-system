import React from 'react';
import drimg from '../assets/success-doctor.png'

const HomeCounter = () => {
    return (
        <div className='my-26'>
            <div className='text-center space-y-5 '>
           <h1 className='text-5xl font-semibold'>We Provide Best Law Services</h1>
           <p className='text-gray-500 max-w-5xl mx-auto'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.</p>
           </div>
           <div className=' grid grid-cols-2 md:grid-cols-4 mt-5 gap-5'>
                <div className='bg-stone-200 p-4 rounded-xl space-y-3 '>
                    <img src={drimg} alt="" />
                    <h1 className='text-5xl font-semibold'> 199+</h1>
                    <p className='text-gray-500 '>Total Lawyer</p>
                </div>
                <div className='bg-stone-200 p-4 rounded-xl space-y-3 '>
                    <img src={drimg} alt="" />
                    <h1 className='text-5xl font-semibold'> 199+</h1>
                    <p className='text-gray-500 '>Total Lawyer</p>
                </div>
                <div className='bg-stone-200 p-4 rounded-xl space-y-3 '>
                    <img src={drimg} alt="" />
                    <h1 className='text-5xl font-semibold'> 199+</h1>
                    <p className='text-gray-500 '>Total Lawyer</p>
                </div>
                <div className='bg-stone-200 p-4 rounded-xl space-y-3 '>
                    <img src={drimg} alt="" />
                    <h1 className='text-5xl font-semibold'> 199+</h1>
                    <p className='text-gray-500 '>Total Lawyer</p>
                </div>
           </div>
            
            </div>
    );
};

export default HomeCounter;