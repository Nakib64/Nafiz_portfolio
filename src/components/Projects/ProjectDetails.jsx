import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProject(found);
      });
  }, [id]);

  if (!project) {
    return <p className="text-center py-20">Loading project details...</p>;
  }

  return (
    <section className="bg-white text-gray-800 pt-10">
      {/* 🔲 Banner image (main image) */}
      <div className="flex justify-center">
        <img
        src={project.image}
        alt={project.name}
        className="w-1/2  h-[300px] md:h-[400px] object-cover object-center shadow"
      />
      </div>

      <div className="px-6 md:px-20 py-12">
        {/* 📝 Title */}
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.name}
        </motion.h1>

        {/* 🧱 Tech Stack */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-sm px-3 py-1 rounded-full border"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* 🧾 Description */}
        <motion.p
          className="text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {project.description}
        </motion.p>

        {/* 🔗 Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            GitHub (Client)
          </a>
        </div>

        {/* 🧩 Challenges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-2">Challenges Faced:</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8">
            {project.challenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Future Plans:</h2>
          <ul className="list-disc list-inside text-gray-700">
            {project.futurePlans.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* 📸 Full image shown later with full visibility */}
        <div className="mt-16 flex justify-center">
          <img
            src={project.fullImage}
            alt={`${project.name} full view`}
            className="max-w-5xl w-full max-h-[600px] object-contain rounded-lg shadow"
          />
        </div>

        {/* 🔙 Back */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block text-sm text-blue-600 hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
