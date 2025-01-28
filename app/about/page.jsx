'use client';

import { Fade } from "react-awesome-reveal";

import HeroImage from "@/components/HeroImage";
import {
	RiRidingFill,
	RiUserHeartFill,
	RiStarHalfLine,
	RiVidiconFill,
	RiVipCrown2Fill,
	RiSendPlaneFill,
} from "react-icons/ri";

const infoData = [
	{
		icon: <RiUserHeartFill />,
		text: "Mrs Smith",
	},
	{
		icon: <RiSendPlaneFill />,
		text: "+91 99 787 7761",
	},
	{
		icon: <RiVidiconFill />,
		text: "photography@gmail.com",
	},
	{
		icon: <RiVipCrown2Fill />,
		text: "born on 23 Jan, 2000",
	},
	{
		icon: <RiStarHalfLine />,
		text: "Master Degree",
	},
	{
		icon: <RiRidingFill />,
		text: "22, Ella Statu, Texas, US",
	},
];

const About = () => {
	return (
		/* eslint-disable react/no-unescaped-entities */
		<section className="pb-12 xl:py-24">
			<div className="container mx-auto">
				<Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
					<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
						About me
					</h2>
				</Fade>
			</div>
			<div className="flex flex-col xl:flex-row xl:flex xl:gap-x-20 xl:justify-center">
				{/* Image */}
				<div className="relative flex-1 flex justify-center xl:justify-end">
					<Fade direction="left" delay={600} cascade damping={1e-1} triggerOnce={true}>
						<HeroImage
							containerStyles="w-[450px] h-[450px] xl:w-[505px] xl:h-[505px] bg-no-repeat relative"
							imgSrc="./about/profile.png"
						/>
					</Fade>
				</div>
				<div className="flex-1">
					{/* Content */}
					<div className="text-lg mt-12 xl:mt-3">
						<div className="text-center xl:text-left">
							<Fade direction="right" delay={400} cascade damping={1e-1} triggerOnce={true}>
								<h3 className="h3 mb-4">
									Let's plan your perfect photoshoot
								</h3>
							</Fade>
							<Fade direction="right" delay={600} cascade damping={1e-1} triggerOnce={true}>
								<p className="subtitle max-w-xl mx-auto xl:mx-0">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Odio perspiciatis sunt
									repudiandae minus suscipit eaque ad
								</p>
							</Fade>
							<Fade direction="right" delay={800} cascade damping={1e-1} triggerOnce={true}>
								<p className="subtitle max-w-xl mx-auto xl:mx-0">
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Totam impedit facilis odit
									sequi
								</p>
							</Fade>

							{/* Icons */}
							<div className="grid xl:grid-cols-2 gap-4 mb-12">
								<Fade direction="right" delay={1000} cascade damping={1e-1} triggerOnce={true}>
									{infoData.map((item, index) => {
										return (
											<div
												key={index}
												className="flex items-center gap-x-4 mx-auto xl:mx-0"
											>
												<div className="text-primary">
													{item.icon}
												</div>
												<div>{item.text}</div>
											</div>
										);
									})}
								</Fade>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
