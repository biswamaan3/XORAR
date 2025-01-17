"use client";
import axios from "axios";
import {createContext, useContext, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useAppProvider} from "./AppProvider";
export const CheckoutContext = createContext();

const CheckoutProvider = ({children}) => {
	const {handleRemoveCart} = useAppProvider();
	const [step, setStep] = useState(1);
	const [totalValue, setTotalValue] = useState(0);
	const [deliveryFee, setDeliveryFee] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	const [paymentType, setPaymentType] = useState(null);
	const [orderStatus, setOrderStatus] = useState(null);
	const [loading, setLoading] = useState(false);
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
		const urlParams = new URLSearchParams(window.location.search);
		const buynow = urlParams.get("buyNow");
		if (buynow) {
			const product = JSON.parse(localStorage.getItem("buyNow")) || [];
			setCartItems(product);
		} else {
			const items = JSON.parse(localStorage.getItem("cart")) || [];
			setCartItems(items);
		}

		const storedFormData = JSON.parse(localStorage.getItem("formData"));
		if (storedFormData) {
			setFormData(storedFormData);
		}
	}, []);
	useEffect(() => {
		var total = cartItems.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		);

		setTotalValue(total);
	}, [cartItems, deliveryFee]);

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData((prevData) => ({...prevData, [name]: value}));
	};

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

		// Validate required fields
		requiredFields.forEach((field) => {
			if (!formData[field]) {
				newErrors[field] = `${field} is required`;
			}
		});

		// Validate email format
		if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		setErrors(newErrors);
		console.log("errors : ", newErrors);
		if (Object.keys(newErrors).length > 0) {
			toast.error("Please fix the highlighted errors", {
				position: "bottom-right",
			});
		}
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = () => {
		try {
			if (validateForm()) {
				localStorage.setItem("formData", JSON.stringify(formData));
				setStep(2);
			}
		} catch (error) {
			console.error("Form submission error:", error);
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

	const handleBack = () => {
		setPaymentType(null);
		if (step > 1) {
			setStep(step - 1);
		}
		return;
	};

	const handleConfirmOrder = async (e) => {
		setLoading(true);
		if (paymentType === null) {
			alert("Please select a payment method");
			setLoading(false);
			return;
		}
		if (paymentType === "cod") {
			e.preventDefault();
			try {
				setLoading(true);
				const order = Math.floor(10000000 + Math.random() * 90000000);

				const response = await axios.post(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order`,
					{
						orderId: order,
						paymentType: "COD",
						totalValue,
						orderDetails: cartItems,
						...formData,
						paymentStatus: "pending",
					}
				);

				if (response.status === 200 || response.status === 201) {
					setOrderStatus(response.data.status);
					setStep(3);
					toast.success("Order placed successfully!");
					handleRemoveCart();
				} else if (response.status === 400) {
					toast.error(
						response.data.message || "Invalid order details"
					);
				} else {
					toast.error("Unexpected error occurred. Please try again.");
				}
			} catch (error) {
				if (error.response) {
					toast.error(
						error.response.data.message ||
							"Error placing order. Please try again."
					);
				} else {
					toast.error("Network error. Please check your connection.");
				}
			} finally {
				setLoading(false);
			}
		}
		if (paymentType === "razorpay") {
			if (paymentType === "razorpay") {
				e.preventDefault();
				try {
					const orderID = await createOrderId();
					if (!orderID) {
						throw new Error("Failed to create order ID");
					}

					const options = {
						key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
						amount: parseFloat(totalValue) * 100,
						currency: "INR",
						name: "Xorar",
						description: "description",
						order_id: orderID,
						handler: async function (response) {
							const data = {
								orderCreationId: orderID,
								razorpayPaymentId: response.razorpay_payment_id,
								razorpayOrderId: response.razorpay_order_id,
								razorpaySignature: response.razorpay_signature,
							};

							const result = await fetch(
								"/api/products/order/verify",
								{
									method: "POST",
									body: JSON.stringify(data),
									headers: {
										"Content-Type": "application/json",
									},
								}
							);

							const res = await result.json();
							setLoading(true);
							if (res.isOk) {
								setOrderStatus("success");
								try {
									const createOrder = await axios.post(
										`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order`,
										{
											orderId: orderID,
											paymentType: "Razorpay",
											totalValue,
											orderDetails: cartItems,
											...formData,
											paymentStatus: "success",
										}
									);
									if (createOrder.status === 200) {
										setStep(3);
										handleRemoveCart();
									} else {
										toast.error(
											"Order created but failed to save in database. Please contact support."
										);
										alert(
											"Order created but failed to save in database. Please contact support."
										);
									}
								} catch (orderError) {
									console.error(
										"Error creating order:",
										orderError
									);
									alert(orderError.message);
								} finally {
									setLoading(false);
								}
							} else {
								setOrderStatus("failed");
								toast.error(
									"Failed to verify payment. Please try again."
								);
								alert(res.message);
							}
						},
						prefill: {
							name: formData.name,
							email: formData.email,
						},
						theme: {
							color: "#3399cc",
						},
					};

					const paymentObject = new window.Razorpay(options);

					paymentObject.on("payment.failed", function (response) {
						console.error("Payment failed:", response.error);
						setOrderStatus("failed");
						alert(
							`Payment failed: ${response.error.description}. Please try again or contact support.`
						);
					});

					paymentObject.open();
				} catch (error) {
					console.error("Error during payment process:", error);
					alert(
						"There was an issue with the payment process. Please try again later."
					);
				} finally {
					setLoading(false);
				}
			}
		}
	};

	const createOrderId = async () => {
		try {
			const response = await fetch("/api/products/order", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					amount: parseFloat(totalValue) * 100,
					currency: "INR",
				}),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			return data.orderId;
		} catch (error) {
			console.error(
				"There was a problem with your fetch operation:",
				error
			);
		}
	};

	return (
		<CheckoutContext.Provider
			value={{
				loading,
				step,
				setStep,
				totalValue,
				setTotalValue,
				deliveryFee,
				setDeliveryFee,
				cartItems,
				setCartItems,
				formData,
				setFormData,
				errors,
				setErrors,
				handleInputChange,
				validateForm,
				handleSubmit,
				handleRemoveItem,
				handleQuantityChange,
				paymentType,
				setPaymentType,
				handleBack,
				handleConfirmOrder,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
};

export default CheckoutProvider;

export const useCheckout = () => {
	return useContext(CheckoutContext);
};
