"use client";
import React, {useState} from "react";
import {ProductDesc, Separator} from "../../misc/Text";
import {FiPlus} from "react-icons/fi";
import {FiMinus} from "react-icons/fi";
import {QuantityButton} from "@/components/misc/Buttons";

export default function ProductActions() {
	const [selectedSize, setSelectedSize] = useState(null);

	return (
		<div className=' w-full'>
			<ProductDesc>Choose Size</ProductDesc>
			<div className='flex gap-4 flex-wrap justify-start'>
				{["Small", "Medium", "Large", "X-Large"].map((size, index) => (
					<SizeButton
						key={index}
						size={size}
						isSelected={selectedSize === size}
						onClick={() => setSelectedSize(size)}
					/>
				))}
			</div>
			<Separator className='my-5' />
			<div className='flex justify-between items-center gap-5'>
				<QuantityButton />
				<AddToCartButton />
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

export function AddToCartButton() {
	return (
		<button className='flex w-full justify-center items-center bg-[#012f3f] text-white font-medium text-lg rounded-full py-3 px-6'>
			Add to Cart
		</button>
	);
}
