import React from 'react';
import LawyerCard from './LawyerCard';

const LawyerContainer = ({lawyers}) => {
    console.log(lawyers);
    return (
        <div className='my-24'>
           <div className='text-center space-y-5'>
           <h1 className='text-5xl font-semibold'>Our Best Lawyers</h1>
           <p className='text-gray-500 max-w-5xl mx-auto'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
             {
                lawyers.map(lawyer => <LawyerCard singleLawyer={lawyer} key={lawyer.id}></LawyerCard>)
             }
           </div>
        </div>
    );
};

export default LawyerContainer;