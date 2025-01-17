"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {CiHeart, CiSearch} from "react-icons/ci";

function SearchComp() {
	const [search, setSearch] = useState("");
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const router = useRouter();
    const handleSearch = (e) => {
      e.preventDefault();
      console.log("Search submitted:", search);
      if(search.trim() !== "") {
        router.push(`/product/search?query=${search}`);
      }
    };
  
    // useEffect(() => {
    //   if (debounceTimeout) clearTimeout(debounceTimeout);
  
    //   const timeout = setTimeout(() => {
    //     if (search.trim() !== "") {
    //       console.log("Debounced search:", search);
    //     }
    //   }, 3000);
  
    //   setDebounceTimeout(timeout);
  
    //   return () => clearTimeout(timeout); 
    // }, [search]);
	return (
		<div className='flex items-center gap-3 bg-[#efefef] p-3 rounded-full flex-grow'>
			<form className='relative w-full' onSubmit={handleSearch}>
				<div className='absolute inset-y-0 start-0 flex items-center pointer-events-none'>
					<CiSearch className='frame-6 ml-1' onClick={handleSearch} />
				</div>
				<input
					type='search'
					id='default-search'
					className='ps-8 block w-full text-[16px] text-gray-900 bg-transparent'
					placeholder='Search for products...'
					required
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default SearchComp;
