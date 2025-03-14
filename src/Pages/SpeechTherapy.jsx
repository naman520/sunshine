import React from "react";
import speechTherapyImage from "../assets/ST.jpg"; // Make sure to use the correct image path

export default function SpeechTherapy() {
  return (
    <>
    <div className="bg-[#9949ba] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative">
            
          <img
            src={speechTherapyImage}
            alt="Speech Therapy"
            className="w-full h-full object-cover"
            />
          {/* Title Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Speech Therapy
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Speech therapy focuses on improving communication, language skills, and 
            swallowing functions. This therapy is crucial for individuals with speech 
            disorders, helping them express themselves clearly and confidently.
          </p>
        </div>
      </div>
    </div>
            </>
  );
}
