import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({children}) => {
  return (
    <motion.button 
        whileHover={{
            scale: 1.05,
    
            transition:{
                type:'spring',
                stiffness: 400,
                damping: 10,
            }
        }}
      whileTap={{ scale: 0.9 }} className='bg-accent text-background py-2 px-4 rounded-3xl flex text-center w-full justify-center'>
      {children}
    </motion.button>
  )
}

export default Button