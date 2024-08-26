import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundImage: "url('/Home/nexibles-1.png')" }}>
      <h1 className="text-4xl mt-12 font-gotham-light font-bold text-white text-center mb-6">About NEXIBLES</h1>
      <div className="flex items-center justify-center p-4">
        <div className="w-[90%] bg-white p-6 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Next generation flexIBLES</h2>
          <p className="mb-4">
            Under the brand name - 'NEXt generation flexIBLES', we look forward to taking the idea of flexible packaging to the next level by bringing in digital printing as a revolutionary alternative to conventional processes of producing flexible packaging. We utilize the room for experimentation and creativity to help clients with high yielding and quick-quality packaging solutions.
          </p>
          <p className="mb-4">
            With an efficient team of experts and experienced professionals, we provide converters and end-users with a wide range of custom flexible packaging solutions, including pouches, shrink sleeves, labels, and roll stock. Our broad range of product packaging solutions enables us to meet the demands of a diverse range of market segments.
          </p>
          <p className="mb-4">
            Our in-house Quality Control lab also ensures that each produced batch satisfies the most stringent quality requirements that the industry demands and the product deserves.
          </p>
          <p className="mb-4">
            A fully equipped in-house pre-press division translates into quality of design & layouts, all under the qualified and watchful eyes of our team.
          </p>
        </div>
      </div>
    </div>
  );
}