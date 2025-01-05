import React from "react";
import SingleProduct from "./SingleProduct";
import "@/styles/ProductListing.min.css";
import {Heading2} from "../misc/Text";

function HoodiesSection({hoodies}) {
	return (
			<div className=' w-full mx-auto pt-10 my-10 px-4 md:px-12'>
				<Heading2>HOODIES</Heading2>
				<div className=' flex items-center justify-evenly flex-wrap md:gap-0 gap-10  '>
					{hoodies.map((hoodie, index) => (
						<SingleProduct
							key={index}
							img={hoodie.thumbnail}
							title={hoodie.title}
							price={hoodie.price}
							ratings='4.5'
							link={`/shop/hoodies/${hoodie.slug}`}
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
