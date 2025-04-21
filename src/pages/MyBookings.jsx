import React from 'react';
import Appointment from '../components/Appointment';
import { useLoaderData } from 'react-router';

const MyBookings = () => {
    const data = useLoaderData();
    return (
        <div>
           <Appointment data={data}/>
        </div>
    );
};

export default MyBookings;