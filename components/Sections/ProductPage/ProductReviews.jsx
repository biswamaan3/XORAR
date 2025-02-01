import React from "react";
import {IoChevronDown} from "react-icons/io5";
import {Separator} from "../../misc/Text";
import Image from "next/image";
import {TestimonialCard} from "../../misc/TestimonialCard";
import {ViewMoreButton} from "../../misc/Buttons";
import {formatDate} from "@/lib/utils";

export function ProductReviews({reviews}) {
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
			<div className='flex flex-wrap justify-between items-center mt-5'>
				{/* Reviews Title */}
				<div>
					<span className='font-satoshi text-2xl font-bold text-black'>
						All Reviews
					</span>
					<span className='font-satoshi text-sm text-gray-500 ml-2'>
						{reviews && reviews.length}
					</span>
				</div>

				{/* Action Buttons */}
				<div className='flex gap-3 items-center'>
					{/* Filter Button */}
					<div className='p-4 rounded-full bg-gray-200 hover:bg-gray-300'>
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
							Latest Reviews
						</p>
						{/* <IoChevronDown /> */}
					</div>

					{/* Add Review Button */}
					{/* <div className='flex items-center gap-2 px-5 py-3 rounded-full bg-[#012F3F]'>
						<p className='font-satoshi text-sm text-white'>
							Add a Review
						</p>
					</div> */}
				</div>
			</div>

			{/* Reviews */}
			{reviews && reviews.length > 0 ? (
				<>
					<div className='mt-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
						{reviews.map((testimonial, index) => (
							<TestimonialCard
								key={index}
								name={testimonial.user_name}
								text={testimonial.content}
								ratings={testimonial.rating.value}
								date={formatDate(testimonial.createdAt)}
								{...testimonial}
								className='w-full'
								withDate
								withMenu={false}
							/>
						))}
					</div>
					{reviews.length > 30 ? (
						<ViewMoreButton>Load more Reviews</ViewMoreButton>
					):
					<div className="pb-8"></div>
					}
				</>
			) : (
				<div className='my-10 pb-10 border-b'>
					<p className='text-center text-lg font-semibold font-satoshi text-gray-600'>
						No Reviews Yet! Be the one to Review
					</p>
				</div>
			)}
		</div>
	);
}
