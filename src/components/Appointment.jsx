import React from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Appointment = ({ AppointmentList, setAppointmentList }) => {

        const handleCancelAppointment = (id) => {
          const updatedList = AppointmentList.filter(item => item.id !== id);
          setAppointmentList(updatedList); 
      
         
          localStorage.setItem('readList', JSON.stringify(updatedList.map(item => item.id)));
      
          toast.error("An Appointment is cancelled");
        };
      
  
    if (AppointmentList.length === 0) {
      return (
        <div className='text-center my-10'>
          <h1 className='text-2xl'>No Appointments Found</h1>
          <Link to="/" className='btn mt-4'>Return to Homepage</Link>
        </div>
      );
    }
  
    return (
      <div>
        <h1 className='text-center text-4xl font-semibold '>My Today Appointments</h1>
        <p className='text-center text-gray-400 max-w-4xl mx-auto'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
        {AppointmentList.map(({ id, name, speciality, fees }) => (
          <div key={id} className='bg-base-100 shadow-sm my-10 space-y-8 p-6'>
            <div className='flex justify-between items-center border-y-1 border-dashed py-3 px-4 border-gray-300'>
              <div>
                <h1 className='font-semibold text-xl'>{name}</h1>
                <h4 className='text-gray-400'>{speciality}</h4>
              </div>
              <div className="badge bg-green-100 py-3 text-green-600 text-lg">
                Appointment Fee: {fees} Taka
              </div>
            </div>
  
            <button onClick={() => handleCancelAppointment(id)} className="btn-outline cursor-pointer w-full py-2 text-xl text-center btn transition-colors duration-300 hover:bg-red-300 hover:text-black rounded-full text-red-500 ease px-8">
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    );
  };
  export default Appointment;