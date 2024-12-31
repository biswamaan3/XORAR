import React from "react";
import "@/styles/SingleProduct.min.css"; // You can remove this import if you switch entirely to Tailwind.
import Link from "next/link";
import { MoveToBag } from "../misc/Buttons";

const StarRating = ({ ratings }) => {
  const fullStars = Math.floor(ratings);
  const halfStars = ratings % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex items-start space-x-1.5 z-10">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <img
          key={`full-${index}`}
          src="/assets/svg/Star_full.svg"
          alt="star"
          className="w-5 h-5"
        />
      ))}

      {/* Half star */}
      {halfStars === 1 && (
        <img
          src="/assets/svg/Star_half.svg"
          alt="half star"
          className="w-5 h-5"
        />
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <span key={`empty-${index}`} className="w-5 h-5 bg-gray-300" />
      ))}
    </div>
  );
};

function SingleProduct({
  img,
  title,
  price,
  ratings,
  link,
  moveToCart,
  priceShow = true,
  ...props
}) {
  return (
    <Link href={link} className="w-auto block" {...props}>
      {/* Product Image */}
      <div className="relative max-w-[295px] max-h-[298px] bg-[#f0eeed] z-8 overflow-hidden rounded-2xl">
        <img
          src={img}
          alt="tshirt image"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Product Title */}
      <div className="mt-4">
        <span className="text-black font-bold d ">{title}</span>
      </div>

      {/* Star Rating */}
      <div className="mt-2 flex items-center space-x-2">
        <StarRating ratings={ratings} />
        <div className="flex items-center space-x-1">
          <span className="text-black text-sm">{ratings}/</span>
          <span className="text-gray-600 text-sm">5</span>
        </div>
      </div>

      {priceShow && (
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-[24px] text-black font-satoshi font-extrabold  ">${price}</span>
          <span className="text-[24px] line-through text-gray-500 font-satoshi font-[700] ">$260</span>
          <button className="flex items-center justify-center px-4 py-2 bg-red-100 rounded-full">
            <span className="text-red-600 text-xs font-medium ">-20%</span>
          </button>
        </div>
      )}

      {moveToCart && <MoveToBag />}
    </Link>
  );
}

export default SingleProduct;
