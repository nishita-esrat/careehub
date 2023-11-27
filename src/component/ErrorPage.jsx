
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-5  p-2'>
        <ExclamationTriangleIcon className=' w-20 md:w-28'/>
        <h1 className='font-bold text-3xl'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='text-lg font-semibold'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage