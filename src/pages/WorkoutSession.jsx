import React from 'react'
import { useParams , useOutletContext} from 'react-router-dom'

export const WorkoutSession = () => {
    const {calender} = useOutletContext()
    const { days } = useParams()
  
    const filterSession = calender.filter(item => item.day == days)

    return (
     
      <div className='space-y-4'>
          {filterSession.map(item =>
              item.plans.map((plan, idx) => (
                  <div className='flex items-center bg-background border py-4 justify-between px-1' key={idx}>
                      <p>{plan.time}</p>
                      <p>{plan.workoutType}</p>
                      <p>{plan.instructor}</p>
                  </div>
              ))
          )}
    </div>
  )
}
