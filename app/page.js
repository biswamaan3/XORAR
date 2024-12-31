import BentoGrid from '@/components/BentoGrid'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import HoodiesSection from '@/components/Sections/HoodiesSection'
import TshirtSection from '@/components/Sections/TshirtSection'
import Testimonials from '@/components/Testimonials'
import React from 'react'

function page() {
  return (
    <div>
   
      <Hero/>
      <TshirtSection/>
      <HoodiesSection/>
      <BentoGrid/>
      <Testimonials/>
    </div>
  )
}

export default page