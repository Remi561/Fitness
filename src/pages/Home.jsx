import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Offer from '../components/Offer'
import Sales from '../components/Sales'
import Trainers from '../components/Trainers'
import Price from '../components/Price'
import Customer from '../components/Customer'
const Home = () => {

  return (
    <div className="text-primary space-y-20">
      <section id="home" className="grid grid-cols-1 container mx-auto px-4">
        <Hero />
      </section>
      <section
        id="about"
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto px-4"
      >
        <About />
      </section>
      <section id='services' className="bg-primary/10 w-full">
        <div className="container mx-auto px-4">
          <Offer />
        </div>
      </section>
      <section id="sales" className="container mx-auto px-4">
        <Sales />
      </section>
      <section id="trainer" className="container mx-auto px-4">
        <Trainers />
      </section>

      <section id="price" className="bg-primary/10 w-full">
        <div className="container mx-auto px-4">
          <Price />
        </div>
      </section>
      <section id="customer" className="container mx-auto px-4">
        <Customer />
      </section>
    </div>
  );
}

export default Home