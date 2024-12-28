import React from "react";
import img1 from "../assets/OT.jpg";

export default function ImageText() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="relative w-fit">
        {/* Image */}
        <img src={img1} alt="" className="h-[300px] object-cover" />

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="bg-black bg-opacity-50 text-white p-4 rounded max-w-full">
            <p className="text-xl font-semibold mb-2">Occupational Therapy</p>
            <p className="text-sm leading-5 break-words">
              Pediatric occupational therapy offers medical help to children up
              to 14 years of age by treating any pediatric condition. It
              engages the child and their mind in therapeutic activities,
              improving daily life awareness through approaches like sensory
              integration, oro-motor therapy, environmental modification,
              cognitive rehabilitation, and gait training.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-fit">
        {/* Image */}
        <img src={img1} alt="" className="h-[300px] object-cover" />

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="bg-black bg-opacity-50 text-white p-4 rounded max-w-full">
            <p className="text-xl font-semibold mb-2">Occupational Therapy</p>
            <p className="text-sm leading-5 break-words">
              Pediatric occupational therapy offers medical help to children up
              to 14 years of age by treating any pediatric condition. It
              engages the child and their mind in therapeutic activities,
              improving daily life awareness through approaches like sensory
              integration, oro-motor therapy, environmental modification,
              cognitive rehabilitation, and gait training.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-fit">
        {/* Image */}
        <img src={img1} alt="" className="h-[300px] object-cover" />

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="bg-black bg-opacity-50 text-white p-4 rounded max-w-full">
            <p className="text-xl font-semibold mb-2">Occupational Therapy</p>
            <p className="text-sm leading-5 break-words">
              Pediatric occupational therapy offers medical help to children up
              to 14 years of age by treating any pediatric condition. It
              engages the child and their mind in therapeutic activities,
              improving daily life awareness through approaches like sensory
              integration, oro-motor therapy, environmental modification,
              cognitive rehabilitation, and gait training.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-fit">
        {/* Image */}
        <img src={img1} alt="" className="h-[300px] object-cover" />

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="bg-black bg-opacity-50 text-white p-4 rounded max-w-full">
            <p className="text-xl font-semibold mb-2">Occupational Therapy</p>
            <p className="text-sm leading-5 break-words">
              Pediatric occupational therapy offers medical help to children up
              to 14 years of age by treating any pediatric condition. It
              engages the child and their mind in therapeutic activities,
              improving daily life awareness through approaches like sensory
              integration, oro-motor therapy, environmental modification,
              cognitive rehabilitation, and gait training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
