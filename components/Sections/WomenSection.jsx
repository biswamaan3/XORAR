"use client";
import React, {useEffect, useState} from "react";
import SingleProduct from "./SingleProduct";
import "@/styles/ProductListing.min.css";
import {Heading2} from "../misc/Text";
import AOSProvider from "../providers/AosProvider";
import SingleProductSkeleton from "../loaders/SingleProductSkeleton";
import Link from "next/link";

function WomenSection({womenClothing}) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (womenClothing) {
			setLoading(false);
		}
	}, [womenClothing]);

	return (
		<div className="w-full mx-auto pt-10 my-10 px-4 md:px-12">
			<Heading2>Women</Heading2>

			<div className='flex items-center justify-evenly flex-wrap md:gap-0 gap-10'>
				{loading
					? [...Array(4)].map((_, index) => (
							<SingleProductSkeleton key={index} />
					  ))
					: womenClothing?.map((product, index) => (
							<SingleProduct
								key={index}
								img={product.thumbnail}
								title={product.title}
								price={product.price}
								ratings='4.5'
								link={`/shop/women/${product.slug}`}
								data-aos='fade-up'
							/>
					  ))}
			</div>
			<Link href={"/product/all?category=women"} className='frame-36'>
				<span className='view-all'>View All</span>
			</Link>
			<hr />
		</div>
	);
}

export default WomenSection;
