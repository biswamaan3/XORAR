import Stepper from "@/components/checkoutComp/Stepper";
import CheckoutProvider from "@/components/providers/CheckoutProvider";
import Script from "next/script";
import React from "react";

function Layout({children}) {
	return (
		<>
			<CheckoutProvider>
				<Stepper />
				{children}
				<Script
					id='razorpay-checkout-js'
					src='https://checkout.razorpay.com/v1/checkout.js'
				/>
			</CheckoutProvider>
		</>
	);
}

export default Layout;
