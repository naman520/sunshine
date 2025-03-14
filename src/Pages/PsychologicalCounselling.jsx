import React from "react";
import psychologicalCounsellingImage from "../assets/PC.jpg"; // Correct the image path

export default function PsychologicalCounselling() {
  return (
    <div className="bg-[#9949ba] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src={psychologicalCounsellingImage}
            alt="Psychological Counselling"
            className="w-full h-full object-cover"
          />
          {/* Title Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Psychological Counselling
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Psychological counselling helps children develop coping strategies, manage anxiety, and improve emotional regulation for better participation in daily activities.
          </p>
        </div>
      </div>
    </div>
  );
}
