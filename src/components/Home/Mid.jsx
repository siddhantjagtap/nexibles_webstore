import React from 'react'
import Image from 'next/image'

import pouch1 from '../../../public/Home/pouch-1.png'
import pouch2 from '../../../public/Home/pouch-2.png'
import pouch3 from '../../../public/Home/pouch-3.png'
import pouch4 from '../../../public/Home/pouch-4.png'

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
    <div className="bg-[#464087] text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#ffda40] mb-8">
        Celebrate With Personalization
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Make your moments unforgettable with uniquely designed stand-up pouches
        Crafted just for You!
      </p>

      {/* Celebration Icons */}
      <div className="flex justify-center space-x-8 mb-16">
        {celebrations.map((celebration, index) => (
          <div key={index} className="text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-2">
              <span className="text-4xl">{celebration.icon}</span>
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
          <div key={index} className="w-64 ">
            <div className="bg-[#f7eee5] rounded-b-full h-80 flex items-end justify-center ">
             
              <Image
                src={pouch.image}
                alt={pouch.name}
                width={400}
                height={480} 
                className="object-contain transition-transform duration-300 hover:-translate-y-[50px]"
              />
            
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-[#ffda40] text-[#464087] px-8 py-3 rounded-full font-bold">
          Customise
        </button>
      </div>
    </div>
  )
}

// import React from 'react'
// import bird from '../../../public/Home/bird.png'
// import butterfly1 from '../../../public/Home/butterfly_1.png'
// import butterfly2 from '../../../public/Home/butterfly_2.png'
// import butterfly3 from '../../../public/Home/butterfly_3.png'
// import butterfly4 from '../../../public/Home/butterfly_4.png'
// import pouch1 from '../../../public/Home/pouch-1.png'
// import pouch2 from '../../../public/Home/pouch-2.png'
// import pouch3 from '../../../public/Home/pouch-3.png'
// import pouch4 from '../../../public/Home/pouch-4.png'

// export default function Mid() {
//   const celebrations = [
//     { name: 'Diwali', icon: bird },
//     { name: 'Birthday', icon: butterfly1 },
//     { name: 'Wedding', icon: butterfly2 },
//     { name: 'Graduation', icon: butterfly3 },
//   ]

//   const products = [
//     { image: pouch1 },
//     { image: pouch2 },
//     { image: pouch3 },
//     { image: pouch4 },
//   ]

//   return (
//     <div className="bg-[#464087] p-8 px-24 rounded-lg relative">
//       <h1 className="text-4xl font-bold text-yellow-300 mb-4 text-center">Popular Products</h1>
      
//       <div className="flex justify-between mb-12">
//         {celebrations.map((celebration, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <div className="bg-white rounded-full p-4 mb-2 w-16 h-16 flex items-center justify-center">
//               <img src={celebration.icon.src} alt={celebration.name} className="w-10 h-10" />
//             </div>
//             <span className="text-[#ffda40] font-semibold">{celebration.name}</span>
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center justify-center gap-6">
//         {products.map((product, index) => (
//           <div key={index} className="relative">
//             <div className="bg-[#f7eee5] rounded-t-3xl rounded-b-full h-[24rem] w-[18rem] flex items-center justify-center overflow-hidden">
//               <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
//                 <img 
//                   src={product.image.src} 
//                   alt="Product" 
//                   className="w-[120%] h-[120%] object-contain transition-transform duration-300 hover:translate-y-[-50px]" 
//                 />
//               </div>
//             </div>
//             <button className="bg-[#ffda40] text-[#362c60] font-bold py-2 px-10 rounded-full absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 text-sm hover:scale-105 transition-transform duration-300">
//               Customise
//             </button>
//           </div>
//         ))}
//       </div>

//       <img src={butterfly1.src} alt="Butterfly" width={30} height={30} className="absolute top-10 left-5 transform -rotate-12" />
//       <img src={butterfly2.src} alt="Butterfly" width={25} height={25} className="absolute bottom-20 right-10 transform rotate-45" />
//       <img src={butterfly4.src} alt="Butterfly" width={30} height={30} className="absolute top-16 right-24 transform rotate-45" />
//     </div>
//   )
// } 