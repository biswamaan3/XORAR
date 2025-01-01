import React from "react";
import {Heading2} from "../../misc/Text";
import SingleProduct from "../SingleProduct";

function RecommendedProducts() {
	return (
		<div>
			<Heading2 className='text-[#012F3F]'>YOU MAY ALSO LIKE</Heading2>

			<div className=' flex items-center justify-evenly flex-wrap md:gap-0 gap-10  '>
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
		</div>
	);
}

export default RecommendedProducts;
