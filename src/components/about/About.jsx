import React from 'react';
import BirdIllustration from '../../../public/Home/Bird-Illustration.svg';

export default function About() {
  return (
    <div 
      className="min-h-screen p-8"
      style={{
        backgroundImage: "url('/About_Us_Page/Abou_Us_Background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-5xl font-gotham-light font-bold text-white text-center mt-10 mb-12">
        About NEXIBLES
      </h1>
      
      {/* First Section with Text on Left and Image at Bottom Left */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 text-white">
          <h2 className="text-6xl font-semibold mb-8">
            Next Generation FlexIBLES
          </h2>
          <p className="text-4xl leading-relaxed mb-8">
            Under the brand name - NEXt generation flexIBLES, we look forward to taking the idea of flexible packaging to the next level by bringing in digital printing as a revolutionary alternative to conventional processes of producing flexible packaging.
          </p>
          <p className="text-4xl leading-relaxed mb-8">
            We utilize the room for experimentation and creativity to help clients with high yielding and quick-quality packaging solutions.
          </p>
        </div>
        {/* Image positioned at the bottom left */}
        <div className="absolute left-0 bottom-0 lg:w-1/2">
          <img 
            src={BirdIllustration} 
            alt="Bird Illustration" 
            className="w-60 md:w-80 lg:w-[300px] lg:h-auto"
          />
        </div>
      </div>

      {/* Second Section with Image on the Left and Text on the Right */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 mt-24">
        <div className="lg:w-1/2 text-white">
          <p className="text-4xl leading-relaxed mb-8">
            With an efficient team of experts and experienced professionals, we provide converters and end-users with a wide range of custom flexible packaging solutions, including pouches, shrink sleeves, labels, and roll stock. Our broad range of product packaging solutions enables us to meet the demands of a diverse range of market segments.
          </p>
          <p className="text-4xl leading-relaxed mb-8">
            Our in-house Quality Control lab also ensures that each produced batch satisfies the most stringent quality requirements that the industry demands and the product deserves.
          </p>
          <p className="text-4xl leading-relaxed mb-8">
            A fully equipped in-house pre-press division translates into quality of design & layouts, all under the qualified and watchful eyes of our team.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img 
            src={BirdIllustration} 
            alt="Bird Illustration" 
            className="w-60 md:w-80 lg:w-[300px] lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
