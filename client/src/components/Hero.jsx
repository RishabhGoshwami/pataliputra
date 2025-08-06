import React from "react";
import heroImg from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <section
      className="relative h-auto md:h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20 gap-10">
        {/* Left Section */}
        <div className="text-white max-w-xl w-full bg-black/60 p-6 sm:p-8 rounded-lg space-y-5 md:w-1/2">
          {/* Badge */}
          <span className="bg-red-600 text-xs px-3 py-1 rounded-full inline-block uppercase tracking-wide">
            New Launch
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
            Patliputra - Signature Park
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-200">
            1 & 2 BHK + Studio Apartment + Retail Shops
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>📍</span>
            <span>Sector CHI 5, Greater Noida</span>
          </div>

          {/* Pricing & Offers */}
          <div className="bg-gray-800/70 p-4 rounded-lg space-y-2">
            <p className="text-xl sm:text-2xl font-bold text-yellow-400">
              ₹ Starting at 45 Lakhs*
            </p>
            <p className="text-sm text-gray-300">
              Pre-Launch Discounts and Offers
            </p>
            <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
              <li>Pay More Save More - On Request</li>
              <li>Premium Priority Discount - On Request</li>
              <li>Retail Special Discount - On Request</li>
            </ul>
          </div>

          {/* Features */}
          <div className="text-sm text-gray-200 space-y-1">
            <p>🎹 Piano Theme Club House - Opera Style</p>
            <p>🏰 European Themed Regal Grandeur Residential</p>
            <p>🏊 Indoor Temperature-Controlled Swimming Pool</p>
            <p>🏢 Double Height Entrance Lobby</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-[40%] bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
            Have a Question?
          </h2>
          <p className="text-sm text-gray-600 mb-6">Enquire Now</p>

          <form
            action="mailto:adpropertyexpertrealtors@gmail.com"
            method="post"
            encType="text/plain"
            className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg space-y-4"
          >
            <h2 className="text-2xl font-bold text-center text-blue-700">
              Contact Us
            </h2>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Your Message"
                rows="4"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
