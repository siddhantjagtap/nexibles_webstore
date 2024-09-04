import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import Terms from '@/components/Terms-and-conditions/Terms'
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