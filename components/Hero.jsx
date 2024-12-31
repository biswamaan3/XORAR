import React from "react";
import "@/styles/Hero.min.css";

function Hero() {
	return (
		<div className=' flex-row-ff flex items-center z-10'> 
			<div className='photoshoot-model max-w-2/4'>
				<div className='vector' />
				<div className='vector-8' />
			</div>
			<div className='pl-10 flex flex-col gap-9'>
				<p className='be-with-every-look font-bold'>
					BE <span className='unstoppable'>UNSTOPPABLE</span>
					<br />
					WITH EVERY LOOK
				</p>
				<span className='hoodies-tshirts-description font-satoshi '>
					Our hoodies and t-shirts are crafted to match your
					lifestyle, <br/> offering both comfort and an effortlessly stylish
					edge.
				</span>
				<button className='frame-9'>
					<span className='shop-now'>Shop Now</span>
				</button>
				<div className='frame-a'>
					<div className='frame-b'>
						<span className='plus-200'>200+</span>
						<span className='regional-brands'>Regional Brands</span>
					</div>
					<div className='line' />
					<div className='frame-c'>
						<span className='plus-2000'>2,000+</span>
						<span className='high-quality-products'>
							High-Quality Products
						</span>
					</div>
					<div className='line-d' />
					<div className='frame-e'>
						<span className='plus-30000'>30,000+</span>
						<span className='happy-customers'>Happy Customers</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
