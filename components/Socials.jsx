"use client";

import Link from "next/link";
import {
	RiPaypalFill,
	RiSnapchatFill,
	RiSkypeFill,
	RiFacebookFill,
	RiInstagramFill,
} from "react-icons/ri";

const icons = [
	{
		path: "/",
		name: <RiPaypalFill />,
	},
	{
		path: "/",
		name: <RiSnapchatFill />,
	},
	{
		path: "/",
		name: <RiSkypeFill />,
	},
	{
		path: "/",
		name: <RiFacebookFill />,
	},
	{
		path: "/",
		name: <RiInstagramFill />,
	},
];

const Socials = ({ containerStyles, iconStyle }) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link key={index} href={icon.path}>
						<div className={`${iconStyle}`}>{icon.name}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
