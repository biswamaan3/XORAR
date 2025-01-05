"use client";

import React, { useState } from "react";
import { SizeButton } from "../ProductPage/ProductActions";
import RangeSlider from "./RangeSlider";
import Image from "next/image";
import { useProduct } from "@/components/providers/ProductContext";

const ColorCircle = ({ color, isSelected, onClick }) => (
  <div
    className={`w-[37px] h-[37px] rounded-full relative cursor-pointer border-2 ${isSelected ? "border-blue-500" : "border-black"}`}
    style={{ backgroundColor: color }}
    onClick={() => onClick(color)}
  />
);

const CollapsibleSection = ({ title, children, isOpen, onToggle, noChevron = false }) => (
  <div className="flex flex-col w-full">
    <div className="flex justify-between items-center w-full cursor-pointer" onClick={onToggle}>
      <span className="font-satoshi text-xl font-bold text-black">{title}</span>
      {!noChevron && (
        <Image
          src="/assets/svg/chevron_top.svg"
          width={15}
          height={10}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          alt="chevron-top"
        />
      )}
    </div>
    <div className={`overflow-hidden transition-all duration-600 ${isOpen ? "max-h-[500px] mt-3" : "max-h-0"}`}>
      {isOpen && children}
    </div>
  </div>
);

const FilterBar = () => {
  const { properties, filters, updateFilters, applyFilters } = useProduct();
  const [openSections, setOpenSections] = useState({
    price: false,
    colors: false,
    size: false,
    dressStyle: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFilterChange = (type, value) => {
    updateFilters(type, value);
  };

  const handlePriceChange = (min, max) => {
    updateFilters("priceRange", { min, max });
  };

  return (
    <div className="flex flex-col p-4 gap-4 mx-auto rounded-lg border border-[rgba(0,0,0,0.1)] overflow-hidden">
      <header className="flex justify-between items-center w-full">
        <span className="font-satoshi text-xl font-bold text-black">Filters</span>
        <img src="/assets/svg/reviews-filter.svg" className="w-5 h-5 opacity-40" alt="Filter icon" />
      </header>

      <div className="border-t border-gray-300 my-2" />

      <div className="flex flex-col gap-5 w-full">
        {properties?.categories.map((category, idx) => (
          <div className="flex justify-between items-center w-full" key={idx}>
            <span
              className="text-base text-gray-600 cursor-pointer"
              onClick={() => handleFilterChange("category", category.name)}
            >
              {category.name}
            </span>
            <Image src="/assets/svg/chevron_top.svg" width={15} height={10} className="rotate-90 opacity-60" alt="chevron-top" />
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300 mt-2" />

      <CollapsibleSection
        title="Price"
        isOpen={openSections.price}
        onToggle={() => toggleSection("price")}
      >
        <RangeSlider
          onChange={handlePriceChange}
          min={properties?.priceRange.min}
          max={properties?.priceRange.max}
        />
      </CollapsibleSection>

      <div className="border-t border-gray-300 mt-2" />

      <CollapsibleSection
        title="Colors"
        isOpen={openSections.colors}
        onToggle={() => toggleSection("colors")}
      >
        <div className="flex flex-wrap gap-3 mt-3">
          {properties?.colors.map((color, index) => (
            <ColorCircle
              key={index}
              color={color.code}
              isSelected={filters.color === color.id}
              onClick={() => handleFilterChange("color", color.id)}
            />
          ))}
        </div>
      </CollapsibleSection>

      <div className="border-t border-gray-300 mt-2" />

      <CollapsibleSection
        title="Size"
        isOpen={openSections.size}
        onToggle={() => toggleSection("size")}
      >
        <div className="flex gap-4 flex-wrap">
          {properties?.sizes.map((size) => (
            <SizeButton key={size.id} size={size.name}
			isSelected={filters.size.includes(size.id)}
			onClick={() => handleFilterChange("size", size.id)} />
          ))}
        </div>
      </CollapsibleSection>

      <div className="border-t border-gray-300 mt-2" />

      <CollapsibleSection
        title="Dress Style"
        isOpen={openSections.dressStyle}
        onToggle={() => toggleSection("dressStyle")}
      >
        <div className="flex flex-col gap-2">
          {properties?.styles.map((style) => (
            <div className="flex justify-between items-center w-full" key={style.id}>
              <span className="text-base text-gray-600">{style.name}</span>
              <Image
                src="/assets/svg/chevron_top.svg"
                width={15}
                height={10}
                className="rotate-90 opacity-60"
                alt="chevron-top"
              />
            </div>
          ))}
        </div>
      </CollapsibleSection>

      <button
        className="w-full bg-[#012f3f] text-white font-medium text-lg rounded-full py-3"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBar;
