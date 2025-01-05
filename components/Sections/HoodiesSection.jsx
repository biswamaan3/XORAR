"use client"
import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import "@/styles/ProductListing.min.css";
import { Heading2 } from "../misc/Text";
import SingleProductSkeleton from "../loaders/SingleProductSkeleton";
import Link from "next/link";

function HoodiesSection({ hoodies }) {
  const [loading, setLoading] = useState(true);

  // Update loading state when hoodies data is available
  useEffect(() => {
    if (hoodies) {
      setLoading(false);
    }
  }, [hoodies]);

  return (
    <div className="w-full mx-auto pt-10 my-10 px-4 md:px-12">
      <Heading2>HOODIES</Heading2>

      <div className="flex items-center justify-evenly flex-wrap md:gap-0 gap-10">
        {loading
          ? [...Array(4)].map((_, index) => <SingleProductSkeleton key={index} />) // Show skeleton loaders
          : hoodies?.map((hoodie, index) => (
              <SingleProduct
                key={index}
                img={hoodie.thumbnail}
                title={hoodie.title}
                price={hoodie.price}
                ratings="4.5"
                link={`/shop/hoodies/${hoodie.slug}`}
                data-aos="fade-up"
              />
            ))}
      </div>

      <Link href={"/product/all?category=hoodies"} className="frame-36">
        <span className="view-all">View All</span>
      </Link>
    </div>
  );
}

export default HoodiesSection;
