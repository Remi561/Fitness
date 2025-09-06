
import React from 'react'
import { NavLink, Outlet, Navigate, useParams } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const Session = () => {
    const { days } = useParams()
    const scrollRef = React.useRef(null)
    const handleScroll = (position) => {
        const el = scrollRef.current;
        if (!el) {
            return;
        }
        el.scrollBy({
            top: position === 'up' ? -23 : 23,
            behavior: 'smooth'
        })
    }

    const calender = [
      {
        day: "monday",
        plans: [
          {
            time: "6:00 AM - 8:00 AM",
            workoutType: "Yoga",
            instructor: "Jane Smith",
          },
          {
            time: "9:00 AM - 12:00 PM",
            workoutType: "HIIT",
            instructor: "Mike Johnson",
          },
          {
            time: "5:00 PM - 7:00 PM",
            workoutType: "Cardio",
            instructor: "John Doe",
          },
          {
            time: "7:00 PM - 9:00 PM",
            workoutType: "Pilates",
            instructor: "Jane Smith",
          },
        ],
      },
      {
        day: "tuesday",
        plans: [
          {
            time: "6:00 AM - 8:00 AM",
            workoutType: "CrossFit",
            instructor: "John Doe",
          },
          {
            time: "9:00 AM - 12:00 PM",
            workoutType: "Stretching",
            instructor: "Jane Smith",
          },
          {
            time: "5:00 PM - 7:00 PM",
            workoutType: "Strength Training",
            instructor: "Mike Johnson",
          },
          {
            time: "7:00 PM - 9:00 PM",
            workoutType: "Yoga",
            instructor: "John Doe",
          },
        ],
      },
      {
        day: "wednesday",
        plans: [
          {
            time: "6:00 AM - 8:00 AM",
            workoutType: "Cardio",
            instructor: "Jane Smith",
          },
          {
            time: "9:00 AM - 12:00 PM",
            workoutType: "Pilates",
            instructor: "Mike Johnson",
          },
          {
            time: "5:00 PM - 7:00 PM",
            workoutType: "HIIT",
            instructor: "John Doe",
          },
          {
            time: "7:00 PM - 9:00 PM",
            workoutType: "Yoga",
            instructor: "Jane Smith",
          },
        ],
      },
      {
        day: "thursday",
        plans: [
          {
            time: "6:00 AM - 8:00 AM",
            workoutType: "Strength Training",
            instructor: "John Doe",
          },
          {
            time: "9:00 AM - 12:00 PM",
            workoutType: "CrossFit",
            instructor: "Jane Smith",
          },
          {
            time: "5:00 PM - 7:00 PM",
            workoutType: "Cardio",
            instructor: "Mike Johnson",
          },
          {
            time: "7:00 PM - 9:00 PM",
            workoutType: "Pilates",
            instructor: "Jane Smith",
          },
        ],
      },
      {
        day: "friday",
        plans: [
          {
            time: "6:00 AM - 8:00 AM",
            workoutType: "HIIT",
            instructor: "Mike Johnson",
          },
          {
            time: "9:00 AM - 12:00 PM",
            workoutType: "Yoga",
            instructor: "Jane Smith",
          },
          {
            time: "5:00 PM - 7:00 PM",
            workoutType: "Strength Training",
            instructor: "John Doe",
          },
          {
            time: "7:00 PM - 9:00 PM",
            workoutType: "CrossFit",
            instructor: "Jane Smith",
          },
        ],
      },
      {
        day: "saturday",
        plans: [
          {
            time: "6:00 AM - 8:00 AM",
            workoutType: "Stretching",
            instructor: "Jane Smith",
          },
          {
            time: "9:00 AM - 12:00 PM",
            workoutType: "Cardio",
            instructor: "Mike Johnson",
          },
          {
            time: "5:00 PM - 7:00 PM",
            workoutType: "Pilates",
            instructor: "John Doe",
          },
          {
            time: "7:00 PM - 9:00 PM",
            workoutType: "HIIT",
            instructor: "Jane Smith",
          },
        ],
      },
    ];


    const session = calender.find(d => d.day.toLowerCase() === days?.toLowerCase())
   
    if (!session) {
        return <Navigate to={'monday' } />
   }

    


      
  return (
    <div className="text-primary container mx-auto flex items-center flex-col justify-center space-y-10">
      <header className="capitalize text-primary font-heading text-4xl">
        workout calendar
      </header>
      {/* Desktop View*/}
      <div className=" lg:flex items-center gap-4 hidden ">
        {calender.map((item) => (
          <NavLink
            key={item.day}
            to={`${item.day}`}
                className={({ isActive }) =>
                
              `relative capitalize ${isActive && "after:content-[] after:bg-accent after:bottom-0 after:left-0 after:w-full after:absolute after:h-0.5"} `
            }
          >
            {item.day}
          </NavLink>
        ))}
      </div>

      {/*moblie view*/}
      <div className="flex gap-5 lg:hidden items-center">
        <div
          ref={scrollRef}
          className="flex flex-col max-h-7 gap-4 overflow-y-scroll snap-mandatory snap-y"
        >
          {calender.map((item) => (
            <NavLink
              key={item.day}
              to={`${item.day}`}
              className={({ isActive }) =>
                `${isActive && "bg-accent"} capitalize text-center  snap-center`
              }
            >
              {item.day}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1">
          <button onClick={() => handleScroll("up")}>
            <FaChevronUp />
          </button>

          <button onClick={() => handleScroll("down")}>
            <FaChevronDown />
          </button>
        </div>
      </div>

      <div className="w-full px-4">
        <Outlet context={{ calender }} />
      </div>
    </div>
  );
}

export default Session