"use client"
import React, { createContext, useState, useEffect, useContext } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        category: [],
        size: [],
        color: [],
        type: [],
        priceRange: { min: 0, max: 100 },
      });  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const filterParams = new URLSearchParams();
    if (filters.category.length > 0) filterParams.append('category', filters.category.join(','));
    if (filters.size.length > 0) filterParams.append('size', filters.size.join(','));
    if (filters.color.length > 0) filterParams.append('color', filters.color.join(','));
    if (filters.type.length > 0) filterParams.append('type', filters.type.join(','));
    if (filters.priceRange) {
      filterParams.append('minPrice', filters.priceRange.min.toString());
      filterParams.append('maxPrice', filters.priceRange.max.toString());
    }

    try {
      const response = await fetch(`/api/products?${filterParams.toString()}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

//   useEffect(() => {
//     fetchProducts();
//   }, [filters]);

  return (
    <ProductsContext.Provider value={{ products, filters, setFilters, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
