import About from '@/components/about/About'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        <About />
        <Footer/>
        </div>
  )
}
