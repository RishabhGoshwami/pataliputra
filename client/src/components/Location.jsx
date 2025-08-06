import React from "react";

const Location = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Location Advantage
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side: Google Map */}
        <div className="w-full md:w-1/2">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.550271292842!2d77.506766!3d28.432094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1afd0aa1623%3A0x77acbdd936564c29!2sChi%20V%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201312!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-md"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Side: Info Text */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            Experience Island Living Along The Expressway.
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-lg">
            <li>Amity University - Sector 125 (30 Min)</li>
            <li>Shiv Nadar School - Sector 168 (20 Minute)</li>
            <li>Fortis Hospital - G.Noida (5 Minute)</li>
            <li>Metro Station - Sector 146 (10 Minute)</li>
            <li>Mall Of India - Sector 18 (25 Minute)</li>
            <li>PVR Multiplexes - G.Noida (10 Minute)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;
