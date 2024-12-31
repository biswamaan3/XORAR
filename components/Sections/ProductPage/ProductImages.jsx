"use client";
import React, { useState } from "react";

export default function ProductImages() {
  const [primaryImage, setPrimaryImage] = useState(
    "/assets/img/products/tshirt1.png"
  );

  // Array of smaller images
  const thumbnails = [
    "/assets/img/products/tshirt2.png",
    "/assets/img/products/tshirt3.png",
    "/assets/img/products/tshirt4.png",
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full max-w-[1200px] mx-auto">
      {/* Thumbnails Section */}
      <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-y-auto sm:max-h-[530px]">
        {thumbnails.map((thumbnail, index) => (
          <button
            key={index}
            className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-[20px] bg-[#F0EEED] border-2 border-transparent focus:border-blue-500 overflow-hidden"
            onClick={() => setPrimaryImage(thumbnail)}
          >
            <img
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </button>
        ))}
      </div>

      {/* Primary Image Section */}
      <div className="flex-1">
        <div className="w-full h-[300px] sm:h-[530px] rounded-[20px] bg-[#F0EEED]">
          <img
            src={primaryImage}
            alt="Primary Product"
            className="w-full h-full object-contain rounded-[20px] "
          />
        </div>
      </div>
    </div>
  );
}