import React, { useEffect, useState } from 'react';
import LawyerCard from './LawyerCard';
import Buttons from '../utility/Buttons';

const LawyerContainer = ({lawyers}) => {

  const [displayLawyer, setDisplayLawyer] = useState(lawyers);
  const [showAll, setShowAll] = useState(false);

 useEffect (() =>{
      if(showAll){
          setDisplayLawyer(lawyers);
      }
      else{
          setDisplayLawyer((lawyers).slice(0,6))
          
      }
  }, [lawyers, showAll]);
    
    return (
        <div className='mt-24 mb-8'>
           <div className='text-center space-y-5'>
           <h1 className='text-5xl font-semibold'>Our Best Lawyers</h1>
           <p className='text-gray-500 max-w-5xl mx-auto'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           </div>
           <div className='grid px-3 md:px-0 grid-cols-1 md:grid-cols-2  gap-4 lg:gap-8 my-8'>
             {
                displayLawyer.map(lawyer => <LawyerCard singleLawyer={lawyer} key={lawyer.licenseNumber}></LawyerCard>)
             }
           </div>
           <div className='flex justify-center'>
                <Buttons onclick={()=> 
                  {setShowAll(!showAll)
                    if(showAll) window.scrollTo(0,400)
                  }} name= {showAll ? 'Show Less Lawyer' : 'Show All Lawyer'} ></Buttons>
            </div>
        </div>
    );
};

export default LawyerContainer;