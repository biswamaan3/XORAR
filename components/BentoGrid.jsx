import React from "react";
import "@/styles/BentoGrid.min.css";

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
						<div
							className='col-span-1 md:col-span-1 lg:col-span-5 relative bg-cover bg-no-repeat rounded-xl'
							style={{
								backgroundImage: "url('/assets/img/products/man1.png')", 
								backgroundSize: "cover",
								backgroundPosition: "center",
								height: "300px", 
							}}
						>
							<div className='absolute inset-0'>
								{/* Title on top of the image */}
								<h3 className='title-bento'>
									Casual <br /> Tshirts
								</h3>
							</div>
						</div>

						{/* Card 2 */}
						<div
							className='col-span-1 md:col-span-1 lg:col-span-7 relative bg-cover bg-no-repeat rounded-xl'
							style={{
								backgroundColor: "white",
								backgroundImage: "url('/assets/img/products/man2.png')",
								backgroundSize: "cover",
								backgroundPosition: "center",
								height: "300px",
							}}
						>
							<div className='absolute inset-0'>
								{/* Title on top of the image */}
								<h3 className='title-bento'>
									Formal <br /> Tshirts
								</h3>
							</div>
						</div>

						{/* Card 3 */}
						<div
							className='col-span-1 md:col-span-1 lg:col-span-7 relative bg-cover bg-no-repeat rounded-xl'
							style={{
								backgroundColor: "white",
								backgroundImage: "url('/assets/img/products/man3.png')",
								backgroundSize: "cover",
								backgroundPosition: "center",
								height: "300px",
							}}
						>
							<div className='absolute inset-0'>
								{/* Title on top of the image */}
								<h3 className='title-bento'>
									Anime <br /> Tshirts
								</h3>
							</div>
						</div>

						{/* Card 4 */}
						<div
							className='col-span-1 md:col-span-1 lg:col-span-5 relative bg-cover bg-no-repeat rounded-xl'
							style={{
								backgroundColor: "white",
								backgroundImage: "url('/assets/img/products/man4.png')",
								backgroundSize: "cover",
								backgroundPosition: "center",
								height: "300px",
							}}
						>
							<div className='absolute inset-0'>
								{/* Title on top of the image */}
								<h3 className='title-bento'>Hoodies</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BentoGrid;
