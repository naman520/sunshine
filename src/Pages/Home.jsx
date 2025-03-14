import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ImageText from "./ImageText";
import "./whychoose.css";
import { Testimonials } from "./Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "../Pages/external.css";
//import images
import img3 from "../assets/Grouphero.svg";
import img4 from "../assets/cloudHero.webp";
import img5 from "../assets/wave.svg";
import img6 from "../assets/banner21.webp";
import img7 from "../assets/banner23.svg";
import img12 from "../assets/whychoose.jpg";


// Correct module imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import WhatSection from "./WhatSection";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const [formData, setFormData] = useState({
    parentName: "",
    phoneNumber: "",
    location: "",
    serviceRequest: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace with your deployed Google Apps Script URL
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbypzFSpXNPNZR-IhWpF87N4cT5eG1GXMER8dwhFTuN3NdQh1odjExGFhR_kOFBEXtYquQ/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Create form data
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });
    formDataObj.append("timestamp", new Date().toISOString());

    try {
      // Use no-cors mode and form data instead of JSON
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataObj,
      });

      // Since we're using no-cors, we won't get a proper response
      // We'll assume success if no error is thrown
      setFormData({
        parentName: "",
        phoneNumber: "",
        location: "",
        serviceRequest: "",
      });
      setStatus({
        type: "success",
        message: "Thank you for your submission! We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }

    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="">
        <div className="relative  bg-[#9949ba] min-h-screen pt-10">
          <div className="container mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-between">
            <div className="text-white w-full md:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
                Unlock your child's potential and help them thrive!
              </h1>
              <p className="text-sm lg:text-md font-normal">
                We at K7 Therapies have started a chain of clinics to provide
                world-class child development services. We specialize in
                neurodevelopmental and behavioral disorders, especially Autism
                Spectrum, ADHD & Learning Disorders.
              </p>
            </div>

            <div className="relative z-10 w-full lg:w-1/3 flex justify-center">
              <div className="hidden lg:block absolute -translate-x-20 -translate-y-30 -z-10">
                <img src={img4} alt="" className="min-w-full" />
              </div>
              <div className="hidden lg:block absolute translate-x-[120px] translate-y-50 -z-10">
                <img src={img4} alt="" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 w-full max-w-md">
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
                  Book your first session.
                </h2>
                <p className="text-xs lg:text-sm text-gray-700 mb-1"></p>
                <form onSubmit={handleSubmit} className="">
                  <div className="mb-4">
                    <input
                      type="text"
                      name="parentName"
                      placeholder="Parent Name"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                    >
                      <option value="">Select Location</option>
                      <option value="delhi CR Park">CR Park, Delhi</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="serviceRequest"
                      placeholder="Service Request (optional)"
                      value={formData.serviceRequest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ef833a] text-white font-semibold py-2 lg:py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>

                {status.type === "success" && (
                  <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg">
                    {status.message}
                  </div>
                )}

                {status.type === "error" && (
                  <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg">
                    {status.message}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-auto"
            >
              <path
                fill="#eef8f9"
                d="M0,96L80,101.3C160,107,320,117,480,133.3C640,149,800,171,960,154.7C1120,139,1280,85,1360,58.7L1440,32V320H0Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="relative z-[10] lg:bg-[#eef8f9] -mt-20 md:mt-3 lg:-mt-52">
          <div className="container mx-auto px-4 lg:px-0">
            <img
              src={img3}
              alt=""
              className="w-full lg:translate-y-28 md:translate-y-4"
            />
          </div>
        </div>
      </div>
      <div className="pt-10 lg:pt-52">
        <div className="bg-[#fefcef]">
          <div className="text-2xl lg:text-3xl text-center font-semibold py-6 lg:py-10 text-[#2f2f2f]">
            Contact our Center:
          </div>
          <div className="text-center ">
            <p className="text-3xl font-semibold text-[#ef8d4e]">Delhi</p>
            <p className="text-xl font-semibold text-[#ef8d4e]">CR Park</p>
            <p className="text-md ">+91 8802094818</p>
          </div>
        </div>
      </div>
      <div className="bg-[#eef8f9] pt-10">{/* empty div */}</div>

      <div className=" relative bg-[#cfe7d7] lg:bg-transparent text-[#2f2f2f] pt-10 lg:pt-20 ">
        <p className="text-3xl lg:text-5xl  text-center font-bold">
          How can we help your child
        </p>
        <div className="pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.3, staggerChildren: 0.2 },
              },
            }}
          >
            <ImageText />
          </motion.div>
        </div>
      </div>

      <div className="bg-[#fcf6de] pb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <WhatSection />
        </motion.div>
      </div>

      <div className="bg-[#a0cfad] pt-10 lg:pt-28 h-[700px] lg:h-[900px]">
        <div className="text-center text-white lg:text-5xl text-2xl text-wrap lg:text-wrap font-semibold">
          Our Clients Talk About Their K7 Therapies Experience
        </div>
        <div className="pt-32">
          <div className="container mx-auto px-4">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {Testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="lg:pt-32">
                    <div className="pt-10 lg:pt-32 max-sm:text-sm max-md:text-sm text-md bg-[#efe9d1] text-center rounded-3xl sm:ml-[40px] sm:h-[290px] sm:w-[370px] md:ml-[150px] md:h-[320px] md:w-[450px] lg:ml-[100px] lg:h-[350px] lg:w-[1100px] md:break-words">
                      {item.content}
                      <div className="font-bold md:mt-4 max-sm:mt-4">
                        ~{item.name}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="bg-[#f7e59d] lg:bg-transparent ">
        <div className="relative text-center lg:pt-28 text-3xl lg:text-5xl font-bold">
          <img
            src={img5}
            alt=""
            className="absolute inset-0 -z-10 object-cover mt-[72px] min-h-screen hidden lg:block "
          />
          <img src={img6} alt="" className="absolute top-10 hidden lg:block " />
        </div>
        {/* boxes */}
        <div className="flip-card">
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front">
              <img src={img12} alt="Therapist" className="image" />
            </div>

            {/* Back Side */}
            <div className="flip-card-back">
              <ul>
                <li>We are a team of well qualified therapists</li>
                <li>1:1 child therapist ratio</li>
                <li>Pocket friendly therapy charges</li>
                <li>Monthly parent-therapist discussion session</li>
                <li>Emphasis on social skills development</li>
                <li>Parent can sit and watch their child's session</li>
                <li>Regular follow-up with the home plan</li>
                <li>Regular parent education session</li>
                <li>Child friendly environment</li>
                <li>We believe in evidence based practice</li>
                <li>Complete transparency with the parents</li>
              </ul>
            </div>
          </div>
        </div>
        <img src={img7} alt="" className=" lg:ml-2  " />
      </div>
      <Footer/>
    </>
  );
}

export default Home;
