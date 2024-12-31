import Breadcrumb from '@/components/misc/Breadcrumb'
import { ProductReviews } from '@/components/Sections/ProductPage/ProductReviews'
import RecommendedProducts from '@/components/Sections/ProductPage/RecommendedProducts'
import ProductComp from '@/components/ProductComp'
import React from 'react'

function page() {
  return (
    <>
    <div className='container w-[90%] mx-auto'>
    <Breadcrumb/>
    <ProductComp/>
    <ProductReviews/>
    <RecommendedProducts/>
    </div>
    </>
  )
}

export default page