"use client";
import {FiMinus, FiPlus} from "react-icons/fi";
import {useAppContext} from "../providers/AppProvider";

export const ViewMoreButton = ({
	parentClass = "",
	textClass = "",
	children,
	...props
}) => {
	return (
		<button className={`frame-36 ${parentClass}`} {...props}>
			<span className={`view-all ${textClass}`}>{children}</span>
		</button>
	);
};

export function MoveToBag() {
	const {loading} = useAppContext();
	return (
		<button className='mt-3 w-[93px] font-["Satoshi"] text-[13px] text-[#012F3F] py-0.5 px-2 text-center flex-nowrap rounded-full border-solid border border-[#0090c2] relative overflow-hidden my-0'>
			Move to bag
		</button>
	);
}
export const QuantityButton = ({
	quantity = 1,
	onChange,
	className = "py-3 px-4",
	children,
	...props
}) => {
	return (
		<div
			className={`flex min-w-100 max-w-[150px] items-center gap-8 bg-gray-200 rounded-full ${className}`}
			{...props}
		>
			<FiMinus className='w-6 h-6 cursor-pointer' />
			<span className='text-lg font-semibold'>{quantity}</span>
			<FiPlus className='w-6 h-6 cursor-pointer' />
		</div>
	);
};

export const StarRating = ({ratings}) => {
	const fullStars = Math.floor(ratings);
	const halfStars = ratings % 1 >= 0.5 ? 1 : 0;
	const emptyStars = 5 - fullStars - halfStars;

	return (
		<div className='flex items-start space-x-1.5 z-10'>
			{Array.from({length: fullStars}).map((_, index) => (
				<img
					key={`full-${index}`}
					src='/assets/svg/Star_full.svg'
					alt='star'
					className='w-5 h-5'
				/>
			))}

			{/* Half star */}
			{halfStars === 1 && (
				<img
					src='/assets/svg/Star_half.svg'
					alt='half star'
					className='w-5 h-5'
				/>
			)}

			{/* Empty stars */}
			{Array.from({length: emptyStars}).map((_, index) => (
				<span key={`empty-${index}`} className='w-5 h-5 ' />
			))}
		</div>
	);
};
