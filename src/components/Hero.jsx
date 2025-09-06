import React from 'react'
import { motion } from 'framer-motion'
import { useProduct } from '../context/Product';
import { Link } from 'react-router-dom';
const Hero = () => {
    const { FadeInvariant, buttonVariant } = useProduct();
    ;
return (
    <>
        <div className="text-center flex flex-col gap-6 relative">
            <div className="absolute inset-y-8 inset-x-0  bg-gradient-to-b from-transparent to-accent/30 w-full blur-3xl rounded-3xl"></div>
            <motion.h1
                variants={FadeInvariant(1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="text-6xl capitalize text-primary font-extrabold font-heading">
                Built for your <span className="text-accent">fitness</span> lifestyle
            </motion.h1>
            <motion.p
                variants={FadeInvariant(2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm ">
                your goals, your pace our proven programs - crafted to help you train with purpose and transform with confidence
            </motion.p>
            <motion.button
                variants={buttonVariant}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 , transition: { duration: 0.4, delay: 0.6 }}}
                viewport={{ once: true, amount: 0.5 }}
                
         
                
               
                className="bg-accent self-center text-background text-sm uppercase font-bold py-2 px-4 rounded-3xl">
                <Link to={'/session'}>
                    Book now
                </Link>
         
            </motion.button>
        </div>
        <motion.div
            variants={FadeInvariant(3)}
            initial="hidden"
            whileInView="visible"
            className=' h-90 w-full mt-10 overflow-hidden rounded-[80px]'
            viewport={{ once: true, amount: 0.5 }}
        >

           
            <img src="https://images.unsplash.com/photo-1603503364272-6e28e046b37a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='w-full h-full object-cover grayscale-100' />
        </motion.div>
    </>
)
}

export default Hero