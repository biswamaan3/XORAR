"use client";
import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {useAppProvider} from "./providers/AppProvider";

function NavbarButtons() {
	const {totalSaved} = useAppProvider();

	return (
		<div className='flex items-center gap-3'>
			<Link href='/cart' className='relative'>
				<Image
					src='/assets/svg/cart.svg'
					width={28}
					height={28}
					alt='Cart Icon'
				/>
				{totalSaved.cart > 0 && (
					<div
						className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white
            bg-blue-500 border-2 border-white rounded-full -top-3 -end-2.5 dark:border-gray-900'
					>
						{totalSaved.cart}
					</div>
				)}
			</Link>
			<Link href='/favourites' className='relative'>
				<Image
					src='/assets/svg/Heart.svg'
					width={28}
					height={28}
					alt='Heart Icon'
				/>
				{totalSaved.wishlist > 0 && (
					<div
						className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white
            bg-red-500 border-2 border-white rounded-full -top-3 -end-2.5 dark:border-gray-900'
					>
						{totalSaved.wishlist}
					</div>
				)}
			</Link>
		</div>
	);
}

export default NavbarButtons;
