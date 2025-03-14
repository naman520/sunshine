import React from 'react'
import img9 from "../assets/instagram.svg";
import img10 from "../assets/phone.svg";
import img11 from "../assets/address.svg";
import img13 from "../assets/facebook.svg";
import img14 from "../assets/whatsapp.svg";

export default function Footer() {
  return (
    <>
        <div className="bg-[#39225a]">
        <p className="text-white text-center pt-20 text-6xl font-bold ">
          About K7 Therapies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:text-xl text-center pt-10 px-5 pb-10">
          {/* Our Founder Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#ef833a]">Our Founder</h3>
            <p className="text-white">
              Dr. Kirti Thukral is a renowned occupational therapist with a
              master's degree in pediatrics. Her love and dedication for
              children have helped many special needs children shape their
              future and live independent and fruitful lives.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#ef833a]">Our Mission</h3>
            <p className="text-white">
              K7 Therapies is fully dedicated to provide pediatric therapy
              services for children dealing with physical, neurological,
              developmental and mental health issues.
            </p>
            <p className="text-white">
              Our team if qualified therapists who are at par in their
              respective fields, work dedicatedly with the mission of making
              each child independent and perform better in their daily life.
            </p>
            <p className="text-white">
              We focus on over all health of pur children and believe to bring
              back the child to their daily life.
            </p>
          </div>

          {/* Our Vision Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#ef833a]">Our Vision</h3>
            <p className="text-white">
              K7 THERAPIES strives to be an excellent service provider, giving
              therapies online globally and offline sessions at our well
              equipped pediatric therapy set up.
            </p>
            <p className="text-white">
              Our multidicipinary team has expertise in their respective fields
              and offer comitted and dedicated services for our holistic
              wellness of our patients.
            </p>
          </div>
          <div className="text-center rounded-lg shadow-lg">
            {/* Heading */}
            <h2 className="text-2xl font-bold mb-6 text-[#ef833a]">
              Reach Out to Us
            </h2>

            {/* Instagram Link */}
            <div className="flex items-center text-white justify-center gap-2 mb-4">
              <img src={img9} alt="" className="h-[25px]" />
              <a
                href="https://www.instagram.com/k7_therapies/"
                target=""
                rel=""
                className="hover:underline"
              >
                Instagram
              </a>
            </div>
            {/* Facebook Link */}
            <div className="flex items-center text-white justify-center gap-2 mb-4">
              <img src={img13} alt="" className="h-[25px]" />
              <a
                href="https://www.facebook.com/K7Therapies?mibextid=ZbWKwL"
                target=""
                rel=""
                className="hover:underline"
              >
                Facebook
              </a>
            </div>

            {/* Phone Number */}
            <div className="flex items-center text-white justify-center gap-2 mb-4">
              <img src={img10} alt="Phone Icon" className="h-[25px]" />
              <p className="text-lg">+91 8802094818</p>
            </div>

            {/* Address */}
            <div className="flex items-center text-white justify-center gap-2">
              <img src={img11} alt="Location Icon" className="h-[25px]" />
              <p className="text-lg">I-1793 C.R. PARK, New Delhi-19</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#39225a] text-white">
        <p>&copy; 2025 K7 Therapies. All Rights Reserved.</p>
        <a href="https://naman-gupta.vercel.app/">
          Developed by <span className=" underline">Naman Gupta</span>
        </a>
      </div>
      <div className="flex justify-center md:bg-green-600 md:w-[200px] md:h-16 rounded-full items-center fixed-bottom-right">
        <a href="https://wa.link/mi358a">
          <img src={img14} alt="" />
        </a>
        <a href="https://wa.link/mi358a">
          <p className="max-sm:hidden text-white text-xl">Contact us</p>
        </a>
      </div>
    </>
  )
}
