"use client";
import React, {useEffect, useState} from "react";
import {PageTitle} from "../misc/Text";
import CartItems from "./CartPage/CartItems";
import CartPricing from "./CartPage/CartPricing";
import {toast} from "react-toastify";
import { useAppProvider } from "../providers/AppProvider";
const calculateTotalPrice = (items) => {
	return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

function CartSection() {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem("cart")) || [];
		setCartItems(items);
	}, []);

	const {updateCard} = useAppProvider();
	const handleRemoveItem = (id) => {
		const updatedCart = cartItems.filter((item) => item.id !== id);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		setCartItems(updatedCart);
		updateCard("decrement");
		toast.success("Item removed from cart!");
	};

	const handleQuantityChange = (id, newQuantity) => {
		const updatedCart = cartItems.map((item) =>
			item.id === id ? {...item, quantity: newQuantity} : item
		);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		setCartItems(updatedCart);
	};
	const deliveryFee = cartItems.length > 0 ? 200 : 0;
	const totalPrice  = calculateTotalPrice(cartItems)+ deliveryFee;

	return (
		<>
			<PageTitle className='mt-5 uppercase'>Your Cart</PageTitle>
			<div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6'>
				<CartItems
					cartItems={cartItems}
					setCartItems={setCartItems}
					handleRemoveItem={handleRemoveItem}
					handleQuantityChange={handleQuantityChange}
				/>
				<CartPricing
					cartItems={cartItems}
					totalPrice={totalPrice}
					deliveryFee={deliveryFee}
				/>
			</div>
		</>
	);
}

export default CartSection;
