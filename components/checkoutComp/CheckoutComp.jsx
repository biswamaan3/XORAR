"use client";
import React, {useEffect, useState} from "react";

import {toast} from "react-toastify";
import {PageTitle} from "../misc/Text";
import CartPricing from "../Sections/CartPage/CartPricing";
import UserInfo from "./UserInfo";
import {useCheckout} from "../providers/CheckoutProvider";

function CheckOutCart() {
	const {
		cartItems,
		setCartItems,
		formData,
		handleRemoveItem,
		handleQuantityChange,
		totalValue,
		deliveryFee,
		handleInputChange,
		handleSubmit,
	} = useCheckout();

	return (
		<>
			<PageTitle className='mt-5 uppercase'>Delivery Details</PageTitle>
			<div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6'>
				<UserInfo
					cartItems={cartItems}
					handleInputChange={handleInputChange}
					handleRemoveItem={handleRemoveItem}
					handleQuantityChange={handleQuantityChange}
					formData={formData}
					handleSubmit={handleSubmit}
				/>
				<CartPricing
					at='CheckoutForm'
					totalPrice={totalValue}
					deliveryFee={deliveryFee}
					cartItems={cartItems}
					setCartItems={setCartItems}
					handleRemoveItem={handleRemoveItem}
					handleQuantityChange={handleQuantityChange}
				/>
			</div>
		</>
	);
}

export default CheckOutCart;
