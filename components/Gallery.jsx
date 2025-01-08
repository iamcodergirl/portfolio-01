'use client';

import { Fade } from "react-awesome-reveal";
import ProjectCard from "./ProjectCard";

import projectData from "../data/projects";

const Gallery = () => {
	return (
		<section className="relative mb-12 xl:mb-48">
			<div className="container mx-auto">
				<Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
					<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
						My Gallery
					</h2>
				</Fade>
				<div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-y-12 md:gap-x-8">
					<Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
					{projectData.map((project, index) => {
						return <ProjectCard key={index} project={project} />;
					})}
					</Fade>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
