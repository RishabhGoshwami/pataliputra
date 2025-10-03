import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Patliputra.png"; // assets folder ka path adjust karo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Patliputra Logo" className="h-10 w-auto" />
        </a>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><a href="#hero">Home</a></li>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#price-list">Price List</a></li>
          <li><a href="#amenities">Amenities</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#builder">About Builder</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white font-medium text-gray-700">
          <li><a href="#hero">Home</a></li>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#price-list">Price List</a></li>
          <li><a href="#amenities">Amenities</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#about-builder">About Builder</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
