import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import Privacy from '@/components/Privacy-policy/Privacy'
import React from 'react'

function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Privacy /></div>
      <Footer/>
    </div>
  )
}

export default page