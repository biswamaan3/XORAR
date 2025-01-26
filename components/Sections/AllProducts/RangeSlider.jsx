"use client";

import React, { useState, useEffect } from "react";

const RangeSlider = ({ onChange, min = 0, max = 10000 }) => {
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  const handleMinChange = (value) => {
    const newValue = Math.max(Number(value), min); // Ensure minPrice doesn't go below `min`
    if (newValue <= maxPrice) {
      setMinPrice(newValue);
    }
  };

  const handleMaxChange = (value) => {
    const newValue = Math.min(Number(value), max); // Ensure maxPrice doesn't exceed `max`
    if (newValue >= minPrice) {
      setMaxPrice(newValue);
    }
  };

  useEffect(() => {
    // Trigger the onChange callback with a debounce of 300ms
    const timer = setTimeout(() => {
      onChange({ min: minPrice, max: maxPrice });
    }, 300);

    return () => clearTimeout(timer);
  }, [minPrice, maxPrice]);

  return (
    <div className="relative max-w-xl w-full mt-3">
      <div>
        {/* Range Inputs */}
        <input
          type="range"
          step="10"
          min={min}
          max={max}
          value={minPrice}
          onInput={(e) => handleMinChange(e.target.value)}
          className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
        />
        <input
          type="range"
          step="10"
          min={min}
          max={max}
          value={maxPrice}
          onInput={(e) => handleMaxChange(e.target.value)}
          className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
        />
        <div className="relative z-10 h-2">
          {/* Background Track */}
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-gray-200 rounded-md"></div>
          {/* Active Range Track */}
          <div
            className="absolute top-0 bottom-0 bg-[#012F3F] rounded-md"
            style={{
              left: `${((minPrice - min) / (max - min)) * 100}%`,
              right: `${100 - ((maxPrice - min) / (max - min)) * 100}%`,
            }}
          ></div>
          {/* Min Thumb */}
          <div
            className="absolute w-5 h-5 bg-[#012F3F] rounded-full -mt-2"
            style={{
              left: `${((minPrice - min) / (max - min)) * 100}%`,
              transform: "translateX(-50%)",
            }}
          ></div>
          {/* Max Thumb */}
          <div
            className="absolute w-5 h-5 bg-[#012F3F] rounded-full -mt-2"
            style={{
              left: `${((maxPrice - min) / (max - min)) * 100}%`,
              transform: "translateX(-50%)",
            }}
          ></div>
        </div>
      </div>

      {/* Price Input Fields */}
      <div className="flex items-center justify-between pt-5 space-x-4 text-sm text-gray-700">
        <div>
          <input
            type="text"
            value={`₹${minPrice}`}
            onChange={(e) =>
              handleMinChange(e.target.value.replace(/[^\d]/g, ""))
            }
            className="w-20 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            value={`₹${maxPrice}`}
            onChange={(e) =>
              handleMaxChange(e.target.value.replace(/[^\d]/g, ""))
            }
            className="w-20 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
