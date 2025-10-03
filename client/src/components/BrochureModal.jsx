// src/components/BrochureModal.jsx
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5'; // npm install react-icons

const BrochureModal = ({ onClose }) => {
  return (
    // Backdrop: More transparent with a darker overlay
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8"
      onClick={onClose} // Close modal when clicking outside
    >
      {/* Modal Content Container: Glassmorphism effect */}
      <div 
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 sm:p-8 md:p-10 w-full max-w-md shadow-2xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
          aria-label="Close modal"
        >
          <IoCloseOutline className="h-7 w-7" />
        </button>

        <h2 className="text-3xl font-extrabold mb-2 text-white text-center drop-shadow-md">
          Download Brochure
        </h2>
        <p className="text-gray-300 text-center mb-6 text-base">
          Fill in your details to get the complete E-Brochure.
        </p>

        <form className="space-y-5">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="Your Full Name *"
              required
              className="w-full px-5 py-3 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition-all duration-200"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Your Email Address *"
              required
              className="w-full px-5 py-3 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition-all duration-200"
            />
          </div>

          {/* Phone Input */}
          <div>
            <input
              type="tel"
              placeholder="Your Phone Number *"
              required
              className="w-full px-5 py-3 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition-all duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-500/70 mt-6"
          >
            Get My Brochure
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrochureModal;