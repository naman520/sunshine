import React from "react";
import Navbar from "../components/Navbar";
import { LocationData } from "./LocationData";
import { Swiper, SwiperSlide } from "swiper/react";
//import images
import img3 from "../assets/Grouphero.svg";
import img4 from "../assets/cloudHero.webp";
import img5 from "../assets/wave.svg";
import img6 from "../assets/banner21.webp";
import img7 from "../assets/banner23.svg";
import img8 from "../assets/professionals1.webp";
import img9 from "../assets/wavegreen.svg";
import img10 from "../assets/helpsectionaulaad.svg";
// Correct module imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="relative bg-[#ef833a] min-h-screen pt-10">
          <div className="container mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-between">
            <div className="text-white w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
                Unlock your child's potential and help them thrive!
              </h1>
              <p className="text-sm lg:text-md font-normal">
                We at Sunshine by LISSUN have started a chain of clinics to
                provide world-class child development services. We specialize in
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
                  Book your first discounted session.
                </h2>
                <p className="text-xs lg:text-sm text-gray-700 mb-1">
                  Avail a discount on your first session to try out our
                  services.
                </p>
                <form className="">
                  <div className="mb-4">
                    <input
                      type="text"
                      name="parentName"
                      placeholder="Parent Name"
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      name="location"
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-orange-300 text-sm lg:text-base"
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
        <div className="relative z-[10] lg:bg-[#eef8f9] -mt-20 lg:-mt-52">
          <div className="container mx-auto px-4 lg:px-0">
            <img src={img3} alt="" className="w-full lg:translate-y-28" />
          </div>
        </div>
      </div>
      <div className="pt-10 lg:pt-52">
        <div className="bg-[#fefcef]">
          <div className="text-2xl lg:text-3xl text-center font-semibold py-6 lg:py-10 text-[#2f2f2f]">
            Contact our Centers:
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {LocationData && LocationData.length > 0 ? (
              LocationData.map((loc) => (
                <SwiperSlide key={loc.city}>
                  <div className="mb-16">
                    <div className="flex flex-col justify-center items-center h-full">
                      <a
                        href={`/${loc.city}`}
                        className="text-xl lg:text-2xl font-semibold text-[#ef833a] mb-2"
                      >
                        {loc.city}
                      </a>
                      <p className="text-lg lg:text-xl font-semibold text-gray-700 mb-2 text-center">
                        ({loc.area})
                      </p>
                      <p className="text-xs lg:text-sm text-gray-600 text-center">
                        {loc.phone}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No locations available
              </p>
            )}
          </Swiper>
        </div>
      </div>
      <div className="bg-[#eef8f9] pt-10">{/* empty div */}</div>
      <div className="bg-[#f7e59d] lg:bg-transparent ">
        <div className="relative text-center lg:pt-28 text-3xl lg:text-5xl font-bold">
          <img
            src={img5}
            alt=""
            className="absolute inset-0 -z-10 object-cover mt-[72px] min-h-screen hidden lg:block "
          />
          <img src={img6} alt="" className="absolute top-10 hidden lg:block " />
          <p className="text-[#2f2f2f] pt-5 text-center w-full ">
            Our team of practitioners at Sunshine
          </p>
        </div>
        {/* boxes */}
        <div className="flex flex-col lg:flex-row justify-center gap-y-6 mt-10 lg:mt-32 ">
          <div className="  lg:w-72 h-auto lg:h-[550px] shadow-xl shadow-[#e3e3e3] rounded-xl bg-white mx-auto">
            <div className="flex flex-col items-center justify-center max-sm:flex-col">
              <div className="max-sm:flex max-sm:justify-normal  md:text-wrap">
                <img
                  src={img8}
                  alt=""
                  className="lg:w-[200px] lg:h-[200px] max-sm:w-32 mx-2 lg:mx-10 my-5"
                />
                <div>
                  <p className="text-lg font-bold lg:text-2xl mt-7 text-center">
                    Child Psychologists
                  </p>
                  <p className="text-sm lg:text-lg text-center mt-5">
                    Helping kids navigate emotions, building resilience for
                    life's journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="  lg:w-72 h-auto lg:h-[550px] shadow-xl shadow-[#e3e3e3] rounded-xl bg-white mx-auto">
            <div className="flex flex-col items-center justify-center max-sm:flex-col">
              <div className="max-sm:flex max-sm:justify-normal  md:text-wrap">
                <img
                  src={img8}
                  alt=""
                  className="lg:w-[200px] lg:h-[200px] max-sm:w-32 mx-2 lg:mx-10 my-5"
                />
                <div>
                  <p className="text-lg font-bold lg:text-2xl mt-7 text-center">
                    Child Psychologists
                  </p>
                  <p className="text-sm lg:text-lg text-center mt-5">
                    Helping kids navigate emotions, building resilience for
                    life's journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-72 h-auto lg:h-[550px] shadow-xl shadow-[#e3e3e3] rounded-xl bg-white mx-auto">
            <div className="flex flex-col items-center justify-center max-sm:flex-col">
              <div className="max-sm:flex max-sm:justify-normal  md:text-wrap">
                <img
                  src={img8}
                  alt=""
                  className="lg:w-[200px] lg:h-[200px] max-sm:w-32 mx-2 lg:mx-10 my-5"
                />
                <div>
                  <p className="text-lg font-bold lg:text-2xl mt-7 text-center">
                    Child Psychologists
                  </p>
                  <p className="text-sm lg:text-lg text-center mt-5">
                    Helping kids navigate emotions, building resilience for
                    life's journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-72 h-auto lg:h-[550px] shadow-xl shadow-[#e3e3e3] rounded-xl bg-white mx-auto">
            <div className="flex flex-col items-center justify-center max-sm:flex-col">
              <div className="max-sm:flex max-sm:justify-normal  md:text-wrap">
                <img
                  src={img8}
                  alt=""
                  className="lg:w-[200px] lg:h-[200px] max-sm:w-32 mx-2 lg:mx-10 my-5"
                />
                <div>
                  <p className="text-lg font-bold lg:text-2xl mt-7 text-center">
                    Child Psychologists
                  </p>
                  <p className="text-sm lg:text-lg text-center mt-5">
                    Helping kids navigate emotions, building resilience for
                    life's journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-72 h-auto lg:h-[550px] shadow-xl shadow-[#e3e3e3] rounded-xl bg-white mx-auto">
            <div className="flex flex-col items-center justify-center max-sm:flex-col">
              <div className="max-sm:flex max-sm:justify-normal  md:text-wrap">
                <img
                  src={img8}
                  alt=""
                  className="lg:w-[200px] lg:h-[200px] max-sm:w-32 mx-2 lg:mx-10 my-5"
                />
                <div>
                  <p className="text-lg font-bold lg:text-2xl mt-7 text-center">
                    Child Psychologists
                  </p>
                  <p className="text-sm lg:text-lg text-center mt-5">
                    Helping kids navigate emotions, building resilience for
                    life's journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={img7} alt="" className=" lg:ml-36  " />
      </div>
      <div className=" relative bg-[#cfe7d7] lg:bg-transparent text-[#2f2f2f] pt-10 lg:pt-20 ">
        <img
          src={img9}
          alt=""
          className="absolute z-10 min-h-screen hidden lg:block"
        />
        <p className="text-3xl lg:text-5xl text-center font-bold">
          How can we help your child
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-28 gap-6 lg:max-w-5xl mx-auto gap-x-80">
          <div className="text-xl z-10 shadow-xl h-20 lg:h-32 lg:w-[600px]  pt-3 lg:pt-10 lg:pl-10 pl-4 shadow-[#e3e3e3] rounded-3xl bg-white  ">
            <p>IQ Assessments</p>
            <p className="text-sm">
              Unveiling cognitive potential, a key to tailored growth
              strategies.
            </p>
          </div>
          <div className="text-xl z-10 shadow-xl h-20 lg:h-32 lg:w-[600px]  pt-3 lg:pt-10 lg:pl-10 pl-4 shadow-[#e3e3e3] rounded-3xl bg-white  ">
            <p>IQ Assessments</p>
            <p className="text-sm">
              Unveiling cognitive potential, a key to tailored growth
              strategies.
            </p>
          </div>
          <div className="text-xl z-10 shadow-xl h-20 lg:h-32 lg:w-[600px]  pt-3 lg:pt-10 lg:pl-10 pl-4 shadow-[#e3e3e3] rounded-3xl bg-white  ">
            <p>IQ Assessments</p>
            <p className="text-sm">
              Unveiling cognitive potential, a key to tailored growth
              strategies.
            </p>
          </div>
          <div className="text-xl z-10 shadow-xl h-20 lg:h-32 lg:w-[600px]  pt-3 lg:pt-10 lg:pl-10 pl-4 shadow-[#e3e3e3] rounded-3xl bg-white  ">
            <p>IQ Assessments</p>
            <p className="text-sm">
              Unveiling cognitive potential, a key to tailored growth
              strategies.
            </p>
          </div>
          <div className="text-xl z-10 shadow-xl h-20 lg:h-32 lg:w-[600px]  pt-3 lg:pt-10 lg:pl-10 pl-4 shadow-[#e3e3e3] rounded-3xl bg-white  ">
            <p>IQ Assessments</p>
            <p className="text-sm">
              Unveiling cognitive potential, a key to tailored growth
              strategies.
            </p>
          </div>
        </div>
        <div className=" pt-10 lg:ml-96 flex justify-center">
          <button className=" text-white w-40 z-10  h-10 lg:h-20 lg:w-64 rounded-xl bg-[#ef833a]">
            Book Assessment
          </button>
          <img
            src={img10}
            alt=""
            className="h-40 translate-x-20 z-10 inset-20 lg:h-auto lg:-translate-y-80 lg:translate-x-20"
          />
        </div>
      </div>
    </>
  );
}

export default Home;