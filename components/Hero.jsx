import React from "react";
import "@/styles/Hero.min.css";
import Link from "next/link";
import {HeroSection} from "@/data/products";
function Hero() {
	return (
		<div className='flex-row-ff items-center z-10'>
			<div
				className='photoshoot-model max-w-2/4'
				style={{
					backgroundImage: `url(${HeroSection.image})`,
				}}
			>
				<div className='vector' />
				<div className='vector-8' />
			</div>
			<div className='text-hero pl-10 flex flex-col gap-9'>
				<p className='be-with-every-look font-bold'>
					BE <span className='unstoppable'>UNSTOPPABLE</span>
					<br className='hidden md:block' />
					WITH EVERY LOOK
				</p>
				<span className='hoodies-tshirts-description font-satoshi '>
					Our hoodies and t-shirts are crafted to match your
					lifestyle, <br className='hidden md:block' />
					offering both comfort and an effortlessly stylish edge.
				</span>
				<Link href={"/product/all"} className='frame-9'>
					<span className='shop-now'>Shop Now</span>
				</Link>
				<div className='frame-a'>
					<div className='frame-b'>
						<span className='plus-200'>500+</span>
						<span className='regional-brands'>
							Orders Delivered
						</span>
					</div>
					<div className='line' />
					<div className='frame-c'>
						<span className='plus-2000'>95%</span>
						<span className='high-quality-products'>
							Positive Feedback
						</span>
					</div>
					<div className='line-d' />
					<div className='frame-e'>
						<span className='plus-30000'>1,200+</span>
						<span className='happy-customers'>Happy Shoppers</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
