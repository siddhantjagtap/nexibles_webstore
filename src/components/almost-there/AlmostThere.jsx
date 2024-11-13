"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import SubmitFormIllustration from "../../../public/Home/Submit-Form-Illustration.svg";

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
  const existingImageUrl = `https://nexiblesapp.barecms.com/uploads/${imageFileName}`;

  useEffect(() => {
    async function fetchProductImage() {
      try {
        const response = await fetch(
          `https://nexiblesapp.barecms.com/api/productimages/${pouchId}`
        );
        const data = await response.json();
        if (data.data.length > 0) {
          setImage2(data.data[0].image_url);
        }
      } catch (error) {
        console.error("Error fetching image2:", error);
      }
    }

    if (pouchId) {
      fetchProductImage();
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
    <div className="min-h-screen pt-16 lg:pt-24 bg-white px-4 md:py-8">
      <button
        onClick={() => window.history.back()}
        className="text-[#124e66] ml-2 sm:ml-4 font-gotham-rounded-bold text-sm sm:text-base"
      >
        ← Back
      </button>
      <h1 className="text-2xl sm:text-3xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-4 mb-6 sm:mt-6 sm:mb-8">
        Almost There
      </h1>
      <div className="max-w-6xl flex flex-col sm:flex-row sm:px-[10rem] px-4">
        {/* Image section for mobile screens */}
        <div className="flex flex-col items-center w-full sm:hidden mb-6">
          {pouchId && existingImageUrl && (
            <Image
              src={existingImageUrl}
              alt="Selected Pouch"
              width={160}
              height={240}
              className="rounded max-w-[160px] max-h-[240px] object-contain"
            />
          )}

          {image2 && (
            <div className="flex flex-col items-center text-center mt-4">
              <Image
                src={`https://nexiblesapp.barecms.com/uploads/${image2}`}
                alt="Back of Pouch"
                width={160}
                height={240}
                className="rounded max-w-[160px] max-h-[240px] object-contain"
              />
              <div className="text-[#ee6e73] text-xs mt-2">Back</div>
            </div>
          )}
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
              className="bg-[#124e66] font-gotham-rounded-bold text-white px-4 py-2 mb-[1rem] ml-[-1.3rem] rounded-full text-sm sm:text-base hover:bg-[#0e3e51] transition duration-300"
            >
              Next
            </button>
          </div>
        </form>

        {/* Image section for desktop/tablet screens */}
        <div className="hidden sm:flex w-1/3 flex-col items-center mt-8">
          {pouchId && (
            <div className="flex items-center justify-between w-full">
              <div className="text-center">
                <Image
                  src={existingImageUrl}
                  alt="Selected Pouch"
                  width={250}
                  height={350}
                  className="rounded max-w-[250px] max-h-[350px] object-contain"
                />
                <div className="text-[#ee6e73] font-gotham-light text-xs sm:text-sm mt-2">
                  Front
                </div>
              </div>
              {image2 && (
                <div className="text-center ml-4">
                  <Image
                    src={`https://nexiblesapp.barecms.com/uploads/${image2}`}
                    alt="Back of Pouch"
                    width={250}
                    height={350}
                    className="rounded max-w-[250px] max-h-[350px] object-contain"
                  />
                  <div className="text-[#ee6e73] text-xs font-gotham-light sm:text-sm mt-2">
                    Back
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Image from "next/image";
// import SubmitFormIllustration from "../../../public/Home/Submit-Form-Illustration.svg";

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

//   useEffect(() => {
//     // Retrieve `image2` from the product images API based on `pouchId`
//     async function fetchProductImage() {
//       try {
//         const response = await fetch(
//           `https://nexiblesapp.barecms.com/api/productimages/${pouchId}`
//         );
//         const data = await response.json();
//         if (data.data.length > 0) {
//           setImage2(data.data[0].image_url); // Assuming `imageFileName` is the correct field
//         }
//       } catch (error) {
//         console.error("Error fetching image2:", error);
//       }
//     }

//     if (pouchId) {
//       fetchProductImage();
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
//     <div className="min-h-screen pt-16 lg:pt-24 bg-white px-4 md:py-8">
//       <button
//         onClick={() => window.history.back()}
//         className="text-[#124e66] ml-2 sm:ml-4 font-gotham-rounded-bold text-sm sm:text-base"
//       >
//         ← Back
//       </button>
//       <h1 className="text-2xl sm:text-3xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-4 mb-6 sm:mt-6 sm:mb-8">
//         Almost There
//       </h1>
//       <div className="max-w-6xl flex flex-col sm:flex-row sm:px-[10rem] px-4">
//         {/* Image section for mobile screens */}
//         <div className="flex flex-col items-center w-full sm:hidden mb-6">
//           {pouchId && (
//             <Image
//               src={existingImageUrl}
//               alt="Selected Pouch"
//               width={160}
//               height={240}
//               className="rounded max-w-[160px] max-h-[240px] object-contain"
//             />
//           )}
//           {image2 && (
//             <div className="flex flex-col items-center text-center mt-4">
//               <Image
//                 src={`https://nexiblesapp.barecms.com/uploads/${image2}`}
//                 alt="Back of Pouch"
//                 width={160}
//                 height={240}
//                 className="rounded max-w-[160px] max-h-[240px] object-contain"
//               />
//               <div className="text-[#ee6e73] text-xs mt-2">Back</div>
//             </div>
//           )}
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
//               className="bg-[#124e66] font-gotham-rounded-bold text-white px-4 py-2 mb-[1rem] ml-[-1.3rem] rounded-full text-sm sm:text-base hover:bg-[#0e3e51] transition duration-300"
//             >
//               Next
//             </button>
//           </div>
//         </form>

//         {/* Image section for desktop/tablet screens */}
//         <div className="hidden sm:flex w-1/3 flex-col items-center mt-8">
//           {pouchId && (
//             <div className="flex items-center justify-between w-full">
//               <div className="text-center">
//                 <Image
//                   src={existingImageUrl}
//                   alt="Selected Pouch"
//                   width={250}
//                   height={350}
//                   className="rounded max-w-[250px] max-h-[350px] object-contain"
//                 />
//                 <div className="text-[#ee6e73] font-gotham-light text-xs sm:text-sm mt-2">
//                   Front
//                 </div>
//               </div>
//               {image2 && (
//                 <div className="text-center ml-4">
//                   <Image
//                     src={`https://nexiblesapp.barecms.com/uploads/${image2}`}
//                     alt="Back of Pouch"
//                     width={250}
//                     height={350}
//                     className="rounded max-w-[250px] max-h-[350px] object-contain"
//                   />
//                   <div className="text-[#ee6e73] text-xs font-gotham-light sm:text-sm mt-2">
//                     Back
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState,useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Image from "next/image";
// import SubmitFormIllustration from "../../../public/Home/Submit-Form-Illustration.svg";

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

//   useEffect(() => {
//     // Retrieve `image2` from the product images API based on `pouchId`
//     async function fetchProductImage() {
//       try {
//         const response = await fetch(
//           `https://nexiblesapp.barecms.com/api/productimages/${pouchId}`
//         );
//         const data = await response.json();
//         if (data.data.length > 0) {
//           setImage2(data.data[0].image_url); // Assuming `imageFileName` is the correct field
//         }
//       } catch (error) {
//         console.error("Error fetching image2:", error);
//       }
//     }

//     if (pouchId) {
//       fetchProductImage();
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
//     const currentItem = cart.find(item => item.id === parseInt(pouchId, 10));
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
//     <div className="min-h-screen bg-white px-4 py-8 mt-[5rem]">
//       <button
//         onClick={() => window.history.back()}
//         className="text-[#124e66] ml-[1rem] font-bold"
//       >
//         ← Back
//       </button>
//       <h1 className="text-4xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-6 mb-8">
//         Almost There
//       </h1>
//       <div className="max-w-4xl mx-auto flex flex-col lg:flex-row">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full lg:w-2/3 lg:pr-8 mb-8 lg:mb-0"
//         >
//           <div className="mb-6">
//             <h2 className="text-2xl font-gotham-medium text-[#d1585a] mb-2">
//               Add your picture
//             </h2>
//             <p className="text-sm font-gotham-light text-[#d1585a] mb-2">
//               (This adds another personalised touch. You can put a picture of
//               your family, pet, or yourself depending on the occasion. If not
//               required, please leave it empty.)
//             </p>
//             {/* Custom file input */}
//             <label className="relative w-full">
//               <span className="block p-2 pl-4 border border-[#68a398] rounded-3xl font-gotham-light text-gray-400 w-full cursor-pointer">
//                 {picture || "Upload here"}
//               </span>
//               <input
//                 type="file"
//                 onChange={handlePictureUpload}
//                 accept=".jpeg,.jpg,.png,.heic,.svg"
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               />
//             </label>

//             <p className="text-sm  font-gotham-light text-[#d1585a] mt-1">
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
//           <div className="mb-6">
//             <h2 className="text-2xl font-gotham-medium text-[#d1585a] mb-2">
//               Add list of receivers
//             </h2>
//             <p className="text-sm font-gotham-light text-[#d1585a] mb-2">
//               (This should include the names to be printed on the bottom of the
//               pouch. If not required, please leave it empty.)
//             </p>
//             {/* Custom file input for receivers */}
//             <label className="relative w-full">
//               <span className="block p-2 pl-4 border border-[#68a398] rounded-3xl font-gotham-light text-gray-400 w-full cursor-pointer">
//                 {receivers || "Upload here"}
//               </span>
//               <input
//                 type="file"
//                 onChange={handleReceiversUpload}
//                 accept=".xlsx,.xls"
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               />
//             </label>

//             <p className=" font-gotham-light text-sm text-[#d1585a] mt-1">
//               Acceptable formats: Excel (.xlsx, .xls). Please keep the size
//               under 5MB.Please keep size under 5MB.
//             </p>
//             {/* <p className=" font-gotham-light text-sm text-[#d1585a] mt-1">

//             </p> */}
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
//               width={80}
//               height={80}
//               className=""
//             />
//             <button
//               type="submit"
//               className="bg-[#124e66] font-gotham-rounded-bold text-white mb-12 px-6 py-2 rounded-full hover:bg-[#0e3e51] transition duration-300"
//             >
//               Next
//             </button>
//           </div>
//         </form>
//         <div className="w-full lg:w-1/3 lg:mt-[3rem] flex justify-center lg:block">
//           {pouchId && (
//             <div className="flex justify-center">
//               <Image
//                 src={`https://nexiblesapp.barecms.com/uploads/${imageFileName}`}
//                 alt="Selected Pouch"
//                 width={300}
//                 height={400}
//                 className="rounded mr-4"
//               />
//               {image2 && (
//                 <Image
//                   src={`https://nexiblesapp.barecms.com/uploads/${image2}`}
//                   alt="Second Image"
//                   width={300}
//                   height={400}
//                   className="rounded"
//                 />
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
