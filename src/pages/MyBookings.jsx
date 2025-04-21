import React from 'react';
import Appointment from '../components/Appointment';
import { useLoaderData } from 'react-router';
import Chart from '../components/Chart';

const MyBookings = () => {
    const data = useLoaderData();
    return (
        <div className='my-5'>
            <Chart data={data} ></Chart>
            <h1 className='text-center text-4xl font-semibold '>My Today Appointments</h1>
            <p className='text-center text-gray-400 max-w-4xl mx-auto'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
           <Appointment data={data}/>
        </div>
    );
};

export default MyBookings;