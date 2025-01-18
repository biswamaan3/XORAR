"use client";
// Refactor AppProvider.jsx
import {createContext, useContext, useState, useEffect} from "react";
import {Bounce, toast} from "react-toastify";

export const AppContext = createContext();

const fetchUserDetails = async () => {
	const getFromLocalStorage = localStorage.getItem("geodata");
	if (getFromLocalStorage) {
		return JSON.parse(getFromLocalStorage);
	} else {
		const geodata = await fetch("https://www.iplocate.io/api/lookup");
		const data = await geodata.json();
		localStorage.setItem("geodata", JSON.stringify(data));
		return data;
	}
};

const addToCart = async ({data, country, city, type, userId}) => {
	const endpoint =
		type === "cart"
			? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/external/product/addToCart`
			: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/external/product/wishlist`;

	const response = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			user_string: userId,
			productId: data.id,
			productName: data.title,
			quantity: data.quantity,
			country,
			city,
		}),
	});

	if (!response.ok) {
		console.error(`Failed to add to ${type}: ${response.statusText}`);
		return null;
	}
	return await response.json();
};

export const AppProvider = ({children}) => {
	const [totalSaved, setTotalSaved] = useState({
		cart: 0,
		wishlist: 0,
	});

	useEffect(() => {
		const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
		const wishlistItems =
			JSON.parse(localStorage.getItem("wishlist")) || [];

		setTotalSaved({
			cart: cartItems?.length,
			wishlist: wishlistItems?.length,
		});
	}, []);

	const updateCard = (type) => {
		if (type === "increment") {
			setTotalSaved((prev) => ({...prev, cart: prev.cart + 1}));
		}
		if (type === "decrement") {
			setTotalSaved((prev) => ({...prev, cart: prev.cart - 1}));
		}
	};

	const updateWishlist = (type) => {
		if (type === "increment") {
			setTotalSaved((prev) => ({...prev, wishlist: prev.wishlist + 1}));
		}
		if (type === "decrement") {
			setTotalSaved((prev) => ({...prev, wishlist: prev.wishlist - 1}));
		}
	};

	const handleAddToCart = async (data) => {
		const cart = JSON.parse(localStorage.getItem("cart")) || [];
		const index = cart.findIndex((item) => item.id === data.id);

		if (index === -1) {
			cart.push(data);
			updateCard("increment");
			toast.success("Added to cart!", {
				position: "top-center",
				autoClose: 5000,
				theme: "colored",
				transition: Bounce,
			});
		} else {
			if(data.dontRemove){
				return;
			}
			cart.splice(index, 1);
			updateCard("decrement");
			toast.success("Removed from cart!", {
				position: "top-center",
				autoClose: 5000,
				theme: "colored",
				transition: Bounce,
			});
		}

		let userId = localStorage.getItem("userId");
		if (!userId) {
			userId = Math.floor(Math.random() * 100000);
			localStorage.setItem("userId", userId);
		}
		localStorage.setItem("cart", JSON.stringify(cart));

		const geoData = await fetchUserDetails();
		const response = await addToCart({
			data,
			type: "cart",
			country: geoData.subdivision,
			city: geoData.city,
			userId,
		});

		if (response && response.status === 200) {
			console.log("Added to cart successfully");
		} else {
			console.log(
				"Failed to add to cart",
				response?.message || "Unknown error"
			);
		}
	};

	const handleRemoveCart = ()=>{
		localStorage.removeItem("cart");
		setTotalSaved((prev) => ({...prev, cart: 0}));
	}

	const handleAddToWishlist = async (data) => {
		const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
		const index = wishlist.findIndex((item) => item.id === data.id);

		if (index === -1) {
			wishlist.push(data);
			updateWishlist("increment");
			toast.success("Added to wishlist!", {
				position: "top-center",
				autoClose: 5000,
				theme: "colored",
				transition: Bounce,
			});
		} else {
			wishlist.splice(index, 1);
			updateWishlist("decrement");
			toast.success("Removed from wishlist!", {
				position: "top-center",
				autoClose: 5000,
				theme: "colored",
				transition: Bounce,
			});
		}

		let userId = localStorage.getItem("userId");
		if (!userId) {
			userId = Math.floor(Math.random() * 100000);
			localStorage.setItem("userId", userId);
		}
		localStorage.setItem("wishlist", JSON.stringify(wishlist));

		const geoData = await fetchUserDetails();
		const response = await addToCart({
			data,
			type: "wishlist",
			country: geoData.subdivision,
			city: geoData.city,
			userId,
		});

		if (response && response.status === 200) {
			console.log("Added to wishlist successfully");
		} else {
			console.log(
				"Failed to add to wishlist",
				response?.message || "Unknown error"
			);
		}
	};

	return (
		<AppContext.Provider
			value={{
				totalSaved,
				updateCard,
				updateWishlist,
				handleAddToCart,
				handleAddToWishlist,
				handleRemoveCart
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppProvider = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppProvider must be used within AppProvider");
	}
	return context;
};
