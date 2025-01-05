"use client";
import React, {useState} from "react";
import {FaChevronUp, FaChevronRight} from "react-icons/fa";
import {SizeButton} from "../ProductPage/ProductActions";
import RangeSlider from "./RangeSlider";
import Image from "next/image";
import { useProducts } from "@/components/providers/ProductContext";



// ColorCircle Component (Reusable)
const ColorCircle = ({color}) => (
	<div
		className='w-[37px] h-[37px] rounded-full relative cursor-pointer border-2 border-blue-500'
		style={{backgroundColor: color}}
	/>
);

// CollapsibleSection Component (Reusable)
const CollapsibleSection = ({
	title,
	children,
	isOpen,
	onToggle,
	noChevron = false,
}) => (
	<div className='flex flex-col w-full'>
		<div
			className='flex justify-between items-center w-full cursor-pointer'
			onClick={onToggle}
		>
			<span className='font-satoshi text-xl font-bold text-black'>
				{title}
			</span>
			{!noChevron && (
				<Image
					src='/assets/svg/chevron_top.svg'
					width={15}
					height={10}
					className={` transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
				// <FaChevronUp
				//   className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
				// />
			)}
		</div>
		<div
			className={`overflow-hidden transition-all duration-600 ${
				isOpen ? "max-h-[500px] mt-3" : "duration-600 max-h-0"
			}`}
		>
			{isOpen && children}
		</div>
	</div>
);

const colors = ["#2e96d9", "#d9ad6d", "#0242ac"];

function FilterBar() {
	const [openSections, setOpenSections] = useState({
		price: false,
		colors: false,
		size: false,
		dressStyle: false,
	});

	const toggleSection = (section) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

  const { filters, setFilters, loading } = useProducts();
  const [priceRange, setPriceRange] = useState(filters.priceRange || { min: 0, max: 100 });

  const handlePriceChange = (min, max) => {
    setPriceRange({ min, max });
    setFilters((prev) => ({ ...prev, priceRange: { min, max } }));
  };

  const handleCategoryChange = (category) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter((item) => item !== category)
      : [...filters.category, category];
    setFilters((prev) => ({ ...prev, category: newCategories }));
  };

  const handleSizeChange = (size) => {
    const newSizes = filters.size.includes(size)
      ? filters.size.filter((item) => item !== size)
      : [...filters.size, size];
    setFilters((prev) => ({ ...prev, size: newSizes }));
  };

  const handleColorChange = (color) => {
    const newColors = filters.color.includes(color)
      ? filters.color.filter((item) => item !== color)
      : [...filters.color, color];
    setFilters((prev) => ({ ...prev, color: newColors }));
  };

  const handleTypeChange = (type) => {
    const newTypes = filters.type.includes(type)
      ? filters.type.filter((item) => item !== type)
      : [...filters.type, type];
    setFilters((prev) => ({ ...prev, type: newTypes }));
  };



	return (
		<div className='flex flex-col p-4 gap-4 mx-auto rounded-lg border border-[rgba(0,0,0,0.1)] overflow-hidden'>
			<div className='flex justify-between items-center w-full'>
				<span className='w-full flex justify-between items-center font-satoshi text-xl font-bold text-black'>
					Filters
					<img
						src='/assets/svg/reviews-filter.svg'
						className='w-5 h-5 opacity-40'
						alt=''
						srcset=''
					/>
				</span>
			</div>
			<div className='border-t border-gray-300' />

			{/* Dress Style Section (No Chevron, Simple List) */}
			<div className='flex flex-col gap-5 w-full'>
				<div className='flex flex-col gap-2 w-full'>
					{["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
						(item, idx) => (
							<div
								className='flex justify-between items-center w-full'
								key={idx}
							>
								<span className='text-base text-gray-600'>
									{item}
								</span>
								<Image
									src='/assets/svg/chevron_top.svg'
									width={15}
									height={10}
									className='rotate-90 opacity-60'
								/>
							</div>
						)
					)}
				</div>
			</div>
			<div className='border-t border-gray-300 mt-2' />

			{/* Price Section */}
			<CollapsibleSection
				title='Price'
				isOpen={openSections.price}
				onToggle={() => toggleSection("price")}
			>
				<RangeSlider />
			</CollapsibleSection>

			<div className='border-t border-gray-300 mt-2' />

			<CollapsibleSection
				title='Colors'
				isOpen={openSections.colors}
				onToggle={() => toggleSection("colors")}
			>
				<div className='flex flex-wrap gap-3 mt-3 w-full'>
					{colors.map((color, index) => (
						<ColorCircle key={index}  color={color} />
					))}
				</div>
			</CollapsibleSection>

			<div className='border-t border-gray-300 mt-2' />

			{/* Size Section */}
			<CollapsibleSection
				title='Size'
				isOpen={openSections.size}
				onToggle={() => toggleSection("size")}
			>
				<div className='flex gap-4 flex-wrap justify-start'>
					{["Small", "Medium", "Large", "X-Large"].map(
						(size, index) => (
							<SizeButton key={index} size={size} />
						)
					)}
				</div>
			</CollapsibleSection>

			<div className='border-t border-gray-300 mt-2' />
			<div className='flex flex-col gap-5 w-full'>
				<span className='font-satoshi text-xl font-bold text-black'>
					Dress Style
				</span>
				<div className='flex flex-col gap-2 w-full'>
					{["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
						(item, idx) => (
							<div
								className='flex justify-between items-center w-full'
								key={idx}
							>
								<span className='text-base text-gray-600'>
									{item}
								</span>
								<Image
									src='/assets/svg/chevron_top.svg'
									width={15}
									height={10}
									className='rotate-90 opacity-60'
								/>
							</div>
						)
					)}
				</div>
			</div>
			{/* Apply Filters Button */}
			<button className='w-full bg-[#012f3f] text-white font-medium text-lg rounded-full py-3'>
				Apply Filters
			</button>
		</div>
	);
}

export default FilterBar;
