import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">Signature Park</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
         
          <li>
            <a href="#price-list">Price List</a>
          </li>
          <li>
            <a href="#amenities">Amenities</a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white font-medium text-gray-700">
          
          <li>
            <a href="#price-list">Price List</a>
          </li>
          <li>
            <a href="#amenities">Amenities</a>
          </li>
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
