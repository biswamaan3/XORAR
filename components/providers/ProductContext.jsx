"use client";

import axios from "axios";
import React, {createContext, useState, useContext} from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({children, properties}) => {
	const [filters, setFilters] = useState({
		category: [],
		size: [],
		color: [],
		type: [],
		priceRange: {min: 0, max: 100000},
	});
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const updateFilters = (type, value) => {
		setFilters((prev) => {
			if (type === "priceRange") {
				return {...prev, priceRange: value};
			}
			const updatedValues = prev[type].includes(value)
				? prev[type].filter((item) => item !== value)
				: [...prev[type], value];
			return {...prev, [type]: updatedValues};
		});
	};

	async function applyFilters() {
		// setLoading(true);
		// const filterPayload = {
		// 	category: filters.category,
		// 	style: filters.type,
		// 	color: filters.color,
		// 	size: filters.size,
		// 	price_min: filters.priceRange.min,
		// 	price_max: filters.priceRange.max,
		// };
  

		// try {
		// 	const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/external/product/filter`,
		// 		{
        //   method: "POST",
        //   headers,
		// 			body: filterPayload,
		// 		}
		// 	);

		// 	setProducts(response.data.products || []);
		// } catch (error) {
		// 	console.error("Error fetching products:", error);
		// } finally {
		// 	setLoading(false);
		// }
		return;
	}

	return (
		<ProductsContext.Provider
			value={{
				properties,
				filters,
				updateFilters,
				applyFilters,
				products,
				loading,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProduct = () => useContext(ProductsContext);
