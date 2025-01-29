import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
	{ path: "/", name: "home" },
	{ path: "/about", name: "about" },
	{ path: "/portfolio", name: "portfolio" },
	{ path: "/pricing", name: "pricing" },
	{ path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onClick }) => {
	const path = usePathname();

	return (
		<nav className={`${containerStyles}`}>
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={`capitalize ${linkStyles}`}
						onClick={onClick}
					>
						{link.path === path && (
							<motion.span
								initial={{ y: "-100%" }}
								animate={{ y: 0 }}
								transition={{ type: "tween" }}
								layoutId="underline"
								className={`${underlineStyles}`}
							/>
						)}
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
