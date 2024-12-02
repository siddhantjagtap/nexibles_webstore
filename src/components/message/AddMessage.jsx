"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SubmitFormIllustration from "../../../public/Home/Submit-Form-Illustration.svg";
import hoverbox from "../../../public/Home/hoverbox.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



export default function AddMessage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pouchId = searchParams.get("pouchId");
  const size = searchParams.get("size");
  const imageFileName = searchParams.get("image")?.replace(/%20/g, "-");
  const [productImages, setProductImages] = useState([]);
  const [skipPicture, setSkipPicture] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image2, setImage2] = useState(null);
  const existingImageUrl = `https://nexiblesapp.barecms.com/uploads/${imageFileName}`;
  const [placeholder, setPlaceholder] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  // Zoom state and refs
  const [isHovered, setIsHovered] = useState(false);
  const mainImageRef = useRef(null);
  const zoomRef = useRef(null);
  const hoverBoxRef = useRef(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // Zoom functionality methods
  const handleMouseMove = (e) => {
    if (!mainImageRef.current || !zoomRef.current || !hoverBoxRef.current)
      return;

    const { left, top, width, height } =
      mainImageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const hoverBoxSize = 100;
    const hoverBoxLeft = Math.max(
      0,
      Math.min(e.clientX - left - hoverBoxSize / 2, width - hoverBoxSize)
    );
    const hoverBoxTop = Math.max(
      0,
      Math.min(e.clientY - top - hoverBoxSize / 2, height - hoverBoxSize)
    );

    hoverBoxRef.current.style.left = `${hoverBoxLeft}px`;
    hoverBoxRef.current.style.top = `${hoverBoxTop}px`;

    const zoomX = x * 100;
    const zoomY = y * 100;
    zoomRef.current.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Image sources array for zoom functionality
  const imageSources = [
    existingImageUrl,
    ...(productImages.length > 0
      ? [
          `https://nexiblesapp.barecms.com/uploads/${productImages[0].image_url}`,
        ]
      : []),
  ];

  useEffect(() => {
    const getPlaceholderFromCart = () => {
      if (typeof window !== "undefined") {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const currentProduct = cart.find(
          (item) => item.id === parseInt(pouchId, 10)
        );

        if (currentProduct?.placeholder) {
          setPlaceholder(currentProduct.placeholder);
          if (!message) {
            setMessage("");
          }
        }
      }
    };

    async function fetchProductImages() {
      const response = await fetch(
        `https://nexiblesapp.barecms.com/api/productimages/${pouchId}`
      );
      const data = await response.json();
      setProductImages(data.data);

      if (data.data && data.data.length > 0) {
        setImage2(data.data[0].image_url);
      }
    }

    if (pouchId) {
      getPlaceholderFromCart();
      fetchProductImages();
    }
  }, [pouchId, message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) => {
      if (item.id === parseInt(pouchId, 10)) {
        return {
          ...item,
          customer_name: name || "Not Uploaded",
          custom_message: message || null,
          image2: image2 || null,
        };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    router.push(
      `/almost-there?pouchId=${pouchId}&size=${size}&image=${encodeURIComponent(
        imageFileName
      )}`
    );
  };

  if (!imageFileName) {
    return <div>Product image not found</div>;
  }


  return (
    <div className="min-h-screen pt-28 lg:pt-24 bg-white px-4 md:py-8 justify-center items-center">
      <Link
        href={`/productsize?pouchId=${pouchId}&image=${encodeURIComponent(
          imageFileName
        )}`}
        className="text-[#124e66] ml-2 sm:ml-4 font-gotham-rounded-bold text-sm sm:text-base"
      >
        ← Back
      </Link>
      <h1 className="text-2xl sm:text-3xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-4 mb-6 sm:mt-6 sm:mb-8">
        Add Your Message
      </h1>
      <div className="max-w-6xl md:ml-[-3rem] flex flex-col sm:flex-row sm:px-[10rem] px-4">
        {/* Mobile Image Section with Swiper */}
        <div className="flex flex-col items-center w-full sm:hidden mb-8">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
            className="w-full"
          >
            {imageSources.map((src, index) => (
              <SwiperSlide key={index} className="flex justify-center mb-8 ">
                
                <div className="relative w-full flex flex-col items-center">
                  <Image
                    src={src}
                    alt={`Pouch View ${index + 1}`}
                    width={160}
                    height={240}
                    className="rounded max-w-[160px] max-h-[240px] object-contain mx-auto "
                  />
                  <div className="text-[#ee6e73] text-xs mt-4">
                    {index === 0 ? "Front" : "Back"}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Rest of the existing form code remains the same */}
        <form onSubmit={handleSubmit} className="w-full sm:w-2/3 mb-8 sm:pr-8">
          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="name"
              className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
            >
              Add your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Karan & Jinal Doshi"
              className="w-full p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light"
            />
            <input
              type="checkbox"
              className="mr-2 mt-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
              checked={skipPicture}
              onChange={(e) => setSkipPicture(e.target.checked)}
            />
            <span className="text-[#124e66]">Skip</span>
          </div>

          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="message"
              className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
            >
              Add your message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleChange}
              placeholder={placeholder}
              className="w-full p-2 border text-gray-700 border-[#197d8e] rounded-lg font-gotham-light sm:rounded-3xl text-md h-32 sm:h-60"
              maxLength={60}
              required
            />
            <p className="text-xs font-gotham-light sm:text-md text-[#ee6e73] mt-1">
              up to 60 words maximum
            </p>
          </div>

          <div className="flex items-center mt-4">
            <Image
              src={SubmitFormIllustration}
              alt="Colorful Graphic"
              width={60}
              height={60}
              className="mr-4"
            />
            <button
              type="submit"
              className="bg-[#124e66] font-gotham-rounded-bold text-white px-4 py-2 ml-[-1.3rem] mb-[1.2rem] rounded-full text-sm sm:text-base hover:bg-[#0e3e51] transition duration-300"
            >
              Next
            </button>
          </div>
        </form>

        {/* Desktop Image Section with Zoom (Unchanged) */}
        <div className="hidden sm:flex w-1/3 flex-col items-center mt-8">
          <div className="relative w-full aspect-[4/4]">
            <Image
              ref={mainImageRef}
              src={imageSources[currentImageIndex]}
              alt={`Pouch View ${currentImageIndex + 1}`}
              width={250}
              height={350}
              className="rounded max-w-[250px] max-h-[350px] object-contain mx-auto"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {isHovered && (
              <>
                <div
                  ref={hoverBoxRef}
                  className="absolute z-30 pointer-events-none"
                  style={{ width: "100px", height: "100px" }}
                >
                  <Image
                    src={hoverbox}
                    alt="Hover box"
                    className="w-full h-full"
                  />
                </div>
                <div
                  ref={zoomRef}
                  className="absolute top-0 left-full ml-4 w-full h-[350px] bg-white shadow-xl border-2 z-40"
                  style={{
                    backgroundImage: `url(${imageSources[currentImageIndex]})`,
                    backgroundSize: "200%",
                    backgroundRepeat: "no-pass",
                  }}
                />
              </>
            )}
          </div>
          <div className="text-[#ee6e73] font-gotham-light text-xs sm:text-sm mt-4">
            {currentImageIndex === 0 ? "Front" : "Back"}
          </div>

          {/* Image Selector Buttons for Desktop */}
          <div className="flex space-x-2 mt-2">
            {imageSources.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? "bg-[#ee6e73]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-[#ee6e73] text-sm mt-2 font-gotham-light">
            Hover over the image to zoom in
          </div>
        </div>
      </div>
    </div>
  );
}



// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import SubmitFormIllustration from "../../../public/Home/Submit-Form-Illustration.svg";
// import hoverbox from '../../../public/Home/hoverbox.png';

// export default function AddMessage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const pouchId = searchParams.get("pouchId");
//   const size = searchParams.get("size");
//   const imageFileName = searchParams.get("image")?.replace(/%20/g, "-");
//   const [productImages, setProductImages] = useState([]);
//   const [skipPicture, setSkipPicture] = useState(false);
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [image2, setImage2] = useState(null);
//   const existingImageUrl = `https://nexiblesapp.barecms.com/uploads/${imageFileName}`;
//   const [placeholder, setPlaceholder] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Zoom state and refs
//   const [isHovered, setIsHovered] = useState(false);
//   const mainImageRef = useRef(null);
//   const zoomRef = useRef(null);
//   const hoverBoxRef = useRef(null);

//   const handleChange = (e) => {
//     setMessage(e.target.value);
//   };

//   // Zoom functionality methods
//   const handleMouseMove = (e) => {
//     if (!mainImageRef.current || !zoomRef.current || !hoverBoxRef.current) return;

//     const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
//     const x = (e.clientX - left) / width;
//     const y = (e.clientY - top) / height;

//     const hoverBoxSize = 100;
//     const hoverBoxLeft = Math.max(0, Math.min(e.clientX - left - hoverBoxSize / 2, width - hoverBoxSize));
//     const hoverBoxTop = Math.max(0, Math.min(e.clientY - top - hoverBoxSize / 2, height - hoverBoxSize));

//     hoverBoxRef.current.style.left = `${hoverBoxLeft}px`;
//     hoverBoxRef.current.style.top = `${hoverBoxTop}px`;

//     const zoomX = x * 100;
//     const zoomY = y * 100;
//     zoomRef.current.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   // Image sources array for zoom functionality
//   const imageSources = [
//     existingImageUrl,
//     ...(productImages.length > 0
//       ? [`https://nexiblesapp.barecms.com/uploads/${productImages[0].image_url}`]
//       : [])
//   ];

//   useEffect(() => {
//     const getPlaceholderFromCart = () => {
//       if (typeof window !== 'undefined') {
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         const currentProduct = cart.find(item => item.id === parseInt(pouchId, 10));

//         if (currentProduct?.placeholder) {
//           setPlaceholder(currentProduct.placeholder);
//           if (!message) {
//             setMessage('');
//           }
//         }
//       }
//     };

//     async function fetchProductImages() {
//       const response = await fetch(`https://nexiblesapp.barecms.com/api/productimages/${pouchId}`);
//       const data = await response.json();
//       setProductImages(data.data);

//       if (data.data && data.data.length > 0) {
//         setImage2(data.data[0].image_url);
//       }
//     }

//     if (pouchId) {
//       getPlaceholderFromCart();
//       fetchProductImages();
//     }
//   }, [pouchId, message]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedCart = cart.map((item) => {
//       if (item.id === parseInt(pouchId, 10)) {
//         return {
//           ...item,
//           customer_name: name || "Not Uploaded",
//           custom_message: message || null,
//           image2: image2 || null,
//         };
//       }
//       return item;
//     });

//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     router.push(
//       `/almost-there?pouchId=${pouchId}&size=${size}&image=${encodeURIComponent(
//         imageFileName
//       )}`
//     );
//   };

//   if (!imageFileName) {
//     return <div>Product image not found</div>;
//   }

//   return (
//     <div className="min-h-screen pt-28 lg:pt-24 bg-white px-4 md:py-8 justify-center items-center">
//       <Link
//         href={`/productsize?pouchId=${pouchId}&image=${encodeURIComponent(imageFileName)}`}
//         className="text-[#124e66] ml-2 sm:ml-4 font-gotham-rounded-bold text-sm sm:text-base"
//       >
//         ← Back
//       </Link>
//       <h1 className="text-2xl sm:text-3xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-4 mb-6 sm:mt-6 sm:mb-8">
//         Add Your Message
//       </h1>
//       <div className="max-w-6xl md:ml-[-3rem] flex flex-col sm:flex-row sm:px-[10rem] px-4">

//         {/* Mobile Image Section */}
//         <div className="flex flex-col items-center w-full sm:hidden mb-8">
//           <div className="relative w-full ">
//             <Image
//               src={imageSources[currentImageIndex]}
//               alt={`Pouch View ${currentImageIndex + 1}`}
//               width={160}
//               height={240}
//               className="rounded max-w-[160px] max-h-[240px] object-contain mx-auto"
//             />
//           </div>
//           <div className="text-[#ee6e73] text-xs mt-2">
//             {currentImageIndex === 0 ? 'Front' : 'Back'}
//           </div>

          // <div className="flex space-x-2 mt-2">
          //   {imageSources.map((_, index) => (
          //     <button
          //       key={index}
          //       onClick={() => setCurrentImageIndex(index)}
          //       className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-[#ee6e73]' : 'bg-gray-300'
          //         }`}
          //     />
          //   ))}
          // </div>
//         </div>

//         {/* Rest of the existing form code remains the same */}
//         <form onSubmit={handleSubmit} className="w-full sm:w-2/3 mb-8 sm:pr-8">
//           <div className="mb-4 sm:mb-6">
//             <label
//               htmlFor="name"
//               className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
//             >
//               Add your name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="e.g. Karan & Jinal Doshi"
//               className="w-full p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light"
//             />
//             <input
//               type="checkbox"
//               className="mr-2 mt-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
//               checked={skipPicture}
//               onChange={(e) => setSkipPicture(e.target.checked)}
//             />
//             <span className="text-[#124e66]">Skip</span>
//           </div>

//           <div className="mb-4 sm:mb-6">
//             <label
//               htmlFor="message"
//               className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
//             >
//               Add your message
//             </label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={handleChange}
//               placeholder={placeholder}
//               className="w-full p-2 border text-gray-700 border-[#197d8e] rounded-lg font-gotham-light sm:rounded-3xl text-md h-32 sm:h-60"
//               maxLength={60}
//               required
//             />
//             <p className="text-xs font-gotham-light sm:text-md text-[#ee6e73] mt-1">
//               up to 60 words maximum
//             </p>
//           </div>

//           <div className="flex items-center mt-4">
//             <Image
//               src={SubmitFormIllustration}
//               alt="Colorful Graphic"
//               width={60}
//               height={60}
//               className="mr-4"
//             />
//             <button
//               type="submit"
//               className="bg-[#124e66] font-gotham-rounded-bold text-white px-4 py-2 ml-[-1.3rem] mb-[1.2rem] rounded-full text-sm sm:text-base hover:bg-[#0e3e51] transition duration-300"
//             >
//               Next
//             </button>
//           </div>
//         </form>

//         {/* Desktop Image Section with Zoom */}
//         <div className="hidden sm:flex w-1/3 flex-col items-center mt-8">
//           <div className="relative w-full aspect-[4/4]">

//             <Image
//               ref={mainImageRef}
//               src={imageSources[currentImageIndex]}
//               alt={`Pouch View ${currentImageIndex + 1}`}
//               width={250}
//               height={350}
//               className="rounded max-w-[250px] max-h-[350px] object-contain mx-auto"
//               onMouseMove={handleMouseMove}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             />
//             {isHovered && (
//               <>
//                 <div
//                   ref={hoverBoxRef}
//                   className="absolute z-30 pointer-events-none"
//                   style={{ width: '100px', height: '100px' }}
//                 >
//                   <Image src={hoverbox} alt="Hover box" className="w-full h-full" />
//                 </div>
//                 <div
//                   ref={zoomRef}
//                   className="absolute top-0 left-full ml-4 w-full h-[350px] bg-white shadow-xl border-2 z-40"
//                   style={{
//                     backgroundImage: `url(${imageSources[currentImageIndex]})`,
//                     backgroundSize: '200%',
//                     backgroundRepeat: 'no-pass'
//                   }}
//                 />
//               </>
//             )}
//           </div>
//           <div className="text-[#ee6e73] font-gotham-light text-xs sm:text-sm mt-4">
//             {currentImageIndex === 0 ? 'Front' : 'Back'}
//           </div>

//           {/* Image Selector Buttons for Desktop */}
//           <div className="flex space-x-2 mt-2">
//             {imageSources.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentImageIndex(index)}
//                 className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-[#ee6e73]' : 'bg-gray-300'
//                   }`}
//               />
//             ))}
//           </div>
//           <div className="text-[#ee6e73] text-sm mt-2 font-gotham-light">
//             Hover over the image to zoom in
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
