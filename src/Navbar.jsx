import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars, FaLightbulb } from 'react-icons/fa6';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [openHam, setOpenHam] = useState(false); // State for hamburger menu

  const toggleHamburger = () => {
    setOpenHam(!openHam); // Toggle between true and false
  };

  return (
    <div>
      {/* Laptop View */}
      <div className="container bg-[#001F54] flex justify-between items-center cursor-pointer w-full h-16 px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <FaLightbulb className="text-white hover:text-[#6BAED6] object-cover w-10 duration-1000" />
          <span className="text-white text-xl font-semibold">Brand Name</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex flex-row text-white items-center gap-6 duration-1000">
          <li className="hover:text-[#6BAED6] text-xl duration-1000">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#6BAED6] text-xl duration-1000">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#6BAED6] text-xl duration-1000">
            <Link to="/course">Courses</Link>
          </li>
          <li className="hover:text-[#6BAED6] text-xl duration-1000">
            <Link to="/product">Digital Product</Link>
          </li>
          <li className="hover:text-[#6BAED6] text-xl duration-1000">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Hamburger/Close Icon */}
        <button
          className="md:hidden text-white w-8 h-8 hover:text-[#6BAED6] duration-1000"
          onClick={toggleHamburger}
        >
          {openHam ? <FaTimes /> : <FaBars />} {/* Toggle between icons */}
        </button>
      </div>

      {/* Mobile View */}
      {openHam && (
        <div className="container fixed bg-[#001F54] cursor-pointer flex flex-col items-center w-full h-screen">
          <ul className="flex flex-col justify-center w-full text-white items-center gap-6 duration-1000">
            <li className="hover:text-[#6BAED6] text-xl duration-1000">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#6BAED6] text-xl duration-1000">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-[#6BAED6] text-xl duration-1000">
              <Link to="/course">Courses</Link>
            </li>
            <li className="hover:text-[#6BAED6] text-xl duration-1000">
              <Link to="/product">Digital Product</Link>
            </li>
            <li className="hover:text-[#6BAED6] text-xl duration-1000">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
