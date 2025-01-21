"use client";
import React, {useContext, useEffect, useState} from "react";
import FilterBar from "./FilterBar";
import FilterHeader from "./FilterHeader";
import SingleProduct from "../SingleProduct";
import Pagination from "./Pagination";
import {useProduct} from "@/components/providers/ProductContext";
import SingleProductSkeleton from "@/components/loaders/SingleProductSkeleton";

function ProductList({category}) {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleFilterModal = () => {
		setIsFilterOpen(!isFilterOpen);
	};
	const {products, loading} = useProduct();
	const productsPerPage = 12;
	const totalPages = Math.ceil(products.length / productsPerPage);
	return (
		<div>
			<div className='grid grid-cols-1 lg:grid-cols-9 gap-5 mt-10'>
				<div className='col-span-2 lg:block hidden'>
					<FilterBar />
				</div>

				<div className='col-span-7 w-full'>
					<FilterHeader handleOpenFilter={toggleFilterModal} />

					<div className='mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
						{/* Products */}
						{loading ? (
							[...Array(8)].map((_, index) => (
								<SingleProductSkeleton key={index} />
							))
						) : products.length < 1 ? (
							<div className='text-center text-lg font-satoshi'>
								No products found.
							</div>
						) : (
							products.map((item) => (
								<SingleProduct
									key={item.id} // Use unique key like item.id
									img={item.thumbnail}
									discount={item?.discount_percent || null} // Use dynamic discount if available
									actualPrice={item?.actual_price || null} // Use dynamic actual price if available
									title={item?.title}
									price={item?.discounted_price || "700"} // Use dynamic price if available
									ratings={item?.averageRating} // Dynamically handle ratings
									link={`/shop/${item.category.name}/${item.slug}`} // Assuming the product has an `id`
								/>
							))
						)}
					</div>
					{products.length > 0 && (
						<Pagination totalPages={totalPages} />
					)}
				</div>
			</div>

			{/* Mobile Filter Modal */}
			{isFilterOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[270]'>
					<div className='bg-white p-6 rounded-lg w-11/12 sm:w-96 h-[90vh] overflow-y-auto shadow-lg'>
						<div className='flex justify-between items-center mb-4'>
							<h3 className='text-lg font-semibold'>
								Filter Options
							</h3>
							<button
								className='text-xl text-gray-600'
								onClick={toggleFilterModal}
							>
								&times;
							</button>
						</div>
						<FilterBar />
					</div>
				</div>
			)}
		</div>
	);
}

export default ProductList;
