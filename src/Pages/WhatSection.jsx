import React from "react";
import img01 from "../assets/EI.jpg";
import img02 from "../assets/SR.jpg";
import img03 from "../assets/Group.jpg";
import img04 from "../assets/LnC.jpg";

export default function WhatSection() {
  return (
    <div>
      <p className="text-center text-3xl pt-10 font-bold">
        Our Intervention programs
      </p>

      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center">
        {/* Card 1 */}
        <div className="relative group w-full max-w-[350px] h-[300px] rounded-lg overflow-hidden cursor-pointer mx-auto">
          <img
            src={img01}
            alt="Therapy Image 1"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center text-white p-4 transition duration-500 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">
              Early Intervention Program
            </h3>
            <p className="text-sm">
              Early Intervention provides crucial support during the most
              formative years, helping children build essential skills in motor
              function, sensory processing and daily activities.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group w-full max-w-[350px] h-[300px] rounded-lg overflow-hidden cursor-pointer mx-auto">
          <img
            src={img02}
            alt="Therapy Image 2"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center text-white p-4 transition duration-500 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">
              School Readiness Program
            </h3>
            <p className="text-sm">
              It focuses on preparing children for the demands of the classroom
              environment by working in developing fine motor skills, attention,
              social interactions and self-regulation to ensure each child can
              participate fully and confidently in school activities.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group w-full max-w-[350px] h-[300px] rounded-lg overflow-hidden cursor-pointer mx-auto">
          <img
            src={img03}
            alt="Therapy Image 3"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center text-white p-4 transition duration-500 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">Group Therapy Program</h3>
            <p className="text-sm">
              It involves working with multiple children in a group setting to
              achieve therapeutic goals. The program emphasizes on a social
              interaction, peer learning & cooperation activities.It can help
              children develop communication skills, problem solving abilities &
              emotional regulation in a controlled & supportive environment.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative group w-full max-w-[350px] h-[300px] rounded-lg overflow-hidden cursor-pointer mx-auto">
          <img
            src={img04}
            alt="Therapy Image 4"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center text-white p-4 transition duration-500 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">
              Language & Communication Program
            </h3>
            <p className="text-sm">
              Effective communication enables children to express their needs,
              emotions and ideas, fostering meaningful relationships. Challenges
              in this area can impact social participation and emotional
              expression, thus effective language and communication therapy is
              essential to support the child in developing these skills for
              improved daily functioning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
