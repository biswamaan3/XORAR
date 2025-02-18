import {LiaCartArrowDownSolid} from "react-icons/lia";
import CartItems from "./CartItems";
import Link from "next/link";

export default function CartPricing({
	totalPrice,
	subtotal,
	discount,
	deliveryFee,
	at,
	...props
}) {
	const subtotalValue = props.cartItems.reduce( (acc, item) => acc + item.price * item.quantity, 0);
	return (
		<div className=' flex flex-col gap-6 p-6 rounded-[20px] border border-[rgba(0,0,0,0.1)] mx-auto w-full'>
			{at === "CheckoutForm" && (
				<CartItems
					cartItems={props.cartItems}
					setCartItems={props.setCartItems}
					handleRemoveItem={props.handleRemoveItem}
					handleQuantityChange={props.handleQuantityChange}
				/>
			)}

			{at !== "CheckoutForm" && (
				<h2 className='text-2xl font-bold text-black'>Order Summary</h2>
			)}

			<div className='summary-details flex flex-col gap-5 w-full'>
				<div className='flex justify-between items-center w-full'>
					<span className='text-lg text-[rgba(0,0,0,0.6)]'>
						Subtotal
					</span>
					<span className='text-lg font-bold text-black'>
						{process.env.NEXT_PUBLIC_CURRENCY_SYMBOL} {subtotalValue}
					</span>
				</div>
				<div className='flex justify-between items-center w-full'>
						<span className='text-lg text-[rgba(0,0,0,0.6)]'>
							Delivery Charges
						</span>
						<span className='text-lg font-bold '>
						{process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}0 {"(Free Delivery)"}
						</span>
					</div>
				{discount && (
					<div className='flex justify-between items-center w-full'>
						<span className='text-lg text-[rgba(0,0,0,0.6)]'>
							Discount (-20%)
						</span>
						<span className='text-lg font-bold text-red-500'>
							-₹113
						</span>
					</div>
				)}

				

				<hr className='border-t border-gray-200 w-full' />

				<div className='flex justify-between items-center w-full'>
					<span className='text-lg font-normal text-black'>
						Total
					</span>
					<span className='text-2xl font-bold text-black'>
						{process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}{" "}
						{parseFloat(totalPrice, 10)}
					</span>
				</div>
			</div>

			<div className='promo-code flex flex-row gap-3 sm:gap-5 items-center w-full'>
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
					className='apply-button bg-[#012f3f] text-white text-base font-medium rounded-full px-6 py-3 sm:mt-0'
					aria-label='Apply promo code'
				>
					Apply
				</button>
			</div>

			{at !== "CheckoutForm" && props?.cartItems?.length > 0 && (
				<Link
					href={`/checkout`}
					className='checkout-button flex items-center gap-4 justify-center bg-[#012f3f] text-white text-base font-medium rounded-full w-full py-3'
					aria-label='Go to Checkout'
				>
					Go to Checkout
					<img
						src='/assets/svg/Right_arrow.svg'
						alt='Promo code'
						className='w-4 h-4'
					/>
				</Link>
			)}
		</div>
	);
}
