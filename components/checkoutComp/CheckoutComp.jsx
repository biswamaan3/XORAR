"use client";
import React, {useEffect, useState} from "react";

import {toast} from "react-toastify";
import {PageTitle} from "../misc/Text";
import CartPricing from "../Sections/CartPage/CartPricing";
import {FaArrowRight} from "react-icons/fa";
import UserInfo from "./UserInfo";
const calculateTotalPrice = (items) => {
	return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

function CheckOutCart() {
	const [cartItems, setCartItems] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		country: "",
		address: "",
		state: "",
		city: "",
		pinCode: "",
		landmark: "",
	});
	const [errors, setErrors] = useState({});
	useEffect(() => {
		const items = JSON.parse(localStorage.getItem("cart")) || [];
		setCartItems(items);
		const storedFormData = JSON.parse(localStorage.getItem("formData"));
		if (storedFormData) {
			setFormData(storedFormData);
		}
	}, []);
	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData((prevData) => ({...prevData, [name]: value}));
	};

	// Handle form validation
	const validateForm = () => {
		const newErrors = {};
		const requiredFields = [
			"name",
			"email",
			"phone",
			"country",
			"address",
			"state",
			"city",
			"pinCode",
		];

		requiredFields.forEach((field) => {
			if (!formData[field]) {
				newErrors[field] = `${field} is required`;
				toast.error(`${field.toUpperCase()} is required`, {
					position: "bottom-right",
				});
			}
		});

		// Email validation
		if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
			toast.error("Please enter a valid email address", {
				position: "bottom-right",
			});
		}

		// Phone number validation
		if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
			newErrors.phone = "Please enter a valid phone number";
			toast.error("Please enter a valid phone number", {
				position: "bottom-right",
			});
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = () => {
		try {
			if (validateForm()) {
				localStorage.setItem("formData", JSON.stringify(formData));
				toast.success("Form submitted successfully!");
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleRemoveItem = (id) => {
		const updatedCart = cartItems.filter((item) => item.id !== id);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		setCartItems(updatedCart);
		toast.success("Item removed from cart!");
	};

	const handleQuantityChange = (id, newQuantity) => {
		const updatedCart = cartItems.map((item) =>
			item.id === id ? {...item, quantity: newQuantity} : item
		);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		setCartItems(updatedCart);
	};

	return (
		<>
			<PageTitle className='mt-5 uppercase'>Delivery Details</PageTitle>
			<div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6'>
				<UserInfo
					cartItems={cartItems}
					handleRemoveItem={handleRemoveItem}
					handleQuantityChange={handleQuantityChange}
					formData={formData}
				/>
				<CartPricing
					at='CheckoutForm'
					totalPrice={calculateTotalPrice(cartItems).toFixed(2)}
					deliveryFee={200}
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
