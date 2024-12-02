"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import SubmitFormIllustration from "../../../public/Home/Submit-Form-Illustration.svg";
import hoverbox from "../../../public/Home/hoverbox.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function AlmostThere() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pouchId = searchParams.get("pouchId");
  const imageFileName = searchParams.get("image")?.replace(/%20/g, "-");
  const [picture, setPicture] = useState(null);
  const [receivers, setReceivers] = useState(null);
  const [skipPicture, setSkipPicture] = useState(false);
  const [skipReceivers, setSkipReceivers] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const size = searchParams.get("size");
  const [image2, setImage2] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const existingImageUrl = `https://nexiblesapp.barecms.com/uploads/${imageFileName}`;

  const [isHovered, setIsHovered] = useState(false);
  const mainImageRef = useRef(null);
  const zoomRef = useRef(null);
  const hoverBoxRef = useRef(null);

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
    async function fetchProductImages() {
      try {
        const response = await fetch(
          `https://nexiblesapp.barecms.com/api/productimages/${pouchId}`
        );
        const data = await response.json();
        setProductImages(data.data);
      } catch (error) {
        console.error("Error fetching product images:", error);
      }
    }

    if (pouchId) {
      fetchProductImages();
    }
  }, [pouchId]);
  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("File", file);

    try {
      const response = await fetch(
        "https://nexiblesapp.barecms.com/api/product/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        return result.data.originalname;
      } else {
        console.error("File upload failed");
        return null;
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const handlePictureUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedFileName = await handleFileUpload(file);
      if (uploadedFileName) {
        setPicture(uploadedFileName);
        setErrorMessage("");
      }
    }
  };

  const handleReceiversUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedFileName = await handleFileUpload(file);
      if (uploadedFileName) {
        setReceivers(uploadedFileName);
        setErrorMessage("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!picture && !receivers && !skipPicture && !skipReceivers) {
      setErrorMessage(
        "Please upload at least one of the fields (picture or receivers), or skip one of them."
      );
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const currentItem = cart.find((item) => item.id === parseInt(pouchId, 10));
    if (currentItem) {
      setImage2(currentItem.image2);
    }
    const updatedCart = cart.map((item) => {
      if (item.id === parseInt(pouchId, 10)) {
        return {
          ...item,
          uploaded_picture: skipPicture ? "Not uploaded" : picture,
          uploaded_receivers: skipReceivers ? "Not uploaded" : receivers,
        };
      }
      return item;
    });

    if (!cart.some((item) => item.id === parseInt(pouchId, 10))) {
      const newItem = {
        id: parseInt(pouchId, 10),
        size: size,
        uploaded_picture: skipPicture
          ? "Not uploaded"
          : picture || "Not uploaded",
        uploaded_receivers: skipReceivers
          ? "Not uploaded"
          : receivers || "Not uploaded",
      };
      updatedCart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    router.push(
      `/quantity-review?pouchId=${pouchId}&size=${size}&image=${encodeURIComponent(
        imageFileName
      )}`
    );
  };

  return (
    <div className="min-h-screen pt-28 lg:pt-24 bg-white px-4 md:py-8">
      <button
        onClick={() => window.history.back()}
        className="text-[#124e66] ml-2 sm:ml-4 font-gotham-rounded-bold text-sm sm:text-base"
      >
        ← Back
      </button>
      <h1 className="text-2xl sm:text-3xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-4 mb-6 sm:mt-6 sm:mb-8">
        Almost There
      </h1>
      <div className="max-w-6xl md:ml-[-3rem] flex flex-col sm:flex-row sm:px-[10rem] px-4">
        {/* Image section for mobile screens */}
        {/* Image section for mobile screens with Swiper */}
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
              <SwiperSlide key={index} className="flex justify-center mb-8">
                <div className="relative w-full flex flex-col items-center">
                  <Image
                    src={src}
                    alt={`Pouch View ${index + 1}`}
                    width={160}
                    height={240}
                    className="rounded max-w-[160px] max-h-[240px] object-contain mx-auto"
                  />
                  <div className="text-[#ee6e73] text-xs mt-4">
                    {index === 0 ? "Front" : "Back"}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <form onSubmit={handleSubmit} className="w-full sm:w-2/3 mb-8 sm:pr-8">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2">
              Add your picture
            </h2>
            <p className="text-sm font-gotham-light text-[#ee6e73] mb-2">
              (This adds another personalised touch. You can put a picture of
              your family, pet, or yourself depending on the occasion. If not
              required, please leave it empty.)
            </p>
            <label className="relative w-full">
              <span className="block p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light text-gray-400 w-full cursor-pointer">
                {picture || "Upload here"}
              </span>
              <input
                type="file"
                onChange={handlePictureUpload}
                accept=".jpeg,.jpg,.png,.heic,.svg"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
            <p className="text-sm font-gotham-light text-[#ee6e73] mt-1">
              Acceptable picture formats: .jpeg, .jpg, .png, .heic, .svg. Please
              keep the size under 5MB.
            </p>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
                checked={skipPicture}
                onChange={(e) => setSkipPicture(e.target.checked)}
              />
              <span className="text-[#124e66] font-gotham-light">Skip</span>
            </label>
          </div>

          <div className="mb-4 sm:mb-6">
            <h2 className="text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2">
              Add list of receivers
            </h2>
            <p className="text-sm font-gotham-light text-[#ee6e73] mb-2">
              (This should include the names to be printed on the bottom of the
              pouch. If not required, please leave it empty.)
            </p>
            <label className="relative w-full">
              <span className="block p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light text-gray-400 w-full cursor-pointer">
                {receivers || "Upload here"}
              </span>
              <input
                type="file"
                onChange={handleReceiversUpload}
                accept=".xlsx,.xls"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
            <p className="text-sm font-gotham-light text-[#ee6e73] mt-1">
              Acceptable formats: Excel (.xlsx, .xls). Please keep the size
              under 5MB.
            </p>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
                checked={skipReceivers}
                onChange={(e) => setSkipReceivers(e.target.checked)}
              />
              <span className="text-[#124e66] font-gotham-light">Skip</span>
            </label>
          </div>

          <div className="flex items-center justify-end">
            <Image
              src={SubmitFormIllustration}
              alt="Colorful Graphic"
              width={60}
              height={60}
              className="mr-4"
            />
            <button
              type="submit"
              className="bg-[#124e66] font-gotham-rounded-bold text-white px-4 py-2 mb-[1rem] ml-[-1.3rem] rounded-full text-sm sm:text-base hover:bg-[#0e3e51] transition duration-300"
            >
              Next
            </button>
          </div>
        </form>

        {/* Image section for desktop/tablet screens */}
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
// import SubmitFormIllustration from "../../../public/Home/Submit-Form-Illustration.svg";
// import hoverbox from '../../../public/Home/hoverbox.png';
// export default function AlmostThere() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const pouchId = searchParams.get("pouchId");
//   const imageFileName = searchParams.get("image")?.replace(/%20/g, "-");
//   const [picture, setPicture] = useState(null);
//   const [receivers, setReceivers] = useState(null);
//   const [skipPicture, setSkipPicture] = useState(false);
//   const [skipReceivers, setSkipReceivers] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const size = searchParams.get("size");
//   const [image2, setImage2] = useState(null);
//   const [productImages, setProductImages] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const existingImageUrl = `https://nexiblesapp.barecms.com/uploads/${imageFileName}`;

//   const [isHovered, setIsHovered] = useState(false);
//   const mainImageRef = useRef(null);
//   const zoomRef = useRef(null);
//   const hoverBoxRef = useRef(null);

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
//     async function fetchProductImages() {
//       try {
//         const response = await fetch(
//           `https://nexiblesapp.barecms.com/api/productimages/${pouchId}`
//         );
//         const data = await response.json();
//         setProductImages(data.data);
//       } catch (error) {
//         console.error("Error fetching product images:", error);
//       }
//     }

//     if (pouchId) {
//       fetchProductImages();
//     }
//   }, [pouchId]);
//   const handleFileUpload = async (file) => {
//     const formData = new FormData();
//     formData.append("File", file);

//     try {
//       const response = await fetch(
//         "https://nexiblesapp.barecms.com/api/product/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (response.ok) {
//         const result = await response.json();
//         return result.data.originalname;
//       } else {
//         console.error("File upload failed");
//         return null;
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       return null;
//     }
//   };

//   const handlePictureUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const uploadedFileName = await handleFileUpload(file);
//       if (uploadedFileName) {
//         setPicture(uploadedFileName);
//         setErrorMessage("");
//       }
//     }
//   };

//   const handleReceiversUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const uploadedFileName = await handleFileUpload(file);
//       if (uploadedFileName) {
//         setReceivers(uploadedFileName);
//         setErrorMessage("");
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!picture && !receivers && !skipPicture && !skipReceivers) {
//       setErrorMessage(
//         "Please upload at least one of the fields (picture or receivers), or skip one of them."
//       );
//       return;
//     }

//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const currentItem = cart.find((item) => item.id === parseInt(pouchId, 10));
//     if (currentItem) {
//       setImage2(currentItem.image2);
//     }
//     const updatedCart = cart.map((item) => {
//       if (item.id === parseInt(pouchId, 10)) {
//         return {
//           ...item,
//           uploaded_picture: skipPicture ? "Not uploaded" : picture,
//           uploaded_receivers: skipReceivers ? "Not uploaded" : receivers,
//         };
//       }
//       return item;
//     });

//     if (!cart.some((item) => item.id === parseInt(pouchId, 10))) {
//       const newItem = {
//         id: parseInt(pouchId, 10),
//         size: size,
//         uploaded_picture: skipPicture
//           ? "Not uploaded"
//           : picture || "Not uploaded",
//         uploaded_receivers: skipReceivers
//           ? "Not uploaded"
//           : receivers || "Not uploaded",
//       };
//       updatedCart.push(newItem);
//     }

//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     router.push(
//       `/quantity-review?pouchId=${pouchId}&size=${size}&image=${encodeURIComponent(
//         imageFileName
//       )}`
//     );
//   };

//   return (
//     <div className="min-h-screen pt-28 lg:pt-24 bg-white px-4 md:py-8">
//       <button
//         onClick={() => window.history.back()}
//         className="text-[#124e66] ml-2 sm:ml-4 font-gotham-rounded-bold text-sm sm:text-base"
//       >
//         ← Back
//       </button>
//       <h1 className="text-2xl sm:text-3xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-4 mb-6 sm:mt-6 sm:mb-8">
//         Almost There
//       </h1>
//       <div className="max-w-6xl md:ml-[-3rem] flex flex-col sm:flex-row sm:px-[10rem] px-4">
//         {/* Image section for mobile screens */}
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
//             {currentImageIndex === 0 ? "Front" : "Back"}
//           </div>

//           <div className="flex space-x-2 mt-2">
//             {imageSources.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentImageIndex(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   index === currentImageIndex ? "bg-[#ee6e73]" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="w-full sm:w-2/3 mb-8 sm:pr-8">
//           <div className="mb-4 sm:mb-6">
//             <h2 className="text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2">
//               Add your picture
//             </h2>
//             <p className="text-sm font-gotham-light text-[#ee6e73] mb-2">
//               (This adds another personalised touch. You can put a picture of
//               your family, pet, or yourself depending on the occasion. If not
//               required, please leave it empty.)
//             </p>
//             <label className="relative w-full">
//               <span className="block p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light text-gray-400 w-full cursor-pointer">
//                 {picture || "Upload here"}
//               </span>
//               <input
//                 type="file"
//                 onChange={handlePictureUpload}
//                 accept=".jpeg,.jpg,.png,.heic,.svg"
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               />
//             </label>
//             <p className="text-sm font-gotham-light text-[#ee6e73] mt-1">
//               Acceptable picture formats: .jpeg, .jpg, .png, .heic, .svg. Please
//               keep the size under 5MB.
//             </p>
//             <label className="flex items-center mt-2">
//               <input
//                 type="checkbox"
//                 className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
//                 checked={skipPicture}
//                 onChange={(e) => setSkipPicture(e.target.checked)}
//               />
//               <span className="text-[#124e66] font-gotham-light">Skip</span>
//             </label>
//           </div>

//           <div className="mb-4 sm:mb-6">
//             <h2 className="text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2">
//               Add list of receivers
//             </h2>
//             <p className="text-sm font-gotham-light text-[#ee6e73] mb-2">
//               (This should include the names to be printed on the bottom of the
//               pouch. If not required, please leave it empty.)
//             </p>
//             <label className="relative w-full">
//               <span className="block p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light text-gray-400 w-full cursor-pointer">
//                 {receivers || "Upload here"}
//               </span>
//               <input
//                 type="file"
//                 onChange={handleReceiversUpload}
//                 accept=".xlsx,.xls"
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               />
//             </label>
//             <p className="text-sm font-gotham-light text-[#ee6e73] mt-1">
//               Acceptable formats: Excel (.xlsx, .xls). Please keep the size
//               under 5MB.
//             </p>
//             <label className="flex items-center mt-2">
//               <input
//                 type="checkbox"
//                 className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
//                 checked={skipReceivers}
//                 onChange={(e) => setSkipReceivers(e.target.checked)}
//               />
//               <span className="text-[#124e66] font-gotham-light">Skip</span>
//             </label>
//           </div>

//           <div className="flex items-center justify-end">
//             <Image
//               src={SubmitFormIllustration}
//               alt="Colorful Graphic"
//               width={60}
//               height={60}
//               className="mr-4"
//             />
//             <button
//               type="submit"
//               className="bg-[#124e66] font-gotham-rounded-bold text-white px-4 py-2 mb-[1rem] ml-[-1.3rem] rounded-full text-sm sm:text-base hover:bg-[#0e3e51] transition duration-300"
//             >
//               Next
//             </button>
//           </div>
//         </form>

//         {/* Image section for desktop/tablet screens */}
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
//                   style={{ width: "100px", height: "100px" }}
//                 >
//                   <Image
//                     src={hoverbox}
//                     alt="Hover box"
//                     className="w-full h-full"
//                   />
//                 </div>
//                 <div
//                   ref={zoomRef}
//                   className="absolute top-0 left-full ml-4 w-full h-[350px] bg-white shadow-xl border-2 z-40"
//                   style={{
//                     backgroundImage: `url(${imageSources[currentImageIndex]})`,
//                     backgroundSize: "200%",
//                     backgroundRepeat: "no-pass",
//                   }}
//                 />
//               </>
//             )}
//           </div>
//           <div className="text-[#ee6e73] font-gotham-light text-xs sm:text-sm mt-4">
//             {currentImageIndex === 0 ? "Front" : "Back"}
//           </div>

//           {/* Image Selector Buttons for Desktop */}
//           <div className="flex space-x-2 mt-2">
//             {imageSources.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentImageIndex(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   index === currentImageIndex ? "bg-[#ee6e73]" : "bg-gray-300"
//                 }`}
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
