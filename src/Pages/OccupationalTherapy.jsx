import React from "react";
import occupationalTherapyImage from "../assets/OT.jpg"; // Correct the image path

export default function OccupationalTherapy() {
  return (
    <div className="bg-[#9949ba] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src={occupationalTherapyImage}
            alt="Occupational Therapy"
            className="w-full h-full object-cover"
          />
          {/* Title Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Occupational Therapy
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Pediatric occupational therapy engages children in therapeutic activities to improve daily life awareness and enhance their overall functional independence.
          </p>
        </div>
      </div>
    </div>
  );
}
