import {Bounce, toast} from "react-toastify";

export const handleAddToCart = async (data) => {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	const index = cart.findIndex((item) => item.id === data.id);

	if (index === -1) {
		cart.push(data);
		toast.success("Added to cart!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
	} else {
		cart.splice(index, 1);
		toast.success("Removed from cart!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
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

	// Get geo data asynchronously
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

export const handleAddToWishlist = async (data) => {
	const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
	const index = wishlist.findIndex((item) => item.id === data.id);

	if (index === -1) {
		wishlist.push(data);
		toast.success("Added to wishlist!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
	} else {
		wishlist.splice(index, 1);
		toast.success("Removed from wishlist!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
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

	// Get geo data asynchronously
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
