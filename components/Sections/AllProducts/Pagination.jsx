"use client"; // Ensures this component is client-side rendered

import React, {useState} from "react";

// Custom hook for detecting screen width (media query)
const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	React.useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		setMatches(mediaQuery.matches);

		const handleChange = (e) => {
			setMatches(e.matches);
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [query]);

	return matches;
};

export default function Pagination({totalPages = 10}) {
	const [currentPage, setCurrentPage] = useState(1);
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	const handlePageClick = (page) => {
		setCurrentPage(page);
	};

	const generatePages = () => {
		const pages = [];
		const pageRange = 5;

		if (isDesktop) {
			if (totalPages <= pageRange) {
				for (let i = 1; i <= totalPages; i++) {
					pages.push(i);
				}
			} else {
				for (let i = 1; i <= 5; i++) {
					pages.push(i);
				}

				if (currentPage > 5) pages.push("...");

				let start = Math.max(currentPage, 6);
				let end = Math.min(totalPages, start + pageRange - 1);

				for (let i = start; i <= end; i++) {
					pages.push(i);
				}

				if (end < totalPages) pages.push("...");
			}
		} else {
			let startPage = currentPage;
			let endPage = currentPage + 2;

			if (currentPage === 1) {
				endPage = 3;
			}

			startPage = Math.max(1, startPage);
			endPage = Math.min(totalPages, endPage);

			for (let i = startPage; i <= endPage; i++) {
				pages.push(i);
			}
		}

		return pages;
	};

	return (
		<div className='w-full flex gap-4 items-center justify-between relative mt-14'>
			<button
				className='flex w-auto items-center justify-center py-2 px-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px]'
				onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
			>
				<span className='text-[14px] font-medium text-[#000]'>
					Previous
				</span>
			</button>

			<div className='flex gap-2 items-center'>
				{generatePages().map((page, index) =>
					page === "..." ? (
						<button
							key={index}
							className='w-[40px] h-[40px] rounded-[8px] flex justify-center items-center'
							disabled
						>
							<span className='text-[14px] font-medium text-[rgba(0,0,0,0.5)]'>
								...
							</span>
						</button>
					) : (
						<button
							key={index}
							className={`w-[40px] h-[40px] rounded-[8px] ${
								page === currentPage
									? "bg-[rgba(0,0,0,0.06)] "
									: ""
							} flex justify-center items-center`}
							onClick={() => handlePageClick(page)}
						>
							<span className='text-[14px] font-medium'>
								{page}
							</span>
						</button>
					)
				)}
			</div>

			<button
				className='flex w-[110px] items-center justify-center py-2 px-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px]'
				onClick={() =>
					setCurrentPage(Math.min(totalPages, currentPage + 1))
				}
			>
				<span className='text-[14px] font-medium text-[#000]'>
					Next
				</span>
			</button>
		</div>
	);
}
