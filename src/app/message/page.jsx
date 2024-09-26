import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import AddMessage from '@/components/message/AddMessage'
import React from 'react'

export default function page() {
  return (
    <div>
    <Navbar/>
    <AddMessage/>
    <Footer/>
    </div>
  )
}
