import React from 'react';
import drimg from '../assets/success-doctor.png'
import starimg from '../assets/success-review.png'
import hultimg from '../assets/success-patients.png'
import staffimg from '../assets/success-staffs.png'
import CountUp from 'react-countup';


const HomeCounter = () => {
   
    return (
        <div className='my-26'>
            <div className='text-center space-y-5 '>
           <h1 className='text-5xl font-semibold'>We Provide Best Law Services</h1>
           <p className='text-gray-500 max-w-5xl mx-auto'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.</p>
           </div>
           <div className='px-3 md:px-0 grid grid-cols-2 md:grid-cols-4 mt-5 gap-5'>

                <div className='bg-stone-200 p-4 pl-8 rounded-xl space-y-3 '>
                    <img src={drimg} alt="" />
                    <h1 className='text-5xl font-semibold'> <CountUp start={0} end={199} duration={2.5} separator="," enableScrollSpy />+</h1>
                   
                    <p className='text-gray-500 '>Total Lawyer</p>
                </div>
                <div className='bg-stone-200 p-4 pl-8 rounded-xl space-y-3 '>
                    <img src={starimg} alt="" />
                    <h1 className='text-5xl font-semibold'> <CountUp start={0} end={467} duration={2.5} enableScrollSpy separator="," />+</h1>
                    <p className='text-gray-500 '>Total Reviews</p>
                </div>
                <div className='bg-stone-200 p-4 pl-8 rounded-xl space-y-3 '>
                    <img src={hultimg} alt="" />
                    <h1 className='text-5xl font-semibold'> <CountUp start={0} end={1900} duration={2.5} enableScrollSpy separator="," />+</h1>
                    <p className='text-gray-500 '>Cases Initiated</p>
                </div>
                <div className='bg-stone-200 p-4 pl-8 rounded-xl space-y-3 '>
                    <img src={staffimg} alt="" />
                    <h1 className='text-5xl font-semibold'> <CountUp start={0} end={300} duration={2.5} enableScrollSpy separator="," />+</h1>
                    <p className='text-gray-500 '>Total Stuff</p>
                </div>

                
           </div>
            
            </div>
    );
};

export default HomeCounter;

// import React from 'react';
// import CountUp from 'react-countup';

// const CounterUp = () => {
//   return (
//     <div className="text-center p-4">
//       <h2 className="text-xl font-bold mb-2">Total Users</h2>
//       <div className="text-4xl font-extrabold text-blue-600">
//         <CountUp start={0} end={1000} duration={2.5} separator="," />
//       </div>
//     </div>
//   );
// };

// export default CounterUp;
