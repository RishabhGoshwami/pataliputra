// FloatingContact.jsx
import React from "react";
import { PhoneCall } from "lucide-react";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* WhatsApp button using official WhatsApp SVG (Wikimedia Commons) */}
      <a
        href="https://wa.me/919876543210" // <-- अपना नंबर बदलें (country code सहित)
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="relative bg-white p-3 rounded-full shadow-2xl transition-transform duration-200 transform hover:scale-110"
      >
        {/* Official WhatsApp SVG (hosted on Wikimedia) */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6"
          loading="lazy"
        />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210" // <-- अपना नंबर बदलें
        className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Call Now"
      >
        <PhoneCall size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
