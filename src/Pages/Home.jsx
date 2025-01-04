import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ImageText from "./ImageText";
import { LocationData } from "./LocationData";
import { Testimonials } from "./Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
//import images
import img3 from "../assets/Grouphero.svg";
import img4 from "../assets/cloudHero.webp";
import img5 from "../assets/wave.svg";
import img6 from "../assets/banner21.webp";
import img7 from "../assets/banner23.svg";
import img8 from "../assets/professionals1.webp";

import img12 from "../assets/timeline.svg";
import img13 from "../assets/timeline1.svg";
import img14 from "../assets/timeline2.svg";
import img15 from "../assets/timeline3.svg";
import img16 from "../assets/timeline4.svg";
import img17 from "../assets/timeline5.svg";
import img18 from "../assets/timeline_mobile.webp";

// Correct module imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import WhatSection from "./WhatSection";

function Home() {
  const [formData, setFormData] = useState({
    parentName: "",
    phoneNumber: "",
    location: "",
    serviceRequest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { parentName, phoneNumber, location, serviceRequest } = formData;

    // Validate form data
    if (!parentName || !phoneNumber || !location || !serviceRequest) {
      alert("Please fill out all fields.");
      return;
    }

    // Format message for WhatsApp
    const message = `Hello,%0A
      Parent Name: ${encodeURIComponent(parentName)}%0A
      Phone Number: ${encodeURIComponent(phoneNumber)}%0A
      Location: ${encodeURIComponent(location)}%0A
      Service Request: ${encodeURIComponent(serviceRequest)}`;

    // Redirect to WhatsApp chat
    const whatsappUrl = `https://wa.me/+918920563009?text=${message}`;
    window.location.href = whatsappUrl;
  };

  return (
    <>
      <div className="">
        <Navbar />
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
                <form className="" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="parentName"
                      placeholder="Parent Name"
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                      value={formData.parentName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      name="location"
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                      value={formData.location}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Location
                      </option>
                      <option value="city1">City 1</option>
                      <option value="city2">City 2</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <select
                      name="serviceRequest"
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                      value={formData.serviceRequest}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Service Request
                      </option>
                      <option value="service1">Service 1</option>
                      <option value="service2">Service 2</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ef833a] text-white font-semibold py-2 lg:py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                  >
                    Submit
                  </button>
                </form>
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
            Contact our Centers:
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
          <ImageText />
        </div>
      </div>

      <div className="bg-[#fcf6de] pb-20">
        <WhatSection />
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
          <p className="text-[#2f2f2f] pt-5 text-center w-full ">
            Why K7 THERAPIES
          </p>
        </div>
        {/* boxes */}
        <div className="flex flex-col lg:flex-row justify-center gap-y-6 mt-10 lg:mt-32 ">
          {/* box 1 */}
          <div className="lg:w-[600px] h-auto lg:h-[490px] md:h-[150px] shadow-xl shadow-[#e3e3e3] rounded-xl bg-[#39225a] text-white mx-auto">
            <div className="flex flex-col items-center justify-center max-sm:flex-col">
              <div className="max-sm:flex max-md:flex max-md:justify-normal max-sm:justify-normal  md:text-wrap ">
                <img
                  src={img8}
                  alt=""
                  className="lg:w-[150px] lg:h-[150px] md:h-[100px] max-sm:w-32 mx-2 lg:mx-10 my-5"
                />
                <div>
                  <p className="text-sm lg:text-md md:text-balance text-start mt-5">
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
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={img7} alt="" className=" lg:ml-2  " />
      </div>
      <div className="bg-[#fcf6de]">
        <p className="text-[#ef833a] text-center pt-20 text-6xl font-bold ">
          About K7 Therapies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:text-xl text-center pt-10 px-5">
          {/* Our Founder Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Founder</h3>
            <p className="text-white">
              Dr. Kirti Thukral is a renowned occupational therapist with a
              master's degree in pediatrics. Her love and dedication for
              children have helped many special needs children shape their
              future and live independent and fruitful lives.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-[#39225a]">
              K7 Therapies is fully dedicated to provide pediatric therapy
              services for children dealing with physical, neurological,
              developmental and mental health issues.
            </p>
            <p className="text-[#39225a]">
              Our team if qualified therapists who are at par in their respective fields, work dedicatedly with the mission of making each child independent and perform better in their daily life.
            </p>
            <p className="text-[#39225a]">
              We focus on over all health of pur children and believe to bring back the child to their daily life.
            </p>
          </div>

          {/* Our Vision Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-[#39225a]">
              K7 THERAPIES strives to be an excellent service provider, giving therapies online globally and offline sessions at our well equipped pediatric therapy set up.
            </p>
            <p className="text-[#39225a]">
              Our multidicipinary team has expertise in their respective fields and offer comitted and dedicated services for our holistic wellness of-[#39225a]
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
