import React from "react";
import { FaBriefcase, FaCheckSquare, FaHeadset, FaDownload } from "react-icons/fa";
import profilePic from "../../assets/profile.JPG"; // replace with your image

const About = () => {
  return (
    <section id="about" className="py-16 px-6  bg-white text-center md:text-left">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-gray-500 mb-12">My introduction</p>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0 hidden md:block">
          <img
            src={profilePic}
            alt="About"
            className="w-72 h-72 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Info & Content */}
        <div className="flex flex-col gap-6 max-w-xl">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            <div className="p-4 border rounded-xl shadow-sm">
              <FaBriefcase className="text-2xl mx-auto mb-2 text-gray-600" />
              <h3 className="font-semibold">Experience</h3>
              <p className="text-sm text-gray-500">1.5+ Years</p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <FaCheckSquare className="text-2xl mx-auto mb-2 text-gray-600" />
              <h3 className="font-semibold">Completed</h3>
              <p className="text-sm text-gray-500">18+ Projects</p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <FaHeadset className="text-2xl mx-auto mb-2 text-gray-600" />
              <h3 className="font-semibold">Support</h3>
              <p className="text-sm text-gray-500">Online 24/7</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            Mern-stack developer, I create functional, super responsive web pages with UI / UX user interface.
            I have years of experience and many clients are happy with the projects carried out.
          </p>

          {/* Download CV Button */}
          <a
            href="/your_cv.pdf" // Replace with real file path
            download
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg w-max hover:bg-gray-800 transition"
          >
            Download CV <FaDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
