import React from 'react'

const Footer = () => {
  return (

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 my-10">
        {/* Left side - branding */}
        <h2 className="tfont-bold tracking-wide font-heading text-5xl">Fitness</h2>

        {/* Middle - nav links */}
        <nav className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-[#A4DD00] transition">
            About
          </a>
          <a href="#" className="hover:text-[#A4DD00] transition">
            Programs
          </a>
          <a href="#" className="hover:text-[#A4DD00] transition">
            Trainers
          </a>
          <a href="#" className="hover:text-[#A4DD00] transition">
            Contact
          </a>
        </nav>

        {/* Right side - copyright */}
        <p className="text-xs ">
          © 2025 Fitness. All rights reserved.
        </p>
      </div>

  );
}

export default Footer