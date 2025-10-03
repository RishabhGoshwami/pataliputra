import React from "react";
import { MapPin } from "lucide-react"; // location icon

const Location = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-14 px-6 md:px-16">
      
      {/* Section Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-blue-700 relative">
        Location Advantage
        <span className="block w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>
      </h2>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        
        {/* Left Side: Google Map */}
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.550271292842!2d77.506766!3d28.432094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1afd0aa1623%3A0x77acbdd936564c29!2sChi%20V%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201312!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
              width="100%"
              height="420"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[420px]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Info Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            Experience Island Living Along The Expressway
          </h3>
          <ul className="space-y-4">
            {[
              "Amity University - Sector 125 (30 Min)",
              "Shiv Nadar School - Sector 168 (20 Min)",
              "Fortis Hospital - Greater Noida (5 Min)",
              "Metro Station - Sector 146 (10 Min)",
              "Mall Of India - Sector 18 (25 Min)",
              "PVR Multiplexes - Greater Noida (10 Min)",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-lg text-gray-700 hover:text-blue-600 transition-colors"
              >
                <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={22} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Location;
