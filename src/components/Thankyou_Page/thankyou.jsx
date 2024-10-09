import React from "react";
import Image from "next/image";
import Envelope from "../../../public/Thank_You_Page/Thank_You_Page_Illustration.svg";
import Butterfly from "../../../public/Thank_You_Page/Thank_You_Page_Butterflies.svg";

function Thankyou() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover"
      style={{
        backgroundImage: "url('/Contact_Us_Page/Contact_Us_Background.jpg')",
      }}
    >
      <div className="text-center px-4 lg:px-64">
        <div className="flex flex-col lg:flex-row items-center justify-center mt-4">
          <Image
            src={Envelope.src}
            alt="Envelope Icon"
            width={192}
            height={192}
            className="w-[120px] h-[120px] sm:w-[192px] sm:h-[192px] "
          />
          <h1 className="text-4xl sm:text-6xl lg:text-[7rem] font-bold text-yellow-400 lg:ml-6 mt-4 lg:mt-0">
            Thank You!
          </h1>
          <img
            src={Butterfly.src}
            alt="Butterfly 1"
            className="absolute right-[2rem] sm:right-[6rem] lg:right-[14rem] top-20 sm:top-40 w-[5rem] sm:w-[7rem] lg:w-[10rem] h-[5rem] sm:h-[7rem] lg:h-[10rem]"
          />
        </div>
        <div className="mt-8">
          <p className="text-lg sm:text-2xl lg:text-3xl text-white mb-4">
            For ordering from NexiGifting. You shall receive an email soon
            confirming your order and the{" "}
            <span className="font-bold text-yellow-300">tracking link</span>{" "}
            with it.
          </p>
          <div className="text-lg sm:text-2xl lg:text-3xl text-white mb-4">
            If you have any questions or need assistance, feel free to reach out
            to us at{" "}
            <a href="mailto:sales@artnext.in" className="text-yellow-300">
              sales@artnext.in
            </a>
          </div>
          <p className="text-lg sm:text-2xl lg:text-3xl text-white">
            Thanks again, and we hope you enjoy your personalised pouches!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;

// //old

// import React from 'react'
// import Image from 'next/image';
// import Envelope from '../../../public/Thank_You_Page/Thank_You_Page_Illustration.svg'
// import Butterfly from '../../../public/Thank_You_Page/Thank_You_Page_Butterflies.svg'
// function Thankyou() {
//     return (
//         <div className="flex items-center justify-center h-screen " style={({ backgroundImage: "url('/Contact_Us_Page/Contact_Us_Background.jpg')" })}>
//             <div className="">
//                 <div className='flex items-center justify-center'>
//                 <Image
//                         src={Envelope.src}
//                         alt="Envelope Icon"
//                         width={192}
//                         height={192}
//                     />
//                     <h1 className="text-[10rem] font-bold text-yellow-400 ml-6">Thank You!</h1>
//                     <img src={Butterfly.src} alt="Butterfly 1" className="absolute right-[14rem] top-40 w-[10rem] h-[10rem]" />
//                 </div>
//                 <div className=' px-64 text-center '>
//                     <p className="text-3xl text-white mb-4 ">
//                         For ordering from NexiGifting. You shall receive an email soon confirming your order and the{' '}
//                         <span className="font-bold text-yellow-300">tracking link</span> with it.
//                     </p>
//                     <div className=" text-3xl text-white mb-4">
//                         If you have any questions or need assistance, feel free to reach out to us at{' '}
//                         <a href="mailto:sales@artnext.in" className="text-yellow-300">sales@artnext.in</a>
//                     </div>
//                     <p className="text-3xl text-white">
//                         Thanks again, and we hope you enjoy your personalised pouches!
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Thankyou
