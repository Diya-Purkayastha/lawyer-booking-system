import React from 'react';
import { Link } from 'react-router';

const LawyerCard = ({singleLawyer}) => {
    
    const {name,image, licenseNumber, speciality,experience, availability} = singleLawyer;
    return (
  
        <div className="card bg-base-100 p-4 card-side shadow-sm lg:gap-4">
           <img src={image} alt="Lawyer" className="w-[200px] h-[200px] object-cover rounded-xl" />
            <div className="card-body">
            <div className="card-actions justify-start">
                <div className="badge bg-blue-100 py-3 text-blue-600">Experience: {experience}Yr</div>
                <div className="badge  bg-green-100 py-3 text-green-600">{availability}</div>
                </div>
                <h2 className="card-title">
                {name}
                
                </h2>
                <p className='text-gray-500'>{speciality}</p>
                <p className='text-gray-500'>License No: {licenseNumber}</p>
               <Link to={`/lawyersDetails/${licenseNumber}`}>
               <button className="btn btn-outline rounded-2xl text-blue-600">View Details</button>
               </Link>
            </div>
            </div>
    );
};

export default LawyerCard;