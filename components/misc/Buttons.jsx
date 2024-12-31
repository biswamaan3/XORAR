import {FiMinus, FiPlus} from "react-icons/fi";

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
	return (
		<div className='mt-3 w-[93px] font-["Satoshi"] text-[13px] text-[#012F3F] py-0.5 px-2 text-center flex-nowrap rounded-full border-solid border border-[#0090c2] relative overflow-hidden my-0'>
			Move to bag
		</div>
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
			className={`flex items-center gap-8 bg-gray-200 rounded-full ${className}`}
			{...props}
		>
			<FiMinus className='w-6 h-6 cursor-pointer' />

			<span className='text-lg font-semibold'>{quantity}</span>
			<FiPlus className='w-6 h-6 cursor-pointer' />
		</div>
	);
};
