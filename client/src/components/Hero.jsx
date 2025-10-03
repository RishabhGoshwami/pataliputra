import React from "react";
import heroImg from "../assets/hero.jpeg";

const Hero = () => {
  return (
    // Main Section: Full height, full width, and background image
    <section
      className="relative w-full min-h-screen flex items-center bg-cover bg-center py-16 md:py-0"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Content Container: Centered, responsive padding */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-10">
        
        {/* Project Title and Intro (Top Section) */}
        <div className="text-center text-white max-w-4xl mx-auto space-y-4 pt-10 pb-4">
            <span className="bg-red-600 text-sm font-semibold px-4 py-1.5 rounded-full inline-block uppercase tracking-wider shadow-lg">
                🔥 New Launch
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
                Patliputra - Signature Park
            </h1>
            <p className="text-xl text-gray-200 font-medium">
                European Grandeur Living in Greater Noida
            </p>
        </div>

        {/* Modular Cards Container: Left for details, Right for form */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8 pb-10">
            
            {/* Left Column: Details Cards (Project Snapshot + Features) */}
            <div className="w-full lg:w-[55%] flex flex-col gap-8">
                
                {/* --- CARD 1: Project Snapshot and Pricing --- */}
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl border border-white/20 space-y-5">
                    
                    <h2 className="text-3xl font-bold text-white border-b border-gray-600 pb-2">
                        Project Overview
                    </h2>

                    <div className="space-y-2">
                        <p className="text-lg text-gray-200">
                            **Unit Types:** 1 & 2 BHK + Studio Apartment + Retail Shops
                        </p>
                        <div className="flex items-center gap-3 text-lg text-yellow-300 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>**Location:** Sector CHI 5, Greater Noida</span>
                        </div>
                    </div>
                    
                    {/* Pricing Highlight */}
                    <div className="bg-gray-800/70 p-4 rounded-lg space-y-2 border-l-4 border-yellow-400">
                        <p className="text-2xl font-extrabold text-yellow-400">
                            ₹ Starting at 45 Lakhs*
                        </p>
                        <p className="text-sm text-gray-300">
                            Pre-Launch Discounts & Special Offers Available. Enquire to know more!
                        </p>
                    </div>

                </div>

                {/* --- CARD 2: Key Features --- */}
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl border border-white/20 space-y-4">
                    <h2 className="text-3xl font-bold text-white border-b border-gray-600 pb-2">
                        Top Amenities
                    </h2>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200">
                        <li className="flex items-center gap-3">
                            <span className="text-yellow-400 text-xl">🎹</span> 
                            <span>Piano Theme Club House - Opera Style</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-yellow-400 text-xl">🏰</span> 
                            <span>European Themed Residential Grandeur</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-yellow-400 text-xl">🏊</span> 
                            <span>Indoor Temperature-Controlled Pool</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-yellow-400 text-xl">🏢</span> 
                            <span>Double Height Entrance Lobby</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* --- Right Column: Contact Form Card --- */}
            <div className="w-full lg:w-[45%] bg-white p-6 sm:p-8 rounded-xl shadow-2xl sticky top-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-1 text-center">
                    Get Price & Details
                </h2>
                <p className="text-md text-gray-600 mb-6 text-center">Your dream home is just a click away!</p>

                <form
                    action="mailto:adpropertyexpertrealtors@gmail.com"
                    method="post"
                    encType="text/plain"
                    className="space-y-4"
                >
                    {/* Name Input */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Full Name *"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* Phone Input */}
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Phone Number *"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email Address *"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <textarea
                            name="message"
                            placeholder="I'm interested in..."
                            rows="2"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition duration-200 transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-500/50"
                        >
                            <span className="flex items-center justify-center gap-2">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                
                                Send Enquiry
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;