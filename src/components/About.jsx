import React from 'react'
import { GiArrowCursor, GiBiceps } from "react-icons/gi";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { useProduct } from '../context/Product';
const About = () => {
  const { FadeInvariant } = useProduct();


  const members = [
    {id: 1, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 2, img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  
    { id: 5, img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ]
  return (
    <>
      <motion.section
        variants={FadeInvariant(1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-4 justify-between"
      >
        <span className="bg-white/30 rounded-3xl text-accent text-sm py-2 px-4 self-start justify-between">
          About fitness
        </span>

        <h3 className="text-3xl  font-bold font-heading">
          Discover a Gym that trains you to be{" "}
          <span className="text-accent capitalize">stronger</span>,{" "}
          <span className="text-accent capitalize">fitter</span> and more{" "}
          <span className="text-accent capitalize">focused</span>
        </h3>
      </motion.section>
      <motion.section
        variants={FadeInvariant(2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="bg-accent flex flex-col items-center justify-end space-x-3  py-4 h-55"
      >
        <div className="flex items-center justify-center bg-background w-16 h-16 rounded-full mb-4 overflow-hidden">
          <GiBiceps className="text-3xl text-white" />
        </div>

        <div className="flex items-center flex-col">
          <p className="text-lg text-background capitalize font-semibold px-10 text-center">
            Trusted by over 1000 members
          </p>
          <div className="flex -space-x-3 flex-shrink-0 items-center">
            {members.map((member) => (
              <div
                key={member.id}
                className="w-10 h-10 border-2 border-primary rounded-full overflow-hidden"
              >
                <img
                  src={member.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center bg-accent">
              <p className="text-sm ">+1k</p>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        variants={FadeInvariant(3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center justify-between gap-4">
        <p className="text-sm font-base ">
          At fitness, our community isn't just showing up - they're leveling up.
          From newcomers to elite athletes, every member pushes harder, lifts
          stronger, and supports one another through every rep.
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 self-baseline border border-primary rounded-lg py-2 px-3 text-sm font-base cursor-pointer "
        >
          {" "}
          Read more about us{" "}
          <FaArrowAltCircleRight className="-rotate-45" />{" "}
        </motion.button>
      </motion.section>
    </>
  );
}

export default About