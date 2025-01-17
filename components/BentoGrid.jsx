import React from "react";
import "@/styles/BentoGrid.min.css";
import Link from "next/link";
import {BentoCardData} from "@/data/products";

function BentoGrid() {
	return (
		<>
			<div className='main-section min-h-screen'>
				{/* Title */}
				<div className='style-browser'>
					<h3 className='title-browse'>BROWSE BY DRESS STYLE</h3>

					{/* Grid Layout */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 py-8 px-6'>
						{/* Generate Cards Dynamically */}
						{BentoCardData.map((card, index) => (
							<Link
								key={index}
								href={card.href}
								className={`${card.colSpan} relative bg-cover bg-white bg-no-repeat rounded-xl`}
								style={{
									backgroundImage: `url(${card.backgroundImage})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									height: "300px",
								}}
							>
								<div className='absolute inset-0   '>
									{/* Title on top of the image */}
									<h3 className='title-bento'>
										{card.title
											.split("\n")
											.map((line, idx) => (
												<React.Fragment key={idx}>
													{line}
													<br />
												</React.Fragment>
											))}
									</h3>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default BentoGrid;
