'use client';

import { Fade } from 'react-awesome-reveal';

import { Smile, Scan, Bird } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const servicesDate = [
	{
		icon: <Smile size={48} strokeWidth={1} />,
		title: 'Portraiture',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur labore, iusto impedit quod soluta odio delectus eius facere quasi excepturi ullam libero voluptatum debitis explicabo optio adipisci totam nam. ',
	},
	{
		icon: <Scan size={48} strokeWidth={1} />,
		title: 'Landscapes',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur labore, iusto impedit quod soluta odio delectus eius facere quasi excepturi ullam libero voluptatum debitis explicabo optio adipisci totam nam. ',
	},
	{
		icon: <Bird size={48} strokeWidth={1} />,
		title: 'Lifestyle',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur labore, iusto impedit quod soluta odio delectus eius facere quasi excepturi ullam libero voluptatum debitis explicabo optio adipisci totam nam. ',
	},
];

const Services = () => {
	return (
		<section className="mb-12 xl:mb-36">
			<div className="container mx-auto">
				<Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
					<h2 className="section-title mb-6 xl:mb-24 text-center mx-auto">
						Our Services
					</h2>
				</Fade>
				{/* Category Items */}
				<div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-y-12 md:gap-x-8">
					<Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
						{servicesDate.map((item, index) => {
							return (
								<Card
									key={index}
									className="relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary  dark:hover:bg-white/10 transition-all duration-700"
								>
									<CardHeader className="text-primary">
										<div className="w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6">
											{item.icon}
										</div>
									</CardHeader>
									<CardContent className="text-center">
										<CardTitle className="mb-4">
											{item.title}
										</CardTitle>
										<CardDescription className="text-lg">
											{item.description}
										</CardDescription>
									</CardContent>
								</Card>
							);
						})}
					</Fade>
				</div>
			</div>
		</section>
	);
};

export default Services;
