import React from "react";
import psychologicalCounsellingImage from "../assets/PC.jpg"; // Correct the image path

export default function PsychologicalCounselling() {
  return (
    <div className="bg-[#9949ba] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white max-sm:ml-5 max-sm:mr-5 shadow-lg rounded-lg overflow-hidden">
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
        <div className="p-6 md:text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Psychological counseling is an important component of pediatric
            occupational therapy, addressing the emotional and behavioral needs
            of children. It helps children develop coping strategies, manage
            anxiety, and improve their emotional regulation, which supports
            their participation in daily activities. By addressing mental health
            alongside physical and cognitive skills, psychological counseling
            ensures a well-rounded approach to a child's development and
            overall well-being.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
