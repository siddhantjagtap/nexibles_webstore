"use client";
import Checkout from "@/components/Checkout/Checkout";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/utils/authContext";

function Page() {  // Keep the function name lowercase
  const [defaultAddress, setDefaultAddress] = useState();
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) return;
        let id = user?.result?.customerId || user?.customerId;
        const response = await fetch(
          `https://nexiblesapp.barecms.com/api/customerAddress/default/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data, "DefaultAddress");
        setDefaultAddress(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <>
      <Navbar />
      <Checkout defaultAddress={defaultAddress} />
      <Footer />
    </>
  );
}

export default Page;  // Export it directly as lowercase, React will still recognize it as a component
