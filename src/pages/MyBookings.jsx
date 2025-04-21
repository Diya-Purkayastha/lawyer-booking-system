import React, { useEffect, useState } from 'react';
import Appointment from '../components/Appointment';
import { Link, useLoaderData,useLocation } from 'react-router';
import Chart from '../components/Chart';
import Buttons from '../utility/Buttons';
import { getStoredBook } from '../utility/addToDB';

const MyBookings = () => {
    const data = useLoaderData();
    const location = useLocation();
    const {id} = location.state || {};
    
    const singleLawyer = data.find(lawyer => lawyer.id === parseInt(id))

    const [ReadList , setReadList] = useState([])
    useEffect(() => {
        const storedBookData = getStoredBook(); 
        const myReadList = data.filter(book => storedBookData.includes(book.id));
        setReadList(myReadList);
    }, [data]);
    

    if (ReadList.length === 0) {
        return <div>
             <div className='py-25 px-10 bg-stone-100 rounded-xl my-15 space-y-2'>
            <h1 className='text-center  '>Lawyer’s Data Not Found</h1>
            <h1 className='text-center text-3xl '>Book an Appointment Now </h1>
            <p className='text-center max-w-4xl mx-auto'>The Lawyer’s Profile displays essential details such as name, specialization, experience, and contact information. It helps clients quickly assess and choose the right legal professional for their needs.</p>
            <Link to='/' className='flex justify-center'>
            <Buttons name='Book an Appointment'></Buttons>
            </Link>
            </div>
            </div>;
      }

    return (
        <div className='my-5'>
            <Chart ReadList={ReadList} ></Chart>
            
            <Appointment ReadList={ReadList} setReadList={setReadList} />
        </div>
    );
};

export default MyBookings;