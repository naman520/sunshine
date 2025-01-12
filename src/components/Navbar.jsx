import React, { useState } from 'react';
import img1 from '../assets/k77.webp';
import img2 from '../assets/Comingsoon1.webp';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close dropdowns when main menu is closed
    setIsServicesDropdownOpen(false);
    setIsLocationDropdownOpen(false);
  };

  return (
    <>
      <div className="bg-white h-[90px]">
        {/* Desktop Navbar */}
        <div className="lg:flex justify-between items-center hidden">
          <img src={img1} alt="Logo" className="pt-1 pl-20 h-[80px]" />
          <div className="flex gap-8 text-black text-md font-medium pr-36">
            <Link to="/" className="relative group">
              Home
              <span className="absolute left-0 top-6 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center gap-1 focus:outline-none relative group"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-white transition-transform duration-300 ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute left-0 top-6 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white text-gray-400 shadow-lg rounded w-48 z-20">
                  <Link to="/service1" className="block px-2 py-2 hover:bg-orange-200 hover:text-black">
                    Speech Therapy
                  </Link>
                  <Link to="/service2" className="block px-2 py-2 hover:bg-orange-200 hover:text-black">
                    Occupational Therapy
                  </Link>
                  <Link to="/service2" className="block px-2 py-2 hover:bg-orange-200 hover:text-black">
                    Special Education
                  </Link>
                  <Link to="/service2" className="block px-2 py-2 hover:bg-orange-200 hover:text-black">
                    Behavioural Therapy
                  </Link>
                  <Link to="/service2" className="block px-2 py-2 hover:bg-orange-200 hover:text-black">
                    Parent & Child Counselling
                  </Link>
                </div>
              )}
            </div>
            {/* <div className="relative group">
              <button
                onClick={toggleLocationDropdown}
                className="flex items-center gap-1 focus:outline-none relative group"
              >
                Location
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-white transition-transform duration-300 ${
                    isLocationDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute left-0 top-6 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
              {isLocationDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white text-gray-400 shadow-lg rounded w-52 z-10">
                  <Link to="/lajpat" className="block px-4 py-2 hover:bg-orange-200 hover:text-black">
                    Delhi
                  </Link>
                  <Link to="/lajpat2" className="block px-4 py-2 hover:bg-orange-200 hover:text-black">
                    Gurgaon (Sector 51)
                  </Link>
                  <Link to="/lajpat2" className="block px-4 py-2 hover:bg-orange-200 hover:text-black">
                    Lucknow (Gomti Nagar)
                  </Link>
                  <Link to="/lajpat2" className="block px-4 py-2 hover:bg-orange-200 hover:text-black">
                    Pune (Magarpatta)
                  </Link>
                </div>
              )}
            </div> */}
            <Link to="/contact" className="relative group">
              Contact Us
              <span className="absolute left-0 top-6 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex justify-between items-center px-4">
          <img src={img1} alt="Logo" className="h-[60px]" />
          <button onClick={toggleMenu} className="text-white  bg-[#9949ba] focus:outline-none">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Sidebar */}
        {/* Mobile Sidebar */}
<div 
  className={`fixed top-0 right-0 w-[250px] h-full bg-white z-20 shadow-lg transform transition-transform duration-300 ease-in-out 
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
>
  <div className="flex flex-col text-black text-lg p-4">
    {/* Close Button */}
    <div className="flex justify-end mb-4">
      <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <Link to="/" className="px-4 py-2 hover:bg-orange-100 bg-[#9949ba]" onClick={toggleMenu}>Home</Link>
    
    {/* Services Dropdown */}
    <div className={`relative ${isServicesDropdownOpen ? 'bg-gray-50' : ''}`}>
      <button 
        onClick={toggleServicesDropdown} 
        className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-orange-100"
      >
        Services
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-300 ${
            isServicesDropdownOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isServicesDropdownOpen && (
        <div className="pl-4">
          <Link to="/service1" className="block px-4 py-2 hover:bg-orange-100">Occupational Therapy</Link>
          <Link to="/service1" className="block px-4 py-2 hover:bg-orange-100">Speech Therapy</Link>
          <Link to="/service1" className="block px-4 py-2 hover:bg-orange-100">Special Education</Link>
          <Link to="/service1" className="block px-4 py-2 hover:bg-orange-100">Behavioural Therapy</Link>
          <Link to="/service1" className="block px-4 py-2 hover:bg-orange-100">Parent & Child Counselling</Link>

                    
          {/* Other service links... */}
        </div>
      )}
    </div>
    
    {/* Location Dropdown */}
    {/* <div className={`relative ${isLocationDropdownOpen ? 'bg-gray-50' : ''}`}>
      <button 
        onClick={toggleLocationDropdown} 
        className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-orange-100"
      >
        Location
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-300 ${
            isLocationDropdownOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isLocationDropdownOpen && (
        <div className="pl-4">
          <Link to="/lajpat" className="block px-4 py-2 hover:bg-orange-100">Delhi</Link>
          
        </div>
      )}     
    </div> */}
    
    <Link to="/contact" className="px-4 py-2 hover:bg-orange-100" onClick={toggleMenu}>Contact Us</Link>
  </div>
</div>
      </div>

      {/* Coming Soon Banner - remains the same as before */}
      <div className="bg-[#89c39a]">
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center p-4">
          <img src={img2} alt="" className="h-[50px] md:h-[80px] " />
          <p className="text-[#9949ba] text-center md:text-left text-lg md:text-xl font-bold ">
            Welcome to K7 family at CR PARK (Delhi) 
          </p>
          <img src={img2} alt="" className="h-[50px]  md:block hidden" />
        </div>
      </div>
    </>
  );
}