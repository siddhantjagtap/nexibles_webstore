'use client'
import React from 'react'
import { useAuth } from '@/utils/authContext'

const MyDashboard = () => {

  const { user } = useAuth();
  console.log(user,"datauser")

  return (
    <div>
        <div className="bg-white py-20 mt-4 px-10">
            <h2 className="mb-6 font-bold text-2xl text-gray-900">My Dashboard</h2>
            <p className="text-gray-900 text-2xl font-semibold">Hello, {user?.result?.firstName || user?.firstName} !</p>
            <p className="text-gray-900">Your Account Activity</p>
            {/*<div className="py-6">
              <button className="bg-black text-white rounded-full px-6 py-2 w-60 uppercase">account settings</button>
            </div>*/}
        </div>
    </div>
  )
}

export default MyDashboard