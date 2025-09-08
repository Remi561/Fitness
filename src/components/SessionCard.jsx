import React from 'react'

const SessionCard = ({ status, fallIn, color }) => {
    

  return (
      <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1 sm:gap-4'>
              <div className={`${color} w-10 h-10 rounded-full `}></div>
              <h2 className='md:text-xl text-sm  capitalize font-base text-primary'>{status}</h2>
          </div>
          <div>{fallIn}</div>
      
    </div>
  )
}

export default SessionCard