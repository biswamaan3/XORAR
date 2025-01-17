import React from "react";
import "@/styles/BentoGrid.min.css";
import Link from "next/link";
import {BentoCardData} from "@/data/products";
const divClasses =
	"absolute inset-0 w-full h-full bg-black rounded-xl bg-opacity-50 ";

function BentoGrid() {
	return (
		<>
			<div className='main-section min-h-screen '>
				{/* Title */}
				<div className='style-browser'>
					<h3 className='title-browse'>BROWSE BY DRESS STYLE</h3>

					{/* Grid Layout */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 py-8 px-6 '>
						{/* Card 1 */}
						<Link
							href={BentoCardData[0].href}
							className='col-span-1 md:col-span-1 lg:col-span-5 relative bg-cover
							
							bg-no-repeat rounded-xl'
							style={{
								backgroundImage: `url(${BentoCardData[0].backgroundImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								height: "300px",
							}}
						>
							<div className={divClasses}>
								{/* Title on top of the image */}
								<h3 className='title-bento'>
									{BentoCardData[0].title}
								</h3>
							</div>
						</Link>

						{/* Card 2 */}
						<Link
							href={BentoCardData[1].href}
							className='col-span-1 md:col-span-1 lg:col-span-7 relative bg-cover bg-no-repeat rounded-xl'
							style={{
								backgroundColor: "white",
								backgroundImage: `url(${BentoCardData[1].backgroundImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								height: "300px",
							}}
						>
							<div className={divClasses}>
								{/* Title on top of the image */}
								<h3 className='title-bento'>
									{BentoCardData[1].title}
								</h3>
							</div>
						</Link>

						{/* Card 3 */}
						<Link
							href={BentoCardData[2].href}
							className='col-span-1 md:col-span-1 lg:col-span-7 relative bg-cover bg-no-repeat rounded-xl'
							style={{
								backgroundColor: "white",
								backgroundImage: `url(${BentoCardData[2].backgroundImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								height: "300px",
							}}
						>
							<div className={divClasses}>
								{/* Title on top of the image */}
								<h3 className='title-bento'>
									{BentoCardData[2].title}
								</h3>
							</div>
						</Link>

						{/* Card 4 */}
						<Link
							href={BentoCardData[3].href}
							className='col-span-1 md:col-span-1 lg:col-span-5 relative bg-cover bg-no-repeat rounded-xl'
							style={{
								backgroundColor: "white",
								backgroundImage: `url(${BentoCardData[3].backgroundImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								height: "300px",
							}}
						>
							<div className={divClasses}>
								{/* Title on top of the image */}
								<h3 className='title-bento'>
									{BentoCardData[3].title}
								</h3>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default BentoGrid;
