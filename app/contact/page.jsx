"use client";
import { Fade } from "react-awesome-reveal";
import Form from "@/components/Form";

const Contact = () => {
	return (
		/* eslint-disable react/no-unescaped-entities */
		<section className="py-12">
			<div className="container mx-auto">
				<div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">
					{/* Left Content */}
					<div className="flex flex-col justify-center">
						<Fade
							direction="left"
							delay={400}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							<div className="flex items-center gap-x-4 text-primary text-lg mb-4">
								<span className="w-[30px] h-[2px] bg-primary"></span>
								Hello
							</div>
						</Fade>
						<Fade
							direction="left"
							delay={600}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							<h1 className="h1 max-w-md mb-8">
								Let's work together.
							</h1>
						</Fade>
						<Fade
							direction="left"
							delay={800}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							<p className="subtitle max-w-[400px]">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Eius, officia reiciendis sint
								earum cum doloribus. Repellendus labore
								perferendis odio nemo, quos nihil quibusdam
								minima mollitia eaque laborum excepturi, error
								tenetur.
							</p>
						</Fade>
					</div>

					<div className="lg:mt-24">
						<Fade
							direction="right"
							delay={400}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							<Form />
						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
