// src/components/Overview.jsx
import React, { useState } from 'react';
import bgImage from '../assets/overview.jpg';
import BrochureModal from './BrochureModal';

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={bgImage}
            alt="Overview"
            className="w-full h-full object-cover"
          />
          {/* Optional dark overlay for better text contrast */}
          <div className="absolute inset-0"></div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 bg-black bg-opacity-90 text-white flex items-center px-4 sm:px-6 py-8 sm:py-10">
          <div className="space-y-5 sm:space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              Overview
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              <strong>Welcome To Patliputra Group</strong><br />
              At Sec-Chi 5 Yamuna Expressway G. Noida<br />
              Indulge in a new era of opulent living at Residences at Patliputra Signature Park, where lavishness and coziness fuse effortlessly...
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              <strong>Luxury Studio Apartments:</strong> Welcome to the exquisite world of commercial luxury Studio Apartments in Greater Noida...
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              With a pioneering spirit in real estate, our projects set a new standard for excellence...
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              <strong>Location Advantage of Patliputra Sector chi 5:</strong><br />
              Experience the epitome of luxury living at Sector Chi 5, nestled along the prestigious Yamuna Expressway...
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition-all duration-300"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <BrochureModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default Overview;
