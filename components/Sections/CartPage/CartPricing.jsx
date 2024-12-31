import React from "react";

export default function CartPricing() {
	return (
		<div className='cart-pricing-container flex w-full  p-6 flex-col gap-6 items-start rounded-[20px] border border-[rgba(0,0,0,0.1)] mx-auto'>
			<h2 className='text-2xl font-bold text-black'>Order Summary</h2>
			<div className='summary-details flex flex-col gap-5 w-full'>
				<div className='flex justify-between items-center w-full'>
					<span className='text-lg text-[rgba(0,0,0,0.6)]'>
						Subtotal
					</span>
					<span className='text-lg font-bold text-black'>$565</span>
				</div>
				<div className='flex justify-between items-center w-full'>
					<span className='text-lg text-[rgba(0,0,0,0.6)]'>
						Discount (-20%)
					</span>
					<span className='text-lg font-bold text-red-500'>
						-$113
					</span>
				</div>
				<div className='flex justify-between items-center w-full'>
					<span className='text-lg text-[rgba(0,0,0,0.6)]'>
						Delivery Fee
					</span>
					<span className='text-lg font-bold text-black'>$15</span>
				</div>
				<hr className='border-t border-gray-200 w-full' />
				<div className='flex justify-between items-center w-full'>
					<span className='text-lg font-normal text-black'>
						Total
					</span>
					<span className='text-2xl font-bold text-black'>$467</span>
				</div>
			</div>
			<div className='promo-code flex gap-3 items-center w-full'>
				<div className='promo-input flex items-center gap-3 bg-gray-100 rounded-full w-full px-4 py-3'>
					<img
						src='/assets/svg/Promo_Icon.svg'
						alt='Promo code'
						className='w-5 h-5 ml-2'
					/>
					<input
						type='text'
						placeholder='Add promo code'
						className='bg-transparent border-none w-full outline-none text-gray-600'
						aria-label='Add promo code'
					/>
				</div>
				<button
					className='apply-button bg-[#012f3f] text-white text-base font-medium rounded-full px-6 py-3'
					aria-label='Apply promo code'
				>
					Apply
				</button>
			</div>
			<button
				className='checkout-button flex items-center gap-4 justify-center bg-[#012f3f] text-white text-base font-medium rounded-full w-full py-3'
				aria-label='Go to Checkout'
			>
				Go to Checkout
        <img
						src='/assets/svg/Right_arrow.svg'
						alt='Promo code'
						className='w-4 h-4'
					/>
			</button>
		</div>
	);
}
