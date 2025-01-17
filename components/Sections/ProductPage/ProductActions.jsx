"use client";
import React, {useState} from "react";
import {ProductDesc, Separator} from "../../misc/Text";
import {TiTick} from "react-icons/ti";

import {QuantityButton} from "@/components/misc/Buttons";
import ButtonLoader from "@/components/loaders/ButtonLoader";

export default function ProductActions({
	hasSizes,
	size,
	selectedSize,
	setSelectedSize,
	quantiy,
	setQuantity,
	handleAddToCartButton,
	isInCart,
	handleBuyNow,
}) {
	const [buttonClicked, setButtonClicked] = useState(false);
	const handleButtonClicked = (func) => {
		func();

		setButtonClicked(true);
		setTimeout(() => {
			setButtonClicked(false);
		}, 5000);
	};
	const handleQuantity = (type) => {
		if (type === "increment") {
			setQuantity(quantiy + 1);
		} else {
			if (quantiy > 1) {
				setQuantity(quantiy - 1);
			}
		}
	};

	return (
		<div className='w-full'>
			{hasSizes && (
				<>
					<ProductDesc>Choose Size</ProductDesc>
					<div className='flex gap-4 flex-wrap justify-start'>
						{size?.map((sizeOp, index) => (
							<SizeButton
								key={index}
								size={sizeOp.name}
								isSelected={selectedSize === sizeOp.name}
								onClick={() => setSelectedSize(sizeOp.name)}
							/>
						))}
					</div>
					<Separator className='my-5' />
				</>
			)}

			<div className='flex flex-wrap gap-5 justify-between items-center'>
				<div className='flex gap-4 w-full '>
					<div className='flex-1 basis-2/5'>
						<QuantityButton
							quantity={quantiy}
							onChange={handleQuantity}
						/>
					</div>

					<div className='flex-1 basis-4/5'>
						<button
							className={`w-full 
								text-center
								bg-[#012f3f] text-white font-medium text-lg rounded-full py-3 ${
									isInCart ? "bg-blue-600" : ""
								}`}
							onClick={handleAddToCartButton}
						>
							{isInCart ? (
								<TiTick className='w-6 h-6 mx-auto' />
							) : (
								"Add to Cart"
							)}
						</button>
					</div>
				</div>

				<button
					className={`w-full 
								text-center
								bg-[#012f3f] text-white font-medium text-lg rounded-full py-3
								
								`}
					onClick={() => handleButtonClicked(handleBuyNow)}
					disabled={buttonClicked}
				>
					{buttonClicked ? <ButtonLoader /> : "Buy Now"}
				</button>
			</div>
		</div>
	);
}

export function SizeButton({size, isSelected, onClick}) {
	const buttonClass = isSelected
		? "bg-[#012f3f] text-white"
		: "bg-[#efefef] text-gray-600";
	return (
		<button
			className={`w-[86px] sm:w-[100px] p-3 rounded-full flex justify-center items-center ${buttonClass} transition duration-300`}
			onClick={onClick}
		>
			<span className='text-base font-medium'>{size}</span>
		</button>
	);
}

export function AddToCartButton({onClick, ...props}) {
	return (
		<button
			className='w-full  bg-[#012f3f] text-white font-medium text-lg rounded-full py-3'
			{...props}
			onClick={onClick}
		>
			Add to Cart
		</button>
	);
}
