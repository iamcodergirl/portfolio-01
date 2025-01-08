'use client';
import { Fade } from "react-awesome-reveal";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
	return (
		<section>
			<div className="container mx-auto">
				<div className="w-full pt-12 mb-6 xl:mb-24">
					<Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
						<h2 className="section-title mb-12 text-center mx-auto">
							Our Studio
						</h2>
					</Fade>
					
					<Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger>
									<div className="ms-3">
										01. Lorem ipsum dolor sit amet
										consectetur adipisicing elit.
									</div>
								</AccordionTrigger>
								<AccordionContent>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Iusto sed reprehenderit
									debitis quasi earum, cum explicabo, animi,
									mollitia voluptate et neque hic nihil.
									Corrupti voluptatem error maiores vitae at
									minus!
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>
									<div className="ms-3">
										02. Lorem ipsum dolor sit amet
										consectetur adipisicing elit.
									</div>
								</AccordionTrigger>
								<AccordionContent>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Iusto sed reprehenderit
									debitis quasi earum, cum explicabo, animi,
									mollitia voluptate et neque hic nihil.
									Corrupti voluptatem error maiores vitae at
									minus!
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>
									<div className="ms-3">
										03. Lorem ipsum dolor sit amet
										consectetur adipisicing elit.
									</div>
								</AccordionTrigger>
								<AccordionContent>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Iusto sed reprehenderit
									debitis quasi earum, cum explicabo, animi,
									mollitia voluptate et neque hic nihil.
									Corrupti voluptatem error maiores vitae at
									minus!
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</Fade>
				</div>
			</div>
		</section>
	);
};

export default Faq;
