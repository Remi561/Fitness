import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import { useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Customer = () => {
  const ref = useRef(null);

  const scroll = (position) => {
    const el = ref.current;
    if (!el) {
      return;
    }
    el.scrollBy({
      left: position === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  // const testimonials = [
  //     {
  //         name: "John Doe",
  //         feedback: "Great service and friendly staff!",
  //         avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  //     },
  //     {
  //         name: "Jane Smith",
  //         feedback: "I love the variety of classes offered! lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //         avatar:
  //     },
  //     {
  //         name: "Bob Johnson",
  //         feedback: "The trainers are very knowledgeable and helpful. Highly recommend! ",
  //         avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  //   },
  //   {
  //       name:
  //     }
  // ];

  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "When I first joined this gym, I had no idea where to start. The trainers created a step-by-step program that was easy to follow, and within three months I lost 10kg while building real strength. The staff are always encouraging, and the community makes every workout fun instead of a chore.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      feedback:
        "I’ve been to many gyms before, but none had the welcoming atmosphere this one has. The classes are well-structured, the trainers actually pay attention to form, and the facilities are spotless. For the first time in years, I actually look forward to exercising.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Mike Johnson",
      feedback:
        "The variety of workouts here is incredible. From HIIT to yoga to strength training, I never get bored. The trainers push you just enough without making you feel overwhelmed, and I’ve noticed huge improvements in my stamina and confidence.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Sarah Lee",
      feedback:
        "I struggled with consistency before joining this gym. The accountability and encouragement from both the trainers and other members helped me stay committed. I now have a routine I enjoy, and I feel stronger, healthier, and more focused in every area of my life.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Daniel Green",
      feedback:
        "I joined mainly to lose weight, but I gained so much more than that. I built lasting friendships, developed healthier eating habits, and learned how to train properly. The gym truly cares about long-term results, not just quick fixes.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Emily Davis",
      feedback:
        "I used to feel intimidated walking into gyms, but this place made me feel comfortable right away. The trainers explained everything clearly, the members are friendly, and the supportive vibe keeps me coming back. I’ve gained strength and confidence I didn’t think was possible.",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Robert White",
      feedback:
        "What sets this gym apart is how personal everything feels. The trainers know you by name, they adapt workouts to your ability, and they celebrate your progress along the way. I came in hoping for physical changes, but I left with a stronger mindset too.",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Sophia Martinez",
      feedback:
        "I joined after recovering from an injury, and the team was incredibly patient and knowledgeable. They customized my workouts to help me rebuild strength safely. Now I feel stronger than before my injury and more confident in my movement.",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      name: "David Wilson",
      feedback:
        "This gym has everything — modern equipment, motivating group classes, and a community that feels like family. I’ve not only lost weight but also learned how to train smartly. It’s been one of the best investments I’ve ever made in myself.",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Olivia Brown",
      feedback:
        "As someone who never enjoyed exercise, I was surprised at how fun workouts became here. The trainers’ energy is contagious, and the small progress I saw each week kept me hooked. Now, working out is part of my lifestyle, and I feel healthier than ever.",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    },
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
      <div
        ref={ref}
        className="flex overflow-x-auto gap-4 pb-10 space-x-6 snap-x snap-mandatory"
      >
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
        <button
          className="border border-primary w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => scroll("left")}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className="border border-primary w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => scroll("right")}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
}

export default Customer