"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

// React Awesome Reveal Animation
import { Fade } from "react-awesome-reveal";

// React Icons
import {
	RiMenFill,
	RiBookmark3Fill,
	RiBodyScanFill,
	RiServerFill,
} from "react-icons/ri";

// Import Components
import Socials from "./Socials";
import HeroImage from "./HeroImage";
import Badge from "./Badge";

const Hero = () => {
	/* eslint-disable react/no-unescaped-entities */
	return (
		<section className="py-12 xl:py-24 h-[auto] bg-bottom">
			<div className="container mx-auto">
				<div className="flex justify-between gap-x-8">
					{/* Left Side content */}
					<div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
						<Fade
							direction="up"
							delay={400}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							<div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
								Photography
							</div>
						</Fade>

						<Fade
							direction="up"
							delay={600}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							<h1 className="h1 uppercase">
								Let's make magic!
							</h1>
						</Fade>

						<Fade
							direction="up"
							delay={800}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							<p className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Laborum quod libero
								consequatur nam aliquid placeat voluptatum.
							</p>
						</Fade>

						<Fade
							direction="up"
							delay={1000}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							{/* Subscribe Button */}
							<div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
								<div className="flex w-full gap-x-4">
									<label
										htmlFor="email-address"
										className="sr-only"
									>
										Email Address
									</label>
									<Input
										type="email"
										id="email"
										placeholder="Email"
									/>
									<Link href="/contact">
										<Button className="gap-x-2 bg-black">
											Subscribe <RiMenFill size={18} />
										</Button>
									</Link>
								</div>
							</div>
						</Fade>

						<Fade
							direction="up"
							delay={1200}
							cascade
							damping={1e-1}
							triggerOnce={true}
						>
							<Socials
								containerStyles="flex gap-x-6 mx-auto xl:mx-0"
								iconStyle="text-foreground text-[22px] hover:text-primary transition-all"
							/>
						</Fade>
					</div>

					<Fade
						direction="right"
						delay={600}
						cascade
						damping={1e-1}
						triggerOnce={true}
					>
						{/* Banner Image */}
						<div className="hidden xl:flex relative">
							<HeroImage
								imgSrc="/about/photography.svg"
								containerStyles="w-[550px] h-[475px] bg-no-repeat relative bg-bottom"
							/>
						</div>
					</Fade>
				</div>
				<Fade
					direction="up"
					delay={800}
					cascade
					damping={1e-1}
					triggerOnce={true}
				>
					{/* Badge Section*/}
					<div className="py-24 sm:py-32">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<dl className="grid grid-cols-1 gap-y-16 text-center lg:grid-cols-3">
								{/* Badge 1 */}
								<div className="mx-auto flex max-w-xs flex-col gap-y-4">
									<dt className="text-bold leading-7 text-muted-foreground">
										Years Of Expperience
									</dt>
									<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
										<Badge
											icon={<RiBookmark3Fill />}
											endCountNum={12}
											endCountText="+"
											badgeText=""
										/>
									</dd>
								</div>
								{/* Badge 2 */}
								<div className="mx-auto flex max-w-xs flex-col gap-y-4">
									<dt className="text-bold leading-7 text-muted-foreground">
										Followers
									</dt>
									<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
										<Badge
											icon={<RiBodyScanFill />}
											endCountNum={900}
											endCountText="k"
											badgeText=""
										/>
									</dd>
								</div>
								{/* Badge 3 */}
								<div className="mx-auto flex max-w-xs flex-col gap-y-4">
									<dt className="text-bold leading-7 text-muted-foreground">
										Projects
									</dt>
									<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
										<Badge
											icon={<RiServerFill />}
											endCountNum={70}
											endCountText="+"
											badgeText=""
										/>
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default Hero;
