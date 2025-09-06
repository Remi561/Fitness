import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  return (
    <div className={`flex flex-col min-h-screen h-full ${mobileMenu&& 'overflow-hidden h-screen'} `}>
      <nav className="bg-background backdrop-blur-3xl w-full sticky top-0 z-50  ">
        <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      </nav>
      <section className="flex-1 my-10 ">
        <Outlet />
      </section>
      <section className="mt-10 bg-accent/90 from-background via-background to-accent text-primary shadow-2xl">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Layout