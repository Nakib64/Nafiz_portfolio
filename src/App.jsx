import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./components/navbar/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/skill/Skill";
import AOS from "aos";
import "aos/dist/aos.css";
import Qualification from "./components/qualification/Qualification";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: "ease-in-out",
			once: true,
		});
	}, []);

	return (
		<div
			className="text bg-white  text-gray-700 max-w-7xl mx-auto"
			data-theme="light"
		>
			<Navbar></Navbar>
			<Hero></Hero>
			<div id="about">
				<About></About>
			</div>
			<div id="skills">
				<Skills></Skills>
			</div>
			<div id="qualification">
				<Qualification></Qualification>
			</div>

			<div id="contact">
				<SocialLinks></SocialLinks>
			</div>
			<div id="projects">
        <Projects></Projects>
      </div>
      <Footer></Footer>
		</div>
	);
}

export default App;
