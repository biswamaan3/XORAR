"use client";

import React, {useState, useEffect} from "react";

const RangeSlider = ({onChange, min = 0, max = 10000}) => {
	const [minPrice, setMinPrice] = useState(min);
	const [maxPrice, setMaxPrice] = useState(max);
	const [minThumb, setMinThumb] = useState(0);
	const [maxThumb, setMaxThumb] = useState(0);

	const handleMinInput = (e) => {
		const value = Math.max(Number(e.target.value), min); // Ensure minPrice doesn't go below `min`
		const maxLimit = Math.min(value + value * 0.1, maxPrice); // Make sure min doesn't exceed max
		setMinPrice(Math.min(value, maxLimit));
	};

	const handleMaxInput = (e) => {
		const value = Math.min(Number(e.target.value), max); // Ensure maxPrice doesn't exceed `max`
		const minLimit = Math.max(value - value * 0.1, minPrice); // Ensure max doesn't go below min
		setMaxPrice(Math.max(value, minLimit));
	};

	useEffect(() => {
		setMinThumb(((minPrice - min) / (max - min)) * 100);
		setMaxThumb(100 - ((maxPrice - min) / (max - min)) * 100);

		const timer = setTimeout(() => {
      console.log('Updated Price Range:', { min: minPrice, max: maxPrice });  // Log updated price range
      onChange({min: minPrice, max: maxPrice});
		}, 300);

		return () => clearTimeout(timer);
	}, [minPrice, maxPrice]);
	return (
		<div className='relative max-w-xl w-full mt-3 '>
			<div>
				<input
					type='range'
					step='100'
					min={min}
					max={max}
					value={minPrice}
					onInput={handleMinInput}
					className='absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer'
				/>
				<input
					type='range'
					step='100'
					min={min}
					max={max}
					value={maxPrice}
					onInput={handleMaxInput}
					className='absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer'
				/>
				<div className='relative z-10 h-2'>
					<div className='absolute left-0 right-0 top-0 bottom-0 bg-gray-200 rounded-md'></div>
					<div
						className='absolute top-0 bottom-0 bg-[#012F3F] rounded-md'
						style={{left: `${minThumb}%`, right: `${maxThumb}%`}}
					></div>
					<div
						className='absolute w-5 h-5 bg-[#012F3F] rounded-full -mt-2'
						style={{
							left: `${minThumb}%`,
							transform: "translateX(-50%)",
						}}
					></div>
					<div
						className='absolute w-5 h-5 bg-[#012F3F] rounded-full -mt-2'
						style={{
							right: `${maxThumb}%`,
							transform: "translateX(50%)",
						}}
					></div>
				</div>
			</div>

			{/* Price Input Fields */}
			<div className='flex items-center justify-between pt-5 space-x-4 text-sm text-gray-700'>
				<div>
					<input
						type='text'
						maxLength='7'
						value={`₹${minPrice}`}
						onChange={(e) =>
							setMinPrice(validateMinPrice(e.target.value))
						}
						className='w-20 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none'
					/>
				</div>
				<div>
					<input
						type='text'
						maxLength='7'
						value={`₹${maxPrice}`}
						onChange={(e) =>
							setMaxPrice(validateMaxPrice(e.target.value))
						}
						className='w-20 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none'
					/>
				</div>
			</div>
		</div>
	);
};

export default RangeSlider;
