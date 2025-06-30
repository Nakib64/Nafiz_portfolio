import React from "react";
import { FaInstagram, FaDribbble, FaGithub } from "react-icons/fa";
import profile from '../../assets/profile.JPG'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-between  md:px-16 md:py-20 gap-5">
      <div className="mt-10 md:mt-0" >
        <img
          src={profile}
          alt="Profile"
          className="w-60 md:w-100  object-cover rounded-full border-4 border-gray-200 shadow-lg"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-6xl">Hi! I'am</h1>
        <h1 className="font-semibold text-xl md:text-5xl">Nafiz Uddowla Nakib,</h1>
        <h2 className="opacity-65 md:text-3xl"> a frontend-focused Mern-stack Developer</h2>

      </div>
    </section>
  );
};

export default Hero;
