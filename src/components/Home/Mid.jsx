import React from 'react'

// import bird from '../../public/bird.png'
// import butterfly1 from '../../public/butterfly_1.png'
// import butterfly2 from '../../public/butterfly_2.png'
// import butterfly3 from '../../public/butterfly_3.png'
// import butterfly4 from '../../public/butterfly_4.png'
import pouch1 from '../../../public/Home/pouch-1.png'
import pouch2 from '../../../public/Home/pouch-2.png'
import pouch3 from '../../../public/Home/pouch-3.png'
import pouch4 from '../../../public/Home/pouch-4.png'

export default function Mid() {
  const celebrations = [
    // { name: 'Diwali', icon: bird },
    // { name: 'Birthday', icon: butterfly1 },
    // { name: 'Wedding', icon: butterfly2 },
    // { name: 'Graduation', icon: butterfly3 },
  ]

  const products = [
    { image: pouch1 },
    { image: pouch2 },
    { image: pouch3 },
    { image: pouch4 },
  ]

  return (
    <div className="bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 p-8 px-24 rounded-lg">
      <h1 className="text-4xl font-bold text-yellow-300 mb-4">Celebrate With Personalization</h1>
      <p className="text-white text-lg mb-8">
        Make your moments unforgettable with uniquely designed stand-up pouches Crafted just for You!
      </p>
      
      <div className="flex justify-between mb-12">
        {celebrations.map((celebration, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white rounded-full p-4 mb-2 w-24 h-24 flex items-center justify-center">
              <img src={celebration.icon.src} alt={celebration.name} className="w-16 h-16" />
            </div>
            <span className="text-yellow-300 font-semibold">{celebration.name}</span>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-yellow-300 mb-6 relative">
        Popular Products
        <img src={butterfly4.src} alt="Butterfly" width={30} height={30} className="absolute -top-4 -right-8 transform rotate-45" />
      </h2>
      <div className="grid grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="relative group">
            <div className="bg-white rounded-b-full rounded-t-md h-80 w-[80%] overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src={product.image.src} alt="Product" className="w-full h-48 object-cover" />
            </div>
            <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full transition-transform duration-300 group-hover:scale-105">
              Customise
            </button>
          </div>
        ))}
      </div>
      <img src={butterfly1.src} alt="Butterfly" width={30} height={30} className="absolute top-10 left-5 transform -rotate-12" />
      <img src={butterfly2.src} alt="Butterfly" width={25} height={25} className="absolute bottom-20 right-10 transform rotate-45" />
    </div>
  )
}