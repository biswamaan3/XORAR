import {TextBanner} from "@/data/products";
import Link from "next/link";
import React from "react";
import {IoIosArrowRoundForward} from "react-icons/io";

function HeaderBanner() {
	return (
		<div
			className='px-8 py-2 bg-black text-white text-center flex items-center justify-center
		 !text-md md:text-md 
	
		'
		>
			<Link
				href='/product/all'
				className='ml-4 text-gray-100 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] 
				md:h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden  flex items-center'
			>
				<ul className='block animate-text-slide-2 text-left leading-tight [&_li]:block'>
					<li className=''>
						All india free delivery | {" "}Shop Now ↪ 
					</li>
					<li>Buy Two get 8% Discount | {" "}Shop Now ↪  </li>
					<li aria-hidden='true'>All india free delivery | {" "}Shop Now ↪ </li>
				</ul>
			</Link>
		</div>
	);
}

export default HeaderBanner;
