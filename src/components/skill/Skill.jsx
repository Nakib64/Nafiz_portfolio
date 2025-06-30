import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiJsonwebtokens } from "react-icons/si";

const SkillItem = ({ icon: Icon, skill, level }) => (
  <div className="flex items-start gap-3 hover:text-green-600 transition-all duration-300">
    <Icon className="text-xl mt-1 text-gray-700" />
    <div>
      <p className="font-medium">{skill}</p>
      <p className="text-sm text-gray-500">{level}</p>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold">Skills</h2>
      <p className="text-gray-500 mb-12">My technical level</p>

      <div className="grid gap-10 md:grid-cols-2 justify-center">
        {/* Frontend Developer Card */}
        <div className="bg-white p-6 rounded-2xl shadow border text-left transform transition-transform hover:scale-105 hover:shadow-lg duration-300">
          <h3 className="text-xl font-semibold mb-6 text-center">Frontend Developer</h3>
          <div className="grid grid-cols-2 gap-4">
            <SkillItem icon={FaHtml5} skill="HTML" level="Advanced" />
            <SkillItem icon={FaCss3Alt} skill="CSS" level="Advanced" />
            <SkillItem icon={SiTailwindcss} skill="Tailwind CSS" level="Advanced" />
            <SkillItem icon={FaJs} skill="JavaScript" level="Intermediate" />
            <SkillItem icon={FaReact} skill="React" level="Intermediate" />
          </div>
        </div>

        {/* Backend Developer Card */}
        <div className="bg-white p-6 rounded-2xl shadow border text-left transform transition-transform hover:scale-105 hover:shadow-lg duration-300">
          <h3 className="text-xl font-semibold mb-6 text-center">Backend Developer</h3>
          <div className="grid grid-cols-2 gap-4">
            <SkillItem icon={SiFirebase} skill="Firebase" level="Intermediate" />
            <SkillItem icon={SiMongodb} skill="MongoDB" level="Intermediate" />
            <SkillItem icon={SiExpress} skill="Express.js" level="Intermediate" />
            <SkillItem icon={SiJsonwebtokens} skill="JWT" level="Intermediate" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
