// components/ServicesList.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import ST from "../assets/ST.jpg";
import OT from "../assets/OT.jpg";
import PC from "../assets/PC.jpg";
import SE from "../assets/SE.jpg";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

// Services Data
const services = [
  {
    id: 1,
    image: ST,
    title: "Speech Therapy",
    description:
      "Speech therapy focuses on improving communication, language skills, and swallowing functions.",
    link: "/speech-therapy",
  },
  {
    id: 2,
    image: OT,
    title: "Occupational Therapy",
    description:
      "Pediatric occupational therapy engages children in therapeutic activities to improve daily life awareness.",
    link: "/occupational-therapy",
  },
  {
    id: 3,
    image: PC,
    title: "Psychological Counselling",
    description:
      "Psychological counselling helps children develop coping strategies, manage anxiety, and improve emotional regulation.",
    link: "/psychological-counselling",
  },
  {
    id: 4,
    image: SE,
    title: "Special Education",
    description:
      "Special education ensures students with disabilities have equal access to education and opportunities.",
    link: "/special-education",
  },
];

export default function ServicesList() {
  return (
    <>
    <div className="bg-[#9949ba]  py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Services
      </h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
        </>
  );
}
