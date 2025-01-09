import ReturnRefundPolicy from '@/components/legal/ReturnRefund'
import Breadcrumb from '@/components/misc/Breadcrumb'
import { PageTitle } from '@/components/misc/Text'
import React from 'react'

function page() {
  return (
		<div className="container w-[90%] mx-auto">
        <Breadcrumb/>
        
        <PageTitle className='mt-5 text-center'> Return & Refund Policy </PageTitle>
        <ReturnRefundPolicy/>
    </div>
  )
}

export default page