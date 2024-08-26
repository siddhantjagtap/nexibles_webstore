import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import Terms from '@/components/terms-and-conditions/Terms'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <Terms/>
      <Footer/>
      </div>
  )
}

export default page;