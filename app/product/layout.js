import Breadcrumb from "@/components/misc/Breadcrumb";
import {ProductsProvider} from "@/components/providers/ProductContext";
import React from "react";

async function RootLayout({children}) {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/add-properties?type=all`
	);
	const properties = await data.json();
	return (
		<div className='container w-[90%] mx-auto'>
			<Breadcrumb />
			<ProductsProvider properties={properties?.properties}>
				{children}
			</ProductsProvider>
		</div>
	);
}

export default RootLayout;
