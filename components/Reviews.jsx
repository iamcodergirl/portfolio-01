'use client';

import { Fade } from 'react-awesome-reveal';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const reviewData = [
	{
		avatar: '/reviews/avatar-1.png',
		name: 'Jenifer',
		job: 'Chief',
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugiat inventore, laboriosam provident et ratione, expedita, quam reprehenderit blanditiis odit laborum modi architecto!',
	},
	{
		avatar: '/reviews/avatar-2.png',
		name: 'Lopes Chris',
		job: 'CEO',
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugiat inventore, laboriosam provident et ratione, expedita, quam reprehenderit blanditiis odit laborum modi architecto!',
	},
	{
		avatar: '/reviews/avatar-3.png',
		name: 'Hamilton',
		job: 'COO',
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugiat inventore, laboriosam provident et ratione, expedita, quam reprehenderit blanditiis odit laborum modi architecto!',
	},
	{
		avatar: '/reviews/avatar-4.png',
		name: 'Lucifer',
		job: 'APP Developer',
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugiat inventore, laboriosam provident et ratione, expedita, quam reprehenderit blanditiis odit laborum modi architecto!',
	},
	{
		avatar: '/reviews/avatar-5.png',
		name: 'Mark Steve',
		job: 'Chief',
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugiat inventore, laboriosam provident et ratione, expedita, quam reprehenderit blanditiis odit laborum modi architecto!',
	},
];

const Reviews = () => {
	return (
		<section className="mb-12 xl:mb-32">
			<div className="container mx-auto">
			<Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
				<h2 className="section-title mb-12 text-center mx-auto">
					They say about our work
				</h2>
				</Fade>
				<Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
				{/* Slider */}
					<Swiper
						slidesPerView={1}
						breakpoints={{
							640: {slidesPerView: 2},
							1400: {slidesPerView: 3},
						}}
						spaceBetween={30}
						modules={[Pagination]}
						pagination={{
							clickable: true
						}}
						className='min-h-[350px] pb-8'
					>
						
						{
							reviewData.map((person, index) => {
								return(
									<SwiperSlide key={index}>
										<Card className='p-8 min-h-[300px] cursor-pointer hover:bg-tertiary  dark:hover:bg-white/10 transition-all duration-700'>
											<CardHeader className='p-0 mb-3'>
												<div className='flex flex-col items-start gap-x-4'>
													{/* Avatar */}
													<Image 
													src={person.avatar}
													width={70}
													height={70}
													alt=''
													priority 
													className='mb-2'
													/>
													{/* Name */}
													<div className='flex flex-col'>
														<CardTitle>{person.name}</CardTitle>
														<p>{person.job}</p>
													</div>
												</div>
											</CardHeader>
											<CardDescription className='text-lg text-muted-foreground'>
												{person.review}
											</CardDescription>
										</Card>
									</SwiperSlide>
								)
							} )
						}						
					</Swiper>		
				</Fade>		
			</div>
		</section>
	);
};

export default Reviews;
