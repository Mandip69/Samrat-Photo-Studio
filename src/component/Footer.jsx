import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Studio Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            Samrat Photo Studio
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Capturing your best moments with creativity and passion. 
            Professional photography services for weddings, events, portraits, and more.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center space-x-2">
              <MapPin size={18} className="text-yellow-400" />
              <span>Samakhusi, Kathmandu, Nepal</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone size={18} className="text-yellow-400" />
              <span>+977-9800000000</span>
            </p>
            <p className="flex items-center space-x-2">
              <Mail size={18} className="text-yellow-400" />
              <span>info@samratstudio.com</span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {["Home", "Portfolio", "Services", "About", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-yellow-400 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Samrat Photo Studio. All rights reserved.
      </div>
    </footer>
  );
}
