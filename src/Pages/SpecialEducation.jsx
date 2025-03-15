import React from "react";
import specialEducationImage from "../assets/SE.jpg"; // Correct the image path

export default function SpecialEducation() {
  return (
    <div className="bg-[#9949ba] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white max-sm:ml-5 max-sm:mr-5 shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src={specialEducationImage}
            alt="Special Education"
            className="w-full h-full object-cover"
          />
          {/* Title Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Special Education
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Special education is designed to meet the unique needs of students
            with disabilities, ensuring they have equal access to education and
            opportunities. It involves individualized instruction, specialized
            support, and adaptations to curriculum, enabling students to learn
            and thrive in a way that suits their abilities. The goal is to
            empower them to reach their full potential both
            academically and socially.
          </p>
        </div>
      </div>
    </div>
  );
}
