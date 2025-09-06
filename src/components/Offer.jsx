import React from 'react'
import { FaDumbbell, FaUsers, FaHeartbeat } from 'react-icons/fa'
import { GiBiceps, GiMeal, GiLotus } from 'react-icons/gi'
import { Card } from './Card';
import { motion } from 'framer-motion';
import { useProduct } from '../context/Product';


const Offer = () => {
  const { FadeInvariant } = useProduct();
  const variant = FadeInvariant();
  const services = [
    {
      icon: <FaDumbbell size={40} className="text-neon-green" />,
      title: "Personal Training",
      desc: "One-on-one sessions tailored to your goals with certified trainers.",
 
    },
    {
      icon: <FaUsers size={40} className="text-neon-green" />,
      title: "Group Classes",
      desc: "From HIIT to yoga, our classes keep you motivated and consistent.",

    },
    {
      icon: <GiBiceps size={40} className="text-neon-green" />,
      title: "Strength & Conditioning",
      desc: "Modern equipment and structured programs to build power and endurance.",

    },
    {
      icon: <GiMeal size={40} className="text-neon-green" />,
      title: "Nutrition Guidance",
      desc: "Personalized plans to complement your workouts for faster results.",

    },
    {
      icon: <FaHeartbeat size={40} className="text-neon-green" />,
      title: "Cardio Zone",
      desc: "Smart machines that track and improve your endurance training.",

    },
    {
      icon: <GiLotus size={40} className="text-neon-green" />,
      title: "Recovery & Wellness",
      desc: "Dedicated areas and advice for mobility, recovery, and long-term health.",

    },
  ];
    return (
      <>
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        
          className="flex flex-col items-center justify-center text-center space-y-4 pt-30 pb-10 ">
          <span className="bg-white/30 rounded-3xl text-accent text-sm py-2 px-4">
            whats we offer
          </span>
          <h3 className="text-3xl font-bold capitalize font-heading">
            Train <span className="text-accent">smarter</span>. perform{" "}
            <span className="text-accent">better</span>. Grow{" "}
            <span className="text-accent">stronger</span>.
          </h3>
          <span className="-space-y-1 text-sm font-heading ">
            <p>whether you are just starting out or chasing peak performance</p>
            <p>our expert-led programs are built to push your limits</p>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 pb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              delay={index}
            />
          ))}
        </div>
      </>
    );
}

export default Offer