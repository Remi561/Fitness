import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'  
import { useProduct } from '../context/Product';      

const Trainers = () => {
    const { FadeInvariant } = useProduct();
    const variant = FadeInvariant();

    const trainers = [
      {
        name: "John Doe",
        specialty: "Strength Training",
        image:
          "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Jane Smith",
        specialty: "Yoga Instructor",
        image:
          "https://images.unsplash.com/photo-1628909586533-77fc0df08f61?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Mike Johnson",
        specialty: "Cardio Specialist",
        image:
          "https://images.unsplash.com/photo-1682530677005-6fdcac3a5459?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Emily Davis",
        specialty: "Nutrition Expert",
        image:
          "https://images.unsplash.com/photo-1589860518300-9eac95f784d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];  
  return (
      <div>
      <motion.header
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        className='text-center space-y-2 mb-10 font-heading'>
              <h1 className='text-4xl font-bold text-center '>Our Trainers</h1>
              <p>Meet our team of expert trainers who are here to help you achieve your fitness goals.</p>
          </motion.header>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {/* Trainer profiles will go here */}   
              {trainers.map((trainer, index) => (
                    
                  <motion.div
                      variants={FadeInvariant(index)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: true, amount: 0.5}}
                     
                      key={index} className='bg-primary/10 backdrop-blur-3xl shadow-md rounded-lg overflow-hidden'>
                      
                      <div className='h-64 overflow-hidden'>
                      
                         <img src={trainer.image} alt={trainer.name} className='w-full h-full object-cover' /> 
                      </div>
                     
                      <div className='flex flex-col items-center text-center p-6 space-y-2'>
                          <h3 className='text-lg font-semibold font-base'>{trainer.name}</h3>
                            <p className='text-sm text-accent font-base'>{trainer.specialty}</p>
                            <div className='mt-4 flex space-x-3'>
                                <Link to="#" className='text-primary hover:text-secondary transition'><FaFacebookF/></Link>
                                <Link to="#" className='text-primary hover:text-secondary transition'><FaTwitter/></Link>
                                <Link to="#" className='text-primary hover:text-secondary transition'><FaLinkedinIn/></Link>
                                <Link to="#" className='text-primary hover:text-secondary transition'><FaInstagram/></Link>
                            </div>
                      </div>
                  </motion.div>
                ))}
          </div>
    </div>
  )
}

export default Trainers