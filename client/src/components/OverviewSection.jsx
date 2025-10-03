import React, { useState } from 'react';
import { MapPin, Home, ShoppingBag, Map } from "lucide-react"; 
import bgImage from '../assets/overview.jpg';
import BrochureModal from './BrochureModal';

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Project Overview
          </h2>
          <div className="mt-2 w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
          
          {/* Left */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Intro */}
            <div className="relative bg-gray-50 p-6 rounded-xl shadow-xl border-t-4 border-blue-600 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
              <p className="text-lg leading-relaxed text-gray-700 relative z-10">
                <strong className="text-gray-900">Welcome To Patliputra Signature Park</strong>, 
                located at Sec-Chi 5, Yamuna Expressway, Greater Noida. Indulge in a new era of opulent living where 
                lavishness and coziness fuse effortlessly. We set a new standard for excellence, quality, and design.
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                Exclusive Features & Offerings
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
                  <Home className="text-blue-600 w-6 h-6" />
                  <p><span className="font-semibold">Residential Grandeur:</span> European Themed 1 & 2 BHK apartments.</p>
                </li>
                <li className="flex items-start gap-3 bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
                  <ShoppingBag className="text-blue-600 w-6 h-6" />
                  <p><span className="font-semibold">Commercial Luxury:</span> Luxury Studio Apartments & Retail Shops.</p>
                </li>
                <li className="flex items-start gap-3 bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
                  <Map className="text-blue-600 w-6 h-6" />
                  <p><span className="font-semibold">Prime Location:</span> Seamless connectivity via Yamuna Expressway.</p>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                Prime Location Advantage
              </h3>
              <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 shadow-md">
                <MapPin className="text-yellow-600 w-7 h-7 flex-shrink-0" />
                <p className="text-lg text-gray-800 font-medium">
                  Experience luxury living at <strong>Sector Chi 5</strong> with high growth potential & excellent infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[550px] overflow-hidden rounded-xl shadow-2xl group">
              <img
                src={bgImage}
                alt="Patliputra Signature Park Overview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-lg">
                Artist’s Impression
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-lg px-8 py-3 rounded-xl shadow-xl transition-all duration-300 animate-pulse"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download E-Brochure Now!
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <BrochureModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default Overview;
