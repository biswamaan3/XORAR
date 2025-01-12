import React from "react";

function OrderConfirmed() {
	return (
		<div className='w-full flex flex-col items-center justify-center mt-10'>
			<img
				src='/assets/svg/undraw_order-confirmed_m9e9.svg'
				alt='Order Confirmed'
				className='w-1/4'
			/>
			<h1 className='text-3xl mt-5 font-bold '>Order Confirmed</h1>
			<p className='text-lg mt-5 text-center'>
				Your order has been confirmed and is being processed. You will
				receive an email with your order details shortly.
			</p>
		</div>
	);
}

export default OrderConfirmed;
