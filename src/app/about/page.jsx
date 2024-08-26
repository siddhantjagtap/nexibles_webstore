import About from '@/components/about/About'
import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
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
