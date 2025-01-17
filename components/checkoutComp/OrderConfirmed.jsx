import Link from "next/link";
import React from "react";
import {MdNavigateNext} from "react-icons/md";

function OrderConfirmed() {
	return (
		<div className='w-full flex flex-col items-center justify-center mt-10'>
			<img
				src='/assets/svg/undraw_order-confirmed_m9e9.svg'
				alt='Order Confirmed'
				className='w-1/4'
			/>
			<h1 className='text-3xl mt-5 font-bold '>Order Confirmed</h1>
			{/* <p className="text-lg text-center mt-3 font-semibold">Thank you for Shopping with Us!</p> */}
			<p className='text-lg mt-5 text-center'>
				<b>Thank you for Shopping with Us!</b> Your order has been
				confirmed and is being processed. You will receive an email with
				your order details shortly.
			</p>

			<Link
				href={"/product/all"}
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
    w-[300px] max-w-5/6 flex items-center  justify-center mt-8
	group hover:shadow-lg transition duration-300 ease-in-out
    disabled:opacity-50 disabled:cursor-not-allowed
     focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-4 me-2 mb-2 noColorChange:bg-blue-600 noColorChange:hover:bg-blue-700 focus:outline-none noColorChange:focus:ring-blue-800'
			>
				Back to Shopping <MdNavigateNext className='w-6 h-6' />
			</Link>
		</div>
	);
}

export default OrderConfirmed;
