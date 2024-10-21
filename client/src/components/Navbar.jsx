import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainlogo from '../images/mainlogo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white h-20">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src={mainlogo} alt='#'  className='w-60' />
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`lg:flex lg:items-center lg:space-x-8 ${
            isOpen ? "block" : "hidden"
          } absolute lg:static right-0 top-16 lg:top-auto bg-white lg:bg-transparent lg:flex lg:flex-row space-y-4 lg:space-y-0 p-4 lg:p-0 z-10 lg:z-auto`}
        >
          <li>
            <Link to="/" className="text-gray-700 hover:text-black font-semibold">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-black font-semibold">About Us</Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-700 hover:text-black font-semibold">Services</Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-gray-700 hover:text-black font-semibold">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-black font-semibold">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
