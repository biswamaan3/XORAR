import React from "react";
import SingleProduct from "./SingleProduct";
import "@/styles/ProductListing.min.css";
import {Heading2} from "../misc/Text";
import AOSProvider from "../providers/AosProvider";
function TshirtSection() {
	return (
			<div className='container w-full mx-auto mt-5 mb-10 md:mt-0 md:mb-0 md:my-10 px-4 md:px-12'>
				<Heading2>T-SHIRTS</Heading2>

				<div className=' flex items-center justify-evenly flex-wrap md:gap-0 gap-10  '>
					{[...Array(4)].map((_, index) => (
						<SingleProduct
							key={index}
							img={`/assets/img/products/tshirt${index + 1}.png`}
							title='T-SHIRT'
							price='120'
							ratings='4.5'
							link={`/shop/t-shirt/${index + 1}`}
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
