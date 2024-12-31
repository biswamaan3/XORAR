"use client";

import React from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
	const pathname = usePathname();

	const segments = pathname?.split("/").filter((segment) => segment);

	return (
		<div className='flex gap-[12px] items-center flex-nowrap relative mx-auto mt-5'>
			<span className="h-[22px] shrink-0 basis-auto  text-[16px] font-satoshi leading-[21.6px] text-[#000] relative text-left whitespace-nowrap z-[6]">
				<Link href='/' className='text-[#000]'>
					Home
				</Link>
			</span>

			{segments?.map((segment, index) => {
				const isLast = index === segments.length - 1;
				const breadcrumbUrl = `/${segments
					.slice(0, index + 1)
					.join("/")}`;

				return (
					<div
						key={index}
						className='flex items-center shrink-0 flex-nowrap'
					>
						<div className='w-4 h-4 shrink-0 bg-[url(/assets/svg/arrow-right.svg)] bg-contain bg-no-repeat relative overflow-hidden z-[5]' />
						<span
							className={`h-[22px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[21.6px] relative text-left whitespace-nowrap ${
								isLast
									? "text-[#000]"
									: "text-[rgba(0,0,0,0.6)]"
							}`}
						>
							{isLast ? (
								segment.charAt(0).toUpperCase() +
								segment.slice(1) // Capitalize the last segment
							) : (
								<Link
									href={breadcrumbUrl}
									className='text-[rgba(0,0,0,0.6)] font-satoshi'
								>
									{segment.charAt(0).toUpperCase() +
										segment.slice(1)}{" "}
								</Link>
							)}
						</span>
					</div>
				);
			})}
		</div>
	);
}
