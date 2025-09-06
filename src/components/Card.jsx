import React from 'react'
import { motion } from 'framer-motion'

import { useProduct } from '../context/Product'



export const Card = ({ icon, title, desc, delay }) => {
  const { FadeInvariant } = useProduct();
  const variant = FadeInvariant(delay);
  

  return (
    <motion.div
          className="flex flex-col items-center px-3 py-6 bg-accent rounded-lg shadow-md cursor-pointer"
       
          variants={variant}
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: true }}

        
    >
      <div className="mb-4 flex items-center justify-center w-16 h-16 bg-background rounded-full">
              {icon}
          </div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-sm text-primary font-base text-center">{desc}</p>
    </motion.div>
  )
}
