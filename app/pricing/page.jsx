'use client';

import { Fade } from "react-awesome-reveal";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";

// Import Toast Massage
import { ToastAction} from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';


const includedFeatures = [
	"Private forum access",
	"Member Resources",
	"Entry to annual conference",
	"Official member equipment",
];

const Pricing = () => {

  const { toast } = useToast();

  const onToastMassage = () => {
    toast({
      title: "Purchase Successfully",
      description: "Friday, February 10, 2024 at 5:57 PM",
      action: (
        <ToastAction altText="Close">Close</ToastAction>
      )
    })
  }

	return (
		<section className="pt-12 pb-12 overflow-y-hidden">
			<div className="container mx-auto">
				<Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
					<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
						My Pricing
					</h2>
				</Fade>

				<div className="mx-auto max-w-2xl sm:text-center">
					<Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Memories worth love cherishing
						</h2>
					</Fade>
					<Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
						<p className="mt-6 text-lg leading-8">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Aliquam tempora sequi maxime odio deserunt, nihil
							dignissimos nesciunt nobis eos nisi amet est nam
						</p>
					</Fade>
				</div>

				{/* Pricing Data */}
				<Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
					<div className="mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						{/* Left Section */}
						<div className="p-8 sm:p-10 lg:flex-auto">
							<h3 className="text-2xl font-bold tracking-tight">
								Lifetime Membership
							</h3>
							<p className="mt-6 text-base leading-7">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Voluptas debitis fugiat laudantium voluptatem
								libero error nemo nihil ab obcaecati corporis
								aliquid eaque quos, soluta, in consectetur illo
								quis.
							</p>
							<div className="mt-10 flex items-center gap-x-4">
								<h4 className="flex-none text-sm font-semibold leading-6 text-primary">
									What's included
								</h4>
								<div className="h-px flex-auto bg-gray-100"></div>
								
							</div>
				<ul
									role="list"
									className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
								>
									{includedFeatures.map((feature) => (
										<li
											key={feature}
											className="flex text-muted-foreground gap-x-3"
										>
											<CheckIcon 
						className="h-6 w-5 flex-none text-primary"
						aria-hidden='true'
						/>
											{feature}
										</li>
									))}
								</ul>
						</div>

						{/* Right Section */}
						<div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="bg-tertiary py-10 rounded-2xl text-center right-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<p className="text-base font-semibold">Pay once, own it forever</p>
									<p className="mt-6 flex items-baseline justify-center gap-x-2">
										<span className="text-5xl font-bold tracking-tight">$349</span>
										<span className="text-sm font-semibold leading-6 tracking-wide">USD</span>
									</p>
					<Button className="gap-x-2 mt-3" 
					onClick={onToastMassage}
					>
					Purchase
					</Button>

					<p className="mt-6 text-xs leading-5">Invoices and receipts available for easy company reimbursement</p>
								</div>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default Pricing;
