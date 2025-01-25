"use client";
import Link from "next/link";
import {useState} from "react";
import {MdKeyboardArrowDown} from "react-icons/md";

export default function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);

	const handleDropdown = () => setIsOpen(!isOpen);

	return (
		<div className='relative hidden md:flex items-center gap-6'>
			<div
				className='flex items-center gap-1 cursor-pointer'
				onClick={handleDropdown}
			>
				<span className='text-base text-black font-normal'>Shop</span>
				<MdKeyboardArrowDown className='w-4 h-4' />
			</div>

			{isOpen && (
				<div
					onClick={handleDropdown}
					className='absolute bg-white shadow-md rounded-lg mt-40 dropdown-menu py-2 w-40 z-[9999] border border-gray-300 '
				>
					<Link
						href='/product/all?category=t-shirt'
						className='block px-4 py-2 text-black text-sm hover:bg-gray-100'
					>
						T-shirts
					</Link>
					{/* <Link
						href='/product/all?category=hoodies'
						className='block px-4 py-2 text-black text-sm hover:bg-gray-100'
					>
						Hoodies
					</Link> */}
					<Link
						href='/product/all?category=women'
						className='block px-4 py-2 text-black text-sm hover:bg-gray-100'
					>
						Women's Clothing
					</Link>
				</div>
			)}
		</div>
	);
}
