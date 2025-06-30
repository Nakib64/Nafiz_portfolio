import React from "react";
import { FaUniversity, FaLaptopCode } from "react-icons/fa";

const QualificationItem = ({ icon: Icon, title, subtitle, duration, animation }) => (
  <div
    className="flex items-start gap-4 mb-8"
    data-aos={animation}
  >
    <div className="text-blue-600 text-2xl mt-1">
      <Icon />
    </div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <span className="text-xs text-gray-400">{duration}</span>
    </div>
  </div>
);

const Qualification = () => {
  return (
    <section id="qualification" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">Qualification</h2>
      <p className="text-center text-gray-500 mb-12">My journey in education and web development</p>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Academic Column */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b pb-2 border-gray-200">🎓 Education</h3>
          <QualificationItem
            icon={FaUniversity}
            title="BSc in Computer Science & Engineering"
            subtitle="Pabna University of Science and Technology"
            duration="2024 - Present"
            animation= "fade-up"
          />
        </div>

        {/* Web Development Column */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b pb-2 border-gray-200">💻 Web Development</h3>
          <QualificationItem
            icon={FaLaptopCode}
            title="MERN Stack Developer (in progress)"
            subtitle="Self-taught via courses & real-world projects"
            duration="1.5+ years experience"
            animation="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default Qualification;
