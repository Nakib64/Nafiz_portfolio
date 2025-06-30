import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show button only after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-6 mt-20 relative">
      <div className="container mx-auto px-6 flex flex-col items-center gap-2">
        {/* Name or Logo */}
        <h2 className="text-xl font-bold tracking-widest">Nafiz U.</h2>

        {/* Bottom Text */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
