import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/k77.webp";
import img2 from "../assets/Comingsoon1.webp";

export default function Navbar() {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const serviceRef = useRef(null);
  const navigate = useNavigate(); // ✅ React Router navigation

  const toggleServicesDropdown = (event) => {
    event.preventDefault();
    setIsServicesDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServicesDropdownOpen(false);
  };

  const handleLinkClick = (path) => {
    navigate(path); // ✅ Navigate to the page
    setIsServicesDropdownOpen(false); // ✅ Close dropdown after navigation
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (serviceRef.current && !serviceRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="bg-white h-[90px]">
        {/* ✅ Desktop Navbar */}
        <div className="lg:flex justify-between items-center hidden px-8">
          <img src={img1} alt="Logo" className="pt-1 h-[80px]" />
          <div className="flex gap-8 text-black text-md font-medium">
            <button onClick={() => handleLinkClick("/")} className="relative group">
              Home
            </button>

            {/* ✅ Services Section */}
            <div className="relative group flex items-center" ref={serviceRef}>
              <button onClick={() => handleLinkClick("/service")} className="focus:outline-none">
                Services
              </button>

              <button onClick={toggleServicesDropdown} className="focus:outline-none ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isServicesDropdownOpen ? "rotate-180" : ""
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
                <div className="absolute left-0 mt-10 bg-white text-gray-700 shadow-lg rounded w-48 z-20">
                  <button onClick={() => handleLinkClick("/speech-therapy")} className="block px-4 py-2 hover:bg-orange-200 w-full text-left">
                    Speech Therapy
                  </button>
                  <button onClick={() => handleLinkClick("/occupational-therapy")} className="block px-4 py-2 hover:bg-orange-200 w-full text-left">
                    Occupational Therapy
                  </button>
                  <button onClick={() => handleLinkClick("/special-education")} className="block px-4 py-2 hover:bg-orange-200 w-full text-left">
                    Special Education
                  </button>
                  <button onClick={() => handleLinkClick("/psychological-counselling")} className="block px-4 py-2 hover:bg-orange-200 w-full text-left">
                    Parent & Child Counselling
                  </button>
                  <button onClick={() => handleLinkClick("/service4")} className="block px-4 py-2 hover:bg-orange-200 w-full text-left">
                    Behavioural Therapy
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => handleLinkClick("/contact")} className="relative group">
              Contact Us
            </button>
          </div>
        </div>

        {/* ✅ Mobile Navbar */}
        <div className="lg:hidden flex justify-between items-center px-4">
          <img src={img1} alt="Logo" className="h-[60px]" />
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* ✅ Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 w-[250px] h-full bg-white z-20 shadow-lg transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col text-black text-lg p-4">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <button onClick={() => handleLinkClick("/")} className="px-4 py-2 hover:bg-orange-100">
              Home
            </button>

            {/* ✅ Services Dropdown in Mobile */}
            <div className="relative">
              <button onClick={toggleServicesDropdown} className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-orange-100">
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isServicesDropdownOpen ? "rotate-180" : ""
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
                  <button onClick={() => handleLinkClick("/speech-therapy")} className="block px-4 py-2 hover:bg-orange-100">
                    Speech Therapy
                  </button>
                  <button onClick={() => handleLinkClick("/occupational-therapy")} className="block px-4 py-2 hover:bg-orange-100">
                    Occupational Therapy
                  </button>
                  <button onClick={() => handleLinkClick("/special-education")} className="block px-4 py-2 hover:bg-orange-100">
                    Special Education
                  </button>
                  <button onClick={() => handleLinkClick("/psychological-counselling")} className="block px-4 py-2 hover:bg-orange-100">
                    Parent & Child Counselling
                  </button>
                  <button onClick={() => handleLinkClick("/service4")} className="block px-4 py-2 hover:bg-orange-100">
                    Behavioural Therapy
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
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