import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HoodiesSection from "@/components/Sections/HoodiesSection";
import TshirtSection from "@/components/Sections/TshirtSection";
import WomenSection from "@/components/Sections/WomenSection";
import Testimonials from "@/components/Testimonials";
import React from "react";

async function page() {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/external/product/latest_t_h`
	);
	const products = await data.json();
	return (
		<div>
			<Hero />
			<TshirtSection tshirt={products?.data?.tShirts} />
			<WomenSection womenClothing={products?.data?.women} />
			<HoodiesSection hoodies={products?.data?.hoodies} />
			<BentoGrid />
			<Testimonials />
		</div>
	);
}

export default page;
