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
			<a href={link}>
				<div
					className='relative flex items-center justify-center w-[250px] 
        h-64
        max-h-[250px] bg-[#f0eeed] z-8 overflow-hidden rounded-2xl
		bg-cover bg-center bg-no-repeat
		
		'
					style={{
						backgroundImage: `url(${img})`,
					}}
				></div>

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
						{discount && (
							<>
								<span className='text-[20px] line-through text-gray-500 font-satoshi font-[700]'>
									{process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}{" "}
									{actualPrice}
								</span>

								<button className='flex items-center justify-center px-4 py-2 bg-red-100 rounded-full'>
									<span className='text-red-600 text-xs font-medium'>
										-{discount}%
									</span>
								</button>
							</>
						)}
					</div>
				)}
			</a>

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
