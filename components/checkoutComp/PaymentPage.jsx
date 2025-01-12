// pages/payment.tsx
import {useState} from "react";
import {BiQrScan} from "react-icons/bi";
import {FaCreditCard, FaCashRegister} from "react-icons/fa";
import UserDetailsCard from "./UserDetail";
import {useCheckout} from "../providers/CheckoutProvider";
import Loader from "../Loader";

const PaymentPage = () => {
	const {
		paymentType,
		setPaymentType,
		handleBack,
		handleConfirmOrder,
		loading,
	} = useCheckout();

	return (
		<div className=' w-full flex flex-col '>
		
			<UserDetailsCard />
			<h1 className='text-2xl font-bold mb-6'>Select Payment Method</h1>

			<div className='w-full  space-y-4'>
				<div
					className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition 
  ${
		paymentType === "razorpay"
			? "bg-blue-500 text-white border-blue-500"
			: "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
  }`}
					onClick={() => setPaymentType("razorpay")}
				>
					<div className='flex items-center gap-4'>
						<div className='text-xl flex gap-2 items-center'>
							<FaCreditCard />
						</div>
						<span className='font-medium'>
							Credit/Debit Card/UPI/Paytm using Razorpay
						</span>
					</div>
					{paymentType === "razorpay" && (
						<div className='text-sm font-semibold'>Selected</div>
					)}
				</div>

				<div
					className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition 
  ${
		paymentType === "cod"
			? "bg-blue-500 text-white border-blue-500"
			: "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
  }`}
					onClick={() => setPaymentType("cod")}
				>
					<div className='flex items-center gap-4'>
						<div className='text-xl'>
							<FaCashRegister />
						</div>
						<span className='font-medium'>Cash on Delivery</span>
					</div>
					{paymentType === "cod" && (
						<div className='text-sm font-semibold'>Selected</div>
					)}
				</div>
			</div>

			<div className='flex justify-between w-full  mt-6'>
				<button
					className='px-6 py-4 w-2/5 text-lg font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition'
					onClick={handleBack}
				>
					Back
				</button>
				<button
					className={`px-6 py-4 w-2/5 text-lg font-medium rounded-lg transition ${
						paymentType
							? "bg-blue-500 text-white hover:bg-blue-600"
							: "bg-gray-300 text-gray-500 cursor-not-allowed"
					}`}
					onClick={handleConfirmOrder}
					disabled={!paymentType || loading}
				>
					Confirm Order
				</button>
			</div>
		</div>
	);
};

export default PaymentPage;
