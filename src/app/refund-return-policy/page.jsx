import React from 'react'
import Refund from '@/components/Refund-return-policy/Refund'
import Navbar from '@/components/Home/Navbar'
import Footer from '@/components/Home/Footer'

function page() {
    return (
      <div className="[&>nav]:!bg-white">
        <Navbar />
        <Refund />
        <Footer />
      </div>
    );
}

export default page