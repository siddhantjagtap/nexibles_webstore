import All_blog from '@/components/Blog/All_blog'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        <All_blog />
        <Footer />
    </div>
  )
}

export default page