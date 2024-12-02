import React from "react";
import BirdIllustration from "../../../public/About_Us_Page/About_Us_Bird_Illustration.svg";

export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/About_Us_Page/About Us Background.png')",
      }}
    >
      <div className="min-h-screen sm:bg-[url('/About_Us_Page/About Us Background.png')] sm:bg-cover sm:bg-center sm:bg-no-repeat bg-[url('/Contact_Us_Page/Contact Us Background.png')]">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <div className="items-center justify-center text-center pt-32 md:pt-32 gap-6 md:gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-gotham-bold mb-4 text-[#f9e2b2]">
              Personalise, Pack, Present
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-gotham-bold mb-4 text-[#f9e2b2]">
              The Future of Gifting
            </h3>
            <div className="max-w-4xl text-white text-center font-gotham-bold md:mt-8 ">
              <p className="md:text-xl lg:text-xl leading-snug mb-2 ">
                {`Welcome to NexiGifting! At NexiGifting, we believe in creating moments.
                As India’s first platform offering personalised stand-up pouches, we’ve attempted to turn the art of gift-giving into a canvas for your imagination, designed for posterity.
                Our goal is to carry this out with creativity, speed, & precision.`}
              </p>
              <p className="text-base md:text-xl lg:text-xl leading-snug mb-2 font-gotham-bold">
                {`Whether it’s a birthday surprise, a Diwali celebration, or a wedding keepsake, we make sure your gifts reflect your vision - wrapped in style, crafted with love & designed for longevity & reusability.
                With flexible order quantities, starting from just 50 pouches, we give you the freedom to create, personalise & gift without limits.
                NexiGifting is where innovation & imagination come together - from design to delivery, making every gift an unforgettable moment.`}
              </p>
            </div>
          </div>

          {/* Second Section (By Nexibles) */}
          <div className="relative flex flex-col items-center text-center py-8 md:py-8">
            <div className="max-w-4xl text-white font-gotham-bold">
              <h2 className="text-base md:text-xl lg:text-xl mb-2 font-gotham-bold ">
                <a href="https://www.nexibles.com" target="_blank" rel="noopener noreferrer">
                  {`By Nexibles`}
                </a>
              </h2>
              <p className="text-base md:text-xl lg:text-xl leading-snug mb-2">
                {`Our parent brand,`}
              </p>
              <p className="text-base md:text-xl lg:text-xl leading-snug mb-4 ">
                {`NEXt generation flexIBLES, is taking flexible packaging to the next level.
                We bring the future of packaging to you with cutting-edge digital printing, offering fast, creative, & sustainable solutions for brands & companies of all sizes.
                From custom pouches to shrink sleeves & more, every product is carefully designed to meet your unique needs, with a quality control process that ensures perfection in every batch.
                At Nexibles, your ideas meet our innovation, & together, we create packaging solutions that speak volumes.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
