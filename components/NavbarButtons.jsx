"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function NavbarButtons() {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [wishlistItemsCount, setWishlistItemsCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItemsCount(cartItems.length);

    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItemsCount(wishlistItems.length);
  }, []);

  return (
    <div className='flex items-center gap-3'>
      <Link href='/cart' className='relative'>
        <Image
          src='/assets/svg/cart.svg'
          width={28}
          height={28}
          alt='Cart Icon'
        />
        {cartItemsCount > 0 && (
          <div
            className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white
            bg-blue-500 border-2 border-white rounded-full -top-3 -end-2.5 dark:border-gray-900'
          >
            {cartItemsCount}
          </div>
        )}
      </Link>
      <Link href='/favourites' className='relative'>
        <Image
          src='/assets/svg/Heart.svg'
          width={28}
          height={28}
          alt='Heart Icon'
        />
        {wishlistItemsCount > 0 && (
          <div
            className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white
            bg-red-500 border-2 border-white rounded-full -top-3 -end-2.5 dark:border-gray-900'
          >
            {wishlistItemsCount}
          </div>
        )}
      </Link>
    </div>
  );
}

export default NavbarButtons;
