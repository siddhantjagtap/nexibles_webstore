"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "@/utils/authContext";
import { useRouter } from "next/navigation";
import Loader from "../comman/Loader";
import { toast } from "react-toastify";
import ForgotPassword from "./ForgotPassword";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const NEXIBLE_URL = "https://nexiblesapp.barecms.com";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${NEXIBLE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: loginEmail,
          password: loginPassword,
        }),
      });
      const data = await response.json();
      console.log("data", data);
      if (data.status === "success") {
        const token = data.token;
        login(data.data);
        toast.success("Login Successful");
        router.push("/");
        localStorage.setItem("token", token);
      } else {
        toast.error(data.status);
      }
    } catch (error) {
      console.log("Invalid Request", error);
    } finally {
      setLoading(false);
    }
  };

  const [userDetails, setUserDetails] = useState({
    customerId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    cName: "",
    gender: "",
    houseno: "",
    floor: "",
    address: "",
    address2: "",
    landmark: "",
    city: "",
    prov: "",
    zip: "",
    country: "",
    phone: "",
    emailAddress: "",
    mobile: "",
    mobile2: "",
    company: "",
    title: "",
    workPhone: "",
    dateOfBirth: "",
    anniversary: "",
    newsletter: "",
    ipaddress: "",
    subsms: "",
    addedDate: "",
    addedBy: "",
    refby: "",
    datasource: "",
    occupation: "",
    designation: "",
    contactpref: "",
    pref: "",
    activatedon: "",
    securecode: "",
    active: "",
    password: "",
    profImage: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${NEXIBLE_URL}/api/login/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        console.log("data", data);
        toast.success("Registered successfully");
        setUserDetails({
          customerId: "",
          firstName: "",
          middleName: "",
          lastName: "",
          cName: "",
          gender: "",
          houseno: "",
          floor: "",
          address: "",
          address2: "",
          landmark: "",
          city: "",
          prov: "",
          zip: "",
          country: "",
          phone: "",
          emailAddress: "",
          mobile: "",
          mobile2: "",
          company: "",
          title: "",
          workPhone: "",
          dateOfBirth: "",
          anniversary: "",
          newsletter: "",
          ipaddress: "",
          subsms: "",
          addedDate: "",
          addedBy: "",
          refby: "",
          datasource: "",
          occupation: "",
          designation: "",
          contactpref: "",
          pref: "",
          activatedon: "",
          securecode: "",
          active: "",
          password: "",
          profImage: "",
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    console.log("details", userDetails);
  }, [userDetails]);

  return (
    <>
      {loading && <Loader btnLoad={false} />}
      <div className="flex items-center justify-center min-h-screen bg-white px-4 md:px-0">
        <div className="w-full max-w-md p-6 md:p-8 rounded-lg ">
          <h2 className="text-3xl md:text-4xl font-gotham-rounded-bold text-center text-[#db5c3c] mb-6 md:mb-8 mt-16 md:mt-24">
            Sign in
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl font-gotham-light md:text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl font-gotham-light md:text-lg"
            />
            <button
              type="submit"
              className="w-full bg-[#db5c3c]  text-white py-2 md:py-3 rounded-2xl font-gotham-rounded-bold md:text-lg"
            >
              Log In
            </button>
          </form>
          <p onClick={() => setShowModal(true)} className="text-center my-4 text-[#197d8e] font-gotham-bold">
            Forgot your password?
          </p>  
          <div className="text-center my-4 text-[#197d8e] font-gotham-bold">
            Or create a new account
          </div>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                required
                value={userDetails.firstName}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, firstName: e.target.value });
                }}
                className="w-full md:w-1/2 p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl font-gotham-light md:text-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={userDetails.lastName}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, lastName: e.target.value });
                }}
                className="w-full md:w-1/2 p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl font-gotham-light md:text-lg"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              value={userDetails.emailAddress}
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  emailAddress: e.target.value,
                });
              }}
              className="w-full p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl font-gotham-light md:text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={userDetails.password}
              onChange={(e) => {
                setUserDetails({ ...userDetails, password: e.target.value });
              }}
              className="w-full p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl font-gotham-light md:text-lg"
            />
            <button
              type="submit"
              className="w-full bg-[#db5c3c]  text-white py-2 md:py-3 rounded-2xl font-gotham-rounded-bold md:text-lg"
            >
              Create Account
            </button>
          </form>
        </div>
        {showModal && <ForgotPassword onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
}

export default Login;
