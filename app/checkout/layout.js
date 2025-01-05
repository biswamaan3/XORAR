import Script from "next/script";
import React from "react";

function Layout({children}) {
	return (
		<>
			{children}
			<Script
				id='razorpay-checkout-js'
				src='https://checkout.razorpay.com/v1/checkout.js'
			/>
		</>
	);
}

export default Layout;
