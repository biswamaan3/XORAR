"use client";
import React, {useEffect, useState} from "react";
import {PageTitle} from "../misc/Text";
import SingleProduct from "./SingleProduct";
import {handleAddToCart} from "@/lib/utils";
import { TbLocationHeart } from "react-icons/tb";

function FavouriteSection() {
	const [wishlist, setWishlist] = useState([]);

	useEffect(() => {
		const fetchedWishlist =
			JSON.parse(localStorage.getItem("wishlist")) || [];
		setWishlist(fetchedWishlist);
	}, []);

	const moveToCartBtn = (product) => {
		handleAddToCart(product);

		const updatedWishlist = wishlist.filter(
			(item) => item.id !== product.id
		);

		localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
		setTimeout(() => {
			setWishlist(updatedWishlist);
		}, 5000);
	};
	return (
		<div>
			<PageTitle className='pageName mt-5'>Favourites</PageTitle>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center'>
				{wishlist.length === 0 && (
					<p className=' w-full flex justify-center gap-2 flex-col items-center absolute text-center text-lg text-gray-500'>
						<TbLocationHeart className="h-10 w-10 "  />
						No Favourites Yet
					</p>
				)}
				{wishlist.map((product, index) => (
					<SingleProduct
						img={product.thumbnail}
						title={product.title}
						ratings={product.ratings}
						priceShow={false}
						link={`/shop/products/${product.id}`}
						key={index}
						moveToCart
						onClick={() => moveToCartBtn(product)}
					/>
				))}
			</div>
		</div>
	);
}

export default FavouriteSection;
