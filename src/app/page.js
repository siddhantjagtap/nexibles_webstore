import WhatWeDo from '@/components/home/WhatWeDo'
import React from 'react'
import Footer from '@/components/shop/Footer'
import GreenPart from '@/components/home/GreenPart'
import AdvantageItem from '@/components/home/AdvantageItem'
import HeaderSection from '@/components/home/HeaderSection'
import Navbar from '@/components/shop/Navbar'
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <AdvantageItem/>
      <WhatWeDo />
      <GreenPart />
      <Footer />
    </div>
  )
}

export default Home
