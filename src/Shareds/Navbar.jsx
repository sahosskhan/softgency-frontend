import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/our-work" },
    { name: "Work Process", path: "/work-process" },
    { name: "Our Services", path: "/our-services" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Team", path: "/our-team" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className=" w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/logo.png"alt="Softgency Logo" className="h-44 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="relative text-black font-medium transition group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                to="/contact"
                className="relative px-6 py-2 rounded-lg font-medium border-2 border-red-600 bg-white text-red-600 overflow-hidden group"
              >
                {/* Hover Gradient Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-200 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                {/* Text Layer */}
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Contact Us
                </span>
              </Link>
            </div>

            {/* Mobile & Tablet Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} color="black" /> : <Menu size={28} color="black" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white px-4 pt-2 pb-4 space-y-2 animate-slideDown">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-black font-medium transition relative group"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="relative block text-center px-6 py-2 rounded-lg font-medium border-2 border-red-600 bg-white text-red-600 overflow-hidden group"
              onClick={() => setIsOpen(false)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-200 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Contact Us
              </span>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
