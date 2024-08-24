import React from 'react'
import Image from 'next/image'
import pouch1 from '../../../public/Home/pouch-1.png'
import pouch2 from '../../../public/Home/pouch-2.png'
import pouch3 from '../../../public/Home/pouch-3.png'
import pouch4 from '../../../public/Home/pouch-4.png'
import human from '../../../public/Home/human.png'
import bird from '../../../public/Home/bird.png'

export default function Mid() {
  const celebrations = [
    { name: 'Diwali', icon: '🪔' },
    { name: 'Birthday', icon: '🎂' },
    { name: 'Wedding', icon: '💐' },
    { name: 'Graduation', icon: '🎓' },
  ]

  const pouches = [
    { name: 'Pouch 1', image: pouch1 },
    { name: 'Pouch 2', image: pouch2 },
    { name: 'Pouch 3', image: pouch3 },
    { name: 'Pouch 4', image: pouch4 },
  ]

  return (
    <div className="bg-[#464087] text-white py-12 px-8">
      <h2 className="text-3xl font-bold text-center text-[#ffda40] mb-8">
        Celebrate With Personalization
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Make your moments unforgettable with uniquely designed stand-up pouches
        Crafted just for You!
      </p>

      {/* Celebration Icons */}
      <div className="flex justify-center space-x-24 mb-16">
        {celebrations.map((celebration, index) => (
          <div key={index} className="text-center">
            <div className="w-48 h-48 bg-[#f7eee5] rounded-full flex items-center justify-center mb-2">
              <span className="text-8xl">{celebration.icon}</span>
            </div>
            <p>{celebration.name}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-center text-[#ffda40] mb-8">
        Popular Products
      </h3>

      {/* Pouches */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {pouches.map((pouch, index) => (
          <div key={index} className="w-64 relative pt-4">
            <div className="bg-[#f7eee5] rounded-t-3xl rounded-b-[50%] h-[20rem] flex items-center justify-center ">
              <div className="relative w-full h-full -mt-6">
                <Image
                  src={pouch.image}
                  alt={pouch.name}
                  layout="fill"
                  objectFit="contain"
                  className="scale-110 transition-transform duration-300 hover:-translate-y-16 hover:scale-115"
                />
              </div>
            </div>
            <button className="bg-[#ffda40] text-[#464087] px-6 py-1 rounded-full font-bold text-xl absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Customise
            </button>
          </div>
        ))}
      </div>

        {/* Versatile Gifting section */}
        <div className="flex  items-center  relative">
        <div className="">
          <h2 className="text-8xl font-bold text-white mb-6">Versatile Gifting</h2>
          <p className="text-4xl mb-8 max-w-xl">
            Perfect Custom Pouches for gifting Chocolates, Coffee Beans, Dry Fruits and more
          </p>
          <div className="flex items-center absolute bottom-0 left-0">
            <div className="relative w-80 h-80">
              <Image src={human} alt="Human" layout="fill" objectFit="contain" />
            </div>
            <div className="relative w-56 h-56 -ml-20 mb-12">
              <Image src={bird} alt="Bird" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute top-24 right-28 flex space-x-20">
            <div className="w-28 h-28 bg-white rounded-full"></div>
            <div className="w-28 h-28 bg-white rounded-full"></div>
            <div className="w-28 h-28 bg-white rounded-full"></div>
          </div>
          <Image 
            src={pouch2} 
            alt="Large Pouch" 
            width={800} 
            height={1000} 
            objectFit="contain" 
            className="ml-auto mt-[10rem]"
          />
        </div>
      </div>

      {/* Celebrations section */}
      <div className="text-center mt-24">
        <h3 className="text-3xl font-bold text-[#ffda40] mb-6">Celebrations</h3>
      </div>
    </div>
  )
}