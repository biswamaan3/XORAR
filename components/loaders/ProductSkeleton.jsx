import React from "react";
import {BigStarRating} from "../misc/Buttons";

function ProductSkeleton() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-9'>
			<div className='flex flex-col-reverse  sm:flex-row   gap-4 w-full max-w-[1200px] mx-auto'>
				<div className='flex sm:flex-col gap-4 overflow-x-auto sm:overflow-y-auto sm:max-h-[530px]'>
					{[1, 3, 5, 6, 7].map((thumbnail, index) => (
						<button
							key={index}
							className='w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-[20px] bg-[#F0EEED] animate-pulse border-2 border-transparent focus:border-blue-500 overflow-hidden'
						>
							<div
								alt={`Thumbnail ${index + 1}`}
								className='w-full h-full object-cover rounded-[20px]'
							/>
						</button>
					))}
				</div>
                <div className="flex-auto">
                <div className='w-full  h-[300px] sm:h-[530px] rounded-[20px] animate-pulse bg-[#F0EEED]'>
						<div
							alt='Primary Product'
							className='w-full h-full object-contain rounded-[20px] '
						/>
					</div>
                </div>

				{/* Primary Image Section */}
				
			</div>
			<div className='h-auto text-[0px] relative mx-auto px-4 sm:w-[100%] overflow-hidden'>
				<span
					className='flex justify-between items-start 
            h-20 w-full bg-[#F0EEED] animate-pulse rounded-lg
            '
				></span>
				<div className='flex items-center gap-4 mt-4 z-[7]'>
					<div className='flex items-center gap-2'>
						<div className='p-4 bg-[#F0EEED] animate-pulse'></div>
						<div className='p-4 bg-[#F0EEED] animate-pulse'></div>

						<div className='p-4 bg-[#F0EEED] animate-pulse'></div>
						<div className='p-4 bg-[#F0EEED] animate-pulse'></div>
						<div className='p-4 bg-[#F0EEED] animate-pulse'></div>
					</div>
					<div className='text-[16px] font-normal leading-[21.6px]'>
						<div className='p-4 w-20 rounded-md bg-[#F0EEED] animate-pulse'></div>
					</div>
				</div>

				<div className='flex items-center mt-4 gap-3'>
					<div className='w-24 h-12 bg-[#F0EEED] animate-pulse rounded-md'></div>
					<div className='w-24 h-14 bg-[#F0EEED] animate-pulse rounded-md'></div>
					<div className='w-24 h-12 bg-[#F0EEED] animate-pulse rounded-md'></div>
				</div>
				<div className='w-full h-5 mt-10 bg-[#F0EEED] animate-pulse rounded-md'></div>
				<div className='w-full h-5 mt-2 bg-[#F0EEED] animate-pulse rounded-md'></div>
				<div className='w-full h-5 mt-2 bg-[#F0EEED] animate-pulse rounded-md'></div>
				<div className='w-2/4 h-5 mt-2 bg-[#F0EEED] animate-pulse rounded-md'></div>

				<div className='flex gap-4 items-start'>
					<div className='w-2/5 h-12 mt-10 bg-[#F0EEED] animate-pulse rounded-full'></div>
					<div className='w-full h-12 mt-10 bg-[#F0EEED] animate-pulse rounded-lg'></div>
				</div>

				<div className='w-full h-14 mt-8 bg-[#F0EEED] animate-pulse rounded-md'></div>
			</div>
		</div>
	);
}

export default ProductSkeleton;
