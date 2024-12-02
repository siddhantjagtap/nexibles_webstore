import Footer from '@/components/Home/Footer';
import Navbar from '@/components/Home/Navbar';
import React from 'react';

function TrackingPage() {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow mb-6 px-4">
          <h1 className="md:text-4xl text-2xl font-gotham-bold text-[#db5c3c] text-center md:mt-24 mt-32">
            Order Tracking
          </h1>
          <section className="max-w-4xl mx-auto md:mt-12 mt-4 p-6 bg-white shadow-md border-[#db5c3c] border border-2 rounded-md">
            <h2 className="text-2xl font-gotham-book text-gray-700 text-center mb-6">
              Track Your Order
            </h2>
            <form className="flex flex-col gap-6 items-center">
              <input
                type="text"
                placeholder="Enter your tracking ID"
                className="w-full md:w-3/4 p-3 rounded-md border border-gray-300 focus:outline-none  font-gotham-light"
              />
              <button
                type="button"
                className="bg-[#db5c3c] hover:bg-[#b84e32] text-white px-6 py-3 rounded-md font-gotham-book"
              >
                Track Order
              </button>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    );
}

export default TrackingPage;
