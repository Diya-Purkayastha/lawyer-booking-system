import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router';
import { IoIosInformationCircleOutline } from "react-icons/io";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToStoreDB, getStoredBook } from '../utility/addToDB';

const LawyersDetails = () => {

    
    const data = useLoaderData()

    const {licenseNumber} = useParams();
 
    
    const singleLawyer = data.find(lawyer => lawyer.licenseNumber === (licenseNumber))
    
    const {name, image,  speciality,experience, availability, fees} = singleLawyer;
   
    const handleBookAppointment = () => {
        const storeBook = getStoredBook();
        if (storeBook.includes(licenseNumber)) {
            toast.error("You've already booked this lawyer.");
        } else {
            addToStoreDB(licenseNumber);
            toast.success(`Appointment booked with ${name}`);
        }
    };
    if (!singleLawyer) {
        return (
          <div className="p-5 text-red-500">
            <h1 className="text-xl font-bold">Lawyer not found</h1>
            <Link to="/" className="text-blue-600 underline">Go back</Link>
          </div>
        );
      }
    

    return (
       <div>
         <div className='py-25 px-10 bg-stone-100 rounded-xl my-15 space-y-4'>
            <h1 className='text-center text-4xl '>Lawyer’s Profile Details</h1>
            <p className='text-center max-w-4xl mx-auto'>The Lawyer’s Profile displays essential details such as name, specialization, experience, and contact information. It helps clients quickly assess and choose the right legal professional for their needs.</p>
            </div>
             <div className="flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-md p-6 gap-6 my-10">
             <img src={image} alt="Lawyer" className="w-[300px] h-[300px] object-cover rounded-xl" />
            <div className="card-body space-y-2">
            <div className="card-actions justify-start">
                <div className="badge bg-blue-100 py-3 text-blue-600">Experience: {experience}Yr</div>
                
                </div>
                <h2 className="card-title">
                {name}
                
                </h2>
                
               <p className='text-gray-500 inline mr-4'>{speciality}</p>
               <p className='text-gray-500 inline'>License No: {licenseNumber}</p>
               <div className='flex gap-4'>
               <h3 className='text-gray-700'>Availability: </h3>
               {availability[0]? 
               <div className="badge  bg-yellow-100 py-3 text-yellow-600">{availability[0]}</div> : null}
               {availability[1]? 
               <div className="badge  bg-yellow-100 py-3 text-yellow-600">{availability[1]}</div> : null}
               {availability[2]? 
               <div className="badge  bg-yellow-100 py-3 text-yellow-600">{availability[2]}</div> : null}
               </div>
                
               <h3 className='text-gray-700'>Consultation Fee: <span className='text-green-500 font-semibold'>Taka: {fees}</span> </h3>
              
              
            </div>

           
            </div>
             <div className='bg-base-100 shadow-sm my-10 space-y-8 p-6'>
             <h1 className='text-center text-4xl '>Book an Appointment</h1>
             <div className='flex justify-between border-y-1 border-dashed py-3 px-4 border-gray-300'>
                <h1>Availability</h1>
                <div className="badge  bg-green-100 py-3 text-green-600">
                Lawyer  Available Today
                    </div>
             </div>
             <div className=" flex gap-2 rounded-2xl justify-center items-center bg-yellow-100 py-2 text-yellow-600"> <IoIosInformationCircleOutline size={20}/>
             Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
            </div> 
            
             
             <Link to='/my-bookings' state={{licenseNumber}}>
               <button onClick={handleBookAppointment} className="cursor-pointer w-full py-2 text-xl text-center text-white transition-colors duration-300 hover:bg-green-400 rounded-full bg-[#0EA106] ease px-8 ">Book an Appointment</button>
               </Link>
         </div>
       </div>
    );
};

export default LawyersDetails;