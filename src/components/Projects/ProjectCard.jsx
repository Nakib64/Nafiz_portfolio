import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";


const ProjectCard = ({ project }) => {
	return (
		<Link to={`project/${project.id}`} >
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.02 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.4, ease: "easeInOut" }}
				className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
			>
				<img
					src={project.image}
					alt={project.name}
					className="w-full h-48 object-cover"
				/>
				<div className="p-5 flex flex-col justify-between h-[180px]">
					<h3 className="text-xl font-semibold mb-2 text-gray-800">
						{project.name}
					</h3>
					<button 
						
						className="mt-auto bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 w-max transition"
					>
						View More
					</button>
				</div>
			</motion.div>
		</Link>
	);
};

export default ProjectCard;
