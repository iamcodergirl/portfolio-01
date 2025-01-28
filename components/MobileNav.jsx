import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";
import { AlignJustify } from "lucide-react";

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger aria-label="Burger Menu">
				<AlignJustify className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col items-center justify-between h-full py-8">
					<div className="flex flex-col items-center gap-y-32">
						<Logo />
						<Nav
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
