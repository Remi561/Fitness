import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { motion } from 'framer-motion'
import { useProduct } from '../context/Product';

const Price = () => {
    const { FadeInvariant } = useProduct();
    const variant = FadeInvariant();

    const price = [
        {
            plan: "Basic Plan",
            description: "Ideal for beginners",
            price: "$19",
            includes: [
                { types: "Access to gym facilities", included: true },
                { types: "1 group class per week", included: true },
                { types: "Basic support", included: true },
                { types: "Personalized training plan", included: false },
                { types: "Nutrition coaching", included: false }
            ]
        },
        {
            plan: "Pro Plan",
            description: "For advanced users",
            price: "$39",
            includes: [
                { types: "Access to gym facilities", included: true },
                { types: "3 group classes per week", included: true },
                { types: "Personalized training plan", included: true },
                { types: "Basic support", included: true },
                { types: "Nutrition coaching", included: false }
            ],
            recommended: true
        },
        {
            plan: "Premium Plan",
            description: "All features included",
            price: "$59",
            includes: [
                { types: "Access to gym facilities", included: true },
                { types: "Unlimited group classes", included: true },
                { types: "Personalized training plan", included: true },
                { types: "Premium support", included: true },
                { types: "Nutrition coaching", included: true }
            ],
        }
    ]
  return (
    <div className='py-20'>
          <motion.header
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
              className='text-center mb-10 font-heading'>
        <h2 className='text-3xl font-bold'>Pricing Plans</h2>
        <p>Choose the plan that fits your needs.</p>
      </motion.header>
      <div

              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {price.map((plan, index) => (
            <motion.div
                variants={FadeInvariant(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                key={index} className={`border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden bg-background`}>
                {plan.recommended && (
                    <div className='absolute top-0 rounded-tr-lg right-0 bg-accent text-primary px-3 py-1 rounded-bl-lg text-sm '>
                        Recommended
                    </div>
                )}
                <h3 className='text-xl font-semibold mb-2'>{plan.plan}</h3>
                <p className='text-primary  mb-4'>{plan.description}</p>
                <div className='flex items-baseline mb-4 gap-0.5'>
                    <span className='text-2xl font-bold'>{plan.price}</span><span className='text-sm'>/month</span>
                </div>
         
                <ul className='mb-6 space-y-2 border-t border-primary/20 pt-4'>
                    {plan.includes.map((item, idx) => (
                        <li key={idx} className='flex items-center'>
                           {item.included ? (
                               <span className='mr-2 text-accent'><GiCheckMark /></span>
                           ) : (
                               <span className='mr-2 text-red-500'><FaTimes /></span>
                           )}
                           {item.types}
                        </li>
                    ))}
                </ul>
                <button className='w-full bg-accent text-primary py-2 rounded hover:bg-primary hover:text-accent transition-colors duration-300'>Choose Plan</button>
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Price