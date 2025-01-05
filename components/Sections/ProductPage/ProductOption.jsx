"use client";
import React, {useState} from "react";
import {ProductDesc} from "../../misc/Text";

export default function ProductOption({colors, design,selectedColor, setSelectedColor,selectedDesign, setSelectedDesign}) {


	const designs = [
		"/assets/img/products/tshirt2.png",
		"/assets/img/products/tshirt3.png",
		"/assets/img/products/tshirt4.png",
	];

	return (
		<div className='flex flex-col sm:flex-row justify-start sm:gap-16 items-center flex-wrap sm:flex-nowrap'>
			{/* Colors Section */}
			<div className='colors mb-4 sm:mb-0'>
				<ProductDesc>Select Colors</ProductDesc>
				<div className='flex gap-3 flex-wrap sm:flex-nowrap'>
					{colors.map((color, index) => (
						<div
							key={color.id}
							className={`w-[37px] h-[37px] border-[0.5px] rounded-full relative cursor-pointer ${
								selectedColor === color.id
									? "border-2 border-blue-500"
									: ""
							}`}
							style={{backgroundColor: color.code}}
							onClick={() => setSelectedColor(color.id)}
						>
							{selectedColor === color.id && (
								<span className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-gray-200 text-[16px] font-bold'>
									✓
								</span>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Design Section */}
			<div className='colors'>
				<ProductDesc>Select Design</ProductDesc>
				<div className='flex gap-3 flex-wrap sm:flex-nowrap'>
					{designs.map((design, index) => (
						<div
							key={index}
							className={`w-[37px] h-[37px] bg-cover bg-no-repeat rounded-full relative cursor-pointer ${
								selectedDesign === design.id
									? "ring-2 ring-blue-600"
									: ""
							}`}
							style={{backgroundImage: `url(${design})`}}
							onClick={() => setSelectedDesign(design.id)}
						>
							{selectedDesign === design.id && (
								<span className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white text-[16px] font-bold'>
									✓
								</span>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
