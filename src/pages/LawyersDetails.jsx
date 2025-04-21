import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router';
import { IoIosInformationCircleOutline } from "react-icons/io";

const LawyersDetails = () => {

    const data = useLoaderData()

    const {id} = useParams();
    
    const singleLawyer = data.find(lawyer => lawyer.id === parseInt(id))
    const {name, licenseNumber, speciality,experience, availability, fees} = singleLawyer;


    return (
       <div>
             <div className="card bg-base-100 p-4 card-side shadow-sm lg:gap-4 my-4">
            <figure className='w-2/6'>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body space-y-0">
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
             <div className="badge  bg-yellow-100 py-3 text-yellow-600"> <IoIosInformationCircleOutline size={20}/>
             Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
            </div> 
            
             
             <Link>
               <button className="cursor-pointer w-full py-2 text-xl text-center text-white transition-colors duration-300 hover:bg-green-400 rounded-full bg-[#0EA106] ease px-8 ">Book an Appointment</button>
               </Link>
         </div>
       </div>
    );
};

export default LawyersDetails;