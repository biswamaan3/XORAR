import React from "react";
import "@/styles/SingleProduct.min.css"; // You can remove this import if you switch entirely to Tailwind.
import Link from "next/link";
import {MoveToBag, StarRating} from "../misc/Buttons";

function SingleProduct({
	img,
	title,
	price,
	ratings,
	link,
	moveToCart,
	actualPrice,
	discount,
	priceShow = true,
	onClick,
	productAddedInCart,
	...props
}) {
	return (
		<div className='w-auto block mx-auto' {...props}>
			<Link href={link}>
				{/* Product Image */}
				<div
					className='relative flex items-center justify-center max-w-[295px] 
        h-64
        max-h-[298px] bg-[#f0eeed] z-8 overflow-hidden rounded-2xl'
				>
					<img
						src={img}
						alt='tshirt image'
						className='object-contain w-full h-full'
					/>
				</div>

				{/* Product Title */}
				<div className='mt-4'>
					<span className='text-black font-bold'>{title}</span>
				</div>

				{/* Star Rating */}
				{ratings > 0 && (
					<div className='mt-2 flex items-center space-x-2'>
						<StarRating ratings={ratings} />
						<div className='flex items-center space-x-1'>
							<span className='text-black text-sm'>
								{ratings}/
							</span>
							<span className='text-gray-600 text-sm'>5</span>
						</div>
					</div>
				)}

				{priceShow && (
					<div className='mt-2 flex items-center space-x-2'>
						<span className='text-[24px] text-nowrap text-black font-satoshi font-extrabold'>
							{process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}
							{price}
						</span>
						<span className='text-[20px] line-through text-gray-500 font-satoshi font-[700]'>
							{process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}{" "}
							{actualPrice}
						</span>
						{discount && (
							<button className='flex items-center justify-center px-4 py-2 bg-red-100 rounded-full'>
								<span className='text-red-600 text-xs font-medium'>
									-{discount}%
								</span>
							</button>
						)}
					</div>
				)}
			</Link>

			{/* MoveToBag button */}
			{moveToCart && (
				<MoveToBag
					onClick={onClick}
					productAddedInCart={productAddedInCart} // Check if product is in cart
				/>
			)}
		</div>
	);
}

export default SingleProduct;
