import ShippingPolicy from '@/components/legal/ShippingPolicy'
import Breadcrumb from '@/components/misc/Breadcrumb'
import { PageTitle } from '@/components/misc/Text'
import React from 'react'

function page() {
  return (
		<div className="container w-[90%] mx-auto">
        <Breadcrumb/>
        
        <PageTitle className='mt-5 text-center'> Shipping Policy </PageTitle>
        <ShippingPolicy/>
    </div>
  )
}

export default page