import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import hoverbox from '../../../../public/home/hoverbox.png';
const ProductImages = ({ productImages, defaultImage, onImageClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const mainImageRef = useRef(null);
  const zoomRef = useRef(null);
  const hoverBoxRef = useRef(null);

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

  const handleImageClick = (index) => {
    onImageClick(index);
  };

  return (
    <div className="flex flex-col w-full md:w-1/2">
      <div className="relative w-full aspect-[4/4]">
        {/* Mobile View: Swiper Carousel with Pagination */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
            onSwiper={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
          >
            {productImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-full object-contain mb-2"
                  onClick={() => handleImageClick(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop View: Static Image with Hover Zoom */}
        <div className="hidden md:block">
          <div
            className="absolute inset-0 z-10 bg-white opacity-0 transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.7 : 0 }}
          />
          <img
            ref={mainImageRef}
            src={productImages[currentImageIndex] || defaultImage}
            alt="Product Image"
            className="w-full h-[70vh] object-contain relative z-20"
            onClick={() => handleImageClick(currentImageIndex)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {isHovered && (
            <>
              <div
                ref={hoverBoxRef}
                className="absolute z-30 pointer-events-none"
                style={{ width: '100px', height: '100px' }}
              >
                <img src={hoverbox.src} alt="Hover box" className="w-full h-full" />
              </div>
              <div
                ref={zoomRef}
                className="absolute top-0 left-full ml-4 w-full h-[70vh] bg-white shadow-xl border-2 z-40"
                style={{
                  backgroundImage: `url(${productImages[currentImageIndex] || defaultImage})`,
                  backgroundSize: '200%',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </>
          )}
        </div>
      </div>

      {/* Thumbnail Row for Desktop View */}
      <div className="hidden md:flex mt-4 space-x-2 overflow-x-auto">
        {productImages.map((image, index) => (
          <div
            key={index}
            className={`w-16 h-16 flex-shrink-0 cursor-pointer border-2 ${
              index === currentImageIndex ?  'border-[#30384E]' : 'border-gray-300 hover:border-[#30384E]'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
