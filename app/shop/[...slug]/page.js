import Breadcrumb from "@/components/misc/Breadcrumb";
import { ProductReviews } from "@/components/Sections/ProductPage/ProductReviews";
import RecommendedProducts from "@/components/Sections/ProductPage/RecommendedProducts";
import ProductComp from "@/components/ProductComp";
import React from "react";
import { notFound } from "next/navigation";

async function getPost(slug) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/external/product/one?slug=${slug}`
	);
	const post = await res.json();
	if (!post || !post.product) notFound(); // Handle cases where no product is found
	return post.product;
}

export async function generateMetadata({ params }) {
	const slug = (await params).slug[(await params).slug.length - 1]; 
	const post = await getPost(slug); // Fetch product based on the slug
	return {
		title: post.title, // Use the product title for metadata
	};
}

async function page({ params }) {
	const slug = (await params).slug[(params).slug.length - 1]; 
	const data = await getPost(slug); 
	return (
		<div className="container w-[90%] mx-auto">
			<Breadcrumb />
			<ProductComp product={data} /> 
			<ProductReviews />
			<RecommendedProducts />
		</div>
	);
}

export default page;
