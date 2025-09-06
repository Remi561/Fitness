import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import { useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Customer = () => {
    const ref = useRef(null)
   
  
    const scroll = (position) => {
        const el = ref.current;
        if (!el) {
            return;
        }
       el.scrollBy({
            left: position === 'left' ? -300 : 300,
            behavior: 'smooth'
            });
        
        
    }

    const testimonials = [
        {
            name: "John Doe",
            feedback: "Great service and friendly staff!",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Jane Smith",
            feedback: "I love the variety of classes offered! lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            name: "Bob Johnson",
            feedback: "The trainers are very knowledgeable and helpful. Highly recommend! ",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg"
        }
    ];
    return (
      <>
        <header className="mb-10 font-heading text-primary">
          <h1 className="text-4xl font-bold text-center">
            What Our Customers Say
          </h1>
          <p className="text-center">
            Our customers love us! Here's what they have to say:
          </p>
        </header>
        <div ref={ref} className="flex overflow-x-auto gap-4 pb-10 space-x-6 snap-x snap-mandatory">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className=" bg-primary/50 hover:bg-accent w-full transition-all duration-300 flex flex-col justify-between  flex-shrink-0 max-w-sm snap-center relative px-6 py-8"
            >
              <FaQuoteRight className="text-6xl text-primary/50 self-end-safe" />
              <div className="my-4 line-clamp-5">
                <p>{testimonial.feedback}</p>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="w-12 h-12 ">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3  ">
          <button className="border border-primary w-9 h-9 rounded-full flex items-center justify-center cursor-pointer" onClick={() => scroll('left')}> 
            <AiOutlineArrowLeft />
          </button>
          <button className="border border-primary w-9 h-9 rounded-full flex items-center justify-center cursor-pointer" onClick={() => scroll('right')}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </>
    );
}

export default Customer