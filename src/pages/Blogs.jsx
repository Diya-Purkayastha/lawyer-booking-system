import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {
    const data = useLoaderData();
   
    return (
        <div className='my-16 px-3 md:px-0'>
            <div className='text-center space-y-5'>
           <h1 className='text-5xl font-semibold'>Blogs</h1>
           <p className='text-gray-500 max-w-5xl mx-auto'>Let's explore some basic concept that will make you a good developer</p>
           </div>

           <div className='px-3 md:px-0'>
           {
            data.map(blog => <Blog blog={blog} key={blog.question}> </Blog>)
           }
           </div>
           
          
        </div>
    );
};

export default Blogs;