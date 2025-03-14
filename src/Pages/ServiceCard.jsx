// components/ServiceCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <>
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      {/* Service Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

      {/* Overlay with Link */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="text-sm text-center mt-2">{service.description}</p>
        <Link
          to={service.link}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
          Learn More
        </Link>
      </div>
    </div>
            </>
  );
}
