import React from "react";
import {IoChevronDown} from "react-icons/io5";
import {Separator} from "../../misc/Text";
import Image from "next/image";
import { TestimonialCard } from "../../misc/TestimonialCard";
import { ViewMoreButton } from "../../misc/Buttons";

export function ProductReviews() {
    const testimonials = [
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
        {
            name: "Sarah M.",
            text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
            stars: 5,
        },

    ];
    
	return (
		<div className='mt-8'>
			{/* Header Section */}
			<div className='text-center'>
				<p className='font-satoshi text-2xl font-medium text-black'>
					Rating & Reviews
				</p>
				<div className='w-[200px] mx-auto h-[2px] bg-gray-900 mt-6' />
				<Separator />
			</div>

			{/* Reviews and Filters */}
			<div className='flex justify-between items-center mt-5'>
				{/* Reviews Title */}
				<div>
					<span className='font-satoshi text-2xl font-bold text-black'>
						All Reviews
					</span>
					<span className='font-satoshi text-sm text-gray-500 ml-2'>
						(451)
					</span>
				</div>

				{/* Action Buttons */}
				<div className='flex gap-3 items-center'>
					{/* Filter Button */}
					<div className='p-4 rounded-full bg-gray-200'>
						<Image
							src='/assets/svg/reviews-filter.svg'
							width={19}
							height={19}
							alt='reviews-filter'
						/>
					</div>

					{/* Latest Button */}
					<div className='flex items-center gap-2 px-5 py-3 rounded-full bg-gray-200'>
						<p className='font-satoshi text-sm text-gray-600'>
							Latest
						</p>
						<IoChevronDown />
					</div>

					{/* Add Review Button */}
					<div className='flex items-center gap-2 px-5 py-3 rounded-full bg-[#012F3F]'>
						<p className='font-satoshi text-sm text-white'>
							Add a Review
						</p>
					</div>
				</div>
			</div>

			{/* Reviews */}

			<div className='mt-5 w-full grid grid-cols-2 gap-5'>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard key={index} {...testimonial} className="w-full" withDate withMenu/>
				))}
			</div>

            <ViewMoreButton>Load more Reviews</ViewMoreButton>
		</div>

	);
}
