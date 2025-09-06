import React from 'react'
import { motion } from 'framer-motion'

import { useProduct } from '../context/Product';
import SalesCard from './SalesCard';

const Sales = () => {

  const { equipment, FadeInvariant } = useProduct();
  const variant = FadeInvariant();

    
  return (
    <div>
      <motion.header
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center space-y-4 pt-10 pb-10 ">
        <h2 className="text-3xl font-extrabold capitalize font-heading">
          Transform your training with our fitness equipment
        </h2>
        <p className="text-sm text-primary font-heading">
          Experience a revolution in your fitness journey as you discover an
          array of top-notch fitness equipment
        </p>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {equipment.map((item, index) => (
          <SalesCard key={index} item={item} index={index} />
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        <button className="mt-6  p-2 bg-accent text-primary font-semibold rounded-lg">
          View All Equipment
        </button>
      </div>
    </div>
  );
}

export default Sales;