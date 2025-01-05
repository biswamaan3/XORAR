"use client";
import React, {useState} from "react";

const FilterHeader = ({handleOpenFilter}) => {
	const [sortBy, setSortBy] = useState("Most Popular");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const sortingOptions = [
		"Most Popular",
		"Price: Low to High",
		"Price: High to Low",
		"Newest Arrivals",
	];

	const handleSelect = (option) => {
		setSortBy(option);
		setIsDropdownOpen(false); // Close dropdown after selection
	};

	return (
		<div className=' flex flex-col md:flex-row justify-between items-center'>
			{/* Title */}
			<span className='title flex justify-center md:justify-start items-center font-satoshi text-[32px] font-bold leading-[43px] text-[#000] z-[5]'>
				Casual
			</span>

			<div className='w-full md:w-auto flex flex-row justify-between items-center gap-4 mt-4 md:mt-0'>
				<span className='font-satoshi hidden md:block text-[16px] font-normal leading-[21.6px] text-[rgba(0,0,0,0.6)] relative text-left'>
					Showing 1-10 of 100 Products{" "}
				</span>
				<button 
                onClick={handleOpenFilter}
                className='md:hidden  filter-btn flex items-center gap-2  text-black py-2 px-4 rounded-md hover:bg-gray-300'>
                    <img src="/assets/svg/reviews-filter.svg" className="w-5 h-5" alt="" srcset="" />
					Filter

				</button>

				<div className='relative'>
					<button
						className='sort-btn flex items-center'
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					>
						<span className='font-satoshi text-[16px] font-normal leading-[21.6px] text-[rgba(0,0,0,0.6)] relative text-left'>
							Sort by:{" "}
						</span>
						<span className='ml-2  font-satoshi text-[16px] font-medium leading-[21.6px] text-[#000] relative text-left'>
							{sortBy}
						</span>
						<svg
							className={`ml-2 w-4 h-4 transition-transform ${
								isDropdownOpen ? "rotate-180" : ""
							}`}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M19 9l-7 7-7-7'
							/>
						</svg>
					</button>

					{/* Dropdown Menu */}
					{isDropdownOpen && (
						<div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
							{sortingOptions.map((option, index) => (
								<button
									key={index}
									onClick={() => handleSelect(option)}
									className='block w-full px-4 py-2 text-left text-sm hover:bg-gray-100'
								>
									{option}
								</button>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FilterHeader;
