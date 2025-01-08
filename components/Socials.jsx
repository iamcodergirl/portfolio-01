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
		<SocialsWrapper className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link key={index} href={icon.path}>
						<div className={`${iconStyle}`}>{icon.name}</div>
					</Link>
				);
			})}
		</SocialsWrapper>
	);
};

export default Socials;

import styled from "styled-components";
const SocialsWrapper = styled.div`
	background: transparent;
	border-radius: 3px;
	padding: 0.25em 1em;
`;
