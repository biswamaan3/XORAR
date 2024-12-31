import React from "react";
import SingleProduct from "./SingleProduct";
import "@/styles/ProductListing.min.css";
import { Heading2 } from "../misc/Text";
function TshirtSection() {
	return (
		<div className='container w-full mx-auto my-10 px-4 md:px-12'>
			<Heading2>T-SHIRTS</Heading2>

			<div className=' flex items-center justify-evenly flex-wrap  '>
				{[...Array(4)].map((_, index) => (
					<SingleProduct
						key={index}
						img={`/assets/img/products/tshirt${index + 1}.png`}
						title='T-SHIRT'
						price='120'
						ratings='4.5'
						link={`/shop/t-shirt/${index + 1}`}
					/>
				))}
			</div>
			<button className='frame-36 '>
				<span className='view-all'>View All</span>
			</button>
      <hr/>
		</div>
	);
}

export default TshirtSection;
