"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/authContext';
import Envelope from "../../../public/Thank_You_Page/Thank_You_Page_Illustration.svg";
import Butterfly from "../../../public/Thank_You_Page/Thank_You_Page_Butterflies.svg";
import Link from "next/link";

function Thankyou() {
  const router = useRouter();
  const { user } = useAuth();
  const [orderNo, setOrderNo] = useState(null);

  useEffect(() => {
    const cleanupOrder = () => {
      try {
        if (typeof window !== 'undefined') {
          const currentOrderNo = localStorage.getItem('orderNo');

          if (!currentOrderNo) {
            router.push('/');
            return;
          }

          // Set the order number before cleaning up
          setOrderNo(currentOrderNo);

          // Clear all order-related items from localStorage
          localStorage.removeItem('cart');
          localStorage.removeItem('appliedCoupon');
          localStorage.removeItem('subtotal');
          //localStorage.removeItem('orderNo');
        }
      } catch (error) {
        console.error("Error during cleanup:", error);
        router.push('/');
      }
    };

    cleanupOrder();
  }, [router]);

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover"
      style={{
        backgroundImage: "url('/Thank_You_Page/Thank You Page Background.png')",
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
          <h1 className="text-4xl sm:text-6xl lg:text-[5rem] font-bold text-yellow-400 lg:ml-6 mt-4 lg:mt-0">
            Thank You!
          </h1>
          <img
            src={Butterfly.src}
            alt="Butterfly 1"
            className="absolute right-[2rem] sm:right-[6rem] lg:right-[14rem] top-20 sm:top-32 w-[5rem] sm:w-[7rem] lg:w-[10rem] h-[5rem] sm:h-[7rem] lg:h-[10rem]"
          />
        </div>
        {orderNo && (
          <Link href={`/my-orderhistory`}>
            <div className="mt-6 mb-6">
              <p className="text-xl sm:text-2xl text-white font-semibold">
                Order Number: <span className="text-yellow-300">{orderNo}</span>
              </p>
            </div>
          </Link>
        )}
        <div className="mt-">
          <p className="text-lg sm:text-xl lg:text-xl text-white mb-4 md:font-semibold">
            For ordering from NexiGifting. You shall receive an email soon
            confirming your order and the{" "}
            <span className="font-bold text-yellow-300">tracking link</span>{" "}
            with it.
          </p>
          <div className="text-lg sm:text-xl lg:text-xl text-white mb-4 md:font-semibold">
            If you have any questions or need assistance, feel free to reach out
            to us at{" "}
            <a href="mailto:sales@artnext.in" className="text-yellow-300">
              sales@artnext.in
            </a>
          </div>
          <p className="text-lg sm:text-xl lg:text-xl text-white md:font-semibold">
            Thanks again, and we hope you enjoy your personalised pouches!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;