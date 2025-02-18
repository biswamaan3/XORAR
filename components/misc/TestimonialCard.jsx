import {StarRating} from "./Buttons";

export const TestimonialCard = ({
	name,
	className = "",
	text,
	stars,
	date="February 1, 2025",
	withDate,
	withMenu,
	ratings,
	...props
}) => (
	<div
		className={`flex flex-col min-w-[350px] min-h-[240px] p-[28px] rounded-[20px] border border-[rgba(0,0,0,0.1)] transition-all duration-300 ${className}`}
		{...props}
	>
		<div className='flex items-start cursor-pointer justify-between'>
			<div className='flex items-start mb-[15px]'>
				<StarRating ratings={ratings} />
			</div>
			{withMenu && (
				<img src='/assets/svg/menuIcon.svg' className='text-gray-600' />
			)}
		</div>

		<div className='flex items-center mb-[12px]'>
			<span className='font-bold text-[20px] text-[#000]'>{name}</span>
			<img src='/assets/svg/checkIcon.svg' className=' ml-[8px]' />
		</div>
		<p className='text-[16px] text-[rgba(0,0,0,0.6)]'>{text}</p>
		{withDate && (
			<span
				className=" font-['Satoshi'] text-[16px] font-semibold  text-[rgba(0,0,0,0.6)] relative text-left
        mt-5
        z-[15]"
			>
				Posted on {date}
			</span>
		)}
	</div>
);
