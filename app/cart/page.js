import Breadcrumb from '@/components/misc/Breadcrumb'
import CartSection from '@/components/Sections/CartSection'
import React from 'react'
import "@/styles/Cart.min.css"
function page() {
  return (
     <div className='container w-[90%] mx-auto'>
            <Breadcrumb/>
            <CartSection/>
            
    </div>
  )
}

export default page