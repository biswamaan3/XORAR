"use client";

import {useSearchParams} from "next/navigation";
import React, {createContext, useState, useContext, useEffect} from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({children, properties}) => {
	const [filters, setFilters] = useState({
		category: [],
		size: [],
		color: [],
		type: [],
		style: [],
		priceRange: {min: 0, max: 100000},
	});
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState("All Products");
	const [sortBy, setSortBy] = useState("recently_added");
	const updateSortBy = (value) => {
		setSortBy(value);
		
	}
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
	const params = useSearchParams();
	useEffect(() => {
		setLoading(true);
		const categoryParam = params.get("category");
		const sizeParam = params.get("size");
		const colorParam = params.get("color");
		const styleParam = params.get("style");
		const titleParam =
			params.get("title") ||
			categoryParam.split(",")[0] ||
			"All Products";
		if (titleParam) {
			setTitle(titleParam);
		}

		let updatedFilters = {...filters};

		// Category mapping
		if (categoryParam) {
			const categories = categoryParam.toLowerCase().split(","); // Corrected here
			const categoryIds = categories
				.map((category) => {
					const categoryObj = properties.categories.find(
						(cat) =>
							cat.name.toLowerCase() === category.toLowerCase()
					);
					return categoryObj ? categoryObj.id : null;
				})
				.filter(Boolean);
			updatedFilters.category = categoryIds;
		}

		// Size mapping
		if (sizeParam) {
			const sizes = sizeParam.toLowerCase().split(","); // Corrected here
			const sizeIds = sizes
				.map((size) => {
					const sizeObj = properties.sizes.find(
						(s) => s.name.toLowerCase() === size.toLowerCase()
					);
					return sizeObj ? sizeObj.id : null;
				})
				.filter(Boolean);
			updatedFilters.size = sizeIds;
		}

		// Color mapping
		if (colorParam) {
			const colors = colorParam.toLowerCase().split(","); // Corrected here
			const colorIds = colors
				.map((color) => {
					const colorObj = properties.colors.find(
						(c) => c.name.toLowerCase() === color.toLowerCase()
					);
					return colorObj ? colorObj.id : null;
				})
				.filter(Boolean);
			updatedFilters.color = colorIds;
		}

		// Style mapping
		if (styleParam) {
			const styles = styleParam.toLowerCase().split(","); // Corrected here
			const styleIds = styles
				.map((style) => {
					const styleObj = properties.styles.find(
						(s) => s.name.toLowerCase() === style.toLowerCase()
					);
					return styleObj ? styleObj.id : null;
				})
				.filter(Boolean);
			updatedFilters.style = styleIds;
		}
		updateFilters.priceRange = {
			min: properties.priceRange.min,
			max: properties.priceRange.max,
		};
		if (properties?.priceRange) {
			setFilters((prev) => ({
				...prev,
				priceRange: properties.priceRange,
			}));
		}

		setFilters((prev) => ({...prev, ...updatedFilters}));
		applyFilterEffect(updatedFilters);
	}, [properties]);

	async function applyFilterEffect(data) {
		setLoading(true);

		const filterPayload = {
			category: data.category,
			style: data.style,
			color: data.color,
			size: data.size,
			price_min: data.priceRange.min,
			price_max: data.priceRange.max,
		};

		try {
			const response = await fetch(`/api/products/filter`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(filterPayload), // Ensure the body is stringified
			});

			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}

			const data = await response.json();

			setProducts(data.data.products || []);
		} catch (error) {
			console.error("Error fetching products:", error);
		}

		setLoading(false);
	}

	async function applyFilters() {
		setLoading(true);

		const filterPayload = {
			category: filters.category,
			style: filters.style,
			color: filters.color,
			size: filters.size,
			price_min: filters.priceRange.min,
			price_max: filters.priceRange.max,
			sort_by: sortBy,
		};

		try {
			const response = await fetch(`/api/products/filter`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(filterPayload), // Ensure the body is stringified
			});

			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}

			const data = await response.json();

			setProducts(data.data.products || []);
		} catch (error) {
			console.error("Error fetching products:", error);
		}

		setLoading(false);
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
				title,
				sortBy,
				updateSortBy,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProduct = () => {
	const context = useContext(ProductsContext);
	if (!context) {
		throw new Error("useProduct must be used within a ProductProvider");
	}
	return context;
};
