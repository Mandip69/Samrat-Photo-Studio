import React, { useState } from "react";
import { Menu, X, Camera } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="text-yellow-400 w-8 h-8" />
            <h1 className="text-white text-2xl font-bold tracking-wide">
              Samrat Photo Studio
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Portfolio", "Services", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 font-medium"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="#book"
              className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-3 animate-fadeIn">
          {["Home", "Portfolio", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-300 hover:text-yellow-400 transition duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
            className="block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 transition duration-300 text-center"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
