import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projectData.json")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Failed to fetch project data:", err));
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
