"use client";
import React, {useRef} from "react";
import {MdArrowLeft} from "react-icons/md";
import {FaCheckCircle} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";
import { TestimonialCard } from "./misc/TestimonialCard";

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
export const testimonials = [
	{
		name: "Sarah M.",
		text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
		stars: 5,
	},
	{
		name: "Aditi Rao",
		text: `"The hoodies are soft, snug, and the t-shirts fit like they were tailored just for me! I've never felt this good about casual wear. Highly recommend!”`,
		stars: 4,
	},
	{
		name: "John D.",
		text: `"I’ve been looking for the perfect sneakers for months and finally found them here. They are comfortable, stylish, and great quality!”`,
		stars: 5,
	},
	{
		name: "Emily S.",
		text: `"The jackets I bought from Shop.co are fantastic! They keep me warm without being bulky and look great with every outfit!"`,
		stars: 4,
	},
	{
		name: "Mike P.",
		text: `"As someone who’s picky about fit, these clothes fit me perfectly! I can’t wait to buy more. Customer service was excellent too!"`,
		stars: 5,
	},
	{
		name: "Olivia W.",
		text: `"The shopping experience was easy and efficient. I loved how quick the delivery was, and the items were exactly as described. Will buy again!"`,
		stars: 4,
	},
];


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
				<h2 className='text-[48px] font-bold text-[#012f3f]'>
					OUR HAPPY CUSTOMERS
				</h2>
				<div className='flex space-x-4'>
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
						className=""
						{...testimonial}  />
					))}
				</Slider>
			</div>
		</div>
	);
}
