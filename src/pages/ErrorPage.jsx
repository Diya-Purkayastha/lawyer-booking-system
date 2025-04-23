import React from 'react'
import { Link, useRouteError } from 'react-router'
import Buttons from '../utility/Buttons'
import Navbar from '../components/Header/Navbar'
import errorimg from '../assets/error.jpg'

const ErrorPage = () => {
  const error = useRouteError()
  
  return (
    <>
      <Navbar></Navbar>
      <div className='py-24 text-center'>
        <figure className='flex justify-center'>
                <img className='w-[400px] ' src={errorimg} alt="" />
              </figure>
        <h1 className='mb-8 text-7xl font-thin text-gray-900'>
          {error?.status || 404}
        </h1>
        <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
          {error?.error?.message || 'Something Went Wrong!'}
        </p>
        <p className='mb-6 text-gray-500'>
          Tried to access: <span className="font-mono text-red-600">{location.pathname}</span>
        </p>
        <Link to='/'>
          <Buttons name='Go To Homepage' />
        </Link>
      </div>
    </>
  )
}

export default ErrorPage