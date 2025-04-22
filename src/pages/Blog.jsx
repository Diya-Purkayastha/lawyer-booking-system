import React from 'react';
import { MdCalendarMonth } from "react-icons/md";

const Blog = ({blog}) => {
    const {question, answer, dateAdded} = blog;
    return (
        <div className='bg-stone-100 my-8 py-8 px-3 space-y-4 rounded-xl mt-16'>
            <h1 className='text-xl font-semibold'>{question}</h1>
            
            <h1 className='border-dashed border-y py-4 border-gray-400'> <span className='text-blue-500'>Answer: </span> {answer}</h1>
            <p className='flex items-center gap-2'><MdCalendarMonth /> Added at {dateAdded}</p>
        </div>
    );
};

export default Blog;