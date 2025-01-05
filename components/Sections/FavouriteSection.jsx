"use client";
import React, {useEffect, useState} from "react";
import {PageTitle} from "../misc/Text";
import SingleProduct from "./SingleProduct";
import {handleAddToCart} from "@/lib/utils";
import {TbLocationHeart} from "react-icons/tb";

function FavouriteSection() {
	const [wishlist, setWishlist] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const fetchedWishlist =
			JSON.parse(localStorage.getItem("wishlist")) || [];
		setWishlist(fetchedWishlist);

		const fetchedCart = JSON.parse(localStorage.getItem("cart")) || [];
		setCart(fetchedCart);
	}, []);

	const moveToCartBtn = (product) => {
		handleAddToCart(product);

		const updatedWishlist = wishlist.filter(
			(item) => item.id !== product.id
		);

		localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
		setWishlist(updatedWishlist);

		const updatedCart = [...cart, product];
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		setCart(updatedCart);
	};

	const productAddedInCart = (productId) => {
		return cart.some((item) => item.id === productId);
	};

	return (
		<div>
			<PageTitle className='pageName mt-5'>Favourites</PageTitle>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center'>
				{wishlist.length === 0 && (
					<p className='w-full flex justify-center gap-2 flex-col items-center absolute text-center text-lg text-gray-500'>
						<TbLocationHeart className='h-10 w-10' />
						No Favourites Yet
					</p>
				)}
				{wishlist.map((product) => (
					<SingleProduct
						key={product.id}
						img={product.thumbnail}
						title={product.title}
						ratings={product.rating || 4.5}
						priceShow={false}
						moveToCart={true}
						link={`/shop/products/${product?.slug}`}
						onClick={() => moveToCartBtn(product)}
						productAddedInCart={productAddedInCart(product.id)} // Pass actual function
					/>
				))}
			</div>
		</div>
	);
}

export default FavouriteSection;
