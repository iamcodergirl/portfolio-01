"use client";

import { Fade } from "react-awesome-reveal";
import Socials from "./Socials";

import React from "react";

const Footer = () => {
	return (
		<footer className="bg-primary py-12">
			<div className="container mx-auto">
				<div className="flex flex-col items-center justify-center">
					<Fade
						direction="up"
						delay={400}
						cascade
						damping={1e-1}
						triggerOnce={true}
					>
						{/* Socials */}
						<Socials
							containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
							iconStyle="text-white text-[20px] transition-all dark:text-white/70 hover:text-white/70 dark:hover:text-white"
						/>
					</Fade>

					<Fade
						direction="up"
						delay={800}
						cascade
						damping={1e-1}
						triggerOnce={true}
					>
						<div className="text-white">
							Copyright &copy; 2024, All Rights Reserved.
						</div>
					</Fade>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
