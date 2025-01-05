"use client";
import React, {useState, useEffect} from "react";
import ProductOption from "./ProductOption";
import ProductActions from "./ProductActions";
import {Separator} from "../../misc/Text";
import {BigStarRating, StarRating} from "@/components/misc/Buttons";
import {handleAddToCart, handleAddToWishlist} from "@/lib/utils";
import {Bounce, toast} from "react-toastify";
import {IoHeartCircleOutline} from "react-icons/io5";

function HeartIconWithTooltip({onClick, isInWishlist}) {
	return (
		<div className='group'>
		
			<IoHeartCircleOutline
				onClick={onClick}
				data-tooltip-target='tooltip-default'
				className={`${
					isInWishlist ? "text-[#ff3333]" : "text-gray-400"
				} text-[24px] group md:text-[32px] right-0 lg:text-[40px] cursor-pointer`}
			/>
		</div>
	);
}

export default function ProductDescription({product}) {
	const [selectedSize, setSelectedSize] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [selectedColor, setSelectedColor] = useState(null);
	const [selectedDesign, setSelectedDesign] = useState(null);

	const [cart, setCart] = useState(
		JSON.parse(localStorage?.getItem("cart")) || []
	);
	const [wishlist, setWishlist] = useState(
		JSON.parse(localStorage?.getItem("wishlist")) || []
	);

	useEffect(() => {
		const existingProduct = cart.find((item) => item.id === product.id);

		if (existingProduct) {
			setSelectedSize(existingProduct.size);
			setQuantity(existingProduct.quantity);
			setSelectedColor(existingProduct.color);
			setSelectedDesign(existingProduct?.design);
		}
	}, [cart, product.id]);

	const handleAddToWishlistBtn = async () => {
		if (
			!selectedSize ||
			!selectedColor ||
			(product.design && !selectedDesign)
		) {
			toast.error(
				"Please select size, color, and design before adding to cart!",
				{
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
					transition: Bounce,
				}
			);
			return;
		}

		await handleAddToWishlist({
			id: product.id,
			title: product.title,
			price: product.price,
			slug: product.slug,
			quantity,
			size: selectedSize,
			color: selectedColor,
			design: selectedDesign,
			rating: product.averageRating,
			addedOn: new Date().toISOString(),
			thumbnail: product.thumbnail,
		});

		const updatedWishlist =
			JSON.parse(localStorage.getItem("wishlist")) || [];
		setWishlist(updatedWishlist);
	};

	const handleAddToCartButton = async () => {
		if (
			!selectedSize ||
			!selectedColor ||
			(product.design && !selectedDesign)
		) {
			toast.error(
				"Please select size, color, and design before adding to cart!",
				{
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
					transition: Bounce,
				}
			);
			return;
		}

		handleAddToCart({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity,
			slug: product.slug,
			size: selectedSize,
			color: selectedColor,
			design: selectedDesign,
			addedOn: new Date().toISOString(),
			thumbnail: product.thumbnail,
		});

		const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
		setCart(updatedCart);
	};

	return (
		<div className='h-auto text-[0px] relative mx-auto px-4 sm:w-[100%] overflow-hidden'>
			<span className='flex justify-between items-start text-[20px] md:text-[28px] lg:text-[40px] font-bold leading-tight text-[#000] relative text-left z-[2] whitespace-normal'>
				{product.title}
				<HeartIconWithTooltip
					onClick={handleAddToWishlistBtn}
					isInWishlist={wishlist.some(
						(item) => item.id === product.id
					)}
				/>
			</span>

			{/* Ratings */}
			{product.averageRating && product.averageRating > 0 && (
				<div className='flex items-center gap-4 mt-4 z-[7]'>
					<div className='flex items-center gap-2'>
						<BigStarRating ratings={product.averageRating} />
					</div>
					<div className='text-[16px] font-normal leading-[21.6px]'>
						<span className='text-[#000]'>
							{product.averageRating}/
						</span>
						<span className='text-gray-500'>5</span>
					</div>
				</div>
			)}

			<div className='flex items-center mt-4 gap-3'>
				<span className='text-[24px] md:text-[32px] font-bold text-[#000]'>
					{process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}
					{product.price}
				</span>
				<span className='text-[20px] md:text-[32px] font-bold text-gray-300 line-through'>
					{process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}
					{product.actual_price}
				</span>
				<span className='py-1.5 px-3 text-[15px] md:text-[16px] font-medium text-[#ff3333] bg-[rgba(255,51,51,0.1)] rounded-full'>
					-{product.discount_percent}%
				</span>
			</div>
			<p className='mt-4 text-[14px] md:text-[16px] text-gray-600 leading-5'>
				{product.description}
			</p>
			<Separator className='my-5' />

			<ProductOption
				colors={product.colors}
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
				design={product.designs}
				selectedDesign={selectedDesign}
				setSelectedDesign={setSelectedDesign}
			/>
			<Separator className='my-5' />

			<ProductActions
				size={product.sizes}
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
				setQuantity={setQuantity}
				quantiy={quantity}
				handleAddToCartButton={handleAddToCartButton}
				isInCart={cart.some((item) => item.id === product.id)}
			/>
		</div>
	);
}
