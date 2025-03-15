import React from "react";
import speechTherapyImage from "../assets/ST.jpg"; // Make sure to use the correct image path

export default function SpeechTherapy() {
  return (
    <>
      <div className="bg-[#9949ba] min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full max-sm:ml-5 max-sm:mr-5 bg-white shadow-lg rounded-lg overflow-hidden">
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
          <div className="p-6 md:text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Speech therapy is an essential aspect of occupational therapy,
              focusing on improving communication, language skills, and
              swallowing functions. It focuses on language, articulation, and
              swallowing . This integration allows children to work on both
              their communication abilities and other functional skills,
              enhancing their overall independence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
