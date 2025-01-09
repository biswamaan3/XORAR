import React from "react";
import {Heading2} from "../../misc/Text";
import SingleProduct from "../SingleProduct";

function RecommendedProducts({recommendation}) {
	return (
		<div>
			<Heading2 className='text-[#012F3F]'>YOU MAY ALSO LIKE</Heading2>

			<div className=' flex items-center justify-evenly flex-wrap md:gap-0 gap-10  '>
				{recommendation?.map((product, index) => (
					<SingleProduct
						key={product.id}
						img={product.thumbnail}
						title={product.title}
						price={product.price}
						ratings={product.averageRating}
						link={`/shop/product/${product.slug}`}
					/>
				))}
			</div>
		</div>
	);
}

export default RecommendedProducts;
