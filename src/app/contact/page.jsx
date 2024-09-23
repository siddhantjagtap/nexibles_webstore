import Contact from '@/components/Contact-us/Contact'
import MyAccount from '@/components/dashboard/MyAccount'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

function page() {
  return (
    <div>
    <Navbar />
    <div className="md:flex bg-white containers">
        <div className="md:w-1/3 w-full">
            <MyAccount />
        </div>
        <Contact />
    </div>
    <Footer />
</div>
  )
}

export default page