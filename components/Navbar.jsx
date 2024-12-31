import React from "react";
import "@/styles/Navbar.css";
import {LiaShoppingCartSolid} from "react-icons/lia";
import {CiHeart, CiSearch} from "react-icons/ci";
import {MdKeyboardArrowDown} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className='main-container'>
			<div className='navbar '>
				<div className='frame'>
					<div className='frame-1'>
						<div className='xorar-logo' />
						<span className='xorar font-extrabold'>XORAR</span>
					</div>
					<div className='frame-2'>
						<div className='frame-3'>
							<span className='shop'>Shop</span>
							<MdKeyboardArrowDown className='frame-4' />
						</div>
					</div>

					<form className='frame-5 '>
						<label
							htmlFor='default-search'
							className='text-sm font-medium text-gray-900 sr-only dark:text-white'
						>
							Search
						</label>
						<div className='relative w-full '>
							<div className='absolute inset-y-0 start-0 flex items-center  pointer-events-none'>
								<CiSearch className='frame-6' />
							</div>
							<input
								type='search'
								id='default-search'
								className=' ps-7 block w-full text-[16px] text-gray-900 bg-transparent
                 '
								placeholder='Search for products...'
								required
							/>
						</div>
					</form>
					<div className='nav-frame-7'>
						<Link href={"/cart"}>
						<Image src="/assets/svg/cart.svg" width={20} height={20} className="cart-icon" 
						alt="cart-icon"
						/>
							{/* <LiaShoppingCartSolid className='cart-icon' /> */}
						</Link>
						<Link href={"/favourites"}>
						<Image src="/assets/svg/Heart.svg" width={20} height={20} className="heart-icon" 
						alt="cart-icon"
						/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
