import Navbar from '@/components/Home/Navbar'
import Privacy from '@/components/Privacy_policy/Privacy'
import React from 'react'

function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Privacy /></div>
    </div>
  )
}

export default page