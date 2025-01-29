import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";
import { AlignJustify } from "lucide-react";

import { useState } from 'react';

const MobileNav = () => {
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger aria-label="Burger Menu" onClick={() => setOpen(true)} asChild>
				<AlignJustify className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col items-center justify-between h-full py-8">
					<div className="flex flex-col items-center gap-y-32">
						<SheetTitle arial-label="Logo">
						<Logo />
						</SheetTitle>
						<Nav
							onClick={handleClose }
							containerStyles="flex flex-col items-center gap-y-6"
							linkStyles="text-1xl"
						/>
					</div>
					<Socials
						containerStyles="flex gap-x-4"
						iconStyle="text-2xl"
					/>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
