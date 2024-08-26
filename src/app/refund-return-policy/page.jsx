import React from 'react'
import Refund from '@/components/Refund-Return-Policy/Refund'
import Navbar from '@/components/Home/Navbar'
import Footer from '@/components/Home/Footer'

function page() {
    return (
        <div>
            <Navbar />
            <Refund />
            <Footer/>
        </div>
    )
}

export default page