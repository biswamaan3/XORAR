import Breadcrumb from "@/components/misc/Breadcrumb";
import {ProductReviews} from "@/components/Sections/ProductPage/ProductReviews";
import RecommendedProducts from "@/components/Sections/ProductPage/RecommendedProducts";
import ProductComp from "@/components/ProductComp";
import React, {Suspense} from "react";
import {notFound} from "next/navigation";
import ProductSkeleton from "@/components/loaders/ProductSkeleton";

async function getPost(slug) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/external/product/one?slug=${slug}`,
		{
			cache: "reload",
		}
	);
	const post = await res.json();
	if (!post || !post.product) notFound();
	return post;
}

export async function generateMetadata({params}) {
	const slug = (await params).slug[(await params).slug.length - 1];
	const post = await getPost(slug);
	return {
		title: post.product.title, 
	};
}

async function page({params}) {
	const slug = (await params).slug[(await params).slug.length - 1];
	const data = await getPost(slug);
	return (
		<div className='container w-[90%] mx-auto'>
			<Breadcrumb />
			<Suspense fallback={<ProductSkeleton />}>
				<ProductComp product={data.product} />
				<ProductReviews reviews={data.product.reviews} />
				<RecommendedProducts
					recommendation={data.recommendedProducts}
				/>
			</Suspense>
		</div>
	);
}

export default page;
