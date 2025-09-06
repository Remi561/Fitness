import React from 'react'
import { motion } from 'framer-motion'

import { useProduct } from '../context/Product';

const SalesCard = ({ item, index }) => {
  const { FadeInvariant } = useProduct();
  const variant = FadeInvariant(index);
  
  return (
    <motion.div
      key={index}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="bg-primary/10 backdrop-blur-md shadow-md overflow-hidden rounded-lg cursor-pointer"
    >
      <div className="h-50 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-accent font-bold">{item.price}</p>
      </div>
    </motion.div>
  );
}

export default SalesCard