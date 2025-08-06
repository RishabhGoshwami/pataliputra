// FloatingContact.jsx
import React from "react";
import { PhoneCall, MessageSquareText } from "lucide-react";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210" // <-- Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
      >
        <MessageSquareText size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210" // <-- Replace with your number
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
      >
        <PhoneCall size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
