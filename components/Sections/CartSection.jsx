import React from "react";
import {PageTitle} from "../misc/Text";
import CartItems from "./CartPage/CartItems";
import CartPricing from "./CartPage/CartPricing";

function CartSection() {
	return (
		<>
			<PageTitle className='mt-5 uppercase'>Your Cart</PageTitle>
			<div className='flex flex-1 items-start justify-between '>
				<CartItems />
				<CartPricing />
			</div>
		</>
	);
}

export default CartSection;
