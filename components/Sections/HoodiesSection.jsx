import React from "react";
import SingleProduct from "./SingleProduct";
import "@/styles/ProductListing.min.css";
import AOSProvider from "../providers/AosProvider";
import {Heading2} from "../misc/Text";

function HoodiesSection() {
	return (
			<div className=' w-full mx-auto pt-10 my-10 px-4 md:px-12'>
				<Heading2>HOODIES</Heading2>
				<div className=' flex items-center justify-evenly flex-wrap md:gap-0 gap-10  '>
					{[...Array(4)].map((_, index) => (
						<SingleProduct
							key={index}
							img={`/assets/img/products/tshirt${index + 1}.png`}
							title='T-SHIRT'
							price='120'
							ratings='4.5'
							link={`/shop/hoddies/${index + 1}`}
							data-aos='fade-up'
						/>
					))}
				</div>
				<button className='frame-36'>
					<span className='view-all'>View All</span>
				</button>
			</div>
	);
}

export default HoodiesSection;
