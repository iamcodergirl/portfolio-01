"use client";

import { Fade } from "react-awesome-reveal";
import {
	ArrowPathIcon,
	CloudArrowUpIcon,
	FingerPrintIcon,
	LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "PHOTOGRAPHY",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus fuga vitae inventore, magnam eligendi nihil cumque dolores omnis officia hic sapiente animi? Laboriosam debitis, facilis quis accusantium alias voluptate.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "PORTFOLIO LISTS",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus fuga vitae inventore, magnam eligendi nihil cumque dolores omnis officia hic sapiente animi? Laboriosam debitis, facilis quis accusantium alias voluptate.",
		icon: LockClosedIcon,
	},
	{
		name: "FULLY CUSTOMIZABLE",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus fuga vitae inventore, magnam eligendi nihil cumque dolores omnis officia hic sapiente animi? Laboriosam debitis, facilis quis accusantium alias voluptate.",
		icon: ArrowPathIcon,
	},
	{
		name: "FREE PLUGINS",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus fuga vitae inventore, magnam eligendi nihil cumque dolores omnis officia hic sapiente animi? Laboriosam debitis, facilis quis accusantium alias voluptate.",
		icon: FingerPrintIcon,
	},
];

const Feature = () => {
	return (
		<section className="pb-12 xl:py-24">
			<div className="container mx-auto">
				<Fade
					direction="up"
					delay={400}
					cascade
					damping={1e-1}
					triggerOnce={true}
				>
					<h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
						Key Features
					</h2>
				</Fade>

				<div className="flex flex-col">
					<div className="mx-auto max-w-7xl text-center">
						<Fade
							direction="up"
							delay={600}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							<p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
								Everything you need to deliver faster
							</p>
						</Fade>
						<Fade
							direction="up"
							delay={800}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							<p className="mt-6 text-lg leading-8 text-black dark:text-white">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Est, dignissimos placeat?
								Magnam culpa nihil veniam facilis, explicabo
								ducimus doloribus qui aut atque animi fugiat at
								cum voluptatibus sint, incidunt praesentium.
							</p>
						</Fade>
					</div>
				</div>
				{/* Feature Lists */}
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						<Fade
							direction="up"
							delay={1000}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							{features.map((feature) => {
								return (
									<div
										key={feature.name}
										className="relative hover:scale-110 transition-all"
									>
										<dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
											<div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center">
												<feature.icon className="h-[36px] w-[36px] text-white" />
											</div>
											<div className="text-black dark:text-white">
												{feature.name}
											</div>
										</dt>
										<dd>{feature.description}</dd>
									</div>
								);
							})}
						</Fade>
					</dl>
				</div>
			</div>
		</section>
	);
};

export default Feature;
