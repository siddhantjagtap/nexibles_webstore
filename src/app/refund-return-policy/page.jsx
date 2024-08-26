import React from 'react'
import Refund from '@/components/refund-return-policy/Refund'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'

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