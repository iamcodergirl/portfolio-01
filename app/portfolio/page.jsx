'use client';
import { Fade } from 'react-awesome-reveal';
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import projectData from '@/data/projects';

const uniqueCategories = [
	'all projects',
	...new Set(projectData.map((item) => item.category)),
];

const Portfolio = () => {
	const [categories, SetCategories] = useState(uniqueCategories);
	const [category, setCategory] = useState('all projects');

	let filteredProjects = projectData.filter((project) => {
		return category === 'all projects'
			? project
			: project.category === category;
	}); 

	return (
		<section className="pt-12">
			<div className="container mx-auto">
				<Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
					<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
						My Portfolio
					</h2>
				</Fade>
				<Tabs defaultValue={category} className="mb-24 xl:mb-48">
				<Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
					<TabsList className="w-full h-full grid md:grid-cols-5 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
						{ categories.map((category, index) => {							
							return (
								<TabsTrigger
									value={category}
									key={index}
									onClick={() => setCategory(category)}
									className="capitalize w-[162px] md:w-auto"
								>
									{category}
								</TabsTrigger>
							);
						}) }
					</TabsList>
				</Fade>
					{/* Tabs Content */}
					<div className="text-lg xl:mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					<Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
						{ filteredProjects.map((project, index) => {
							return (
								<TabsContent value={category} key={index}>
									<ProjectCard project={project} />
								</TabsContent>
							);
						}) }
					</Fade>
					</div>
				</Tabs>
			</div>
		</section>
	);
};

export default Portfolio;
