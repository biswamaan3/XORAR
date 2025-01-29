import React from "react";

import Link from "next/link";
import "@/styles/Navbar.css";
import ShopDropDown from "./ShopDropDown";
import NavbarButtons from "./NavbarButtons";
import SearchComp from "./search/SearchComp";
import HeaderBanner from "./misc/HeaderBanner";
import { TextBanner } from "@/data/products";

export default function Navbar() {

	return (
		<>
		{TextBanner.visible && <HeaderBanner/>}
		<div className='main-container !overflow-visible'>
			<div className='w-[90%] mx-auto flex items-center justify-between md:gap-10 gap-3'>
				<Link href={"/"} className='flex items-center gap-1'>
					<div
						className='w-6 h-[33.197px] bg-cover bg-center'
						style={{backgroundImage: "url(/assets/logo.svg)"}}
					/>
					<span className='xorar font-extrabold hidden md:inline-block'>
						XORAR
					</span>
				</Link>

				<div className='hidden md:flex items-center gap-6'>
					<ShopDropDown />
				</div>

				<SearchComp/>

				<NavbarButtons />
			</div>
		</div>
		</>
	);
}
