import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
      <div className='flex flex-col items-center text-center h-[calc(100vh-420px)] justify-center text-primary gap-4'>
          <h3 className='text-5xl font-bold text-shadow-2xs font-heading text-shadow-accent'>404</h3>
          <p className='font-base text-sm capitalize '>The page you are looking for is not found </p>
          <Link to={'/#home'} className='rounded-xl bg-accent p-2 capitalize font-base'>Back to home
          </Link>
    </div>
  )
}
 