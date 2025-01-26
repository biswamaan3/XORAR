"use client";

import {useSearchParams} from "next/navigation";
import React, {createContext, useState, useContext, useEffect} from "react";

const ProductsContext = createContext();


export const ProductsProvider = ({ children, properties }) => {
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    color: [],
    style: [],
    priceRange: { min: 0, max: 100000 },
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("All Products");
  const [sortBy, setSortBy] = useState("recently_added");
  const [totalProducts, setTotalProducts] = useState(0);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const params = useSearchParams();
  

  const updateSortBy = (value) => {
    setSortBy(value);
  };

  const updateFilters = (type, value) => {
    setFilters((prev) => {
      if (type === "priceRange") {
        return { ...prev, priceRange: value };
      }
      const updatedValues = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updatedValues };
    });
  };
  const handlePageback = () => {
    setCurrentPage(1);
    applyFilters();
  }

  const parseUrlFilters = () => {
    const categoryParam = params.get("category");
    const sizeParam = params.get("size");
    const colorParam = params.get("color");
    const styleParam = params.get("style");
    const titleParam = params.get("title") || categoryParam?.split(",")[0] || "All Products";

    if (titleParam) {
      setTitle(titleParam);
    }

    const updatedFilters = { ...filters };

    const mapParamsToIds = (param, key) => {
      if (param) {
        const items = param.toLowerCase().split(",");
        return items
          .map((item) => {
            const obj = properties[key].find(
              (property) => property.name.toLowerCase() === item.toLowerCase()
            );
            return obj ? obj.id : null;
          })
          .filter(Boolean);
      }
      return [];
    };

    updatedFilters.category = mapParamsToIds(categoryParam, "categories");
    updatedFilters.size = mapParamsToIds(sizeParam, "sizes");
    updatedFilters.color = mapParamsToIds(colorParam, "colors");
    updatedFilters.style = mapParamsToIds(styleParam, "styles");

    if (properties?.priceRange) {
      updatedFilters.priceRange = properties.priceRange;
    }

    setFilters((prev) => ({ ...prev, ...updatedFilters }));
    return updatedFilters;
  };

  const fetchProducts = async (filterPayload) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/products/filter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filterPayload),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data.data.products || []);
      setPagination(data.data.pagination);
      setTotalProducts(data.data.totalProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    console.log("page", currentPage);
    const filterPayload = {
      category: filters.category,
      style: filters.style,
      color: filters.color,
      size: filters.size,
      price_min: filters.priceRange.min,
      price_max: filters.priceRange.max,
      sort_by: sortBy,
      page: currentPage,
    };
    fetchProducts(filterPayload);
  };

  useEffect(() => {
	console.log(properties);
	console.log("running effect 1", sortBy, currentPage);

    const initialFilters = parseUrlFilters();
    const initialPayload = {
      ...initialFilters,
      price_min: initialFilters.priceRange?.min,
      price_max: initialFilters.priceRange?.max,
      sort_by: sortBy,
      page: 1,
    };
    fetchProducts(initialPayload);
  }, [properties]);

  useEffect(() => {
	  if (currentPage === 1) { return; }
	  console.log("running effect", sortBy, currentPage);
    applyFilters();
  }, [currentPage]);

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
        handlePageback,
        totalProducts,
        pagination,
        currentPage,
        setCurrentPage,
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
