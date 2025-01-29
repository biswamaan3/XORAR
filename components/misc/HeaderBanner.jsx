import { TextBanner } from "@/data/products";
import Link from "next/link";
import React from "react";
import {IoIosArrowRoundForward} from "react-icons/io";

function HeaderBanner() {
	return (
		<div className='px-8 py-2 bg-black text-white text-center flex items-center justify-center'>
			{TextBanner.text} {" "}
			<Link
				href='/product/all'
				className='ml-4 text-gray-100 font-semibold flex items-center'
			>
				{TextBanner.linkText} {" "}
				<IoIosArrowRoundForward className='ml-1 w-6 h-6' />
			</Link>
		</div>
	);
}

export default HeaderBanner;
