"use client";
import Breadcrumb from "@/components/misc/Breadcrumb";
import {ProductsProvider} from "@/components/providers/ProductContext";
import ProductList from "@/components/Sections/AllProducts/ProductList";
import React from "react";

function page() {
	return (
		
				<ProductList />
			
	);
}

export default page;
