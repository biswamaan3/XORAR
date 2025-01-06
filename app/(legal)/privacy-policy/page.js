import PrivacyPolicy from '@/components/legal/privacyPolicy'
import TermsAndConditions from '@/components/legal/tc'
import Breadcrumb from '@/components/misc/Breadcrumb'
import { PageTitle } from '@/components/misc/Text'
import React from 'react'

function page() {
  return (
		<div className="container w-[90%] mx-auto">
        <Breadcrumb/>
        
        <PageTitle className='mt-5 text-center'> Privacy Policy </PageTitle>
        <PrivacyPolicy/>
    </div>
  )
}

export default page