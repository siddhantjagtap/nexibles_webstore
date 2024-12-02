"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";import hoverbox from '../../../public/Home/hoverbox.png';


export default function QuantityReview() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pouchId = searchParams.get("pouchId");
  const size = searchParams.get("size");
  const imageFileName = searchParams.get("image");
  const DEFAULT_QUANTITY = "50";
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY);
  const [totalPrice, setTotalPrice] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [uploadedPicture, setUploadedPicture] = useState("");
  const [uploadedReceivers, setUploadedReceivers] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [image2, setImage2] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const existingImageUrl = `https://nexiblesapp.barecms.com/uploads/${imageFileName}`;

  const priceChart = {
    nexismall: {
      50: 65,
      100: 55,
      200: 45,
      300: 35,
    },
    neximedium: {
      50: 75,
      100: 65,
      200: 55,
      300: 45,
    },
  };

  const [isHovered, setIsHovered] = useState(false);
  const mainImageRef = useRef(null);
  const zoomRef = useRef(null);
  const hoverBoxRef = useRef(null);

  // Zoom functionality methods
  const handleMouseMove = (e) => {
    if (!mainImageRef.current || !zoomRef.current || !hoverBoxRef.current) return;

    const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const hoverBoxSize = 100;
    const hoverBoxLeft = Math.max(0, Math.min(e.clientX - left - hoverBoxSize / 2, width - hoverBoxSize));
    const hoverBoxTop = Math.max(0, Math.min(e.clientY - top - hoverBoxSize / 2, height - hoverBoxSize));

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
      ? [`https://nexiblesapp.barecms.com/uploads/${productImages[0].image_url}`]
      : [])
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

  useEffect(() => {
    const DEFAULT_QUANTITY = "50";
    const initialPrice = calculatePrice(DEFAULT_QUANTITY, size);
    setTotalPrice(initialPrice);

    // Get existing cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(
      (item) => item.id === Number(pouchId) && item.productSize === size
    );

    if (existingProduct) {
      // Preserve existing data but ensure default quantity and price
      const updatedProduct = {
        ...existingProduct,
        quantity: Number(DEFAULT_QUANTITY),
        price: initialPrice / Number(DEFAULT_QUANTITY),
        totalPrice: initialPrice
      };

      // Update the product in cart
      const updatedCart = cart.map(item =>
        item.id === Number(pouchId) && item.productSize === size
          ? updatedProduct
          : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Update states
      setQuantity(updatedProduct.quantity);
      setCustomerName(existingProduct.customer_name || "");
      setCustomMessage(existingProduct.custom_message || "");
      setUploadedPicture(existingProduct.uploaded_picture || "");
      setUploadedReceivers(existingProduct.uploaded_receivers || "");
      setProductDetails(updatedProduct);
      setTotalPrice(updatedProduct.totalPrice);
    } else {
      const pricePerUnit = initialPrice / Number(DEFAULT_QUANTITY);
      const newProduct = {
        id: Number(pouchId),
        productSize: size,
        quantity: Number(DEFAULT_QUANTITY),
        price: pricePerUnit,
        totalPrice: initialPrice
      };

      cart.push(newProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
      setProductDetails(newProduct);
      setQuantity(DEFAULT_QUANTITY);
    }
  }, [pouchId, size]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const numQuantity = Number(quantity);
    if (numQuantity < 50) {
      alert("Quantity must be at least 50.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart"));
    const existingProductIndex = cart.findIndex(
      (item) => item.id === Number(pouchId) && item.productSize === size
    );

    const updatedProduct = {
      id: Number(pouchId),
      name: productDetails.name || "Unnamed Product",
      price: productDetails.price || "0",
      category: productDetails.category || "Uncategorized",
      quantity: numQuantity,
      custom_message: customMessage,
      customer_name: customerName,
      image: imageFileName,
      uploaded_picture: uploadedPicture || null,
      uploaded_receivers: uploadedReceivers || null,
      productSize: size,
      totalPrice: calculatePrice(numQuantity, size),
      isFinalProduct: true,
    };

    if (existingProductIndex !== -1) {
      cart[existingProductIndex] = {
        ...cart[existingProductIndex],
        ...updatedProduct,
      };
    } else {
      cart.push(updatedProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/my-cart");
  };

  const calculatePrice = (qty, selectedSize) => {
    // Early return if no size
    if (!selectedSize) return 0;

    const prices = selectedSize.toLowerCase() === "nexismall"
      ? priceChart.nexismall
      : priceChart.neximedium;

    const quantity = Number(qty);
    let rate;

    if (quantity >= 300) rate = prices[300];
    else if (quantity >= 200) rate = prices[200];
    else if (quantity >= 100) rate = prices[100];
    else if (quantity >= 50) rate = prices[50];
    else return 0;

    return quantity * rate;
  };

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);

    // Calculate new total price based on quantity
    const newTotal = calculatePrice(Number(newQuantity), size);
    setTotalPrice(newTotal);

    // Get current cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find if product exists in cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === Number(pouchId) && item.productSize === size
    );

    // Calculate price per unit
    const pricePerUnit = newTotal / Number(newQuantity);

    // Create updated product object with only quantity-related changes
    const updatedProduct = {
      ...cart[existingProductIndex],
      quantity: Number(newQuantity),
      price: pricePerUnit,
      totalPrice: newTotal
    };

    // Update cart array
    if (existingProductIndex !== -1) {
      cart[existingProductIndex] = updatedProduct;
    } else {
      cart.push(updatedProduct);
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const QuantitySelect = () => {
    const quantities = [50, 100, 200, 300];

    return (
      <div class="relative">
        <select
          value={quantity}
          onChange={handleQuantityChange}
          class="appearance-none w-full md:w-48 h-14 md:h-12 px-4 md:px-4 py-2 md:py-0 bg-white border-2 border-[#ee6e73] text-[#124e66] rounded-lg md:rounded-full cursor-pointer hover:border-[#d1585a] focus:outline-none focus:border-[#d1585a] font-gotham-light text-base md:text-lg"
        >
          {quantities.map((qty) => (
            <option key={qty} value={qty}>
              {qty} pouches
            </option>
          ))}
        </select>
        <div class="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 md:w-auto"
          >
            <path
              d="M1 1L9 9L17 1"
              stroke="#ee6e73"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedPicture(file.name);
    }
  };

  const handleReceiverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedReceivers(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-28 lg:pt-24 px-4 md:py-8">
      <button
        onClick={() => router.back()}
        className="text-[#124e66] ml-2 sm:ml-4 font-gotham-rounded-bold text-sm sm:text-base"
      >
        ← Back
      </button>

      <h1 className="text-2xl sm:text-3xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-4 mb-6 sm:mt-6 sm:mb-8">
        Quantity and Review
      </h1>

      <div className="max-w-6xl md:ml-[-3rem] flex flex-col sm:flex-row sm:px-[10rem] px-4">
        {/* Mobile Product Preview */}
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
        {/* <div className="flex flex-col items-center w-full sm:hidden mb-8">
          <div className="relative w-full ">
            <Image
              src={imageSources[currentImageIndex]}
              alt={`Pouch View ${currentImageIndex + 1}`}
              width={160}
              height={240}
              className="rounded max-w-[160px] max-h-[240px] object-contain mx-auto"
            />
          </div>
          <div className="text-[#ee6e73] text-xs mt-2">
            {currentImageIndex === 0 ? "Front" : "Back"}
          </div>

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
        </div> */}

        <form onSubmit={handleSubmit} className="w-full sm:w-2/3 mb-8 sm:pr-8">
          <div className="mb-6">
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="quantity"
                className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
              >
                Quantity
              </label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <QuantitySelect />
                <span className="text-[#d1585a] text-xs sm:text-sm font-gotham-light">
                  (minimum order of 50 pouches)
                </span>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-[#197d8e]">
                  <span className="text-[#d1585a] font-gotham-medium text-sm sm:text-base">
                    Rate per pouch
                  </span>
                  <span className="text-[#124e66] font-gotham-medium">
                    ₹
                    {totalPrice > 0
                      ? (totalPrice / Number(quantity)).toFixed(2)
                      : 0}
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-[#ee6e73]/10 rounded-lg">
                  <span className="text-[#d1585a] font-gotham-medium text-sm sm:text-base">
                    Total Price
                  </span>
                  <span className="text-[#124e66] font-gotham-bold">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="customerName"
                  className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
                >
                  Add your name
                </label>
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light"
                  placeholder="eg. Karan & Jinal Doshi"
                />
              </div>

              <div>
                <label
                  htmlFor="customMessage"
                  className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
                >
                  Add your message
                </label>
                <textarea
                  id="customMessage"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="w-full p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light h-32 sm:h-60"
                  placeholder="Your message here"
                  maxLength={60}
                  required
                />
                <p className="text-xs sm:text-sm text-[#ee6e73] mt-1 font-gotham-light">
                  up to 60 words maximum
                </p>
              </div>

              <div>
                <h2 className="text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2">
                  Add your picture
                </h2>
                <p className="text-xs text-[#d1585a] mb-2 font-gotham-light">
                  (This adds another personalized touch. You can put a picture
                  of family, pet, or yourself depending on the occasion. If not
                  required, please leave it empty.)
                </p>
                <label className="relative w-full">
                  <span className="block p-2 pl-4 border border-[#197d8e] rounded-lg sm:rounded-3xl text-gray-400 w-full cursor-pointer font-gotham-light">
                    {uploadedPicture || "Upload here"}
                  </span>
                  <input
                    type="file"
                    accept=".jpeg,.jpg,.png,.heic,.svg"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </label>
                <p className="text-xs sm:text-sm text-[#d1585a] mt-1 font-gotham-light">
                  Acceptable picture formats: .jpeg, .jpg, .png, .heic, .svg
                </p>
                <p className="text-xs sm:text-sm text-[#d1585a] font-gotham-light">
                  Please keep the size under 5MB
                </p>
              </div>

              <div>
                <h2 className="text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2">
                  Add list of receivers
                </h2>
                <label className="relative w-full">
                  <span className="block p-2 pl-4 border border-[#197d8e] rounded-lg sm:rounded-3xl text-gray-400 w-full cursor-pointer font-gotham-light">
                    {uploadedReceivers || "Upload here"}
                  </span>
                  <input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleReceiverChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </label>
                <p className="text-xs sm:text-sm text-[#d1585a] mt-1 font-gotham-light">
                  Acceptable formats: Excel (.xlsx, .xls)
                </p>
                <p className="text-xs sm:text-sm text-[#d1585a] font-gotham-light">
                  Please keep the size under 5MB
                </p>
              </div>
            </div>

            <p className="text-[#ee6e73] font-gotham-rounded-bold text-sm sm:text-base mt-6 mb-4">
              Please make sure you have uploaded the correct picture & document
              & there are no spelling errors anywhere!
            </p>

            <label className="flex items-center mb-6">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
                required
              />
              <span className="text-[#124e66] text-sm sm:text-base">
                I have reviewed and approved my design
              </span>
            </label>

            <div className="flex items-center justify-end">
              <Image
                src="/Home/Submit-Form-Illustration.svg"
                alt="Submit Illustration"
                width={60}
                height={60}
                className="mr-4"
              />
              <button
                type="submit"
                className="bg-[#124e66] text-white px-4 py-2 ml-[-1.3rem] mb-[1.2rem] rounded-full font-gotham-rounded-bold text-sm sm:text-base hover:bg-[#0e3e51] transition duration-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </form>

        {/* Desktop/Tablet Product Preview */}
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