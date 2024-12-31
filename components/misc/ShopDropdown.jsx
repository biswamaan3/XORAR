'use client';

import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 p-2 bg-gray-200 rounded-md"
      >
        <span className="shop">Shop</span>
        <MdKeyboardArrowDown />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-[9999999]"
          style={{ top: '100%' }}
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
  );
}
