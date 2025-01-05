"use client";
import React, {useContext, useEffect, useState} from "react";
import FilterBar from "./FilterBar";
import FilterHeader from "./FilterHeader";
import SingleProduct from "../SingleProduct";
import Pagination from "./Pagination";

function ProductList({category}) {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleFilterModal = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	

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
						{[...Array(12)].map((_, index) => (
							<SingleProduct
								key={index}
								img={`/assets/img/products/tshirt${1}.png`}
								title='T-SHIRT'
								price='120'
								ratings='4.5'
								link={`/shop/t-shirt/${index + 1}`}
							/>
						))}
					</div>
					<Pagination />
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
