import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const links = [
  {
    icon: FaGithub,
    label: "GitHub",
    url: "https://github.com/Nakib64",
    color: "hover:text-black",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "www.linkedin.com/in/nafiz64",
    color: "hover:text-blue-700",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    url: "https://www.facebook.com/nafizuddowla.nokib",
    color: "hover:text-blue-600",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    url: "nafiz2282@gmail.com",
    color: "hover:text-red-500",
  },
];

const SocialLinks = () => {
  return (
    <section
      id="social"
      className="py-16 px-6 md:px-20 text-center bg-white"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
      <p className="text-gray-500 mb-10">Find me on these platforms</p>

      <div className="flex justify-center flex-wrap gap-6">
        {links.map(({ icon: Icon, label, url, color }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-gray-600 hover:scale-105 transition-all duration-300 ${color}`}
          >
            <Icon className="text-2xl" />
            <span className="text-base font-medium">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
