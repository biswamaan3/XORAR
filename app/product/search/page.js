"use client";
import {Heading2} from "@/components/misc/Text";
import SingleProduct from "@/components/Sections/SingleProduct";
import axios from "axios";
import {useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";

export default function SearchPage() {
	const searchParams = useSearchParams();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const query = searchParams.get("query");

	useEffect(() => {
		if (query) {
			fetchProducts(query);
		}
	}, [query]);

	const fetchProducts = async (searchQuery) => {
		setLoading(true);
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/external/product/search?query=${searchQuery}`
			);
			console.log("Response:", response);
			if (response.status === 200) {
				setProducts(response.data.products);
			} else {
				setProducts([]);
				console.error(
					"Failed to fetch products:",
					response.data.message
				);
			}
		} catch (error) {
			console.error("Error fetching products:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='p-6'>
			<Heading2 className="text-left" >Search Results for " {query} " </Heading2>
			{loading ? (
				<p>Loading...</p>
			) : products.length > 0 ? (
				<div className='flex flex-wrap  gap-4'>
					{products.map((product, index) => (
						<SingleProduct
							key={index}
							img={product.thumbnail}
							title={product.title}
							price={product.price}
							ratings={product.averageRating}
							link={`/shop/product/${product.slug}`}
							data-aos='fade-up'
						/>
					))}
				</div>
			) : (
				<p>No products found for "{query}".</p>
			)}
		</div>
	);
}
