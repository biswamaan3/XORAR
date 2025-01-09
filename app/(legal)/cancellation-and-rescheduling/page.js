import CancellationAndReschedulingPolicy from '@/components/legal/CancellationPolicy'
import Breadcrumb from '@/components/misc/Breadcrumb'
import { PageTitle } from '@/components/misc/Text'
import React from 'react'

function page() {
  return (
		<div className="container w-[90%] mx-auto">
        <Breadcrumb/>
        
        <PageTitle className='mt-5 text-center'> Cancellation and Rescheduling Policy </PageTitle>
        <CancellationAndReschedulingPolicy/>
    </div>
  )
}

export default page