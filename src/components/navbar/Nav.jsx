import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "qualification", to: "qualification" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        <h1 className="text-xl font-bold text-gray-800">MyPortfolio</h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 bg-white">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
