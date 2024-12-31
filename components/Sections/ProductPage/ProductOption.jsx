"use client";
import React, {useState} from "react";
import {ProductDesc} from "../../misc/Text";

export default function ProductOption() {
	const [selectedColor, setSelectedColor] = useState(null);
	const [selectedDesign, setSelectedDesign] = useState(null);
	const colors = [
		"#2e96d9", // Blue
		"#d9ad6d", // Yellow
		"#0242ac", // Dark Blue
	];

	const designs = [
		"/assets/img/products/tshirt2.png",
		"/assets/img/products/tshirt3.png",
		"/assets/img/products/tshirt4.png",
	];

	return (
		<>
			<div className='flex justify-start gap-16 items-center flex-wrap'>
				<div className='colors'>
					<ProductDesc>Select Colors</ProductDesc>

					<div className='flex gap-3'>
						{colors.map((color, index) => (
							<div
								key={index}
								className={`w-[37px] h-[37px] rounded-[50%] relative cursor-pointer ${
									selectedColor === index
										? "border-2 border-blue-500"
										: ""
								}`}
								style={{backgroundColor: color}}
								onClick={() => setSelectedColor(index)}
							>
								{selectedColor === index && (
									<span className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white text-[16px] font-bold'>
										✓
									</span>
								)}
							</div>
						))}
					</div>
				</div>

				<div className='colors'>
					<ProductDesc>Select Design</ProductDesc>

					<div className='flex gap-3'>
						{designs.map((design, index) => (
							<div
								key={index}
								className={`w-[37px] h-[37px] bg-cover bg-no-repeat rounded-[50%] relative cursor-pointer ${
									selectedDesign === index
										? "ring-2 ring-blue-600"
										: ""
								}`}
								style={{backgroundImage: `url(${design})`}}
								onClick={() => setSelectedDesign(index)}
							>
								{selectedDesign === index && (
									<span className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white text-[16px] font-bold'>
										✓
									</span>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
