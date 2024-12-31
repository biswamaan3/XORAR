import React from "react";
import ProductOption from "./ProductOption";
import ProductActions from "./ProductActions";
import { Separator } from "../../misc/Text";

export default function ProductDescription() {
	return (
		<div className=' h-auto text-[0px] relative mx-auto px-4 sm:w-[100%]'>
			<span className='block text-[20px] md:text-[28px] lg:text-[40px] font-bold leading-tight text-[#000] relative text-left z-[2] whitespace-normal'>
				One Life Graphic T-shirt
			</span>

			{/* Ratings */}
			<div className='flex items-center gap-4 mt-4 z-[7]'>
				<div className='flex items-center gap-2'>
					{[...Array(4)].map((_, i) => (
						<div
							key={i}
							className='w-[25px] h-[25px] bg-[url(/assets/svg/Star_full.svg)] bg-cover mr-[6px]'
						/>
					))}
				</div>
				<div className='text-[16px] font-normal leading-[21.6px]'>
					<span className='text-[#000]'>4.5/</span>
					<span className='text-gray-500'>5</span>
				</div>
			</div>

			

			<div className='flex items-center mt-4 gap-3'>
				<span className='text-[24px] md:text-[32px] font-bold text-[#000]'>
					$260
				</span>
				<span className=' text-[20px] md:text-[32px] font-bold text-gray-300 line-through'>
					$300
				</span>
				<span className='py-1.5 px-3 text-[15px] md:text-[16px] font-medium text-[#ff3333] bg-[rgba(255,51,51,0.1)] rounded-full'>
					-40%
				</span>
			</div>
            <p className='mt-4 text-[14px] md:text-[16px] text-gray-600 leading-5'>
				This graphic t-shirt is perfect for any occasion. Crafted from a
				soft and breathable fabric, it offers superior comfort and
				style.
			</p>
			<Separator className='my-5' />

			<ProductOption />
			<Separator className='my-5' />

			<ProductActions />
		</div>
	);
}
