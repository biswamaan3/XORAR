"use client";

import CheckOutCart from "@/components/checkoutComp/CheckoutComp";
import OrderConfirmed from "@/components/checkoutComp/OrderConfirmed";
import Pricing from "@/components/checkoutComp/Pricing";
import Loader from "@/components/Loader";
import {PageTitle} from "@/components/misc/Text";
import {useCheckout} from "@/components/providers/CheckoutProvider";
import React from "react";

function page() {
	const {step, loading} = useCheckout();
	return (
		<div className='container relative w-[90%] mx-auto'>
			{loading && <Loader />}
			{step === 1 && <CheckOutCart />}
			{step === 2 && <Pricing />}
			{step === 3 && <OrderConfirmed />}
		</div>
	);
}

export default page;
