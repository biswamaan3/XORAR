import React from "react";
import SingleProduct from "./SingleProduct";
import "@/styles/ProductListing.min.css";
import {Heading2} from "../misc/Text";
import AOSProvider from "../providers/AosProvider";
function TshirtSection({tshirt}) {
	return (
			<div className='container w-full mx-auto mt-5 mb-10 md:mt-0 md:mb-0 md:my-10 px-4 md:px-12'>
				<Heading2>T-SHIRTS</Heading2>

				<div className=' flex items-center justify-evenly flex-wrap md:gap-0 gap-10  '>
					{tshirt?.map((product, index) => (
						<SingleProduct
							key={index}
							img={product.thumbnail}
							title={product.title}
							price={product.price}
							ratings='4.5'
							link={`/shop/t-shirt/${product.slug}`}
							data-aos='fade-up'
						/>
					))}
				</div>
				<button className='frame-36 '>
					<span className='view-all'>View All</span>
				</button>
				<hr />
			</div>
	);
}

export default TshirtSection;
