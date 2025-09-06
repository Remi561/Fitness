import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { scroller } from 'react-scroll'
import Button from './button'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ mobileMenu, setMobileMenu }) => {
  const location = useLocation()
  const navigate = useNavigate()


 
  const nav = [ "about", "services", "sales", "trainer", "price"];
  
  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.replace('#', ''), {
        smooth: true,
        duration: 500,
        offset: -90,
        
      })
    }
  }, [location.hash])
  
  
  return (
    <>
      <div className="flex items-center bg-white/30 rounded-3xl backdrop-blur-lg  shadow-md  container mx-auto  h-14 mt-4 justify-between px-4">
        <header className="text-white">
          <NavLink className="text-3xl font-heading" to={'/#home'}>Fitness App</NavLink>
        </header>

        <ul className="md:flex gap-4 text-primary font-base text-sm font-light items-center hidden">
          {nav.map((item) => (
          
              <NavLink
                to={`/#${item}`}
                className={
                  `relative cursor-pointer after:content-[] after:absolute after:w-1/2 after:h-0.5 after:bg-accent after:ronded-sm after:bottom-0 after:left-0 after:duration-150 after:transition-all rounded-3xl hover:after:w-full capitalize `
                }
                key={item}
              >
                {item}
              </NavLink>
            
          ))}
        </ul>
        {/* mobile menu */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8 }}
          onClick={() => setMobileMenu(true)}
          disabled={mobileMenu}
          className="w-10 h-10 bg-accent disabled:opacity-60 rounded-full flex items-center justify-center text-primary cursor-pointer md:hidden"
        >
          <FaBars />
        </motion.button>

        <section className="md:block hidden">
          <Button>Join Now</Button>
        </section>
      </div>
      {mobileMenu && (
        <AnimatePresence>
          <motion.section
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -50 }}
            transition={{ duration: 0.2, ease: easeInOut }}
            className=" md:hidden fixed h-screen sm:w-md w-full  bg-background shadow-2xl text-primary backdrop-blur-3xl left-0 top-0 flex flex-col justify-between   z-30 px-4 py-5"
          >
            <button onClick={() => setMobileMenu(false)} className="self-end">
              <FaTimes />
            </button>
            <ul className="flex-1 flex justify-center gap-3 flex-col px-3">
              {nav.map((item) => (
                <NavLink
                  onClick={() => setMobileMenu(false)}
                  to={`/#${item}`}
                  
                  className="relative cursor-pointer w-full py-2 border-primary border-b capitalize"
                  key={item}
                >
                  <p className="px-3">{item}</p>
                </NavLink>
              ))}
            </ul>
            <Button>Join Now</Button>
          </motion.section>
        </AnimatePresence>
      )}
    </>
  );
}

export default Navbar