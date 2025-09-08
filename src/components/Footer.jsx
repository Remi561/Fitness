import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 my-10">
      {/* Left side - branding */}
      <h2 className="tfont-bold tracking-wide font-heading text-5xl">
        Fitness
      </h2>

      {/* Middle - nav links */}
      <nav className="flex gap-8 text-sm font-medium">
        <Link to={`/#about`} className="hover:text-[#A4DD00] transition">
          About
        </Link>
        <Link to={`/#services`} className="hover:text-[#A4DD00] transition">
          Services
        </Link>
        <Link to={"/#trainer"} className="hover:text-[#A4DD00] transition">
          Trainers
        </Link>
        <Link to={"/#price"} className="hover:text-[#A4DD00] transition">
          Price
        </Link>
      </nav>

      {/* Right side - copyright */}
      <p className="text-xs ">© 2025 Fitness. All rights reserved.</p>
    </div>
  );
};

export default Footer