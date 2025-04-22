import React from 'react';
import errorimg from '../assets/error.jpg'
import { Link } from 'react-router';
import Buttons from '../utility/Buttons';


const ContactUs = () => {
    return (
        <div className='py-24 text-center'>
      <figure className='flex justify-center'>
        <img className='w-[400px] ' src={errorimg} alt="" />
      </figure>
        <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
           Something Went Wrong!
        </p>
        <Link to='/'>
          <Buttons name='Go To Homepage' />
        </Link>
      
        </div>
    );
};

export default ContactUs;