"use client";
import React from "react";

import {PageTitle} from "../misc/Text";
import CartPricing from "../Sections/CartPage/CartPricing";
import { useCheckout } from "../providers/CheckoutProvider";
import PaymentPage from "./PaymentPage";
import Loader from "../Loader";


function Pricing() {
	    const {
            cartItems,
            setCartItems,
            formData,
            handleRemoveItem,
            handleQuantityChange,
            totalValue,
            deliveryFee,
            handleInputChange,
			loading
        } = useCheckout();
    

	return (
		<>
			<PageTitle className='mt-5 uppercase'>Payment</PageTitle>
			
			<div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6'>
				<PaymentPage/>
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

export default Pricing;
