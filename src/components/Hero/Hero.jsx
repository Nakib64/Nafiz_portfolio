import React from "react";
import { FaInstagram, FaDribbble, FaGithub } from "react-icons/fa";
import profile from '../../assets/profile.JPG'

const Hero = () => {
  return (
    <section className="flex flex-col md:mt-20 md:flex-row-reverse items-center justify-between ">
      <div className="mt-10 md:mt-0" >
        <img
          src={profile}
          alt="Profile"
          className="w-60 md:w-100  object-cover rounded-full border-4 border-gray-200 shadow-lg"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-6xl">Hi! I'am</h1>
        <h1 className="font-semibold text-xl md:text-5xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Nafiz Uddowla Nakib,</h1>
        <h2 className="opacity-65 md:text-3xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"> a Frontend-Focused Mern-stack Developer</h2>

      </div>
    </section>
  );
};

export default Hero;
