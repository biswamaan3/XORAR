"use client";
import React, {useRef} from "react";
import {MdArrowLeft} from "react-icons/md";
import {FaCheckCircle} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";
import { TestimonialCard } from "./misc/TestimonialCard";
import { testimonials } from "@/data/products";
const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	lazyLoad: true,

	autoplay: true,
	speed: 3000,
	autoplaySpeed: 1000,
	cssEase: "linear",

	responsive: [
		{
			breakpoint: 1024, // Tablet
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 768, // Mobile (large mobile/tablet landscape)
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480, // Small mobile
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 1200, // Large screen (Laptop/Desktops)
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 1536, // Extra large screens (Large desktops/TV)
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1,
			},
		},
	],
};



function NextArrow(props) {
	const {className, style, onClick} = props;
	return (
		<button
			onClick={onClick}
			className={`w-[40px] h-[40px] flex justify-center items-center  rounded-full hover:bg-gray-300 ${className}`}
		>
			<IoIosArrowRoundForward className='text-[24px]' />
		</button>
	);
}

function PrevArrow(props) {
	const {className, style, onClick} = props;
	return (
		<button
			onClick={onClick}
			className={`w-[40px] h-[40px] flex justify-center items-center  rounded-full hover:bg-gray-300 ${className}`}
		>
			<IoIosArrowRoundBack className='text-[24px]' />
		</button>
	);
}
export default function Testimonials() {
	let sliderRef = useRef(null);
	const next = () => {
		sliderRef.slickNext();
	};
	const previous = () => {
		sliderRef.slickPrev();
	};

	return (
		<div className='relative mx-auto mt-32'>
			<div className='flex justify-between items-center w-[90%] mx-auto mb-[40px]'>
				<h2 className='text-2xl md:text-[48px] font-bold text-[#012f3f]'>
					OUR HAPPY CUSTOMERS
				</h2>
				<div className='flex space-x-2 md:space-x-4'>
					<PrevArrow onClick={previous} />
					<NextArrow onClick={next} />
				</div>
			</div>

			{/* Apply overflow-hidden only here to contain the slider */}
			<div className='overflow-hidden '>
				<Slider
					ref={(slider) => {
						sliderRef = slider;
					}}
					{...settings}
				>
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={index}
						ratings={testimonial.stars}
						className=""
						{...testimonial}  />
					))}
				</Slider>
			</div>
		</div>
	);
}
