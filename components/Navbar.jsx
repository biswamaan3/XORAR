import React from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import "@/styles/Navbar.css";

export default function Navbar() {
	return (
		<div className="main-container">
<div className="w-[90%] mx-auto flex items-center justify-between md:gap-10 gap-3">
				<Link href={"/"} className="flex items-center gap-1">
					<div
						className="w-6 h-[33.197px] bg-cover bg-center"
						style={{ backgroundImage: "url(/assets/logo.svg)" }}
					/>
					<span className="xorar font-extrabold hidden md:inline-block">XORAR</span>
				</Link>

				<div className="hidden md:flex items-center gap-6">
					<div className="flex items-center gap-1">
						<span className="text-base text-black font-normal">
							Shop
						</span>
						<MdKeyboardArrowDown className="w-4 h-4" />
					</div>
				</div>

				<form className="flex items-center gap-3 bg-[#efefef] p-3 rounded-full flex-grow">
					<div className="relative w-full">
						<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none">
							<CiSearch className="frame-6 ml-1" />
						</div>
						<input
							type="search"
							id="default-search"
							className="ps-8 block w-full text-[16px] text-gray-900 bg-transparent"
							placeholder="Search for products..."
							required=""
						/>
					</div>
				</form>

				<div className="flex items-center gap-3">
					<Link href="/cart">
						<Image
							src="/assets/svg/cart.svg"
							width={28}
							height={28}
							alt="Cart Icon"
						/>
					</Link>
					<Link href="/favourites">
						<Image
							src="/assets/svg/Heart.svg"
							width={28}
							height={28}
							alt="Heart Icon"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
