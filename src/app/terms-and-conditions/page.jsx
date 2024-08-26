import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import Terms from '@/components/Terms-and-Conditions/Terms'
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