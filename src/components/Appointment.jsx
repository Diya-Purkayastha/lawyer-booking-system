import React from 'react';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = ({data}) => {
    
    const handleCancelAppointment = () =>{
        toast('An Appointment is cancelled')
    }

    const location = useLocation();
    const {id} = location.state || {};
    
    const singleLawyer = data.find(lawyer => lawyer.id === parseInt(id))
    const {name,  speciality, fees} = singleLawyer;

    return (
        <div>
            
            <div className='bg-base-100 shadow-sm my-10 space-y-8 p-6'>
                         <div className='flex justify-between items-center border-y-1 border-dashed py-3 px-4 border-gray-300'>
                            <div>
                            <h1 className='font-semibold text-xl'>{name}</h1>
                            <h4 className='text-gray-400'>{speciality}</h4>
                            </div>
                            <div className="badge  bg-green-100 py-3 text-green-600 text-lg">
                              Appointment Fee: {fees} Taka
                                </div>
                         </div>
                        
                           <button onClick={handleCancelAppointment} className="btn-outline cursor-pointer w-full py-2 text-xl text-center btn transition-colors duration-300 hover:bg-red-300 hover:text-black rounded-full text-red-500 ease px-8 ">Cancel Appointment</button>
                           
                     </div>
        </div>
    );
};

export default Appointment;